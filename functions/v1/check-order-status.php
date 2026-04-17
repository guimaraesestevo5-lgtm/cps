<?php
/**
 * check-order-status.php
 * Verifica o status de pagamento de um pedido consultando a API Paradise.
 * 
 * Chamado pelo frontend via POST com: { "order_number": "..." }
 * Retorna: { "status": "paid" } ou { "status": "pending" } (ou outros)
 */

header('Content-Type: application/json');
header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Methods: POST, OPTIONS');
header('Access-Control-Allow-Headers: Content-Type');

// Preflight CORS
if ($_SERVER['REQUEST_METHOD'] === 'OPTIONS') {
    http_response_code(200);
    exit;
}

// Configurações — ajuste conforme seu ambiente
define('PARADISE_API_URL', 'https://multi.paradisepags.com/api/v1/query.php');
define('PARADISE_API_KEY', 'sk_0e849b07c1d2a4945cd7145e1df7ba194fef1e6d7e3fae261cd1044ca3bdabd5'); // ← substitua pela sua Secret Key

// Aceita apenas POST
if ($_SERVER['REQUEST_METHOD'] !== 'POST') {
    http_response_code(405);
    echo json_encode(['error' => 'Método não permitido.']);
    exit;
}

// Lê e valida o body JSON
$body = file_get_contents('php://input');
$data = json_decode($body, true);

if (empty($data['order_number'])) {
    http_response_code(400);
    echo json_encode(['error' => 'order_number é obrigatório.']);
    exit;
}

$orderNumber = trim($data['order_number']);

// Consulta a API Paradise usando o external_id (= order_number enviado na criação)
$url = PARADISE_API_URL . '?' . http_build_query([
    'action'      => 'list_transactions',
    'external_id' => $orderNumber,
]);

$ch = curl_init();
curl_setopt_array($ch, [
    CURLOPT_URL            => $url,
    CURLOPT_RETURNTRANSFER => true,
    CURLOPT_TIMEOUT        => 15,
    CURLOPT_HTTPHEADER     => [
        'X-API-Key: ' . PARADISE_API_KEY,
        'Content-Type: application/json',
    ],
]);

$response = curl_exec($ch);
$httpCode = curl_getinfo($ch, CURLINFO_HTTP_CODE);
$curlError = curl_error($ch);
curl_close($ch);

// Erro de conexão
if ($curlError) {
    http_response_code(502);
    echo json_encode(['error' => 'Erro ao conectar com a API de pagamentos.']);
    exit;
}

// Erro HTTP da API
if ($httpCode !== 200) {
    http_response_code(502);
    echo json_encode(['error' => 'Resposta inválida da API de pagamentos.', 'http_code' => $httpCode]);
    exit;
}

$transactions = json_decode($response, true);

// A API retorna um array; se vazio, pedido não encontrado
if (!is_array($transactions) || count($transactions) === 0) {
    echo json_encode(['status' => 'not_found']);
    exit;
}

// Pega a transação mais recente (primeira do array)
$transaction = $transactions[0];
$paradiseStatus = strtolower($transaction['status'] ?? 'unknown');

/*
 * Mapeamento de status Paradise → status esperado pelo frontend:
 *
 * Paradise  | Retorno     | Significado
 * ----------|-------------|-------------------------------
 * approved  | paid        | Pagamento confirmado ✓
 * pending   | pending     | Aguardando pagamento
 * processing| pending     | Sendo processado
 * failed    | failed      | Falhou / expirou
 * refunded  | refunded    | Reembolsado
 * chargeback| chargeback  | Contestação aberta
 * under_review | pending  | Em análise manual
 */
$statusMap = [
    'approved'     => 'paid',
    'pending'      => 'pending',
    'processing'   => 'pending',
    'under_review' => 'pending',
    'failed'       => 'failed',
    'refunded'     => 'refunded',
    'chargeback'   => 'chargeback',
];

$mappedStatus = $statusMap[$paradiseStatus] ?? 'pending';

echo json_encode([
    'status'          => $mappedStatus,
    'paradise_status' => $paradiseStatus,
    'transaction_id'  => $transaction['id'] ?? null,
    'amount'          => $transaction['amount'] ?? null,
    'updated_at'      => $transaction['updated_at'] ?? null,
]);
