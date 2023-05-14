/*

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/
'use strict';
var q, aa = "function" == typeof Object.defineProperties ? Object.defineProperty : function(a, b, c) {
    if (a == Array.prototype || a == Object.prototype) return a;
    a[b] = c.value;
    return a
};

function ba(a) {
    a = ["object" == typeof globalThis && globalThis, a, "object" == typeof window && window, "object" == typeof self && self, "object" == typeof global && global];
    for (var b = 0; b < a.length; ++b) {
        var c = a[b];
        if (c && c.Math == Math) return c
    }
    throw Error("Cannot find global object");
}
var ca = ba(this);

function da(a, b) {
    if (b) a: {
        var c = ca;a = a.split(".");
        for (var d = 0; d < a.length - 1; d++) {
            var e = a[d];
            if (!(e in c)) break a;
            c = c[e]
        }
        a = a[a.length - 1];d = c[a];b = b(d);b != d && null != b && aa(c, a, {
            configurable: !0,
            writable: !0,
            value: b
        })
    }
}

function ea(a) {
    function b(d) {
        return a.next(d)
    }

    function c(d) {
        return a.throw(d)
    }
    return new Promise(function(d, e) {
        function f(g) {
            g.done ? d(g.value) : Promise.resolve(g.value).then(b, c).then(f, e)
        }
        f(a.next())
    })
}

function r(a) {
    return ea(a())
}
da("Array.prototype.includes", function(a) {
    return a ? a : function(b, c) {
        var d = this;
        d instanceof String && (d = String(d));
        var e = d.length;
        c = c || 0;
        for (0 > c && (c = Math.max(c + e, 0)); c < e; c++) {
            var f = d[c];
            if (f === b || Object.is(f, b)) return !0
        }
        return !1
    }
});

function fa(a, b) {
    a instanceof String && (a += "");
    var c = 0,
        d = !1,
        e = {
            next: function() {
                if (!d && c < a.length) {
                    var f = c++;
                    return {
                        value: b(f, a[f]),
                        done: !1
                    }
                }
                d = !0;
                return {
                    done: !0,
                    value: void 0
                }
            }
        };
    e[Symbol.iterator] = function() {
        return e
    };
    return e
}
da("Array.prototype.values", function(a) {
    return a ? a : function() {
        return fa(this, function(b, c) {
            return c
        })
    }
});
da("Object.entries", function(a) {
    return a ? a : function(b) {
        var c = [],
            d;
        for (d in b) Object.prototype.hasOwnProperty.call(b, d) && c.push([d, b[d]]);
        return c
    }
});
da("Object.values", function(a) {
    return a ? a : function(b) {
        var c = [],
            d;
        for (d in b) Object.prototype.hasOwnProperty.call(b, d) && c.push(b[d]);
        return c
    }
});
da("String.prototype.matchAll", function(a) {
    return a ? a : function(b) {
        if (b instanceof RegExp && !b.global) throw new TypeError("RegExp passed into String.prototype.matchAll() must have global tag.");
        var c = new RegExp(b, b instanceof RegExp ? void 0 : "g"),
            d = this,
            e = !1,
            f = {
                next: function() {
                    if (e) return {
                        value: void 0,
                        done: !0
                    };
                    var g = c.exec(d);
                    if (!g) return e = !0, {
                        value: void 0,
                        done: !0
                    };
                    "" === g[0] && (c.lastIndex += 1);
                    return {
                        value: g,
                        done: !1
                    }
                }
            };
        f[Symbol.iterator] = function() {
            return f
        };
        return f
    }
});
da("Promise.prototype.finally", function(a) {
    return a ? a : function(b) {
        return this.then(function(c) {
            return Promise.resolve(b()).then(function() {
                return c
            })
        }, function(c) {
            return Promise.resolve(b()).then(function() {
                throw c;
            })
        })
    }
});
var t = this || self;

function v(a, b, c) {
    a = a.split(".");
    c = c || t;
    a[0] in c || "undefined" == typeof c.execScript || c.execScript("var " + a[0]);
    for (var d; a.length && (d = a.shift());) a.length || void 0 === b ? c[d] && c[d] !== Object.prototype[d] ? c = c[d] : c = c[d] = {} : c[d] = b
}

function w(a, b) {
    a = a.split(".");
    b = b || t;
    for (var c = 0; c < a.length; c++)
        if (b = b[a[c]], null == b) return null;
    return b
}

function ha(a) {
    var b = typeof a;
    b = "object" != b ? b : a ? Array.isArray(a) ? "array" : b : "null";
    return "array" == b || "object" == b && "number" == typeof a.length
}

function ia(a) {
    var b = typeof a;
    return "object" == b && null != a || "function" == b
}

function ja(a, b, c) {
    return a.call.apply(a.bind, arguments)
}

function ka(a, b, c) {
    if (!a) throw Error();
    if (2 < arguments.length) {
        var d = Array.prototype.slice.call(arguments, 2);
        return function() {
            var e = Array.prototype.slice.call(arguments);
            Array.prototype.unshift.apply(e, d);
            return a.apply(b, e)
        }
    }
    return function() {
        return a.apply(b, arguments)
    }
}

function la(a, b, c) {
    la = Function.prototype.bind && -1 != Function.prototype.bind.toString().indexOf("native code") ? ja : ka;
    return la.apply(null, arguments)
}

function ma(a, b) {
    function c() {}
    c.prototype = b.prototype;
    a.eb = b.prototype;
    a.prototype = new c;
    a.prototype.constructor = a;
    a.Sb = function(d, e, f) {
        for (var g = Array(arguments.length - 2), h = 2; h < arguments.length; h++) g[h - 2] = arguments[h];
        return b.prototype[e].apply(d, g)
    }
};

function na(a, b) {
    if (Error.captureStackTrace) Error.captureStackTrace(this, na);
    else {
        const c = Error().stack;
        c && (this.stack = c)
    }
    a && (this.message = String(a));
    void 0 !== b && (this.cause = b)
}
ma(na, Error);
na.prototype.name = "CustomError";

function oa() {};

function pa(a, b) {
    Array.prototype.forEach.call(a, b, void 0)
}

function qa(a, b) {
    return Array.prototype.map.call(a, b, void 0)
}

function ra(a, b) {
    b = Array.prototype.indexOf.call(a, b, void 0);
    0 <= b && Array.prototype.splice.call(a, b, 1)
}

function sa(a, b) {
    for (let c = 1; c < arguments.length; c++) {
        const d = arguments[c];
        if (ha(d)) {
            const e = a.length || 0,
                f = d.length || 0;
            a.length = e + f;
            for (let g = 0; g < f; g++) a[e + g] = d[g]
        } else a.push(d)
    }
};

function ta(a) {
    var b = ua;
    for (const c in b)
        if (a.call(void 0, b[c], c, b)) return c
}

function va(a) {
    for (const b in a) return !1;
    return !0
}

function wa(a) {
    if (!a || "object" !== typeof a) return a;
    if ("function" === typeof a.clone) return a.clone();
    if ("undefined" !== typeof Map && a instanceof Map) return new Map(a);
    if ("undefined" !== typeof Set && a instanceof Set) return new Set(a);
    if (a instanceof Date) return new Date(a.getTime());
    const b = Array.isArray(a) ? [] : "function" !== typeof ArrayBuffer || "function" !== typeof ArrayBuffer.isView || !ArrayBuffer.isView(a) || a instanceof DataView ? {} : new a.constructor(a.length);
    for (const c in a) b[c] = wa(a[c]);
    return b
}
const xa = "constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");

function ya(a, b) {
    let c, d;
    for (let e = 1; e < arguments.length; e++) {
        d = arguments[e];
        for (c in d) a[c] = d[c];
        for (let f = 0; f < xa.length; f++) c = xa[f], Object.prototype.hasOwnProperty.call(d, c) && (a[c] = d[c])
    }
};

function za() {}

function Aa(a) {
    return new za(Ba, a)
}
var Ba = {};
Aa("");
var Ca = String.prototype.trim ? function(a) {
    return a.trim()
} : function(a) {
    return /^[\s\xa0]*([\s\S]*?)[\s\xa0]*$/.exec(a)[1]
};
var Da, Ea = w("CLOSURE_FLAGS"),
    Fa = Ea && Ea[610401301];
Da = null != Fa ? Fa : !1;

function Ga() {
    var a = t.navigator;
    return a && (a = a.userAgent) ? a : ""
}
var Ha;
const Ia = t.navigator;
Ha = Ia ? Ia.userAgentData || null : null;

function Ja(a) {
    return Da ? Ha ? Ha.brands.some(({
        brand: b
    }) => b && -1 != b.indexOf(a)) : !1 : !1
}

function x(a) {
    return -1 != Ga().indexOf(a)
};

function Ka() {
    return Da ? !!Ha && 0 < Ha.brands.length : !1
}

function La() {
    return Ka() ? Ja("Chromium") : (x("Chrome") || x("CriOS")) && !(Ka() ? 0 : x("Edge")) || x("Silk")
};
var Ma = RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");

function Na(a) {
    return a ? decodeURI(a) : a
}

function Oa(a, b, c) {
    if (Array.isArray(b))
        for (var d = 0; d < b.length; d++) Oa(a, String(b[d]), c);
    else null != b && c.push(a + ("" === b ? "" : "=" + encodeURIComponent(String(b))))
}

function Pa(a) {
    var b = [],
        c;
    for (c in a) Oa(c, a[c], b);
    return b.join("&")
};

function Qa(a, b) {
    return Error(`Invalid wire type: ${a} (at position ${b})`)
}

function Ra() {
    return Error("Failed to read varint, encoding is invalid.")
}

function Sa(a, b) {
    return Error(`Tried to read past the end of the data ${b} > ${a}`)
};

function Ta() {
    throw Error("Invalid UTF8");
}

function Ua(a, b) {
    b = String.fromCharCode.apply(null, b);
    return null == a ? b : a + b
}
let Wa = void 0,
    Xa;
const Ya = "undefined" !== typeof TextDecoder;

function Za(a) {
    t.setTimeout(() => {
        throw a;
    }, 0)
};
var $a = Ka() ? !1 : x("Trident") || x("MSIE");
!x("Android") || La();
La();
var ab = x("Safari") && !(La() || (Ka() ? 0 : x("Coast")) || (Ka() ? 0 : x("Opera")) || (Ka() ? 0 : x("Edge")) || (Ka() ? Ja("Microsoft Edge") : x("Edg/")) || (Ka() ? Ja("Opera") : x("OPR")) || x("Firefox") || x("FxiOS") || x("Silk") || x("Android")) && !(x("iPhone") && !x("iPod") && !x("iPad") || x("iPad") || x("iPod"));
var bb = {},
    cb = null;

function db(a, b) {
    void 0 === b && (b = 0);
    eb();
    b = bb[b];
    const c = Array(Math.floor(a.length / 3)),
        d = b[64] || "";
    let e = 0,
        f = 0;
    for (; e < a.length - 2; e += 3) {
        var g = a[e],
            h = a[e + 1],
            k = a[e + 2],
            l = b[g >> 2];
        g = b[(g & 3) << 4 | h >> 4];
        h = b[(h & 15) << 2 | k >> 6];
        k = b[k & 63];
        c[f++] = "" + l + g + h + k
    }
    l = 0;
    k = d;
    switch (a.length - e) {
        case 2:
            l = a[e + 1], k = b[(l & 15) << 2] || d;
        case 1:
            a = a[e], c[f] = "" + b[a >> 2] + b[(a & 3) << 4 | l >> 4] + k + d
    }
    return c.join("")
}

function fb(a) {
    var b = a.length,
        c = 3 * b / 4;
    c % 3 ? c = Math.floor(c) : -1 != "=.".indexOf(a[b - 1]) && (c = -1 != "=.".indexOf(a[b - 2]) ? c - 2 : c - 1);
    var d = new Uint8Array(c),
        e = 0;
    gb(a, function(f) {
        d[e++] = f
    });
    return e !== c ? d.subarray(0, e) : d
}

function gb(a, b) {
    function c(k) {
        for (; d < a.length;) {
            var l = a.charAt(d++),
                m = cb[l];
            if (null != m) return m;
            if (!/^[\s\xa0]*$/.test(l)) throw Error("Unknown base64 encoding at char: " + l);
        }
        return k
    }
    eb();
    for (var d = 0;;) {
        var e = c(-1),
            f = c(0),
            g = c(64),
            h = c(64);
        if (64 === h && -1 === e) break;
        b(e << 2 | f >> 4);
        64 != g && (b(f << 4 & 240 | g >> 2), 64 != h && b(g << 6 & 192 | h))
    }
}

function eb() {
    if (!cb) {
        cb = {};
        for (var a = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789".split(""), b = ["+/=", "+/", "-_=", "-_.", "-_"], c = 0; 5 > c; c++) {
            var d = a.concat(b[c].split(""));
            bb[c] = d;
            for (var e = 0; e < d.length; e++) {
                var f = d[e];
                void 0 === cb[f] && (cb[f] = e)
            }
        }
    }
};
var hb = "undefined" !== typeof Uint8Array,
    ib = !$a && "function" === typeof btoa;

function jb(a) {
    if (!ib) return db(a);
    let b = "",
        c = 0;
    const d = a.length - 10240;
    for (; c < d;) b += String.fromCharCode.apply(null, a.subarray(c, c += 10240));
    b += String.fromCharCode.apply(null, c ? a.subarray(c) : a);
    return btoa(b)
}
const kb = /[-_.]/g,
    lb = {
        "-": "+",
        _: "/",
        ".": "="
    };

function mb(a) {
    return lb[a] || ""
}

function nb(a) {
    if (!ib) return fb(a);
    kb.test(a) && (a = a.replace(kb, mb));
    a = atob(a);
    const b = new Uint8Array(a.length);
    for (let c = 0; c < a.length; c++) b[c] = a.charCodeAt(c);
    return b
}

function ob(a) {
    return hb && null != a && a instanceof Uint8Array
}
let pb;
var qb = {};
let rb;

function sb(a) {
    if (a !== qb) throw Error("illegal external caller");
}

function tb() {
    return rb || (rb = new ub(null, qb))
}

function vb(a) {
    sb(qb);
    var b = a.h;
    b = null == b || ob(b) ? b : "string" === typeof b ? nb(b) : null;
    return null == b ? b : a.h = b
}
var ub = class {
    constructor(a, b) {
        sb(b);
        this.h = a;
        if (null != a && 0 === a.length) throw Error("ByteString should be constructed with non-empty values");
    }
    sizeBytes() {
        const a = vb(this);
        return a ? a.length : 0
    }
};

function wb(a) {
    if ("string" === typeof a) return {
        buffer: nb(a),
        J: !1
    };
    if (Array.isArray(a)) return {
        buffer: new Uint8Array(a),
        J: !1
    };
    if (a.constructor === Uint8Array) return {
        buffer: a,
        J: !1
    };
    if (a.constructor === ArrayBuffer) return {
        buffer: new Uint8Array(a),
        J: !1
    };
    if (a.constructor === ub) return {
        buffer: vb(a) || pb || (pb = new Uint8Array(0)),
        J: !0
    };
    if (a instanceof Uint8Array) return {
        buffer: new Uint8Array(a.buffer, a.byteOffset, a.byteLength),
        J: !1
    };
    throw Error("Type not convertible to a Uint8Array, expected a Uint8Array, an ArrayBuffer, a base64 encoded string, a ByteString or an Array of numbers");
};
const xb = "function" === typeof Uint8Array.prototype.slice;

function yb(a, b) {
    a.h = b;
    if (b > a.i) throw Sa(a.i, b);
}

function zb(a) {
    const b = a.j;
    let c = a.h,
        d = b[c++],
        e = d & 127;
    if (d & 128 && (d = b[c++], e |= (d & 127) << 7, d & 128 && (d = b[c++], e |= (d & 127) << 14, d & 128 && (d = b[c++], e |= (d & 127) << 21, d & 128 && (d = b[c++], e |= d << 28, d & 128 && b[c++] & 128 && b[c++] & 128 && b[c++] & 128 && b[c++] & 128 && b[c++] & 128))))) throw Ra();
    yb(a, c);
    return e
}

function Ab(a, b) {
    if (0 > b) throw Error(`Tried to read a negative byte length: ${b}`);
    const c = a.h,
        d = c + b;
    if (d > a.i) throw Sa(b, a.i - c);
    a.h = d;
    return c
}
var Bb = class {
        constructor(a, b) {
            this.j = null;
            this.m = !1;
            this.h = this.i = this.l = 0;
            this.init(a, void 0, void 0, b)
        }
        init(a, b, c, {
            ia: d = !1
        } = {}) {
            this.ia = d;
            a && (a = wb(a), this.j = a.buffer, this.m = a.J, this.l = b || 0, this.i = void 0 !== c ? this.l + c : this.j.length, this.h = this.l)
        }
        clear() {
            this.j = null;
            this.m = !1;
            this.h = this.i = this.l = 0;
            this.ia = !1
        }
        reset() {
            this.h = this.l
        }
        advance(a) {
            yb(this, this.h + a)
        }
    },
    Cb = [];

function Db(a, {
    wa: b = !1
} = {}) {
    a.wa = b
}

function Eb(a) {
    var b = a.h;
    if (b.h == b.i) return !1;
    a.j = a.h.h;
    var c = zb(a.h) >>> 0;
    b = c >>> 3;
    c &= 7;
    if (!(0 <= c && 5 >= c)) throw Qa(c, a.j);
    if (1 > b) throw Error(`Invalid field number: ${b} (at position ${a.j})`);
    a.l = b;
    a.i = c;
    return !0
}

function Fb(a) {
    switch (a.i) {
        case 0:
            if (0 != a.i) Fb(a);
            else a: {
                a = a.h;
                var b = a.h;
                const c = b + 10,
                    d = a.j;
                for (; b < c;)
                    if (0 === (d[b++] & 128)) {
                        yb(a, b);
                        break a
                    }
                throw Ra();
            }
            break;
        case 1:
            a.h.advance(8);
            break;
        case 2:
            2 != a.i ? Fb(a) : (b = zb(a.h) >>> 0, a.h.advance(b));
            break;
        case 5:
            a.h.advance(4);
            break;
        case 3:
            b = a.l;
            do {
                if (!Eb(a)) throw Error("Unmatched start-group tag: stream EOF");
                if (4 == a.i) {
                    if (a.l != b) throw Error("Unmatched end-group tag");
                    break
                }
                Fb(a)
            } while (1);
            break;
        default:
            throw Qa(a.i, a.j);
    }
}
var Gb = class {
        constructor(a, b) {
            if (Cb.length) {
                const c = Cb.pop();
                c.init(a, void 0, void 0, b);
                a = c
            } else a = new Bb(a, b);
            this.h = a;
            this.j = this.h.h;
            this.i = this.l = -1;
            Db(this, b)
        }
        reset() {
            this.h.reset();
            this.j = this.h.h;
            this.i = this.l = -1
        }
        advance(a) {
            this.h.advance(a)
        }
    },
    Hb = [];
const Ib = "function" === typeof Symbol && "symbol" === typeof Symbol() ? Symbol() : void 0;

function Jb(a, b) {
    if (Ib) return a[Ib] |= b;
    if (void 0 !== a.D) return a.D |= b;
    Object.defineProperties(a, {
        D: {
            value: b,
            configurable: !0,
            writable: !0,
            enumerable: !1
        }
    });
    return b
}

function Kb(a) {
    const b = z(a);
    1 !== (b & 1) && (Object.isFrozen(a) && (a = Array.prototype.slice.call(a)), Lb(a, b | 1))
}

function Mb(a, b) {
    Ib ? a[Ib] && (a[Ib] &= ~b) : void 0 !== a.D && (a.D &= ~b)
}

function z(a) {
    let b;
    Ib ? b = a[Ib] : b = a.D;
    return null == b ? 0 : b
}

function Lb(a, b) {
    Ib ? a[Ib] = b : void 0 !== a.D ? a.D = b : Object.defineProperties(a, {
        D: {
            value: b,
            configurable: !0,
            writable: !0,
            enumerable: !1
        }
    });
    return a
}

function Nb(a) {
    Jb(a, 1);
    return a
}

function Ob(a, b) {
    Lb(b, (a | 0) & -51)
}

function Pb(a, b) {
    Lb(b, (a | 18) & -41)
};
var Qb = {};

function Rb(a) {
    return null !== a && "object" === typeof a && !Array.isArray(a) && a.constructor === Object
}
let Sb;

function Tb(a, b, c) {
    if (!Array.isArray(a) || a.length) return !1;
    const d = z(a);
    if (d & 1) return !0;
    if (!b || !b.includes(c)) return !1;
    Lb(a, d | 1);
    return !0
}
var Ub = Object.freeze(Lb([], 23));

function Wb(a) {
    if (z(a.u) & 2) throw Error();
};

function Xb(a) {
    return a.displayName || a.name || "unknown type name"
}

function Yb(a, b) {
    if (!(a instanceof b)) throw Error(`Expected instanceof ${Xb(b)} but got ${a&&Xb(a.constructor)}`);
    return a
}

function Zb(a, b, c) {
    var d = !1;
    if (null != a && "object" === typeof a && !(d = Array.isArray(a)) && a.ma === Qb) return a;
    if (d) {
        var e = d = z(a);
        0 === e && (e |= c & 16);
        e |= c & 2;
        e !== d && Lb(a, e);
        return new b(a)
    }
};

function A(a, b, c) {
    return -1 === b ? null : b >= a.j ? a.I ? a.I[b] : void 0 : c && a.I && (c = a.I[b], null != c) ? c : a.u[b + a.i]
}

function B(a, b, c, d) {
    Wb(a);
    return $b(a, b, c, d)
}

function $b(a, b, c, d) {
    a.m && (a.m = void 0);
    if (b >= a.j || d) return d = a.j + a.i, (a.I || (a.I = a.u[d] = {}))[b] = c, a;
    a.u[b + a.i] = c;
    (c = a.I) && b in c && delete c[b];
    return a
}

function ac(a, b, c, d, e) {
    let f = A(a, b, d);
    Array.isArray(f) || (f = Ub);
    const g = z(f);
    g & 1 || Nb(f);
    if (e) g & 2 || Jb(f, 18), c & 1 || Object.freeze(f);
    else {
        e = !(c & 2);
        const h = g & 2;
        c & 1 || !h ? e && g & 16 && !h && Mb(f, 16) : (f = Nb(Array.prototype.slice.call(f)), $b(a, b, f, d))
    }
    return f
}

function bc(a, b, c, d) {
    Wb(a);
    (c = cc(a, c)) && c !== b && null != d && $b(a, c, void 0, !1);
    return $b(a, b, d)
}

function cc(a, b) {
    let c = 0;
    for (let d = 0; d < b.length; d++) {
        const e = b[d];
        null != A(a, e) && (0 !== c && $b(a, c, void 0, !1), c = e)
    }
    return c
}

function dc(a, b, c) {
    var d = A(a, c, !1);
    b = Zb(d, b, z(a.u));
    b !== d && null != b && $b(a, c, b, !1);
    d = b;
    if (null == d) return d;
    z(a.u) & 2 || (b = ec(d), b !== d && (d = b, $b(a, c, d, !1)));
    return d
}

function fc(a, b, c, d, e, f) {
    var g = !!(f & 2),
        h = ac(a, c, 1, d, g);
    if (h === Ub || !(z(h) & 4)) {
        var k = h;
        h = !!(f & 2);
        var l = !!(z(k) & 2);
        g = k;
        !h && l && (k = Array.prototype.slice.call(k));
        var m = f | (l ? 2 : 0);
        f = l;
        let n = l = 0;
        for (; l < k.length; l++) {
            const u = Zb(k[l], b, m);
            void 0 !== u && (f = f || !!(2 & z(u.u)), k[n++] = u)
        }
        n < l && (k.length = n);
        b = k;
        k = z(b);
        m = k | 5;
        f = f ? m & -9 : m | 8;
        k != f && (Object.isFrozen(b) && (b = Array.prototype.slice.call(b)), Lb(b, f));
        k = b;
        g !== k && $b(a, c, k, d);
        (h || 1 === e) && Object.freeze(k);
        return k
    }
    if (3 === e) return h;
    g || (g = Object.isFrozen(h), 1 === e ? g ||
        Object.freeze(h) : (e = z(h), b = e & -19, g && (h = Array.prototype.slice.call(h), e = 0, $b(a, c, h, d)), e !== b && Lb(h, b)));
    return h
}

function gc(a) {
    var b = z(a.u),
        c = !!(b & 2);
    a = fc(a, hc, 1, void 0, c ? 1 : 2, b);
    if (!(c || z(a) & 8)) {
        for (c = 0; c < a.length; c++) {
            b = a[c];
            const d = ec(b);
            b !== d && (a[c] = d)
        }
        Jb(a, 8)
    }
    return a
}

function C(a, b, c, d) {
    Wb(a);
    null != d ? Yb(d, b) : d = void 0;
    return $b(a, c, d)
}

function ic(a, b, c, d, e) {
    Wb(a);
    null != e ? Yb(e, b) : e = void 0;
    bc(a, c, d, e)
}

function jc(a, b, c, d) {
    const e = z(a.u);
    if (e & 2) throw Error();
    a = fc(a, c, b, void 0, 2, e);
    c = null != d ? Yb(d, c) : new c;
    a.push(c);
    c.J() && Mb(a, 8);
    return c
}

function kc(a, b) {
    return null == a ? b : a
}

function D(a, b) {
    return kc(A(a, b), "")
};
let lc;

function mc(a, b) {
    return nc(b)
}

function nc(a) {
    switch (typeof a) {
        case "number":
            return isFinite(a) ? a : String(a);
        case "boolean":
            return a ? 1 : 0;
        case "object":
            if (a && !Array.isArray(a)) {
                if (ob(a)) return jb(a);
                if (a instanceof ub) {
                    const b = a.h;
                    return null == b ? "" : "string" === typeof b ? b : a.h = jb(b)
                }
            }
    }
    return a
};

function oc(a, b) {
    var c = a.u;
    const d = c.length;
    var e = [];
    Jb(e, 16);
    const f = a.I,
        g = f ? d - 1 : d;
    for (let h = 0; h < g; h++) e[h] = b(c[h]);
    if (f) {
        c = e[d - 1] = {};
        for (const h in f) c[h] = b(f[h])
    }
    b = a.constructor;
    lc = e;
    e = new b(e);
    lc = void 0;
    a.ba && (e.ba = a.ba.slice());
    return e
}

function pc(a, b, c, d, e, f) {
    if (null != a) {
        if (Array.isArray(a)) a = e && 0 == a.length && z(a) & 1 ? void 0 : f && z(a) & 2 ? a : qc(a, b, c, void 0 !== d, e, f);
        else if (Rb(a)) {
            const g = {};
            for (let h in a) g[h] = pc(a[h], b, c, d, e, f);
            a = g
        } else a = b(a, d);
        return a
    }
}

function qc(a, b, c, d, e, f) {
    const g = d || c ? z(a) : 0;
    d = d ? !!(g & 16) : void 0;
    a = Array.prototype.slice.call(a);
    for (let h = 0; h < a.length; h++) a[h] = pc(a[h], b, c, d, e, f);
    c && c(g, a);
    return a
}

function rc(a) {
    return a.ma === Qb ? a.toJSON() : nc(a)
};

function sc(a, b, c = Pb) {
    if (null != a) {
        if (hb && a instanceof Uint8Array) return b ? a : new Uint8Array(a);
        if (Array.isArray(a)) {
            const d = z(a);
            if (d & 2) return a;
            if (b && !(d & 32) && (d & 16 || 0 === d)) return Lb(a, d | 18), a;
            a = qc(a, sc, d & 4 ? Pb : c, !0, !1, !0);
            b = z(a);
            b & 4 && b & 2 && Object.freeze(a);
            return a
        }
        a.ma === Qb && (z(a.u) & 2 || (a = tc(a, !0), Jb(a.u, 18)));
        return a
    }
}

function tc(a, b) {
    const c = a.u,
        d = b || a.J() ? Pb : Ob,
        e = !!(z(c) & 16);
    return oc(a, f => sc(f, e, d))
}

function ec(a) {
    if (!(z(a.u) & 2)) return a;
    const b = tc(a, !1);
    b.m = a;
    return b
};

function uc(a) {
    Sb = !0;
    try {
        return JSON.stringify(a.toJSON(), mc)
    } finally {
        Sb = !1
    }
}
var E = class {
    constructor(a, b, c) {
        null == a && (a = lc);
        lc = void 0;
        if (null == a) a = c ? [c] : [], Lb(a, 48);
        else {
            if (!Array.isArray(a)) throw Error();
            if (c && c !== a[0]) throw Error();
            let d = Jb(a, 0) | 32;
            Lb(a, d)
        }
        this.i = c ? 0 : -1;
        this.u = a;
        a: {
            c = this.u.length;a = c - 1;
            if (c && (c = this.u[a], Rb(c))) {
                this.I = c;
                this.j = a - this.i;
                break a
            }
            b ? (this.j = Math.max(b, a + 1 - this.i), this.I = void 0) : this.j = Number.MAX_VALUE
        }
    }
    toJSON() {
        if (Sb) var a = vc(this, this.u, !1);
        else a = qc(this.u, rc, void 0, void 0, !1, !1), a = vc(this, a, !0);
        return a
    }
    clone() {
        return tc(this, !1)
    }
    J() {
        return !!(z(this.u) &
            2)
    }
};
E.prototype.ma = Qb;

function vc(a, b, c) {
    const d = a ? a.constructor.B : void 0;
    var e = a.j,
        f = !1;
    if (d) {
        if (!c) {
            b = Array.prototype.slice.call(b);
            var g;
            if (b.length && Rb(g = b[b.length - 1]))
                for (f = 0; f < d.length; f++)
                    if (d[f] >= e) {
                        Object.assign(b[b.length - 1] = {}, g);
                        break
                    }
            f = !0
        }
        e = b;
        c = !c;
        g = a.j;
        var h;
        for (var k = 0; k < d.length; k++) {
            var l = d[k];
            if (l < g) {
                l += a.i;
                var m = e[l];
                null == m ? e[l] = c ? Ub : Nb([]) : c && m !== Ub && Kb(m)
            } else {
                if (!h) {
                    var n = void 0;
                    e.length && Rb(n = e[e.length - 1]) ? h = n : e.push(h = {})
                }
                m = h[l];
                null == h[l] ? h[l] = c ? Ub : Nb([]) : c && m !== Ub && Kb(m)
            }
        }
    }
    let u;
    h = b.length;
    n = !1;
    a = a ? a.i : 9999;
    for (e = b.length; e--;) {
        c = b[e];
        if (Array.isArray(c)) g = c, Tb(c, d, e - a) && (c = null), c != g && (n = !0);
        else if (e === b.length - 1 && Rb(c)) {
            a: {
                var p = c;g = d;k = {};l = !1;
                for (let y in p) {
                    m = p[y];
                    if (Array.isArray(m)) {
                        let H = m;
                        Tb(m, g, +y) && (m = null);
                        m != H && (l = !0)
                    }
                    null != m ? k[y] = m : l = !0
                }
                if (l) {
                    for (let y in k) {
                        p = k;
                        break a
                    }
                    p = null
                }
            }
            p != c && (n = !0);h--;
            continue
        }
        null == c && h == e + 1 ? (n = !0, h--) : n && (u || (f ? (u = b, u.length = h) : u = Array.prototype.slice.call(b, 0, h)), u[e] = c)
    }
    if (!n) return b;
    u || (f ? (u = b, u.length = h) : u = Array.prototype.slice.call(b,
        0, h));
    p && u.push(p);
    return u
};
const wc = Symbol();

function xc(a, b, c) {
    return a[wc] || (a[wc] = (d, e) => b(d, e, c))
}

function yc(a) {
    let b = a[wc];
    if (!b) {
        const c = zc(a);
        b = (d, e) => Ac(d, e, c);
        a[wc] = b
    }
    return b
}

function Bc(a) {
    var b = a.Tb;
    if (b) return yc(b);
    if (b = a.bc) return xc(a.Oa.ja, b, a.ac)
}

function Cc(a) {
    const b = Bc(a),
        c = a.Oa,
        d = a.ic.ea;
    return b ? (e, f) => d(e, f, c, b) : (e, f) => d(e, f, c)
}

function Dc(a, b) {
    let c = a[b];
    "function" == typeof c && 0 === c.length && (c = c(), a[b] = c);
    return Array.isArray(c) && (Ec in c || Fc in c || 0 < c.length && "function" == typeof c[0]) ? c : void 0
}
const Fc = Symbol(),
    Ec = Symbol();

function Gc(a, b) {
    a[0] = b
}

function Hc(a, b, c, d) {
    const e = c.ea;
    a[b] = d ? (f, g, h) => e(f, g, h, d) : e
}

function Ic(a, b, c, d, e) {
    const f = c.ea,
        g = yc(d),
        h = zc(d).ja;
    a[b] = (k, l, m) => f(k, l, m, h, g, e)
}

function Jc(a, b, c, d, e, f, g) {
    const h = c.ea,
        k = xc(d, e, f);
    a[b] = (l, m, n) => h(l, m, n, d, k, g)
}

function zc(a) {
    var b = a[Ec];
    if (b) return b;
    b = a[Ec] = {};
    var c = Gc,
        d = Hc,
        e = Ic,
        f = Jc;
    b.ja = a[0];
    let g = 1;
    if (a.length > g && "number" !== typeof a[g]) {
        var h = a[g++];
        c(b, h)
    }
    for (; g < a.length;) {
        c = a[g++];
        for (var k = g + 1; k < a.length && "number" !== typeof a[k];) k++;
        h = a[g++];
        k -= g;
        switch (k) {
            case 0:
                d(b, c, h);
                break;
            case 1:
                (k = Dc(a, g)) ? (g++, e(b, c, h, k)) : d(b, c, h, a[g++]);
                break;
            case 2:
                k = b;
                var l = g++;
                l = Dc(a, l);
                e(k, c, h, l, a[g++]);
                break;
            case 3:
                f(b, c, h, a[g++], a[g++], a[g++]);
                break;
            case 4:
                f(b, c, h, a[g++], a[g++], a[g++], a[g++]);
                break;
            default:
                throw Error("unexpected number of binary field arguments: " +
                    k);
        }
    }
    Ec in a && Fc in a && (a.length = 0);
    return b
}

function Ac(a, b, c) {
    for (; Eb(b) && 4 != b.i;) {
        var d = b.l,
            e = c[d];
        if (!e) {
            var f = c[0];
            f && (f = f[d]) && (e = c[d] = Cc(f))
        }
        if (!e || !e(b, a, d))
            if (f = b, d = a, e = f.j, Fb(f), !f.wa) {
                var g = f.h.h - e;
                f.h.h = e;
                a: {
                    f = f.h;e = g;
                    if (0 == e) {
                        e = tb();
                        break a
                    }
                    const h = Ab(f, e);f.ia && f.m ? e = f.j.subarray(h, h + e) : (f = f.j, g = h, e = h + e, e = g === e ? pb || (pb = new Uint8Array(0)) : xb ? f.slice(g, e) : new Uint8Array(f.subarray(g, e)));e = 0 == e.length ? tb() : new ub(e, qb)
                }(f = d.ba) ? f.push(e) : d.ba = [e]
            }
    }
    return a
}

function Kc(a, b) {
    return {
        ea: a,
        sc: b
    }
}
var Lc = Kc(function(a, b, c) {
        if (2 !== a.i) return !1;
        var d = zb(a.h) >>> 0;
        a = a.h;
        var e = Ab(a, d);
        a = a.j;
        if (Ya) {
            var f = a,
                g;
            (g = Xa) || (g = Xa = new TextDecoder("utf-8", {
                fatal: !0
            }));
            a = e + d;
            f = 0 === e && a === f.length ? f : f.subarray(e, a);
            try {
                var h = g.decode(f)
            } catch (l) {
                if (void 0 === Wa) {
                    try {
                        g.decode(new Uint8Array([128]))
                    } catch (m) {}
                    try {
                        g.decode(new Uint8Array([97])), Wa = !0
                    } catch (m) {
                        Wa = !1
                    }
                }!Wa && (Xa = void 0);
                throw l;
            }
        } else {
            h = e;
            d = h + d;
            e = [];
            let l = null;
            let m;
            for (; h < d;) {
                var k = a[h++];
                128 > k ? e.push(k) : 224 > k ? h >= d ? Ta() : (m = a[h++], 194 > k || 128 !== (m & 192) ?
                    (h--, Ta()) : e.push((k & 31) << 6 | m & 63)) : 240 > k ? h >= d - 1 ? Ta() : (m = a[h++], 128 !== (m & 192) || 224 === k && 160 > m || 237 === k && 160 <= m || 128 !== ((f = a[h++]) & 192) ? (h--, Ta()) : e.push((k & 15) << 12 | (m & 63) << 6 | f & 63)) : 244 >= k ? h >= d - 2 ? Ta() : (m = a[h++], 128 !== (m & 192) || 0 !== (k << 28) + (m - 144) >> 30 || 128 !== ((f = a[h++]) & 192) || 128 !== ((g = a[h++]) & 192) ? (h--, Ta()) : (k = (k & 7) << 18 | (m & 63) << 12 | (f & 63) << 6 | g & 63, k -= 65536, e.push((k >> 10 & 1023) + 55296, (k & 1023) + 56320))) : Ta();
                8192 <= e.length && (l = Ua(l, e), e.length = 0)
            }
            h = Ua(l, e)
        }
        B(b, c, h);
        return !0
    }, function(a, b, c) {
        a.i(c, A(b, c))
    }),
    Mc = Kc(function(a, b, c, d, e) {
        if (2 !== a.i) return !1;
        b = jc(b, c, d);
        c = a.h.i;
        d = zb(a.h) >>> 0;
        const f = a.h.h + d;
        let g = f - c;
        0 >= g && (a.h.i = f, e(b, a, void 0, void 0, void 0), g = f - a.h.h);
        if (g) throw Error("Message parsing ended unexpectedly. Expected to read " + `${d} bytes, instead read ${d-g} bytes, either the ` + "data ended unexpectedly or the message misreported its own length");
        a.h.h = f;
        a.h.i = c;
        return !0
    }, function(a, b, c, d, e) {
        var f = a.h;
        b = fc(b, d, c, !1, 1, z(b.u));
        f.call(a, c, b, e)
    });

function Nc() {
    this.j = this.j;
    this.l = this.l
}
Nc.prototype.j = !1;
Nc.prototype.dispose = function() {
    this.j || (this.j = !0, this.R())
};
Nc.prototype.R = function() {
    if (this.l)
        for (; this.l.length;) this.l.shift()()
};

function Oc(a) {
    var b = w("window.location.href");
    null == a && (a = 'Unknown Error of type "null/undefined"');
    if ("string" === typeof a) return {
        message: a,
        name: "Unknown error",
        lineNumber: "Not available",
        fileName: b,
        stack: "Not available"
    };
    var c = !1;
    try {
        var d = a.lineNumber || a.line || "Not available"
    } catch (g) {
        d = "Not available", c = !0
    }
    try {
        var e = a.fileName || a.filename || a.sourceURL || t.$googDebugFname || b
    } catch (g) {
        e = "Not available", c = !0
    }
    b = Pc(a);
    if (!(!c && a.lineNumber && a.fileName && a.stack && a.message && a.name)) {
        c = a.message;
        if (null ==
            c) {
            if (a.constructor && a.constructor instanceof Function) {
                if (a.constructor.name) c = a.constructor.name;
                else if (c = a.constructor, Qc[c]) c = Qc[c];
                else {
                    c = String(c);
                    if (!Qc[c]) {
                        var f = /function\s+([^\(]+)/m.exec(c);
                        Qc[c] = f ? f[1] : "[Anonymous]"
                    }
                    c = Qc[c]
                }
                c = 'Unknown Error of type "' + c + '"'
            } else c = "Unknown Error of unknown type";
            "function" === typeof a.toString && Object.prototype.toString !== a.toString && (c += ": " + a.toString())
        }
        return {
            message: c,
            name: a.name || "UnknownError",
            lineNumber: d,
            fileName: e,
            stack: b || "Not available"
        }
    }
    a.stack =
        b;
    return {
        message: a.message,
        name: a.name,
        lineNumber: a.lineNumber,
        fileName: a.fileName,
        stack: a.stack
    }
}

function Pc(a, b) {
    b || (b = {});
    b[Rc(a)] = !0;
    var c = a.stack || "";
    (a = a.cause) && !b[Rc(a)] && (c += "\nCaused by: ", a.stack && 0 == a.stack.indexOf(a.toString()) || (c += "string" === typeof a ? a : a.message + "\n"), c += Pc(a, b));
    return c
}

function Rc(a) {
    var b = "";
    "function" === typeof a.toString && (b = "" + a);
    return b + a.stack
}
var Qc = {};

function Sc(a, b) {
    a.l(b);
    100 > a.i && (a.i++, b.next = a.h, a.h = b)
}
class Tc {
    constructor(a, b) {
        this.j = a;
        this.l = b;
        this.i = 0;
        this.h = null
    }
    get() {
        let a;
        0 < this.i ? (this.i--, a = this.h, this.h = a.next, a.next = null) : a = this.j();
        return a
    }
};

function Uc(a, b) {
    this.x = void 0 !== a ? a : 0;
    this.y = void 0 !== b ? b : 0
}
q = Uc.prototype;
q.clone = function() {
    return new Uc(this.x, this.y)
};
q.equals = function(a) {
    return a instanceof Uc && (this == a ? !0 : this && a ? this.x == a.x && this.y == a.y : !1)
};
q.ceil = function() {
    this.x = Math.ceil(this.x);
    this.y = Math.ceil(this.y);
    return this
};
q.floor = function() {
    this.x = Math.floor(this.x);
    this.y = Math.floor(this.y);
    return this
};
q.round = function() {
    this.x = Math.round(this.x);
    this.y = Math.round(this.y);
    return this
};

function Vc(a, b) {
    for (var c = 0; a;) {
        if (b(a)) return a;
        a = a.parentNode;
        c++
    }
    return null
};
class Wc {
    constructor() {
        this.i = this.h = null
    }
    add(a, b) {
        const c = Xc.get();
        c.set(a, b);
        this.i ? this.i.next = c : this.h = c;
        this.i = c
    }
    remove() {
        let a = null;
        this.h && (a = this.h, this.h = this.h.next, this.h || (this.i = null), a.next = null);
        return a
    }
}
var Xc = new Tc(() => new Yc, a => a.reset());
class Yc {
    constructor() {
        this.next = this.scope = this.h = null
    }
    set(a, b) {
        this.h = a;
        this.scope = b;
        this.next = null
    }
    reset() {
        this.next = this.scope = this.h = null
    }
};
let Zc, $c = !1,
    ad = new Wc,
    cd = (a, b) => {
        Zc || bd();
        $c || (Zc(), $c = !0);
        ad.add(a, b)
    },
    bd = () => {
        const a = t.Promise.resolve(void 0);
        Zc = () => {
            a.then(dd)
        }
    };
var dd = () => {
    let a;
    for (; a = ad.remove();) {
        try {
            a.h.call(a.scope)
        } catch (b) {
            Za(b)
        }
        Sc(Xc, a)
    }
    $c = !1
};

function F(a) {
    this.h = 0;
    this.s = void 0;
    this.l = this.i = this.j = null;
    this.m = this.o = !1;
    if (a != oa) try {
        var b = this;
        a.call(void 0, function(c) {
            fd(b, 2, c)
        }, function(c) {
            fd(b, 3, c)
        })
    } catch (c) {
        fd(this, 3, c)
    }
}

function gd() {
    this.next = this.context = this.i = this.j = this.h = null;
    this.l = !1
}
gd.prototype.reset = function() {
    this.context = this.i = this.j = this.h = null;
    this.l = !1
};
var hd = new Tc(function() {
    return new gd
}, function(a) {
    a.reset()
});

function id(a, b, c) {
    var d = hd.get();
    d.j = a;
    d.i = b;
    d.context = c;
    return d
}

function jd(a) {
    if (a instanceof F) return a;
    var b = new F(oa);
    fd(b, 2, a);
    return b
}
F.prototype.then = function(a, b, c) {
    return kd(this, "function" === typeof a ? a : null, "function" === typeof b ? b : null, c)
};
F.prototype.$goog_Thenable = !0;
q = F.prototype;
q.hb = function(a, b) {
    return kd(this, null, a, b)
};
q.catch = F.prototype.hb;
q.cancel = function(a) {
    if (0 == this.h) {
        var b = new ld(a);
        cd(function() {
            md(this, b)
        }, this)
    }
};

function md(a, b) {
    if (0 == a.h)
        if (a.j) {
            var c = a.j;
            if (c.i) {
                for (var d = 0, e = null, f = null, g = c.i; g && (g.l || (d++, g.h == a && (e = g), !(e && 1 < d))); g = g.next) e || (f = g);
                e && (0 == c.h && 1 == d ? md(c, b) : (f ? (d = f, d.next == c.l && (c.l = d), d.next = d.next.next) : nd(c), od(c, e, 3, b)))
            }
            a.j = null
        } else fd(a, 3, b)
}

function pd(a, b) {
    a.i || 2 != a.h && 3 != a.h || qd(a);
    a.l ? a.l.next = b : a.i = b;
    a.l = b
}

function kd(a, b, c, d) {
    var e = id(null, null, null);
    e.h = new F(function(f, g) {
        e.j = b ? function(h) {
            try {
                var k = b.call(d, h);
                f(k)
            } catch (l) {
                g(l)
            }
        } : f;
        e.i = c ? function(h) {
            try {
                var k = c.call(d, h);
                void 0 === k && h instanceof ld ? g(h) : f(k)
            } catch (l) {
                g(l)
            }
        } : g
    });
    e.h.j = a;
    pd(a, e);
    return e.h
}
q.ib = function(a) {
    this.h = 0;
    fd(this, 2, a)
};
q.jb = function(a) {
    this.h = 0;
    fd(this, 3, a)
};

function fd(a, b, c) {
    if (0 == a.h) {
        a === c && (b = 3, c = new TypeError("Promise cannot resolve to itself"));
        a.h = 1;
        a: {
            var d = c,
                e = a.ib,
                f = a.jb;
            if (d instanceof F) {
                pd(d, id(e || oa, f || null, a));
                var g = !0
            } else {
                if (d) try {
                    var h = !!d.$goog_Thenable
                } catch (l) {
                    h = !1
                } else h = !1;
                if (h) d.then(e, f, a), g = !0;
                else {
                    if (ia(d)) try {
                        var k = d.then;
                        if ("function" === typeof k) {
                            rd(d, k, e, f, a);
                            g = !0;
                            break a
                        }
                    } catch (l) {
                        f.call(a, l);
                        g = !0;
                        break a
                    }
                    g = !1
                }
            }
        }
        g || (a.s = c, a.h = b, a.j = null, qd(a), 3 != b || c instanceof ld || sd(a, c))
    }
}

function rd(a, b, c, d, e) {
    function f(k) {
        h || (h = !0, d.call(e, k))
    }

    function g(k) {
        h || (h = !0, c.call(e, k))
    }
    var h = !1;
    try {
        b.call(a, g, f)
    } catch (k) {
        f(k)
    }
}

function qd(a) {
    a.o || (a.o = !0, cd(a.Na, a))
}

function nd(a) {
    var b = null;
    a.i && (b = a.i, a.i = b.next, b.next = null);
    a.i || (a.l = null);
    return b
}
q.Na = function() {
    for (var a; a = nd(this);) od(this, a, this.h, this.s);
    this.o = !1
};

function od(a, b, c, d) {
    if (3 == c && b.i && !b.l)
        for (; a && a.m; a = a.j) a.m = !1;
    if (b.h) b.h.j = null, td(b, c, d);
    else try {
        b.l ? b.j.call(b.context) : td(b, c, d)
    } catch (e) {
        ud.call(null, e)
    }
    Sc(hd, b)
}

function td(a, b, c) {
    2 == b ? a.j.call(a.context, c) : a.i && a.i.call(a.context, c)
}

function sd(a, b) {
    a.m = !0;
    cd(function() {
        a.m && ud.call(null, b)
    })
}
var ud = Za;

function ld(a) {
    na.call(this, a)
}
ma(ld, na);
ld.prototype.name = "cancel";
Aa("csi.gstatic.com");
Aa("googleads.g.doubleclick.net");
Aa("partner.googleadservices.com");
Aa("pubads.g.doubleclick.net");
Aa("securepubads.g.doubleclick.net");
Aa("tpc.googlesyndication.com");

function vd(a) {
    if (!a) return "";
    if (/^about:(?:blank|srcdoc)$/.test(a)) return window.origin || "";
    a.startsWith("blob:") && (a = a.substring(5));
    a = a.split("#")[0].split("?")[0];
    a = a.toLowerCase();
    0 == a.indexOf("//") && (a = window.location.protocol + a);
    /^[\w\-]*:\/\//.test(a) || (a = window.location.href);
    var b = a.substring(a.indexOf("://") + 3),
        c = b.indexOf("/"); - 1 != c && (b = b.substring(0, c));
    c = a.substring(0, a.indexOf("://"));
    if (!c) throw Error("URI is missing protocol: " + a);
    if ("http" !== c && "https" !== c && "chrome-extension" !==
        c && "moz-extension" !== c && "file" !== c && "android-app" !== c && "chrome-search" !== c && "chrome-untrusted" !== c && "chrome" !== c && "app" !== c && "devtools" !== c) throw Error("Invalid URI scheme in origin: " + c);
    a = "";
    var d = b.indexOf(":");
    if (-1 != d) {
        var e = b.substring(d + 1);
        b = b.substring(0, d);
        if ("http" === c && "80" !== e || "https" === c && "443" !== e) a = ":" + e
    }
    return c + "://" + b + a
};
var wd = "client_dev_domain client_dev_regex_map client_dev_root_url client_rollout_override expflag forcedCapability jsfeat jsmode mods".split(" "),
    xd = [...wd, "client_dev_set_cookie"];

function yd() {
    function a() {
        e[0] = 1732584193;
        e[1] = 4023233417;
        e[2] = 2562383102;
        e[3] = 271733878;
        e[4] = 3285377520;
        m = l = 0
    }

    function b(n) {
        for (var u = g, p = 0; 64 > p; p += 4) u[p / 4] = n[p] << 24 | n[p + 1] << 16 | n[p + 2] << 8 | n[p + 3];
        for (p = 16; 80 > p; p++) n = u[p - 3] ^ u[p - 8] ^ u[p - 14] ^ u[p - 16], u[p] = (n << 1 | n >>> 31) & 4294967295;
        n = e[0];
        var y = e[1],
            H = e[2],
            G = e[3],
            ed = e[4];
        for (p = 0; 80 > p; p++) {
            if (40 > p)
                if (20 > p) {
                    var Va = G ^ y & (H ^ G);
                    var Vb = 1518500249
                } else Va = y ^ H ^ G, Vb = 1859775393;
            else 60 > p ? (Va = y & H | G & (y | H), Vb = 2400959708) : (Va = y ^ H ^ G, Vb = 3395469782);
            Va = ((n << 5 | n >>> 27) & 4294967295) + Va + ed + Vb + u[p] & 4294967295;
            ed = G;
            G = H;
            H = (y << 30 | y >>> 2) & 4294967295;
            y = n;
            n = Va
        }
        e[0] = e[0] + n & 4294967295;
        e[1] = e[1] +
            y & 4294967295;
        e[2] = e[2] + H & 4294967295;
        e[3] = e[3] + G & 4294967295;
        e[4] = e[4] + ed & 4294967295
    }

    function c(n, u) {
        if ("string" === typeof n) {
            n = unescape(encodeURIComponent(n));
            for (var p = [], y = 0, H = n.length; y < H; ++y) p.push(n.charCodeAt(y));
            n = p
        }
        u || (u = n.length);
        p = 0;
        if (0 == l)
            for (; p + 64 < u;) b(n.slice(p, p + 64)), p += 64, m += 64;
        for (; p < u;)
            if (f[l++] = n[p++], m++, 64 == l)
                for (l = 0, b(f); p + 64 < u;) b(n.slice(p, p + 64)), p += 64, m += 64
    }

    function d() {
        var n = [],
            u = 8 * m;
        56 > l ? c(h, 56 - l) : c(h, 64 - (l - 56));
        for (var p = 63; 56 <= p; p--) f[p] = u & 255, u >>>= 8;
        b(f);
        for (p = u = 0; 5 > p; p++)
            for (var y = 24; 0 <= y; y -= 8) n[u++] = e[p] >> y & 255;
        return n
    }
    for (var e = [], f = [], g = [], h = [128], k = 1; 64 > k; ++k) h[k] = 0;
    var l, m;
    a();
    return {
        reset: a,
        update: c,
        digest: d,
        Ma: function() {
            for (var n = d(), u = "", p = 0; p < n.length; p++) u += "0123456789ABCDEF".charAt(Math.floor(n[p] / 16)) + "0123456789ABCDEF".charAt(n[p] % 16);
            return u
        }
    }
};

function zd(a, b, c) {
    var d = String(t.location.href);
    return d && a && b ? [b, Ad(vd(d), a, c || null)].join(" ") : null
}

function Ad(a, b, c) {
    var d = [],
        e = [];
    if (1 == (Array.isArray(c) ? 2 : 1)) return e = [b, a], pa(d, function(h) {
        e.push(h)
    }), Bd(e.join(" "));
    var f = [],
        g = [];
    pa(c, function(h) {
        g.push(h.key);
        f.push(h.value)
    });
    c = Math.floor((new Date).getTime() / 1E3);
    e = 0 == f.length ? [c, b, a] : [f.join(":"), c, b, a];
    pa(d, function(h) {
        e.push(h)
    });
    a = Bd(e.join(" "));
    a = [c, a];
    0 == g.length || a.push(g.join(""));
    return a.join("_")
}

function Bd(a) {
    var b = yd();
    b.update(a);
    return b.Ma().toLowerCase()
};
const Cd = {};

function Dd() {
    this.h = document || {
        cookie: ""
    }
}
q = Dd.prototype;
q.isEnabled = function() {
    if (!t.navigator.cookieEnabled) return !1;
    if (this.h.cookie) return !0;
    this.set("TESTCOOKIESENABLED", "1", {
        za: 60
    });
    if ("1" !== this.get("TESTCOOKIESENABLED")) return !1;
    this.remove("TESTCOOKIESENABLED");
    return !0
};
q.set = function(a, b, c) {
    let d, e, f, g = !1,
        h;
    "object" === typeof c && (h = c.lc, g = c.mc || !1, f = c.domain || void 0, e = c.path || void 0, d = c.za);
    if (/[;=\s]/.test(a)) throw Error('Invalid cookie name "' + a + '"');
    if (/[;\r\n]/.test(b)) throw Error('Invalid cookie value "' + b + '"');
    void 0 === d && (d = -1);
    this.h.cookie = a + "=" + b + (f ? ";domain=" + f : "") + (e ? ";path=" + e : "") + (0 > d ? "" : 0 == d ? ";expires=" + (new Date(1970, 1, 1)).toUTCString() : ";expires=" + (new Date(Date.now() + 1E3 * d)).toUTCString()) + (g ? ";secure" : "") + (null != h ? ";samesite=" + h : "")
};
q.get = function(a, b) {
    const c = a + "=",
        d = (this.h.cookie || "").split(";");
    for (let e = 0, f; e < d.length; e++) {
        f = Ca(d[e]);
        if (0 == f.lastIndexOf(c, 0)) return f.slice(c.length);
        if (f == a) return ""
    }
    return b
};
q.remove = function(a, b, c) {
    const d = void 0 !== this.get(a);
    this.set(a, "", {
        za: 0,
        path: b,
        domain: c
    });
    return d
};
q.clear = function() {
    var a = (this.h.cookie || "").split(";");
    const b = [],
        c = [];
    let d, e;
    for (let f = 0; f < a.length; f++) e = Ca(a[f]), d = e.indexOf("="), -1 == d ? (b.push(""), c.push(e)) : (b.push(e.substring(0, d)), c.push(e.substring(d + 1)));
    for (a = b.length - 1; 0 <= a; a--) this.remove(b[a])
};

function Ed() {
    return !!Cd.FPA_SAMESITE_PHASE2_MOD || !1
}

function Fd(a, b, c, d) {
    (a = t[a]) || "undefined" === typeof document || (a = (new Dd).get(b));
    return a ? zd(a, c, d) : null
};
"undefined" !== typeof TextDecoder && new TextDecoder;
"undefined" !== typeof TextEncoder && new TextEncoder;
const Gd = self;
class Hd {
    constructor() {
        this.promise = new Promise(a => {
            this.resolve = a
        })
    }
};

function I(a) {
    Nc.call(this);
    this.s = 1;
    this.m = [];
    this.o = 0;
    this.h = [];
    this.i = {};
    this.v = !!a
}
ma(I, Nc);
q = I.prototype;
q.Fa = function(a, b, c) {
    var d = this.i[a];
    d || (d = this.i[a] = []);
    var e = this.s;
    this.h[e] = a;
    this.h[e + 1] = b;
    this.h[e + 2] = c;
    this.s = e + 3;
    d.push(e);
    return e
};
q.qa = function(a) {
    var b = this.h[a];
    if (b) {
        var c = this.i[b];
        0 != this.o ? (this.m.push(a), this.h[a + 1] = () => {}) : (c && ra(c, a), delete this.h[a], delete this.h[a + 1], delete this.h[a + 2])
    }
    return !!b
};
q.oa = function(a, b) {
    var c = this.i[a];
    if (c) {
        for (var d = Array(arguments.length - 1), e = 1, f = arguments.length; e < f; e++) d[e - 1] = arguments[e];
        if (this.v)
            for (e = 0; e < c.length; e++) {
                var g = c[e];
                Id(this.h[g + 1], this.h[g + 2], d)
            } else {
                this.o++;
                try {
                    for (e = 0, f = c.length; e < f && !this.j; e++) g = c[e], this.h[g + 1].apply(this.h[g + 2], d)
                } finally {
                    if (this.o--, 0 < this.m.length && 0 == this.o)
                        for (; c = this.m.pop();) this.qa(c)
                }
            }
        return 0 != e
    }
    return !1
};

function Id(a, b, c) {
    cd(function() {
        a.apply(b, c)
    })
}
q.clear = function(a) {
    if (a) {
        var b = this.i[a];
        b && (b.forEach(this.qa, this), delete this.i[a])
    } else this.h.length = 0, this.i = {}
};
q.R = function() {
    I.eb.R.call(this);
    this.clear();
    this.m.length = 0
};
/*

 (The MIT License)

 Copyright (C) 2014 by Vitaly Puzrin

 Permission is hereby granted, free of charge, to any person obtaining a copy
 of this software and associated documentation files (the "Software"), to deal
 in the Software without restriction, including without limitation the rights
 to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 copies of the Software, and to permit persons to whom the Software is
 furnished to do so, subject to the following conditions:

 The above copyright notice and this permission notice shall be included in
 all copies or substantial portions of the Software.

 THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 THE SOFTWARE.

 -----------------------------------------------------------------------------
 Ported from zlib, which is under the following license
 https://github.com/madler/zlib/blob/master/zlib.h

 zlib.h -- interface of the 'zlib' general purpose compression library
   version 1.2.8, April 28th, 2013
   Copyright (C) 1995-2013 Jean-loup Gailly and Mark Adler
   This software is provided 'as-is', without any express or implied
   warranty.  In no event will the authors be held liable for any damages
   arising from the use of this software.
   Permission is granted to anyone to use this software for any purpose,
   including commercial applications, and to alter it and redistribute it
   freely, subject to the following restrictions:
   1. The origin of this software must not be misrepresented; you must not
      claim that you wrote the original software. If you use this software
      in a product, an acknowledgment in the product documentation would be
      appreciated but is not required.
   2. Altered source versions must be plainly marked as such, and must not be
      misrepresented as being the original software.
   3. This notice may not be removed or altered from any source distribution.
   Jean-loup Gailly        Mark Adler
   jloup@gzip.org          madler@alumni.caltech.edu
   The data format used by the zlib library is described by RFCs (Request for
   Comments) 1950 to 1952 in the files http://tools.ietf.org/html/rfc1950
   (zlib format), rfc1951 (deflate format) and rfc1952 (gzip format).
*/
let J = {};
var Jd = "undefined" !== typeof Uint8Array && "undefined" !== typeof Uint16Array && "undefined" !== typeof Int32Array;
J.assign = function(a) {
    for (var b = Array.prototype.slice.call(arguments, 1); b.length;) {
        var c = b.shift();
        if (c) {
            if ("object" !== typeof c) throw new TypeError(c + "must be non-object");
            for (var d in c) Object.prototype.hasOwnProperty.call(c, d) && (a[d] = c[d])
        }
    }
    return a
};
J.oc = function(a, b) {
    if (a.length === b) return a;
    if (a.subarray) return a.subarray(0, b);
    a.length = b;
    return a
};
var Kd = {
        Ia: function(a, b, c, d, e) {
            if (b.subarray && a.subarray) a.set(b.subarray(c, c + d), e);
            else
                for (var f = 0; f < d; f++) a[e + f] = b[c + f]
        },
        Pa: function(a) {
            var b, c;
            var d = c = 0;
            for (b = a.length; d < b; d++) c += a[d].length;
            var e = new Uint8Array(c);
            d = c = 0;
            for (b = a.length; d < b; d++) {
                var f = a[d];
                e.set(f, c);
                c += f.length
            }
            return e
        }
    },
    Ld = {
        Ia: function(a, b, c, d, e) {
            for (var f = 0; f < d; f++) a[e + f] = b[c + f]
        },
        Pa: function(a) {
            return [].concat.apply([], a)
        }
    };
J.cb = function() {
    Jd ? (J.Ea = Uint8Array, J.Ca = Uint16Array, J.Da = Int32Array, J.assign(J, Kd)) : (J.Ea = Array, J.Ca = Array, J.Da = Array, J.assign(J, Ld))
};
J.cb();
try {
    new Uint8Array(1)
} catch (a) {};

function Md(a) {
    for (var b = a.length; 0 <= --b;) a[b] = 0
}
Md(Array(576));
Md(Array(60));
Md(Array(512));
Md(Array(256));
Md(Array(29));
Md(Array(30));
/*

Math.uuid.js (v1.4)
http://www.broofa.com
mailto:robert@broofa.com
Copyright (c) 2010 Robert Kieffer
Dual licensed under the MIT and GPL licenses.
*/
var Nd = "0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz".split("");
var Od = class {
    constructor(a) {
        this.name = a
    }
};
var Pd = new Od("rawColdConfigGroup");
var Qd = new Od("rawHotConfigGroup");

function Rd(a, b) {
    return B(a, 1, b)
}
var Sd = class extends E {
    constructor(a) {
        super(a)
    }
};
var Td = class extends E {
    constructor(a) {
        super(a)
    }
};
Td.B = [1];
var Ud = class extends E {
    constructor(a) {
        super(a)
    }
};
var Vd = class extends E {
    constructor(a) {
        super(a)
    }
};
var Wd = class extends E {
    constructor(a) {
        super(a)
    }
};
Wd.B = [2];
var Xd = class extends E {
    constructor(a) {
        super(a)
    }
    getPlayerType() {
        return kc(A(this, 36), 0)
    }
    setHomeGroupInfo(a) {
        return C(this, Wd, 81, a)
    }
    clearLocationPlayabilityToken() {
        return B(this, 89, void 0, !1)
    }
};
Xd.B = [9, 66, 24, 32, 86, 100, 101];
var Zd = class extends E {
        constructor(a) {
            super(a)
        }
        getKey() {
            return D(this, 1)
        }
        O() {
            return D(this, 2 === cc(this, Yd) ? 2 : -1)
        }
    },
    Yd = [2, 3, 4, 5, 6];
var $d = class extends E {
    constructor(a) {
        super(a)
    }
};
$d.B = [15, 26, 28];
var ae = class extends E {
    constructor(a) {
        super(a)
    }
};
ae.B = [5];
var be = class extends E {
    constructor(a) {
        super(a)
    }
};
var ce = class extends E {
    constructor(a) {
        super(a)
    }
    setSafetyMode(a) {
        return B(this, 5, a)
    }
};
ce.B = [12];
var de = class extends E {
    constructor(a) {
        super(a)
    }
    l(a) {
        return C(this, Xd, 1, a)
    }
};
de.B = [12];
var ee = class extends E {
    constructor(a) {
        super(a)
    }
    getKey() {
        return D(this, 1)
    }
    O() {
        return D(this, 2)
    }
};
var fe = class extends E {
    constructor(a) {
        super(a)
    }
};
fe.B = [4, 5];
var ge = class extends E {
    constructor(a) {
        super(a)
    }
};
var he = class extends E {
        constructor(a) {
            super(a)
        }
    },
    ie = [2, 3, 4, 5];
var je = class extends E {
    constructor(a) {
        super(a)
    }
    getMessage() {
        return D(this, 1)
    }
};
var ke = class extends E {
    constructor(a) {
        super(a)
    }
};
var le = class extends E {
    constructor(a) {
        super(a)
    }
};
var me = class extends E {
    constructor(a) {
        super(a)
    }
};
me.B = [10, 17];
var ne = class extends E {
    constructor(a) {
        super(a)
    }
};
var K = class extends E {
    constructor(a) {
        super(a)
    }
};
var oe = class extends E {
    constructor(a) {
        super(a)
    }
};
var pe = class extends E {
    constructor(a) {
        super(a)
    }
};
var qe = class extends E {
    constructor(a) {
        super(a)
    }
    getVideoData() {
        return dc(this, pe, 15)
    }
};
qe.B = [4];

function re(a, b) {
    C(a, K, 1, b)
}
var se = class extends E {
    constructor(a) {
        super(a)
    }
};

function te(a, b) {
    return C(a, K, 1, b)
}
var ue = class extends E {
    constructor(a) {
        super(a)
    }
    h(a) {
        return B(this, 2, a)
    }
};

function ve(a, b) {
    return C(a, K, 2, b)
}
var we = class extends E {
    constructor(a) {
        super(a)
    }
    h(a) {
        return B(this, 1, a)
    }
};
we.B = [3];
var xe = class extends E {
    constructor(a) {
        super(a)
    }
    h(a) {
        return B(this, 1, a)
    }
};
var ye = class extends E {
    constructor(a) {
        super(a)
    }
    h(a) {
        return B(this, 1, a)
    }
};
var ze = class extends E {
    constructor(a) {
        super(a)
    }
    h(a) {
        return B(this, 1, a)
    }
};
var Ae = class extends E {
    constructor(a) {
        super(a)
    }
    h(a) {
        return B(this, 1, a)
    }
};
var Be = class extends E {
    constructor(a) {
        super(a)
    }
};
var Ce = class extends E {
    constructor(a) {
        super(a)
    }
};
var L = class extends E {
        constructor(a) {
            super(a, 475)
        }
    },
    De = [2, 3, 5, 6, 7, 11, 13, 20, 21, 22, 23, 24, 28, 32, 37, 45, 59, 72, 73, 74, 76, 78, 79, 80, 85, 91, 97, 100, 102, 105, 111, 117, 119, 126, 127, 136, 146, 148, 151, 156, 157, 158, 159, 163, 164, 168, 176, 177, 178, 179, 184, 188, 189, 190, 191, 193, 194, 195, 196, 197, 198, 199, 200, 201, 202, 203, 204, 205, 206, 208, 209, 215, 219, 222, 225, 226, 227, 229, 232, 233, 234, 240, 241, 244, 247, 248, 249, 251, 254, 255, 256, 257, 258, 259, 260, 261, 266, 270, 272, 278, 288, 291, 293, 300, 304, 308, 309, 310, 311, 313, 314, 319, 320, 321, 323, 324, 327, 328, 330, 331,
        332, 334, 337, 338, 340, 344, 348, 350, 351, 352, 353, 354, 355, 356, 357, 358, 361, 363, 364, 368, 369, 370, 373, 374, 375, 378, 380, 381, 383, 388, 389, 402, 403, 410, 411, 412, 413, 414, 415, 416, 417, 418, 423, 424, 425, 426, 427, 429, 430, 431, 439, 441, 444, 448, 458, 469, 471, 473, 474
    ];
var Ee = {
    Jb: 0,
    qb: 1,
    wb: 2,
    xb: 4,
    Db: 8,
    yb: 16,
    zb: 32,
    Ib: 64,
    Hb: 128,
    sb: 256,
    ub: 512,
    Bb: 1024,
    tb: 2048,
    vb: 4096,
    rb: 8192,
    Ab: 16384,
    Eb: 32768,
    Cb: 65536,
    Fb: 131072,
    Gb: 262144
};
var Fe = class extends E {
    constructor(a) {
        super(a)
    }
};
var He = class extends E {
        constructor(a) {
            super(a)
        }
        setVideoId(a) {
            return bc(this, 1, Ge, a)
        }
        getPlaylistId() {
            var a = 2 === cc(this, Ge) ? 2 : -1;
            return A(this, a)
        }
    },
    Ge = [1, 2];
var Ie = class extends E {
    constructor() {
        super()
    }
};
Ie.B = [3];
var Je = new Od("recordNotificationInteractionsEndpoint");
var Ke = ["notification/convert_endpoint_to_url"],
    Le = ["notification/record_interactions"],
    Me = ["notification_registration/set_registration"];
var Ne = a => self.btoa(String.fromCharCode.apply(null, Array.from(new Uint8Array(a)))).replace(/\+/g, "-").replace(/\//g, "_");
var Oe = ["notifications_register", "notifications_check_registration"];
var Pe = class extends Error {
    constructor(a, ...b) {
        super(a);
        this.args = [...b]
    }
};
let Qe = null;

function M(a, b) {
    const c = {};
    c.key = a;
    c.value = b;
    return Re().then(d => new Promise((e, f) => {
        try {
            const g = d.transaction("swpushnotificationsstore", "readwrite").objectStore("swpushnotificationsstore").put(c);
            g.onsuccess = () => {
                e()
            };
            g.onerror = () => {
                f()
            }
        } catch (g) {
            f(g)
        }
    }))
}

function Se() {
    return M("IndexedDBCheck", "testing IndexedDB").then(() => Te("IndexedDBCheck")).then(a => "testing IndexedDB" === a ? Promise.resolve() : Promise.reject()).then(() => !0).catch(() => !1)
}

function Te(a) {
    const b = new Pe("Error accessing DB");
    return Re().then(c => new Promise((d, e) => {
        try {
            const f = c.transaction("swpushnotificationsstore").objectStore("swpushnotificationsstore").get(a);
            f.onsuccess = () => {
                const g = f.result;
                d(g ? g.value : null)
            };
            f.onerror = () => {
                b.params = {
                    key: a,
                    source: "onerror"
                };
                e(b)
            }
        } catch (f) {
            b.params = {
                key: a,
                thrownError: String(f)
            }, e(b)
        }
    }), () => null)
}

function Re() {
    return Qe ? Promise.resolve(Qe) : new Promise((a, b) => {
        const c = self.indexedDB.open("swpushnotificationsdb");
        c.onerror = b;
        c.onsuccess = () => {
            const d = c.result;
            if (d.objectStoreNames.contains("swpushnotificationsstore")) Qe = d, a(Qe);
            else return self.indexedDB.deleteDatabase("swpushnotificationsdb"), Re()
        };
        c.onupgradeneeded = Ue
    })
}

function Ue(a) {
    a = a.target.result;
    a.objectStoreNames.contains("swpushnotificationsstore") && a.deleteObjectStore("swpushnotificationsstore");
    a.createObjectStore("swpushnotificationsstore", {
        keyPath: "key"
    })
};
const Ve = {
    WEB_UNPLUGGED: "^unplugged/",
    WEB_UNPLUGGED_ONBOARDING: "^unplugged/",
    WEB_UNPLUGGED_OPS: "^unplugged/",
    WEB_UNPLUGGED_PUBLIC: "^unplugged/",
    WEB_CREATOR: "^creator/",
    WEB_KIDS: "^kids/",
    WEB_EXPERIMENTS: "^experiments/",
    WEB_MUSIC: "^music/",
    WEB_REMIX: "^music/",
    WEB_MUSIC_EMBEDDED_PLAYER: "^music/",
    WEB_MUSIC_EMBEDDED_PLAYER: "^main_app/|^sfv/"
};

function We(a) {
    if (1 === a.length) return a[0];
    var b = Ve.UNKNOWN_INTERFACE;
    if (b) {
        b = new RegExp(b);
        for (var c of a)
            if (b.exec(c)) return c
    }
    const d = [];
    Object.entries(Ve).forEach(([e, f]) => {
        "UNKNOWN_INTERFACE" !== e && d.push(f)
    });
    c = new RegExp(d.join("|"));
    a.sort((e, f) => e.length - f.length);
    for (const e of a)
        if (!c.exec(e)) return e;
    return a[0]
}

function Xe(a) {
    return `/youtubei/v1/${We(a)}`
};
const Ye = t.window;
let Ze, $e;
const af = (null == Ye ? void 0 : null == (Ze = Ye.yt) ? void 0 : Ze.config_) || (null == Ye ? void 0 : null == ($e = Ye.ytcfg) ? void 0 : $e.data_) || {};
v("yt.config_", af);

function N(...a) {
    a = arguments;
    1 < a.length ? af[a[0]] = a[1] : 1 === a.length && Object.assign(af, a[0])
}

function O(a, b) {
    return a in af ? af[a] : b
}

function bf() {
    return O("LATEST_ECATCHER_SERVICE_TRACKING_PARAMS")
}

function cf() {
    const a = af.EXPERIMENT_FLAGS;
    return a ? a.web_disable_gel_stp_ecatcher_killswitch : void 0
};
const df = [];

function ef(a) {
    df.forEach(b => b(a))
}

function P(a) {
    return a && window.yterr ? function() {
        try {
            return a.apply(this, arguments)
        } catch (b) {
            ff(b)
        }
    } : a
}

function ff(a) {
    var b = w("yt.logging.errors.log");
    b ? b(a, "ERROR", void 0, void 0, void 0, void 0, void 0) : (b = O("ERRORS", []), b.push([a, "ERROR", void 0, void 0, void 0, void 0, void 0]), N("ERRORS", b));
    ef(a)
}

function gf(a) {
    var b = w("yt.logging.errors.log");
    b ? b(a, "WARNING", void 0, void 0, void 0, void 0, void 0) : (b = O("ERRORS", []), b.push([a, "WARNING", void 0, void 0, void 0, void 0, void 0]), N("ERRORS", b))
};

function Q(a) {
    a = hf(a);
    return "string" === typeof a && "false" === a ? !1 : !!a
}

function jf(a, b) {
    a = hf(a);
    return void 0 === a && void 0 !== b ? b : Number(a || 0)
}

function kf() {
    const a = hf("web_async_context_processor_impl");
    return void 0 !== a ? String(a) : ""
}

function lf() {
    return O("EXPERIMENTS_TOKEN", "")
}

function hf(a) {
    const b = O("EXPERIMENTS_FORCED_FLAGS", {}) || {};
    return void 0 !== b[a] ? b[a] : O("EXPERIMENT_FLAGS", {})[a]
}

function mf() {
    const a = [],
        b = O("EXPERIMENTS_FORCED_FLAGS", {});
    for (var c of Object.keys(b)) a.push({
        key: c,
        value: String(b[c])
    });
    c = O("EXPERIMENT_FLAGS", {});
    for (const d of Object.keys(c)) d.startsWith("force_") && void 0 === b[d] && a.push({
        key: d,
        value: String(c[d])
    });
    return a
};

function nf(a, b) {
    if (a) return a[b.name]
};
let of = 0;
v("ytDomDomGetNextId", w("ytDomDomGetNextId") || (() => ++ of ));

function pf(a) {
    this.version = 1;
    this.args = a
};

function qf() {
    var a = rf;
    this.topic = "screen-created";
    this.h = a
}
qf.prototype.toString = function() {
    return this.topic
};

function sf(a, b) {
    "function" === typeof a && (a = P(a));
    return window.setTimeout(a, b)
};

function tf(a, b) {
    return uf(a, 0, b)
}
var vf = class {
    h(a, b) {
        uf(a, 1, b)
    }
};

function uf(a, b, c) {
    void 0 !== c && Number.isNaN(Number(c)) && (c = void 0);
    const d = w("yt.scheduler.instance.addJob");
    return d ? d(a, b, c) : void 0 === c ? (a(), NaN) : sf(a, c || 0)
}
var wf = class extends vf {
    i(a) {
        if (void 0 === a || !Number.isNaN(Number(a))) {
            var b = w("yt.scheduler.instance.cancelJob");
            b ? b(a) : window.clearTimeout(a)
        }
    }
    start() {
        const a = w("yt.scheduler.instance.start");
        a && a()
    }
};
wf.h || (wf.h = new wf);
var xf = wf.h;
const yf = w("ytPubsub2Pubsub2Instance") || new I;
I.prototype.subscribe = I.prototype.Fa;
I.prototype.unsubscribeByKey = I.prototype.qa;
I.prototype.publish = I.prototype.oa;
I.prototype.clear = I.prototype.clear;
v("ytPubsub2Pubsub2Instance", yf);
const zf = w("ytPubsub2Pubsub2SubscribedKeys") || {};
v("ytPubsub2Pubsub2SubscribedKeys", zf);
const Af = w("ytPubsub2Pubsub2TopicToKeys") || {};
v("ytPubsub2Pubsub2TopicToKeys", Af);
const Bf = w("ytPubsub2Pubsub2IsAsync") || {};
v("ytPubsub2Pubsub2IsAsync", Bf);
v("ytPubsub2Pubsub2SkipSubKey", null);

function Cf(a, b) {
    const c = Df();
    c && c.publish.call(c, a.toString(), a, b)
}

function Ef(a) {
    var b = Ff;
    const c = Df();
    if (!c) return 0;
    const d = c.subscribe(b.toString(), (e, f) => {
        var g = w("ytPubsub2Pubsub2SkipSubKey");
        g && g == d || (g = () => {
            if (zf[d]) try {
                if (f && b instanceof qf && b != e) try {
                    var h = b.h,
                        k = f;
                    if (!k.args || !k.version) throw Error("yt.pubsub2.Data.deserialize(): serializedData is incomplete.");
                    try {
                        if (!h.Ba) {
                            const p = new h;
                            h.Ba = p.version
                        }
                        var l = h.Ba
                    } catch (p) {}
                    if (!l || k.version != l) throw Error("yt.pubsub2.Data.deserialize(): serializedData version is incompatible.");
                    try {
                        l = Reflect;
                        var m = l.construct; {
                            var n = k.args;
                            const p = n.length;
                            if (0 < p) {
                                const y = Array(p);
                                for (k = 0; k < p; k++) y[k] = n[k];
                                var u = y
                            } else u = []
                        }
                        f = m.call(l, h, u)
                    } catch (p) {
                        throw p.message = "yt.pubsub2.Data.deserialize(): " + p.message, p;
                    }
                } catch (p) {
                    throw p.message = "yt.pubsub2.pubsub2 cross-binary conversion error for " + b.toString() + ": " + p.message, p;
                }
                a.call(window, f)
            } catch (p) {
                ff(p)
            }
        }, Bf[b.toString()] ? w("yt.scheduler.instance") ? xf.h(g) : sf(g, 0) : g())
    });
    zf[d] = !0;
    Af[b.toString()] || (Af[b.toString()] = []);
    Af[b.toString()].push(d);
    return d
}

function Gf() {
    var a = Hf;
    const b = Ef(function(c) {
        a.apply(void 0, arguments);
        If(b)
    });
    return b
}

function If(a) {
    const b = Df();
    b && ("number" === typeof a && (a = [a]), pa(a, c => {
        b.unsubscribeByKey(c);
        delete zf[c]
    }))
}

function Df() {
    return w("ytPubsub2Pubsub2Instance")
};
let Jf = Date.now().toString();

function Kf() {
    const a = Array(16);
    for (var b = 0; 16 > b; b++) {
        var c = Date.now();
        for (let d = 0; d < c % 23; d++) a[b] = Math.random();
        a[b] = Math.floor(256 * Math.random())
    }
    if (Jf)
        for (b = 1, c = 0; c < Jf.length; c++) a[b % 16] = a[b % 16] ^ a[(b - 1) % 16] / 4 ^ Jf.charCodeAt(c), b++;
    return a
}

function Lf() {
    if (window.crypto && window.crypto.getRandomValues) try {
        const a = Array(16),
            b = new Uint8Array(16);
        window.crypto.getRandomValues(b);
        for (let c = 0; c < a.length; c++) a[c] = b[c];
        return a
    } catch (a) {}
    return Kf()
};
const Mf = window;
var R = Mf.ytcsi && Mf.ytcsi.now ? Mf.ytcsi.now : Mf.performance && Mf.performance.timing && Mf.performance.now && Mf.performance.timing.navigationStart ? () => Mf.performance.timing.navigationStart + Mf.performance.now() : () => (new Date).getTime();
const Nf = /^[\w.]*$/,
    Of = {
        q: !0,
        search_query: !0
    };

function Pf(a, b) {
    b = a.split(b);
    const c = {};
    for (let f = 0, g = b.length; f < g; f++) {
        const h = b[f].split("=");
        if (1 == h.length && h[0] || 2 == h.length) try {
            const k = Qf(h[0] || ""),
                l = Qf(h[1] || "");
            k in c ? Array.isArray(c[k]) ? sa(c[k], l) : c[k] = [c[k], l] : c[k] = l
        } catch (k) {
            var d = k,
                e = h[0];
            const l = String(Pf);
            d.args = [{
                key: e,
                value: h[1],
                query: a,
                method: Rf == l ? "unchanged" : l
            }];
            Of.hasOwnProperty(e) || gf(d)
        }
    }
    return c
}
const Rf = String(Pf);

function Sf(a) {
    "?" == a.charAt(0) && (a = a.substr(1));
    return Pf(a, "&")
}

function Tf(a, b, c) {
    var d = a.split("#", 2);
    a = d[0];
    d = 1 < d.length ? "#" + d[1] : "";
    var e = a.split("?", 2);
    a = e[0];
    e = Sf(e[1] || "");
    for (var f in b) !c && null !== e && f in e || (e[f] = b[f]);
    b = a;
    a = Pa(e);
    a ? (c = b.indexOf("#"), 0 > c && (c = b.length), f = b.indexOf("?"), 0 > f || f > c ? (f = c, e = "") : e = b.substring(f + 1, c), b = [b.slice(0, f), e, b.slice(c)], c = b[1], b[1] = a ? c ? c + "&" + a : a : c, a = b[0] + (b[1] ? "?" + b[1] : "") + b[2]) : a = b;
    return a + d
}

function Uf(a) {
    if (!b) var b = window.location.href;
    const c = a.match(Ma)[1] || null,
        d = Na(a.match(Ma)[3] || null);
    c && d ? (a = a.match(Ma), b = b.match(Ma), a = a[3] == b[3] && a[1] == b[1] && a[4] == b[4]) : a = d ? Na(b.match(Ma)[3] || null) == d && (Number(b.match(Ma)[4] || null) || null) == (Number(a.match(Ma)[4] || null) || null) : !0;
    return a
}

function Qf(a) {
    return a && a.match(Nf) ? a : decodeURIComponent(a.replace(/\+/g, " "))
};
[...wd];
let Vf = !1;

function Wf(a, b) {
    const c = {
        method: b.method || "GET",
        credentials: "same-origin"
    };
    b.headers && (c.headers = b.headers);
    a = Xf(a, b);
    const d = Yf(a, b);
    d && (c.body = d);
    b.withCredentials && (c.credentials = "include");
    const e = b.context || t;
    let f = !1,
        g;
    fetch(a, c).then(h => {
        if (!f) {
            f = !0;
            g && window.clearTimeout(g);
            var k = h.ok,
                l = m => {
                    m = m || {};
                    k ? b.onSuccess && b.onSuccess.call(e, m, h) : b.onError && b.onError.call(e, m, h);
                    b.onFinish && b.onFinish.call(e, m, h)
                };
            "JSON" == (b.format || "JSON") && (k || 400 <= h.status && 500 > h.status) ? h.json().then(l, function() {
                l(null)
            }): l(null)
        }
    }).catch(() => {
        b.onError && b.onError.call(e, {}, {})
    });
    a = b.timeout || 0;
    b.onFetchTimeout && 0 < a && (g = sf(() => {
        f || (f = !0, window.clearTimeout(g), b.onFetchTimeout.call(b.context || t))
    }, a))
}

function Xf(a, b) {
    b.includeDomain && (a = document.location.protocol + "//" + document.location.hostname + (document.location.port ? ":" + document.location.port : "") + a);
    const c = O("XSRF_FIELD_NAME");
    if (b = b.urlParams) b[c] && delete b[c], a = Tf(a, b || {}, !0);
    return a
}

function Yf(a, b) {
    const c = O("XSRF_FIELD_NAME"),
        d = O("XSRF_TOKEN");
    var e = b.postBody || "",
        f = b.postParams;
    const g = O("XSRF_FIELD_NAME");
    let h;
    b.headers && (h = b.headers["Content-Type"]);
    b.excludeXsrf || Na(a.match(Ma)[3] || null) && !b.withCredentials && Na(a.match(Ma)[3] || null) != document.location.hostname || "POST" != b.method || h && "application/x-www-form-urlencoded" != h || b.postParams && b.postParams[g] || (f || (f = {}), f[c] = d);
    (Q("ajax_parse_query_data_only_when_filled") && f && 0 < Object.keys(f).length || f) && "string" === typeof e &&
        (e = Sf(e), ya(e, f), e = b.postBodyFormat && "JSON" == b.postBodyFormat ? JSON.stringify(e) : Pa(e));
    f = e || f && !va(f);
    !Vf && f && "POST" != b.method && (Vf = !0, ff(Error("AJAX request with postData should use POST")));
    return e
};
const Zf = [{
    la: a => `Cannot read property '${a.key}'`,
    da: {
        Error: [{
            A: /(Permission denied) to access property "([^']+)"/,
            groups: ["reason", "key"]
        }],
        TypeError: [{
            A: /Cannot read property '([^']+)' of (null|undefined)/,
            groups: ["key", "value"]
        }, {
            A: /\u65e0\u6cd5\u83b7\u53d6\u672a\u5b9a\u4e49\u6216 (null|undefined) \u5f15\u7528\u7684\u5c5e\u6027\u201c([^\u201d]+)\u201d/,
            groups: ["value", "key"]
        }, {
            A: /\uc815\uc758\ub418\uc9c0 \uc54a\uc74c \ub610\ub294 (null|undefined) \ucc38\uc870\uc778 '([^']+)' \uc18d\uc131\uc744 \uac00\uc838\uc62c \uc218 \uc5c6\uc2b5\ub2c8\ub2e4./,
            groups: ["value", "key"]
        }, {
            A: /No se puede obtener la propiedad '([^']+)' de referencia nula o sin definir/,
            groups: ["key"]
        }, {
            A: /Unable to get property '([^']+)' of (undefined or null) reference/,
            groups: ["key", "value"]
        }, {
            A: /(null) is not an object \(evaluating '(?:([^.]+)\.)?([^']+)'\)/,
            groups: ["value", "base", "key"]
        }]
    }
}, {
    la: a => `Cannot call '${a.key}'`,
    da: {
        TypeError: [{
                A: /(?:([^ ]+)?\.)?([^ ]+) is not a function/,
                groups: ["base", "key"]
            }, {
                A: /([^ ]+) called on (null or undefined)/,
                groups: ["key", "value"]
            }, {
                A: /Object (.*) has no method '([^ ]+)'/,
                groups: ["base", "key"]
            }, {
                A: /Object doesn't support property or method '([^ ]+)'/,
                groups: ["key"]
            }, {
                A: /\u30aa\u30d6\u30b8\u30a7\u30af\u30c8\u306f '([^']+)' \u30d7\u30ed\u30d1\u30c6\u30a3\u307e\u305f\u306f\u30e1\u30bd\u30c3\u30c9\u3092\u30b5\u30dd\u30fc\u30c8\u3057\u3066\u3044\u307e\u305b\u3093/,
                groups: ["key"]
            },
            {
                A: /\uac1c\uccb4\uac00 '([^']+)' \uc18d\uc131\uc774\ub098 \uba54\uc11c\ub4dc\ub97c \uc9c0\uc6d0\ud558\uc9c0 \uc54a\uc2b5\ub2c8\ub2e4./,
                groups: ["key"]
            }
        ]
    }
}, {
    la: a => `${a.key} is not defined`,
    da: {
        ReferenceError: [{
            A: /(.*) is not defined/,
            groups: ["key"]
        }, {
            A: /Can't find variable: (.*)/,
            groups: ["key"]
        }]
    }
}];
var ag = {
    K: [],
    H: [{
        callback: $f,
        weight: 500
    }]
};

function $f(a) {
    if ("JavaException" === a.name) return !0;
    a = a.stack;
    return a.includes("chrome://") || a.includes("chrome-extension://") || a.includes("moz-extension://")
};

function bg() {
    if (!cg) {
        var a = cg = new dg;
        a.K.length = 0;
        a.H.length = 0;
        eg(a, ag)
    }
    return cg
}

function eg(a, b) {
    b.K && a.K.push.apply(a.K, b.K);
    b.H && a.H.push.apply(a.H, b.H)
}
var dg = class {
        constructor() {
            this.H = [];
            this.K = []
        }
    },
    cg;
const fg = new I;

function gg(a) {
    const b = a.length;
    let c = 0;
    const d = () => a.charCodeAt(c++);
    do {
        var e = hg(d);
        if (Infinity === e) break;
        const f = e >> 3;
        switch (e & 7) {
            case 0:
                e = hg(d);
                if (2 === f) return e;
                break;
            case 1:
                if (2 === f) return;
                c += 8;
                break;
            case 2:
                e = hg(d);
                if (2 === f) return a.substr(c, e);
                c += e;
                break;
            case 5:
                if (2 === f) return;
                c += 4;
                break;
            default:
                return
        }
    } while (c < b)
}

function hg(a) {
    let b = a(),
        c = b & 127;
    if (128 > b) return c;
    b = a();
    c |= (b & 127) << 7;
    if (128 > b) return c;
    b = a();
    c |= (b & 127) << 14;
    if (128 > b) return c;
    b = a();
    return 128 > b ? c | (b & 127) << 21 : Infinity
};

function ig(a, b, c, d) {
    if (a)
        if (Array.isArray(a)) {
            var e = d;
            for (d = 0; d < a.length && !(a[d] && (e += jg(d, a[d], b, c), 500 < e)); d++);
            d = e
        } else if ("object" === typeof a)
        for (e in a) {
            if (a[e]) {
                var f = e;
                var g = a[e],
                    h = b,
                    k = c;
                f = "string" !== typeof g || "clickTrackingParams" !== f && "trackingParams" !== f ? 0 : (g = gg(atob(g.replace(/-/g, "+").replace(/_/g, "/")))) ? jg(`${f}.ve`, g, h, k) : 0;
                d += f;
                d += jg(e, a[e], b, c);
                if (500 < d) break
            }
        } else c[b] = kg(a), d += c[b].length;
    else c[b] = kg(a), d += c[b].length;
    return d
}

function jg(a, b, c, d) {
    c += `.${a}`;
    a = kg(b);
    d[c] = a;
    return c.length + a.length
}

function kg(a) {
    try {
        return ("string" === typeof a ? a : String(JSON.stringify(a))).substr(0, 500)
    } catch (b) {
        return `unable to serialize ${typeof a} (${b.message})`
    }
};

function lg() {
    mg.h || (mg.h = new mg);
    return mg.h
}

function ng(a, b) {
    a = {};
    var c = [],
        d = vd(String(t.location.href));
    var e = [];
    var f = t.__SAPISID || t.__APISID || t.__3PSAPISID || t.__OVERRIDE_SID;
    Ed() && (f = f || t.__1PSAPISID);
    if (f) f = !0;
    else {
        if ("undefined" !== typeof document) {
            var g = new Dd;
            f = g.get("SAPISID") || g.get("APISID") || g.get("__Secure-3PAPISID") || g.get("SID") || g.get("OSID");
            Ed() && (f = f || g.get("__Secure-1PAPISID"))
        }
        f = !!f
    }
    f && (g = (f = d = 0 == d.indexOf("https:") || 0 == d.indexOf("chrome-extension:") || 0 == d.indexOf("moz-extension:")) ? t.__SAPISID : t.__APISID, g || "undefined" ===
        typeof document || (g = new Dd, g = g.get(f ? "SAPISID" : "APISID") || g.get("__Secure-3PAPISID")), (f = g ? zd(g, f ? "SAPISIDHASH" : "APISIDHASH", c) : null) && e.push(f), d && Ed() && ((d = Fd("__1PSAPISID", "__Secure-1PAPISID", "SAPISID1PHASH", c)) && e.push(d), (c = Fd("__3PSAPISID", "__Secure-3PAPISID", "SAPISID3PHASH", c)) && e.push(c)));
    if (e = 0 == e.length ? null : e.join(" ")) a.Authorization = e, e = b = null == b ? void 0 : b.sessionIndex, void 0 === e && (e = Number(O("SESSION_INDEX", 0)), e = isNaN(e) ? 0 : e), Q("voice_search_auth_header_removal") || (a["X-Goog-AuthUser"] =
        e.toString()), "INNERTUBE_HOST_OVERRIDE" in af || (a["X-Origin"] = window.location.origin), void 0 === b && "DELEGATED_SESSION_ID" in af && (a["X-Goog-PageId"] = O("DELEGATED_SESSION_ID"));
    return a
}
var mg = class {
    constructor() {
        this.fb = !0
    }
};
var og = {
    identityType: "UNAUTHENTICATED_IDENTITY_TYPE_UNKNOWN"
};
v("ytglobal.prefsUserPrefsPrefs_", w("ytglobal.prefsUserPrefsPrefs_") || {});

function pg() {
    if (void 0 !== O("DATASYNC_ID")) return O("DATASYNC_ID");
    throw new Pe("Datasync ID not set", "unknown");
};
const qg = [];
let rg, sg = !1;

function tg(a) {
    sg || (rg ? rg.handleError(a) : (qg.push({
        type: "ERROR",
        payload: a
    }), 10 < qg.length && qg.shift()))
}

function ug(a, b) {
    sg || (rg ? rg.ca(a, b) : (qg.push({
        type: "EVENT",
        eventType: a,
        payload: b
    }), 10 < qg.length && qg.shift()))
};

function vg(a) {
    if (0 <= a.indexOf(":")) throw Error("Database name cannot contain ':'");
}

function wg(a) {
    return a.substr(0, a.indexOf(":")) || a
};
const xg = {
        AUTH_INVALID: "No user identifier specified.",
        EXPLICIT_ABORT: "Transaction was explicitly aborted.",
        IDB_NOT_SUPPORTED: "IndexedDB is not supported.",
        MISSING_INDEX: "Index not created.",
        MISSING_OBJECT_STORES: "Object stores not created.",
        DB_DELETED_BY_MISSING_OBJECT_STORES: "Database is deleted because expected object stores were not created.",
        DB_REOPENED_BY_MISSING_OBJECT_STORES: "Database is reopened because expected object stores were not created.",
        UNKNOWN_ABORT: "Transaction was aborted for unknown reasons.",
        QUOTA_EXCEEDED: "The current transaction exceeded its quota limitations.",
        QUOTA_MAYBE_EXCEEDED: "The current transaction may have failed because of exceeding quota limitations.",
        EXECUTE_TRANSACTION_ON_CLOSED_DB: "Can't start a transaction on a closed database",
        INCOMPATIBLE_DB_VERSION: "The binary is incompatible with the database version"
    },
    yg = {
        AUTH_INVALID: "ERROR",
        EXECUTE_TRANSACTION_ON_CLOSED_DB: "WARNING",
        EXPLICIT_ABORT: "IGNORED",
        IDB_NOT_SUPPORTED: "ERROR",
        MISSING_INDEX: "WARNING",
        MISSING_OBJECT_STORES: "ERROR",
        DB_DELETED_BY_MISSING_OBJECT_STORES: "WARNING",
        DB_REOPENED_BY_MISSING_OBJECT_STORES: "WARNING",
        QUOTA_EXCEEDED: "WARNING",
        QUOTA_MAYBE_EXCEEDED: "WARNING",
        UNKNOWN_ABORT: "WARNING",
        INCOMPATIBLE_DB_VERSION: "WARNING"
    },
    zg = {
        AUTH_INVALID: !1,
        EXECUTE_TRANSACTION_ON_CLOSED_DB: !1,
        EXPLICIT_ABORT: !1,
        IDB_NOT_SUPPORTED: !1,
        MISSING_INDEX: !1,
        MISSING_OBJECT_STORES: !1,
        DB_DELETED_BY_MISSING_OBJECT_STORES: !1,
        DB_REOPENED_BY_MISSING_OBJECT_STORES: !1,
        QUOTA_EXCEEDED: !1,
        QUOTA_MAYBE_EXCEEDED: !0,
        UNKNOWN_ABORT: !0,
        INCOMPATIBLE_DB_VERSION: !1
    };
var S = class extends Pe {
        constructor(a, b = {}, c = xg[a], d = yg[a], e = zg[a]) {
            super(c, Object.assign({}, {
                name: "YtIdbKnownError",
                isSw: void 0 === self.document,
                isIframe: self !== self.top,
                type: a
            }, b));
            this.type = a;
            this.message = c;
            this.level = d;
            this.h = e;
            Object.setPrototypeOf(this, S.prototype)
        }
    },
    Ag = class extends S {
        constructor(a, b) {
            super("MISSING_OBJECT_STORES", {
                expectedObjectStores: b,
                foundObjectStores: a
            }, xg.MISSING_OBJECT_STORES);
            Object.setPrototypeOf(this, Ag.prototype)
        }
    },
    Bg = class extends Error {
        constructor(a, b) {
            super();
            this.index =
                a;
            this.objectStore = b;
            Object.setPrototypeOf(this, Bg.prototype)
        }
    };
const Cg = ["The database connection is closing", "Can't start a transaction on a closed database", "A mutation operation was attempted on a database that did not allow mutations"];

function Dg(a, b, c, d) {
    b = wg(b);
    let e;
    e = a instanceof Error ? a : Error(`Unexpected error: ${a}`);
    if (e instanceof S) return e;
    a = {
        objectStoreNames: c,
        dbName: b,
        dbVersion: d
    };
    if ("QuotaExceededError" === e.name) return new S("QUOTA_EXCEEDED", a);
    if (ab && "UnknownError" === e.name) return new S("QUOTA_MAYBE_EXCEEDED", a);
    if (e instanceof Bg) return new S("MISSING_INDEX", Object.assign({}, a, {
        objectStore: e.objectStore,
        index: e.index
    }));
    if ("InvalidStateError" === e.name && Cg.some(f => e.message.includes(f))) return new S("EXECUTE_TRANSACTION_ON_CLOSED_DB",
        a);
    if ("AbortError" === e.name) return new S("UNKNOWN_ABORT", a, e.message);
    e.args = [Object.assign({}, a, {
        name: "IdbError",
        dc: e.name
    })];
    e.level = "WARNING";
    return e
}

function Eg(a, b, c) {
    return new S("IDB_NOT_SUPPORTED", {
        context: {
            caller: a,
            publicName: b,
            version: c,
            hasSucceededOnce: void 0
        }
    })
};

function Fg(a) {
    if (!a) throw Error();
    throw a;
}

function Gg(a) {
    return a
}
var Hg = class {
    constructor(a) {
        this.h = a
    }
};

function Ig(a, b, c, d, e) {
    try {
        if ("FULFILLED" !== a.state.status) throw Error("calling handleResolve before the promise is fulfilled.");
        const f = c(a.state.value);
        f instanceof Jg ? Kg(a, b, f, d, e) : d(f)
    } catch (f) {
        e(f)
    }
}

function Lg(a, b, c, d, e) {
    try {
        if ("REJECTED" !== a.state.status) throw Error("calling handleReject before the promise is rejected.");
        const f = c(a.state.reason);
        f instanceof Jg ? Kg(a, b, f, d, e) : d(f)
    } catch (f) {
        e(f)
    }
}

function Kg(a, b, c, d, e) {
    b === c ? e(new TypeError("Circular promise chain detected.")) : c.then(f => {
        f instanceof Jg ? Kg(a, b, f, d, e) : d(f)
    }, f => {
        e(f)
    })
}
var Jg = class {
    constructor(a) {
        this.state = {
            status: "PENDING"
        };
        this.h = [];
        this.i = [];
        a = a.h;
        const b = d => {
                if ("PENDING" === this.state.status) {
                    this.state = {
                        status: "FULFILLED",
                        value: d
                    };
                    for (const e of this.h) e()
                }
            },
            c = d => {
                if ("PENDING" === this.state.status) {
                    this.state = {
                        status: "REJECTED",
                        reason: d
                    };
                    for (const e of this.i) e()
                }
            };
        try {
            a(b, c)
        } catch (d) {
            c(d)
        }
    }
    static all(a) {
        return new Jg(new Hg((b, c) => {
            const d = [];
            let e = a.length;
            0 === e && b(d);
            for (let f = 0; f < a.length; ++f) Jg.resolve(a[f]).then(g => {
                d[f] = g;
                e--;
                0 === e && b(d)
            }).catch(g => {
                c(g)
            })
        }))
    }
    static resolve(a) {
        return new Jg(new Hg((b, c) => {
            a instanceof Jg ? a.then(b, c) : b(a)
        }))
    }
    then(a, b) {
        const c = null != a ? a : Gg,
            d = null != b ? b : Fg;
        return new Jg(new Hg((e, f) => {
            "PENDING" === this.state.status ? (this.h.push(() => {
                Ig(this, this, c, e, f)
            }), this.i.push(() => {
                Lg(this, this, d, e, f)
            })) : "FULFILLED" === this.state.status ? Ig(this, this, c, e, f) : "REJECTED" === this.state.status && Lg(this, this, d, e, f)
        }))
    } catch (a) {
        return this.then(void 0, a)
    }
};

function Mg(a, b, c) {
    const d = () => {
            try {
                a.removeEventListener("success", e), a.removeEventListener("error", f)
            } catch (g) {}
        },
        e = () => {
            b(a.result);
            d()
        },
        f = () => {
            c(a.error);
            d()
        };
    a.addEventListener("success", e);
    a.addEventListener("error", f)
}

function Ng(a) {
    return new Promise((b, c) => {
        Mg(a, b, c)
    })
}

function T(a) {
    return new Jg(new Hg((b, c) => {
        Mg(a, b, c)
    }))
};

function Og(a, b) {
    return new Jg(new Hg((c, d) => {
        const e = () => {
            const f = a ? b(a) : null;
            f ? f.then(g => {
                a = g;
                e()
            }, d) : c()
        };
        e()
    }))
};

function U(a, b, c, d) {
    return r(function*() {
        const e = {
            mode: "readonly",
            C: !1,
            tag: "IDB_TRANSACTION_TAG_UNKNOWN"
        };
        "string" === typeof c ? e.mode = c : Object.assign(e, c);
        a.transactionCount++;
        const f = e.C ? 3 : 1;
        let g = 0,
            h;
        for (; !h;) {
            g++;
            const l = Math.round(R());
            try {
                const m = a.h.transaction(b, e.mode);
                var k = d;
                const n = new Pg(m),
                    u = yield Qg(n, k), p = Math.round(R());
                Rg(a, l, p, g, void 0, b.join(), e);
                return u
            } catch (m) {
                k = Math.round(R());
                const n = Dg(m, a.h.name, b.join(), a.h.version);
                if (n instanceof S && !n.h || g >= f) Rg(a, l, k, g, n, b.join(), e),
                    h = n
            }
        }
        return Promise.reject(h)
    })
}

function Sg(a, b, c) {
    a = a.h.createObjectStore(b, c);
    return new Tg(a)
}

function Ug(a, b, c, d) {
    return U(a, [b], {
        mode: "readwrite",
        C: !0
    }, e => {
        e = e.objectStore(b);
        return T(e.h.put(c, d))
    })
}

function Rg(a, b, c, d, e, f, g) {
    b = c - b;
    e ? (e instanceof S && ("QUOTA_EXCEEDED" === e.type || "QUOTA_MAYBE_EXCEEDED" === e.type) && ug("QUOTA_EXCEEDED", {
        dbName: wg(a.h.name),
        objectStoreNames: f,
        transactionCount: a.transactionCount,
        transactionMode: g.mode
    }), e instanceof S && "UNKNOWN_ABORT" === e.type && (c -= a.j, 0 > c && c >= Math.pow(2, 31) && (c = 0), ug("TRANSACTION_UNEXPECTEDLY_ABORTED", {
        objectStoreNames: f,
        transactionDuration: b,
        transactionCount: a.transactionCount,
        dbDuration: c
    }), a.i = !0), Vg(a, !1, d, f, b, g.tag), tg(e)) : Vg(a, !0, d, f, b, g.tag)
}

function Vg(a, b, c, d, e, f = "IDB_TRANSACTION_TAG_UNKNOWN") {
    ug("TRANSACTION_ENDED", {
        objectStoreNames: d,
        connectionHasUnknownAbortedTransaction: a.i,
        duration: e,
        isSuccessful: b,
        tryCount: c,
        tag: f
    })
}
var Wg = class {
    constructor(a, b) {
        this.h = a;
        this.options = b;
        this.transactionCount = 0;
        this.j = Math.round(R());
        this.i = !1
    }
    add(a, b, c) {
        return U(this, [a], {
            mode: "readwrite",
            C: !0
        }, d => d.objectStore(a).add(b, c))
    }
    clear(a) {
        return U(this, [a], {
            mode: "readwrite",
            C: !0
        }, b => b.objectStore(a).clear())
    }
    close() {
        this.h.close();
        let a;
        (null == (a = this.options) ? 0 : a.closed) && this.options.closed()
    }
    count(a, b) {
        return U(this, [a], {
            mode: "readonly",
            C: !0
        }, c => c.objectStore(a).count(b))
    }
    delete(a, b) {
        return U(this, [a], {
            mode: "readwrite",
            C: !0
        }, c => c.objectStore(a).delete(b))
    }
    get(a, b) {
        return U(this, [a], {
            mode: "readonly",
            C: !0
        }, c => c.objectStore(a).get(b))
    }
    getAll(a, b, c) {
        return U(this, [a], {
            mode: "readonly",
            C: !0
        }, d => d.objectStore(a).getAll(b, c))
    }
    objectStoreNames() {
        return Array.from(this.h.objectStoreNames)
    }
    getName() {
        return this.h.name
    }
};

function Xg(a, b, c) {
    a = a.h.openCursor(b.query, b.direction);
    return Yg(a).then(d => Og(d, c))
}

function Zg(a, b) {
    return Xg(a, {
        query: b
    }, c => c.delete().then(() => c.continue())).then(() => {})
}

function $g(a, b, c) {
    const d = [];
    return Xg(a, {
        query: b
    }, e => {
        if (!(void 0 !== c && d.length >= c)) return d.push(e.O()), e.continue()
    }).then(() => d)
}
var Tg = class {
    constructor(a) {
        this.h = a
    }
    add(a, b) {
        return T(this.h.add(a, b))
    }
    autoIncrement() {
        return this.h.autoIncrement
    }
    clear() {
        return T(this.h.clear()).then(() => {})
    }
    count(a) {
        return T(this.h.count(a))
    }
    delete(a) {
        return a instanceof IDBKeyRange ? Zg(this, a) : T(this.h.delete(a))
    }
    get(a) {
        return T(this.h.get(a))
    }
    getAll(a, b) {
        return "getAll" in IDBObjectStore.prototype ? T(this.h.getAll(a, b)) : $g(this, a, b)
    }
    index(a) {
        try {
            return new ah(this.h.index(a))
        } catch (b) {
            if (b instanceof Error && "NotFoundError" === b.name) throw new Bg(a,
                this.h.name);
            throw b;
        }
    }
    getName() {
        return this.h.name
    }
    keyPath() {
        return this.h.keyPath
    }
};

function Qg(a, b) {
    const c = new Promise((d, e) => {
        try {
            b(a).then(f => {
                d(f)
            }).catch(e)
        } catch (f) {
            e(f), a.abort()
        }
    });
    return Promise.all([c, a.done]).then(([d]) => d)
}
var Pg = class {
    constructor(a) {
        this.h = a;
        this.j = new Map;
        this.i = !1;
        this.done = new Promise((b, c) => {
            this.h.addEventListener("complete", () => {
                b()
            });
            this.h.addEventListener("error", d => {
                d.currentTarget === d.target && c(this.h.error)
            });
            this.h.addEventListener("abort", () => {
                var d = this.h.error;
                if (d) c(d);
                else if (!this.i) {
                    d = S;
                    var e = this.h.objectStoreNames;
                    const f = [];
                    for (let g = 0; g < e.length; g++) {
                        const h = e.item(g);
                        if (null === h) throw Error("Invariant: item in DOMStringList is null");
                        f.push(h)
                    }
                    d = new d("UNKNOWN_ABORT", {
                        objectStoreNames: f.join(),
                        dbName: this.h.db.name,
                        mode: this.h.mode
                    });
                    c(d)
                }
            })
        })
    }
    abort() {
        this.h.abort();
        this.i = !0;
        throw new S("EXPLICIT_ABORT");
    }
    objectStore(a) {
        a = this.h.objectStore(a);
        let b = this.j.get(a);
        b || (b = new Tg(a), this.j.set(a, b));
        return b
    }
};

function bh(a, b, c) {
    const {
        query: d = null,
        direction: e = "next"
    } = b;
    a = a.h.openCursor(d, e);
    return Yg(a).then(f => Og(f, c))
}

function ch(a, b, c) {
    const d = [];
    return bh(a, {
        query: b
    }, e => {
        if (!(void 0 !== c && d.length >= c)) return d.push(e.O()), e.continue()
    }).then(() => d)
}
var ah = class {
    constructor(a) {
        this.h = a
    }
    count(a) {
        return T(this.h.count(a))
    }
    delete(a) {
        return bh(this, {
            query: a
        }, b => b.delete().then(() => b.continue()))
    }
    get(a) {
        return T(this.h.get(a))
    }
    getAll(a, b) {
        return "getAll" in IDBIndex.prototype ? T(this.h.getAll(a, b)) : ch(this, a, b)
    }
    getKey(a) {
        return T(this.h.getKey(a))
    }
    keyPath() {
        return this.h.keyPath
    }
    unique() {
        return this.h.unique
    }
};

function Yg(a) {
    return T(a).then(b => b ? new dh(a, b) : null)
}
var dh = class {
    constructor(a, b) {
        this.request = a;
        this.cursor = b
    }
    advance(a) {
        this.cursor.advance(a);
        return Yg(this.request)
    }
    continue (a) {
        this.cursor.continue(a);
        return Yg(this.request)
    }
    delete() {
        return T(this.cursor.delete()).then(() => {})
    }
    getKey() {
        return this.cursor.key
    }
    O() {
        return this.cursor.value
    }
    update(a) {
        return T(this.cursor.update(a))
    }
};

function eh(a, b, c) {
    return new Promise((d, e) => {
        let f;
        f = void 0 !== b ? self.indexedDB.open(a, b) : self.indexedDB.open(a);
        const g = c.Ja,
            h = c.blocking,
            k = c.gb,
            l = c.upgrade,
            m = c.closed;
        let n;
        const u = () => {
            n || (n = new Wg(f.result, {
                closed: m
            }));
            return n
        };
        f.addEventListener("upgradeneeded", p => {
            try {
                if (null === p.newVersion) throw Error("Invariant: newVersion on IDbVersionChangeEvent is null");
                if (null === f.transaction) throw Error("Invariant: transaction on IDbOpenDbRequest is null");
                p.dataLoss && "none" !== p.dataLoss && ug("IDB_DATA_CORRUPTED", {
                    reason: p.dataLossMessage || "unknown reason",
                    dbName: wg(a)
                });
                const y = u(),
                    H = new Pg(f.transaction);
                l && l(y, G => p.oldVersion < G && p.newVersion >= G, H);
                H.done.catch(G => {
                    e(G)
                })
            } catch (y) {
                e(y)
            }
        });
        f.addEventListener("success", () => {
            const p = f.result;
            h && p.addEventListener("versionchange", () => {
                h(u())
            });
            p.addEventListener("close", () => {
                ug("IDB_UNEXPECTEDLY_CLOSED", {
                    dbName: wg(a),
                    dbVersion: p.version
                });
                k && k()
            });
            d(u())
        });
        f.addEventListener("error", () => {
            e(f.error)
        });
        g && f.addEventListener("blocked", () => {
            g()
        })
    })
}

function fh(a, b, c = {}) {
    return eh(a, b, c)
}

function gh(a, b = {}) {
    return r(function*() {
        try {
            const c = self.indexedDB.deleteDatabase(a),
                d = b.Ja;
            d && c.addEventListener("blocked", () => {
                d()
            });
            yield Ng(c)
        } catch (c) {
            throw Dg(c, a, "", -1);
        }
    })
};

function hh(a, b) {
    return new S("INCOMPATIBLE_DB_VERSION", {
        dbName: a.name,
        oldVersion: a.options.version,
        newVersion: b
    })
}

function ih(a, b) {
    if (!b) throw Eg("openWithToken", wg(a.name));
    return a.open()
}
var jh = class {
    constructor(a, b) {
        this.name = a;
        this.options = b;
        this.j = !0;
        this.m = this.l = 0
    }
    i(a, b, c = {}) {
        return fh(a, b, c)
    }
    delete(a = {}) {
        return gh(this.name, a)
    }
    open() {
        if (!this.j) throw hh(this);
        if (this.h) return this.h;
        let a;
        const b = () => {
                this.h === a && (this.h = void 0)
            },
            c = {
                blocking: e => {
                    e.close()
                },
                closed: b,
                gb: b,
                upgrade: this.options.upgrade
            },
            d = () => {
                const e = this;
                return r(function*() {
                    var f, g = null != (f = Error().stack) ? f : "";
                    try {
                        const k = yield e.i(e.name, e.options.version, c);
                        f = k;
                        var h = e.options;
                        const l = [];
                        for (const m of Object.keys(h.S)) {
                            const {
                                P: n,
                                jc: u = Number.MAX_VALUE
                            } = h.S[m];
                            !(f.h.version >= n) || f.h.version >= u || f.h.objectStoreNames.contains(m) || l.push(m)
                        }
                        if (0 !== l.length) {
                            const m = Object.keys(e.options.S),
                                n = k.objectStoreNames();
                            if (e.m < jf("ytidb_reopen_db_retries", 0)) return e.m++, k.close(), tg(new S("DB_REOPENED_BY_MISSING_OBJECT_STORES", {
                                dbName: e.name,
                                expectedObjectStores: m,
                                foundObjectStores: n
                            })), d();
                            if (e.l < jf("ytidb_remake_db_retries", 1)) return e.l++, yield e.delete(), tg(new S("DB_DELETED_BY_MISSING_OBJECT_STORES", {
                                dbName: e.name,
                                expectedObjectStores: m,
                                foundObjectStores: n
                            })), d();
                            throw new Ag(n, m);
                        }
                        return k
                    } catch (k) {
                        if (k instanceof DOMException ? "VersionError" === k.name : "DOMError" in self && k instanceof DOMError ? "VersionError" === k.name : k instanceof Object && "message" in k && "An attempt was made to open a database using a lower version than the existing version." ===
                            k.message) {
                            g = yield e.i(e.name, void 0, Object.assign({}, c, {
                                upgrade: void 0
                            }));
                            h = g.h.version;
                            if (void 0 !== e.options.version && h > e.options.version + 1) throw g.close(), e.j = !1, hh(e, h);
                            return g
                        }
                        b();
                        k instanceof Error && !Q("ytidb_async_stack_killswitch") && (k.stack = `${k.stack}\n${g.substring(g.indexOf("\n")+1)}`);
                        let l;
                        throw Dg(k, e.name, "", null != (l = e.options.version) ? l : -1);
                    }
                })
            };
        return this.h = a = d()
    }
};
const kh = new jh("YtIdbMeta", {
    S: {
        databases: {
            P: 1
        }
    },
    upgrade(a, b) {
        b(1) && Sg(a, "databases", {
            keyPath: "actualName"
        })
    }
});

function lh(a, b) {
    return r(function*() {
        return U(yield ih(kh, b), ["databases"], {
            C: !0,
            mode: "readwrite"
        }, c => {
            const d = c.objectStore("databases");
            return d.get(a.actualName).then(e => {
                if (e ? a.actualName !== e.actualName || a.publicName !== e.publicName || a.userIdentifier !== e.userIdentifier : 1) return T(d.h.put(a, void 0)).then(() => {})
            })
        })
    })
}

function mh(a, b) {
    return r(function*() {
        if (a) return (yield ih(kh, b)).delete("databases", a)
    })
};
let nh;
const oh = new class {
    constructor() {}
}(new class {
    constructor() {}
});

function ph() {
    return r(function*() {
        return !0
    })
}

function qh() {
    if (void 0 !== nh) return nh;
    sg = !0;
    return nh = ph().then(a => {
        sg = !1;
        return a
    })
}

function rh() {
    return w("ytglobal.idbToken_") || void 0
}

function sh() {
    const a = rh();
    return a ? Promise.resolve(a) : qh().then(b => {
        (b = b ? oh : void 0) && v("ytglobal.idbToken_", b);
        return b
    })
};
new Hd;

function th(a) {
    try {
        pg();
        var b = !0
    } catch (c) {
        b = !1
    }
    if (!b) throw a = new S("AUTH_INVALID", {
        dbName: a
    }), tg(a), a;
    b = pg();
    return {
        actualName: `${a}:${b}`,
        publicName: a,
        userIdentifier: b
    }
}

function uh(a, b, c, d) {
    return r(function*() {
        var e, f = null != (e = Error().stack) ? e : "";
        e = yield sh();
        if (!e) throw e = Eg("openDbImpl", a, b), Q("ytidb_async_stack_killswitch") || (e.stack = `${e.stack}\n${f.substring(f.indexOf("\n")+1)}`), tg(e), e;
        vg(a);
        f = c ? {
            actualName: a,
            publicName: a,
            userIdentifier: void 0
        } : th(a);
        try {
            return yield lh(f, e), yield fh(f.actualName, b, d)
        } catch (g) {
            try {
                yield mh(f.actualName, e)
            } catch (h) {}
            throw g;
        }
    })
}

function vh(a, b, c = {}) {
    return uh(a, b, !1, c)
}

function wh(a, b, c = {}) {
    return uh(a, b, !0, c)
}

function xh(a, b = {}) {
    return r(function*() {
        const c = yield sh();
        if (c) {
            vg(a);
            var d = th(a);
            yield gh(d.actualName, b);
            yield mh(d.actualName, c)
        }
    })
}

function yh(a, b = {}) {
    return r(function*() {
        const c = yield sh();
        c && (vg(a), yield gh(a, b), yield mh(a, c))
    })
};

function zh(a, b) {
    let c;
    return () => {
        c || (c = new Ah(a, b));
        return c
    }
}
var Ah = class extends jh {
    constructor(a, b) {
        super(a, b);
        this.options = b;
        vg(a)
    }
    i(a, b, c = {}) {
        return (this.options.fa ? wh : vh)(a, b, Object.assign({}, c))
    }
    delete(a = {}) {
        return (this.options.fa ? yh : xh)(this.name, a)
    }
};

function Bh(a, b) {
    return zh(a, b)
};
var Ch = Bh("ytGcfConfig", {
    S: {
        coldConfigStore: {
            P: 1
        },
        hotConfigStore: {
            P: 1
        }
    },
    fa: !1,
    upgrade(a, b) {
        b(1) && (Sg(a, "hotConfigStore", {
            keyPath: "key",
            autoIncrement: !0
        }).h.createIndex("hotTimestampIndex", "timestamp", {
            unique: !1
        }), Sg(a, "coldConfigStore", {
            keyPath: "key",
            autoIncrement: !0
        }).h.createIndex("coldTimestampIndex", "timestamp", {
            unique: !1
        }))
    },
    version: 1
});

function Dh(a) {
    return ih(Ch(), a)
}

function Eh(a, b, c) {
    return r(function*() {
        const d = {
                config: a,
                hashData: b,
                timestamp: R()
            },
            e = yield Dh(c);
        yield e.clear("hotConfigStore");
        return yield Ug(e, "hotConfigStore", d)
    })
}

function Fh(a, b, c, d) {
    return r(function*() {
        const e = {
                config: a,
                hashData: b,
                configData: c,
                timestamp: R()
            },
            f = yield Dh(d);
        yield f.clear("coldConfigStore");
        return yield Ug(f, "coldConfigStore", e)
    })
}

function Gh(a) {
    return r(function*() {
        let b = void 0;
        yield U(yield Dh(a), ["coldConfigStore"], {
            mode: "readwrite",
            C: !0
        }, c => bh(c.objectStore("coldConfigStore").index("coldTimestampIndex"), {
            direction: "prev"
        }, d => {
            b = d.O()
        }));
        return b
    })
}

function Hh(a) {
    return r(function*() {
        let b = void 0;
        yield U(yield Dh(a), ["hotConfigStore"], {
            mode: "readwrite",
            C: !0
        }, c => bh(c.objectStore("hotConfigStore").index("hotTimestampIndex"), {
            direction: "prev"
        }, d => {
            b = d.O()
        }));
        return b
    })
};
var Ih = class extends Nc {
    constructor() {
        super(...arguments);
        this.h = []
    }
    R() {
        this.h.length = 0;
        super.R()
    }
};

function Jh(a, b, c) {
    return r(function*() {
        if (Q("update_log_event_config")) {
            c && (a.j = c, v("yt.gcf.config.hotConfigGroup", a.j));
            a.hotHashData = b;
            v("yt.gcf.config.hotHashData", a.hotHashData);
            var d = rh();
            if (d) {
                if (!c) {
                    var e;
                    c = null == (e = yield Hh(d)) ? void 0 : e.config
                }
                yield Eh(c, b, d)
            }
            if (c) {
                d = a.i;
                e = c;
                for (const f of d.h) f(e)
            }
        }
    })
}

function Kh(a, b, c) {
    return r(function*() {
        if (Q("update_log_event_config")) {
            a.coldHashData = b;
            v("yt.gcf.config.coldHashData", a.coldHashData);
            const d = rh();
            if (d) {
                if (!c) {
                    let e;
                    c = null == (e = yield Gh(d)) ? void 0 : e.config
                }
                c && (yield Fh(c, b, c.configData, d))
            }
        }
    })
}
var Lh = class {
    constructor() {
        this.h = 0;
        this.i = new Ih
    }
};

function Mh() {
    return "INNERTUBE_API_KEY" in af && "INNERTUBE_API_VERSION" in af
}

function Nh() {
    return {
        innertubeApiKey: O("INNERTUBE_API_KEY"),
        innertubeApiVersion: O("INNERTUBE_API_VERSION"),
        ka: O("INNERTUBE_CONTEXT_CLIENT_CONFIG_INFO"),
        Ra: O("INNERTUBE_CONTEXT_CLIENT_NAME", "WEB"),
        Sa: O("INNERTUBE_CONTEXT_CLIENT_NAME", 1),
        innertubeContextClientVersion: O("INNERTUBE_CONTEXT_CLIENT_VERSION"),
        ya: O("INNERTUBE_CONTEXT_HL"),
        xa: O("INNERTUBE_CONTEXT_GL"),
        Ta: O("INNERTUBE_HOST_OVERRIDE") || "",
        Va: !!O("INNERTUBE_USE_THIRD_PARTY_AUTH", !1),
        Ua: !!O("INNERTUBE_OMIT_API_KEY_WHEN_AUTH_HEADER_IS_PRESENT", !1),
        appInstallData: O("SERIALIZED_CLIENT_CONFIG_DATA")
    }
}

function Oh(a) {
    const b = {
        client: {
            hl: a.ya,
            gl: a.xa,
            clientName: a.Ra,
            clientVersion: a.innertubeContextClientVersion,
            configInfo: a.ka
        }
    };
    navigator.userAgent && (b.client.userAgent = String(navigator.userAgent));
    var c = t.devicePixelRatio;
    c && 1 != c && (b.client.screenDensityFloat = String(c));
    c = lf();
    "" !== c && (b.client.experimentsToken = c);
    c = mf();
    0 < c.length && (b.request = {
        internalExperimentFlags: c
    });
    Ph(void 0, b);
    Qh(a, void 0, b);
    Q("start_sending_config_hash") && Rh(void 0, b);
    O("DELEGATED_SESSION_ID") && !Q("pageid_as_header_web") &&
        (b.user = {
            onBehalfOfUser: O("DELEGATED_SESSION_ID")
        });
    !Q("fill_delegate_context_in_gel_killswitch") && (a = O("INNERTUBE_CONTEXT_SERIALIZED_DELEGATION_CONTEXT")) && (b.user = Object.assign({}, b.user, {
        serializedDelegationContext: a
    }));
    a = Object;
    c = a.assign;
    var d = b.client,
        e = O("DEVICE", "");
    const f = {};
    for (const [g, h] of Object.entries(Sf(e))) {
        e = g;
        const k = h;
        "cbrand" === e ? f.deviceMake = k : "cmodel" === e ? f.deviceModel = k : "cbr" === e ? f.browserName = k : "cbrver" === e ? f.browserVersion = k : "cos" === e ? f.osName = k : "cosver" === e ? f.osVersion =
            k : "cplatform" === e && (f.platform = k)
    }
    b.client = c.call(a, d, f);
    return b
}

function Sh(a) {
    const b = new de,
        c = new Xd;
    B(c, 1, a.ya);
    B(c, 2, a.xa);
    B(c, 16, a.Sa);
    B(c, 17, a.innertubeContextClientVersion);
    if (a.ka) {
        var d = a.ka,
            e = new Vd;
        d.coldConfigData && B(e, 1, d.coldConfigData);
        d.appInstallData && B(e, 6, d.appInstallData);
        d.coldHashData && B(e, 3, d.coldHashData);
        d.hotHashData && B(e, 5, d.hotHashData);
        C(c, Vd, 62, e)
    }
    if ((d = t.devicePixelRatio) && 1 != d) {
        if (null != d && "number" !== typeof d) throw Error(`Value of float/double field must be a number|null|undefined, found ${typeof d}: ${d}`);
        B(c, 65, d)
    }
    d = lf();
    "" !==
    d && B(c, 54, d);
    d = mf();
    if (0 < d.length) {
        e = new $d;
        for (let f = 0; f < d.length; f++) {
            const g = new Zd;
            B(g, 1, d[f].key);
            bc(g, 2, Yd, d[f].value);
            jc(e, 15, Zd, g)
        }
        C(b, $d, 5, e)
    }
    Ph(b);
    Qh(a, c);
    Q("start_sending_config_hash") && Rh(c);
    O("DELEGATED_SESSION_ID") && !Q("pageid_as_header_web") && (a = new ce, B(a, 3, O("DELEGATED_SESSION_ID")));
    !Q("fill_delegate_context_in_gel_killswitch") && (a = O("INNERTUBE_CONTEXT_SERIALIZED_DELEGATION_CONTEXT")) && (d = dc(b, ce, 3) || new ce, a = B(d, 18, a), C(b, ce, 3, a));
    a = O("DEVICE", "");
    for (const [f, g] of Object.entries(Sf(a))) a =
        f, d = g, "cbrand" === a ? B(c, 12, d) : "cmodel" === a ? B(c, 13, d) : "cbr" === a ? B(c, 87, d) : "cbrver" === a ? B(c, 88, d) : "cos" === a ? B(c, 18, d) : "cosver" === a ? B(c, 19, d) : "cplatform" === a && B(c, 42, d);
    b.l(c);
    return b
}

function Ph(a, b) {
    const c = w("yt.embedded_player.embed_url");
    c && (a ? (b = dc(a, ae, 7) || new ae, B(b, 4, c), C(a, ae, 7, b)) : b && (b.thirdParty = {
        embedUrl: c
    }))
}

function Qh(a, b, c) {
    if (a.appInstallData)
        if (b) {
            let d;
            c = null != (d = dc(b, Vd, 62)) ? d : new Vd;
            B(c, 6, a.appInstallData);
            C(b, Vd, 62, c)
        } else c && (c.client.configInfo = c.client.configInfo || {}, c.client.configInfo.appInstallData = a.appInstallData)
}

function Th(a, b, c = {}) {
    let d = {};
    O("EOM_VISITOR_DATA") ? d = {
        "X-Goog-EOM-Visitor-Id": O("EOM_VISITOR_DATA")
    } : d = {
        "X-Goog-Visitor-Id": c.visitorData || O("VISITOR_DATA", "")
    };
    if (b && b.includes("www.youtube-nocookie.com")) return d;
    b = c.Rb || O("AUTHORIZATION");
    b || (a ? b = `Bearer ${w("gapi.auth.getToken")().Qb}` : (a = ng(lg()), Q("pageid_as_header_web") || delete a["X-Goog-PageId"], d = Object.assign({}, d, a)));
    b && (d.Authorization = b);
    return d
}

function Rh(a, b) {
    if (!Lh.h) {
        var c = new Lh;
        Lh.h = c
    }
    c = Lh.h;
    var d = R() - c.h;
    if (0 !== c.h && d < jf("send_config_hash_timer")) c = void 0;
    else {
        d = w("yt.gcf.config.coldConfigData");
        var e = w("yt.gcf.config.hotHashData"),
            f = w("yt.gcf.config.coldHashData");
        d && e && f && (c.h = R());
        c = {
            coldConfigData: d,
            hotHashData: e,
            coldHashData: f
        }
    }
    if (e = c)
        if (c = e.coldConfigData, d = e.coldHashData, e = e.hotHashData, c && d && e)
            if (a) {
                let g;
                b = null != (g = dc(a, Vd, 62)) ? g : new Vd;
                B(b, 1, c);
                B(b, 3, d);
                B(b, 5, e);
                C(a, Vd, 62, b)
            } else b && (b.client.configInfo = b.client.configInfo || {}, b.client.configInfo.coldConfigData = c, b.client.configInfo.coldHashData = d, b.client.configInfo.hotHashData = e)
};
var Uh = {
    accountStateChangeSignedIn: 23,
    accountStateChangeSignedOut: 24,
    delayedEventMetricCaptured: 11,
    latencyActionBaselined: 6,
    latencyActionInfo: 7,
    latencyActionTicked: 5,
    offlineTransferStatusChanged: 2,
    offlineImageDownload: 335,
    playbackStartStateChanged: 9,
    systemHealthCaptured: 3,
    mangoOnboardingCompleted: 10,
    mangoPushNotificationReceived: 230,
    mangoUnforkDbMigrationError: 121,
    mangoUnforkDbMigrationSummary: 122,
    mangoUnforkDbMigrationPreunforkDbVersionNumber: 133,
    mangoUnforkDbMigrationPhoneMetadata: 134,
    mangoUnforkDbMigrationPhoneStorage: 135,
    mangoUnforkDbMigrationStep: 142,
    mangoAsyncApiMigrationEvent: 223,
    mangoDownloadVideoResult: 224,
    mangoHomepageVideoCount: 279,
    mangoHomeV3State: 295,
    mangoImageClientCacheHitEvent: 273,
    sdCardStatusChanged: 98,
    framesDropped: 12,
    thumbnailHovered: 13,
    deviceRetentionInfoCaptured: 14,
    thumbnailLoaded: 15,
    backToAppEvent: 318,
    streamingStatsCaptured: 17,
    offlineVideoShared: 19,
    appCrashed: 20,
    youThere: 21,
    offlineStateSnapshot: 22,
    mdxSessionStarted: 25,
    mdxSessionConnected: 26,
    mdxSessionDisconnected: 27,
    bedrockResourceConsumptionSnapshot: 28,
    nextGenWatchWatchSwiped: 29,
    kidsAccountsSnapshot: 30,
    zeroStepChannelCreated: 31,
    tvhtml5SearchCompleted: 32,
    offlineSharePairing: 34,
    offlineShareUnlock: 35,
    mdxRouteDistributionSnapshot: 36,
    bedrockRepetitiveActionTimed: 37,
    unpluggedDegradationInfo: 229,
    uploadMp4HeaderMoved: 38,
    uploadVideoTranscoded: 39,
    uploadProcessorStarted: 46,
    uploadProcessorEnded: 47,
    uploadProcessorReady: 94,
    uploadProcessorRequirementPending: 95,
    uploadProcessorInterrupted: 96,
    uploadFrontendEvent: 241,
    assetPackDownloadStarted: 41,
    assetPackDownloaded: 42,
    assetPackApplied: 43,
    assetPackDeleted: 44,
    appInstallAttributionEvent: 459,
    playbackSessionStopped: 45,
    adBlockerMessagingShown: 48,
    distributionChannelCaptured: 49,
    dataPlanCpidRequested: 51,
    detailedNetworkTypeCaptured: 52,
    sendStateUpdated: 53,
    receiveStateUpdated: 54,
    sendDebugStateUpdated: 55,
    receiveDebugStateUpdated: 56,
    kidsErrored: 57,
    mdxMsnSessionStatsFinished: 58,
    appSettingsCaptured: 59,
    mdxWebSocketServerHttpError: 60,
    mdxWebSocketServer: 61,
    startupCrashesDetected: 62,
    coldStartInfo: 435,
    offlinePlaybackStarted: 63,
    liveChatMessageSent: 225,
    liveChatUserPresent: 434,
    liveChatBeingModerated: 457,
    liveCreationCameraUpdated: 64,
    liveCreationEncodingCaptured: 65,
    liveCreationError: 66,
    liveCreationHealthUpdated: 67,
    liveCreationVideoEffectsCaptured: 68,
    liveCreationStageOccured: 75,
    liveCreationBroadcastScheduled: 123,
    liveCreationArchiveReplacement: 149,
    liveCreationCostreamingConnection: 421,
    liveCreationStreamWebrtcStats: 288,
    mdxSessionRecoveryStarted: 69,
    mdxSessionRecoveryCompleted: 70,
    mdxSessionRecoveryStopped: 71,
    visualElementShown: 72,
    visualElementHidden: 73,
    visualElementGestured: 78,
    visualElementStateChanged: 208,
    screenCreated: 156,
    playbackAssociated: 202,
    visualElementAttached: 215,
    playbackContextEvent: 214,
    cloudCastingPlaybackStarted: 74,
    webPlayerApiCalled: 76,
    tvhtml5AccountDialogOpened: 79,
    foregroundHeartbeat: 80,
    foregroundHeartbeatScreenAssociated: 111,
    kidsOfflineSnapshot: 81,
    mdxEncryptionSessionStatsFinished: 82,
    playerRequestCompleted: 83,
    liteSchedulerStatistics: 84,
    mdxSignIn: 85,
    spacecastMetadataLookupRequested: 86,
    spacecastBatchLookupRequested: 87,
    spacecastSummaryRequested: 88,
    spacecastPlayback: 89,
    spacecastDiscovery: 90,
    tvhtml5LaunchUrlComponentChanged: 91,
    mdxBackgroundPlaybackRequestCompleted: 92,
    mdxBrokenAdditionalDataDeviceDetected: 93,
    tvhtml5LocalStorage: 97,
    tvhtml5DeviceStorageStatus: 147,
    autoCaptionsAvailable: 99,
    playbackScrubbingEvent: 339,
    flexyState: 100,
    interfaceOrientationCaptured: 101,
    mainAppBrowseFragmentCache: 102,
    offlineCacheVerificationFailure: 103,
    offlinePlaybackExceptionDigest: 217,
    vrCopresenceStats: 104,
    vrCopresenceSyncStats: 130,
    vrCopresenceCommsStats: 137,
    vrCopresencePartyStats: 153,
    vrCopresenceEmojiStats: 213,
    vrCopresenceEvent: 141,
    vrCopresenceFlowTransitEvent: 160,
    vrPlaybackEvent: 345,
    kidsAgeGateTracking: 105,
    offlineDelayAllowedTracking: 106,
    mainAppAutoOfflineState: 107,
    videoAsThumbnailDownload: 108,
    videoAsThumbnailPlayback: 109,
    liteShowMore: 110,
    renderingError: 118,
    kidsProfilePinGateTracking: 119,
    abrTrajectory: 124,
    scrollEvent: 125,
    streamzIncremented: 126,
    kidsProfileSwitcherTracking: 127,
    kidsProfileCreationTracking: 129,
    buyFlowStarted: 136,
    mbsConnectionInitiated: 138,
    mbsPlaybackInitiated: 139,
    mbsLoadChildren: 140,
    liteProfileFetcher: 144,
    mdxRemoteTransaction: 146,
    reelPlaybackError: 148,
    reachabilityDetectionEvent: 150,
    mobilePlaybackEvent: 151,
    courtsidePlayerStateChanged: 152,
    musicPersistentCacheChecked: 154,
    musicPersistentCacheCleared: 155,
    playbackInterrupted: 157,
    playbackInterruptionResolved: 158,
    fixFopFlow: 159,
    anrDetection: 161,
    backstagePostCreationFlowEnded: 162,
    clientError: 163,
    gamingAccountLinkStatusChanged: 164,
    liteHousewarming: 165,
    buyFlowEvent: 167,
    kidsParentalGateTracking: 168,
    kidsSignedOutSettingsStatus: 437,
    kidsSignedOutPauseHistoryFixStatus: 438,
    tvhtml5WatchdogViolation: 444,
    ypcUpgradeFlow: 169,
    yongleStudy: 170,
    ypcUpdateFlowStarted: 171,
    ypcUpdateFlowCancelled: 172,
    ypcUpdateFlowSucceeded: 173,
    ypcUpdateFlowFailed: 174,
    liteGrowthkitPromo: 175,
    paymentFlowStarted: 341,
    transactionFlowShowPaymentDialog: 405,
    transactionFlowStarted: 176,
    transactionFlowSecondaryDeviceStarted: 222,
    transactionFlowSecondaryDeviceSignedOutStarted: 383,
    transactionFlowCancelled: 177,
    transactionFlowPaymentCallBackReceived: 387,
    transactionFlowPaymentSubmitted: 460,
    transactionFlowPaymentSucceeded: 329,
    transactionFlowSucceeded: 178,
    transactionFlowFailed: 179,
    transactionFlowPlayBillingConnectionStartEvent: 428,
    transactionFlowSecondaryDeviceSuccess: 458,
    transactionFlowErrorEvent: 411,
    liteVideoQualityChanged: 180,
    watchBreakEnablementSettingEvent: 181,
    watchBreakFrequencySettingEvent: 182,
    videoEffectsCameraPerformanceMetrics: 183,
    adNotify: 184,
    startupTelemetry: 185,
    playbackOfflineFallbackUsed: 186,
    outOfMemory: 187,
    ypcPauseFlowStarted: 188,
    ypcPauseFlowCancelled: 189,
    ypcPauseFlowSucceeded: 190,
    ypcPauseFlowFailed: 191,
    uploadFileSelected: 192,
    ypcResumeFlowStarted: 193,
    ypcResumeFlowCancelled: 194,
    ypcResumeFlowSucceeded: 195,
    ypcResumeFlowFailed: 196,
    adsClientStateChange: 197,
    ypcCancelFlowStarted: 198,
    ypcCancelFlowCancelled: 199,
    ypcCancelFlowSucceeded: 200,
    ypcCancelFlowFailed: 201,
    ypcCancelFlowGoToPaymentProcessor: 402,
    ypcDeactivateFlowStarted: 320,
    ypcRedeemFlowStarted: 203,
    ypcRedeemFlowCancelled: 204,
    ypcRedeemFlowSucceeded: 205,
    ypcRedeemFlowFailed: 206,
    ypcFamilyCreateFlowStarted: 258,
    ypcFamilyCreateFlowCancelled: 259,
    ypcFamilyCreateFlowSucceeded: 260,
    ypcFamilyCreateFlowFailed: 261,
    ypcFamilyManageFlowStarted: 262,
    ypcFamilyManageFlowCancelled: 263,
    ypcFamilyManageFlowSucceeded: 264,
    ypcFamilyManageFlowFailed: 265,
    restoreContextEvent: 207,
    embedsAdEvent: 327,
    autoplayTriggered: 209,
    clientDataErrorEvent: 210,
    experimentalVssValidation: 211,
    tvhtml5TriggeredEvent: 212,
    tvhtml5FrameworksFieldTrialResult: 216,
    tvhtml5FrameworksFieldTrialStart: 220,
    musicOfflinePreferences: 218,
    watchTimeSegment: 219,
    appWidthLayoutError: 221,
    accountRegistryChange: 226,
    userMentionAutoCompleteBoxEvent: 227,
    downloadRecommendationEnablementSettingEvent: 228,
    musicPlaybackContentModeChangeEvent: 231,
    offlineDbOpenCompleted: 232,
    kidsFlowEvent: 233,
    kidsFlowCorpusSelectedEvent: 234,
    videoEffectsEvent: 235,
    unpluggedOpsEogAnalyticsEvent: 236,
    playbackAudioRouteEvent: 237,
    interactionLoggingDebugModeError: 238,
    offlineYtbRefreshed: 239,
    kidsFlowError: 240,
    musicAutoplayOnLaunchAttempted: 242,
    deviceContextActivityEvent: 243,
    deviceContextEvent: 244,
    templateResolutionException: 245,
    musicSideloadedPlaylistServiceCalled: 246,
    embedsStorageAccessNotChecked: 247,
    embedsHasStorageAccessResult: 248,
    embedsItpPlayedOnReload: 249,
    embedsRequestStorageAccessResult: 250,
    embedsShouldRequestStorageAccessResult: 251,
    embedsRequestStorageAccessState: 256,
    embedsRequestStorageAccessFailedState: 257,
    embedsItpWatchLaterResult: 266,
    searchSuggestDecodingPayloadFailure: 252,
    siriShortcutActivated: 253,
    tvhtml5KeyboardPerformance: 254,
    latencyActionSpan: 255,
    elementsLog: 267,
    ytbFileOpened: 268,
    tfliteModelError: 269,
    tvhtml5ApiTest: 270,
    yongleUsbSetup: 271,
    touStrikeInterstitialEvent: 272,
    liteStreamToSave: 274,
    appBundleClientEvent: 275,
    ytbFileCreationFailed: 276,
    adNotifyFailure: 278,
    ytbTransferFailed: 280,
    blockingRequestFailed: 281,
    liteAccountSelector: 282,
    liteAccountUiCallbacks: 283,
    dummyPayload: 284,
    browseResponseValidationEvent: 285,
    entitiesError: 286,
    musicIosBackgroundFetch: 287,
    mdxNotificationEvent: 289,
    layersValidationError: 290,
    musicPwaInstalled: 291,
    liteAccountCleanup: 292,
    html5PlayerHealthEvent: 293,
    watchRestoreAttempt: 294,
    liteAccountSignIn: 296,
    notaireEvent: 298,
    kidsVoiceSearchEvent: 299,
    adNotifyFilled: 300,
    delayedEventDropped: 301,
    analyticsSearchEvent: 302,
    systemDarkThemeOptOutEvent: 303,
    flowEvent: 304,
    networkConnectivityBaselineEvent: 305,
    ytbFileImported: 306,
    downloadStreamUrlExpired: 307,
    directSignInEvent: 308,
    lyricImpressionEvent: 309,
    accessibilityStateEvent: 310,
    tokenRefreshEvent: 311,
    genericAttestationExecution: 312,
    tvhtml5VideoSeek: 313,
    unpluggedAutoPause: 314,
    scrubbingEvent: 315,
    bedtimeReminderEvent: 317,
    tvhtml5UnexpectedRestart: 319,
    tvhtml5OperationHealth: 467,
    tvhtml5WatchKeyEvent: 321,
    voiceLanguageChanged: 322,
    tvhtml5LiveChatStatus: 323,
    parentToolsCorpusSelectedEvent: 324,
    offerAdsEnrollmentInitiated: 325,
    networkQualityIntervalEvent: 326,
    deviceStartupMetrics: 328,
    heartbeatActionPlayerTransitioned: 330,
    tvhtml5Lifecycle: 331,
    heartbeatActionPlayerHalted: 332,
    adaptiveInlineMutedSettingEvent: 333,
    mainAppLibraryLoadingState: 334,
    thirdPartyLogMonitoringEvent: 336,
    appShellAssetLoadReport: 337,
    tvhtml5AndroidAttestation: 338,
    tvhtml5StartupSoundEvent: 340,
    iosBackgroundRefreshTask: 342,
    iosBackgroundProcessingTask: 343,
    sliEventBatch: 344,
    postImpressionEvent: 346,
    musicSideloadedPlaylistExport: 347,
    idbUnexpectedlyClosed: 348,
    voiceSearchEvent: 349,
    mdxSessionCastEvent: 350,
    idbQuotaExceeded: 351,
    idbTransactionEnded: 352,
    idbTransactionAborted: 353,
    tvhtml5KeyboardLogging: 354,
    idbIsSupportedCompleted: 355,
    creatorStudioMobileEvent: 356,
    idbDataCorrupted: 357,
    parentToolsAppChosenEvent: 358,
    webViewBottomSheetResized: 359,
    activeStateControllerScrollPerformanceSummary: 360,
    navigatorValidation: 361,
    mdxSessionHeartbeat: 362,
    clientHintsPolyfillDiagnostics: 363,
    clientHintsPolyfillEvent: 364,
    proofOfOriginTokenError: 365,
    kidsAddedAccountSummary: 366,
    musicWearableDevice: 367,
    ypcRefundFlowEvent: 368,
    tvhtml5PlaybackMeasurementEvent: 369,
    tvhtml5WatermarkMeasurementEvent: 370,
    clientExpGcfPropagationEvent: 371,
    mainAppReferrerIntent: 372,
    leaderLockEnded: 373,
    leaderLockAcquired: 374,
    googleHatsEvent: 375,
    persistentLensLaunchEvent: 376,
    parentToolsChildWelcomeChosenEvent: 378,
    browseThumbnailPreloadEvent: 379,
    finalPayload: 380,
    mdxDialAdditionalDataUpdateEvent: 381,
    webOrchestrationTaskLifecycleRecord: 382,
    startupSignalEvent: 384,
    accountError: 385,
    gmsDeviceCheckEvent: 386,
    accountSelectorEvent: 388,
    accountUiCallbacks: 389,
    mdxDialAdditionalDataProbeEvent: 390,
    downloadsSearchIcingApiStats: 391,
    downloadsSearchIndexUpdatedEvent: 397,
    downloadsSearchIndexSnapshot: 398,
    dataPushClientEvent: 392,
    kidsCategorySelectedEvent: 393,
    mdxDeviceManagementSnapshotEvent: 394,
    prefetchRequested: 395,
    prefetchableCommandExecuted: 396,
    gelDebuggingEvent: 399,
    webLinkTtsPlayEnd: 400,
    clipViewInvalid: 401,
    persistentStorageStateChecked: 403,
    cacheWipeoutEvent: 404,
    playerEvent: 410,
    sfvEffectPipelineStartedEvent: 412,
    sfvEffectPipelinePausedEvent: 429,
    sfvEffectPipelineEndedEvent: 413,
    sfvEffectChosenEvent: 414,
    sfvEffectLoadedEvent: 415,
    sfvEffectUserInteractionEvent: 465,
    sfvEffectFirstFrameProcessedLatencyEvent: 416,
    sfvEffectAggregatedFramesProcessedLatencyEvent: 417,
    sfvEffectAggregatedFramesDroppedEvent: 418,
    sfvEffectPipelineErrorEvent: 430,
    sfvEffectGraphFrozenEvent: 419,
    sfvEffectGlThreadBlockedEvent: 420,
    mdeVideoChangedEvent: 442,
    mdePlayerPerformanceMetrics: 472,
    genericClientExperimentEvent: 423,
    homePreloadTaskScheduled: 424,
    homePreloadTaskExecuted: 425,
    homePreloadCacheHit: 426,
    polymerPropertyChangedInObserver: 427,
    applicationStarted: 431,
    networkCronetRttBatch: 432,
    networkCronetRttSummary: 433,
    repeatChapterLoopEvent: 436,
    seekCancellationEvent: 462,
    offlineTransferStarted: 4,
    musicOfflineMixtapePreferencesChanged: 16,
    mangoDailyNewVideosNotificationAttempt: 40,
    mangoDailyNewVideosNotificationError: 77,
    dtwsPlaybackStarted: 112,
    dtwsTileFetchStarted: 113,
    dtwsTileFetchCompleted: 114,
    dtwsTileFetchStatusChanged: 145,
    dtwsKeyframeDecoderBufferSent: 115,
    dtwsTileUnderflowedOnNonkeyframe: 116,
    dtwsBackfillFetchStatusChanged: 143,
    dtwsBackfillUnderflowed: 117,
    dtwsAdaptiveLevelChanged: 128,
    blockingVisitorIdTimeout: 277,
    liteSocial: 18,
    mobileJsInvocation: 297,
    biscottiBasedDetection: 439,
    coWatchStateChange: 440,
    embedsVideoDataDidChange: 441,
    shortsFirst: 443,
    cruiseControlEvent: 445,
    qoeClientLoggingContext: 446,
    atvRecommendationJobExecuted: 447,
    tvhtml5UserFeedback: 448,
    producerProjectCreated: 449,
    producerProjectOpened: 450,
    producerProjectDeleted: 451,
    producerProjectElementAdded: 453,
    producerProjectElementRemoved: 454,
    tvhtml5ShowClockEvent: 455,
    deviceCapabilityCheckMetrics: 456,
    youtubeClearcutEvent: 461,
    offlineBrowseFallbackEvent: 463,
    getCtvTokenEvent: 464,
    startupDroppedFramesSummary: 466,
    screenshotEvent: 468,
    miniAppPlayEvent: 469,
    elementsDebugCounters: 470,
    fontLoadEvent: 471,
    webKillswitchReceived: 473,
    webKillswitchExecuted: 474,
    cameraOpenEvent: 475
};
const Vh = ["client.name", "client.version"];

function Wh(a) {
    if (!a.errorMetadata || !a.errorMetadata.kvPairs) return a;
    a.errorMetadata.kvPairs = a.errorMetadata.kvPairs.filter(b => b.key ? Vh.includes(b.key) : !1);
    return a
};
var Xh = Bh("ServiceWorkerLogsDatabase", {
    S: {
        SWHealthLog: {
            P: 1
        }
    },
    fa: !0,
    upgrade: (a, b) => {
        b(1) && Sg(a, "SWHealthLog", {
            keyPath: "id",
            autoIncrement: !0
        }).h.createIndex("swHealthNewRequest", ["interface", "timestamp"], {
            unique: !1
        })
    },
    version: 1
});

function Yh(a, b) {
    return r(function*() {
        var c = yield ih(Xh(), b), d = O("INNERTUBE_CONTEXT_CLIENT_NAME", 0);
        const e = Object.assign({}, a);
        e.clientError && (e.clientError = Wh(e.clientError));
        e.interface = d;
        return Ug(c, "SWHealthLog", e)
    })
};
v("ytNetworklessLoggingInitializationOptions", t.ytNetworklessLoggingInitializationOptions || {
    isNwlInitialized: !1
});

function Zh(a, b, c) {
    !O("VISITOR_DATA") && .01 > Math.random() && gf(new Pe("Missing VISITOR_DATA when sending innertube request.", "log_event", b, c));
    if (!a.isReady()) throw a = new Pe("innertube xhrclient not ready", "log_event", b, c), ff(a), a;
    b = {
        headers: c.headers || {},
        method: "POST",
        postParams: b,
        postBody: c.postBody,
        postBodyFormat: c.postBodyFormat || "JSON",
        onTimeout: () => {
            c.onTimeout()
        },
        onFetchTimeout: c.onTimeout,
        onSuccess: (k, l) => {
            if (c.onSuccess) c.onSuccess(l)
        },
        onFetchSuccess: k => {
            if (c.onSuccess) c.onSuccess(k)
        },
        onError: (k, l) => {
            if (c.onError) c.onError(l)
        },
        onFetchError: k => {
            if (c.onError) c.onError(k)
        },
        timeout: c.timeout,
        withCredentials: !0,
        compress: c.compress
    };
    b.headers["Content-Type"] || (b.headers["Content-Type"] = "application/json");
    let d = "";
    var e = a.config_.Ta;
    e && (d = e);
    var f = a.config_.Va || !1;
    e = Th(f, d, c);
    Object.assign(b.headers, e);
    (e = b.headers.Authorization) && !d && f && (b.headers["x-origin"] = window.location.origin);
    f = `/${"youtubei"}/${a.config_.innertubeApiVersion}/${"log_event"}`;
    let g = {
            alt: "json"
        },
        h = a.config_.Ua && e;
    h = h && e.startsWith("Bearer");
    h || (g.key = a.config_.innertubeApiKey);
    a = Tf(`${d}${f}`, g || {}, !0);
    try {
        Wf(a, b)
    } catch (k) {
        if ("InvalidAccessError" == k.name) gf(Error("An extension is blocking network request."));
        else throw k;
    }
}
class $h {
    constructor(a) {
        this.config_ = null;
        a ? this.config_ = a : Mh() && (this.config_ = Nh())
    }
    isReady() {
        !this.config_ && Mh() && (this.config_ = Nh());
        return !!this.config_
    }
};
const ai = {
    stopImmediatePropagation: 1,
    stopPropagation: 1,
    preventMouseEvent: 1,
    preventManipulation: 1,
    preventDefault: 1,
    layerX: 1,
    layerY: 1,
    screenX: 1,
    screenY: 1,
    scale: 1,
    rotation: 1,
    webkitMovementX: 1,
    webkitMovementY: 1
};

function bi(a) {
    if (document.body && document.documentElement) {
        const b = document.body.scrollTop + document.documentElement.scrollTop;
        a.h = a.clientX + (document.body.scrollLeft + document.documentElement.scrollLeft);
        a.i = a.clientY + b
    }
}
class ci {
    constructor(a) {
        this.type = "";
        this.state = this.source = this.data = this.currentTarget = this.relatedTarget = this.target = null;
        this.charCode = this.keyCode = 0;
        this.metaKey = this.shiftKey = this.ctrlKey = this.altKey = !1;
        this.rotation = this.clientY = this.clientX = 0;
        this.changedTouches = this.touches = null;
        try {
            if (a = a || window.event) {
                this.event = a;
                for (let d in a) d in ai || (this[d] = a[d]);
                this.rotation = a.rotation;
                var b = a.target || a.srcElement;
                b && 3 == b.nodeType && (b = b.parentNode);
                this.target = b;
                var c = a.relatedTarget;
                if (c) try {
                    c =
                        c.nodeName ? c : null
                } catch (d) {
                    c = null
                } else "mouseover" == this.type ? c = a.fromElement : "mouseout" == this.type && (c = a.toElement);
                this.relatedTarget = c;
                this.clientX = void 0 != a.clientX ? a.clientX : a.pageX;
                this.clientY = void 0 != a.clientY ? a.clientY : a.pageY;
                this.keyCode = a.keyCode ? a.keyCode : a.which;
                this.charCode = a.charCode || ("keypress" == this.type ? this.keyCode : 0);
                this.altKey = a.altKey;
                this.ctrlKey = a.ctrlKey;
                this.shiftKey = a.shiftKey;
                this.metaKey = a.metaKey;
                this.h = a.pageX;
                this.i = a.pageY
            }
        } catch (d) {}
    }
    preventDefault() {
        this.event &&
            (this.event.returnValue = !1, this.event.preventDefault && this.event.preventDefault())
    }
    stopPropagation() {
        this.event && (this.event.cancelBubble = !0, this.event.stopPropagation && this.event.stopPropagation())
    }
    stopImmediatePropagation() {
        this.event && (this.event.cancelBubble = !0, this.event.stopImmediatePropagation && this.event.stopImmediatePropagation())
    }
};
const ua = t.ytEventsEventsListeners || {};
v("ytEventsEventsListeners", ua);
const di = t.ytEventsEventsCounter || {
    count: 0
};
v("ytEventsEventsCounter", di);

function ei(a, b, c, d = {}) {
    a.addEventListener && ("mouseenter" != b || "onmouseenter" in document ? "mouseleave" != b || "onmouseenter" in document ? "mousewheel" == b && "MozBoxSizing" in document.documentElement.style && (b = "MozMousePixelScroll") : b = "mouseout" : b = "mouseover");
    return ta(e => {
        const f = "boolean" === typeof e[4] && e[4] == !!d;
        var g;
        if (g = ia(e[4]) && ia(d)) a: {
            g = e[4];
            for (const h in g)
                if (!(h in d) || g[h] !== d[h]) {
                    g = !1;
                    break a
                }
            for (const h in d)
                if (!(h in g)) {
                    g = !1;
                    break a
                }
            g = !0
        }
        return !!e.length && e[0] == a && e[1] == b && e[2] == c && (f || g)
    })
}
const fi = function(a) {
    let b = !1,
        c;
    return function() {
        b || (c = a(), b = !0);
        return c
    }
}(function() {
    let a = !1;
    try {
        const b = Object.defineProperty({}, "capture", {
            get: function() {
                a = !0
            }
        });
        window.addEventListener("test", null, b)
    } catch (b) {}
    return a
});

function gi(a, b, c, d = {}) {
    if (!a || !a.addEventListener && !a.attachEvent) return "";
    let e = ei(a, b, c, d);
    if (e) return e;
    e = ++di.count + "";
    const f = !("mouseenter" != b && "mouseleave" != b || !a.addEventListener || "onmouseenter" in document);
    let g;
    g = f ? h => {
        h = new ci(h);
        if (!Vc(h.relatedTarget, k => k == a)) return h.currentTarget = a, h.type = b, c.call(a, h)
    } : h => {
        h = new ci(h);
        h.currentTarget = a;
        return c.call(a, h)
    };
    g = P(g);
    a.addEventListener ? ("mouseenter" == b && f ? b = "mouseover" : "mouseleave" == b && f ? b = "mouseout" : "mousewheel" == b && "MozBoxSizing" in document.documentElement.style && (b = "MozMousePixelScroll"), fi() || "boolean" === typeof d ? a.addEventListener(b, g, d) : a.addEventListener(b, g, !!d.capture)) : a.attachEvent(`on${b}`, g);
    ua[e] = [a, b, c, g, d];
    return e
}

function hi(a) {
    a && ("string" == typeof a && (a = [a]), pa(a, b => {
        if (b in ua) {
            var c = ua[b];
            const d = c[0],
                e = c[1],
                f = c[3];
            c = c[4];
            d.removeEventListener ? fi() || "boolean" === typeof c ? d.removeEventListener(e, f, c) : d.removeEventListener(e, f, !!c.capture) : d.detachEvent && d.detachEvent(`on${e}`, f);
            delete ua[b]
        }
    }))
};

function ii(a) {
    this.L = a;
    this.h = null;
    this.o = 0;
    this.v = null;
    this.s = 0;
    this.i = [];
    for (a = 0; 4 > a; a++) this.i.push(0);
    this.m = 0;
    this.G = gi(window, "mousemove", la(this.U, this));
    a = la(this.F, this);
    "function" === typeof a && (a = P(a));
    this.V = window.setInterval(a, 25)
}
ma(ii, Nc);
ii.prototype.U = function(a) {
    void 0 === a.h && bi(a);
    var b = a.h;
    void 0 === a.i && bi(a);
    this.h = new Uc(b, a.i)
};
ii.prototype.F = function() {
    if (this.h) {
        var a = R();
        if (0 != this.o) {
            var b = this.v,
                c = this.h,
                d = b.x - c.x;
            b = b.y - c.y;
            d = Math.sqrt(d * d + b * b) / (a - this.o);
            this.i[this.m] = .5 < Math.abs((d - this.s) / this.s) ? 1 : 0;
            for (c = b = 0; 4 > c; c++) b += this.i[c] || 0;
            3 <= b && this.L();
            this.s = d
        }
        this.o = a;
        this.v = this.h;
        this.m = (this.m + 1) % 4
    }
};
ii.prototype.R = function() {
    window.clearInterval(this.V);
    hi(this.G)
};
const ji = new Set([174, 173, 175]),
    ki = {};

function li() {
    var {
        ec: a = !1,
        Xb: b = !0
    } = {};
    if (null == w("_lact", window)) {
        var c = parseInt(O("LACT"), 10);
        c = isFinite(c) ? Date.now() - Math.max(c, 0) : -1;
        v("_lact", c, window);
        v("_fact", c, window); - 1 == c && mi();
        gi(document, "keydown", mi);
        gi(document, "keyup", mi);
        gi(document, "mousedown", mi);
        gi(document, "mouseup", mi);
        a ? gi(window, "touchmove", () => {
            ni("touchmove", 200)
        }, {
            passive: !0
        }) : (gi(window, "resize", () => {
            ni("resize", 200)
        }), b && gi(window, "scroll", () => {
            ni("scroll", 200)
        }));
        new ii(() => {
            ni("mouse", 100)
        });
        gi(document, "touchstart", mi, {
            passive: !0
        });
        gi(document, "touchend", mi, {
            passive: !0
        })
    }
}

function ni(a, b) {
    ki[a] || (ki[a] = !0, xf.h(() => {
        mi();
        ki[a] = !1
    }, b))
}

function mi(a) {
    let b;
    if (null != (b = w("experiment.flags", window)) && b.enable_lact_reset_by_volume_buttons || !ji.has(null == a ? void 0 : a.keyCode)) null == w("_lact", window) && li(), a = Date.now(), v("_lact", a, window), -1 == w("_fact", window) && v("_fact", a, window), (a = w("ytglobal.ytUtilActivityCallback_")) && a()
}

function oi() {
    const a = w("_lact", window);
    return null == a ? -1 : Math.max(Date.now() - a, 0)
};
t.ytPubsubPubsubInstance || new I;
var pi = Symbol("injectionDeps"),
    qi = class {
        constructor() {
            this.name = "INNERTUBE_TRANSPORT_TOKEN"
        }
        toString() {
            return `InjectionToken(${this.name})`
        }
    },
    ri = class {
        constructor() {
            this.key = Lh
        }
    };

function si(a) {
    var b = {
        Za: ti,
        Aa: ui.h
    };
    a.i.set(b.Za, b)
}

function vi(a, b, c, d = !1) {
    if (-1 < c.indexOf(b)) throw Error(`Deps cycle for: ${b}`);
    if (a.h.has(b)) return a.h.get(b);
    if (!a.i.has(b)) {
        if (d) return;
        throw Error(`No provider for: ${b}`);
    }
    d = a.i.get(b);
    c.push(b);
    if (void 0 !== d.Aa) var e = d.Aa;
    else if (d.lb) e = d[pi] ? wi(a, d[pi], c) : [], e = d.lb(...e);
    else if (d.kb) {
        e = d.kb;
        const f = e[pi] ? wi(a, e[pi], c) : [];
        e = new e(...f)
    } else throw Error(`Could not resolve providers for: ${b}`);
    c.pop();
    d.pc || a.h.set(b, e);
    return e
}

function wi(a, b, c) {
    return b ? b.map(d => d instanceof ri ? vi(a, d.key, c, !0) : vi(a, d, c)) : []
}
var xi = class {
    constructor() {
        this.i = new Map;
        this.h = new Map
    }
    resolve(a) {
        return a instanceof ri ? vi(this, a.key, [], !0) : vi(this, a, [])
    }
};
let yi;

function zi() {
    yi || (yi = new xi);
    return yi
};

function Ai(a, b) {
    const c = Bi(b);
    if (a.h[c]) return a.h[c];
    const d = Object.keys(a.store) || [];
    if (1 >= d.length && Bi(b) === d[0]) return d;
    const e = [];
    for (let g = 0; g < d.length; g++) {
        const h = d[g].split("/");
        if (Ci(b.auth, h[0])) {
            var f = b.isJspb;
            Ci(void 0 === f ? "undefined" : f ? "true" : "false", h[1]) && Ci(b.cttAuthInfo, h[2]) && (f = b.tier, f = void 0 === f ? "undefined" : JSON.stringify(f), Ci(f, h[3]) && e.push(d[g]))
        }
    }
    return a.h[c] = e
}

function Ci(a, b) {
    return void 0 === a || "undefined" === a ? !0 : a === b
}
var Di = class {
    constructor() {
        this.store = {};
        this.h = {}
    }
    storePayload(a, b) {
        a = Bi(a);
        this.store[a] ? this.store[a].push(b) : (this.h = {}, this.store[a] = [b]);
        return a
    }
    smartExtractMatchingEntries(a) {
        if (!a.keys.length) return [];
        const b = Ai(this, a.keys.splice(0, 1)[0]),
            c = [];
        for (let d = 0; d < b.length; d++) this.store[b[d]] && a.sizeLimit && (this.store[b[d]].length <= a.sizeLimit ? (c.push(...this.store[b[d]]), delete this.store[b[d]]) : c.push(...this.store[b[d]].splice(0, a.sizeLimit)));
        (null == a ? 0 : a.sizeLimit) && c.length < (null == a ? void 0 :
            a.sizeLimit) && (a.sizeLimit -= c.length, c.push(...this.smartExtractMatchingEntries(a)));
        return c
    }
    extractMatchingEntries(a) {
        a = Ai(this, a);
        const b = [];
        for (let c = 0; c < a.length; c++) this.store[a[c]] && (b.push(...this.store[a[c]]), delete this.store[a[c]]);
        return b
    }
    getSequenceCount(a) {
        a = Ai(this, a);
        let b = 0;
        for (let c = 0; c < a.length; c++) {
            let d;
            b += (null == (d = this.store[a[c]]) ? void 0 : d.length) || 0
        }
        return b
    }
};
Di.prototype.getSequenceCount = Di.prototype.getSequenceCount;
Di.prototype.extractMatchingEntries = Di.prototype.extractMatchingEntries;
Di.prototype.smartExtractMatchingEntries = Di.prototype.smartExtractMatchingEntries;
Di.prototype.storePayload = Di.prototype.storePayload;

function Bi(a) {
    return [void 0 === a.auth ? "undefined" : a.auth, void 0 === a.isJspb ? "undefined" : a.isJspb, void 0 === a.cttAuthInfo ? "undefined" : a.cttAuthInfo, void 0 === a.tier ? "undefined" : a.tier].join("/")
};
const Ei = jf("initial_gel_batch_timeout", 2E3),
    Fi = jf("gel_queue_timeout_max_ms", 6E4),
    Gi = Math.pow(2, 16) - 1;
let Hi = void 0;
class Ii {
    constructor() {
        this.j = this.h = this.i = 0
    }
}
const Ji = new Ii,
    Ki = new Ii,
    Li = new Ii,
    Mi = new Ii;
let Ni, Oi = !0;
const Pi = t.ytLoggingTransportTokensToCttTargetIds_ || {},
    Qi = t.ytLoggingTransportTokensToJspbCttTargetIds_ || {};
let Ri = {};

function Si() {
    let a = w("yt.logging.ims");
    a || (a = new Di, v("yt.logging.ims", a));
    return a
}

function Ti(a, b) {
    if ("log_event" === a.endpoint) {
        var c = Ui(a);
        a: {
            var d = Object.keys(a.payload);
            for (const e of d)
                if (Uh[e]) {
                    d = e;
                    break a
                }
            d = void 0
        }
        d = Vi(d || "");
        400 === d ? Wi(a, b) : (Ri[c] = !0, d = {
            cttAuthInfo: c,
            isJspb: !1,
            tier: d
        }, Si().storePayload(d, a.payload), Xi(b, c, !1, d))
    }
}

function Yi(a, b, c) {
    if ("log_event" === b.endpoint) {
        var d = Ui(b, !0),
            e = Vi(a);
        400 === e ? Zi(a, b, c) : (Ri[d] = !0, a = {
            cttAuthInfo: d,
            isJspb: !0,
            tier: e
        }, Si().storePayload(a, b.payload.toJSON()), Xi(c, d, !0, a))
    }
}

function Xi(a, b, c = !1, d) {
    a && (Hi = new a);
    a = $i();
    const e = R(),
        f = aj(c, d.tier),
        g = f.j;
    let h = 0;
    d && (h = Si().getSequenceCount(d));
    const k = () => {
        bj({
            writeThenSend: !0
        }, Q("flush_only_full_queue") ? b : void 0, c, d.tier)
    };
    1E3 <= h && Q("web_logging_max_batch_hard_limit") ? k() : h >= a ? Ni || (Ni = cj(() => {
        k();
        Ni = void 0
    }, 0)) : 10 <= e - g && (dj(c, d.tier), f.j = e)
}

function Wi(a, b) {
    if ("log_event" === a.endpoint) {
        var c = Ui(a),
            d = new Map;
        d.set(c, [a.payload]);
        b && (Hi = new b);
        return new F((e, f) => {
            Hi && Hi.isReady() ? ej(d, Hi, e, f, {
                bypassNetworkless: !0
            }, !0) : e()
        })
    }
}

function Zi(a, b, c) {
    if ("log_event" === b.endpoint) {
        a = Ui(b, !0);
        var d = new Map;
        d.set(a, [b.payload.toJSON()]);
        c && (Hi = new c);
        return new F(e => {
            Hi && Hi.isReady() ? fj(d, Hi, e, {
                bypassNetworkless: !0
            }, !0) : e()
        })
    }
}

function Ui(a, b = !1) {
    var c = "";
    if (a.dangerousLogToVisitorSession) c = "visitorOnlyApprovedKey";
    else if (a.cttAuthInfo) {
        if (b) {
            b = a.cttAuthInfo.token;
            c = a.cttAuthInfo;
            const d = new He;
            c.videoId ? d.setVideoId(c.videoId) : c.playlistId && bc(d, 2, Ge, c.playlistId);
            Qi[b] = d
        } else b = a.cttAuthInfo, c = {}, b.videoId ? c.videoId = b.videoId : b.playlistId && (c.playlistId = b.playlistId), Pi[a.cttAuthInfo.token] = c;
        c = a.cttAuthInfo.token
    }
    return c
}

function bj(a = {}, b, c = !1, d) {
    new F((e, f) => {
        const g = aj(c, d);
        gj(g.i);
        gj(g.h);
        g.h = 0;
        Hi && Hi.isReady() ? void 0 === d && Q("enable_web_tiered_gel") ? (hj(e, f, a, b, c, 300), hj(e, f, a, b, c, 200)) : hj(e, f, a, b, c, d) : (dj(c, d), e())
    })
}

function hj(a, b, c = {}, d, e = !1, f = 200) {
    var g = Hi,
        h = new Map;
    const k = new Map,
        l = {
            isJspb: e,
            cttAuthInfo: d,
            tier: f
        },
        m = {
            isJspb: e,
            cttAuthInfo: d
        };
    if (void 0 !== d) e ? (b = Q("enable_web_tiered_gel") ? Si().smartExtractMatchingEntries({
        keys: [l, m],
        sizeLimit: $i()
    }) : Si().extractMatchingEntries(m), h.set(d, b), fj(h, g, a, c)) : (h = Q("enable_web_tiered_gel") ? Si().smartExtractMatchingEntries({
        keys: [l, m],
        sizeLimit: $i()
    }) : Si().extractMatchingEntries(m), k.set(d, h), ej(k, g, a, b, c));
    else if (e) {
        for (const n of Object.keys(Ri)) b = Q("enable_web_tiered_gel") ?
            Si().smartExtractMatchingEntries({
                keys: [l, m],
                sizeLimit: $i()
            }) : Si().extractMatchingEntries({
                isJspb: !0,
                cttAuthInfo: n
            }), 0 < b.length && h.set(n, b), delete Ri[n];
        fj(h, g, a, c)
    } else {
        for (const n of Object.keys(Ri)) d = Q("enable_web_tiered_gel") ? Si().smartExtractMatchingEntries({
            keys: [{
                isJspb: !1,
                cttAuthInfo: n,
                tier: f
            }, {
                isJspb: !1,
                cttAuthInfo: n
            }],
            sizeLimit: $i()
        }) : Si().extractMatchingEntries({
            isJspb: !1,
            cttAuthInfo: n
        }), 0 < d.length && k.set(n, d), delete Ri[n];
        ej(k, g, a, b, c)
    }
}

function dj(a = !1, b = 200) {
    const c = aj(a, b);
    var d = c === Mi || c === Li ? 5E3 : Fi;
    Q("web_gel_timeout_cap") && !c.h && (d = cj(() => {
        bj({
            writeThenSend: !0
        }, void 0, a, b)
    }, d), c.h = d);
    gj(c.i);
    d = O("LOGGING_BATCH_TIMEOUT", jf("web_gel_debounce_ms", 1E4));
    Q("shorten_initial_gel_batch_timeout") && Oi && (d = Ei);
    d = cj(() => {
        bj({
            writeThenSend: !0
        }, void 0, a, b)
    }, d);
    c.i = d
}

function ej(a, b, c, d, e = {}, f) {
    const g = Math.round(R());
    let h = a.size;
    for (const [l, m] of a) {
        a = l;
        var k = m;
        const n = wa({
            context: Oh(b.config_ || Nh())
        });
        if (!ha(k) && !Q("throw_err_when_logevent_malformed_killswitch")) {
            d();
            break
        }
        n.events = k;
        (k = Pi[a]) && ij(n, a, k);
        delete Pi[a];
        const u = "visitorOnlyApprovedKey" === a;
        jj(n, g, u);
        kj(e);
        const p = G => {
            Q("update_log_event_config") && xf.h(() => r(function*() {
                yield lj(G)
            }));
            h--;
            h || c()
        };
        let y = 0;
        const H = () => {
            y++;
            if (e.bypassNetworkless && 1 === y) try {
                Zh(b, n, mj({
                    writeThenSend: !0
                }, u, p, H, f)), Oi = !1
            } catch (G) {
                ff(G), d()
            }
            h--;
            h || c()
        };
        try {
            Zh(b, n, mj(e, u, p, H, f)), Oi = !1
        } catch (G) {
            ff(G), d()
        }
    }
}

function fj(a, b, c, d = {}, e) {
    const f = Math.round(R());
    let g = a.size;
    var h = new Map([...a]);
    for (const [m] of h) {
        var k = m,
            l = a.get(k);
        h = new Ie;
        const n = Sh(b.config_ || Nh());
        C(h, de, 1, n);
        l = l ? nj(l) : [];
        for (const u of l) jc(h, 3, L, u);
        (l = Qi[k]) && oj(h, k, l);
        delete Qi[k];
        k = "visitorOnlyApprovedKey" === k;
        pj(h, f, k);
        kj(d);
        l = {
            startTime: R(),
            ticks: {},
            infos: {}
        };
        h = uc(h);
        l.ticks.geljspc = R();
        Q("log_jspb_serialize_latency") && .001 > Math.random() && Cf("meta_logging_csi_event", {
            timerName: "gel_jspb_serialize",
            qc: l
        });
        k = mj(d, k, u => {
            Q("update_log_event_config") &&
                xf.h(() => r(function*() {
                    yield lj(u)
                }));
            g--;
            g || c()
        }, () => {
            g--;
            g || c()
        }, e);
        k.headers["Content-Type"] = "application/json+protobuf";
        k.postBodyFormat = "JSPB";
        k.postBody = h;
        Zh(b, "", k);
        Oi = !1
    }
}

function kj(a) {
    Q("always_send_and_write") && (a.writeThenSend = !1)
}

function mj(a, b, c, d, e) {
    a = {
        retry: !0,
        onSuccess: c,
        onError: d,
        cc: a,
        dangerousLogToVisitorSession: b,
        Ub: !!e,
        headers: {},
        postBodyFormat: "",
        postBody: "",
        compress: Q("compress_gel") || Q("compress_gel_lr")
    };
    qj() && (a.headers["X-Goog-Request-Time"] = JSON.stringify(Math.round(R())));
    return a
}

function jj(a, b, c) {
    qj() || (a.requestTimeMs = String(b));
    Q("unsplit_gel_payloads_in_logs") && (a.unsplitGelPayloadsInLogs = !0);
    !c && (b = O("EVENT_ID")) && (c = rj(), a.serializedClientEventId = {
        serializedEventId: b,
        clientCounter: String(c)
    })
}

function pj(a, b, c) {
    qj() || B(a, 2, b);
    if (!c && (b = O("EVENT_ID"))) {
        c = rj();
        const d = new Fe;
        B(d, 1, b);
        B(d, 2, c);
        C(a, Fe, 5, d)
    }
}

function rj() {
    let a = O("BATCH_CLIENT_COUNTER") || 0;
    a || (a = Math.floor(Math.random() * Gi / 2));
    a++;
    a > Gi && (a = 1);
    N("BATCH_CLIENT_COUNTER", a);
    return a
}

function ij(a, b, c) {
    let d;
    if (c.videoId) d = "VIDEO";
    else if (c.playlistId) d = "PLAYLIST";
    else return;
    a.credentialTransferTokenTargetId = c;
    a.context = a.context || {};
    a.context.user = a.context.user || {};
    a.context.user.credentialTransferTokens = [{
        token: b,
        scope: d
    }]
}

function oj(a, b, c) {
    var d = 1 === cc(c, Ge) ? 1 : -1;
    if (A(c, d)) d = 1;
    else if (c.getPlaylistId()) d = 2;
    else return;
    C(a, He, 4, c);
    a = dc(a, de, 1) || new de;
    c = dc(a, ce, 3) || new ce;
    const e = new be;
    B(e, 2, b);
    B(e, 1, d);
    jc(c, 12, be, e);
    C(a, ce, 3, c)
}

function nj(a) {
    const b = [];
    for (let c = 0; c < a.length; c++) try {
        b.push(new L(a[c]))
    } catch (d) {
        ff(new Pe("Transport failed to deserialize " + String(a[c])))
    }
    return b
}

function qj() {
    return Q("use_request_time_ms_header") || Q("lr_use_request_time_ms_header")
}

function cj(a, b) {
    return Q("transport_use_scheduler") ? tf(a, b) : sf(a, b)
}

function gj(a) {
    Q("transport_use_scheduler") ? xf.i(a) : window.clearTimeout(a)
}

function lj(a) {
    return r(function*() {
        var b, c = null == a ? void 0 : null == (b = a.responseContext) ? void 0 : b.globalConfigGroup;
        b = nf(c, Qd);
        const d = null == c ? void 0 : c.hotHashData,
            e = nf(c, Pd);
        c = null == c ? void 0 : c.coldHashData;
        const f = zi().resolve(new ri);
        f && (d && (b ? yield Jh(f, d, b): yield Jh(f, d)), c && (e ? yield Kh(f, c, e): yield Kh(f, c)))
    })
}

function aj(a, b = 200) {
    return a ? 300 === b ? Mi : Ki : 300 === b ? Li : Ji
}

function $i() {
    return jf("tvhtml5_logging_max_batch_ads_fork") || jf("web_logging_max_batch") || 100
}

function Vi(a) {
    if (Q("enable_web_tiered_gel")) {
        a = Uh[a || ""];
        var b, c;
        if (null == zi().resolve(new ri)) var d = void 0;
        else {
            var e = null != (d = w("yt.gcf.config.hotConfigGroup")) ? d : null;
            d = null == e ? void 0 : null == (b = e.loggingHotConfig) ? void 0 : null == (c = b.eventLoggingConfig) ? void 0 : c.payloadPolicies
        }
        if (b = d)
            for (c = 0; c < b.length; c++)
                if (b[c].payloadNumber === a) return b[c].tier;
        return 200
    }
};
const sj = t.ytLoggingGelSequenceIdObj_ || {};

function tj(a, b, c, d = {}) {
    const e = {},
        f = Math.round(d.timestamp || R());
    e.eventTimeMs = f < Number.MAX_SAFE_INTEGER ? f : 0;
    e[a] = b;
    Q("enable_unknown_lact_fix_on_html5") && li();
    a = oi();
    e.context = {
        lastActivityMs: String(d.timestamp || !isFinite(a) ? -1 : a)
    };
    Q("log_sequence_info_on_gel_web") && d.sequenceGroup && (a = e.context, b = d.sequenceGroup, b = {
        index: uj(b),
        groupKey: b
    }, a.sequence = b, d.endOfSequence && delete sj[d.sequenceGroup]);
    (d.sendIsolatedPayload ? Wi : Ti)({
            endpoint: "log_event",
            payload: e,
            cttAuthInfo: d.cttAuthInfo,
            dangerousLogToVisitorSession: d.dangerousLogToVisitorSession
        },
        c)
}

function vj(a = !1) {
    bj(void 0, void 0, a)
}

function uj(a) {
    sj[a] = a in sj ? sj[a] + 1 : 0;
    return sj[a]
};
let wj = $h,
    xj = [];

function V(a, b, c = {}) {
    let d = wj;
    O("ytLoggingEventsDefaultDisabled", !1) && wj === $h && (d = null);
    Q("web_all_payloads_via_jspb") && !c.timestamp && (c.timestamp = R());
    tj(a, b, d, c)
};
const yj = t.ytLoggingGelSequenceIdObj_ || {};

function zj(a, b, c, d = {}) {
    var e = Math.round(d.timestamp || R());
    B(b, 1, e < Number.MAX_SAFE_INTEGER ? e : 0);
    var f = oi();
    e = new Ce;
    B(e, 1, d.timestamp || !isFinite(f) ? -1 : f);
    if (Q("log_sequence_info_on_gel_web") && d.sequenceGroup) {
        f = d.sequenceGroup;
        const g = uj(f),
            h = new Be;
        B(h, 2, g);
        B(h, 1, f);
        C(e, Be, 3, h);
        d.endOfSequence && delete yj[d.sequenceGroup]
    }
    C(b, Ce, 33, e);
    (d.sendIsolatedPayload ? Zi : Yi)(a, {
        endpoint: "log_event",
        payload: b,
        cttAuthInfo: d.cttAuthInfo,
        dangerousLogToVisitorSession: d.dangerousLogToVisitorSession
    }, c)
};

function Aj(a, b, c = {}) {
    let d = !1;
    O("ytLoggingEventsDefaultDisabled", !1) && (d = !0);
    zj(a, b, d ? null : $h, c)
};

function Bj(a, b, c) {
    const d = Q("jspb_sparse_encoded_pivot") ? new L([{}]) : new L;
    ic(d, ze, 72, De, a);
    c ? zj("visualElementShown", d, c, b) : Aj("visualElementShown", d, b)
}

function Cj(a, b, c) {
    const d = Q("jspb_sparse_encoded_pivot") ? new L([{}]) : new L;
    ic(d, ye, 73, De, a);
    c ? zj("visualElementHidden", d, c, b) : Aj("visualElementHidden", d, b)
}

function Dj(a, b, c) {
    const d = Q("jspb_sparse_encoded_pivot") ? new L([{}]) : new L;
    ic(d, xe, 78, De, a);
    c ? zj("visualElementGestured", d, c, b) : Aj("visualElementGestured", d, b)
}

function Ej(a, b, c) {
    const d = Q("jspb_sparse_encoded_pivot") ? new L([{}]) : new L;
    ic(d, Ae, 208, De, a);
    c ? zj("visualElementStateChanged", d, c, b) : Aj("visualElementStateChanged", d, b)
}

function Fj(a, b, c) {
    const d = Q("jspb_sparse_encoded_pivot") ? new L([{}]) : new L;
    ic(d, ue, 156, De, a);
    c ? zj("screenCreated", d, c, b) : Aj("screenCreated", d, b)
}

function Gj(a, b, c) {
    const d = Q("jspb_sparse_encoded_pivot") ? new L([{}]) : new L;
    ic(d, we, 215, De, a);
    c ? zj("visualElementAttached", d, c, b) : Aj("visualElementAttached", d, b)
};
var Hj = new Set,
    Ij = 0,
    Jj = 0,
    Kj = 0,
    Lj = [];
const Mj = ["PhantomJS", "Googlebot", "TO STOP THIS SECURITY SCAN go/scan"];

function Nj(a) {
    W(a)
}

function Oj(a) {
    W(a, "WARNING")
}

function W(a, b = "ERROR") {
    var c = {};
    c.name = O("INNERTUBE_CONTEXT_CLIENT_NAME", 1);
    c.version = O("INNERTUBE_CONTEXT_CLIENT_VERSION");
    Pj(a, c, b)
}

function Pj(a, b, c = "ERROR") {
    if (a) {
        a.hasOwnProperty("level") && a.level && (c = a.level);
        if (Q("console_log_js_exceptions")) {
            var d = [];
            d.push(`Name: ${a.name}`);
            d.push(`Message: ${a.message}`);
            a.hasOwnProperty("params") && d.push(`Error Params: ${JSON.stringify(a.params)}`);
            a.hasOwnProperty("args") && d.push(`Error args: ${JSON.stringify(a.args)}`);
            d.push(`File name: ${a.fileName}`);
            d.push(`Stacktrace: ${a.stack}`);
            window.console.log(d.join("\n"), a)
        }
        if (!(5 <= Ij)) {
            d = Lj;
            var e = Oc(a);
            const n = e.message || "Unknown Error",
                u = e.name || "UnknownError";
            var f = e.stack || a.i || "Not available";
            if (f.startsWith(`${u}: ${n}`)) {
                var g = f.split("\n");
                g.shift();
                f = g.join("\n")
            }
            g = e.lineNumber || "Not available";
            e = e.fileName || "Not available";
            let p = 0;
            if (a.hasOwnProperty("args") && a.args && a.args.length)
                for (var h = 0; h < a.args.length && !(p = ig(a.args[h], `params.${h}`, b, p), 500 <= p); h++);
            else if (a.hasOwnProperty("params") && a.params) {
                const y = a.params;
                if ("object" === typeof a.params)
                    for (h in y) {
                        if (!y[h]) continue;
                        const H = `params.${h}`,
                            G = kg(y[h]);
                        b[H] = G;
                        p +=
                            H.length + G.length;
                        if (500 < p) break
                    } else b.params = kg(y)
            }
            if (d.length)
                for (h = 0; h < d.length && !(p = ig(d[h], `params.context.${h}`, b, p), 500 <= p); h++);
            navigator.vendor && !b.hasOwnProperty("vendor") && (b["device.vendor"] = navigator.vendor);
            b = {
                message: n,
                name: u,
                lineNumber: g,
                fileName: e,
                stack: f,
                params: b,
                sampleWeight: 1
            };
            d = Number(a.columnNumber);
            isNaN(d) || (b.lineNumber = `${b.lineNumber}:${d}`);
            if ("IGNORED" === a.level) var k = 0;
            else a: {
                a = bg();d = b;
                for (k of a.K)
                    if (d.message && d.message.match(k.Wa)) {
                        k = k.weight;
                        break a
                    }
                for (var l of a.H)
                    if (l.callback(d)) {
                        k =
                            l.weight;
                        break a
                    }
                k = 1
            }
            b.sampleWeight = k;
            k = b;
            for (var m of Zf)
                if (m.da[k.name]) {
                    l = m.da[k.name];
                    for (const y of l)
                        if (l = k.message.match(y.A)) {
                            k.params["params.error.original"] = l[0];
                            a = y.groups;
                            b = {};
                            for (d = 0; d < a.length; d++) b[a[d]] = l[d + 1], k.params[`params.error.${a[d]}`] = l[d + 1];
                            k.message = m.la(b);
                            break
                        }
                }
            k.params || (k.params = {});
            m = bg();
            k.params["params.errorServiceSignature"] = `msg=${m.K.length}&cb=${m.H.length}`;
            k.params["params.serviceWorker"] = "true";
            t.document && t.document.querySelectorAll && (k.params["params.fscripts"] =
                String(document.querySelectorAll("script:not([nonce])").length));
            Aa("sample").constructor !== za && (k.params["params.fconst"] = "true");
            window.yterr && "function" === typeof window.yterr && window.yterr(k);
            0 === k.sampleWeight || Hj.has(k.message) || Qj(k, c)
        }
    }
}

function Qj(a, b = "ERROR") {
    if ("ERROR" === b) {
        fg.oa("handleError", a);
        if (Q("record_app_crashed_web") && 0 === Kj && 1 === a.sampleWeight)
            if (Kj++, Q("errors_via_jspb")) {
                var c = new ne;
                c = B(c, 1, 1);
                if (!Q("report_client_error_with_app_crash_ks")) {
                    var d = new me;
                    var e = new le;
                    var f = new ke;
                    var g = new je;
                    g = B(g, 1, a.message);
                    f = C(f, je, 3, g);
                    e = C(e, ke, 5, f);
                    d = C(d, le, 9, e);
                    C(c, me, 4, d)
                }
                d = Q("jspb_sparse_encoded_pivot") ? new L([{}]) : new L;
                ic(d, ne, 20, De, c);
                Aj("appCrashed", d)
            } else c = {
                    appCrashType: "APP_CRASH_TYPE_BREAKPAD"
                }, Q("report_client_error_with_app_crash_ks") ||
                (c.systemHealth = {
                    crashData: {
                        clientError: {
                            logMessage: {
                                message: a.message
                            }
                        }
                    }
                }), V("appCrashed", c);
        Jj++
    } else "WARNING" === b && fg.oa("handleWarning", a);
    a: {
        if (Q("errors_via_jspb")) {
            if (Rj()) var h = void 0;
            else {
                c = new ge;
                B(c, 1, a.stack);
                a.fileName && B(c, 4, a.fileName);
                var k = a.lineNumber && a.lineNumber.split ? a.lineNumber.split(":") : [];
                0 !== k.length && (1 !== k.length || isNaN(Number(k[0])) ? 2 !== k.length || isNaN(Number(k[0])) || isNaN(Number(k[1])) || (B(c, 2, Number(k[0])), B(c, 3, Number(k[1]))) : B(c, 2, Number(k[0])));
                k = new je;
                B(k, 1, a.message);
                B(k, 3, a.name);
                B(k, 6, a.sampleWeight);
                "ERROR" === b ? B(k, 2, 2) : "WARNING" === b ? B(k, 2, 1) : B(k, 2, 0);
                var l = new he;
                B(l, 1, !0);
                ic(l, ge, 3, ie, c);
                c = new fe;
                B(c, 3, window.location.href);
                d = O("FEXP_EXPERIMENTS", []);
                for (g = 0; g < d.length; g++) e = c, f = d[g], Wb(e), ac(e, 5, 2, !1, !1).push(f);
                d = bf();
                if (!cf() && d)
                    for (var m of Object.keys(d)) e = new ee, B(e, 1, m), B(e, 2, String(d[m])), jc(c, 4, ee, e);
                if (m = a.params)
                    for (h of Object.keys(m)) d = new ee, B(d, 1, `client.${h}`), B(d, 2, String(m[h])), jc(c, 4, ee, d);
                m = O("SERVER_NAME");
                h = O("SERVER_VERSION");
                m && h &&
                    (d = new ee, B(d, 1, "server.name"), B(d, 2, m), jc(c, 4, ee, d), m = new ee, B(m, 1, "server.version"), B(m, 2, h), jc(c, 4, ee, m));
                h = new ke;
                C(h, fe, 1, c);
                C(h, he, 2, l);
                C(h, je, 3, k)
            }
            if (!h) break a;
            m = Q("jspb_sparse_encoded_pivot") ? new L([{}]) : new L;
            ic(m, ke, 163, De, h);
            Aj("clientError", m)
        } else {
            if (Rj()) h = void 0;
            else {
                m = {
                    stackTrace: a.stack
                };
                a.fileName && (m.filename = a.fileName);
                h = a.lineNumber && a.lineNumber.split ? a.lineNumber.split(":") : [];
                0 !== h.length && (1 !== h.length || isNaN(Number(h[0])) ? 2 !== h.length || isNaN(Number(h[0])) || isNaN(Number(h[1])) ||
                    (m.lineNumber = Number(h[0]), m.columnNumber = Number(h[1])) : m.lineNumber = Number(h[0]));
                h = {
                    level: "ERROR_LEVEL_UNKNOWN",
                    message: a.message,
                    errorClassName: a.name,
                    sampleWeight: a.sampleWeight
                };
                "ERROR" === b ? h.level = "ERROR_LEVEL_ERROR" : "WARNING" === b && (h.level = "ERROR_LEVEL_WARNNING");
                m = {
                    isObfuscated: !0,
                    browserStackInfo: m
                };
                c = {
                    pageUrl: window.location.href,
                    kvPairs: []
                };
                O("FEXP_EXPERIMENTS") && (c.experimentIds = O("FEXP_EXPERIMENTS"));
                d = bf();
                if (!cf() && d)
                    for (l of Object.keys(d)) c.kvPairs.push({
                        key: l,
                        value: String(d[l])
                    });
                if (l = a.params)
                    for (k of Object.keys(l)) c.kvPairs.push({
                        key: `client.${k}`,
                        value: String(l[k])
                    });
                k = O("SERVER_NAME");
                l = O("SERVER_VERSION");
                k && l && (c.kvPairs.push({
                    key: "server.name",
                    value: k
                }), c.kvPairs.push({
                    key: "server.version",
                    value: l
                }));
                h = {
                    errorMetadata: c,
                    stackTrace: m,
                    logMessage: h
                }
            }
            if (!h) break a;
            V("clientError", h)
        }
        if ("ERROR" === b || Q("errors_flush_gel_always_killswitch")) b: {
            if (Q("web_fp_via_jspb")) {
                b = xj;
                xj = [];
                if (b)
                    for (const n of b) tj(n.T, n.payload, wj, n.options);
                vj(!0);
                if (!Q("web_fp_via_jspb_and_json")) break b
            }
            vj()
        }
    }
    try {
        Hj.add(a.message)
    } catch (n) {}
    Ij++
}

function Rj() {
    for (const a of Mj) {
        const b = Ga();
        if (b && 0 <= b.toLowerCase().indexOf(a.toLowerCase())) return !0
    }
    return !1
}

function Sj(a, ...b) {
    a.args || (a.args = []);
    a.args.push(...b)
};
v("ytLoggingLatencyUsageStats_", t.ytLoggingLatencyUsageStats_ || {});
const Tj = window;
class Uj {
    constructor() {
        this.timing = {};
        this.clearResourceTimings = () => {};
        this.webkitClearResourceTimings = () => {};
        this.mozClearResourceTimings = () => {};
        this.msClearResourceTimings = () => {};
        this.oClearResourceTimings = () => {}
    }
}
var Vj = Tj.performance || Tj.mozPerformance || Tj.msPerformance || Tj.webkitPerformance || new Uj;
let Wj = t.ytLoggingDocDocumentNonce_;
if (!Wj) {
    const a = Lf(),
        b = [];
    for (let c = 0; c < a.length; c++) b.push("ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789-_".charAt(a[c] & 63));
    Wj = b.join("")
}
var Xj = Wj;
var Yj = {
    ob: 0,
    mb: 1,
    nb: 2,
    Kb: 3,
    pb: 4,
    Pb: 5,
    Lb: 6,
    Ob: 7,
    Mb: 8,
    Nb: 9,
    0: "DEFAULT",
    1: "CHAT",
    2: "CONVERSATIONS",
    3: "MINIPLAYER",
    4: "DIALOG",
    5: "VOZ",
    6: "MUSIC_WATCH_TABS",
    7: "SHARE",
    8: "PUSH_NOTIFICATIONS",
    9: "RICH_GRID_WATCH"
};
let Zj = 1;

function ak(a) {
    return new bk({
        trackingParams: a
    })
}

function ck(a) {
    const b = Zj++;
    return new bk({
        veType: a,
        veCounter: b,
        elementIndex: void 0,
        dataElement: void 0,
        youtubeData: void 0,
        jspbYoutubeData: void 0
    })
}
var bk = class {
    constructor(a) {
        this.h = a
    }
    getAsJson() {
        const a = {};
        void 0 !== this.h.trackingParams ? a.trackingParams = this.h.trackingParams : (a.veType = this.h.veType, void 0 !== this.h.veCounter && (a.veCounter = this.h.veCounter), void 0 !== this.h.elementIndex && (a.elementIndex = this.h.elementIndex));
        void 0 !== this.h.dataElement && (a.dataElement = this.h.dataElement.getAsJson());
        void 0 !== this.h.youtubeData && (a.youtubeData = this.h.youtubeData);
        this.h.isCounterfactual && (a.isCounterfactual = !0);
        return a
    }
    getAsJspb() {
        const a = new K;
        if (void 0 !== this.h.trackingParams) {
            var b = this.h.trackingParams;
            if (null != b)
                if ("string" === typeof b) b = b ? new ub(b, qb) : tb();
                else if (b.constructor !== ub)
                if (ob(b)) b = b.length ? new ub(new Uint8Array(b), qb) : tb();
                else throw Error();
            B(a, 1, b)
        } else void 0 !== this.h.veType && B(a, 2, this.h.veType), void 0 !== this.h.veCounter && B(a, 6, this.h.veCounter), void 0 !== this.h.elementIndex && B(a, 3, this.h.elementIndex), this.h.isCounterfactual && B(a, 5, !0);
        void 0 !== this.h.dataElement && (b = this.h.dataElement.getAsJspb(), C(a, K, 7, b));
        void 0 !==
            this.h.youtubeData && C(a, Ud, 8, this.h.jspbYoutubeData);
        return a
    }
    toString() {
        return JSON.stringify(this.getAsJson())
    }
    isClientVe() {
        return !this.h.trackingParams && !!this.h.veType
    }
};

function dk(a = 0) {
    return 0 === a ? "client-screen-nonce" : `${"client-screen-nonce"}.${a}`
}

function ek(a = 0) {
    return Q("new_csn_storage_design") ? O("client-screen-nonce-store", {})[a] : O(dk(a))
}

function fk(a, b = 0) {
    if (Q("new_csn_storage_design")) {
        let c = O("client-screen-nonce-store");
        c || (c = {}, N("client-screen-nonce-store", c));
        c[b] = a
    }
    N(dk(b), a)
}

function gk(a = 0) {
    return 0 === a ? "ROOT_VE_TYPE" : `${"ROOT_VE_TYPE"}.${a}`
}

function hk(a = 0) {
    return O(gk(a))
}

function ik(a = 0) {
    return (a = hk(a)) ? new bk({
        veType: a,
        youtubeData: void 0,
        jspbYoutubeData: void 0
    }) : null
}

function jk() {
    let a = O("csn-to-ctt-auth-info");
    a || (a = {}, N("csn-to-ctt-auth-info", a));
    return a
}

function kk() {
    return Object.values(O("client-screen-nonce-store", {})).filter(a => void 0 !== a)
}

function X(a = 0) {
    a = ek(a);
    if (!a && !O("USE_CSN_FALLBACK", !0)) return null;
    a || (a = "UNDEFINED_CSN");
    return a ? a : null
}

function lk(a) {
    for (const b of Object.values(Yj))
        if (X(b) === a) return !0;
    return !1
}

function mk(a, b, c) {
    const d = jk();
    (c = X(c)) && delete d[c];
    b && (d[a] = b)
}

function nk(a) {
    return jk()[a]
}

function ok(a, b, c = 0, d) {
    if (a !== ek(c) || b !== O(gk(c)))
        if (mk(a, d, c), fk(a, c), N(gk(c), b), b = () => {
                setTimeout(() => {
                    if (a)
                        if (Q("web_time_via_jspb")) {
                            var e = new oe;
                            B(e, 1, Xj);
                            B(e, 2, a);
                            const f = Q("jspb_sparse_encoded_pivot") ? new L([{}]) : new L;
                            ic(f, oe, 111, De, e);
                            Aj("foregroundHeartbeatScreenAssociated", f)
                        } else V("foregroundHeartbeatScreenAssociated", {
                            clientDocumentNonce: Xj,
                            clientScreenNonce: a
                        })
                }, 0)
            }, "requestAnimationFrame" in window) try {
            window.requestAnimationFrame(b)
        } catch (e) {
            b()
        } else b()
};
la(Vj.clearResourceTimings || Vj.webkitClearResourceTimings || Vj.mozClearResourceTimings || Vj.msClearResourceTimings || Vj.oClearResourceTimings || oa, Vj);

function pk(a = !0) {
    a = a ? Lf() : Kf();
    const b = [];
    for (let c = 0; c < a.length; c++) b.push("ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789-_".charAt(a[c] & 63));
    return b.join("")
};
class rf extends pf {
    constructor(a) {
        super(arguments);
        this.csn = a
    }
}
const Ff = new qf,
    qk = [];
let sk = rk,
    tk = 0;

function uk(a, b, c, d, e, f, g, h) {
    const k = sk(),
        l = new bk({
            veType: b,
            youtubeData: f,
            jspbYoutubeData: void 0
        });
    f = {
        sequenceGroup: k
    };
    e && (f.cttAuthInfo = e);
    var m = () => {
        Oj(new Pe("newScreen() parent element does not have a VE - rootVe", b))
    };
    if (Q("il_via_jspb")) {
        e = te((new ue).h(k), l.getAsJspb());
        c && c.visualElement ? (m = new se, c.clientScreenNonce && B(m, 2, c.clientScreenNonce), re(m, c.visualElement.getAsJspb()), g && B(m, 4, Ee[g]), C(e, se, 5, m)) : c && m();
        d && B(e, 3, d);
        if (Q("expectation_logging") && h && h.screenCreatedLoggingExpectations) {
            c = new Td;
            h = h.screenCreatedLoggingExpectations.expectedParentScreens || [];
            for (var n of h) n.screenVeType && (h = Rd(new Sd, n.screenVeType), jc(c, 1, Sd, h));
            C(e, Td, 7, c)
        }
        Fj(e, f, a)
    } else n = {
            csn: k,
            pageVe: l.getAsJson()
        }, Q("expectation_logging") &&
        h && h.screenCreatedLoggingExpectations && (n.screenCreatedLoggingExpectations = h.screenCreatedLoggingExpectations), c && c.visualElement ? (n.implicitGesture = {
            parentCsn: c.clientScreenNonce,
            gesturedVe: c.visualElement.getAsJson()
        }, g && (n.implicitGesture.gestureType = g)) : c && m(), d && (n.cloneCsn = d), a ? tj("screenCreated", n, a, f) : V("screenCreated", n, f);
    Cf(Ff, new rf(k));
    return k
}

function vk(a, b, c, d) {
    const e = d.filter(g => {
            g.csn !== b ? (g.csn = b, g = !0) : g = !1;
            return g
        }),
        f = {
            cttAuthInfo: nk(b) || void 0,
            sequenceGroup: b
        };
    for (const g of d) d = g.getAsJson(), (va(d) || !d.trackingParams && !d.veType) && Oj(Error("Child VE logged with no data"));
    if (Q("il_via_jspb")) {
        const g = ve((new we).h(b), c.getAsJspb());
        qa(e, h => {
            h = h.getAsJspb();
            jc(g, 3, K, h)
        });
        "UNDEFINED_CSN" === b ? Y("visualElementAttached", f, void 0, g) : Gj(g, f, a)
    } else c = {
        csn: b,
        parentVe: c.getAsJson(),
        childVes: qa(e, g => g.getAsJson())
    }, "UNDEFINED_CSN" === b ? Y("visualElementAttached", f, c) : a ? tj("visualElementAttached", c, a, f) : V("visualElementAttached", c, f)
}

function wk(a, b, c, d, e, f) {
    xk(a, b, c, e, f)
}

function xk(a, b, c, d, e) {
    const f = {
        cttAuthInfo: nk(b) || void 0,
        sequenceGroup: b
    };
    Q("il_via_jspb") ? (d = (new ze).h(b), c = c.getAsJspb(), c = C(d, K, 2, c), c = B(c, 4, 1), e && C(c, qe, 3, e), "UNDEFINED_CSN" === b ? Y("visualElementShown", f, void 0, c) : Bj(c, f, a)) : (e = {
        csn: b,
        ve: c.getAsJson(),
        eventType: 1
    }, d && (e.clientData = d), "UNDEFINED_CSN" === b ? Y("visualElementShown", f, e) : a ? tj("visualElementShown", e, a, f) : V("visualElementShown", e, f))
}

function yk(a, b, c, d = !1) {
    var e = d ? 16 : 8;
    const f = {
        cttAuthInfo: nk(b) || void 0,
        sequenceGroup: b,
        endOfSequence: d
    };
    Q("il_via_jspb") ? (e = (new ye).h(b), c = c.getAsJspb(), c = C(e, K, 2, c), B(c, 4, d ? 16 : 8), "UNDEFINED_CSN" === b ? Y("visualElementHidden", f, void 0, c) : Cj(c, f, a)) : (d = {
        csn: b,
        ve: c.getAsJson(),
        eventType: e
    }, "UNDEFINED_CSN" === b ? Y("visualElementHidden", f, d) : a ? tj("visualElementHidden", d, a, f) : V("visualElementHidden", d, f))
}

function zk(a, b, c, d) {
    const e = {
        cttAuthInfo: nk(b) || void 0,
        sequenceGroup: b
    };
    Q("il_via_jspb") ? (d = (new xe).h(b), c = c.getAsJspb(), c = C(d, K, 2, c), B(c, 4, Ee.INTERACTION_LOGGING_GESTURE_TYPE_GENERIC_CLICK), "UNDEFINED_CSN" === b ? Y("visualElementGestured", e, void 0, c) : Dj(c, e, a)) : (c = {
        csn: b,
        ve: c.getAsJson(),
        gestureType: "INTERACTION_LOGGING_GESTURE_TYPE_GENERIC_CLICK"
    }, d && (c.clientData = d), "UNDEFINED_CSN" === b ? Y("visualElementGestured", e, c) : a ? tj("visualElementGestured", c, a, e) : V("visualElementGestured", c, e))
}

function Ak(a, b, c, d) {
    const e = {
        cttAuthInfo: nk(b) || void 0,
        sequenceGroup: b
    };
    Q("il_via_jspb") ? (d = new Ae, d.h(b), c = c.getAsJspb(), C(d, K, 2, c), "UNDEFINED_CSN" === b ? Y("visualElementStateChanged", e, void 0, d) : Ej(d, e, a)) : (c = {
        csn: b,
        ve: c.getAsJson(),
        clientData: d
    }, "UNDEFINED_CSN" === b ? Y("visualElementStateChanged", e, c) : a ? tj("visualElementStateChanged", c, a, e) : V("visualElementStateChanged", c, e))
}

function rk() {
    if (Q("enable_web_96_bit_csn")) var a = pk();
    else if (Q("enable_web_96_bit_csn_no_crypto")) a = pk(!1);
    else {
        a = Math.random() + "";
        for (var b = [], c = 0, d = 0; d < a.length; d++) {
            var e = a.charCodeAt(d);
            128 > e ? b[c++] = e : (2048 > e ? b[c++] = e >> 6 | 192 : (55296 == (e & 64512) && d + 1 < a.length && 56320 == (a.charCodeAt(d + 1) & 64512) ? (e = 65536 + ((e & 1023) << 10) + (a.charCodeAt(++d) & 1023), b[c++] = e >> 18 | 240, b[c++] = e >> 12 & 63 | 128) : b[c++] = e >> 12 | 224, b[c++] = e >> 6 & 63 | 128), b[c++] = e & 63 | 128)
        }
        a = db(b, 3)
    }
    return a
}

function Y(a, b, c, d) {
    qk.push({
        T: a,
        payload: c,
        N: d,
        options: b
    });
    tk || (tk = Gf())
}

function Hf(a) {
    if (qk) {
        for (const b of qk)
            if (Q("il_via_jspb") && b.N) switch (b.N.h(a.csn), b.T) {
                case "screenCreated":
                    Fj(b.N, b.options);
                    break;
                case "visualElementAttached":
                    Gj(b.N, b.options);
                    break;
                case "visualElementShown":
                    Bj(b.N, b.options);
                    break;
                case "visualElementHidden":
                    Cj(b.N, b.options);
                    break;
                case "visualElementGestured":
                    Dj(b.N, b.options);
                    break;
                case "visualElementStateChanged":
                    Ej(b.N, b.options);
                    break;
                default:
                    Oj(new Pe("flushQueue unable to map payloadName to JSPB setter"))
            } else b.payload && (b.payload.csn =
                a.csn, V(b.T, b.payload, b.options));
        qk.length = 0
    }
    tk = 0
};

function Bk(a, b) {
    P(wk)(void 0, a, b, void 0, void 0, void 0)
};

function Z() {
    Ck.h || (Ck.h = new Ck);
    return Ck.h
}

function Dk(a, b, c) {
    const d = X(c);
    return null === a.csn || d === a.csn || c ? d : (a = new Pe("VisibilityLogger called before newScreen", {
        caller: b.tagName,
        previous_csn: a.csn,
        current_csn: d
    }), Oj(a), null)
}

function Ek(a) {
    return Math.floor(Number(a.data && a.data.loggingDirectives && a.data.loggingDirectives.visibility && a.data.loggingDirectives.visibility.types || "")) || 1
}
var Ck = class {
    constructor() {
        this.m = new Set;
        this.j = new Set;
        this.h = new Map;
        this.client = void 0;
        this.csn = null
    }
    l(a) {
        this.client = a
    }
    s() {
        this.clear();
        this.csn = X()
    }
    clear() {
        this.m.clear();
        this.j.clear();
        this.h.clear();
        this.csn = null
    }
    v(a, b, c) {
        b = this.i(a);
        var d = a.visualElement ? a.visualElement : b,
            e = this.m.has(d),
            f = this.h.get(d);
        this.m.add(d);
        this.h.set(d, !0);
        a.impressionLog && !e && a.impressionLog();
        if (b || a.visualElement)
            if (c = Dk(this, a, c)) {
                var g = !(!a.data || !a.data.loggingDirectives);
                if (Ek(a) || g) {
                    d = a.visualElement ? a.visualElement :
                        ak(b);
                    var h = a.interactionLoggingClientData;
                    b = a.interactionLoggingClientDataJspbType;
                    g || e ? Ek(a) & 4 ? f || (a = this.client, e = {
                        cttAuthInfo: nk(c) || void 0,
                        sequenceGroup: c
                    }, Q("il_via_jspb") ? (f = (new ze).h(c), d = d.getAsJspb(), f = C(f, K, 2, d), f = B(f, 4, 4), b && C(f, qe, 3, b), "UNDEFINED_CSN" === c ? Y("visualElementShown", e, void 0, f) : Bj(f, e, a)) : (b = {
                        csn: c,
                        ve: d.getAsJson(),
                        eventType: 4
                    }, h && (b.clientData = h), "UNDEFINED_CSN" === c ? Y("visualElementShown", e, b) : a ? tj("visualElementShown", b, a, e) : V("visualElementShown", b, e))) : Ek(a) & 1 && !e && xk(this.client,
                        c, d, h, b) : xk(this.client, c, d, h, b)
                }
            }
    }
    o(a, b, c) {
        var d = this.i(a),
            e = a.visualElement ? a.visualElement : d;
        b = this.j.has(e);
        const f = this.h.get(e);
        this.j.add(e);
        this.h.set(e, !1);
        if (!1 === f) return !0;
        if (!d && !a.visualElement) return !1;
        c = Dk(this, a, c);
        if (!c || !Ek(a) && a.data && a.data.loggingDirectives) return !1;
        d = a.visualElement ? a.visualElement : ak(d);
        Ek(a) & 8 ? yk(this.client, c, d) : Ek(a) & 2 && !b && (a = this.client, b = {
            cttAuthInfo: nk(c) || void 0,
            sequenceGroup: c
        }, Q("il_via_jspb") ? (e = (new ye).h(c), d = d.getAsJspb(), d = C(e, K, 2, d), d = B(d, 4,
            2), "UNDEFINED_CSN" === c ? Y("visualElementHidden", b, void 0, d) : Cj(d, b, a)) : (d = {
            csn: c,
            ve: d.getAsJson(),
            eventType: 2
        }, "UNDEFINED_CSN" === c ? Y("visualElementHidden", b, d) : a ? tj("visualElementHidden", d, a, b) : V("visualElementHidden", d, b)));
        return !0
    }
    i(a) {
        let b, c, d;
        return Q("il_use_view_model_logging_context") && (null == (b = a.data) ? 0 : null == (c = b.context) ? 0 : null == (d = c.loggingContext) ? 0 : d.loggingDirectives) ? a.data.context.loggingContext.loggingDirectives.trackingParams || "" : a.data && a.data.loggingDirectives ? a.data.loggingDirectives.trackingParams ||
            "" : a.veContainer && a.veContainer.trackingParams ? a.veContainer.trackingParams : a.data && a.data.trackingParams || ""
    }
};

function Fk() {
    Gk.h || (Gk.h = new Gk);
    return Gk.h
}

function Hk() {
    Fk();
    P(Z().s).bind(Z())()
}

function Ik(a, b) {
    P(Z().v).bind(Z())(b, void 0, 8)
}

function Jk(a, b) {
    return P(Z().i).bind(Z())(b)
}
var Gk = class {
    l(a) {
        P(Z().l).bind(Z())(a)
    }
    clear() {
        P(Z().clear).bind(Z())()
    }
};

function Kk(a, b, c, d = {}) {
    a.j.add(d.layer || 0);
    a.s = () => {
        Lk(a, b, c, d);
        const e = ik(d.layer);
        if (e) {
            for (const f of a.F) a.h(f[0], f[1] || e, d.layer);
            for (const f of a.G) Mk(a, f[0], f[1])
        }
    };
    c || X(d.layer) || a.s();
    if (d.Z)
        for (const e of d.Z) a.ga(e, d.layer);
    else W(Error("Delayed screen needs a data promise."))
}

function Lk(a, b, c, d = {}) {
    var e = void 0;
    d.layer || (d.layer = 0);
    e = void 0 !== d.na ? d.na : d.layer;
    const f = X(e);
    e = ik(e);
    var g = c || e;
    let h;
    g && (void 0 !== d.parentCsn ? h = {
        clientScreenNonce: d.parentCsn,
        visualElement: g
    } : f && "UNDEFINED_CSN" !== f && (h = {
        clientScreenNonce: f,
        visualElement: g
    }));
    let k;
    g = O("EVENT_ID");
    "UNDEFINED_CSN" === f && g && (k = {
        servletData: {
            serializedServletEventId: g
        }
    });
    Q("combine_ve_grafts") && f && Nk(a, f);
    let l;
    try {
        l = uk(a.client, b, h, d.Y, d.cttAuthInfo, k, d.Qa, d.loggingExpectations)
    } catch (u) {
        Sj(u, {
            bb: b,
            rootVe: e,
            Ya: c,
            La: f,
            Xa: h,
            Y: d.Y
        });
        W(u);
        return
    }
    ok(l, b, d.layer, d.cttAuthInfo);
    f && "UNDEFINED_CSN" !== f && e && !lk(f) && yk(a.client, f, e, !0);
    a.i[a.i.length - 1] && !a.i[a.i.length - 1].csn && (a.i[a.i.length - 1].csn = l || "");
    Hk();
    const m = ik(d.layer);
    f && "UNDEFINED_CSN" !== f && m && (Q("web_mark_root_visible") || Q("music_web_mark_root_visible")) && Bk(l, m);
    a.j.delete(d.layer || 0);
    a.s = void 0;
    let n;
    null == (n = a.ha.get(d.layer)) || n.forEach((u, p) => {
        u ? a.h(p, u, d.layer) : m && a.h(p, m, d.layer)
    });
    Ok(a)
}

function Nk(a, b) {
    if (void 0 === b) {
        const c = kk();
        for (let d = 0; d < c.length; d++) void 0 !== c[d] && Nk(a, c[d])
    } else a.o.forEach((c, d) => {
        (d = a.L.get(d)) && vk(a.client, b, d, c)
    }), a.o.clear(), a.L.clear(), a.X = void 0
}

function Mk(a, b, c, d = 0) {
    const e = X(d);
    b = b || ik(d);
    e && b && Ak(a.client, e, b, c)
}

function Ok(a) {
    for (var b = 0; b < a.v.length; b++) {
        var c = a.v[b];
        try {
            c()
        } catch (d) {
            W(d)
        }
    }
    a.v.length = 0;
    for (b = 0; b < a.W.length; b++) {
        c = a.W[b];
        try {
            c()
        } catch (d) {
            W(d)
        }
    }
}
var Pk = class {
    constructor() {
        this.F = [];
        this.G = [];
        this.i = [];
        this.v = [];
        this.W = [];
        this.o = new Map;
        this.L = new Map;
        this.j = new Set;
        this.ha = new Map
    }
    l(a) {
        this.client = a
    }
    ra(a, b, c = {}) {
        P(() => {
            [28631].includes(a) || (Oj(new Pe("createClientScreen() called with a non-page VE", a)), a = 83769);
            c.isHistoryNavigation || this.i.push({
                rootVe: a,
                key: c.key || ""
            });
            this.F = [];
            this.G = [];
            c.Z ? Kk(this, a, b, c) : Lk(this, a, b, c)
        })()
    }
    ga(a, b = 0) {
        P(() => {
            a.then(c => {
                this.j.has(b) && this.s && this.s();
                const d = X(b),
                    e = ik(b);
                if (d && e) {
                    var f;
                    (null == c ? 0 : null == (f = c.response) ? 0 : f.trackingParams) && vk(this.client, d, e, [ak(c.response.trackingParams)]);
                    var g;
                    (null == c ? 0 : null == (g = c.playerResponse) ? 0 : g.trackingParams) && vk(this.client, d, e, [ak(c.playerResponse.trackingParams)])
                }
            })
        })()
    }
    sa(a, b, c) {
        return P(() => {
            const d = ak(a);
            this.h(d, b, c);
            return d
        })()
    }
    h(a, b, c = 0) {
        P(() => {
            if (this.j.has(c)) return this.F.push([a,
                b
            ]), !0;
            const d = X(c),
                e = b || ik(c);
            if (d && e) {
                if (Q("combine_ve_grafts")) {
                    const f = this.o.get(e.toString());
                    f ? f.push(a) : (this.L.set(e.toString(), e), this.o.set(e.toString(), [a]));
                    this.X || (this.X = tf(() => {
                        Nk(this, d)
                    }, 1200))
                } else vk(this.client, d, e, [a]);
                return !0
            }
            return !1
        })()
    }
    V(a, b, c = 0) {
        (c = X(c)) && zk(this.client, c, a, b)
    }
    m(a, b, c = 0) {
        if (!a) return !1;
        c = X(c);
        if (!c) return !1;
        zk(this.client, c, ak(a), b);
        return !0
    }
    U(a) {
        const b = a.getScreenLayer && a.getScreenLayer();
        a.visualElement ? this.V(a.visualElement, void 0, b) : (a = Jk(Fk(), a), this.m(a, void 0, b))
    }
    clickCommand(a, b, c = 0) {
        return this.m(a.clickTrackingParams, b, c)
    }
    visualElementStateChanged(a, b, c = 0) {
        0 === c && this.j.has(c) ? this.G.push([a, b]) : Mk(this, a, b, c)
    }
};

function Qk() {
    if (Q("use_core_sm")) return Pk.h || (Pk.h = new Pk), Pk.h;
    Rk.h || (Rk.h = new Rk);
    return Rk.h
}

function Sk(a, b, c, d = {}) {
    a.j.add(d.layer || 0);
    a.s = () => {
        Tk(a, b, c, d);
        const e = ik(d.layer);
        if (e) {
            for (const f of a.F) a.h(f[0], f[1] || e, d.layer);
            for (const f of a.G) Uk(a, f[0], f[1])
        }
    };
    c || X(d.layer) || a.s();
    if (d.Z)
        for (const e of d.Z) a.ga(e, d.layer);
    else W(Error("Delayed screen needs a data promise."))
}

function Tk(a, b, c, d = {}) {
    var e = void 0;
    d.layer || (d.layer = 0);
    e = void 0 !== d.na ? d.na : d.layer;
    const f = X(e);
    e = ik(e);
    var g = c || e;
    let h;
    g && (void 0 !== d.parentCsn ? h = {
        clientScreenNonce: d.parentCsn,
        visualElement: g
    } : f && "UNDEFINED_CSN" !== f && (h = {
        clientScreenNonce: f,
        visualElement: g
    }));
    let k;
    g = O("EVENT_ID");
    "UNDEFINED_CSN" === f && g && (k = {
        servletData: {
            serializedServletEventId: g
        }
    });
    Q("combine_ve_grafts") && f && Vk(a, f);
    let l;
    try {
        l = uk(a.client, b, h, d.Y, d.cttAuthInfo, k, d.Qa, d.loggingExpectations)
    } catch (u) {
        Sj(u, {
            bb: b,
            rootVe: e,
            Ya: c,
            La: f,
            Xa: h,
            Y: d.Y
        });
        W(u);
        return
    }
    ok(l, b, d.layer, d.cttAuthInfo);
    f && "UNDEFINED_CSN" !== f && e && !lk(f) && yk(a.client, f, e, !0);
    a.i[a.i.length - 1] && !a.i[a.i.length - 1].csn && (a.i[a.i.length - 1].csn = l || "");
    Hk();
    const m = ik(d.layer);
    f && "UNDEFINED_CSN" !== f && m && (Q("web_mark_root_visible") || Q("music_web_mark_root_visible")) && Bk(l, m);
    a.j.delete(d.layer || 0);
    a.s = void 0;
    let n;
    null == (n = a.ha.get(d.layer)) || n.forEach((u, p) => {
        u ? a.h(p, u, d.layer) : m && a.h(p, m, d.layer)
    });
    Wk(a)
}

function Vk(a, b) {
    if (void 0 === b) {
        const c = kk();
        for (let d = 0; d < c.length; d++) void 0 !== c[d] && Vk(a, c[d])
    } else a.o.forEach((c, d) => {
        (d = a.L.get(d)) && vk(a.client, b, d, c)
    }), a.o.clear(), a.L.clear(), a.X = void 0
}

function Uk(a, b, c, d = 0) {
    const e = X(d);
    b = b || ik(d);
    e && b && Ak(a.client, e, b, c)
}

function Wk(a) {
    for (var b = 0; b < a.v.length; b++) {
        var c = a.v[b];
        try {
            c()
        } catch (d) {
            W(d)
        }
    }
    a.v.length = 0;
    for (b = 0; b < a.W.length; b++) {
        c = a.W[b];
        try {
            c()
        } catch (d) {
            W(d)
        }
    }
}
var Rk = class {
    constructor() {
        this.F = [];
        this.G = [];
        this.i = [];
        this.v = [];
        this.W = [];
        this.o = new Map;
        this.L = new Map;
        this.j = new Set;
        this.ha = new Map
    }
    l(a) {
        this.client = a
    }
    ra(a, b, c = {}) {
        P(() => {
            [28631].includes(a) || (Oj(new Pe("createClientScreen() called with a non-page VE", a)), a = 83769);
            c.isHistoryNavigation || this.i.push({
                rootVe: a,
                key: c.key || ""
            });
            this.F = [];
            this.G = [];
            c.Z ? Sk(this, a, b, c) : Tk(this, a, b, c)
        })()
    }
    ga(a, b = 0) {
        P(() => {
            a.then(c => {
                this.j.has(b) && this.s && this.s();
                const d = X(b),
                    e = ik(b);
                if (d && e) {
                    var f;
                    (null == c ? 0 : null == (f = c.response) ? 0 : f.trackingParams) && vk(this.client, d, e, [ak(c.response.trackingParams)]);
                    var g;
                    (null == c ? 0 : null == (g = c.playerResponse) ? 0 : g.trackingParams) && vk(this.client, d, e, [ak(c.playerResponse.trackingParams)])
                }
            })
        })()
    }
    sa(a, b, c) {
        return P(() => {
            const d = ak(a);
            this.h(d, b, c);
            return d
        })()
    }
    h(a, b, c = 0) {
        P(() => {
            if (this.j.has(c)) return this.F.push([a,
                b
            ]), !0;
            const d = X(c),
                e = b || ik(c);
            if (d && e) {
                if (Q("combine_ve_grafts")) {
                    const f = this.o.get(e.toString());
                    f ? f.push(a) : (this.L.set(e.toString(), e), this.o.set(e.toString(), [a]));
                    this.X || (this.X = tf(() => {
                        Vk(this, d)
                    }, 1200))
                } else vk(this.client, d, e, [a]);
                return !0
            }
            return !1
        })()
    }
    V(a, b, c = 0) {
        (c = X(c)) && zk(this.client, c, a, b)
    }
    m(a, b, c = 0) {
        if (!a) return !1;
        c = X(c);
        if (!c) return !1;
        zk(this.client, c, ak(a), b);
        return !0
    }
    U(a) {
        const b = a.getScreenLayer && a.getScreenLayer();
        a.visualElement ? this.V(a.visualElement, void 0, b) : (a = Jk(Fk(), a), this.m(a, void 0, b))
    }
    clickCommand(a, b, c = 0) {
        return this.m(a.clickTrackingParams, b, c)
    }
    visualElementStateChanged(a, b, c = 0) {
        0 === c && this.j.has(c) ? this.G.push([a, b]) : Uk(this, a, b, c)
    }
};
var Xk = class extends E {
    constructor(a) {
        super(a)
    }
};
var Yk = class extends E {
    constructor(a) {
        super(a, 0, "yt.sw.adr")
    }
};

function Zk(a) {
    return r(function*() {
        var b = yield t.fetch(a.i);
        if (200 !== b.status) return Promise.reject("Server error when retrieving AmbientData");
        b = yield b.text();
        if (!b.startsWith(")]}'\n")) return Promise.reject("Incorrect JSPB formatting");
        a: {
            b = JSON.parse(b.substring(5));
            for (let c = 0; c < b.length; c++)
                if ("yt.sw.adr" === b[c][0]) {
                    b = new Yk(b[c]);
                    break a
                }
            b = null
        }
        return b ? b : Promise.reject("AmbientData missing from response")
    })
}

function $k(a = !1) {
    const b = al.h;
    return r(function*() {
        if (a || !b.h) b.h = Zk(b).then(b.j).catch(c => {
            delete b.h;
            W(c)
        });
        return b.h
    })
}
var al = class {
    constructor() {
        this.i = bl("/sw.js_data")
    }
    j(a) {
        const b = dc(a, Xk, 2);
        if (b) {
            var c = D(b, 5);
            c && (t.__SAPISID = c);
            null != A(b, 10) ? N("EOM_VISITOR_DATA", D(b, 10)) : null != A(b, 7) && N("VISITOR_DATA", D(b, 7));
            a: if (c = A(b, 4), null != c) {
                switch (typeof c) {
                    case "string":
                        c = +c;
                        break a;
                    case "number":
                        break a
                }
                c = void 0
            }
            null != c && N("SESSION_INDEX", String(kc(A(b, 4), 0)));
            null != A(b, 8) && N("DELEGATED_SESSION_ID", D(b, 8));
            null != A(b, 11) && N("INNERTUBE_CONTEXT_SERIALIZED_DELEGATION_CONTEXT", D(b, 11))
        }
        return a
    }
};

function cl(a, b) {
    b.encryptedTokenJarContents && (a.h[b.encryptedTokenJarContents] = b, "string" === typeof b.expirationSeconds && setTimeout(() => {
        delete a.h[b.encryptedTokenJarContents]
    }, 1E3 * Number(b.expirationSeconds)))
}
var dl = class {
    constructor() {
        this.h = {}
    }
    handleResponse(a, b) {
        if (!b) throw Error("request needs to be passed into ConsistencyService");
        let c, d;
        b = (null == (c = b.M.context) ? void 0 : null == (d = c.request) ? void 0 : d.consistencyTokenJars) || [];
        let e;
        if (a = null == (e = a.responseContext) ? void 0 : e.consistencyTokenJar) {
            for (const f of b) delete this.h[f.encryptedTokenJarContents];
            cl(this, a)
        }
    }
};

function el() {
    var a = O("INNERTUBE_CONTEXT");
    if (!a) return W(Error("Error: No InnerTubeContext shell provided in ytconfig.")), {};
    a = wa(a);
    Q("web_no_tracking_params_in_shell_killswitch") || delete a.clickTracking;
    a.client || (a.client = {});
    var b = a.client;
    b.utcOffsetMinutes = -Math.floor((new Date).getTimezoneOffset());
    var c = lf();
    c ? b.experimentsToken = c : delete b.experimentsToken;
    dl.h || (dl.h = new dl);
    b = dl.h.h;
    c = [];
    let d = 0;
    for (var e in b) c[d++] = b[e];
    a.request = Object.assign({}, a.request, {
        consistencyTokenJars: c
    });
    a.user =
        Object.assign({}, a.user);
    if (e = O("INNERTUBE_CONTEXT_SERIALIZED_DELEGATION_CONTEXT")) a.user.serializedDelegationContext = e;
    return a
};

function fl(a) {
    var b = a;
    if (a = O("INNERTUBE_HOST_OVERRIDE")) {
        a = String(a);
        var c = String,
            d = b.match(Ma);
        b = d[5];
        var e = d[6];
        d = d[7];
        var f = "";
        b && (f += b);
        e && (f += "?" + e);
        d && (f += "#" + d);
        b = a + c(f)
    }
    return b
};
var gl = class {};
const hl = {
    GET_DATASYNC_IDS: function(a) {
        return () => new a
    }(class extends gl {})
};
const il = ["type.googleapis.com/youtube.api.pfiinnertube.YoutubeApiInnertube.BrowseResponse"];

function jl(a) {
    var b = {
            Wb: {}
        },
        c = lg();
    if (void 0 !== ui.h) {
        const d = ui.h;
        a = [b !== d.m, a !== d.l, c !== d.j, !1, !1, !1, void 0 !== d.i];
        if (a.some(e => e)) throw new Pe("InnerTubeTransportService is already initialized", a);
    } else ui.h = new ui(b, a, c)
}

function kl(a, b) {
    return r(function*() {
        var c, d = {
            sessionIndex: null == a ? void 0 : null == (c = a.va) ? void 0 : c.sessionIndex
        };
        c = yield jd(ng(0, d));
        return Promise.resolve(Object.assign({}, ll(b), c))
    })
}

function ml(a, b, c) {
    return r(function*() {
        var d;
        if (null == b ? 0 : null == (d = b.M) ? 0 : d.context) {
            const m = b.M.context;
            if ("hybrid" === kf()) yield [].reduce((n, u) => n.then(() => u.fc(m)), Promise.resolve());
            else
                for (const n of []) n.hc(m)
        }
        var e;
        if (null == (e = a.i) ? 0 : e.nc(b.input, b.M)) return yield a.i.Zb(b.input, b.M);
        var f;
        if ((d = null == (f = b.config) ? void 0 : f.kc) && a.h.has(d) && Q("web_memoize_inflight_requests")) var g = a.h.get(d);
        else {
            f = JSON.stringify(b.M);
            let m;
            e = null != (m = null == (g = b.aa) ? void 0 : g.headers) ? m : {};
            b.aa = Object.assign({}, b.aa, {
                headers: Object.assign({}, e, c)
            });
            g = Object.assign({}, b.aa);
            "POST" === b.aa.method && (g = Object.assign({}, g, {
                body: f
            }));
            g = a.l.fetch(b.input, g, b.config);
            d && a.h.set(d, g)
        }
        g = yield g;
        var h;
        let k;
        if (g && "error" in g && (null == (h = g) ? 0 : null == (k = h.error) ? 0 : k.details)) {
            h = g.error.details;
            for (const m of h)(h = m["@type"]) && -1 < il.indexOf(h) && (delete m["@type"], g = m)
        }
        d && a.h.has(d) && a.h.delete(d);
        let l;
        !g && (null == (l = a.i) ? 0 : l.Vb(b.input, b.M)) && (g = yield a.i.Yb(b.input, b.M));
        return g || void 0
    })
}

function nl(a, b, c) {
    var d = {
        va: {
            identity: og
        }
    };
    b.context || (b.context = el());
    return new F(e => r(function*() {
        var f = fl(c);
        f = Uf(f) ? "same-origin" : "cors";
        if (a.j.fb) {
            var g, h = null == d ? void 0 : null == (g = d.va) ? void 0 : g.sessionIndex;
            g = ng(0, {
                sessionIndex: h
            });
            f = Object.assign({}, ll(f), g)
        } else f = yield kl(d, f);
        g = fl(c);
        h = {};
        O("INNERTUBE_OMIT_API_KEY_WHEN_AUTH_HEADER_IS_PRESENT") && (null == f ? 0 : f.Authorization) || (h.key = O("INNERTUBE_API_KEY"));
        Q("json_condensed_response") && (h.prettyPrint = "false");
        g = Tf(g, h || {}, !1);
        h = {
            method: "POST",
            mode: Uf(g) ? "same-origin" : "cors",
            credentials: Uf(g) ? "same-origin" : "include"
        };
        var k = {};
        const l = {};
        for (const m of Object.keys(k)) k[m] && (l[m] = k[m]);
        0 < Object.keys(l).length && (h.headers = l);
        e(ml(a, {
            input: g,
            aa: h,
            M: b,
            config: d
        }, f))
    }))
}

function ll(a) {
    const b = {
        "Content-Type": "application/json"
    };
    O("EOM_VISITOR_DATA") ? b["X-Goog-EOM-Visitor-Id"] = O("EOM_VISITOR_DATA") : O("VISITOR_DATA") && (b["X-Goog-Visitor-Id"] = O("VISITOR_DATA"));
    b["X-Youtube-Bootstrap-Logged-In"] = O("LOGGED_IN", !1);
    "cors" !== a && ((a = O("INNERTUBE_CONTEXT_CLIENT_NAME")) && (b["X-Youtube-Client-Name"] = a), (a = O("INNERTUBE_CONTEXT_CLIENT_VERSION")) && (b["X-Youtube-Client-Version"] = a), (a = O("CHROME_CONNECTED_HEADER")) && (b["X-Youtube-Chrome-Connected"] = a), (a = O("DOMAIN_ADMIN_STATE")) &&
        (b["X-Youtube-Domain-Admin-State"] = a));
    return b
}
var ui = class {
    constructor(a, b, c) {
        this.m = a;
        this.l = b;
        this.j = c;
        this.i = void 0;
        this.h = new Map;
        a.pa || (a.pa = {});
        a.pa = Object.assign({}, hl, a.pa)
    }
};
var ti = new qi;
let ol;

function pl() {
    if (!ol) {
        const a = zi();
        jl({
            fetch: (b, c) => jd(fetch(new Request(b, c)))
        });
        si(a);
        ol = a.resolve(ti)
    }
    return ol
};

function ql(a) {
    return r(function*() {
        yield rl();
        Oj(a)
    })
}

function sl(a) {
    return r(function*() {
        yield rl();
        W(a)
    })
}

function tl(a) {
    r(function*() {
        var b = yield sh();
        b ? yield Yh(a, b): (yield $k(), b = {
            timestamp: a.timestamp
        }, b = a.appShellAssetLoadReport ? {
            T: "appShellAssetLoadReport",
            payload: a.appShellAssetLoadReport,
            options: b
        } : a.clientError ? {
            T: "clientError",
            payload: a.clientError,
            options: b
        } : void 0, b && V(b.T, b.payload))
    })
}

function rl() {
    return r(function*() {
        try {
            yield $k()
        } catch (a) {}
    })
};
const ul = {
        granted: "GRANTED",
        denied: "DENIED",
        unknown: "UNKNOWN"
    },
    vl = RegExp("^(?:[a-z]+:)?//", "i");

function wl(a) {
    var b = a.data;
    a = b.type;
    b = b.data;
    "notifications_register" === a ? (M("IDToken", b), xl()) : "notifications_check_registration" === a && yl(b)
}

function zl() {
    return self.clients.matchAll({
        type: "window",
        includeUncontrolled: !0
    }).then(a => {
        if (a)
            for (const b of a) b.postMessage({
                type: "update_unseen_notifications_count_signal"
            })
    })
}

function Al(a) {
    const b = [];
    a.forEach(c => {
        b.push({
            key: c.key,
            value: c.value
        })
    });
    return b
}

function Bl(a) {
    return r(function*() {
        const b = Al(a.payload.chrome.extraUrlParams),
            c = {
                recipientId: a.recipientId,
                endpoint: a.payload.chrome.endpoint,
                extraUrlParams: b
            },
            d = Xe(Ke);
        return Cl().then(e => nl(e, c, d).then(f => {
            f.json().then(g => g && g.endpointUrl ? Dl(a, g.endpointUrl) : Promise.resolve()).catch(g => {
                sl(g);
                Promise.reject(g)
            })
        }))
    })
}

function El(a, b) {
    var c = X(8);
    if (null == c || !b) return a;
    a = vl.test(a) ? new URL(a) : new URL(a, self.registration.scope);
    a.searchParams.set("parentCsn", c);
    a.searchParams.set("parentTrackingParams", b);
    return a.toString()
}

function Dl(a, b) {
    a.deviceId && M("DeviceId", a.deviceId);
    a.timestampSec && M("TimestampLowerBound", a.timestampSec);
    const c = a.payload.chrome,
        d = Qk();
    d.ra(28631, void 0, {
        layer: 8
    });
    var e;
    const f = null == (e = c.postedEndpoint) ? void 0 : e.clickTrackingParams;
    e = c.title;
    const g = {
        body: c.body,
        icon: c.iconUrl,
        data: {
            nav: El(b, f),
            id: c.notificationId,
            attributionTag: c.attributionTag,
            clickEndpoint: c.clickEndpoint,
            postedEndpoint: c.postedEndpoint,
            clickTrackingParams: f,
            isDismissed: !0
        },
        tag: c.notificationTag || c.title + c.body + c.iconUrl,
        requireInteraction: !0
    };
    return self.registration.showNotification(e, g).then(() => {
        var h;
        (null == (h = g.data) ? 0 : h.postedEndpoint) && Fl(g.data.postedEndpoint);
        let k;
        if (null == (k = g.data) ? 0 : k.clickTrackingParams) h = {
            screenLayer: 8,
            visualElement: d.sa(g.data.clickTrackingParams, void 0, 8)
        }, Ik(Fk(), h);
        Gl(a.displayCap)
    }).catch(() => {})
}

function Fl(a) {
    if (!nf(a, Je)) return Promise.reject();
    const b = {
            serializedRecordNotificationInteractionsRequest: nf(a, Je).serializedInteractionsRequest
        },
        c = Xe(Le);
    return Cl().then(d => nl(d, b, c)).then(d => d)
}

function Gl(a) {
    -1 !== a && self.registration.getNotifications().then(b => {
        for (let e = 0; e < b.length - a; e++) {
            b[e].data.isDismissed = !1;
            b[e].close();
            let f;
            if (null == (f = b[e].data) ? 0 : f.clickTrackingParams) {
                let g;
                var c = ak(null == (g = b[e].data) ? void 0 : g.clickTrackingParams),
                    d = {
                        screenLayer: 8,
                        visualElement: c
                    };
                const h = ck(82046),
                    k = Qk();
                k.h(h, c, 8);
                c = {
                    screenLayer: 8,
                    visualElement: h
                };
                Ik(Fk(), c);
                k.U(c);
                Fk();
                P(Z().o).bind(Z())(d, void 0, 8)
            }
        }
    })
}

function yl(a) {
    const b = [Hl(a), Te("RegistrationTimestamp").then(Il), Jl(), Kl(), Ll()];
    Promise.all(b).catch(() => {
        M("IDToken", a);
        xl();
        return Promise.resolve()
    })
}

function Il(a) {
    return 9E7 >= Date.now() - (a || 0) ? Promise.resolve() : Promise.reject()
}

function Hl(a) {
    return Te("IDToken").then(b => a === b ? Promise.resolve() : Promise.reject())
}

function Jl() {
    return Te("Permission").then(a => Notification.permission === a ? Promise.resolve() : Promise.reject())
}

function Kl() {
    return Te("Endpoint").then(a => Ml().then(b => a === b ? Promise.resolve() : Promise.reject()))
}

function Ll() {
    return Te("application_server_key").then(a => Nl().then(b => a === b ? Promise.resolve() : Promise.reject()))
}

function Ol() {
    var a = Notification.permission;
    if (ul[a]) return ul[a]
}

function xl() {
    M("RegistrationTimestamp", 0);
    Promise.all([Ml(), Pl(), Ql(), Nl()]).then(([a, b, c, d]) => {
        b = b ? Ne(b) : null;
        c = c ? Ne(c) : null;
        d = d ? db(new Uint8Array(d), 4) : null;
        Rl(a, b, c, d)
    }).catch(() => {
        Rl()
    })
}

function Rl(a = null, b = null, c = null, d = null) {
    Se().then(e => {
        e && (M("Endpoint", a), M("P256dhKey", b), M("AuthKey", c), M("application_server_key", d), M("Permission", Notification.permission), Promise.all([Te("DeviceId"), Te("NotificationsDisabled")]).then(([f, g]) => {
            if (null != f) var h = f;
            else {
                f = [];
                var k;
                h = h || Nd.length;
                for (k = 0; 256 > k; k++) f[k] = Nd[0 | Math.random() * h];
                h = f.join("")
            }
            Sl(h, null != a ? a : void 0, null != b ? b : void 0, null != c ? c : void 0, null != d ? d : void 0, null != g ? g : void 0)
        }))
    })
}

function Sl(a, b, c, d, e, f) {
    r(function*() {
        const g = {
                notificationRegistration: {
                    chromeRegistration: {
                        deviceId: a,
                        pushParams: {
                            applicationServerKey: e,
                            authKey: d,
                            p256dhKey: c,
                            browserEndpoint: b
                        },
                        notificationsDisabledInApp: f,
                        permission: Ol()
                    }
                }
            },
            h = Xe(Me);
        return Cl().then(k => nl(k, g, h).then(() => {
            M("DeviceId", a);
            M("RegistrationTimestamp", Date.now());
            M("TimestampLowerBound", Date.now())
        }, l => {
            ql(l)
        }))
    })
}

function Ml() {
    return self.registration.pushManager.getSubscription().then(a => a ? Promise.resolve(a.endpoint) : Promise.resolve(null))
}

function Pl() {
    return self.registration.pushManager.getSubscription().then(a => a && a.getKey ? Promise.resolve(a.getKey("p256dh")) : Promise.resolve(null))
}

function Ql() {
    return self.registration.pushManager.getSubscription().then(a => a && a.getKey ? Promise.resolve(a.getKey("auth")) : Promise.resolve(null))
}

function Nl() {
    return self.registration.pushManager.getSubscription().then(a => a ? Promise.resolve(a.options.applicationServerKey) : Promise.resolve(null))
}

function Cl() {
    return r(function*() {
        try {
            return yield $k(!0), pl()
        } catch (a) {
            return yield ql(a), Promise.reject(a)
        }
    })
};
let Tl = self.location.origin + "/";

function bl(a) {
    let b = "undefined" !== typeof ServiceWorkerGlobalScope && self instanceof ServiceWorkerGlobalScope ? Gd.registration.scope : Tl;
    b.endsWith("/") && (b = b.slice(0, -1));
    return b + a
};
let Ul = void 0;

function Vl(a) {
    return r(function*() {
        Ul || (Ul = yield a.open("yt-appshell-assets"));
        return Ul
    })
}

function Wl(a, b) {
    return r(function*() {
        const c = yield Vl(a), d = b.map(e => Xl(c, e));
        return Promise.all(d)
    })
}

function Yl(a, b) {
    return r(function*() {
        let c;
        try {
            c = yield a.match(b, {
                cacheName: "yt-appshell-assets"
            })
        } catch (d) {}
        return c
    })
}

function Zl(a, b) {
    return r(function*() {
        const c = yield Vl(a), d = (yield c.keys()).filter(e => !b.includes(e.url)).map(e => c.delete(e));
        return Promise.all(d)
    })
}

function $l(a, b, c) {
    return r(function*() {
        yield(yield Vl(a)).put(b, c)
    })
}

function am(a, b) {
    r(function*() {
        yield(yield Vl(a)).delete(b)
    })
}

function Xl(a, b) {
    return r(function*() {
        return (yield a.match(b)) ? Promise.resolve() : a.add(b)
    })
};
var bm = Bh("yt-serviceworker-metadata", {
    S: {
        auth: {
            P: 1
        },
        ["resource-manifest-assets"]: {
            P: 2
        }
    },
    fa: !0,
    upgrade(a, b) {
        b(1) && Sg(a, "resource-manifest-assets");
        b(2) && Sg(a, "auth")
    },
    version: 2
});
let cm = null;

function dm(a) {
    return ih(bm(), a)
}

function em() {
    return r(function*() {
        const a = yield sh();
        if (a) return fm.h || (fm.h = new fm(a)), fm.h
    })
}

function gm(a, b) {
    return r(function*() {
        yield U(yield dm(a.token), ["resource-manifest-assets"], "readwrite", c => {
            const d = c.objectStore("resource-manifest-assets"),
                e = Date.now();
            return T(d.h.put(b, e)).then(() => {
                cm = e;
                let f = !0;
                return Xg(d, {
                    query: IDBKeyRange.bound(0, Date.now()),
                    direction: "prev"
                }, g => f ? (f = !1, g.advance(5)) : d.delete(g.getKey()).then(() => g.continue()))
            })
        })
    })
}

function hm(a, b) {
    return r(function*() {
        let c = !1,
            d = 0;
        yield U(yield dm(a.token), ["resource-manifest-assets"], "readonly", e => Xg(e.objectStore("resource-manifest-assets"), {
            query: IDBKeyRange.bound(0, Date.now()),
            direction: "prev"
        }, f => {
            if (f.O().includes(b)) c = !0;
            else return d += 1, f.continue()
        }));
        return c ? d : -1
    })
}

function im(a) {
    return r(function*() {
        cm || (yield U(yield dm(a.token), ["resource-manifest-assets"], "readonly", b => Xg(b.objectStore("resource-manifest-assets"), {
            query: IDBKeyRange.bound(0, Date.now()),
            direction: "prev"
        }, c => {
            cm = c.getKey()
        })));
        return cm
    })
}
var fm = class {
    constructor(a) {
        this.token = a
    }
};

function jm() {
    return r(function*() {
        const a = yield sh();
        if (a) return km.h || (km.h = new km(a)), km.h
    })
}

function lm(a, b) {
    return r(function*() {
        yield Ug(yield dm(a.token), "auth", b, "shell_identifier_key")
    })
}

function mm(a) {
    return r(function*() {
        return (yield(yield dm(a.token)).get("auth", "shell_identifier_key")) || ""
    })
}

function nm(a) {
    return r(function*() {
        yield(yield dm(a.token)).clear("auth")
    })
}
var km = class {
    constructor(a) {
        this.token = a
    }
};

function om() {
    r(function*() {
        const a = yield jm();
        a && (yield nm(a))
    })
};
var hc = class extends E {
        constructor(a) {
            super(a)
        }
    },
    pm = [hc, 1, Lc];
var qm = class extends E {
    constructor(a) {
        super(a)
    }
};
qm.B = [1];
var rm = function(a) {
    return (b, c) => {
        a: {
            if (Hb.length) {
                const f = Hb.pop();
                Db(f, c);
                f.h.init(b, void 0, void 0, c);
                b = f
            } else b = new Gb(b, c);
            try {
                var d = zc(a);
                var e = Ac(new d.ja, b, d);
                break a
            } finally {
                d = b, d.h.clear(), d.l = -1, d.i = -1, 100 > Hb.length && Hb.push(d)
            }
            e = void 0
        }
        return e
    }
}([qm,
    1, Mc, pm
]);

function sm(a) {
    return r(function*() {
        const b = a.headers.get("X-Resource-Manifest");
        return b ? Promise.resolve(tm(b)) : Promise.reject(Error("No resource manifest header"))
    })
}

function tm(a) {
    return gc(rm(decodeURIComponent(a))).reduce((b, c) => {
        (c = D(c, 1)) && b.push(c);
        return b
    }, [])
};

function um(a) {
    return r(function*() {
        const b = yield $k();
        if (b && null != A(b, 3)) {
            var c = yield jm();
            c && (c = yield mm(c), A(b, 3) !== c && (am(a.caches, a.h), om()))
        }
    })
}

function vm(a) {
    return r(function*() {
        let b, c;
        try {
            c = yield wm(a.i), b = yield sm(c), yield Wl(a.caches, b)
        } catch (d) {
            return Promise.reject(d)
        }
        try {
            yield xm(), yield $l(a.caches, a.h, c)
        } catch (d) {
            return Promise.reject(d)
        }
        if (b) try {
            yield ym(a, b, a.h)
        } catch (d) {}
        return Promise.resolve()
    })
}

function zm(a) {
    return r(function*() {
        yield um(a);
        return vm(a)
    })
}

function wm(a) {
    return r(function*() {
        try {
            return yield t.fetch(new Request(a))
        } catch (b) {
            return Promise.reject(b)
        }
    })
}

function xm() {
    return r(function*() {
        var a = yield $k();
        let b;
        a && null != A(a, 3) && (b = D(a, 3));
        return b ? (a = yield jm()) ? Promise.resolve(lm(a, b)) : Promise.reject(Error("Could not get AuthMonitor instance")) : Promise.reject(Error("Could not get datasync ID"))
    })
}

function ym(a, b, c) {
    return r(function*() {
        const d = yield em();
        if (d) try {
            yield gm(d, b)
        } catch (e) {
            yield ql(e)
        }
        b.push(c);
        try {
            yield Zl(a.caches, b)
        } catch (e) {
            yield ql(e)
        }
        return Promise.resolve()
    })
}

function Am(a, b) {
    return r(function*() {
        return Yl(a.caches, b)
    })
}

function Bm(a) {
    return r(function*() {
        return Yl(a.caches, a.h)
    })
}
var Cm = class {
    constructor() {
        var a = self.caches;
        let b = bl("/app_shell");
        Q("service_worker_forward_exp_params") && (b += self.location.search);
        var c = bl("/app_shell_home");
        this.caches = a;
        this.i = b;
        this.h = c
    }
};
var Dm = class {
    constructor() {
        const a = this;
        this.stream = new ReadableStream({
            start(b) {
                a.close = () => void b.close();
                a.h = c => {
                    const d = c.getReader();
                    return d.read().then(function h({
                        done: f,
                        value: g
                    }) {
                        if (f) return Promise.resolve();
                        b.enqueue(g);
                        return d.read().then(h)
                    })
                };
                a.i = () => {
                    const c = (new TextEncoder).encode("<script>if (window.fetchInitialData) { window.fetchInitialData(); } else { window.getInitialData = undefined; }\x3c/script>");
                    b.enqueue(c)
                }
            }
        })
    }
};

function Em(a, b) {
    return r(function*() {
        const c = b.request,
            d = yield Am(a.h, c.url);
        if (d) return tl({
            appShellAssetLoadReport: {
                assetPath: c.url,
                cacheHit: !0
            },
            timestamp: R()
        }), d;
        Fm(c);
        return Gm(b)
    })
}

function Hm(a, b) {
    return r(function*() {
        const c = yield Im(b);
        if (c.response && (c.response.ok || "opaqueredirect" === c.response.type || 429 === c.response.status || 303 === c.response.status || 300 <= c.response.status && 400 > c.response.status)) return c.response;
        const d = yield Bm(a.h);
        if (d) return Jm(a), Km(d, b);
        Lm(a);
        return c.response ? c.response : Promise.reject(c.error)
    })
}

function Mm(a, b) {
    b = new URL(b);
    if (!a.config.ta.includes(b.pathname)) return !1;
    if (!b.search) return !0;
    b = new URLSearchParams(b.search);
    for (const c of a.config.Ha)
        if (a = b.get(c.key), void 0 === c.value || a === c.value)
            if (b.delete(c.key), !b.toString()) return !0;
    return !1
}

function Nm(a, b) {
    return r(function*() {
        const c = yield Bm(a.h);
        if (!c) return Lm(a), Gm(b);
        Jm(a);
        var d;
        a: {
            if (c.headers && (d = c.headers.get("date")) && (d = Date.parse(d), !isNaN(d))) {
                d = Math.round(R() - d);
                break a
            }
            d = -1
        }
        if (!(-1 < d && 7 <= d / 864E5)) return Km(c, b);
        d = yield Im(b);
        return d.response && d.response.ok ? d.response : Km(c, b)
    })
}

function Gm(a) {
    return Promise.resolve(a.preloadResponse).then(b => b && !Om(b) ? b : t.fetch(a.request))
}

function Fm(a) {
    const b = {
        assetPath: a.url,
        cacheHit: !1
    };
    em().then(c => {
        if (c) {
            var d = im(c).then(e => {
                e && (b.currentAppBundleTimestampSec = String(Math.floor(e / 1E3)))
            });
            c = hm(c, a.url).then(e => {
                b.appBundleVersionDiffCount = e
            });
            Promise.all([d, c]).catch(e => {
                ql(e)
            }).finally(() => {
                tl({
                    appShellAssetLoadReport: b,
                    timestamp: R()
                })
            })
        } else tl({
            appShellAssetLoadReport: b,
            timestamp: R()
        })
    })
}

function Jm(a) {
    tl({
        appShellAssetLoadReport: {
            assetPath: a.h.h,
            cacheHit: !0
        },
        timestamp: R()
    })
}

function Lm(a) {
    tl({
        appShellAssetLoadReport: {
            assetPath: a.h.h,
            cacheHit: !1
        },
        timestamp: R()
    })
}

function Km(a, b) {
    if (!Q("sw_nav_preload_pbj")) return a;
    const c = new Dm,
        d = c.h(a.body);
    Promise.resolve(b.preloadResponse).then(e => {
        if (!e || !Om(e)) throw Error("no pbj preload response available");
        d.then(() => c.h(e.body)).then(() => void c.close())
    }).catch(() => {
        d.then(() => {
            c.i();
            c.close()
        })
    });
    return new Response(c.stream, {
        status: a.status,
        statusText: a.statusText,
        headers: a.headers
    })
}

function Im(a) {
    return r(function*() {
        try {
            return {
                response: yield Gm(a)
            }
        } catch (b) {
            return {
                error: b
            }
        }
    })
}

function Om(a) {
    return "pbj" === a.headers.get("x-navigation-preload-response-type")
}
var Xm = class {
    constructor() {
        var a = Pm;
        var b = {
            Ka: Qm,
            ab: Rm([Sm, /\/signin/, /\/logout/]),
            ta: ["/", "/feed/downloads"],
            Ha: Tm([{
                key: "feature",
                value: "ytca"
            }]),
            Ga: Um(Q("kevlar_sw_app_wide_fallback") ? Vm : Wm)
        };
        this.h = a;
        this.config = b
    }
};
const Ym = /^\/$/,
    Wm = [Ym, /^\/feed\/downloads$/],
    Vm = [Ym, /^\/feed\/\w*/, /^\/results$/, /^\/playlist$/, /^\/watch$/, /^\/channel\/\w*/];

function Um(a) {
    return new RegExp(a.map(b => b.source).join("|"))
}
const Zm = /^https:\/\/([\w-]*\.)*youtube\.com.*/;

function Rm(a) {
    a = Um(a);
    return new RegExp(`${Zm.source}(${a.source})`)
}
const $m = Um([/\.css$/, /\.js$/, /\.ico$/, /\/ytmweb\/_\/js\//, /\/ytmweb\/_\/ss\//, /\/kabuki\/_\/js\//, /\/kabuki\/_\/ss\//, /\/ytmainappweb\/_\/ss\//]),
    Qm = new RegExp(`${Zm.source}(${$m.source})`),
    Sm = /purge_shell=1/;

function Tm(a = []) {
    const b = [];
    for (const c of xd) b.push({
        key: c
    });
    for (const c of a) b.push(c);
    return b
}
Rm([Sm]);
Tm();
var bn = class {
    constructor() {
        var a = Pm,
            b = an;
        this.h = self;
        this.i = a;
        this.m = b;
        this.v = Oe
    }
    init() {
        this.h.oninstall = this.o.bind(this);
        this.h.onactivate = this.j.bind(this);
        this.h.onfetch = this.l.bind(this);
        this.h.onmessage = this.s.bind(this)
    }
    o(a) {
        this.h.skipWaiting();
        const b = zm(this.i).catch(c => {
            ql(c);
            return Promise.resolve()
        });
        a.waitUntil(b)
    }
    j(a) {
        const b = [this.h.clients.claim()],
            c = this.h.registration;
        c.navigationPreload && (b.push(c.navigationPreload.enable()), Q("sw_nav_preload_pbj") && b.push(c.navigationPreload.setHeaderValue("pbj")));
        a.waitUntil(Promise.all(b))
    }
    l(a) {
        const b = this;
        return r(function*() {
            var c = b.m,
                d = !!b.h.registration.navigationPreload;
            const e = a.request;
            if (c.config.ab.test(e.url)) al.h && (delete al.h.h, t.__SAPISID = void 0, N("VISITOR_DATA", void 0), N("SESSION_INDEX", void 0), N("DELEGATED_SESSION_ID", void 0), N("INNERTUBE_CONTEXT_SERIALIZED_DELEGATION_CONTEXT",
                void 0)), d = a.respondWith, c = c.h, am(c.caches, c.h), om(), c = Gm(a), d.call(a, c);
            else if (c.config.Ka.test(e.url)) a.respondWith(Em(c, a));
            else if ("navigate" === e.mode) {
                const f = new URL(e.url),
                    g = c.config.ta;
                (!Q("sw_nav_request_network_first") && g.includes(f.pathname) ? 0 : c.config.Ga.test(f.pathname)) ? a.respondWith(Hm(c, a)): Mm(c, e.url) ? a.respondWith(Nm(c, a)) : d && a.respondWith(Gm(a))
            }
        })
    }
    s(a) {
        const b = a.data;
        this.v.includes(b.type) ? wl(a) : "refresh_shell" === b.type && vm(this.i).catch(c => {
            ql(c)
        })
    }
};

function cn() {
    let a = w("ytglobal.storage_");
    a || (a = new dn, v("ytglobal.storage_", a));
    return a
}
var dn = class {
    estimate() {
        return r(function*() {
            const a = navigator;
            let b;
            if (null == (b = a.storage) ? 0 : b.estimate) return a.storage.estimate();
            let c;
            if (null == (c = a.webkitTemporaryStorage) ? 0 : c.queryUsageAndQuota) return en()
        })
    }
};

function en() {
    const a = navigator;
    return new Promise((b, c) => {
        let d;
        null != (d = a.webkitTemporaryStorage) && d.queryUsageAndQuota ? a.webkitTemporaryStorage.queryUsageAndQuota((e, f) => {
            b({
                usage: e,
                quota: f
            })
        }, e => {
            c(e)
        }) : c(Error("webkitTemporaryStorage is not supported."))
    })
}
v("ytglobal.storageClass_", dn);

function fn(a, b) {
    cn().estimate().then(c => {
        c = Object.assign({}, b, {
            isSw: void 0 === self.document,
            isIframe: self !== self.top,
            deviceStorageUsageMbytes: gn(null == c ? void 0 : c.usage),
            deviceStorageQuotaMbytes: gn(null == c ? void 0 : c.quota)
        });
        a.h("idbQuotaExceeded", c)
    })
}
class hn {
    constructor() {
        var a = jn;
        this.handleError = kn;
        this.h = a;
        this.i = !1;
        void 0 === self.document || self.addEventListener("beforeunload", () => {
            this.i = !0
        });
        this.j = Math.random() <= jf("ytidb_transaction_ended_event_rate_limit_session", .2)
    }
    ca(a, b) {
        switch (a) {
            case "IDB_DATA_CORRUPTED":
                Q("idb_data_corrupted_killswitch") || this.h("idbDataCorrupted", b);
                break;
            case "IDB_UNEXPECTEDLY_CLOSED":
                this.h("idbUnexpectedlyClosed", b);
                break;
            case "IS_SUPPORTED_COMPLETED":
                Q("idb_is_supported_completed_killswitch") || this.h("idbIsSupportedCompleted", b);
                break;
            case "QUOTA_EXCEEDED":
                fn(this, b);
                break;
            case "TRANSACTION_ENDED":
                this.j && Math.random() <= jf("ytidb_transaction_ended_event_rate_limit_transaction",
                    .1) && this.h("idbTransactionEnded", b);
                break;
            case "TRANSACTION_UNEXPECTEDLY_ABORTED":
                a = Object.assign({}, b, {
                    hasWindowUnloaded: this.i
                }), this.h("idbTransactionAborted", a)
        }
    }
}

function gn(a) {
    return "undefined" === typeof a ? "-1" : String(Math.ceil(a / 1048576))
};
eg(bg(), {
    K: [{
        Wa: /Failed to fetch/,
        weight: 500
    }],
    H: []
});
var {
    handleError: kn = Nj,
    ca: jn = V
} = {
    handleError: sl,
    ca: function(a, b) {
        return r(function*() {
            yield rl();
            V(a, b)
        })
    }
};
for (rg = new hn; 0 < qg.length;) {
    const a = qg.shift();
    switch (a.type) {
        case "ERROR":
            rg.handleError(a.payload);
            break;
        case "EVENT":
            rg.ca(a.eventType, a.payload)
    }
}
al.h = new al;
self.onnotificationclick = function(a) {
    a.notification.close();
    const b = a.notification.data;
    b.isDismissed = !1;
    const c = self.clients.matchAll({
        type: "window",
        includeUncontrolled: !0
    });
    c.then(d => {
        a: {
            var e = b.nav;
            for (const f of d)
                if (f.url === e) {
                    f.focus();
                    break a
                }
            self.clients.openWindow(e)
        }
    });
    a.waitUntil(c);
    a.waitUntil(Fl(b.clickEndpoint))
};
self.onnotificationclose = function(a) {
    var b = a.notification.data;
    if (null == b ? 0 : b.clickTrackingParams) {
        var c = ak(b.clickTrackingParams);
        a = {
            screenLayer: 8,
            visualElement: c
        };
        if (b.isDismissed) {
            const d = ck(74726);
            b = Qk();
            b.h(d, c, 8);
            c = {
                screenLayer: 8,
                visualElement: d
            };
            Ik(Fk(), c);
            b.U(c)
        }
        Fk();
        P(Z().o).bind(Z())(a, void 0, 8)
    }
};
self.onpush = function(a) {
    a.waitUntil(Te("NotificationsDisabled").then(b => {
        if (b) return Promise.resolve();
        if (a.data && a.data.text().length) try {
            return Bl(a.data.json())
        } catch (c) {
            return Promise.resolve(c.message)
        }
        return Promise.resolve()
    }));
    a.waitUntil(zl())
};
self.onpushsubscriptionchange = function() {
    xl()
};
const Pm = new Cm,
    an = new Xm;
(new bn).init();