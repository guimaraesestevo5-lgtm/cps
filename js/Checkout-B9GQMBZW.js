import {
    c as wt,
    r as V,
    d as mt,
    g as Ct,
    j as i,
    L as we,
    P as Ce,
    b as St,
    v as Tt,
    f as Ot,
    H as De,
    m as Le,
    F as Ve,
    R as ze,
    a as Be,
    l as je,
    w as At,
    t as It,
    M as Rt,
    x as $t,
    y as Et
} from "./index-CUZ_dR-Y.js";
import {
    I as P
} from "./input-B72cDx3q.js";
import {
    Z as Se
} from "./zap-_JJPAEC_.js";
import {
    C as Zt
} from "./check-DHyMUcCX.js";
import {
    A as Fe
} from "./arrow-left-BIF_Hs6O.js";
import {
    C as qe
} from "./clock-DPj0RD13.js";
import {
    L as Ue
} from "./lock-C_t2iSXR.js";
import {
    U as We
} from "./user-C9YtyNch.js";
import {
    C as ee
} from "./circle-check-CBCAFW5Z.js";
import {
    L as Je
} from "./loader-circle-Blv0QqyP.js";
import {
    Q as Pt
} from "./qr-code-jT0L_qcS.js";
/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Mt = wt("Rocket", [
    ["path", {
        d: "M4.5 16.5c-1.5 1.26-2 5-2 5s3.74-.5 5-2c.71-.84.7-2.13-.09-2.91a2.18 2.18 0 0 0-2.91-.09z",
        key: "m3kijz"
    }],
    ["path", {
        d: "m12 15-3-3a22 22 0 0 1 2-3.95A12.88 12.88 0 0 1 22 2c0 2.72-.78 7.5-6 11a22.35 22.35 0 0 1-4 2z",
        key: "1fmvmk"
    }],
    ["path", {
        d: "M9 12H4s.55-3.03 2-4c1.62-1.08 5 0 5 0",
        key: "1f8sc4"
    }],
    ["path", {
        d: "M12 15v5s3.03-.55 4-2c1.08-1.62 0-5 0-5",
        key: "qeys4"
    }]
]);
var j;
(function(s) {
    s.assertEqual = a => {};

    function e(a) {}
    s.assertIs = e;

    function t(a) {
        throw new Error
    }
    s.assertNever = t, s.arrayToEnum = a => {
        const n = {};
        for (const o of a) n[o] = o;
        return n
    }, s.getValidEnumValues = a => {
        const n = s.objectKeys(a).filter(d => typeof a[a[d]] != "number"),
            o = {};
        for (const d of n) o[d] = a[d];
        return s.objectValues(o)
    }, s.objectValues = a => s.objectKeys(a).map(function(n) {
        return a[n]
    }), s.objectKeys = typeof Object.keys == "function" ? a => Object.keys(a) : a => {
        const n = [];
        for (const o in a) Object.prototype.hasOwnProperty.call(a, o) && n.push(o);
        return n
    }, s.find = (a, n) => {
        for (const o of a)
            if (n(o)) return o
    }, s.isInteger = typeof Number.isInteger == "function" ? a => Number.isInteger(a) : a => typeof a == "number" && Number.isFinite(a) && Math.floor(a) === a;

    function r(a, n = " | ") {
        return a.map(o => typeof o == "string" ? `'${o}'` : o).join(n)
    }
    s.joinValues = r, s.jsonStringifyReplacer = (a, n) => typeof n == "bigint" ? n.toString() : n
})(j || (j = {}));
var Ge;
(function(s) {
    s.mergeShapes = (e, t) => ({
        ...e,
        ...t
    })
})(Ge || (Ge = {}));
const m = j.arrayToEnum(["string", "nan", "number", "integer", "float", "boolean", "date", "bigint", "symbol", "function", "undefined", "null", "array", "object", "unknown", "promise", "void", "never", "map", "set"]),
    B = s => {
        switch (typeof s) {
            case "undefined":
                return m.undefined;
            case "string":
                return m.string;
            case "number":
                return Number.isNaN(s) ? m.nan : m.number;
            case "boolean":
                return m.boolean;
            case "function":
                return m.function;
            case "bigint":
                return m.bigint;
            case "symbol":
                return m.symbol;
            case "object":
                return Array.isArray(s) ? m.array : s === null ? m.null : s.then && typeof s.then == "function" && s.catch && typeof s.catch == "function" ? m.promise : typeof Map < "u" && s instanceof Map ? m.map : typeof Set < "u" && s instanceof Set ? m.set : typeof Date < "u" && s instanceof Date ? m.date : m.object;
            default:
                return m.unknown
        }
    },
    c = j.arrayToEnum(["invalid_type", "invalid_literal", "custom", "invalid_union", "invalid_union_discriminator", "invalid_enum_value", "unrecognized_keys", "invalid_arguments", "invalid_return_type", "invalid_date", "invalid_string", "too_small", "too_big", "invalid_intersection_types", "not_multiple_of", "not_finite"]);
class z extends Error {
    get errors() {
        return this.issues
    }
    constructor(e) {
        super(), this.issues = [], this.addIssue = r => {
            this.issues = [...this.issues, r]
        }, this.addIssues = (r = []) => {
            this.issues = [...this.issues, ...r]
        };
        const t = new.target.prototype;
        Object.setPrototypeOf ? Object.setPrototypeOf(this, t) : this.__proto__ = t, this.name = "ZodError", this.issues = e
    }
    format(e) {
        const t = e || function(n) {
                return n.message
            },
            r = {
                _errors: []
            },
            a = n => {
                for (const o of n.issues)
                    if (o.code === "invalid_union") o.unionErrors.map(a);
                    else if (o.code === "invalid_return_type") a(o.returnTypeError);
                else if (o.code === "invalid_arguments") a(o.argumentsError);
                else if (o.path.length === 0) r._errors.push(t(o));
                else {
                    let d = r,
                        x = 0;
                    for (; x < o.path.length;) {
                        const f = o.path[x];
                        x === o.path.length - 1 ? (d[f] = d[f] || {
                            _errors: []
                        }, d[f]._errors.push(t(o))) : d[f] = d[f] || {
                            _errors: []
                        }, d = d[f], x++
                    }
                }
            };
        return a(this), r
    }
    static assert(e) {
        if (!(e instanceof z)) throw new Error(`Not a ZodError: ${e}`)
    }
    toString() {
        return this.message
    }
    get message() {
        return JSON.stringify(this.issues, j.jsonStringifyReplacer, 2)
    }
    get isEmpty() {
        return this.issues.length === 0
    }
    flatten(e = t => t.message) {
        const t = {},
            r = [];
        for (const a of this.issues)
            if (a.path.length > 0) {
                const n = a.path[0];
                t[n] = t[n] || [], t[n].push(e(a))
            } else r.push(e(a));
        return {
            formErrors: r,
            fieldErrors: t
        }
    }
    get formErrors() {
        return this.flatten()
    }
}
z.create = s => new z(s);
const Te = (s, e) => {
    let t;
    switch (s.code) {
        case c.invalid_type:
            s.received === m.undefined ? t = "Required" : t = `Expected ${s.expected}, received ${s.received}`;
            break;
        case c.invalid_literal:
            t = `Invalid literal value, expected ${JSON.stringify(s.expected,j.jsonStringifyReplacer)}`;
            break;
        case c.unrecognized_keys:
            t = `Unrecognized key(s) in object: ${j.joinValues(s.keys,", ")}`;
            break;
        case c.invalid_union:
            t = "Invalid input";
            break;
        case c.invalid_union_discriminator:
            t = `Invalid discriminator value. Expected ${j.joinValues(s.options)}`;
            break;
        case c.invalid_enum_value:
            t = `Invalid enum value. Expected ${j.joinValues(s.options)}, received '${s.received}'`;
            break;
        case c.invalid_arguments:
            t = "Invalid function arguments";
            break;
        case c.invalid_return_type:
            t = "Invalid function return type";
            break;
        case c.invalid_date:
            t = "Invalid date";
            break;
        case c.invalid_string:
            typeof s.validation == "object" ? "includes" in s.validation ? (t = `Invalid input: must include "${s.validation.includes}"`, typeof s.validation.position == "number" && (t = `${t} at one or more positions greater than or equal to ${s.validation.position}`)) : "startsWith" in s.validation ? t = `Invalid input: must start with "${s.validation.startsWith}"` : "endsWith" in s.validation ? t = `Invalid input: must end with "${s.validation.endsWith}"` : j.assertNever(s.validation) : s.validation !== "regex" ? t = `Invalid ${s.validation}` : t = "Invalid";
            break;
        case c.too_small:
            s.type === "array" ? t = `Array must contain ${s.exact?"exactly":s.inclusive?"at least":"more than"} ${s.minimum} element(s)` : s.type === "string" ? t = `String must contain ${s.exact?"exactly":s.inclusive?"at least":"over"} ${s.minimum} character(s)` : s.type === "number" ? t = `Number must be ${s.exact?"exactly equal to ":s.inclusive?"greater than or equal to ":"greater than "}${s.minimum}` : s.type === "bigint" ? t = `Number must be ${s.exact?"exactly equal to ":s.inclusive?"greater than or equal to ":"greater than "}${s.minimum}` : s.type === "date" ? t = `Date must be ${s.exact?"exactly equal to ":s.inclusive?"greater than or equal to ":"greater than "}${new Date(Number(s.minimum))}` : t = "Invalid input";
            break;
        case c.too_big:
            s.type === "array" ? t = `Array must contain ${s.exact?"exactly":s.inclusive?"at most":"less than"} ${s.maximum} element(s)` : s.type === "string" ? t = `String must contain ${s.exact?"exactly":s.inclusive?"at most":"under"} ${s.maximum} character(s)` : s.type === "number" ? t = `Number must be ${s.exact?"exactly":s.inclusive?"less than or equal to":"less than"} ${s.maximum}` : s.type === "bigint" ? t = `BigInt must be ${s.exact?"exactly":s.inclusive?"less than or equal to":"less than"} ${s.maximum}` : s.type === "date" ? t = `Date must be ${s.exact?"exactly":s.inclusive?"smaller than or equal to":"smaller than"} ${new Date(Number(s.maximum))}` : t = "Invalid input";
            break;
        case c.custom:
            t = "Invalid input";
            break;
        case c.invalid_intersection_types:
            t = "Intersection results could not be merged";
            break;
        case c.not_multiple_of:
            t = `Number must be a multiple of ${s.multipleOf}`;
            break;
        case c.not_finite:
            t = "Number must be finite";
            break;
        default:
            t = e.defaultError, j.assertNever(s)
    }
    return {
        message: t
    }
};
let Dt = Te;

function Lt() {
    return Dt
}
const Vt = s => {
    const {
        data: e,
        path: t,
        errorMaps: r,
        issueData: a
    } = s, n = [...t, ...a.path || []], o = {
        ...a,
        path: n
    };
    if (a.message !== void 0) return {
        ...a,
        path: n,
        message: a.message
    };
    let d = "";
    const x = r.filter(f => !!f).slice().reverse();
    for (const f of x) d = f(o, {
        data: e,
        defaultError: d
    }).message;
    return {
        ...a,
        path: n,
        message: d
    }
};

function u(s, e) {
    const t = Lt(),
        r = Vt({
            issueData: e,
            data: s.data,
            path: s.path,
            errorMaps: [s.common.contextualErrorMap, s.schemaErrorMap, t, t === Te ? void 0 : Te].filter(a => !!a)
        });
    s.common.issues.push(r)
}
class A {
    constructor() {
        this.value = "valid"
    }
    dirty() {
        this.value === "valid" && (this.value = "dirty")
    }
    abort() {
        this.value !== "aborted" && (this.value = "aborted")
    }
    static mergeArray(e, t) {
        const r = [];
        for (const a of t) {
            if (a.status === "aborted") return g;
            a.status === "dirty" && e.dirty(), r.push(a.value)
        }
        return {
            status: e.value,
            value: r
        }
    }
    static async mergeObjectAsync(e, t) {
        const r = [];
        for (const a of t) {
            const n = await a.key,
                o = await a.value;
            r.push({
                key: n,
                value: o
            })
        }
        return A.mergeObjectSync(e, r)
    }
    static mergeObjectSync(e, t) {
        const r = {};
        for (const a of t) {
            const {
                key: n,
                value: o
            } = a;
            if (n.status === "aborted" || o.status === "aborted") return g;
            n.status === "dirty" && e.dirty(), o.status === "dirty" && e.dirty(), n.value !== "__proto__" && (typeof o.value < "u" || a.alwaysSet) && (r[n.value] = o.value)
        }
        return {
            status: e.value,
            value: r
        }
    }
}
const g = Object.freeze({
        status: "aborted"
    }),
    ce = s => ({
        status: "dirty",
        value: s
    }),
    $ = s => ({
        status: "valid",
        value: s
    }),
    He = s => s.status === "aborted",
    Xe = s => s.status === "dirty",
    se = s => s.status === "valid",
    xe = s => typeof Promise < "u" && s instanceof Promise;
var h;
(function(s) {
    s.errToObj = e => typeof e == "string" ? {
        message: e
    } : e || {}, s.toString = e => typeof e == "string" ? e : e == null ? void 0 : e.message
})(h || (h = {}));
class U {
    constructor(e, t, r, a) {
        this._cachedPath = [], this.parent = e, this.data = t, this._path = r, this._key = a
    }
    get path() {
        return this._cachedPath.length || (Array.isArray(this._key) ? this._cachedPath.push(...this._path, ...this._key) : this._cachedPath.push(...this._path, this._key)), this._cachedPath
    }
}
const Qe = (s, e) => {
    if (se(e)) return {
        success: !0,
        data: e.value
    };
    if (!s.common.issues.length) throw new Error("Validation failed but no issues detected.");
    return {
        success: !1,
        get error() {
            if (this._error) return this._error;
            const t = new z(s.common.issues);
            return this._error = t, this._error
        }
    }
};

function b(s) {
    if (!s) return {};
    const {
        errorMap: e,
        invalid_type_error: t,
        required_error: r,
        description: a
    } = s;
    if (e && (t || r)) throw new Error(`Can't use "invalid_type_error" or "required_error" in conjunction with custom error map.`);
    return e ? {
        errorMap: e,
        description: a
    } : {
        errorMap: (o, d) => {
            const {
                message: x
            } = s;
            return o.code === "invalid_enum_value" ? {
                message: x ?? d.defaultError
            } : typeof d.data > "u" ? {
                message: x ?? r ?? d.defaultError
            } : o.code !== "invalid_type" ? {
                message: d.defaultError
            } : {
                message: x ?? t ?? d.defaultError
            }
        },
        description: a
    }
}
class k {
    get description() {
        return this._def.description
    }
    _getType(e) {
        return B(e.data)
    }
    _getOrReturnCtx(e, t) {
        return t || {
            common: e.parent.common,
            data: e.data,
            parsedType: B(e.data),
            schemaErrorMap: this._def.errorMap,
            path: e.path,
            parent: e.parent
        }
    }
    _processInputParams(e) {
        return {
            status: new A,
            ctx: {
                common: e.parent.common,
                data: e.data,
                parsedType: B(e.data),
                schemaErrorMap: this._def.errorMap,
                path: e.path,
                parent: e.parent
            }
        }
    }
    _parseSync(e) {
        const t = this._parse(e);
        if (xe(t)) throw new Error("Synchronous parse encountered promise.");
        return t
    }
    _parseAsync(e) {
        const t = this._parse(e);
        return Promise.resolve(t)
    }
    parse(e, t) {
        const r = this.safeParse(e, t);
        if (r.success) return r.data;
        throw r.error
    }
    safeParse(e, t) {
        const r = {
                common: {
                    issues: [],
                    async: (t == null ? void 0 : t.async) ?? !1,
                    contextualErrorMap: t == null ? void 0 : t.errorMap
                },
                path: (t == null ? void 0 : t.path) || [],
                schemaErrorMap: this._def.errorMap,
                parent: null,
                data: e,
                parsedType: B(e)
            },
            a = this._parseSync({
                data: e,
                path: r.path,
                parent: r
            });
        return Qe(r, a)
    }
    "~validate"(e) {
        var r, a;
        const t = {
            common: {
                issues: [],
                async: !!this["~standard"].async
            },
            path: [],
            schemaErrorMap: this._def.errorMap,
            parent: null,
            data: e,
            parsedType: B(e)
        };
        if (!this["~standard"].async) try {
            const n = this._parseSync({
                data: e,
                path: [],
                parent: t
            });
            return se(n) ? {
                value: n.value
            } : {
                issues: t.common.issues
            }
        } catch (n) {
            (a = (r = n == null ? void 0 : n.message) == null ? void 0 : r.toLowerCase()) != null && a.includes("encountered") && (this["~standard"].async = !0), t.common = {
                issues: [],
                async: !0
            }
        }
        return this._parseAsync({
            data: e,
            path: [],
            parent: t
        }).then(n => se(n) ? {
            value: n.value
        } : {
            issues: t.common.issues
        })
    }
    async parseAsync(e, t) {
        const r = await this.safeParseAsync(e, t);
        if (r.success) return r.data;
        throw r.error
    }
    async safeParseAsync(e, t) {
        const r = {
                common: {
                    issues: [],
                    contextualErrorMap: t == null ? void 0 : t.errorMap,
                    async: !0
                },
                path: (t == null ? void 0 : t.path) || [],
                schemaErrorMap: this._def.errorMap,
                parent: null,
                data: e,
                parsedType: B(e)
            },
            a = this._parse({
                data: e,
                path: r.path,
                parent: r
            }),
            n = await (xe(a) ? a : Promise.resolve(a));
        return Qe(r, n)
    }
    refine(e, t) {
        const r = a => typeof t == "string" || typeof t > "u" ? {
            message: t
        } : typeof t == "function" ? t(a) : t;
        return this._refinement((a, n) => {
            const o = e(a),
                d = () => n.addIssue({
                    code: c.custom,
                    ...r(a)
                });
            return typeof Promise < "u" && o instanceof Promise ? o.then(x => x ? !0 : (d(), !1)) : o ? !0 : (d(), !1)
        })
    }
    refinement(e, t) {
        return this._refinement((r, a) => e(r) ? !0 : (a.addIssue(typeof t == "function" ? t(r, a) : t), !1))
    }
    _refinement(e) {
        return new ae({
            schema: this,
            typeName: v.ZodEffects,
            effect: {
                type: "refinement",
                refinement: e
            }
        })
    }
    superRefine(e) {
        return this._refinement(e)
    }
    constructor(e) {
        this.spa = this.safeParseAsync, this._def = e, this.parse = this.parse.bind(this), this.safeParse = this.safeParse.bind(this), this.parseAsync = this.parseAsync.bind(this), this.safeParseAsync = this.safeParseAsync.bind(this), this.spa = this.spa.bind(this), this.refine = this.refine.bind(this), this.refinement = this.refinement.bind(this), this.superRefine = this.superRefine.bind(this), this.optional = this.optional.bind(this), this.nullable = this.nullable.bind(this), this.nullish = this.nullish.bind(this), this.array = this.array.bind(this), this.promise = this.promise.bind(this), this.or = this.or.bind(this), this.and = this.and.bind(this), this.transform = this.transform.bind(this), this.brand = this.brand.bind(this), this.default = this.default.bind(this), this.catch = this.catch.bind(this), this.describe = this.describe.bind(this), this.pipe = this.pipe.bind(this), this.readonly = this.readonly.bind(this), this.isNullable = this.isNullable.bind(this), this.isOptional = this.isOptional.bind(this), this["~standard"] = {
            version: 1,
            vendor: "zod",
            validate: t => this["~validate"](t)
        }
    }
    optional() {
        return q.create(this, this._def)
    }
    nullable() {
        return ne.create(this, this._def)
    }
    nullish() {
        return this.nullable().optional()
    }
    array() {
        return L.create(this)
    }
    promise() {
        return _e.create(this, this._def)
    }
    or(e) {
        return ve.create([this, e], this._def)
    }
    and(e) {
        return ye.create(this, e, this._def)
    }
    transform(e) {
        return new ae({
            ...b(this._def),
            schema: this,
            typeName: v.ZodEffects,
            effect: {
                type: "transform",
                transform: e
            }
        })
    }
    default (e) {
        const t = typeof e == "function" ? e : () => e;
        return new Ae({
            ...b(this._def),
            innerType: this,
            defaultValue: t,
            typeName: v.ZodDefault
        })
    }
    brand() {
        return new cs({
            typeName: v.ZodBranded,
            type: this,
            ...b(this._def)
        })
    } catch (e) {
        const t = typeof e == "function" ? e : () => e;
        return new Ie({
            ...b(this._def),
            innerType: this,
            catchValue: t,
            typeName: v.ZodCatch
        })
    }
    describe(e) {
        const t = this.constructor;
        return new t({
            ...this._def,
            description: e
        })
    }
    pipe(e) {
        return $e.create(this, e)
    }
    readonly() {
        return Re.create(this)
    }
    isOptional() {
        return this.safeParse(void 0).success
    }
    isNullable() {
        return this.safeParse(null).success
    }
}
const zt = /^c[^\s-]{8,}$/i,
    Bt = /^[0-9a-z]+$/,
    Ft = /^[0-9A-HJKMNP-TV-Z]{26}$/i,
    qt = /^[0-9a-fA-F]{8}\b-[0-9a-fA-F]{4}\b-[0-9a-fA-F]{4}\b-[0-9a-fA-F]{4}\b-[0-9a-fA-F]{12}$/i,
    Ut = /^[a-z0-9_-]{21}$/i,
    Wt = /^[A-Za-z0-9-_]+\.[A-Za-z0-9-_]+\.[A-Za-z0-9-_]*$/,
    Jt = /^[-+]?P(?!$)(?:(?:[-+]?\d+Y)|(?:[-+]?\d+[.,]\d+Y$))?(?:(?:[-+]?\d+M)|(?:[-+]?\d+[.,]\d+M$))?(?:(?:[-+]?\d+W)|(?:[-+]?\d+[.,]\d+W$))?(?:(?:[-+]?\d+D)|(?:[-+]?\d+[.,]\d+D$))?(?:T(?=[\d+-])(?:(?:[-+]?\d+H)|(?:[-+]?\d+[.,]\d+H$))?(?:(?:[-+]?\d+M)|(?:[-+]?\d+[.,]\d+M$))?(?:[-+]?\d+(?:[.,]\d+)?S)?)??$/,
    Gt = /^(?!\.)(?!.*\.\.)([A-Z0-9_'+\-\.]*)[A-Z0-9_+-]@([A-Z0-9][A-Z0-9\-]*\.)+[A-Z]{2,}$/i,
    Ht = "^(\\p{Extended_Pictographic}|\\p{Emoji_Component})+$";
let Ne;
const Xt = /^(?:(?:25[0-5]|2[0-4][0-9]|1[0-9][0-9]|[1-9][0-9]|[0-9])\.){3}(?:25[0-5]|2[0-4][0-9]|1[0-9][0-9]|[1-9][0-9]|[0-9])$/,
    Qt = /^(?:(?:25[0-5]|2[0-4][0-9]|1[0-9][0-9]|[1-9][0-9]|[0-9])\.){3}(?:25[0-5]|2[0-4][0-9]|1[0-9][0-9]|[1-9][0-9]|[0-9])\/(3[0-2]|[12]?[0-9])$/,
    Yt = /^(([0-9a-fA-F]{1,4}:){7,7}[0-9a-fA-F]{1,4}|([0-9a-fA-F]{1,4}:){1,7}:|([0-9a-fA-F]{1,4}:){1,6}:[0-9a-fA-F]{1,4}|([0-9a-fA-F]{1,4}:){1,5}(:[0-9a-fA-F]{1,4}){1,2}|([0-9a-fA-F]{1,4}:){1,4}(:[0-9a-fA-F]{1,4}){1,3}|([0-9a-fA-F]{1,4}:){1,3}(:[0-9a-fA-F]{1,4}){1,4}|([0-9a-fA-F]{1,4}:){1,2}(:[0-9a-fA-F]{1,4}){1,5}|[0-9a-fA-F]{1,4}:((:[0-9a-fA-F]{1,4}){1,6})|:((:[0-9a-fA-F]{1,4}){1,7}|:)|fe80:(:[0-9a-fA-F]{0,4}){0,4}%[0-9a-zA-Z]{1,}|::(ffff(:0{1,4}){0,1}:){0,1}((25[0-5]|(2[0-4]|1{0,1}[0-9]){0,1}[0-9])\.){3,3}(25[0-5]|(2[0-4]|1{0,1}[0-9]){0,1}[0-9])|([0-9a-fA-F]{1,4}:){1,4}:((25[0-5]|(2[0-4]|1{0,1}[0-9]){0,1}[0-9])\.){3,3}(25[0-5]|(2[0-4]|1{0,1}[0-9]){0,1}[0-9]))$/,
    Kt = /^(([0-9a-fA-F]{1,4}:){7,7}[0-9a-fA-F]{1,4}|([0-9a-fA-F]{1,4}:){1,7}:|([0-9a-fA-F]{1,4}:){1,6}:[0-9a-fA-F]{1,4}|([0-9a-fA-F]{1,4}:){1,5}(:[0-9a-fA-F]{1,4}){1,2}|([0-9a-fA-F]{1,4}:){1,4}(:[0-9a-fA-F]{1,4}){1,3}|([0-9a-fA-F]{1,4}:){1,3}(:[0-9a-fA-F]{1,4}){1,4}|([0-9a-fA-F]{1,4}:){1,2}(:[0-9a-fA-F]{1,4}){1,5}|[0-9a-fA-F]{1,4}:((:[0-9a-fA-F]{1,4}){1,6})|:((:[0-9a-fA-F]{1,4}){1,7}|:)|fe80:(:[0-9a-fA-F]{0,4}){0,4}%[0-9a-zA-Z]{1,}|::(ffff(:0{1,4}){0,1}:){0,1}((25[0-5]|(2[0-4]|1{0,1}[0-9]){0,1}[0-9])\.){3,3}(25[0-5]|(2[0-4]|1{0,1}[0-9]){0,1}[0-9])|([0-9a-fA-F]{1,4}:){1,4}:((25[0-5]|(2[0-4]|1{0,1}[0-9]){0,1}[0-9])\.){3,3}(25[0-5]|(2[0-4]|1{0,1}[0-9]){0,1}[0-9]))\/(12[0-8]|1[01][0-9]|[1-9]?[0-9])$/,
    es = /^([0-9a-zA-Z+/]{4})*(([0-9a-zA-Z+/]{2}==)|([0-9a-zA-Z+/]{3}=))?$/,
    ts = /^([0-9a-zA-Z-_]{4})*(([0-9a-zA-Z-_]{2}(==)?)|([0-9a-zA-Z-_]{3}(=)?))?$/,
    ht = "((\\d\\d[2468][048]|\\d\\d[13579][26]|\\d\\d0[48]|[02468][048]00|[13579][26]00)-02-29|\\d{4}-((0[13578]|1[02])-(0[1-9]|[12]\\d|3[01])|(0[469]|11)-(0[1-9]|[12]\\d|30)|(02)-(0[1-9]|1\\d|2[0-8])))",
    ss = new RegExp(`^${ht}$`);

function ft(s) {
    let e = "[0-5]\\d";
    s.precision ? e = `${e}\\.\\d{${s.precision}}` : s.precision == null && (e = `${e}(\\.\\d+)?`);
    const t = s.precision ? "+" : "?";
    return `([01]\\d|2[0-3]):[0-5]\\d(:${e})${t}`
}

function rs(s) {
    return new RegExp(`^${ft(s)}$`)
}

function as(s) {
    let e = `${ht}T${ft(s)}`;
    const t = [];
    return t.push(s.local ? "Z?" : "Z"), s.offset && t.push("([+-]\\d{2}:?\\d{2})"), e = `${e}(${t.join("|")})`, new RegExp(`^${e}$`)
}

function ns(s, e) {
    return !!((e === "v4" || !e) && Xt.test(s) || (e === "v6" || !e) && Yt.test(s))
}

function is(s, e) {
    if (!Wt.test(s)) return !1;
    try {
        const [t] = s.split(".");
        if (!t) return !1;
        const r = t.replace(/-/g, "+").replace(/_/g, "/").padEnd(t.length + (4 - t.length % 4) % 4, "="),
            a = JSON.parse(atob(r));
        return !(typeof a != "object" || a === null || "typ" in a && (a == null ? void 0 : a.typ) !== "JWT" || !a.alg || e && a.alg !== e)
    } catch {
        return !1
    }
}

function os(s, e) {
    return !!((e === "v4" || !e) && Qt.test(s) || (e === "v6" || !e) && Kt.test(s))
}
class F extends k {
    _parse(e) {
        if (this._def.coerce && (e.data = String(e.data)), this._getType(e) !== m.string) {
            const n = this._getOrReturnCtx(e);
            return u(n, {
                code: c.invalid_type,
                expected: m.string,
                received: n.parsedType
            }), g
        }
        const r = new A;
        let a;
        for (const n of this._def.checks)
            if (n.kind === "min") e.data.length < n.value && (a = this._getOrReturnCtx(e, a), u(a, {
                code: c.too_small,
                minimum: n.value,
                type: "string",
                inclusive: !0,
                exact: !1,
                message: n.message
            }), r.dirty());
            else if (n.kind === "max") e.data.length > n.value && (a = this._getOrReturnCtx(e, a), u(a, {
            code: c.too_big,
            maximum: n.value,
            type: "string",
            inclusive: !0,
            exact: !1,
            message: n.message
        }), r.dirty());
        else if (n.kind === "length") {
            const o = e.data.length > n.value,
                d = e.data.length < n.value;
            (o || d) && (a = this._getOrReturnCtx(e, a), o ? u(a, {
                code: c.too_big,
                maximum: n.value,
                type: "string",
                inclusive: !0,
                exact: !0,
                message: n.message
            }) : d && u(a, {
                code: c.too_small,
                minimum: n.value,
                type: "string",
                inclusive: !0,
                exact: !0,
                message: n.message
            }), r.dirty())
        } else if (n.kind === "email") Gt.test(e.data) || (a = this._getOrReturnCtx(e, a), u(a, {
            validation: "email",
            code: c.invalid_string,
            message: n.message
        }), r.dirty());
        else if (n.kind === "emoji") Ne || (Ne = new RegExp(Ht, "u")), Ne.test(e.data) || (a = this._getOrReturnCtx(e, a), u(a, {
            validation: "emoji",
            code: c.invalid_string,
            message: n.message
        }), r.dirty());
        else if (n.kind === "uuid") qt.test(e.data) || (a = this._getOrReturnCtx(e, a), u(a, {
            validation: "uuid",
            code: c.invalid_string,
            message: n.message
        }), r.dirty());
        else if (n.kind === "nanoid") Ut.test(e.data) || (a = this._getOrReturnCtx(e, a), u(a, {
            validation: "nanoid",
            code: c.invalid_string,
            message: n.message
        }), r.dirty());
        else if (n.kind === "cuid") zt.test(e.data) || (a = this._getOrReturnCtx(e, a), u(a, {
            validation: "cuid",
            code: c.invalid_string,
            message: n.message
        }), r.dirty());
        else if (n.kind === "cuid2") Bt.test(e.data) || (a = this._getOrReturnCtx(e, a), u(a, {
            validation: "cuid2",
            code: c.invalid_string,
            message: n.message
        }), r.dirty());
        else if (n.kind === "ulid") Ft.test(e.data) || (a = this._getOrReturnCtx(e, a), u(a, {
            validation: "ulid",
            code: c.invalid_string,
            message: n.message
        }), r.dirty());
        else if (n.kind === "url") try {
            new URL(e.data)
        } catch {
            a = this._getOrReturnCtx(e, a), u(a, {
                validation: "url",
                code: c.invalid_string,
                message: n.message
            }), r.dirty()
        } else n.kind === "regex" ? (n.regex.lastIndex = 0, n.regex.test(e.data) || (a = this._getOrReturnCtx(e, a), u(a, {
            validation: "regex",
            code: c.invalid_string,
            message: n.message
        }), r.dirty())) : n.kind === "trim" ? e.data = e.data.trim() : n.kind === "includes" ? e.data.includes(n.value, n.position) || (a = this._getOrReturnCtx(e, a), u(a, {
            code: c.invalid_string,
            validation: {
                includes: n.value,
                position: n.position
            },
            message: n.message
        }), r.dirty()) : n.kind === "toLowerCase" ? e.data = e.data.toLowerCase() : n.kind === "toUpperCase" ? e.data = e.data.toUpperCase() : n.kind === "startsWith" ? e.data.startsWith(n.value) || (a = this._getOrReturnCtx(e, a), u(a, {
            code: c.invalid_string,
            validation: {
                startsWith: n.value
            },
            message: n.message
        }), r.dirty()) : n.kind === "endsWith" ? e.data.endsWith(n.value) || (a = this._getOrReturnCtx(e, a), u(a, {
            code: c.invalid_string,
            validation: {
                endsWith: n.value
            },
            message: n.message
        }), r.dirty()) : n.kind === "datetime" ? as(n).test(e.data) || (a = this._getOrReturnCtx(e, a), u(a, {
            code: c.invalid_string,
            validation: "datetime",
            message: n.message
        }), r.dirty()) : n.kind === "date" ? ss.test(e.data) || (a = this._getOrReturnCtx(e, a), u(a, {
            code: c.invalid_string,
            validation: "date",
            message: n.message
        }), r.dirty()) : n.kind === "time" ? rs(n).test(e.data) || (a = this._getOrReturnCtx(e, a), u(a, {
            code: c.invalid_string,
            validation: "time",
            message: n.message
        }), r.dirty()) : n.kind === "duration" ? Jt.test(e.data) || (a = this._getOrReturnCtx(e, a), u(a, {
            validation: "duration",
            code: c.invalid_string,
            message: n.message
        }), r.dirty()) : n.kind === "ip" ? ns(e.data, n.version) || (a = this._getOrReturnCtx(e, a), u(a, {
            validation: "ip",
            code: c.invalid_string,
            message: n.message
        }), r.dirty()) : n.kind === "jwt" ? is(e.data, n.alg) || (a = this._getOrReturnCtx(e, a), u(a, {
            validation: "jwt",
            code: c.invalid_string,
            message: n.message
        }), r.dirty()) : n.kind === "cidr" ? os(e.data, n.version) || (a = this._getOrReturnCtx(e, a), u(a, {
            validation: "cidr",
            code: c.invalid_string,
            message: n.message
        }), r.dirty()) : n.kind === "base64" ? es.test(e.data) || (a = this._getOrReturnCtx(e, a), u(a, {
            validation: "base64",
            code: c.invalid_string,
            message: n.message
        }), r.dirty()) : n.kind === "base64url" ? ts.test(e.data) || (a = this._getOrReturnCtx(e, a), u(a, {
            validation: "base64url",
            code: c.invalid_string,
            message: n.message
        }), r.dirty()) : j.assertNever(n);
        return {
            status: r.value,
            value: e.data
        }
    }
    _regex(e, t, r) {
        return this.refinement(a => e.test(a), {
            validation: t,
            code: c.invalid_string,
            ...h.errToObj(r)
        })
    }
    _addCheck(e) {
        return new F({
            ...this._def,
            checks: [...this._def.checks, e]
        })
    }
    email(e) {
        return this._addCheck({
            kind: "email",
            ...h.errToObj(e)
        })
    }
    url(e) {
        return this._addCheck({
            kind: "url",
            ...h.errToObj(e)
        })
    }
    emoji(e) {
        return this._addCheck({
            kind: "emoji",
            ...h.errToObj(e)
        })
    }
    uuid(e) {
        return this._addCheck({
            kind: "uuid",
            ...h.errToObj(e)
        })
    }
    nanoid(e) {
        return this._addCheck({
            kind: "nanoid",
            ...h.errToObj(e)
        })
    }
    cuid(e) {
        return this._addCheck({
            kind: "cuid",
            ...h.errToObj(e)
        })
    }
    cuid2(e) {
        return this._addCheck({
            kind: "cuid2",
            ...h.errToObj(e)
        })
    }
    ulid(e) {
        return this._addCheck({
            kind: "ulid",
            ...h.errToObj(e)
        })
    }
    base64(e) {
        return this._addCheck({
            kind: "base64",
            ...h.errToObj(e)
        })
    }
    base64url(e) {
        return this._addCheck({
            kind: "base64url",
            ...h.errToObj(e)
        })
    }
    jwt(e) {
        return this._addCheck({
            kind: "jwt",
            ...h.errToObj(e)
        })
    }
    ip(e) {
        return this._addCheck({
            kind: "ip",
            ...h.errToObj(e)
        })
    }
    cidr(e) {
        return this._addCheck({
            kind: "cidr",
            ...h.errToObj(e)
        })
    }
    datetime(e) {
        return typeof e == "string" ? this._addCheck({
            kind: "datetime",
            precision: null,
            offset: !1,
            local: !1,
            message: e
        }) : this._addCheck({
            kind: "datetime",
            precision: typeof(e == null ? void 0 : e.precision) > "u" ? null : e == null ? void 0 : e.precision,
            offset: (e == null ? void 0 : e.offset) ?? !1,
            local: (e == null ? void 0 : e.local) ?? !1,
            ...h.errToObj(e == null ? void 0 : e.message)
        })
    }
    date(e) {
        return this._addCheck({
            kind: "date",
            message: e
        })
    }
    time(e) {
        return typeof e == "string" ? this._addCheck({
            kind: "time",
            precision: null,
            message: e
        }) : this._addCheck({
            kind: "time",
            precision: typeof(e == null ? void 0 : e.precision) > "u" ? null : e == null ? void 0 : e.precision,
            ...h.errToObj(e == null ? void 0 : e.message)
        })
    }
    duration(e) {
        return this._addCheck({
            kind: "duration",
            ...h.errToObj(e)
        })
    }
    regex(e, t) {
        return this._addCheck({
            kind: "regex",
            regex: e,
            ...h.errToObj(t)
        })
    }
    includes(e, t) {
        return this._addCheck({
            kind: "includes",
            value: e,
            position: t == null ? void 0 : t.position,
            ...h.errToObj(t == null ? void 0 : t.message)
        })
    }
    startsWith(e, t) {
        return this._addCheck({
            kind: "startsWith",
            value: e,
            ...h.errToObj(t)
        })
    }
    endsWith(e, t) {
        return this._addCheck({
            kind: "endsWith",
            value: e,
            ...h.errToObj(t)
        })
    }
    min(e, t) {
        return this._addCheck({
            kind: "min",
            value: e,
            ...h.errToObj(t)
        })
    }
    max(e, t) {
        return this._addCheck({
            kind: "max",
            value: e,
            ...h.errToObj(t)
        })
    }
    length(e, t) {
        return this._addCheck({
            kind: "length",
            value: e,
            ...h.errToObj(t)
        })
    }
    nonempty(e) {
        return this.min(1, h.errToObj(e))
    }
    trim() {
        return new F({
            ...this._def,
            checks: [...this._def.checks, {
                kind: "trim"
            }]
        })
    }
    toLowerCase() {
        return new F({
            ...this._def,
            checks: [...this._def.checks, {
                kind: "toLowerCase"
            }]
        })
    }
    toUpperCase() {
        return new F({
            ...this._def,
            checks: [...this._def.checks, {
                kind: "toUpperCase"
            }]
        })
    }
    get isDatetime() {
        return !!this._def.checks.find(e => e.kind === "datetime")
    }
    get isDate() {
        return !!this._def.checks.find(e => e.kind === "date")
    }
    get isTime() {
        return !!this._def.checks.find(e => e.kind === "time")
    }
    get isDuration() {
        return !!this._def.checks.find(e => e.kind === "duration")
    }
    get isEmail() {
        return !!this._def.checks.find(e => e.kind === "email")
    }
    get isURL() {
        return !!this._def.checks.find(e => e.kind === "url")
    }
    get isEmoji() {
        return !!this._def.checks.find(e => e.kind === "emoji")
    }
    get isUUID() {
        return !!this._def.checks.find(e => e.kind === "uuid")
    }
    get isNANOID() {
        return !!this._def.checks.find(e => e.kind === "nanoid")
    }
    get isCUID() {
        return !!this._def.checks.find(e => e.kind === "cuid")
    }
    get isCUID2() {
        return !!this._def.checks.find(e => e.kind === "cuid2")
    }
    get isULID() {
        return !!this._def.checks.find(e => e.kind === "ulid")
    }
    get isIP() {
        return !!this._def.checks.find(e => e.kind === "ip")
    }
    get isCIDR() {
        return !!this._def.checks.find(e => e.kind === "cidr")
    }
    get isBase64() {
        return !!this._def.checks.find(e => e.kind === "base64")
    }
    get isBase64url() {
        return !!this._def.checks.find(e => e.kind === "base64url")
    }
    get minLength() {
        let e = null;
        for (const t of this._def.checks) t.kind === "min" && (e === null || t.value > e) && (e = t.value);
        return e
    }
    get maxLength() {
        let e = null;
        for (const t of this._def.checks) t.kind === "max" && (e === null || t.value < e) && (e = t.value);
        return e
    }
}
F.create = s => new F({
    checks: [],
    typeName: v.ZodString,
    coerce: (s == null ? void 0 : s.coerce) ?? !1,
    ...b(s)
});

function ds(s, e) {
    const t = (s.toString().split(".")[1] || "").length,
        r = (e.toString().split(".")[1] || "").length,
        a = t > r ? t : r,
        n = Number.parseInt(s.toFixed(a).replace(".", "")),
        o = Number.parseInt(e.toFixed(a).replace(".", ""));
    return n % o / 10 ** a
}
class le extends k {
    constructor() {
        super(...arguments), this.min = this.gte, this.max = this.lte, this.step = this.multipleOf
    }
    _parse(e) {
        if (this._def.coerce && (e.data = Number(e.data)), this._getType(e) !== m.number) {
            const n = this._getOrReturnCtx(e);
            return u(n, {
                code: c.invalid_type,
                expected: m.number,
                received: n.parsedType
            }), g
        }
        let r;
        const a = new A;
        for (const n of this._def.checks) n.kind === "int" ? j.isInteger(e.data) || (r = this._getOrReturnCtx(e, r), u(r, {
            code: c.invalid_type,
            expected: "integer",
            received: "float",
            message: n.message
        }), a.dirty()) : n.kind === "min" ? (n.inclusive ? e.data < n.value : e.data <= n.value) && (r = this._getOrReturnCtx(e, r), u(r, {
            code: c.too_small,
            minimum: n.value,
            type: "number",
            inclusive: n.inclusive,
            exact: !1,
            message: n.message
        }), a.dirty()) : n.kind === "max" ? (n.inclusive ? e.data > n.value : e.data >= n.value) && (r = this._getOrReturnCtx(e, r), u(r, {
            code: c.too_big,
            maximum: n.value,
            type: "number",
            inclusive: n.inclusive,
            exact: !1,
            message: n.message
        }), a.dirty()) : n.kind === "multipleOf" ? ds(e.data, n.value) !== 0 && (r = this._getOrReturnCtx(e, r), u(r, {
            code: c.not_multiple_of,
            multipleOf: n.value,
            message: n.message
        }), a.dirty()) : n.kind === "finite" ? Number.isFinite(e.data) || (r = this._getOrReturnCtx(e, r), u(r, {
            code: c.not_finite,
            message: n.message
        }), a.dirty()) : j.assertNever(n);
        return {
            status: a.value,
            value: e.data
        }
    }
    gte(e, t) {
        return this.setLimit("min", e, !0, h.toString(t))
    }
    gt(e, t) {
        return this.setLimit("min", e, !1, h.toString(t))
    }
    lte(e, t) {
        return this.setLimit("max", e, !0, h.toString(t))
    }
    lt(e, t) {
        return this.setLimit("max", e, !1, h.toString(t))
    }
    setLimit(e, t, r, a) {
        return new le({
            ...this._def,
            checks: [...this._def.checks, {
                kind: e,
                value: t,
                inclusive: r,
                message: h.toString(a)
            }]
        })
    }
    _addCheck(e) {
        return new le({
            ...this._def,
            checks: [...this._def.checks, e]
        })
    }
    int(e) {
        return this._addCheck({
            kind: "int",
            message: h.toString(e)
        })
    }
    positive(e) {
        return this._addCheck({
            kind: "min",
            value: 0,
            inclusive: !1,
            message: h.toString(e)
        })
    }
    negative(e) {
        return this._addCheck({
            kind: "max",
            value: 0,
            inclusive: !1,
            message: h.toString(e)
        })
    }
    nonpositive(e) {
        return this._addCheck({
            kind: "max",
            value: 0,
            inclusive: !0,
            message: h.toString(e)
        })
    }
    nonnegative(e) {
        return this._addCheck({
            kind: "min",
            value: 0,
            inclusive: !0,
            message: h.toString(e)
        })
    }
    multipleOf(e, t) {
        return this._addCheck({
            kind: "multipleOf",
            value: e,
            message: h.toString(t)
        })
    }
    finite(e) {
        return this._addCheck({
            kind: "finite",
            message: h.toString(e)
        })
    }
    safe(e) {
        return this._addCheck({
            kind: "min",
            inclusive: !0,
            value: Number.MIN_SAFE_INTEGER,
            message: h.toString(e)
        })._addCheck({
            kind: "max",
            inclusive: !0,
            value: Number.MAX_SAFE_INTEGER,
            message: h.toString(e)
        })
    }
    get minValue() {
        let e = null;
        for (const t of this._def.checks) t.kind === "min" && (e === null || t.value > e) && (e = t.value);
        return e
    }
    get maxValue() {
        let e = null;
        for (const t of this._def.checks) t.kind === "max" && (e === null || t.value < e) && (e = t.value);
        return e
    }
    get isInt() {
        return !!this._def.checks.find(e => e.kind === "int" || e.kind === "multipleOf" && j.isInteger(e.value))
    }
    get isFinite() {
        let e = null,
            t = null;
        for (const r of this._def.checks) {
            if (r.kind === "finite" || r.kind === "int" || r.kind === "multipleOf") return !0;
            r.kind === "min" ? (t === null || r.value > t) && (t = r.value) : r.kind === "max" && (e === null || r.value < e) && (e = r.value)
        }
        return Number.isFinite(t) && Number.isFinite(e)
    }
}
le.create = s => new le({
    checks: [],
    typeName: v.ZodNumber,
    coerce: (s == null ? void 0 : s.coerce) || !1,
    ...b(s)
});
class ue extends k {
    constructor() {
        super(...arguments), this.min = this.gte, this.max = this.lte
    }
    _parse(e) {
        if (this._def.coerce) try {
            e.data = BigInt(e.data)
        } catch {
            return this._getInvalidInput(e)
        }
        if (this._getType(e) !== m.bigint) return this._getInvalidInput(e);
        let r;
        const a = new A;
        for (const n of this._def.checks) n.kind === "min" ? (n.inclusive ? e.data < n.value : e.data <= n.value) && (r = this._getOrReturnCtx(e, r), u(r, {
            code: c.too_small,
            type: "bigint",
            minimum: n.value,
            inclusive: n.inclusive,
            message: n.message
        }), a.dirty()) : n.kind === "max" ? (n.inclusive ? e.data > n.value : e.data >= n.value) && (r = this._getOrReturnCtx(e, r), u(r, {
            code: c.too_big,
            type: "bigint",
            maximum: n.value,
            inclusive: n.inclusive,
            message: n.message
        }), a.dirty()) : n.kind === "multipleOf" ? e.data % n.value !== BigInt(0) && (r = this._getOrReturnCtx(e, r), u(r, {
            code: c.not_multiple_of,
            multipleOf: n.value,
            message: n.message
        }), a.dirty()) : j.assertNever(n);
        return {
            status: a.value,
            value: e.data
        }
    }
    _getInvalidInput(e) {
        const t = this._getOrReturnCtx(e);
        return u(t, {
            code: c.invalid_type,
            expected: m.bigint,
            received: t.parsedType
        }), g
    }
    gte(e, t) {
        return this.setLimit("min", e, !0, h.toString(t))
    }
    gt(e, t) {
        return this.setLimit("min", e, !1, h.toString(t))
    }
    lte(e, t) {
        return this.setLimit("max", e, !0, h.toString(t))
    }
    lt(e, t) {
        return this.setLimit("max", e, !1, h.toString(t))
    }
    setLimit(e, t, r, a) {
        return new ue({
            ...this._def,
            checks: [...this._def.checks, {
                kind: e,
                value: t,
                inclusive: r,
                message: h.toString(a)
            }]
        })
    }
    _addCheck(e) {
        return new ue({
            ...this._def,
            checks: [...this._def.checks, e]
        })
    }
    positive(e) {
        return this._addCheck({
            kind: "min",
            value: BigInt(0),
            inclusive: !1,
            message: h.toString(e)
        })
    }
    negative(e) {
        return this._addCheck({
            kind: "max",
            value: BigInt(0),
            inclusive: !1,
            message: h.toString(e)
        })
    }
    nonpositive(e) {
        return this._addCheck({
            kind: "max",
            value: BigInt(0),
            inclusive: !0,
            message: h.toString(e)
        })
    }
    nonnegative(e) {
        return this._addCheck({
            kind: "min",
            value: BigInt(0),
            inclusive: !0,
            message: h.toString(e)
        })
    }
    multipleOf(e, t) {
        return this._addCheck({
            kind: "multipleOf",
            value: e,
            message: h.toString(t)
        })
    }
    get minValue() {
        let e = null;
        for (const t of this._def.checks) t.kind === "min" && (e === null || t.value > e) && (e = t.value);
        return e
    }
    get maxValue() {
        let e = null;
        for (const t of this._def.checks) t.kind === "max" && (e === null || t.value < e) && (e = t.value);
        return e
    }
}
ue.create = s => new ue({
    checks: [],
    typeName: v.ZodBigInt,
    coerce: (s == null ? void 0 : s.coerce) ?? !1,
    ...b(s)
});
class Ye extends k {
    _parse(e) {
        if (this._def.coerce && (e.data = !!e.data), this._getType(e) !== m.boolean) {
            const r = this._getOrReturnCtx(e);
            return u(r, {
                code: c.invalid_type,
                expected: m.boolean,
                received: r.parsedType
            }), g
        }
        return $(e.data)
    }
}
Ye.create = s => new Ye({
    typeName: v.ZodBoolean,
    coerce: (s == null ? void 0 : s.coerce) || !1,
    ...b(s)
});
class ge extends k {
    _parse(e) {
        if (this._def.coerce && (e.data = new Date(e.data)), this._getType(e) !== m.date) {
            const n = this._getOrReturnCtx(e);
            return u(n, {
                code: c.invalid_type,
                expected: m.date,
                received: n.parsedType
            }), g
        }
        if (Number.isNaN(e.data.getTime())) {
            const n = this._getOrReturnCtx(e);
            return u(n, {
                code: c.invalid_date
            }), g
        }
        const r = new A;
        let a;
        for (const n of this._def.checks) n.kind === "min" ? e.data.getTime() < n.value && (a = this._getOrReturnCtx(e, a), u(a, {
            code: c.too_small,
            message: n.message,
            inclusive: !0,
            exact: !1,
            minimum: n.value,
            type: "date"
        }), r.dirty()) : n.kind === "max" ? e.data.getTime() > n.value && (a = this._getOrReturnCtx(e, a), u(a, {
            code: c.too_big,
            message: n.message,
            inclusive: !0,
            exact: !1,
            maximum: n.value,
            type: "date"
        }), r.dirty()) : j.assertNever(n);
        return {
            status: r.value,
            value: new Date(e.data.getTime())
        }
    }
    _addCheck(e) {
        return new ge({
            ...this._def,
            checks: [...this._def.checks, e]
        })
    }
    min(e, t) {
        return this._addCheck({
            kind: "min",
            value: e.getTime(),
            message: h.toString(t)
        })
    }
    max(e, t) {
        return this._addCheck({
            kind: "max",
            value: e.getTime(),
            message: h.toString(t)
        })
    }
    get minDate() {
        let e = null;
        for (const t of this._def.checks) t.kind === "min" && (e === null || t.value > e) && (e = t.value);
        return e != null ? new Date(e) : null
    }
    get maxDate() {
        let e = null;
        for (const t of this._def.checks) t.kind === "max" && (e === null || t.value < e) && (e = t.value);
        return e != null ? new Date(e) : null
    }
}
ge.create = s => new ge({
    checks: [],
    coerce: (s == null ? void 0 : s.coerce) || !1,
    typeName: v.ZodDate,
    ...b(s)
});
class Ke extends k {
    _parse(e) {
        if (this._getType(e) !== m.symbol) {
            const r = this._getOrReturnCtx(e);
            return u(r, {
                code: c.invalid_type,
                expected: m.symbol,
                received: r.parsedType
            }), g
        }
        return $(e.data)
    }
}
Ke.create = s => new Ke({
    typeName: v.ZodSymbol,
    ...b(s)
});
class et extends k {
    _parse(e) {
        if (this._getType(e) !== m.undefined) {
            const r = this._getOrReturnCtx(e);
            return u(r, {
                code: c.invalid_type,
                expected: m.undefined,
                received: r.parsedType
            }), g
        }
        return $(e.data)
    }
}
et.create = s => new et({
    typeName: v.ZodUndefined,
    ...b(s)
});
class tt extends k {
    _parse(e) {
        if (this._getType(e) !== m.null) {
            const r = this._getOrReturnCtx(e);
            return u(r, {
                code: c.invalid_type,
                expected: m.null,
                received: r.parsedType
            }), g
        }
        return $(e.data)
    }
}
tt.create = s => new tt({
    typeName: v.ZodNull,
    ...b(s)
});
class st extends k {
    constructor() {
        super(...arguments), this._any = !0
    }
    _parse(e) {
        return $(e.data)
    }
}
st.create = s => new st({
    typeName: v.ZodAny,
    ...b(s)
});
class rt extends k {
    constructor() {
        super(...arguments), this._unknown = !0
    }
    _parse(e) {
        return $(e.data)
    }
}
rt.create = s => new rt({
    typeName: v.ZodUnknown,
    ...b(s)
});
class W extends k {
    _parse(e) {
        const t = this._getOrReturnCtx(e);
        return u(t, {
            code: c.invalid_type,
            expected: m.never,
            received: t.parsedType
        }), g
    }
}
W.create = s => new W({
    typeName: v.ZodNever,
    ...b(s)
});
class at extends k {
    _parse(e) {
        if (this._getType(e) !== m.undefined) {
            const r = this._getOrReturnCtx(e);
            return u(r, {
                code: c.invalid_type,
                expected: m.void,
                received: r.parsedType
            }), g
        }
        return $(e.data)
    }
}
at.create = s => new at({
    typeName: v.ZodVoid,
    ...b(s)
});
class L extends k {
    _parse(e) {
        const {
            ctx: t,
            status: r
        } = this._processInputParams(e), a = this._def;
        if (t.parsedType !== m.array) return u(t, {
            code: c.invalid_type,
            expected: m.array,
            received: t.parsedType
        }), g;
        if (a.exactLength !== null) {
            const o = t.data.length > a.exactLength.value,
                d = t.data.length < a.exactLength.value;
            (o || d) && (u(t, {
                code: o ? c.too_big : c.too_small,
                minimum: d ? a.exactLength.value : void 0,
                maximum: o ? a.exactLength.value : void 0,
                type: "array",
                inclusive: !0,
                exact: !0,
                message: a.exactLength.message
            }), r.dirty())
        }
        if (a.minLength !== null && t.data.length < a.minLength.value && (u(t, {
                code: c.too_small,
                minimum: a.minLength.value,
                type: "array",
                inclusive: !0,
                exact: !1,
                message: a.minLength.message
            }), r.dirty()), a.maxLength !== null && t.data.length > a.maxLength.value && (u(t, {
                code: c.too_big,
                maximum: a.maxLength.value,
                type: "array",
                inclusive: !0,
                exact: !1,
                message: a.maxLength.message
            }), r.dirty()), t.common.async) return Promise.all([...t.data].map((o, d) => a.type._parseAsync(new U(t, o, t.path, d)))).then(o => A.mergeArray(r, o));
        const n = [...t.data].map((o, d) => a.type._parseSync(new U(t, o, t.path, d)));
        return A.mergeArray(r, n)
    }
    get element() {
        return this._def.type
    }
    min(e, t) {
        return new L({
            ...this._def,
            minLength: {
                value: e,
                message: h.toString(t)
            }
        })
    }
    max(e, t) {
        return new L({
            ...this._def,
            maxLength: {
                value: e,
                message: h.toString(t)
            }
        })
    }
    length(e, t) {
        return new L({
            ...this._def,
            exactLength: {
                value: e,
                message: h.toString(t)
            }
        })
    }
    nonempty(e) {
        return this.min(1, e)
    }
}
L.create = (s, e) => new L({
    type: s,
    minLength: null,
    maxLength: null,
    exactLength: null,
    typeName: v.ZodArray,
    ...b(e)
});

function te(s) {
    if (s instanceof S) {
        const e = {};
        for (const t in s.shape) {
            const r = s.shape[t];
            e[t] = q.create(te(r))
        }
        return new S({
            ...s._def,
            shape: () => e
        })
    } else return s instanceof L ? new L({
        ...s._def,
        type: te(s.element)
    }) : s instanceof q ? q.create(te(s.unwrap())) : s instanceof ne ? ne.create(te(s.unwrap())) : s instanceof H ? H.create(s.items.map(e => te(e))) : s
}
class S extends k {
    constructor() {
        super(...arguments), this._cached = null, this.nonstrict = this.passthrough, this.augment = this.extend
    }
    _getCached() {
        if (this._cached !== null) return this._cached;
        const e = this._def.shape(),
            t = j.objectKeys(e);
        return this._cached = {
            shape: e,
            keys: t
        }, this._cached
    }
    _parse(e) {
        if (this._getType(e) !== m.object) {
            const f = this._getOrReturnCtx(e);
            return u(f, {
                code: c.invalid_type,
                expected: m.object,
                received: f.parsedType
            }), g
        }
        const {
            status: r,
            ctx: a
        } = this._processInputParams(e), {
            shape: n,
            keys: o
        } = this._getCached(), d = [];
        if (!(this._def.catchall instanceof W && this._def.unknownKeys === "strip"))
            for (const f in a.data) o.includes(f) || d.push(f);
        const x = [];
        for (const f of o) {
            const _ = n[f],
                J = a.data[f];
            x.push({
                key: {
                    status: "valid",
                    value: f
                },
                value: _._parse(new U(a, J, a.path, f)),
                alwaysSet: f in a.data
            })
        }
        if (this._def.catchall instanceof W) {
            const f = this._def.unknownKeys;
            if (f === "passthrough")
                for (const _ of d) x.push({
                    key: {
                        status: "valid",
                        value: _
                    },
                    value: {
                        status: "valid",
                        value: a.data[_]
                    }
                });
            else if (f === "strict") d.length > 0 && (u(a, {
                code: c.unrecognized_keys,
                keys: d
            }), r.dirty());
            else if (f !== "strip") throw new Error("Internal ZodObject error: invalid unknownKeys value.")
        } else {
            const f = this._def.catchall;
            for (const _ of d) {
                const J = a.data[_];
                x.push({
                    key: {
                        status: "valid",
                        value: _
                    },
                    value: f._parse(new U(a, J, a.path, _)),
                    alwaysSet: _ in a.data
                })
            }
        }
        return a.common.async ? Promise.resolve().then(async () => {
            const f = [];
            for (const _ of x) {
                const J = await _.key,
                    he = await _.value;
                f.push({
                    key: J,
                    value: he,
                    alwaysSet: _.alwaysSet
                })
            }
            return f
        }).then(f => A.mergeObjectSync(r, f)) : A.mergeObjectSync(r, x)
    }
    get shape() {
        return this._def.shape()
    }
    strict(e) {
        return h.errToObj, new S({
            ...this._def,
            unknownKeys: "strict",
            ...e !== void 0 ? {
                errorMap: (t, r) => {
                    var n, o;
                    const a = ((o = (n = this._def).errorMap) == null ? void 0 : o.call(n, t, r).message) ?? r.defaultError;
                    return t.code === "unrecognized_keys" ? {
                        message: h.errToObj(e).message ?? a
                    } : {
                        message: a
                    }
                }
            } : {}
        })
    }
    strip() {
        return new S({
            ...this._def,
            unknownKeys: "strip"
        })
    }
    passthrough() {
        return new S({
            ...this._def,
            unknownKeys: "passthrough"
        })
    }
    extend(e) {
        return new S({
            ...this._def,
            shape: () => ({
                ...this._def.shape(),
                ...e
            })
        })
    }
    merge(e) {
        return new S({
            unknownKeys: e._def.unknownKeys,
            catchall: e._def.catchall,
            shape: () => ({
                ...this._def.shape(),
                ...e._def.shape()
            }),
            typeName: v.ZodObject
        })
    }
    setKey(e, t) {
        return this.augment({
            [e]: t
        })
    }
    catchall(e) {
        return new S({
            ...this._def,
            catchall: e
        })
    }
    pick(e) {
        const t = {};
        for (const r of j.objectKeys(e)) e[r] && this.shape[r] && (t[r] = this.shape[r]);
        return new S({
            ...this._def,
            shape: () => t
        })
    }
    omit(e) {
        const t = {};
        for (const r of j.objectKeys(this.shape)) e[r] || (t[r] = this.shape[r]);
        return new S({
            ...this._def,
            shape: () => t
        })
    }
    deepPartial() {
        return te(this)
    }
    partial(e) {
        const t = {};
        for (const r of j.objectKeys(this.shape)) {
            const a = this.shape[r];
            e && !e[r] ? t[r] = a : t[r] = a.optional()
        }
        return new S({
            ...this._def,
            shape: () => t
        })
    }
    required(e) {
        const t = {};
        for (const r of j.objectKeys(this.shape))
            if (e && !e[r]) t[r] = this.shape[r];
            else {
                let n = this.shape[r];
                for (; n instanceof q;) n = n._def.innerType;
                t[r] = n
            } return new S({
            ...this._def,
            shape: () => t
        })
    }
    keyof() {
        return pt(j.objectKeys(this.shape))
    }
}
S.create = (s, e) => new S({
    shape: () => s,
    unknownKeys: "strip",
    catchall: W.create(),
    typeName: v.ZodObject,
    ...b(e)
});
S.strictCreate = (s, e) => new S({
    shape: () => s,
    unknownKeys: "strict",
    catchall: W.create(),
    typeName: v.ZodObject,
    ...b(e)
});
S.lazycreate = (s, e) => new S({
    shape: s,
    unknownKeys: "strip",
    catchall: W.create(),
    typeName: v.ZodObject,
    ...b(e)
});
class ve extends k {
    _parse(e) {
        const {
            ctx: t
        } = this._processInputParams(e), r = this._def.options;

        function a(n) {
            for (const d of n)
                if (d.result.status === "valid") return d.result;
            for (const d of n)
                if (d.result.status === "dirty") return t.common.issues.push(...d.ctx.common.issues), d.result;
            const o = n.map(d => new z(d.ctx.common.issues));
            return u(t, {
                code: c.invalid_union,
                unionErrors: o
            }), g
        }
        if (t.common.async) return Promise.all(r.map(async n => {
            const o = {
                ...t,
                common: {
                    ...t.common,
                    issues: []
                },
                parent: null
            };
            return {
                result: await n._parseAsync({
                    data: t.data,
                    path: t.path,
                    parent: o
                }),
                ctx: o
            }
        })).then(a); {
            let n;
            const o = [];
            for (const x of r) {
                const f = {
                        ...t,
                        common: {
                            ...t.common,
                            issues: []
                        },
                        parent: null
                    },
                    _ = x._parseSync({
                        data: t.data,
                        path: t.path,
                        parent: f
                    });
                if (_.status === "valid") return _;
                _.status === "dirty" && !n && (n = {
                    result: _,
                    ctx: f
                }), f.common.issues.length && o.push(f.common.issues)
            }
            if (n) return t.common.issues.push(...n.ctx.common.issues), n.result;
            const d = o.map(x => new z(x));
            return u(t, {
                code: c.invalid_union,
                unionErrors: d
            }), g
        }
    }
    get options() {
        return this._def.options
    }
}
ve.create = (s, e) => new ve({
    options: s,
    typeName: v.ZodUnion,
    ...b(e)
});

function Oe(s, e) {
    const t = B(s),
        r = B(e);
    if (s === e) return {
        valid: !0,
        data: s
    };
    if (t === m.object && r === m.object) {
        const a = j.objectKeys(e),
            n = j.objectKeys(s).filter(d => a.indexOf(d) !== -1),
            o = {
                ...s,
                ...e
            };
        for (const d of n) {
            const x = Oe(s[d], e[d]);
            if (!x.valid) return {
                valid: !1
            };
            o[d] = x.data
        }
        return {
            valid: !0,
            data: o
        }
    } else if (t === m.array && r === m.array) {
        if (s.length !== e.length) return {
            valid: !1
        };
        const a = [];
        for (let n = 0; n < s.length; n++) {
            const o = s[n],
                d = e[n],
                x = Oe(o, d);
            if (!x.valid) return {
                valid: !1
            };
            a.push(x.data)
        }
        return {
            valid: !0,
            data: a
        }
    } else return t === m.date && r === m.date && +s == +e ? {
        valid: !0,
        data: s
    } : {
        valid: !1
    }
}
class ye extends k {
    _parse(e) {
        const {
            status: t,
            ctx: r
        } = this._processInputParams(e), a = (n, o) => {
            if (He(n) || He(o)) return g;
            const d = Oe(n.value, o.value);
            return d.valid ? ((Xe(n) || Xe(o)) && t.dirty(), {
                status: t.value,
                value: d.data
            }) : (u(r, {
                code: c.invalid_intersection_types
            }), g)
        };
        return r.common.async ? Promise.all([this._def.left._parseAsync({
            data: r.data,
            path: r.path,
            parent: r
        }), this._def.right._parseAsync({
            data: r.data,
            path: r.path,
            parent: r
        })]).then(([n, o]) => a(n, o)) : a(this._def.left._parseSync({
            data: r.data,
            path: r.path,
            parent: r
        }), this._def.right._parseSync({
            data: r.data,
            path: r.path,
            parent: r
        }))
    }
}
ye.create = (s, e, t) => new ye({
    left: s,
    right: e,
    typeName: v.ZodIntersection,
    ...b(t)
});
class H extends k {
    _parse(e) {
        const {
            status: t,
            ctx: r
        } = this._processInputParams(e);
        if (r.parsedType !== m.array) return u(r, {
            code: c.invalid_type,
            expected: m.array,
            received: r.parsedType
        }), g;
        if (r.data.length < this._def.items.length) return u(r, {
            code: c.too_small,
            minimum: this._def.items.length,
            inclusive: !0,
            exact: !1,
            type: "array"
        }), g;
        !this._def.rest && r.data.length > this._def.items.length && (u(r, {
            code: c.too_big,
            maximum: this._def.items.length,
            inclusive: !0,
            exact: !1,
            type: "array"
        }), t.dirty());
        const n = [...r.data].map((o, d) => {
            const x = this._def.items[d] || this._def.rest;
            return x ? x._parse(new U(r, o, r.path, d)) : null
        }).filter(o => !!o);
        return r.common.async ? Promise.all(n).then(o => A.mergeArray(t, o)) : A.mergeArray(t, n)
    }
    get items() {
        return this._def.items
    }
    rest(e) {
        return new H({
            ...this._def,
            rest: e
        })
    }
}
H.create = (s, e) => {
    if (!Array.isArray(s)) throw new Error("You must pass an array of schemas to z.tuple([ ... ])");
    return new H({
        items: s,
        typeName: v.ZodTuple,
        rest: null,
        ...b(e)
    })
};
class nt extends k {
    get keySchema() {
        return this._def.keyType
    }
    get valueSchema() {
        return this._def.valueType
    }
    _parse(e) {
        const {
            status: t,
            ctx: r
        } = this._processInputParams(e);
        if (r.parsedType !== m.map) return u(r, {
            code: c.invalid_type,
            expected: m.map,
            received: r.parsedType
        }), g;
        const a = this._def.keyType,
            n = this._def.valueType,
            o = [...r.data.entries()].map(([d, x], f) => ({
                key: a._parse(new U(r, d, r.path, [f, "key"])),
                value: n._parse(new U(r, x, r.path, [f, "value"]))
            }));
        if (r.common.async) {
            const d = new Map;
            return Promise.resolve().then(async () => {
                for (const x of o) {
                    const f = await x.key,
                        _ = await x.value;
                    if (f.status === "aborted" || _.status === "aborted") return g;
                    (f.status === "dirty" || _.status === "dirty") && t.dirty(), d.set(f.value, _.value)
                }
                return {
                    status: t.value,
                    value: d
                }
            })
        } else {
            const d = new Map;
            for (const x of o) {
                const f = x.key,
                    _ = x.value;
                if (f.status === "aborted" || _.status === "aborted") return g;
                (f.status === "dirty" || _.status === "dirty") && t.dirty(), d.set(f.value, _.value)
            }
            return {
                status: t.value,
                value: d
            }
        }
    }
}
nt.create = (s, e, t) => new nt({
    valueType: e,
    keyType: s,
    typeName: v.ZodMap,
    ...b(t)
});
class me extends k {
    _parse(e) {
        const {
            status: t,
            ctx: r
        } = this._processInputParams(e);
        if (r.parsedType !== m.set) return u(r, {
            code: c.invalid_type,
            expected: m.set,
            received: r.parsedType
        }), g;
        const a = this._def;
        a.minSize !== null && r.data.size < a.minSize.value && (u(r, {
            code: c.too_small,
            minimum: a.minSize.value,
            type: "set",
            inclusive: !0,
            exact: !1,
            message: a.minSize.message
        }), t.dirty()), a.maxSize !== null && r.data.size > a.maxSize.value && (u(r, {
            code: c.too_big,
            maximum: a.maxSize.value,
            type: "set",
            inclusive: !0,
            exact: !1,
            message: a.maxSize.message
        }), t.dirty());
        const n = this._def.valueType;

        function o(x) {
            const f = new Set;
            for (const _ of x) {
                if (_.status === "aborted") return g;
                _.status === "dirty" && t.dirty(), f.add(_.value)
            }
            return {
                status: t.value,
                value: f
            }
        }
        const d = [...r.data.values()].map((x, f) => n._parse(new U(r, x, r.path, f)));
        return r.common.async ? Promise.all(d).then(x => o(x)) : o(d)
    }
    min(e, t) {
        return new me({
            ...this._def,
            minSize: {
                value: e,
                message: h.toString(t)
            }
        })
    }
    max(e, t) {
        return new me({
            ...this._def,
            maxSize: {
                value: e,
                message: h.toString(t)
            }
        })
    }
    size(e, t) {
        return this.min(e, t).max(e, t)
    }
    nonempty(e) {
        return this.min(1, e)
    }
}
me.create = (s, e) => new me({
    valueType: s,
    minSize: null,
    maxSize: null,
    typeName: v.ZodSet,
    ...b(e)
});
class it extends k {
    get schema() {
        return this._def.getter()
    }
    _parse(e) {
        const {
            ctx: t
        } = this._processInputParams(e);
        return this._def.getter()._parse({
            data: t.data,
            path: t.path,
            parent: t
        })
    }
}
it.create = (s, e) => new it({
    getter: s,
    typeName: v.ZodLazy,
    ...b(e)
});
class ot extends k {
    _parse(e) {
        if (e.data !== this._def.value) {
            const t = this._getOrReturnCtx(e);
            return u(t, {
                received: t.data,
                code: c.invalid_literal,
                expected: this._def.value
            }), g
        }
        return {
            status: "valid",
            value: e.data
        }
    }
    get value() {
        return this._def.value
    }
}
ot.create = (s, e) => new ot({
    value: s,
    typeName: v.ZodLiteral,
    ...b(e)
});

function pt(s, e) {
    return new re({
        values: s,
        typeName: v.ZodEnum,
        ...b(e)
    })
}
class re extends k {
    _parse(e) {
        if (typeof e.data != "string") {
            const t = this._getOrReturnCtx(e),
                r = this._def.values;
            return u(t, {
                expected: j.joinValues(r),
                received: t.parsedType,
                code: c.invalid_type
            }), g
        }
        if (this._cache || (this._cache = new Set(this._def.values)), !this._cache.has(e.data)) {
            const t = this._getOrReturnCtx(e),
                r = this._def.values;
            return u(t, {
                received: t.data,
                code: c.invalid_enum_value,
                options: r
            }), g
        }
        return $(e.data)
    }
    get options() {
        return this._def.values
    }
    get enum() {
        const e = {};
        for (const t of this._def.values) e[t] = t;
        return e
    }
    get Values() {
        const e = {};
        for (const t of this._def.values) e[t] = t;
        return e
    }
    get Enum() {
        const e = {};
        for (const t of this._def.values) e[t] = t;
        return e
    }
    extract(e, t = this._def) {
        return re.create(e, {
            ...this._def,
            ...t
        })
    }
    exclude(e, t = this._def) {
        return re.create(this.options.filter(r => !e.includes(r)), {
            ...this._def,
            ...t
        })
    }
}
re.create = pt;
class dt extends k {
    _parse(e) {
        const t = j.getValidEnumValues(this._def.values),
            r = this._getOrReturnCtx(e);
        if (r.parsedType !== m.string && r.parsedType !== m.number) {
            const a = j.objectValues(t);
            return u(r, {
                expected: j.joinValues(a),
                received: r.parsedType,
                code: c.invalid_type
            }), g
        }
        if (this._cache || (this._cache = new Set(j.getValidEnumValues(this._def.values))), !this._cache.has(e.data)) {
            const a = j.objectValues(t);
            return u(r, {
                received: r.data,
                code: c.invalid_enum_value,
                options: a
            }), g
        }
        return $(e.data)
    }
    get enum() {
        return this._def.values
    }
}
dt.create = (s, e) => new dt({
    values: s,
    typeName: v.ZodNativeEnum,
    ...b(e)
});
class _e extends k {
    unwrap() {
        return this._def.type
    }
    _parse(e) {
        const {
            ctx: t
        } = this._processInputParams(e);
        if (t.parsedType !== m.promise && t.common.async === !1) return u(t, {
            code: c.invalid_type,
            expected: m.promise,
            received: t.parsedType
        }), g;
        const r = t.parsedType === m.promise ? t.data : Promise.resolve(t.data);
        return $(r.then(a => this._def.type.parseAsync(a, {
            path: t.path,
            errorMap: t.common.contextualErrorMap
        })))
    }
}
_e.create = (s, e) => new _e({
    type: s,
    typeName: v.ZodPromise,
    ...b(e)
});
class ae extends k {
    innerType() {
        return this._def.schema
    }
    sourceType() {
        return this._def.schema._def.typeName === v.ZodEffects ? this._def.schema.sourceType() : this._def.schema
    }
    _parse(e) {
        const {
            status: t,
            ctx: r
        } = this._processInputParams(e), a = this._def.effect || null, n = {
            addIssue: o => {
                u(r, o), o.fatal ? t.abort() : t.dirty()
            },
            get path() {
                return r.path
            }
        };
        if (n.addIssue = n.addIssue.bind(n), a.type === "preprocess") {
            const o = a.transform(r.data, n);
            if (r.common.async) return Promise.resolve(o).then(async d => {
                if (t.value === "aborted") return g;
                const x = await this._def.schema._parseAsync({
                    data: d,
                    path: r.path,
                    parent: r
                });
                return x.status === "aborted" ? g : x.status === "dirty" || t.value === "dirty" ? ce(x.value) : x
            }); {
                if (t.value === "aborted") return g;
                const d = this._def.schema._parseSync({
                    data: o,
                    path: r.path,
                    parent: r
                });
                return d.status === "aborted" ? g : d.status === "dirty" || t.value === "dirty" ? ce(d.value) : d
            }
        }
        if (a.type === "refinement") {
            const o = d => {
                const x = a.refinement(d, n);
                if (r.common.async) return Promise.resolve(x);
                if (x instanceof Promise) throw new Error("Async refinement encountered during synchronous parse operation. Use .parseAsync instead.");
                return d
            };
            if (r.common.async === !1) {
                const d = this._def.schema._parseSync({
                    data: r.data,
                    path: r.path,
                    parent: r
                });
                return d.status === "aborted" ? g : (d.status === "dirty" && t.dirty(), o(d.value), {
                    status: t.value,
                    value: d.value
                })
            } else return this._def.schema._parseAsync({
                data: r.data,
                path: r.path,
                parent: r
            }).then(d => d.status === "aborted" ? g : (d.status === "dirty" && t.dirty(), o(d.value).then(() => ({
                status: t.value,
                value: d.value
            }))))
        }
        if (a.type === "transform")
            if (r.common.async === !1) {
                const o = this._def.schema._parseSync({
                    data: r.data,
                    path: r.path,
                    parent: r
                });
                if (!se(o)) return g;
                const d = a.transform(o.value, n);
                if (d instanceof Promise) throw new Error("Asynchronous transform encountered during synchronous parse operation. Use .parseAsync instead.");
                return {
                    status: t.value,
                    value: d
                }
            } else return this._def.schema._parseAsync({
                data: r.data,
                path: r.path,
                parent: r
            }).then(o => se(o) ? Promise.resolve(a.transform(o.value, n)).then(d => ({
                status: t.value,
                value: d
            })) : g);
        j.assertNever(a)
    }
}
ae.create = (s, e, t) => new ae({
    schema: s,
    typeName: v.ZodEffects,
    effect: e,
    ...b(t)
});
ae.createWithPreprocess = (s, e, t) => new ae({
    schema: e,
    effect: {
        type: "preprocess",
        transform: s
    },
    typeName: v.ZodEffects,
    ...b(t)
});
class q extends k {
    _parse(e) {
        return this._getType(e) === m.undefined ? $(void 0) : this._def.innerType._parse(e)
    }
    unwrap() {
        return this._def.innerType
    }
}
q.create = (s, e) => new q({
    innerType: s,
    typeName: v.ZodOptional,
    ...b(e)
});
class ne extends k {
    _parse(e) {
        return this._getType(e) === m.null ? $(null) : this._def.innerType._parse(e)
    }
    unwrap() {
        return this._def.innerType
    }
}
ne.create = (s, e) => new ne({
    innerType: s,
    typeName: v.ZodNullable,
    ...b(e)
});
class Ae extends k {
    _parse(e) {
        const {
            ctx: t
        } = this._processInputParams(e);
        let r = t.data;
        return t.parsedType === m.undefined && (r = this._def.defaultValue()), this._def.innerType._parse({
            data: r,
            path: t.path,
            parent: t
        })
    }
    removeDefault() {
        return this._def.innerType
    }
}
Ae.create = (s, e) => new Ae({
    innerType: s,
    typeName: v.ZodDefault,
    defaultValue: typeof e.default == "function" ? e.default : () => e.default,
    ...b(e)
});
class Ie extends k {
    _parse(e) {
        const {
            ctx: t
        } = this._processInputParams(e), r = {
            ...t,
            common: {
                ...t.common,
                issues: []
            }
        }, a = this._def.innerType._parse({
            data: r.data,
            path: r.path,
            parent: {
                ...r
            }
        });
        return xe(a) ? a.then(n => ({
            status: "valid",
            value: n.status === "valid" ? n.value : this._def.catchValue({
                get error() {
                    return new z(r.common.issues)
                },
                input: r.data
            })
        })) : {
            status: "valid",
            value: a.status === "valid" ? a.value : this._def.catchValue({
                get error() {
                    return new z(r.common.issues)
                },
                input: r.data
            })
        }
    }
    removeCatch() {
        return this._def.innerType
    }
}
Ie.create = (s, e) => new Ie({
    innerType: s,
    typeName: v.ZodCatch,
    catchValue: typeof e.catch == "function" ? e.catch : () => e.catch,
    ...b(e)
});
class ct extends k {
    _parse(e) {
        if (this._getType(e) !== m.nan) {
            const r = this._getOrReturnCtx(e);
            return u(r, {
                code: c.invalid_type,
                expected: m.nan,
                received: r.parsedType
            }), g
        }
        return {
            status: "valid",
            value: e.data
        }
    }
}
ct.create = s => new ct({
    typeName: v.ZodNaN,
    ...b(s)
});
class cs extends k {
    _parse(e) {
        const {
            ctx: t
        } = this._processInputParams(e), r = t.data;
        return this._def.type._parse({
            data: r,
            path: t.path,
            parent: t
        })
    }
    unwrap() {
        return this._def.type
    }
}
class $e extends k {
    _parse(e) {
        const {
            status: t,
            ctx: r
        } = this._processInputParams(e);
        if (r.common.async) return (async () => {
            const n = await this._def.in._parseAsync({
                data: r.data,
                path: r.path,
                parent: r
            });
            return n.status === "aborted" ? g : n.status === "dirty" ? (t.dirty(), ce(n.value)) : this._def.out._parseAsync({
                data: n.value,
                path: r.path,
                parent: r
            })
        })(); {
            const a = this._def.in._parseSync({
                data: r.data,
                path: r.path,
                parent: r
            });
            return a.status === "aborted" ? g : a.status === "dirty" ? (t.dirty(), {
                status: "dirty",
                value: a.value
            }) : this._def.out._parseSync({
                data: a.value,
                path: r.path,
                parent: r
            })
        }
    }
    static create(e, t) {
        return new $e({
            in: e,
            out: t,
            typeName: v.ZodPipeline
        })
    }
}
class Re extends k {
    _parse(e) {
        const t = this._def.innerType._parse(e),
            r = a => (se(a) && (a.value = Object.freeze(a.value)), a);
        return xe(t) ? t.then(a => r(a)) : r(t)
    }
    unwrap() {
        return this._def.innerType
    }
}
Re.create = (s, e) => new Re({
    innerType: s,
    typeName: v.ZodReadonly,
    ...b(e)
});
S.lazycreate;
var v;
(function(s) {
    s.ZodString = "ZodString", s.ZodNumber = "ZodNumber", s.ZodNaN = "ZodNaN", s.ZodBigInt = "ZodBigInt", s.ZodBoolean = "ZodBoolean", s.ZodDate = "ZodDate", s.ZodSymbol = "ZodSymbol", s.ZodUndefined = "ZodUndefined", s.ZodNull = "ZodNull", s.ZodAny = "ZodAny", s.ZodUnknown = "ZodUnknown", s.ZodNever = "ZodNever", s.ZodVoid = "ZodVoid", s.ZodArray = "ZodArray", s.ZodObject = "ZodObject", s.ZodUnion = "ZodUnion", s.ZodDiscriminatedUnion = "ZodDiscriminatedUnion", s.ZodIntersection = "ZodIntersection", s.ZodTuple = "ZodTuple", s.ZodRecord = "ZodRecord", s.ZodMap = "ZodMap", s.ZodSet = "ZodSet", s.ZodFunction = "ZodFunction", s.ZodLazy = "ZodLazy", s.ZodLiteral = "ZodLiteral", s.ZodEnum = "ZodEnum", s.ZodEffects = "ZodEffects", s.ZodNativeEnum = "ZodNativeEnum", s.ZodOptional = "ZodOptional", s.ZodNullable = "ZodNullable", s.ZodDefault = "ZodDefault", s.ZodCatch = "ZodCatch", s.ZodPromise = "ZodPromise", s.ZodBranded = "ZodBranded", s.ZodPipeline = "ZodPipeline", s.ZodReadonly = "ZodReadonly"
})(v || (v = {}));
const M = F.create;
W.create;
L.create;
const ls = S.create;
S.strictCreate;
ve.create;
ye.create;
H.create;
re.create;
_e.create;
q.create;
ne.create;
const us = ["intercomunicador-bluetooth-v10", "viseira-norisk-ff302-fotocromatica"],
    ms = () => {
        const [s, e] = V.useState([]), {
            addItem: t
        } = mt(), r = us.map(n => Ct(n)).filter(Boolean);
        if (r.length === 0) return null;
        const a = n => {
            if (s.includes(n.id)) return;
            const o = n.variants[0];
            t({
                product: n,
                variantId: o.id,
                variantTitle: o.title,
                price: o.price,
                quantity: 1,
                selectedOptions: o.options
            }), e(d => [...d, n.id])
        };
        return i.jsxs("div", {
            className: "bg-gradient-to-r from-price/5 to-price/10 rounded-xl p-4 border border-price/20",
            children: [i.jsxs("div", {
                className: "flex items-center gap-2 mb-3",
                children: [i.jsx(Se, {
                    className: "w-4 h-4 text-price"
                }), i.jsx("span", {
                    className: "text-sm font-semibold",
                    children: "Aproveite e leve também!"
                })]
            }), i.jsx("div", {
                className: "space-y-3",
                children: r.map(n => {
                    const o = s.includes(n.id),
                        d = n.originalPrice ? Math.round((1 - n.price / n.originalPrice) * 100) : 0;
                    return i.jsxs("div", {
                        className: `flex gap-3 p-3 rounded-lg transition-all ${o?"bg-price/10 border border-price/30":"bg-background border border-border/50 hover:border-price/30"}`,
                        children: [i.jsx(we, {
                            to: `/product/${n.handle}`,
                            className: "w-16 h-16 bg-white rounded-lg overflow-hidden flex-shrink-0 border border-border/50 hover:border-price/50 transition-colors",
                            children: i.jsx("img", {
                                src: n.images[0],
                                alt: n.title,
                                className: "w-full h-full object-contain p-1"
                            })
                        }), i.jsxs("div", {
                            className: "flex-1 min-w-0",
                            children: [i.jsx(we, {
                                to: `/product/${n.handle}`,
                                className: "font-medium text-sm line-clamp-1 hover:text-price transition-colors",
                                children: n.title
                            }), i.jsx("p", {
                                className: "text-xs text-muted-foreground mt-0.5 line-clamp-1",
                                children: "Bluetooth 5.0 • 20h bateria • IPX7"
                            }), i.jsxs("div", {
                                className: "flex items-center gap-2 mt-1.5",
                                children: [i.jsxs("span", {
                                    className: "text-sm font-bold text-price",
                                    children: ["R$ ", n.price.toFixed(2).replace(".", ",")]
                                }), n.originalPrice && i.jsxs("span", {
                                    className: "text-xs text-muted-foreground line-through",
                                    children: ["R$ ", n.originalPrice.toFixed(2).replace(".", ",")]
                                }), d > 0 && i.jsxs("span", {
                                    className: "text-[10px] font-bold text-price bg-price/10 px-1.5 py-0.5 rounded",
                                    children: ["-", d, "%"]
                                })]
                            })]
                        }), i.jsx("button", {
                            onClick: () => a(n),
                            disabled: o,
                            className: `flex-shrink-0 w-10 h-10 rounded-full flex items-center justify-center transition-all self-center ${o?"bg-price text-price-foreground":"bg-foreground text-background hover:opacity-90"}`,
                            children: o ? i.jsx(Zt, {
                                className: "w-4 h-4"
                            }) : i.jsx(Ce, {
                                className: "w-4 h-4"
                            })
                        })]
                    }, n.id)
                })
            })]
        })
    },
    lt = ls({
        nome: M().trim().min(3, "Nome deve ter pelo menos 3 caracteres").max(100),
        email: M().trim().email("Email inválido").max(255),
        telefone: M().trim().min(10, "Telefone inválido").max(20),
        cpf: M().trim().min(11, "CPF inválido").max(14).refine(s => {
            const e = s.replace(/\D/g, "");
            if (e.length !== 11 || /^(\d)\1+$/.test(e)) return !1;
            let t = 0;
            for (let a = 0; a < 9; a++) t += parseInt(e[a]) * (10 - a);
            let r = 11 - t % 11;
            if (r >= 10 && (r = 0), r !== parseInt(e[9])) return !1;
            t = 0;
            for (let a = 0; a < 10; a++) t += parseInt(e[a]) * (11 - a);
            return r = 11 - t % 11, r >= 10 && (r = 0), r === parseInt(e[10])
        }, {
            message: "CPF inválido"
        }),
        cep: M().trim().min(8, "CEP inválido").max(9),
        endereco: M().trim().min(5, "Endereço muito curto").max(200),
        numero: M().trim().min(1, "Número obrigatório").max(10),
        complemento: M().trim().max(100).optional(),
        bairro: M().trim().min(2, "Bairro obrigatório").max(100),
        cidade: M().trim().min(2, "Cidade obrigatória").max(100),
        estado: M().trim().length(2, "Use a sigla do estado (ex: SP)")
    }),
    ut = {
        gratis: {
            label: "Frete Grátis",
            price: 0,
            days: "10-15 dias úteis"
        },
        expresso: {
            label: "Expresso",
            price: 12.9,
            days: "5-7 dias úteis"
        },
        full: {
            label: "Full",
            price: 24.9,
            days: "2-3 dias úteis"
        }
    },
    Ns = () => {
        const s = St(),
            {
                items: e,
                getTotal: t,
                clearCart: r,
                removeItem: a,
                updateQuantity: n
            } = mt(),
            {
                addOrder: o
            } = Tt(),
            {
                trackInitiateCheckout: d,
                trackAddPaymentInfo: x,
                identifyUser: f
            } = Ot(),
            [_, J] = V.useState("gratis"),
            [he, be] = V.useState(!1),
            [Ee, Ze] = V.useState(!1),
            [N, ie] = V.useState({}),
            [oe, xt] = V.useState(15 * 60);
        V.useEffect(() => {
            if (oe <= 0) return;
            const l = setInterval(() => xt(p => p - 1), 1e3);
            return () => clearInterval(l)
        }, [oe]);
        const gt = Math.floor(oe / 60),
            vt = oe % 60,
            [y, Pe] = V.useState({
                nome: "",
                email: "",
                telefone: "",
                cpf: "",
                cep: "",
                endereco: "",
                numero: "",
                complemento: "",
                bairro: "",
                cidade: "",
                estado: ""
            }),
            ke = e.reduce((l, p) => l + p.quantity, 0),
            X = t(),
            fe = e.reduce((l, p) => {
                const w = p.product.originalPrice || p.price;
                return l + w * p.quantity
            }, 0),
            Q = fe - X,
            yt = fe > 0 ? Math.round(Q / fe * 100) : 0,
            Me = ut[_].price,
            Y = X + Me;
        V.useEffect(() => {
            e.length > 0 && d({
                value: X,
                numItems: ke,
                contents: e.map(l => ({
                    id: l.product.id,
                    quantity: l.quantity,
                    price: l.price
                }))
            })
        }, []);
        const E = (l, p = !1) => {
                const w = "mt-2 h-12 rounded-xl bg-secondary/50 border-2 focus-visible:ring-2 focus-visible:ring-foreground/20 transition-colors";
                return N[l] ? `${w} border-destructive animate-shake` : y[l] && y[l].length > 0 && !p ? `${w} border-price/40 bg-price/5` : `${w} border-transparent`
            },
            Z = (l, p) => {
                Pe(w => ({
                    ...w,
                    [l]: p
                })), N[l] && ie(w => ({
                    ...w,
                    [l]: void 0
                }))
            },
            D = l => {
                const p = lt.shape[l];
                if (!p) return;
                const w = p.safeParse(y[l]);
                w.success ? ie(I => ({
                    ...I,
                    [l]: void 0
                })) : ie(I => {
                    var T;
                    return {
                        ...I,
                        [l]: (T = w.error.errors[0]) == null ? void 0 : T.message
                    }
                })
            },
            _t = l => {
                const p = l.replace(/\D/g, "");
                return p.length <= 5 ? p : `${p.slice(0,5)}-${p.slice(5,8)}`
            },
            bt = async l => {
                const p = _t(l);
                Z("cep", p);
                const w = p.replace(/\D/g, "");
                if (w.length === 8) {
                    Ze(!0);
                    try {
                        const T = await (await fetch(`https://viacep.com.br/ws/${w}/json/`)).json();
                        T.erro || Pe(C => ({
                            ...C,
                            endereco: T.logradouro || "",
                            bairro: T.bairro || "",
                            cidade: T.localidade || "",
                            estado: T.uf || ""
                        }))
                    } catch {} finally {
                        Ze(!1)
                    }
                }
            }, kt = l => {
                const p = l.replace(/\D/g, "");
                return p.length <= 2 ? p : p.length <= 7 ? `(${p.slice(0,2)}) ${p.slice(2)}` : `(${p.slice(0,2)}) ${p.slice(2,7)}-${p.slice(7,11)}`
            }, jt = l => {
                const p = l.replace(/\D/g, "");
                return p.length <= 3 ? p : p.length <= 6 ? `${p.slice(0,3)}.${p.slice(3)}` : p.length <= 9 ? `${p.slice(0,3)}.${p.slice(3,6)}.${p.slice(6)}` : `${p.slice(0,3)}.${p.slice(3,6)}.${p.slice(6,9)}-${p.slice(9,11)}`
            }, Nt = async l => {
                var T;
                l.preventDefault(), be(!0), ie({});
                const p = lt.safeParse(y);
                if (!p.success) {
                    const C = {};
                    p.error.errors.forEach(R => {
                        const K = R.path[0];
                        C[K] = R.message
                    }), ie(C), be(!1);
                    const O = (T = p.error.errors[0]) == null ? void 0 : T.path[0];
                    O && setTimeout(() => {
                        const R = document.querySelector(`[name="${O}"]`);
                        R && (R.scrollIntoView({
                            behavior: "smooth",
                            block: "center"
                        }), R.focus())
                    }, 100);
                    return
                }
                await f({
                    email: y.email,
                    phone: y.telefone,
                    externalId: y.cpf.replace(/\D/g, "")
                });
                const w = `PED-${Date.now().toString(36).toUpperCase()}`,
                    I = {
                        items: e.map(C => {
                            var K, pe;
                            const O = (K = C.selectedOptions) == null ? void 0 : K.find(de => de.name === "Tamanho"),
                                R = (pe = C.selectedOptions) == null ? void 0 : pe.find(de => de.name === "Cor");
                            return {
                                id: C.product.id,
                                name: C.product.title,
                                price: C.price,
                                originalPrice: C.product.originalPrice,
                                quantity: C.quantity,
                                image: C.product.images[0],
                                selectedSize: O == null ? void 0 : O.value,
                                selectedColor: R == null ? void 0 : R.value
                            }
                        }),
                        customer: {
                            name: y.nome,
                            email: y.email,
                            phone: y.telefone,
                            cpf: y.cpf
                        },
                        address: {
                            cep: y.cep,
                            street: y.endereco,
                            number: y.numero,
                            complement: y.complemento,
                            neighborhood: y.bairro,
                            city: y.cidade,
                            state: y.estado
                        },
                        shipping: {
                            method: ut[_].label,
                            price: Me,
                            estimatedDays: _ === "gratis" ? "10-15" : _ === "expresso" ? "5-7" : "2-3"
                        },
                        total: Y,
                        subtotal: X,
                        savings: Q
                    };
                try {
                    const C = await fetch("../functions/v1/create-pix.php", {
                            method: "POST",
                            headers: {
                                "Content-Type": "application/json"
                            },
                            body: JSON.stringify({
                                amount: Y,
                                customer: {
                                    name: y.nome,
                                    email: y.email,
                                    phone: y.telefone,
                                    document: y.cpf.replace(/\D/g, "")
                                },
                                items: e.map(G => ({
                                    name: G.product.title,
                                    quantity: G.quantity,
                                    price: G.price
                                })),
                                orderId: w,
                                tracking: $t()
                            })
                        }),
                        O = await C.json();
                    if (!C.ok || O.error) throw new Error(O.error || "Erro ao gerar PIX");
                    const R = O.pixCode,
                        K = O.qrCodeBase64,
                        pe = O.transactionId;
                    await f({
                        email: y.email,
                        phone: y.telefone,
                        externalId: w
                    }), x({
                        value: Y,
                        contents: e.map(G => ({
                            id: G.product.id,
                            quantity: G.quantity,
                            price: G.price
                        }))
                    });
                    const de = {
                        orderNumber: w,
                        total: Y,
                        pixCode: R,
                        qrCodeBase64: K,
                        transactionId: pe,
                        gateway: O.gateway,
                        expiresAt: O.expiresAt,
                        createdAt: Date.now()
                    };
                    o({
                        orderNumber: w,
                        status: "pending",
                        items: I.items,
                        customer: I.customer,
                        address: I.address,
                        shipping: I.shipping,
                        subtotal: X,
                        total: Y,
                        savings: Q,
                        createdAt: Date.now()
                    }), localStorage.setItem("lastOrder", JSON.stringify(I)), localStorage.setItem("pendingOrder", JSON.stringify(de)), s(`/aguardando-pagamento?numero=${w}`)
                } catch (C) {
                    console.error("Error generating PIX:", C), Et.error(C instanceof Error ? C.message : "Erro ao processar pagamento. Tente novamente."), be(!1)
                }
            };
        return e.length === 0 ? i.jsxs("div", {
            className: "min-h-screen bg-background flex flex-col",
            children: [i.jsx(De, {}), i.jsx("main", {
                className: "flex-1 flex items-center justify-center p-4",
                children: i.jsxs("div", {
                    className: "text-center",
                    children: [i.jsx("div", {
                        className: "w-20 h-20 bg-muted rounded-full flex items-center justify-center mx-auto mb-6",
                        children: i.jsx(Le, {
                            className: "w-10 h-10 text-muted-foreground"
                        })
                    }), i.jsx("h1", {
                        className: "text-2xl font-semibold mb-2",
                        children: "Carrinho vazio"
                    }), i.jsx("p", {
                        className: "text-muted-foreground mb-8",
                        children: "Adicione produtos ao carrinho para continuar"
                    }), i.jsxs("button", {
                        onClick: () => s("/"),
                        className: "inline-flex items-center gap-2 px-8 py-4 bg-foreground text-background rounded-full hover:opacity-90 transition-opacity font-medium",
                        children: [i.jsx(Fe, {
                            className: "h-4 w-4"
                        }), "Voltar às compras"]
                    })]
                })
            }), i.jsx(Ve, {})]
        }) : i.jsxs("div", {
            className: "min-h-screen bg-secondary/30 flex flex-col",
            children: [i.jsx(De, {}), i.jsx("main", {
                className: "flex-1 py-8 sm:py-12",
                children: i.jsxs("div", {
                    className: "container max-w-4xl mx-auto px-4",
                    children: [i.jsxs("div", {
                        className: "flex items-center gap-4 mb-6",
                        children: [i.jsxs("button", {
                            onClick: () => s("/"),
                            className: "flex items-center gap-2 px-4 py-2 rounded-full bg-background hover:bg-muted transition-colors border border-border/50 text-sm",
                            children: [i.jsx(Fe, {
                                className: "w-4 h-4"
                            }), i.jsx("span", {
                                className: "hidden sm:inline",
                                children: "Voltar à loja"
                            })]
                        }), i.jsx("div", {
                            className: "flex-1 text-center",
                            children: i.jsx("h1", {
                                className: "font-semibold text-lg",
                                children: "Finalizar Compra"
                            })
                        })]
                    }), oe > 0 && i.jsxs("div", {
                        className: "flex items-center justify-center gap-2 py-2.5 px-4 bg-foreground text-background rounded-xl mb-4 animate-fade-in",
                        children: [i.jsx(qe, {
                            className: "w-3.5 h-3.5"
                        }), i.jsxs("span", {
                            className: "text-xs font-medium",
                            children: ["Oferta reservada por ", i.jsxs("strong", {
                                className: "tabular-nums",
                                children: [String(gt).padStart(2, "0"), ":", String(vt).padStart(2, "0")]
                            })]
                        })]
                    }), i.jsx("form", {
                        onSubmit: Nt,
                        className: "space-y-6",
                        children: i.jsxs("div", {
                            className: "space-y-5",
                            children: [i.jsxs("div", {
                                className: "flex items-center justify-center gap-4 sm:gap-6 py-3 px-4 bg-secondary/60 border border-border/50 rounded-xl",
                                children: [i.jsxs("div", {
                                    className: "flex items-center gap-1.5 text-xs text-foreground/70",
                                    children: [i.jsx(Ue, {
                                        className: "w-3.5 h-3.5"
                                    }), i.jsx("span", {
                                        className: "font-medium",
                                        children: "Compra segura"
                                    })]
                                }), i.jsxs("div", {
                                    className: "flex items-center gap-1.5 text-xs text-foreground/70",
                                    children: [i.jsx(ze, {
                                        className: "w-3.5 h-3.5"
                                    }), i.jsx("span", {
                                        className: "font-medium",
                                        children: "7 dias devolução"
                                    })]
                                }), i.jsxs("div", {
                                    className: "flex items-center gap-1.5 text-xs text-foreground/70",
                                    children: [i.jsx(Be, {
                                        className: "w-3.5 h-3.5"
                                    }), i.jsx("span", {
                                        className: "font-medium",
                                        children: "Garantia 1 ano"
                                    })]
                                })]
                            }), i.jsxs("div", {
                                className: "bg-background rounded-2xl shadow-sm border border-border/50 overflow-hidden",
                                children: [i.jsxs("div", {
                                    className: "flex items-center justify-between px-5 py-4 border-b border-border/50 bg-secondary/20",
                                    children: [i.jsxs("div", {
                                        className: "flex items-center gap-3",
                                        children: [i.jsx("div", {
                                            className: "w-8 h-8 bg-foreground rounded-full flex items-center justify-center",
                                            children: i.jsx(Le, {
                                                className: "w-4 h-4 text-background"
                                            })
                                        }), i.jsxs("div", {
                                            children: [i.jsx("h3", {
                                                className: "font-semibold text-sm",
                                                children: "Resumo do Pedido"
                                            }), i.jsxs("p", {
                                                className: "text-xs text-muted-foreground",
                                                children: [ke, " ", ke === 1 ? "item" : "itens", " no carrinho"]
                                            })]
                                        })]
                                    }), i.jsxs(we, {
                                        to: "/",
                                        className: "flex items-center gap-1.5 text-xs font-medium text-muted-foreground hover:text-foreground transition-colors bg-secondary px-3 py-1.5 rounded-full",
                                        children: [i.jsx(Ce, {
                                            className: "w-3.5 h-3.5"
                                        }), "Adicionar"]
                                    })]
                                }), i.jsx("div", {
                                    className: "divide-y divide-border/30",
                                    children: e.map((l, p) => i.jsxs("div", {
                                        className: "flex gap-4 p-4 hover:bg-secondary/10 transition-colors",
                                        children: [i.jsxs("div", {
                                            className: "relative",
                                            children: [i.jsx("div", {
                                                className: "w-20 h-20 bg-secondary/30 rounded-xl overflow-hidden flex-shrink-0 border border-border/30",
                                                children: i.jsx("img", {
                                                    src: l.product.images[0] || "/placeholder.svg",
                                                    alt: l.product.title,
                                                    className: "w-full h-full object-contain p-2"
                                                })
                                            }), l.quantity > 1 && i.jsx("span", {
                                                className: "absolute -top-1.5 -right-1.5 w-5 h-5 bg-foreground text-background text-[10px] font-bold rounded-full flex items-center justify-center",
                                                children: l.quantity
                                            })]
                                        }), i.jsxs("div", {
                                            className: "flex-1 min-w-0 flex flex-col justify-between py-0.5",
                                            children: [i.jsxs("div", {
                                                children: [i.jsx("p", {
                                                    className: "font-medium text-sm line-clamp-2 leading-tight",
                                                    children: l.product.title
                                                }), i.jsxs("div", {
                                                    className: "flex items-center gap-2 mt-1",
                                                    children: [i.jsx("span", {
                                                        className: "text-xs text-muted-foreground bg-secondary px-2 py-0.5 rounded-full",
                                                        children: l.variantTitle
                                                    }), l.product.badges.includes("frete-gratis") && i.jsxs("span", {
                                                        className: "text-[10px] font-medium text-shipping bg-shipping/10 px-2 py-0.5 rounded-full flex items-center gap-1",
                                                        children: [i.jsx(je, {
                                                            className: "w-2.5 h-2.5"
                                                        }), "Frete Grátis"]
                                                    })]
                                                })]
                                            }), i.jsxs("div", {
                                                className: "flex items-center justify-between mt-2",
                                                children: [i.jsx("div", {
                                                    className: "flex items-center gap-2",
                                                    children: l.product.originalPrice && i.jsxs("span", {
                                                        className: "text-xs text-muted-foreground line-through",
                                                        children: ["R$ ", (l.product.originalPrice * l.quantity).toFixed(2).replace(".", ",")]
                                                    })
                                                }), i.jsxs("div", {
                                                    className: "flex items-center gap-2",
                                                    children: [i.jsxs("div", {
                                                        className: "flex items-center gap-1",
                                                        children: [i.jsx("button", {
                                                            type: "button",
                                                            onClick: () => n(l.variantId, l.quantity - 1),
                                                            className: "w-7 h-7 rounded-full border border-border flex items-center justify-center hover:bg-secondary transition-colors",
                                                            children: i.jsx(At, {
                                                                className: "w-3 h-3"
                                                            })
                                                        }), i.jsx("span", {
                                                            className: "w-6 text-center text-sm font-medium",
                                                            children: l.quantity
                                                        }), i.jsx("button", {
                                                            type: "button",
                                                            onClick: () => n(l.variantId, l.quantity + 1),
                                                            className: "w-7 h-7 rounded-full border border-border flex items-center justify-center hover:bg-secondary transition-colors",
                                                            children: i.jsx(Ce, {
                                                                className: "w-3 h-3"
                                                            })
                                                        })]
                                                    }), i.jsxs("span", {
                                                        className: "text-base font-bold text-price ml-2",
                                                        children: ["R$ ", (l.price * l.quantity).toFixed(2).replace(".", ",")]
                                                    }), i.jsx("button", {
                                                        type: "button",
                                                        onClick: () => a(l.variantId),
                                                        className: "w-7 h-7 rounded-full flex items-center justify-center text-muted-foreground hover:text-destructive hover:bg-destructive/10 transition-colors",
                                                        title: "Remover item",
                                                        children: i.jsx(It, {
                                                            className: "w-4 h-4"
                                                        })
                                                    })]
                                                })]
                                            })]
                                        })]
                                    }, l.variantId))
                                }), i.jsxs("div", {
                                    className: "px-5 py-4 bg-secondary/30 border-t border-border/50 space-y-2.5",
                                    children: [Q > 0 && i.jsxs("div", {
                                        className: "flex items-center justify-between text-sm",
                                        children: [i.jsx("span", {
                                            className: "text-muted-foreground",
                                            children: "Valor original"
                                        }), i.jsxs("span", {
                                            className: "text-muted-foreground line-through",
                                            children: ["R$ ", fe.toFixed(2).replace(".", ",")]
                                        })]
                                    }), Q > 0 && i.jsxs("div", {
                                        className: "flex items-center justify-between text-sm",
                                        children: [i.jsxs("span", {
                                            className: "text-foreground font-medium flex items-center gap-1.5",
                                            children: [i.jsxs("span", {
                                                className: "bg-foreground text-background text-[10px] font-bold px-1.5 py-0.5 rounded",
                                                children: ["-", yt, "%"]
                                            }), "Desconto"]
                                        }), i.jsxs("span", {
                                            className: "font-medium text-price",
                                            children: ["-R$ ", Q.toFixed(2).replace(".", ",")]
                                        })]
                                    }), i.jsxs("div", {
                                        className: "flex items-center justify-between text-sm",
                                        children: [i.jsxs("span", {
                                            className: "text-muted-foreground flex items-center gap-1.5",
                                            children: [i.jsx(je, {
                                                className: "w-3.5 h-3.5 text-price"
                                            }), "Frete"]
                                        }), i.jsx("span", {
                                            className: "font-medium text-price",
                                            children: "Grátis"
                                        })]
                                    }), i.jsxs("div", {
                                        className: "flex items-center justify-between text-sm",
                                        children: [i.jsx("span", {
                                            className: "text-foreground",
                                            children: "Desconto primeira compra"
                                        }), i.jsx("span", {
                                            className: "text-destructive font-medium",
                                            children: "-R$ 15,00"
                                        })]
                                    }), i.jsxs("div", {
                                        className: "flex items-center justify-between text-sm",
                                        children: [i.jsx("span", {
                                            className: "text-foreground",
                                            children: "Cupom MOTO10"
                                        }), i.jsx("span", {
                                            className: "text-destructive font-medium",
                                            children: "-R$ 10,00"
                                        })]
                                    }), i.jsxs("div", {
                                        className: "flex items-center justify-between text-sm",
                                        children: [i.jsx("span", {
                                            className: "text-foreground",
                                            children: "Bônus cliente especial"
                                        }), i.jsx("span", {
                                            className: "text-destructive font-medium",
                                            children: "-R$ 5,00"
                                        })]
                                    }), i.jsxs("div", {
                                        className: "flex items-center justify-between pt-3 border-t border-border/50",
                                        children: [i.jsx("span", {
                                            className: "font-semibold",
                                            children: "Total"
                                        }), i.jsxs("div", {
                                            className: "text-right",
                                            children: [i.jsxs("span", {
                                                className: "text-xl font-bold text-price",
                                                children: ["R$ ", X.toFixed(2).replace(".", ",")]
                                            }), i.jsx("p", {
                                                className: "text-[10px] text-muted-foreground",
                                                children: "ou até 12x no cartão"
                                            })]
                                        })]
                                    })]
                                })]
                            }), i.jsx(ms, {}), i.jsxs("div", {
                                className: "bg-background rounded-2xl p-4 shadow-sm border border-border/50",
                                children: [i.jsxs("div", {
                                    className: "flex items-center justify-between mb-2",
                                    children: [i.jsx("span", {
                                        className: "text-xs font-medium text-muted-foreground",
                                        children: "Progresso do checkout"
                                    }), i.jsx("span", {
                                        className: "text-xs font-bold text-foreground",
                                        children: (() => {
                                            const l = ["nome", "email", "telefone", "cpf", "cep", "endereco", "numero", "bairro", "cidade", "estado"].filter(p => {
                                                var w;
                                                return ((w = y[p]) == null ? void 0 : w.length) > 0
                                            }).length;
                                            return `${Math.round(l/10*100)}%`
                                        })()
                                    })]
                                }), i.jsx("div", {
                                    className: "w-full h-2 bg-secondary rounded-full overflow-hidden",
                                    children: i.jsx("div", {
                                        className: "h-full bg-price rounded-full transition-all duration-500 ease-out",
                                        style: {
                                            width: `${["nome","email","telefone","cpf","cep","endereco","numero","bairro","cidade","estado"].filter(l=>{var p;return((p=y[l])==null?void 0:p.length)>0}).length/10*100}%`
                                        }
                                    })
                                }), i.jsxs("div", {
                                    className: "flex items-center gap-1 mt-2",
                                    children: [i.jsx(qe, {
                                        className: "w-3 h-3 text-muted-foreground"
                                    }), i.jsx("span", {
                                        className: "text-[10px] text-muted-foreground",
                                        children: "Leva menos de 2 minutos para preencher"
                                    })]
                                })]
                            }), i.jsxs("div", {
                                className: "bg-background rounded-2xl p-5 shadow-sm border border-border/50",
                                children: [i.jsxs("div", {
                                    className: "flex items-center gap-2 mb-1",
                                    children: [i.jsx("div", {
                                        className: "flex items-center justify-center w-6 h-6 bg-foreground text-background rounded-full text-xs font-bold",
                                        children: "1"
                                    }), i.jsx("h2", {
                                        className: "font-semibold",
                                        children: "Seus dados"
                                    })]
                                }), i.jsx("p", {
                                    className: "text-xs text-muted-foreground mb-4 ml-8",
                                    children: "Preencha seus dados para garantir a entrega"
                                }), i.jsxs("div", {
                                    className: "space-y-3",
                                    children: [i.jsxs("div", {
                                        className: "relative",
                                        children: [i.jsx(We, {
                                            className: "absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground z-10 mt-1"
                                        }), i.jsx(P, {
                                            id: "nome",
                                            name: "nome",
                                            value: y.nome,
                                            onChange: l => Z("nome", l.target.value),
                                            onBlur: () => D("nome"),
                                            className: `${E("nome")} pl-10`,
                                            placeholder: "Nome completo *",
                                            autoComplete: "name"
                                        }), y.nome.length > 0 && !N.nome && i.jsx(ee, {
                                            className: "absolute right-3 top-1/2 -translate-y-1/2 w-4 h-4 text-price mt-1"
                                        }), N.nome && i.jsx("p", {
                                            className: "text-destructive text-xs mt-1",
                                            children: N.nome
                                        })]
                                    }), i.jsxs("div", {
                                        className: "grid grid-cols-1 sm:grid-cols-2 gap-3",
                                        children: [i.jsxs("div", {
                                            className: "relative",
                                            children: [i.jsx(P, {
                                                id: "email",
                                                name: "email",
                                                type: "email",
                                                value: y.email,
                                                onChange: l => Z("email", l.target.value),
                                                onBlur: () => D("email"),
                                                className: E("email"),
                                                placeholder: "Email *",
                                                autoComplete: "email",
                                                inputMode: "email"
                                            }), y.email.length > 0 && !N.email && y.email.includes("@") && i.jsx(ee, {
                                                className: "absolute right-3 top-1/2 -translate-y-1/2 w-4 h-4 text-price mt-1"
                                            }), N.email && i.jsx("p", {
                                                className: "text-destructive text-xs mt-1",
                                                children: N.email
                                            })]
                                        }), i.jsxs("div", {
                                            className: "relative",
                                            children: [i.jsx(P, {
                                                id: "telefone",
                                                name: "telefone",
                                                value: y.telefone,
                                                onChange: l => Z("telefone", kt(l.target.value)),
                                                onBlur: () => D("telefone"),
                                                className: E("telefone"),
                                                placeholder: "Telefone com DDD *",
                                                maxLength: 15,
                                                autoComplete: "tel",
                                                inputMode: "tel"
                                            }), y.telefone.length >= 14 && !N.telefone && i.jsx(ee, {
                                                className: "absolute right-3 top-1/2 -translate-y-1/2 w-4 h-4 text-price mt-1"
                                            }), N.telefone && i.jsx("p", {
                                                className: "text-destructive text-xs mt-1",
                                                children: N.telefone
                                            })]
                                        })]
                                    }), i.jsxs("div", {
                                        className: "relative sm:max-w-[50%]",
                                        children: [i.jsx(P, {
                                            id: "cpf",
                                            name: "cpf",
                                            value: y.cpf,
                                            onChange: l => Z("cpf", jt(l.target.value)),
                                            onBlur: () => D("cpf"),
                                            className: E("cpf"),
                                            placeholder: "CPF *",
                                            maxLength: 14,
                                            inputMode: "numeric"
                                        }), y.cpf.length >= 14 && !N.cpf && i.jsx(ee, {
                                            className: "absolute right-3 top-1/2 -translate-y-1/2 w-4 h-4 text-price mt-1"
                                        }), N.cpf && i.jsx("p", {
                                            className: "text-destructive text-xs mt-1",
                                            children: N.cpf
                                        })]
                                    })]
                                })]
                            }), i.jsxs("div", {
                                className: "bg-background rounded-2xl p-5 shadow-sm border border-border/50",
                                children: [i.jsxs("div", {
                                    className: "flex items-center gap-2 mb-1",
                                    children: [i.jsx("div", {
                                        className: "flex items-center justify-center w-6 h-6 bg-foreground text-background rounded-full text-xs font-bold",
                                        children: "2"
                                    }), i.jsx("h2", {
                                        className: "font-semibold",
                                        children: "Endereço de entrega"
                                    })]
                                }), i.jsx("p", {
                                    className: "text-xs text-muted-foreground mb-4 ml-8",
                                    children: "Digite o CEP para preencher automaticamente"
                                }), i.jsxs("div", {
                                    className: "space-y-3",
                                    children: [i.jsxs("div", {
                                        className: "relative sm:max-w-[200px]",
                                        children: [i.jsx(Rt, {
                                            className: "absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground z-10 mt-1"
                                        }), i.jsx(P, {
                                            id: "cep",
                                            name: "cep",
                                            value: y.cep,
                                            onChange: l => bt(l.target.value),
                                            onBlur: () => D("cep"),
                                            className: `${E("cep")} pl-10`,
                                            placeholder: "CEP *",
                                            maxLength: 9,
                                            inputMode: "numeric",
                                            autoComplete: "postal-code"
                                        }), Ee && i.jsx(Je, {
                                            className: "absolute right-3 top-1/2 -translate-y-1/2 w-4 h-4 animate-spin text-muted-foreground mt-1"
                                        }), y.cep.length >= 9 && !Ee && !N.cep && i.jsx(ee, {
                                            className: "absolute right-3 top-1/2 -translate-y-1/2 w-4 h-4 text-price mt-1"
                                        }), N.cep && i.jsx("p", {
                                            className: "text-destructive text-xs mt-1",
                                            children: N.cep
                                        })]
                                    }), i.jsxs("div", {
                                        className: "grid grid-cols-1 sm:grid-cols-4 gap-3",
                                        children: [i.jsxs("div", {
                                            className: "sm:col-span-3",
                                            children: [i.jsx(P, {
                                                id: "endereco",
                                                name: "endereco",
                                                value: y.endereco,
                                                onChange: l => Z("endereco", l.target.value),
                                                onBlur: () => D("endereco"),
                                                className: E("endereco"),
                                                placeholder: "Rua / Avenida *",
                                                autoComplete: "street-address"
                                            }), N.endereco && i.jsx("p", {
                                                className: "text-destructive text-xs mt-1",
                                                children: N.endereco
                                            })]
                                        }), i.jsxs("div", {
                                            children: [i.jsx(P, {
                                                id: "numero",
                                                name: "numero",
                                                value: y.numero,
                                                onChange: l => Z("numero", l.target.value),
                                                onBlur: () => D("numero"),
                                                className: E("numero"),
                                                placeholder: "Nº *",
                                                inputMode: "numeric"
                                            }), N.numero && i.jsx("p", {
                                                className: "text-destructive text-xs mt-1",
                                                children: N.numero
                                            })]
                                        })]
                                    }), i.jsx("div", {
                                        children: i.jsx(P, {
                                            id: "complemento",
                                            name: "complemento",
                                            value: y.complemento,
                                            onChange: l => Z("complemento", l.target.value),
                                            className: E("complemento", !0),
                                            placeholder: "Complemento (apto, bloco, etc.)"
                                        })
                                    }), i.jsxs("div", {
                                        className: "grid grid-cols-2 sm:grid-cols-5 gap-3",
                                        children: [i.jsxs("div", {
                                            className: "col-span-2 sm:col-span-2",
                                            children: [i.jsx(P, {
                                                id: "bairro",
                                                name: "bairro",
                                                value: y.bairro,
                                                onChange: l => Z("bairro", l.target.value),
                                                onBlur: () => D("bairro"),
                                                className: E("bairro"),
                                                placeholder: "Bairro *"
                                            }), N.bairro && i.jsx("p", {
                                                className: "text-destructive text-xs mt-1",
                                                children: N.bairro
                                            })]
                                        }), i.jsxs("div", {
                                            className: "sm:col-span-2",
                                            children: [i.jsx(P, {
                                                id: "cidade",
                                                name: "cidade",
                                                value: y.cidade,
                                                onChange: l => Z("cidade", l.target.value),
                                                onBlur: () => D("cidade"),
                                                className: E("cidade"),
                                                placeholder: "Cidade *"
                                            }), N.cidade && i.jsx("p", {
                                                className: "text-destructive text-xs mt-1",
                                                children: N.cidade
                                            })]
                                        }), i.jsxs("div", {
                                            children: [i.jsx(P, {
                                                id: "estado",
                                                name: "estado",
                                                value: y.estado,
                                                onChange: l => Z("estado", l.target.value.toUpperCase()),
                                                onBlur: () => D("estado"),
                                                className: E("estado"),
                                                placeholder: "UF *",
                                                maxLength: 2
                                            }), N.estado && i.jsx("p", {
                                                className: "text-destructive text-xs mt-1",
                                                children: N.estado
                                            })]
                                        })]
                                    })]
                                })]
                            }), i.jsxs("div", {
                                className: "bg-background rounded-2xl p-5 shadow-sm border border-border/50",
                                children: [i.jsxs("div", {
                                    className: "flex items-center gap-2 mb-4",
                                    children: [i.jsx("div", {
                                        className: "flex items-center justify-center w-6 h-6 bg-foreground text-background rounded-full text-xs font-bold",
                                        children: "3"
                                    }), i.jsx("h2", {
                                        className: "font-semibold",
                                        children: "Entrega"
                                    })]
                                }), i.jsx("div", {
                                    className: "space-y-2",
                                    children: [{
                                        id: "gratis",
                                        icon: je,
                                        label: "Grátis",
                                        desc: "10-15 dias",
                                        price: 0,
                                        recommended: !1
                                    }, {
                                        id: "expresso",
                                        icon: Se,
                                        label: "Expresso",
                                        desc: "5-7 dias",
                                        price: 12.9,
                                        recommended: !1
                                    }, {
                                        id: "full",
                                        icon: Mt,
                                        label: "Full",
                                        desc: "2-3 dias",
                                        price: 24.9,
                                        recommended: !0
                                    }].map(({
                                        id: l,
                                        icon: p,
                                        label: w,
                                        desc: I,
                                        price: T,
                                        recommended: C
                                    }) => i.jsxs("button", {
                                        type: "button",
                                        onClick: () => J(l),
                                        className: `w-full p-3 rounded-xl border-2 transition-all flex items-center gap-3 relative ${_===l?"border-price bg-price/5":"border-transparent bg-secondary/50 hover:bg-secondary"}`,
                                        children: [C && i.jsx("span", {
                                            className: "absolute -top-2 right-3 px-2 py-0.5 bg-price text-price-foreground text-[9px] font-bold uppercase rounded-full",
                                            children: "Mais rápido"
                                        }), i.jsx("div", {
                                            className: `w-8 h-8 rounded-full flex items-center justify-center ${_===l?"bg-price text-price-foreground":"bg-muted"}`,
                                            children: i.jsx(p, {
                                                className: "h-4 w-4"
                                            })
                                        }), i.jsxs("div", {
                                            className: "flex-1 text-left",
                                            children: [i.jsx("span", {
                                                className: "font-medium text-sm",
                                                children: w
                                            }), i.jsx("span", {
                                                className: "text-xs text-muted-foreground ml-2",
                                                children: I
                                            })]
                                        }), i.jsx("span", {
                                            className: `text-sm font-semibold ${T===0?"text-price":""}`,
                                            children: T === 0 ? "R$ 0,00" : `R$ ${T.toFixed(2).replace(".",",")}`
                                        }), _ === l && i.jsx(ee, {
                                            className: "w-5 h-5 text-price"
                                        })]
                                    }, l))
                                })]
                            }), i.jsxs("div", {
                                className: "space-y-3",
                                children: [i.jsxs("div", {
                                    className: "flex items-center justify-center gap-2 py-2.5 px-3 bg-secondary/80 border border-border/50 rounded-xl",
                                    children: [i.jsx(Se, {
                                        className: "w-3.5 h-3.5 text-foreground/70"
                                    }), i.jsx("span", {
                                        className: "text-xs font-medium text-foreground/80",
                                        children: "PIX com aprovação instantânea — envio imediato após pagamento"
                                    })]
                                }), i.jsxs("div", {
                                    className: "flex items-center justify-center gap-2 py-2 text-xs text-muted-foreground",
                                    children: [i.jsx("div", {
                                        className: "flex -space-x-2",
                                        children: [1, 2, 3].map(l => i.jsx("div", {
                                            className: "w-5 h-5 rounded-full bg-secondary border-2 border-background flex items-center justify-center",
                                            children: i.jsx(We, {
                                                className: "w-2.5 h-2.5 text-muted-foreground"
                                            })
                                        }, l))
                                    }), i.jsxs("span", {
                                        children: [3 + Math.floor(Math.random() * 5), " pessoas comprando agora"]
                                    })]
                                }), i.jsx("button", {
                                    type: "submit",
                                    disabled: he,
                                    className: "w-full py-5 bg-price text-price-foreground font-bold text-lg rounded-full transition-all hover:opacity-90 active:scale-[0.99] shadow-lg flex items-center justify-center gap-2 disabled:opacity-50",
                                    children: he ? i.jsxs(i.Fragment, {
                                        children: [i.jsx(Je, {
                                            className: "h-5 w-5 animate-spin"
                                        }), "Gerando PIX..."]
                                    }) : i.jsxs(i.Fragment, {
                                        children: [i.jsx(Pt, {
                                            className: "w-5 h-5"
                                        }), "Pagar com PIX · R$ ", Y.toFixed(2).replace(".", ",")]
                                    })
                                }), i.jsxs("div", {
                                    className: "flex items-center justify-center gap-4",
                                    children: [i.jsxs("p", {
                                        className: "text-xs text-muted-foreground flex items-center gap-1",
                                        children: [i.jsx(Ue, {
                                            className: "w-3 h-3"
                                        }), "Dados protegidos"]
                                    }), i.jsxs("p", {
                                        className: "text-xs text-muted-foreground flex items-center gap-1",
                                        children: [i.jsx(Be, {
                                            className: "w-3 h-3"
                                        }), "Compra segura"]
                                    }), i.jsxs("p", {
                                        className: "text-xs text-muted-foreground flex items-center gap-1",
                                        children: [i.jsx(ze, {
                                            className: "w-3 h-3"
                                        }), "Devolução grátis"]
                                    })]
                                })]
                            })]
                        })
                    })]
                })
            }), i.jsx(Ve, {})]
        })
    };
export {
    Ns as
    default
};