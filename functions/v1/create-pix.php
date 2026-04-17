<?php
// ============================================================
//  create-pix.php  —  Gerador de PIX via Paradise API
//  Caminho esperado pelo JS: ../functions/v1/create-pix.php
// ============================================================

header('Content-Type: application/json');
header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Methods: POST, OPTIONS');
header('Access-Control-Allow-Headers: Content-Type');

// Preflight OPTIONS
if ($_SERVER['REQUEST_METHOD'] === 'OPTIONS') {
    http_response_code(200);
    exit;
}

// ── CONFIGURAÇÕES ────────────────────────────────────────────
// Preencha com suas credenciais do portal Paradise
define('PARADISE_SECRET_KEY', 'sk_0e849b07c1d2a4945cd7145e1df7ba194fef1e6d7e3fae261cd1044ca3bdabd5');
define('PARADISE_API_URL',    'https://multi.paradisepags.com/api/v1/transaction.php');

// Hash do produto cadastrado no painel Paradise (obrigatório
// a menos que você use source = api_externa abaixo)
define('PRODUCT_HASH', 'prod_3580cb94aaadf7ac');

// Deixe como 'checkout' ou troque por 'api_externa' se os
// produtos NÃO estiverem cadastrados na plataforma Paradise
define('TRANSACTION_SOURCE', 'checkout');

// URL de postback/webhook (deixe vazio para não enviar)
define('POSTBACK_URL', '');
// ─────────────────────────────────────────────────────────────

// Aceita somente POST
if ($_SERVER['REQUEST_METHOD'] !== 'POST') {
    http_response_code(405);
    echo json_encode(['error' => 'Método não permitido']);
    exit;
}

// Lê e decodifica o body JSON enviado pelo checkout JS
$body = file_get_contents('php://input');
$data = json_decode($body, true);

if (!$data) {
    http_response_code(400);
    echo json_encode(['error' => 'Body JSON inválido']);
    exit;
}

// ── Extrai e valida os campos obrigatórios ───────────────────
$amount   = isset($data['amount'])   ? floatval($data['amount'])   : null;
$orderId  = isset($data['orderId'])  ? trim($data['orderId'])       : null;
$customer = isset($data['customer']) ? $data['customer']           : [];
$items    = isset($data['items'])    ? $data['items']              : [];
$tracking = isset($data['tracking']) ? $data['tracking']           : null;

$missingFields = [];
if (!$amount || $amount <= 0)              $missingFields[] = 'amount';
if (!$orderId)                             $missingFields[] = 'orderId';
if (empty($customer['name']))              $missingFields[] = 'customer.name';
if (empty($customer['email']))             $missingFields[] = 'customer.email';
if (empty($customer['phone']))             $missingFields[] = 'customer.phone';
if (empty($customer['document']))          $missingFields[] = 'customer.document';

if (!empty($missingFields)) {
    http_response_code(400);
    echo json_encode([
        'error'   => 'Campos obrigatórios ausentes',
        'missing' => $missingFields
    ]);
    exit;
}

// ── Converte valor para centavos ─────────────────────────────
// O JS envia o total em reais (ex: 129.90); a Paradise exige centavos
$amountInCents = intval(round($amount * 100));

// ── Monta descrição a partir dos itens do carrinho ───────────
$description = 'Pedido';
if (!empty($items)) {
    $names = array_column($items, 'name');
    $description = implode(', ', array_slice($names, 0, 3));
    if (count($names) > 3) {
        $description .= ' e mais ' . (count($names) - 3) . ' item(s)';
    }
}

// ── Limpa document (somente números) ────────────────────────
$document = preg_replace('/\D/', '', $customer['document']);

// ── Monta o payload para a Paradise ─────────────────────────
$payload = [
    'amount'      => $amountInCents,
    'description' => $description,
    'reference'   => $orderId,
    'customer'    => [
        'name'     => $customer['name'],
        'email'    => $customer['email'],
        'phone'    => preg_replace('/\D/', '', $customer['phone']),
        'document' => $document,
    ],
];

// Inclui productHash (ou source api_externa)
if (TRANSACTION_SOURCE === 'api_externa') {
    $payload['source'] = 'api_externa';
} else {
    $payload['productHash'] = PRODUCT_HASH;
}

// Postback URL opcional
if (!empty(POSTBACK_URL)) {
    $payload['postback_url'] = POSTBACK_URL;
}

// Tracking (UTMs) — repassado diretamente do JS
if (!empty($tracking) && is_array($tracking)) {
    $allowedTrackingKeys = ['utm_source','utm_medium','utm_campaign','utm_content','utm_term','src','sck'];
    $trackingFiltered = array_intersect_key($tracking, array_flip($allowedTrackingKeys));
    if (!empty($trackingFiltered)) {
        $payload['tracking'] = $trackingFiltered;
    }
}

// ── Chama a API Paradise ─────────────────────────────────────
$ch = curl_init(PARADISE_API_URL);
curl_setopt_array($ch, [
    CURLOPT_RETURNTRANSFER => true,
    CURLOPT_POST           => true,
    CURLOPT_HTTPHEADER     => [
        'Content-Type: application/json',
        'X-API-Key: ' . PARADISE_SECRET_KEY,
    ],
    CURLOPT_POSTFIELDS     => json_encode($payload),
    CURLOPT_TIMEOUT        => 30,
]);

$response   = curl_exec($ch);
$httpStatus = curl_getinfo($ch, CURLINFO_HTTP_CODE);
$curlError  = curl_error($ch);
curl_close($ch);

if ($curlError) {
    http_response_code(502);
    echo json_encode(['error' => 'Erro de conexão com o gateway: ' . $curlError]);
    exit;
}

$paradiseData = json_decode($response, true);

// ── Verifica resposta da Paradise ────────────────────────────
if ($httpStatus !== 200 || !isset($paradiseData['status']) || $paradiseData['status'] !== 'success') {
    $errorMsg = isset($paradiseData['message']) ? $paradiseData['message'] : 'Erro desconhecido do gateway';
    http_response_code(502);
    echo json_encode(['error' => $errorMsg, 'gateway_response' => $paradiseData]);
    exit;
}

// ── Retorna ao checkout JS no formato que ele espera ─────────
// JS espera: pixCode, qrCodeBase64, transactionId, gateway, expiresAt
http_response_code(200);
echo json_encode([
    'pixCode'      => $paradiseData['qr_code']         ?? null,
    'qrCodeBase64' => $paradiseData['qr_code_base64']  ?? null,
    'transactionId'=> $paradiseData['transaction_id']  ?? null,
    'gateway'      => $paradiseData['acquirer']         ?? 'ParadiseBank',
    'expiresAt'    => $paradiseData['expires_at']       ?? null,
    'amount'       => $paradiseData['amount']           ?? $amountInCents,
    'orderId'      => $orderId,
]);