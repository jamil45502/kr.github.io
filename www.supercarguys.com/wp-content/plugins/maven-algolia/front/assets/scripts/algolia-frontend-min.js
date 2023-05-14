var Hogan = {};
! function(t, e) {
    function n(t, e, n) {
        var i;
        return e && "object" == typeof e && (null != e[t] ? i = e[t] : n && e.get && "function" == typeof e.get && (i = e.get(t))), i
    }
    t.Template = function(t, e, n, i) {
        t = t || {}, this.r = t.code || this.r, this.c = n, this.options = i || {}, this.text = e || "", this.partials = t.partials || {}, this.subs = t.subs || {}, this.ib()
    }, t.Template.prototype = {
        r: function(t, e, n) {
            return ""
        },
        v: function(t) {
            return t = c(t), u.test(t) ? t.replace(i, "&amp;").replace(s, "&lt;").replace(r, "&gt;").replace(o, "&#39;").replace(a, "&quot;") : t
        },
        t: c,
        render: function(t, e, n) {
            return this.ri([t], e || {}, n)
        },
        ri: function(t, e, n) {
            return this.r(t, e, n)
        },
        ep: function(t, e) {
            var n = this.partials[t],
                i = e[n.name];
            if (n.instance && n.base == i) return n.instance;
            if ("string" == typeof i) {
                if (!this.c) throw new Error("No compiler available.");
                i = this.c.compile(i, this.options)
            }
            return i ? (this.partials[t].base = i, n.subs && (void 0 === this.activeSub && (e.stackText = this.text), i = function(t, e, n, i, s, r) {
                function o() {}

                function a() {}
                var u;
                o.prototype = t, a.prototype = t.subs;
                var c = new o;
                for (u in c.subs = new a, c.subsText = {}, c.ib(), i = i || {}, c.stackSubs = i, e) i[u] || (i[u] = e[u]), c.subsText[u] = r;
                for (u in i) c.subs[u] = i[u];
                for (u in s = s || {}, c.stackPartials = s, n) s[u] || (s[u] = n[u]);
                for (u in s) c.partials[u] = s[u];
                return c
            }(i, n.subs, n.partials, this.stackSubs, this.stackPartials, e.stackText || this.text)), this.partials[t].instance = i, i) : null
        },
        rp: function(t, e, n, i) {
            var s = this.ep(t, n);
            return s ? s.ri(e, n, i) : ""
        },
        rs: function(t, e, n) {
            var i = t[t.length - 1];
            if (l(i))
                for (var s = 0; s < i.length; s++) t.push(i[s]), n(t, e, this), t.pop();
            else n(t, e, this)
        },
        s: function(t, e, n, i, s, r, o) {
            var a;
            return (!l(t) || 0 !== t.length) && ("function" == typeof t && (t = this.ms(t, e, n, i, s, r, o)), a = !!t, !i && a && e && e.push("object" == typeof t ? t : e[e.length - 1]), a)
        },
        d: function(t, e, i, s) {
            var r, o = t.split("."),
                a = this.f(o[0], e, i, s),
                u = this.options.modelGet,
                c = null;
            if ("." === t && l(e[e.length - 2])) a = e[e.length - 1];
            else
                for (var h = 1; h < o.length; h++) null != (r = n(o[h], a, u)) ? (c = a, a = r) : a = "";
            return !(s && !a) && (s || "function" != typeof a || (e.push(c), a = this.mv(a, e, i), e.pop()), a)
        },
        f: function(t, e, i, s) {
            for (var r = !1, o = !1, a = this.options.modelGet, u = e.length - 1; u >= 0; u--)
                if (null != (r = n(t, e[u], a))) {
                    o = !0;
                    break
                }
            return o ? (s || "function" != typeof r || (r = this.mv(r, e, i)), r) : !s && ""
        },
        ls: function(t, e, n, i, s) {
            var r = this.options.delimiters;
            return this.options.delimiters = s, this.b(this.ct(c(t.call(e, i)), e, n)), this.options.delimiters = r, !1
        },
        ct: function(t, e, n) {
            if (this.options.disableLambda) throw new Error("Lambda features disabled.");
            return this.c.compile(t, this.options).render(e, n)
        },
        b: function(t) {
            this.buf += t
        },
        fl: function() {
            var t = this.buf;
            return this.buf = "", t
        },
        ib: function() {
            this.buf = ""
        },
        ms: function(t, e, n, i, s, r, o) {
            var a, u = e[e.length - 1],
                c = t.call(u);
            return "function" == typeof c ? !!i || (a = this.activeSub && this.subsText[this.activeSub] ? this.subsText[this.activeSub] : this.text, this.ls(c, u, n, a.substring(s, r), o)) : c
        },
        mv: function(t, e, n) {
            var i = e[e.length - 1],
                s = t.call(i);
            return "function" == typeof s ? this.ct(c(s.call(i)), i, n) : s
        },
        sub: function(t, e, n, i) {
            var s = this.subs[t];
            s && (this.activeSub = t, s(e, n, this, i), this.activeSub = !1)
        }
    };
    var i = /&/g,
        s = /</g,
        r = />/g,
        o = /\'/g,
        a = /\"/g,
        u = /[&<>\"\']/;

    function c(t) {
        return String(null == t ? "" : t)
    }
    var l = Array.isArray || function(t) {
        return "[object Array]" === Object.prototype.toString.call(t)
    }
}("undefined" != typeof exports ? exports : Hogan),
function(t) {
    var e = /\S/,
        n = /\"/g,
        i = /\n/g,
        s = /\r/g,
        r = /\\/g;

    function o(t) {
        "}" === t.n.substr(t.n.length - 1) && (t.n = t.n.substring(0, t.n.length - 1))
    }

    function a(t) {
        return t.trim ? t.trim() : t.replace(/^\s*|\s*$/g, "")
    }

    function u(t, e, n) {
        if (e.charAt(n) != t.charAt(0)) return !1;
        for (var i = 1, s = t.length; i < s; i++)
            if (e.charAt(n + i) != t.charAt(i)) return !1;
        return !0
    }
    t.tags = {
        "#": 1,
        "^": 2,
        "<": 3,
        $: 4,
        "/": 5,
        "!": 6,
        ">": 7,
        "=": 8,
        _v: 9,
        "{": 10,
        "&": 11,
        _t: 12
    }, t.scan = function(n, i) {
        var s = n.length,
            r = 0,
            c = null,
            l = null,
            h = "",
            p = [],
            d = !1,
            f = 0,
            g = 0,
            m = "{{",
            v = "}}";

        function y() {
            h.length > 0 && (p.push({
                tag: "_t",
                text: new String(h)
            }), h = "")
        }

        function b(n, i) {
            if (y(), n && function() {
                    for (var n = !0, i = g; i < p.length; i++)
                        if (!(n = t.tags[p[i].tag] < t.tags._v || "_t" == p[i].tag && null === p[i].text.match(e))) return !1;
                    return n
                }())
                for (var s, r = g; r < p.length; r++) p[r].text && ((s = p[r + 1]) && ">" == s.tag && (s.indent = p[r].text.toString()), p.splice(r, 1));
            else i || p.push({
                tag: "\n"
            });
            d = !1, g = p.length
        }

        function _(t, e) {
            var n = "=" + v,
                i = t.indexOf(n, e),
                s = a(t.substring(t.indexOf("=", e) + 1, i)).split(" ");
            return m = s[0], v = s[s.length - 1], i + n.length - 1
        }
        for (i && (i = i.split(" "), m = i[0], v = i[1]), f = 0; f < s; f++) 0 == r ? u(m, n, f) ? (--f, y(), r = 1) : "\n" == n.charAt(f) ? b(d) : h += n.charAt(f) : 1 == r ? (f += m.length - 1, "=" == (c = (l = t.tags[n.charAt(f + 1)]) ? n.charAt(f + 1) : "_v") ? (f = _(n, f), r = 0) : (l && f++, r = 2), d = f) : u(v, n, f) ? (p.push({
            tag: c,
            n: a(h),
            otag: m,
            ctag: v,
            i: "/" == c ? d - m.length : f + v.length
        }), h = "", f += v.length - 1, r = 0, "{" == c && ("}}" == v ? f++ : o(p[p.length - 1]))) : h += n.charAt(f);
        return b(d, !0), p
    };
    var c = {
        _t: !0,
        "\n": !0,
        $: !0,
        "/": !0
    };

    function l(t, e) {
        for (var n = 0, i = e.length; n < i; n++)
            if (e[n].o == t.n) return t.tag = "#", !0
    }

    function h(t, e, n) {
        for (var i = 0, s = n.length; i < s; i++)
            if (n[i].c == t && n[i].o == e) return !0
    }

    function p(t) {
        var e = [];
        for (var n in t.partials) e.push('"' + f(n) + '":{name:"' + f(t.partials[n].name) + '", ' + p(t.partials[n]) + "}");
        return "partials: {" + e.join(",") + "}, subs: " + function(t) {
            var e = [];
            for (var n in t) e.push('"' + f(n) + '": function(c,p,t,i) {' + t[n] + "}");
            return "{ " + e.join(",") + " }"
        }(t.subs)
    }
    t.stringify = function(e, n, i) {
        return "{code: function (c,p,i) { " + t.wrapMain(e.code) + " }," + p(e) + "}"
    };
    var d = 0;

    function f(t) {
        return t.replace(r, "\\\\").replace(n, '\\"').replace(i, "\\n").replace(s, "\\r")
    }

    function g(t) {
        return ~t.indexOf(".") ? "d" : "f"
    }

    function m(t, e) {
        var n = "<" + (e.prefix || "") + t.n + d++;
        return e.partials[n] = {
            name: t.n,
            partials: {}
        }, e.code += 't.b(t.rp("' + f(n) + '",c,p,"' + (t.indent || "") + '"));', n
    }

    function v(t, e) {
        e.code += "t.b(t.t(t." + g(t.n) + '("' + f(t.n) + '",c,p,0)));'
    }

    function y(t) {
        return "t.b(" + t + ");"
    }
    t.generate = function(e, n, i) {
        d = 0;
        var s = {
            code: "",
            subs: {},
            partials: {}
        };
        return t.walk(e, s), i.asString ? this.stringify(s, n, i) : this.makeTemplate(s, n, i)
    }, t.wrapMain = function(t) {
        return 'var t=this;t.b(i=i||"");' + t + "return t.fl();"
    }, t.template = t.Template, t.makeTemplate = function(t, e, n) {
        var i = this.makePartials(t);
        return i.code = new Function("c", "p", "i", this.wrapMain(t.code)), new this.template(i, e, this, n)
    }, t.makePartials = function(t) {
        var e, n = {
            subs: {},
            partials: t.partials,
            name: t.name
        };
        for (e in n.partials) n.partials[e] = this.makePartials(n.partials[e]);
        for (e in t.subs) n.subs[e] = new Function("c", "p", "t", "i", t.subs[e]);
        return n
    }, t.codegen = {
        "#": function(e, n) {
            n.code += "if(t.s(t." + g(e.n) + '("' + f(e.n) + '",c,p,1),c,p,0,' + e.i + "," + e.end + ',"' + e.otag + " " + e.ctag + '")){t.rs(c,p,function(c,p,t){', t.walk(e.nodes, n), n.code += "});c.pop();}"
        },
        "^": function(e, n) {
            n.code += "if(!t.s(t." + g(e.n) + '("' + f(e.n) + '",c,p,1),c,p,1,0,0,"")){', t.walk(e.nodes, n), n.code += "};"
        },
        ">": m,
        "<": function(e, n) {
            var i = {
                partials: {},
                code: "",
                subs: {},
                inPartial: !0
            };
            t.walk(e.nodes, i);
            var s = n.partials[m(e, n)];
            s.subs = i.subs, s.partials = i.partials
        },
        $: function(e, n) {
            var i = {
                subs: {},
                code: "",
                partials: n.partials,
                prefix: e.n
            };
            t.walk(e.nodes, i), n.subs[e.n] = i.code, n.inPartial || (n.code += 't.sub("' + f(e.n) + '",c,p,i);')
        },
        "\n": function(t, e) {
            e.code += y('"\\n"' + (t.last ? "" : " + i"))
        },
        _v: function(t, e) {
            e.code += "t.b(t.v(t." + g(t.n) + '("' + f(t.n) + '",c,p,0)));'
        },
        _t: function(t, e) {
            e.code += y('"' + f(t.text) + '"')
        },
        "{": v,
        "&": v
    }, t.walk = function(e, n) {
        for (var i, s = 0, r = e.length; s < r; s++)(i = t.codegen[e[s].tag]) && i(e[s], n);
        return n
    }, t.parse = function(e, n, i) {
        return function e(n, i, s, r) {
            var o, a = [],
                u = null,
                p = null;
            for (o = s[s.length - 1]; n.length > 0;) {
                if (p = n.shift(), o && "<" == o.tag && !(p.tag in c)) throw new Error("Illegal content in < super tag.");
                if (t.tags[p.tag] <= t.tags.$ || l(p, r)) s.push(p), p.nodes = e(n, p.tag, s, r);
                else {
                    if ("/" == p.tag) {
                        if (0 === s.length) throw new Error("Closing tag without opener: /" + p.n);
                        if (u = s.pop(), p.n != u.n && !h(p.n, u.n, r)) throw new Error("Nesting error: " + u.n + " vs. " + p.n);
                        return u.end = p.i, a
                    }
                    "\n" == p.tag && (p.last = 0 == n.length || "\n" == n[0].tag)
                }
                a.push(p)
            }
            if (s.length > 0) throw new Error("missing closing tag: " + s.pop().n);
            return a
        }(e, 0, [], (i = i || {}).sectionTags || [])
    }, t.cache = {}, t.cacheKey = function(t, e) {
        return [t, !!e.asString, !!e.disableLambda, e.delimiters, !!e.modelGet].join("||")
    }, t.compile = function(e, n) {
        n = n || {};
        var i = t.cacheKey(e, n),
            s = this.cache[i];
        return s || (s = this.generate(this.parse(this.scan(e, n.delimiters), e, n), e, n), this.cache[i] = s)
    }
}("undefined" != typeof exports ? exports : Hogan), "undefined" != typeof module && module.exports && (module.exports = Hogan),
    function(t) {
        var e = function() {
                "use strict";
                return {
                    isMsie: function() {
                        return !!/(msie|trident)/i.test(navigator.userAgent) && navigator.userAgent.match(/(msie |rv:)(\d+(.\d+)?)/i)[2]
                    },
                    isBlankString: function(t) {
                        return !t || /^\s*$/.test(t)
                    },
                    escapeRegExChars: function(t) {
                        return t.replace(/[\-\[\]\/\{\}\(\)\*\+\?\.\\\^\$\|]/g, "\\$&")
                    },
                    isString: function(t) {
                        return "string" == typeof t
                    },
                    isNumber: function(t) {
                        return "number" == typeof t
                    },
                    isArray: t.isArray,
                    isFunction: t.isFunction,
                    isObject: t.isPlainObject,
                    isUndefined: function(t) {
                        return void 0 === t
                    },
                    toStr: function(t) {
                        return e.isUndefined(t) || null === t ? "" : t + ""
                    },
                    bind: t.proxy,
                    each: function(e, n) {
                        t.each(e, function(t, e) {
                            return n(e, t)
                        })
                    },
                    map: t.map,
                    filter: t.grep,
                    every: function(e, n) {
                        var i = !0;
                        return e ? (t.each(e, function(t, s) {
                            if (!(i = n.call(null, s, t, e))) return !1
                        }), !!i) : i
                    },
                    some: function(e, n) {
                        var i = !1;
                        return e ? (t.each(e, function(t, s) {
                            if (i = n.call(null, s, t, e)) return !1
                        }), !!i) : i
                    },
                    mixin: t.extend,
                    getUniqueId: (n = 0, function() {
                        return n++
                    }),
                    templatify: function(e) {
                        return t.isFunction(e) ? e : function() {
                            return String(e)
                        }
                    },
                    defer: function(t) {
                        setTimeout(t, 0)
                    },
                    debounce: function(t, e, n) {
                        var i, s;
                        return function() {
                            var r, o, a = this,
                                u = arguments;
                            return r = function() {
                                i = null, n || (s = t.apply(a, u))
                            }, o = n && !i, clearTimeout(i), i = setTimeout(r, e), o && (s = t.apply(a, u)), s
                        }
                    },
                    throttle: function(t, e) {
                        var n, i, s, r, o, a;
                        return o = 0, a = function() {
                                o = new Date, s = null, r = t.apply(n, i)
                            },
                            function() {
                                var u = new Date,
                                    c = e - (u - o);
                                return n = this, i = arguments, c <= 0 ? (clearTimeout(s), s = null, o = u, r = t.apply(n, i)) : s || (s = setTimeout(a, c)), r
                            }
                    },
                    noop: function() {}
                };
                var n
            }(),
            n = "0.10.4",
            i = function() {
                "use strict";
                return {
                    nonword: n,
                    whitespace: t,
                    obj: {
                        nonword: i(n),
                        whitespace: i(t)
                    }
                };

                function t(t) {
                    return (t = e.toStr(t)) ? t.split(/\s+/) : []
                }

                function n(t) {
                    return (t = e.toStr(t)) ? t.split(/\W+/) : []
                }

                function i(t) {
                    return function() {
                        var n = [].slice.call(arguments, 0);
                        return function(i) {
                            var s = [];
                            return e.each(n, function(n) {
                                s = s.concat(t(e.toStr(i[n])))
                            }), s
                        }
                    }
                }
            }(),
            s = function() {
                "use strict";

                function n(n) {
                    this.maxSize = e.isNumber(n) ? n : 100, this.reset(), this.maxSize <= 0 && (this.set = this.get = t.noop)
                }

                function i() {
                    this.head = this.tail = null
                }

                function s(t, e) {
                    this.key = t, this.val = e, this.prev = this.next = null
                }
                return e.mixin(n.prototype, {
                    set: function(t, e) {
                        var n, i = this.list.tail;
                        this.size >= this.maxSize && (this.list.remove(i), delete this.hash[i.key]), (n = this.hash[t]) ? (n.val = e, this.list.moveToFront(n)) : (n = new s(t, e), this.list.add(n), this.hash[t] = n, this.size++)
                    },
                    get: function(t) {
                        var e = this.hash[t];
                        if (e) return this.list.moveToFront(e), e.val
                    },
                    reset: function() {
                        this.size = 0, this.hash = {}, this.list = new i
                    }
                }), e.mixin(i.prototype, {
                    add: function(t) {
                        this.head && (t.next = this.head, this.head.prev = t), this.head = t, this.tail = this.tail || t
                    },
                    remove: function(t) {
                        t.prev ? t.prev.next = t.next : this.head = t.next, t.next ? t.next.prev = t.prev : this.tail = t.prev
                    },
                    moveToFront: function(t) {
                        this.remove(t), this.add(t)
                    }
                }), n
            }(),
            r = function() {
                "use strict";
                var t, n;
                try {
                    (t = window.localStorage).setItem("~~~", "!"), t.removeItem("~~~")
                } catch (e) {
                    t = null
                }

                function i(t) {
                    this.prefix = ["__", t, "__"].join(""), this.ttlKey = "__ttl__", this.keyMatcher = new RegExp("^" + e.escapeRegExChars(this.prefix))
                }
                return n = t && window.JSON ? {
                    _prefix: function(t) {
                        return this.prefix + t
                    },
                    _ttlKey: function(t) {
                        return this._prefix(t) + this.ttlKey
                    },
                    get: function(e) {
                        return this.isExpired(e) && this.remove(e), o(t.getItem(this._prefix(e)))
                    },
                    set: function(n, i, o) {
                        return e.isNumber(o) ? t.setItem(this._ttlKey(n), r(s() + o)) : t.removeItem(this._ttlKey(n)), t.setItem(this._prefix(n), r(i))
                    },
                    remove: function(e) {
                        return t.removeItem(this._ttlKey(e)), t.removeItem(this._prefix(e)), this
                    },
                    clear: function() {
                        var e, n, i = [],
                            s = t.length;
                        for (e = 0; e < s; e++)(n = t.key(e)).match(this.keyMatcher) && i.push(n.replace(this.keyMatcher, ""));
                        for (e = i.length; e--;) this.remove(i[e]);
                        return this
                    },
                    isExpired: function(n) {
                        var i = o(t.getItem(this._ttlKey(n)));
                        return !!(e.isNumber(i) && s() > i)
                    }
                } : {
                    get: e.noop,
                    set: e.noop,
                    remove: e.noop,
                    clear: e.noop,
                    isExpired: e.noop
                }, e.mixin(i.prototype, n), i;

                function s() {
                    return (new Date).getTime()
                }

                function r(t) {
                    return JSON.stringify(e.isUndefined(t) ? null : t)
                }

                function o(t) {
                    return JSON.parse(t)
                }
            }(),
            o = function() {
                "use strict";
                var n = 0,
                    i = {},
                    r = 6,
                    o = new s(10);

                function a(n) {
                    var i;
                    n = n || {}, this.cancelled = !1, this.lastUrl = null, this._send = n.transport ? (i = n.transport, function(n, s) {
                        var r = t.Deferred();
                        return i(n, s, function(t) {
                            e.defer(function() {
                                r.resolve(t)
                            })
                        }, function(t) {
                            e.defer(function() {
                                r.reject(t)
                            })
                        }), r
                    }) : t.ajax, this._get = n.rateLimiter ? n.rateLimiter(this._get) : this._get, this._cache = !1 === n.cache ? new s(0) : o
                }
                return a.setMaxPendingRequests = function(t) {
                    r = t
                }, a.resetCache = function() {
                    o.reset()
                }, e.mixin(a.prototype, {
                    _get: function(t, e, s) {
                        var o, a = this;

                        function u(e) {
                            s && s(null, e), a._cache.set(t, e)
                        }

                        function c() {
                            s && s(!0)
                        }
                        this.cancelled || t !== this.lastUrl || ((o = i[t]) ? o.done(u).fail(c) : n < r ? (n++, i[t] = this._send(t, e).done(u).fail(c).always(function() {
                            n--, delete i[t], a.onDeckRequestArgs && (a._get.apply(a, a.onDeckRequestArgs), a.onDeckRequestArgs = null)
                        })) : this.onDeckRequestArgs = [].slice.call(arguments, 0))
                    },
                    get: function(t, n, i) {
                        var s;
                        return e.isFunction(n) && (i = n, n = {}), this.cancelled = !1, this.lastUrl = t, (s = this._cache.get(t)) ? e.defer(function() {
                            i && i(null, s)
                        }) : this._get(t, n, i), !!s
                    },
                    cancel: function() {
                        this.cancelled = !0
                    }
                }), a
            }(),
            a = function() {
                "use strict";

                function n(e) {
                    (e = e || {}).datumTokenizer && e.queryTokenizer || t.error("datumTokenizer and queryTokenizer are both required"), this.datumTokenizer = e.datumTokenizer, this.queryTokenizer = e.queryTokenizer, this.reset()
                }
                return e.mixin(n.prototype, {
                    bootstrap: function(t) {
                        this.datums = t.datums, this.trie = t.trie
                    },
                    add: function(t) {
                        var n = this;
                        t = e.isArray(t) ? t : [t], e.each(t, function(t) {
                            var s, r;
                            s = n.datums.push(t) - 1, r = i(n.datumTokenizer(t)), e.each(r, function(t) {
                                var e, i, r;
                                for (e = n.trie, i = t.split(""); r = i.shift();)(e = e.children[r] || (e.children[r] = {
                                    ids: [],
                                    children: {}
                                })).ids.push(s)
                            })
                        })
                    },
                    get: function(t) {
                        var n, s, r = this;
                        return n = i(this.queryTokenizer(t)), e.each(n, function(t) {
                            var e, n, i, o;
                            if (s && 0 === s.length) return !1;
                            for (e = r.trie, n = t.split(""); e && (i = n.shift());) e = e.children[i];
                            if (!e || 0 !== n.length) return s = [], !1;
                            o = e.ids.slice(0), s = s ? function(t, e) {
                                var n = 0,
                                    i = 0,
                                    s = [];
                                t = t.sort(a), e = e.sort(a);
                                var r = t.length,
                                    o = e.length;
                                for (; n < r && i < o;) t[n] < e[i] ? n++ : t[n] > e[i] ? i++ : (s.push(t[n]), n++, i++);
                                return s;

                                function a(t, e) {
                                    return t - e
                                }
                            }(s, o) : o
                        }), s ? e.map(function(t) {
                            for (var e = {}, n = [], i = 0, s = t.length; i < s; i++) e[t[i]] || (e[t[i]] = !0, n.push(t[i]));
                            return n
                        }(s), function(t) {
                            return r.datums[t]
                        }) : []
                    },
                    reset: function() {
                        this.datums = [], this.trie = {
                            ids: [],
                            children: {}
                        }
                    },
                    serialize: function() {
                        return {
                            datums: this.datums,
                            trie: this.trie
                        }
                    }
                }), n;

                function i(t) {
                    return t = e.filter(t, function(t) {
                        return !!t
                    }), t = e.map(t, function(t) {
                        return t.toLowerCase()
                    })
                }
            }(),
            u = function() {
                "use strict";
                return {
                    local: function(t) {
                        return t.local || null
                    },
                    prefetch: function(i) {
                        var s, r;
                        r = {
                            url: null,
                            thumbprint: "",
                            ttl: 864e5,
                            filter: null,
                            ajax: {}
                        }, (s = i.prefetch || null) && (s = e.isString(s) ? {
                            url: s
                        } : s, (s = e.mixin(r, s)).thumbprint = n + s.thumbprint, s.ajax.type = s.ajax.type || "GET", s.ajax.dataType = s.ajax.dataType || "json", !s.url && t.error("prefetch requires url to be set"));
                        return s
                    },
                    remote: function(n) {
                        var i, s;
                        s = {
                            url: null,
                            cache: !0,
                            wildcard: "%QUERY",
                            replace: null,
                            rateLimitBy: "debounce",
                            rateLimitWait: 300,
                            send: null,
                            filter: null,
                            ajax: {}
                        }, (i = n.remote || null) && (i = e.isString(i) ? {
                            url: i
                        } : i, (i = e.mixin(s, i)).rateLimiter = /^throttle$/i.test(i.rateLimitBy) ? (r = i.rateLimitWait, function(t) {
                            return e.throttle(t, r)
                        }) : function(t) {
                            return function(n) {
                                return e.debounce(n, t)
                            }
                        }(i.rateLimitWait), i.ajax.type = i.ajax.type || "GET", i.ajax.dataType = i.ajax.dataType || "json", delete i.rateLimitBy, delete i.rateLimitWait, !i.url && t.error("remote requires url to be set"));
                        var r;
                        return i
                    }
                }
            }();
        ! function(n) {
            "use strict";
            var s, c;

            function l(n) {
                n && (n.local || n.prefetch || n.remote) || t.error("one of local, prefetch, or remote is required"), this.limit = n.limit || 5, this.sorter = function(t) {
                    return e.isFunction(t) ? function(e) {
                        return e.sort(t)
                    } : function(t) {
                        return t
                    }
                }(n.sorter), this.dupDetector = n.dupDetector || h, this.local = u.local(n), this.prefetch = u.prefetch(n), this.remote = u.remote(n), this.cacheKey = this.prefetch ? this.prefetch.cacheKey || this.prefetch.url : null, this.index = new a({
                    datumTokenizer: n.datumTokenizer,
                    queryTokenizer: n.queryTokenizer
                }), this.storage = this.cacheKey ? new r(this.cacheKey) : null
            }
            return s = n.Bloodhound, c = {
                data: "data",
                protocol: "protocol",
                thumbprint: "thumbprint"
            }, n.Bloodhound = l, l.noConflict = function() {
                return n.Bloodhound = s, l
            }, l.tokenizers = i, e.mixin(l.prototype, {
                _loadPrefetch: function(e) {
                    var n, i, s = this;
                    return (n = this._readFromStorage(e.thumbprint)) ? (this.index.bootstrap(n), i = t.Deferred().resolve()) : i = t.ajax(e.url, e.ajax).done(function(t) {
                        s.clear(), s.add(e.filter ? e.filter(t) : t), s._saveToStorage(s.index.serialize(), e.thumbprint, e.ttl)
                    }), i
                },
                _getFromRemote: function(t, e) {
                    var n, i, s = this;
                    if (this.transport) return t = t || "", i = encodeURIComponent(t), n = this.remote.replace ? this.remote.replace(this.remote.url, t) : this.remote.url.replace(this.remote.wildcard, i), this.transport.get(n, this.remote.ajax, function(t, n) {
                        e(t ? [] : s.remote.filter ? s.remote.filter(n) : n)
                    })
                },
                _cancelLastRemoteRequest: function() {
                    this.transport && this.transport.cancel()
                },
                _saveToStorage: function(t, e, n) {
                    this.storage && (this.storage.set(c.data, t, n), this.storage.set(c.protocol, location.protocol, n), this.storage.set(c.thumbprint, e, n))
                },
                _readFromStorage: function(t) {
                    var e, n = {};
                    return this.storage && (n.data = this.storage.get(c.data), n.protocol = this.storage.get(c.protocol), n.thumbprint = this.storage.get(c.thumbprint)), e = n.thumbprint !== t || n.protocol !== location.protocol, n.data && !e ? n.data : null
                },
                _initialize: function() {
                    var n, i = this,
                        s = this.local;
                    return n = this.prefetch ? this._loadPrefetch(this.prefetch) : t.Deferred().resolve(), s && n.done(function() {
                        i.add(e.isFunction(s) ? s() : s)
                    }), this.transport = this.remote ? new o(this.remote) : null, this.initPromise = n.promise()
                },
                initialize: function(t) {
                    return !this.initPromise || t ? this._initialize() : this.initPromise
                },
                add: function(t) {
                    this.index.add(t)
                },
                get: function(t, n) {
                    var i = this,
                        s = [],
                        r = !1;
                    s = this.index.get(t), (s = this.sorter(s).slice(0, this.limit)).length < this.limit ? r = this._getFromRemote(t, function(t) {
                        var r = s.slice(0);
                        e.each(t, function(t) {
                            return !e.some(r, function(e) {
                                return i.dupDetector(t, e)
                            }) && r.push(t), r.length < i.limit
                        }), n && n(i.sorter(r))
                    }) : this._cancelLastRemoteRequest(), r || (s.length > 0 || !this.transport) && n && n(s)
                },
                clear: function() {
                    this.index.reset()
                },
                clearPrefetchCache: function() {
                    this.storage && this.storage.clear()
                },
                clearRemoteCache: function() {
                    this.transport && o.resetCache()
                },
                ttAdapter: function() {
                    return e.bind(this.get, this)
                }
            }), l;

            function h() {
                return !1
            }
        }(this);
        var c = {
                wrapper: '<span class="twitter-typeahead"></span>',
                dropdown: '<span class="tt-dropdown-menu"></span>',
                dataset: '<div class="algolia-dataset tt-dataset-%CLASS%"></div>',
                suggestions: '<span class="tt-suggestions"></span>',
                suggestion: '<div class="tt-suggestion"></div>'
            },
            l = function() {
                "use strict";
                var t = {
                    wrapper: {
                        position: "relative",
                        display: "inline-block"
                    },
                    hint: {
                        position: "absolute",
                        top: "0",
                        left: "0",
                        borderColor: "transparent",
                        boxShadow: "none",
                        opacity: "1"
                    },
                    input: {
                        position: "relative",
                        verticalAlign: "top",
                        backgroundColor: "transparent"
                    },
                    inputWithNoHint: {
                        position: "relative",
                        verticalAlign: "top"
                    },
                    dropdown: {
                        position: "absolute",
                        top: "100%",
                        left: "0",
                        zIndex: "100",
                        display: "none"
                    },
                    suggestions: {
                        display: "block"
                    },
                    suggestion: {
                        whiteSpace: "nowrap",
                        cursor: "pointer"
                    },
                    suggestionChild: {
                        whiteSpace: "normal"
                    },
                    ltr: {
                        left: "0",
                        right: "auto"
                    },
                    rtl: {
                        left: "auto",
                        right: " 0"
                    }
                };
                return e.isMsie() && e.mixin(t.input, {
                    backgroundImage: "url(data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7)"
                }), e.isMsie() && e.isMsie() <= 7 && e.mixin(t.input, {
                    marginTop: "-1px"
                }), t
            }(),
            h = function() {
                "use strict";

                function n(e) {
                    e && e.el || t.error("EventBus initialized without el"), this.$el = t(e.el)
                }
                return e.mixin(n.prototype, {
                    trigger: function(t) {
                        var e = [].slice.call(arguments, 1);
                        this.$el.trigger("typeahead:" + t, e)
                    }
                }), n
            }(),
            p = function() {
                "use strict";
                var t = /\s+/,
                    e = function() {
                        var t;
                        t = window.setImmediate ? function(t) {
                            setImmediate(function() {
                                t()
                            })
                        } : function(t) {
                            setTimeout(function() {
                                t()
                            }, 0)
                        };
                        return t
                    }();
                return {
                    onSync: function(t, e, i) {
                        return n.call(this, "sync", t, e, i)
                    },
                    onAsync: function(t, e, i) {
                        return n.call(this, "async", t, e, i)
                    },
                    off: function(e) {
                        var n;
                        if (!this._callbacks) return this;
                        e = e.split(t);
                        for (; n = e.shift();) delete this._callbacks[n];
                        return this
                    },
                    trigger: function(n) {
                        var s, r, o, a, u;
                        if (!this._callbacks) return this;
                        n = n.split(t), o = [].slice.call(arguments, 1);
                        for (;
                            (s = n.shift()) && (r = this._callbacks[s]);) a = i(r.sync, this, [s].concat(o)), u = i(r.async, this, [s].concat(o)), a() && e(u);
                        return this
                    }
                };

                function n(e, n, i, s) {
                    var r;
                    if (!i) return this;
                    for (n = n.split(t), i = s ? function(t, e) {
                            return t.bind ? t.bind(e) : function() {
                                t.apply(e, [].slice.call(arguments, 0))
                            }
                        }(i, s) : i, this._callbacks = this._callbacks || {}; r = n.shift();) this._callbacks[r] = this._callbacks[r] || {
                        sync: [],
                        async: []
                    }, this._callbacks[r][e].push(i);
                    return this
                }

                function i(t, e, n) {
                    return function() {
                        for (var i, s = 0, r = t.length; !i && s < r; s += 1) i = !1 === t[s].apply(e, n);
                        return !i
                    }
                }
            }(),
            d = function(t) {
                "use strict";
                var n = {
                    node: null,
                    pattern: null,
                    tagName: "strong",
                    className: null,
                    wordsOnly: !1,
                    caseSensitive: !1
                };
                return function(i) {
                    var s;
                    (i = e.mixin({}, n, i)).node && i.pattern && (i.pattern = e.isArray(i.pattern) ? i.pattern : [i.pattern], s = function(t, n, i) {
                        for (var s, r = [], o = 0, a = t.length; o < a; o++) r.push(e.escapeRegExChars(t[o]));
                        return s = i ? "\\b(" + r.join("|") + ")\\b" : "(" + r.join("|") + ")", n ? new RegExp(s) : new RegExp(s, "i")
                    }(i.pattern, i.caseSensitive, i.wordsOnly), function t(e, n) {
                        var i;
                        for (var s = 0; s < e.childNodes.length; s++) 3 === (i = e.childNodes[s]).nodeType ? s += n(i) ? 1 : 0 : t(i, n)
                    }(i.node, function(e) {
                        var n, r, o;
                        (n = s.exec(e.data)) && (o = t.createElement(i.tagName), i.className && (o.className = i.className), (r = e.splitText(n.index)).splitText(n[0].length), o.appendChild(r.cloneNode(!0)), e.parentNode.replaceChild(o, r));
                        return !!n
                    }))
                }
            }(window.document),
            f = function() {
                "use strict";
                var n;

                function i(i) {
                    var s, r, o, a, u, c = this;
                    (i = i || {}).input || t.error("input is missing"), s = e.bind(this._onBlur, this), r = e.bind(this._onFocus, this), o = e.bind(this._onKeydown, this), a = e.bind(this._onInput, this), this.$hint = t(i.hint), this.$input = t(i.input).on("blur.tt", s).on("focus.tt", r).on("keydown.tt", o), 0 === this.$hint.length && (this.setHint = this.getHint = this.clearHint = this.clearHintIfInvalid = e.noop), e.isMsie() ? this.$input.on("keydown.tt keypress.tt cut.tt paste.tt", function(t) {
                        n[t.which || t.keyCode] || e.defer(e.bind(c._onInput, c, t))
                    }) : this.$input.on("input.tt", a), this.query = this.$input.val(), this.$overflowHelper = (u = this.$input, t('<pre aria-hidden="true"></pre>').css({
                        position: "absolute",
                        visibility: "hidden",
                        whiteSpace: "pre",
                        fontFamily: u.css("font-family"),
                        fontSize: u.css("font-size"),
                        fontStyle: u.css("font-style"),
                        fontVariant: u.css("font-variant"),
                        fontWeight: u.css("font-weight"),
                        wordSpacing: u.css("word-spacing"),
                        letterSpacing: u.css("letter-spacing"),
                        textIndent: u.css("text-indent"),
                        textRendering: u.css("text-rendering"),
                        textTransform: u.css("text-transform")
                    }).insertAfter(u))
                }
                return n = {
                    9: "tab",
                    27: "esc",
                    37: "left",
                    39: "right",
                    13: "enter",
                    38: "up",
                    40: "down"
                }, i.normalizeQuery = function(t) {
                    return (t || "").replace(/^\s*/g, "").replace(/\s{2,}/g, " ")
                }, e.mixin(i.prototype, p, {
                    _onBlur: function() {
                        this.resetInputValue(), this.trigger("blurred")
                    },
                    _onFocus: function() {
                        this.trigger("focused")
                    },
                    _onKeydown: function(t) {
                        var e = n[t.which || t.keyCode];
                        this._managePreventDefault(e, t), e && this._shouldTrigger(e, t) && this.trigger(e + "Keyed", t)
                    },
                    _onInput: function() {
                        this._checkInputValue()
                    },
                    _managePreventDefault: function(t, e) {
                        var n, i, r;
                        switch (t) {
                            case "tab":
                                i = this.getHint(), r = this.getInputValue(), n = i && i !== r && !s(e);
                                break;
                            case "up":
                            case "down":
                                n = !s(e);
                                break;
                            default:
                                n = !1
                        }
                        n && e.preventDefault()
                    },
                    _shouldTrigger: function(t, e) {
                        var n;
                        switch (t) {
                            case "tab":
                                n = !s(e);
                                break;
                            default:
                                n = !0
                        }
                        return n
                    },
                    _checkInputValue: function() {
                        var t, e, n, s, r;
                        (t = this.getInputValue()) && (t = t.replace(/[^a-z0-9]/gim, " ").replace(/\s+/g, " ")), s = t, r = this.query, n = !!(e = i.normalizeQuery(s) === i.normalizeQuery(r)) && this.query.length !== t.length, this.query = t, e ? n && this.trigger("whitespaceChanged", this.query) : this.trigger("queryChanged", this.query)
                    },
                    focus: function() {
                        this.$input.focus()
                    },
                    blur: function() {
                        this.$input.blur()
                    },
                    getQuery: function() {
                        return this.query
                    },
                    setQuery: function(t) {
                        this.query = t
                    },
                    getInputValue: function() {
                        return this.$input.val()
                    },
                    setInputValue: function(t, e) {
                        this.$input.val(t), e ? this.clearHint() : this._checkInputValue()
                    },
                    resetInputValue: function() {
                        this.setInputValue(this.query, !0)
                    },
                    getHint: function() {
                        return this.$hint.val()
                    },
                    setHint: function(t) {
                        this.$hint.val(t)
                    },
                    clearHint: function() {
                        this.setHint("")
                    },
                    clearHintIfInvalid: function() {
                        var t, e, n;
                        n = (t = this.getInputValue()) !== (e = this.getHint()) && 0 === e.indexOf(t), !("" !== t && n && !this.hasOverflow()) && this.clearHint()
                    },
                    getLanguageDirection: function() {
                        return (this.$input.css("direction") || "ltr").toLowerCase()
                    },
                    hasOverflow: function() {
                        var t = this.$input.width() - 2;
                        return this.$overflowHelper.text(this.getInputValue()), this.$overflowHelper.width() >= t
                    },
                    isCursorAtEnd: function() {
                        var t, n, i;
                        return t = this.$input.val().length, n = this.$input[0].selectionStart, e.isNumber(n) ? n === t : !document.selection || ((i = document.selection.createRange()).moveStart("character", -t), t === i.text.length)
                    },
                    destroy: function() {
                        this.$hint.off(".tt"), this.$input.off(".tt"), this.$hint = this.$input = this.$overflowHelper = null
                    }
                }), i;

                function s(t) {
                    return t.altKey || t.ctrlKey || t.metaKey || t.shiftKey
                }
            }(),
            g = function() {
                "use strict";
                var n = "ttDataset",
                    i = "ttValue",
                    s = "ttDatum";

                function r(n) {
                    var i;
                    (n = n || {}).templates = n.templates || {}, n.source || t.error("missing source"), n.name && (i = n.name, !/^[_a-zA-Z0-9-]+$/.test(i)) && t.error("invalid dataset name: " + n.name), this.query = null, this.highlight = !!n.highlight, this.name = n.name || e.getUniqueId(), this.source = n.source, this.displayFn = function(t) {
                        return t = t || "value", e.isFunction(t) ? t : function(e) {
                            return e[t]
                        }
                    }(n.display || n.displayKey), this.templates = function(t, n) {
                        return {
                            empty: t.empty && e.templatify(t.empty),
                            header: t.header && e.templatify(t.header),
                            footer: t.footer && e.templatify(t.footer),
                            suggestion: t.suggestion || function(t) {
                                return "<p>" + n(t) + "</p>"
                            }
                        }
                    }(n.templates, this.displayFn), this.$el = t(c.dataset.replace("%CLASS%", this.name)), this.hasSuggestions = !1
                }
                return r.extractDatasetName = function(e) {
                    return t(e).data(n)
                }, r.extractValue = function(e) {
                    return t(e).data(i)
                }, r.extractDatum = function(e) {
                    return t(e).data(s)
                }, e.mixin(r.prototype, p, {
                    _render: function(r, o) {
                        if (this.$el) {
                            var a, u = this;
                            this.$el.empty(), this.hasSuggestions = a = o && o.length, !a && this.templates.empty ? this.$el.html(u.templates.empty({
                                query: r,
                                isEmpty: !0
                            })).prepend(u.templates.header ? h() : null).append(u.templates.footer ? p() : null) : a && this.$el.html(function() {
                                var a, h;
                                return a = t(c.suggestions).css(l.suggestions), h = e.map(o, function(e) {
                                    var r;
                                    return (r = t(c.suggestion).append(u.templates.suggestion(e)).data(n, u.name).data(i, u.displayFn(e)).data(s, e)).children().each(function() {
                                        t(this).css(l.suggestionChild)
                                    }), r
                                }), a.append.apply(a, h), u.highlight && d({
                                    className: "tt-highlight",
                                    node: a[0],
                                    pattern: r
                                }), a
                            }()).prepend(u.templates.header ? h() : null).append(u.templates.footer ? p() : null), this.trigger("rendered")
                        }

                        function h() {
                            return u.templates.header({
                                query: r,
                                isEmpty: !a
                            })
                        }

                        function p() {
                            return u.templates.footer({
                                query: r,
                                isEmpty: !a
                            })
                        }
                    },
                    getRoot: function() {
                        return this.$el
                    },
                    update: function(t) {
                        var e = this;
                        this.query = t, this.canceled = !1, this.source(t, function(n) {
                            e.canceled || t !== e.query || e._render(t, n)
                        })
                    },
                    cancel: function() {
                        this.canceled = !0
                    },
                    clear: function() {
                        this.cancel(), this.$el.empty(), this.trigger("rendered")
                    },
                    isEmpty: function() {
                        return this.$el.is(":empty")
                    },
                    destroy: function() {
                        this.$el = null
                    }
                }), r
            }(),
            m = function() {
                "use strict";

                function n(n) {
                    var s, r, o, a = this;
                    (n = n || {}).menu || t.error("menu is required"), this.isOpen = !1, this.isEmpty = !0, this.datasets = e.map(n.datasets, i), this.templates = n.templates, s = e.bind(this._onSuggestionClick, this), r = e.bind(this._onSuggestionMouseEnter, this), o = e.bind(this._onSuggestionMouseLeave, this), this.$menu = t(n.menu).on("click.tt", ".tt-suggestion", s).on("mouseenter.tt", ".tt-suggestion", r).on("mouseleave.tt", ".tt-suggestion", o), e.each(this.datasets, function(t) {
                        a.$menu.append(t.getRoot()), t.onSync("rendered", a._onRendered, a)
                    })
                }
                return e.mixin(n.prototype, p, {
                    _onSuggestionClick: function(e) {
                        this.trigger("suggestionClicked", t(e.currentTarget))
                    },
                    _onSuggestionMouseEnter: function(e) {
                        this._removeCursor(), this._setCursor(t(e.currentTarget), !0)
                    },
                    _onSuggestionMouseLeave: function() {
                        this._removeCursor()
                    },
                    _onRendered: function() {
                        this.isEmpty = e.every(this.datasets, function(t) {
                            return t.isEmpty()
                        }), this.isEmpty ? this._hide() : this.isOpen && this._show(), this.trigger("datasetRendered")
                    },
                    _hide: function() {
                        this.$menu.hide()
                    },
                    _show: function() {
                        this.$menu.css("display", "block")
                    },
                    _getSuggestions: function() {
                        return this.$menu.find(".tt-suggestion")
                    },
                    _getCursor: function() {
                        return this.$menu.find(".tt-cursor").first()
                    },
                    _setCursor: function(t, e) {
                        t.first().addClass("tt-cursor"), !e && this.trigger("cursorMoved")
                    },
                    _removeCursor: function() {
                        this._getCursor().removeClass("tt-cursor")
                    },
                    _moveCursor: function(t) {
                        var e, n, i, s;
                        this.isOpen && (n = this._getCursor(), e = this._getSuggestions(), this._removeCursor(), -1 !== (i = ((i = e.index(n) + t) + 1) % (e.length + 1) - 1) ? (i < -1 && (i = e.length - 1), this._setCursor(s = e.eq(i)), this._ensureVisible(s)) : this.trigger("cursorRemoved"))
                    },
                    _ensureVisible: function(t) {
                        var e, n, i, s;
                        n = (e = t.position().top) + t.outerHeight(!0), i = this.$menu.scrollTop(), s = this.$menu.height() + parseInt(this.$menu.css("paddingTop"), 10) + parseInt(this.$menu.css("paddingBottom"), 10), e < 0 ? this.$menu.scrollTop(i + e) : s < n && this.$menu.scrollTop(i + (n - s))
                    },
                    close: function() {
                        this.isOpen && (this.isOpen = !1, this._removeCursor(), this._hide(), this.trigger("closed"))
                    },
                    open: function() {
                        this.isOpen || (this.isOpen = !0, !this.isEmpty && this._show(), this.trigger("opened"))
                    },
                    setLanguageDirection: function(t) {
                        this.$menu.css("ltr" === t ? l.ltr : l.rtl)
                    },
                    moveCursorUp: function() {
                        this._moveCursor(-1)
                    },
                    moveCursorDown: function() {
                        this._moveCursor(1)
                    },
                    getDatumForSuggestion: function(t) {
                        var e = null;
                        return t.length && (e = {
                            raw: g.extractDatum(t),
                            value: g.extractValue(t),
                            datasetName: g.extractDatasetName(t)
                        }), e
                    },
                    getDatumForCursor: function() {
                        return this.getDatumForSuggestion(this._getCursor().first())
                    },
                    getDatumForTopSuggestion: function() {
                        return this.getDatumForSuggestion(this._getSuggestions().first())
                    },
                    update: function(t) {
                        e.each(this.datasets, function(e) {
                            e.update(t)
                        });
                        var n = !0;
                        e.each(this.datasets, function(t) {
                            t.hasSuggestions > 0 && (n = !1)
                        }), n && this.templates && this.templates.empty && this.renderGlobalEmpty()
                    },
                    renderGlobalEmpty: function() {
                        var t = this.datasets[0];
                        t.$el && (t.$el.empty(), t.$el.html(function(t) {
                            return t.templates.empty
                        }(this)), t.trigger("rendered"))
                    },
                    empty: function() {
                        e.each(this.datasets, function(t) {
                            t.clear()
                        }), this.isEmpty = !0
                    },
                    isVisible: function() {
                        return this.isOpen && !this.isEmpty
                    },
                    destroy: function() {
                        this.$menu.off(".tt"), this.$menu = null, e.each(this.datasets, function(t) {
                            t.destroy()
                        })
                    }
                }), n;

                function i(t) {
                    return new g(t)
                }
            }(),
            v = function() {
                "use strict";
                var n = "ttAttrs";

                function i(i) {
                    var s, r, o, a;
                    (i = i || {}).input || t.error("missing input"), this.isActivated = !1, this.autoselect = !!i.autoselect, this.minLength = e.isNumber(i.minLength) ? i.minLength : 1, this.templates = e.isObject(i.templates) ? {
                        empty: (a = i.templates).empty && e.templatify(a.empty),
                        header: a.header && e.templatify(a.header),
                        footer: a.footer && e.templatify(a.footer)
                    } : {}, this.$node = function(e, i) {
                        var s, r, o, a;
                        s = t(e), r = t(c.wrapper).css(l.wrapper), o = t(c.dropdown).css(l.dropdown), (a = s.clone().css(l.hint).css((u = s, {
                            backgroundAttachment: u.css("background-attachment"),
                            backgroundClip: u.css("background-clip"),
                            backgroundColor: u.css("background-color"),
                            backgroundImage: u.css("background-image"),
                            backgroundOrigin: u.css("background-origin"),
                            backgroundPosition: u.css("background-position"),
                            backgroundRepeat: u.css("background-repeat"),
                            backgroundSize: u.css("background-size")
                        }))).val("").removeData().addClass("tt-hint").removeAttr("id name placeholder required").prop("readonly", !0).attr({
                            autocomplete: "off",
                            spellcheck: "false",
                            tabindex: -1
                        }), s.data(n, {
                            dir: s.attr("dir"),
                            autocomplete: s.attr("autocomplete"),
                            spellcheck: s.attr("spellcheck"),
                            style: s.attr("style")
                        }), s.addClass("tt-input").attr({
                            autocomplete: "off",
                            spellcheck: !1
                        }).css(i ? l.input : l.inputWithNoHint);
                        var u;
                        try {
                            !s.attr("dir") && s.attr("dir", "auto")
                        } catch (t) {}
                        return s.wrap(r).parent().prepend(i ? a : null).append(o)
                    }(i.input, i.withHint), s = this.$node.find(".tt-dropdown-menu"), r = this.$node.find(".tt-input"), o = this.$node.find(".tt-hint"), r.on("blur.tt", function(t) {
                        var n, i, o;
                        n = document.activeElement, i = s.is(n), o = s.has(n).length > 0, e.isMsie() && (i || o) && (t.preventDefault(), t.stopImmediatePropagation(), e.defer(function() {
                            r.focus()
                        }))
                    }), s.on("mousedown.tt", function(t) {
                        t.preventDefault()
                    }), this.eventBus = i.eventBus || new h({
                        el: r
                    }), this.dropdown = new m({
                        menu: s,
                        datasets: i.datasets,
                        templates: i.templates
                    }).onSync("suggestionClicked", this._onSuggestionClicked, this).onSync("cursorMoved", this._onCursorMoved, this).onSync("cursorRemoved", this._onCursorRemoved, this).onSync("opened", this._onOpened, this).onSync("closed", this._onClosed, this).onAsync("datasetRendered", this._onDatasetRendered, this), this.input = new f({
                        input: r,
                        hint: o
                    }).onSync("focused", this._onFocused, this).onSync("blurred", this._onBlurred, this).onSync("enterKeyed", this._onEnterKeyed, this).onSync("tabKeyed", this._onTabKeyed, this).onSync("escKeyed", this._onEscKeyed, this).onSync("upKeyed", this._onUpKeyed, this).onSync("downKeyed", this._onDownKeyed, this).onSync("leftKeyed", this._onLeftKeyed, this).onSync("rightKeyed", this._onRightKeyed, this).onSync("queryChanged", this._onQueryChanged, this).onSync("whitespaceChanged", this._onWhitespaceChanged, this), this._setLanguageDirection()
                }
                return e.mixin(i.prototype, {
                    _onSuggestionClicked: function(t, e) {
                        var n;
                        (n = this.dropdown.getDatumForSuggestion(e)) && this._select(n)
                    },
                    _onCursorMoved: function() {
                        var t = this.dropdown.getDatumForCursor();
                        this.input.setInputValue(t.value, !0), this.eventBus.trigger("cursorchanged", t.raw, t.datasetName)
                    },
                    _onCursorRemoved: function() {
                        this.input.resetInputValue(), this._updateHint()
                    },
                    _onDatasetRendered: function() {
                        this._updateHint()
                    },
                    _onOpened: function() {
                        this._updateHint(), this.eventBus.trigger("opened")
                    },
                    _onClosed: function() {
                        this.input.clearHint(), this.eventBus.trigger("closed")
                    },
                    _onFocused: function() {
                        this.isActivated = !0, this.dropdown.open()
                    },
                    _onBlurred: function() {
                        this.dealerinspire && this.dealerinspire.manages("blur") || (this.isActivated = !1, this.dropdown.empty(), this.dropdown.close())
                    },
                    _onEnterKeyed: function(t, e) {
                        var n, i;
                        n = this.dropdown.getDatumForCursor(), i = this.dropdown.getDatumForTopSuggestion(), n ? (this._select(n), e.preventDefault()) : this.autoselect && i && (this._select(i), e.preventDefault())
                    },
                    _onTabKeyed: function(t, e) {
                        var n;
                        (n = this.dropdown.getDatumForCursor()) ? (this._select(n), e.preventDefault()) : this._autocomplete(!0)
                    },
                    _onEscKeyed: function() {
                        this.dropdown.close(), this.input.resetInputValue()
                    },
                    _onUpKeyed: function() {
                        var t = this.input.getQuery();
                        this.dropdown.isEmpty && t.length >= this.minLength ? this.dropdown.update(t) : this.dropdown.moveCursorUp(), this.dropdown.open()
                    },
                    _onDownKeyed: function() {
                        var t = this.input.getQuery();
                        this.dropdown.isEmpty && t.length >= this.minLength ? this.dropdown.update(t) : this.dropdown.moveCursorDown(), this.dropdown.open()
                    },
                    _onLeftKeyed: function() {
                        "rtl" === this.dir && this._autocomplete()
                    },
                    _onRightKeyed: function() {
                        "ltr" === this.dir && this._autocomplete()
                    },
                    _onQueryChanged: function(t, e) {
                        this.input.clearHintIfInvalid(), e.length >= this.minLength ? this.dropdown.update(e) : this.dropdown.empty(), this.dropdown.open(), this._setLanguageDirection()
                    },
                    _onWhitespaceChanged: function() {
                        this._updateHint(), this.dropdown.open()
                    },
                    _setLanguageDirection: function() {
                        var t;
                        this.dir !== (t = this.input.getLanguageDirection()) && (this.dir = t, this.$node.css("direction", t), this.dropdown.setLanguageDirection(t))
                    },
                    _updateHint: function() {
                        var t, n, i, s, r;
                        (t = this.dropdown.getDatumForTopSuggestion()) && this.dropdown.isVisible() && !this.input.hasOverflow() ? (n = this.input.getInputValue(), i = f.normalizeQuery(n), s = e.escapeRegExChars(i), (r = new RegExp("^(?:" + s + ")(.+$)", "i").exec(t.value)) ? this.input.setHint(n + r[1]) : this.input.clearHint()) : this.input.clearHint()
                    },
                    _autocomplete: function(t) {
                        var e, n, i, s;
                        e = this.input.getHint(), n = this.input.getQuery(), i = t || this.input.isCursorAtEnd(), e && n !== e && i && ((s = this.dropdown.getDatumForTopSuggestion()) && this.input.setInputValue(s.value), this.eventBus.trigger("autocompleted", s.raw, s.datasetName))
                    },
                    _select: function(t) {
                        this.input.setQuery(t.value), this.input.setInputValue(t.value, !0), this._setLanguageDirection(), this.eventBus.trigger("selected", t.raw, t.datasetName), this.dropdown.close(), e.defer(e.bind(this.dropdown.empty, this.dropdown))
                    },
                    open: function() {
                        this.dropdown.open()
                    },
                    close: function() {
                        this.dropdown.close()
                    },
                    setVal: function(t) {
                        t = e.toStr(t), this.isActivated ? this.input.setInputValue(t) : (this.input.setQuery(t), this.input.setInputValue(t, !0)), this._setLanguageDirection()
                    },
                    getVal: function() {
                        return this.input.getQuery()
                    },
                    destroy: function() {
                        var t, i;
                        this.input.destroy(), this.dropdown.destroy(), t = this.$node, i = t.find(".tt-input"), e.each(i.data(n), function(t, n) {
                            e.isUndefined(t) ? i.removeAttr(n) : i.attr(n, t)
                        }), i.detach().removeData(n).removeClass("tt-input").insertAfter(t), t.remove(), this.$node = null
                    }
                }), i
            }();
        ! function() {
            "use strict";
            var n, i, s;
            n = t.fn.typeahead, i = "ttTypeahead", s = {
                initialize: function(n, s) {
                    return s = e.isArray(s) ? s : [].slice.call(arguments, 1), n = n || {}, this.each(function() {
                        var r, o = t(this);
                        e.each(s, function(t) {
                            t.highlight = !!n.highlight
                        }), (r = new v({
                            input: o,
                            eventBus: new h({
                                el: o
                            }),
                            withHint: !!e.isUndefined(n.hint) || !!n.hint,
                            minLength: n.minLength,
                            autoselect: n.autoselect,
                            datasets: s,
                            templates: n.sharedTemplates
                        })).dealerinspire = {
                            manage: [],
                            manages: function(t) {
                                return this.manage.indexOf(t) > -1
                            },
                            shouldManage: function(t) {
                                this.manages(t) || this.manage.push(t)
                            }
                        }, o.data(i, r), this.typeahead = r
                    })
                },
                open: function() {
                    return this.each(function() {
                        var e, n = t(this);
                        (e = n.data(i)) && e.open()
                    })
                },
                close: function() {
                    return this.each(function() {
                        var e, n = t(this);
                        (e = n.data(i)) && e.close()
                    })
                },
                val: function(e) {
                    return arguments.length ? this.each(function() {
                        var n, s = t(this);
                        (n = s.data(i)) && n.setVal(e)
                    }) : function(t) {
                        var e, n;
                        (e = t.data(i)) && (n = e.getVal());
                        return n
                    }(this.first())
                },
                destroy: function() {
                    return this.each(function() {
                        var e, n = t(this);
                        (e = n.data(i)) && (e.destroy(), n.removeData(i))
                    })
                }
            }, t.fn.typeahead = function(e) {
                var n;
                return s[e] && "initialize" !== e ? (n = this.filter(function() {
                    return !!t(this).data(i)
                }), s[e].apply(n, [].slice.call(arguments, 1))) : s.initialize.apply(this, arguments)
            }, t.fn.typeahead.noConflict = function() {
                return t.fn.typeahead = n, this
            }
        }()
    }(window.jQuery);
Hogan = {};
! function(t, e) {
    function n(t, e, n) {
        var i;
        return e && "object" == typeof e && (null != e[t] ? i = e[t] : n && e.get && "function" == typeof e.get && (i = e.get(t))), i
    }
    t.Template = function(t, e, n, i) {
        t = t || {}, this.r = t.code || this.r, this.c = n, this.options = i || {}, this.text = e || "", this.partials = t.partials || {}, this.subs = t.subs || {}, this.ib()
    }, t.Template.prototype = {
        r: function(t, e, n) {
            return ""
        },
        v: function(t) {
            return t = c(t), u.test(t) ? t.replace(i, "&amp;").replace(s, "&lt;").replace(r, "&gt;").replace(o, "&#39;").replace(a, "&quot;") : t
        },
        t: c,
        render: function(t, e, n) {
            return this.ri([t], e || {}, n)
        },
        ri: function(t, e, n) {
            return this.r(t, e, n)
        },
        ep: function(t, e) {
            var n = this.partials[t],
                i = e[n.name];
            if (n.instance && n.base == i) return n.instance;
            if ("string" == typeof i) {
                if (!this.c) throw new Error("No compiler available.");
                i = this.c.compile(i, this.options)
            }
            return i ? (this.partials[t].base = i, n.subs && (void 0 === this.activeSub && (e.stackText = this.text), i = function(t, e, n, i, s, r) {
                function o() {}

                function a() {}
                var u;
                o.prototype = t, a.prototype = t.subs;
                var c = new o;
                for (u in c.subs = new a, c.subsText = {}, c.ib(), i = i || {}, c.stackSubs = i, e) i[u] || (i[u] = e[u]), c.subsText[u] = r;
                for (u in i) c.subs[u] = i[u];
                for (u in s = s || {}, c.stackPartials = s, n) s[u] || (s[u] = n[u]);
                for (u in s) c.partials[u] = s[u];
                return c
            }(i, n.subs, n.partials, this.stackSubs, this.stackPartials, e.stackText || this.text)), this.partials[t].instance = i, i) : null
        },
        rp: function(t, e, n, i) {
            var s = this.ep(t, n);
            return s ? s.ri(e, n, i) : ""
        },
        rs: function(t, e, n) {
            var i = t[t.length - 1];
            if (l(i))
                for (var s = 0; s < i.length; s++) t.push(i[s]), n(t, e, this), t.pop();
            else n(t, e, this)
        },
        s: function(t, e, n, i, s, r, o) {
            var a;
            return (!l(t) || 0 !== t.length) && ("function" == typeof t && (t = this.ms(t, e, n, i, s, r, o)), a = !!t, !i && a && e && e.push("object" == typeof t ? t : e[e.length - 1]), a)
        },
        d: function(t, e, i, s) {
            var r, o = t.split("."),
                a = this.f(o[0], e, i, s),
                u = this.options.modelGet,
                c = null;
            if ("." === t && l(e[e.length - 2])) a = e[e.length - 1];
            else
                for (var h = 1; h < o.length; h++) null != (r = n(o[h], a, u)) ? (c = a, a = r) : a = "";
            return !(s && !a) && (s || "function" != typeof a || (e.push(c), a = this.mv(a, e, i), e.pop()), a)
        },
        f: function(t, e, i, s) {
            for (var r = !1, o = !1, a = this.options.modelGet, u = e.length - 1; u >= 0; u--)
                if (null != (r = n(t, e[u], a))) {
                    o = !0;
                    break
                }
            return o ? (s || "function" != typeof r || (r = this.mv(r, e, i)), r) : !s && ""
        },
        ls: function(t, e, n, i, s) {
            var r = this.options.delimiters;
            return this.options.delimiters = s, this.b(this.ct(c(t.call(e, i)), e, n)), this.options.delimiters = r, !1
        },
        ct: function(t, e, n) {
            if (this.options.disableLambda) throw new Error("Lambda features disabled.");
            return this.c.compile(t, this.options).render(e, n)
        },
        b: function(t) {
            this.buf += t
        },
        fl: function() {
            var t = this.buf;
            return this.buf = "", t
        },
        ib: function() {
            this.buf = ""
        },
        ms: function(t, e, n, i, s, r, o) {
            var a, u = e[e.length - 1],
                c = t.call(u);
            return "function" == typeof c ? !!i || (a = this.activeSub && this.subsText[this.activeSub] ? this.subsText[this.activeSub] : this.text, this.ls(c, u, n, a.substring(s, r), o)) : c
        },
        mv: function(t, e, n) {
            var i = e[e.length - 1],
                s = t.call(i);
            return "function" == typeof s ? this.ct(c(s.call(i)), i, n) : s
        },
        sub: function(t, e, n, i) {
            var s = this.subs[t];
            s && (this.activeSub = t, s(e, n, this, i), this.activeSub = !1)
        }
    };
    var i = /&/g,
        s = /</g,
        r = />/g,
        o = /\'/g,
        a = /\"/g,
        u = /[&<>\"\']/;

    function c(t) {
        return String(null == t ? "" : t)
    }
    var l = Array.isArray || function(t) {
        return "[object Array]" === Object.prototype.toString.call(t)
    }
}("undefined" != typeof exports ? exports : Hogan),
function(t) {
    var e = /\S/,
        n = /\"/g,
        i = /\n/g,
        s = /\r/g,
        r = /\\/g;

    function o(t) {
        "}" === t.n.substr(t.n.length - 1) && (t.n = t.n.substring(0, t.n.length - 1))
    }

    function a(t) {
        return t.trim ? t.trim() : t.replace(/^\s*|\s*$/g, "")
    }

    function u(t, e, n) {
        if (e.charAt(n) != t.charAt(0)) return !1;
        for (var i = 1, s = t.length; i < s; i++)
            if (e.charAt(n + i) != t.charAt(i)) return !1;
        return !0
    }
    t.tags = {
        "#": 1,
        "^": 2,
        "<": 3,
        $: 4,
        "/": 5,
        "!": 6,
        ">": 7,
        "=": 8,
        _v: 9,
        "{": 10,
        "&": 11,
        _t: 12
    }, t.scan = function(n, i) {
        var s = n.length,
            r = 0,
            c = null,
            l = null,
            h = "",
            p = [],
            d = !1,
            f = 0,
            g = 0,
            m = "{{",
            v = "}}";

        function y() {
            h.length > 0 && (p.push({
                tag: "_t",
                text: new String(h)
            }), h = "")
        }

        function b(n, i) {
            if (y(), n && function() {
                    for (var n = !0, i = g; i < p.length; i++)
                        if (!(n = t.tags[p[i].tag] < t.tags._v || "_t" == p[i].tag && null === p[i].text.match(e))) return !1;
                    return n
                }())
                for (var s, r = g; r < p.length; r++) p[r].text && ((s = p[r + 1]) && ">" == s.tag && (s.indent = p[r].text.toString()), p.splice(r, 1));
            else i || p.push({
                tag: "\n"
            });
            d = !1, g = p.length
        }

        function _(t, e) {
            var n = "=" + v,
                i = t.indexOf(n, e),
                s = a(t.substring(t.indexOf("=", e) + 1, i)).split(" ");
            return m = s[0], v = s[s.length - 1], i + n.length - 1
        }
        for (i && (i = i.split(" "), m = i[0], v = i[1]), f = 0; f < s; f++) 0 == r ? u(m, n, f) ? (--f, y(), r = 1) : "\n" == n.charAt(f) ? b(d) : h += n.charAt(f) : 1 == r ? (f += m.length - 1, "=" == (c = (l = t.tags[n.charAt(f + 1)]) ? n.charAt(f + 1) : "_v") ? (f = _(n, f), r = 0) : (l && f++, r = 2), d = f) : u(v, n, f) ? (p.push({
            tag: c,
            n: a(h),
            otag: m,
            ctag: v,
            i: "/" == c ? d - m.length : f + v.length
        }), h = "", f += v.length - 1, r = 0, "{" == c && ("}}" == v ? f++ : o(p[p.length - 1]))) : h += n.charAt(f);
        return b(d, !0), p
    };
    var c = {
        _t: !0,
        "\n": !0,
        $: !0,
        "/": !0
    };

    function l(t, e) {
        for (var n = 0, i = e.length; n < i; n++)
            if (e[n].o == t.n) return t.tag = "#", !0
    }

    function h(t, e, n) {
        for (var i = 0, s = n.length; i < s; i++)
            if (n[i].c == t && n[i].o == e) return !0
    }

    function p(t) {
        var e = [];
        for (var n in t.partials) e.push('"' + f(n) + '":{name:"' + f(t.partials[n].name) + '", ' + p(t.partials[n]) + "}");
        return "partials: {" + e.join(",") + "}, subs: " + function(t) {
            var e = [];
            for (var n in t) e.push('"' + f(n) + '": function(c,p,t,i) {' + t[n] + "}");
            return "{ " + e.join(",") + " }"
        }(t.subs)
    }
    t.stringify = function(e, n, i) {
        return "{code: function (c,p,i) { " + t.wrapMain(e.code) + " }," + p(e) + "}"
    };
    var d = 0;

    function f(t) {
        return t.replace(r, "\\\\").replace(n, '\\"').replace(i, "\\n").replace(s, "\\r")
    }

    function g(t) {
        return ~t.indexOf(".") ? "d" : "f"
    }

    function m(t, e) {
        var n = "<" + (e.prefix || "") + t.n + d++;
        return e.partials[n] = {
            name: t.n,
            partials: {}
        }, e.code += 't.b(t.rp("' + f(n) + '",c,p,"' + (t.indent || "") + '"));', n
    }

    function v(t, e) {
        e.code += "t.b(t.t(t." + g(t.n) + '("' + f(t.n) + '",c,p,0)));'
    }

    function y(t) {
        return "t.b(" + t + ");"
    }
    t.generate = function(e, n, i) {
        d = 0;
        var s = {
            code: "",
            subs: {},
            partials: {}
        };
        return t.walk(e, s), i.asString ? this.stringify(s, n, i) : this.makeTemplate(s, n, i)
    }, t.wrapMain = function(t) {
        return 'var t=this;t.b(i=i||"");' + t + "return t.fl();"
    }, t.template = t.Template, t.makeTemplate = function(t, e, n) {
        var i = this.makePartials(t);
        return i.code = new Function("c", "p", "i", this.wrapMain(t.code)), new this.template(i, e, this, n)
    }, t.makePartials = function(t) {
        var e, n = {
            subs: {},
            partials: t.partials,
            name: t.name
        };
        for (e in n.partials) n.partials[e] = this.makePartials(n.partials[e]);
        for (e in t.subs) n.subs[e] = new Function("c", "p", "t", "i", t.subs[e]);
        return n
    }, t.codegen = {
        "#": function(e, n) {
            n.code += "if(t.s(t." + g(e.n) + '("' + f(e.n) + '",c,p,1),c,p,0,' + e.i + "," + e.end + ',"' + e.otag + " " + e.ctag + '")){t.rs(c,p,function(c,p,t){', t.walk(e.nodes, n), n.code += "});c.pop();}"
        },
        "^": function(e, n) {
            n.code += "if(!t.s(t." + g(e.n) + '("' + f(e.n) + '",c,p,1),c,p,1,0,0,"")){', t.walk(e.nodes, n), n.code += "};"
        },
        ">": m,
        "<": function(e, n) {
            var i = {
                partials: {},
                code: "",
                subs: {},
                inPartial: !0
            };
            t.walk(e.nodes, i);
            var s = n.partials[m(e, n)];
            s.subs = i.subs, s.partials = i.partials
        },
        $: function(e, n) {
            var i = {
                subs: {},
                code: "",
                partials: n.partials,
                prefix: e.n
            };
            t.walk(e.nodes, i), n.subs[e.n] = i.code, n.inPartial || (n.code += 't.sub("' + f(e.n) + '",c,p,i);')
        },
        "\n": function(t, e) {
            e.code += y('"\\n"' + (t.last ? "" : " + i"))
        },
        _v: function(t, e) {
            e.code += "t.b(t.v(t." + g(t.n) + '("' + f(t.n) + '",c,p,0)));'
        },
        _t: function(t, e) {
            e.code += y('"' + f(t.text) + '"')
        },
        "{": v,
        "&": v
    }, t.walk = function(e, n) {
        for (var i, s = 0, r = e.length; s < r; s++)(i = t.codegen[e[s].tag]) && i(e[s], n);
        return n
    }, t.parse = function(e, n, i) {
        return function e(n, i, s, r) {
            var o, a = [],
                u = null,
                p = null;
            for (o = s[s.length - 1]; n.length > 0;) {
                if (p = n.shift(), o && "<" == o.tag && !(p.tag in c)) throw new Error("Illegal content in < super tag.");
                if (t.tags[p.tag] <= t.tags.$ || l(p, r)) s.push(p), p.nodes = e(n, p.tag, s, r);
                else {
                    if ("/" == p.tag) {
                        if (0 === s.length) throw new Error("Closing tag without opener: /" + p.n);
                        if (u = s.pop(), p.n != u.n && !h(p.n, u.n, r)) throw new Error("Nesting error: " + u.n + " vs. " + p.n);
                        return u.end = p.i, a
                    }
                    "\n" == p.tag && (p.last = 0 == n.length || "\n" == n[0].tag)
                }
                a.push(p)
            }
            if (s.length > 0) throw new Error("missing closing tag: " + s.pop().n);
            return a
        }(e, 0, [], (i = i || {}).sectionTags || [])
    }, t.cache = {}, t.cacheKey = function(t, e) {
        return [t, !!e.asString, !!e.disableLambda, e.delimiters, !!e.modelGet].join("||")
    }, t.compile = function(e, n) {
        n = n || {};
        var i = t.cacheKey(e, n),
            s = this.cache[i];
        return s || (s = this.generate(this.parse(this.scan(e, n.delimiters), e, n), e, n), this.cache[i] = s)
    }
}("undefined" != typeof exports ? exports : Hogan), "undefined" != typeof module && module.exports && (module.exports = Hogan),
    function(t) {
        var e = function() {
                "use strict";
                return {
                    isMsie: function() {
                        return !!/(msie|trident)/i.test(navigator.userAgent) && navigator.userAgent.match(/(msie |rv:)(\d+(.\d+)?)/i)[2]
                    },
                    isBlankString: function(t) {
                        return !t || /^\s*$/.test(t)
                    },
                    escapeRegExChars: function(t) {
                        return t.replace(/[\-\[\]\/\{\}\(\)\*\+\?\.\\\^\$\|]/g, "\\$&")
                    },
                    isString: function(t) {
                        return "string" == typeof t
                    },
                    isNumber: function(t) {
                        return "number" == typeof t
                    },
                    isArray: t.isArray,
                    isFunction: t.isFunction,
                    isObject: t.isPlainObject,
                    isUndefined: function(t) {
                        return void 0 === t
                    },
                    toStr: function(t) {
                        return e.isUndefined(t) || null === t ? "" : t + ""
                    },
                    bind: t.proxy,
                    each: function(e, n) {
                        t.each(e, function(t, e) {
                            return n(e, t)
                        })
                    },
                    map: t.map,
                    filter: t.grep,
                    every: function(e, n) {
                        var i = !0;
                        return e ? (t.each(e, function(t, s) {
                            if (!(i = n.call(null, s, t, e))) return !1
                        }), !!i) : i
                    },
                    some: function(e, n) {
                        var i = !1;
                        return e ? (t.each(e, function(t, s) {
                            if (i = n.call(null, s, t, e)) return !1
                        }), !!i) : i
                    },
                    mixin: t.extend,
                    getUniqueId: (n = 0, function() {
                        return n++
                    }),
                    templatify: function(e) {
                        return t.isFunction(e) ? e : function() {
                            return String(e)
                        }
                    },
                    defer: function(t) {
                        setTimeout(t, 0)
                    },
                    debounce: function(t, e, n) {
                        var i, s;
                        return function() {
                            var r, o, a = this,
                                u = arguments;
                            return r = function() {
                                i = null, n || (s = t.apply(a, u))
                            }, o = n && !i, clearTimeout(i), i = setTimeout(r, e), o && (s = t.apply(a, u)), s
                        }
                    },
                    throttle: function(t, e) {
                        var n, i, s, r, o, a;
                        return o = 0, a = function() {
                                o = new Date, s = null, r = t.apply(n, i)
                            },
                            function() {
                                var u = new Date,
                                    c = e - (u - o);
                                return n = this, i = arguments, c <= 0 ? (clearTimeout(s), s = null, o = u, r = t.apply(n, i)) : s || (s = setTimeout(a, c)), r
                            }
                    },
                    noop: function() {}
                };
                var n
            }(),
            n = "0.10.4",
            i = function() {
                "use strict";
                return {
                    nonword: n,
                    whitespace: t,
                    obj: {
                        nonword: i(n),
                        whitespace: i(t)
                    }
                };

                function t(t) {
                    return (t = e.toStr(t)) ? t.split(/\s+/) : []
                }

                function n(t) {
                    return (t = e.toStr(t)) ? t.split(/\W+/) : []
                }

                function i(t) {
                    return function() {
                        var n = [].slice.call(arguments, 0);
                        return function(i) {
                            var s = [];
                            return e.each(n, function(n) {
                                s = s.concat(t(e.toStr(i[n])))
                            }), s
                        }
                    }
                }
            }(),
            s = function() {
                "use strict";

                function n(n) {
                    this.maxSize = e.isNumber(n) ? n : 100, this.reset(), this.maxSize <= 0 && (this.set = this.get = t.noop)
                }

                function i() {
                    this.head = this.tail = null
                }

                function s(t, e) {
                    this.key = t, this.val = e, this.prev = this.next = null
                }
                return e.mixin(n.prototype, {
                    set: function(t, e) {
                        var n, i = this.list.tail;
                        this.size >= this.maxSize && (this.list.remove(i), delete this.hash[i.key]), (n = this.hash[t]) ? (n.val = e, this.list.moveToFront(n)) : (n = new s(t, e), this.list.add(n), this.hash[t] = n, this.size++)
                    },
                    get: function(t) {
                        var e = this.hash[t];
                        if (e) return this.list.moveToFront(e), e.val
                    },
                    reset: function() {
                        this.size = 0, this.hash = {}, this.list = new i
                    }
                }), e.mixin(i.prototype, {
                    add: function(t) {
                        this.head && (t.next = this.head, this.head.prev = t), this.head = t, this.tail = this.tail || t
                    },
                    remove: function(t) {
                        t.prev ? t.prev.next = t.next : this.head = t.next, t.next ? t.next.prev = t.prev : this.tail = t.prev
                    },
                    moveToFront: function(t) {
                        this.remove(t), this.add(t)
                    }
                }), n
            }(),
            r = function() {
                "use strict";
                var t, n;
                try {
                    (t = window.localStorage).setItem("~~~", "!"), t.removeItem("~~~")
                } catch (e) {
                    t = null
                }

                function i(t) {
                    this.prefix = ["__", t, "__"].join(""), this.ttlKey = "__ttl__", this.keyMatcher = new RegExp("^" + e.escapeRegExChars(this.prefix))
                }
                return n = t && window.JSON ? {
                    _prefix: function(t) {
                        return this.prefix + t
                    },
                    _ttlKey: function(t) {
                        return this._prefix(t) + this.ttlKey
                    },
                    get: function(e) {
                        return this.isExpired(e) && this.remove(e), o(t.getItem(this._prefix(e)))
                    },
                    set: function(n, i, o) {
                        return e.isNumber(o) ? t.setItem(this._ttlKey(n), r(s() + o)) : t.removeItem(this._ttlKey(n)), t.setItem(this._prefix(n), r(i))
                    },
                    remove: function(e) {
                        return t.removeItem(this._ttlKey(e)), t.removeItem(this._prefix(e)), this
                    },
                    clear: function() {
                        var e, n, i = [],
                            s = t.length;
                        for (e = 0; e < s; e++)(n = t.key(e)).match(this.keyMatcher) && i.push(n.replace(this.keyMatcher, ""));
                        for (e = i.length; e--;) this.remove(i[e]);
                        return this
                    },
                    isExpired: function(n) {
                        var i = o(t.getItem(this._ttlKey(n)));
                        return !!(e.isNumber(i) && s() > i)
                    }
                } : {
                    get: e.noop,
                    set: e.noop,
                    remove: e.noop,
                    clear: e.noop,
                    isExpired: e.noop
                }, e.mixin(i.prototype, n), i;

                function s() {
                    return (new Date).getTime()
                }

                function r(t) {
                    return JSON.stringify(e.isUndefined(t) ? null : t)
                }

                function o(t) {
                    return JSON.parse(t)
                }
            }(),
            o = function() {
                "use strict";
                var n = 0,
                    i = {},
                    r = 6,
                    o = new s(10);

                function a(n) {
                    var i;
                    n = n || {}, this.cancelled = !1, this.lastUrl = null, this._send = n.transport ? (i = n.transport, function(n, s) {
                        var r = t.Deferred();
                        return i(n, s, function(t) {
                            e.defer(function() {
                                r.resolve(t)
                            })
                        }, function(t) {
                            e.defer(function() {
                                r.reject(t)
                            })
                        }), r
                    }) : t.ajax, this._get = n.rateLimiter ? n.rateLimiter(this._get) : this._get, this._cache = !1 === n.cache ? new s(0) : o
                }
                return a.setMaxPendingRequests = function(t) {
                    r = t
                }, a.resetCache = function() {
                    o.reset()
                }, e.mixin(a.prototype, {
                    _get: function(t, e, s) {
                        var o, a = this;

                        function u(e) {
                            s && s(null, e), a._cache.set(t, e)
                        }

                        function c() {
                            s && s(!0)
                        }
                        this.cancelled || t !== this.lastUrl || ((o = i[t]) ? o.done(u).fail(c) : n < r ? (n++, i[t] = this._send(t, e).done(u).fail(c).always(function() {
                            n--, delete i[t], a.onDeckRequestArgs && (a._get.apply(a, a.onDeckRequestArgs), a.onDeckRequestArgs = null)
                        })) : this.onDeckRequestArgs = [].slice.call(arguments, 0))
                    },
                    get: function(t, n, i) {
                        var s;
                        return e.isFunction(n) && (i = n, n = {}), this.cancelled = !1, this.lastUrl = t, (s = this._cache.get(t)) ? e.defer(function() {
                            i && i(null, s)
                        }) : this._get(t, n, i), !!s
                    },
                    cancel: function() {
                        this.cancelled = !0
                    }
                }), a
            }(),
            a = function() {
                "use strict";

                function n(e) {
                    (e = e || {}).datumTokenizer && e.queryTokenizer || t.error("datumTokenizer and queryTokenizer are both required"), this.datumTokenizer = e.datumTokenizer, this.queryTokenizer = e.queryTokenizer, this.reset()
                }
                return e.mixin(n.prototype, {
                    bootstrap: function(t) {
                        this.datums = t.datums, this.trie = t.trie
                    },
                    add: function(t) {
                        var n = this;
                        t = e.isArray(t) ? t : [t], e.each(t, function(t) {
                            var s, r;
                            s = n.datums.push(t) - 1, r = i(n.datumTokenizer(t)), e.each(r, function(t) {
                                var e, i, r;
                                for (e = n.trie, i = t.split(""); r = i.shift();)(e = e.children[r] || (e.children[r] = {
                                    ids: [],
                                    children: {}
                                })).ids.push(s)
                            })
                        })
                    },
                    get: function(t) {
                        var n, s, r = this;
                        return n = i(this.queryTokenizer(t)), e.each(n, function(t) {
                            var e, n, i, o;
                            if (s && 0 === s.length) return !1;
                            for (e = r.trie, n = t.split(""); e && (i = n.shift());) e = e.children[i];
                            if (!e || 0 !== n.length) return s = [], !1;
                            o = e.ids.slice(0), s = s ? function(t, e) {
                                var n = 0,
                                    i = 0,
                                    s = [];
                                t = t.sort(a), e = e.sort(a);
                                var r = t.length,
                                    o = e.length;
                                for (; n < r && i < o;) t[n] < e[i] ? n++ : t[n] > e[i] ? i++ : (s.push(t[n]), n++, i++);
                                return s;

                                function a(t, e) {
                                    return t - e
                                }
                            }(s, o) : o
                        }), s ? e.map(function(t) {
                            for (var e = {}, n = [], i = 0, s = t.length; i < s; i++) e[t[i]] || (e[t[i]] = !0, n.push(t[i]));
                            return n
                        }(s), function(t) {
                            return r.datums[t]
                        }) : []
                    },
                    reset: function() {
                        this.datums = [], this.trie = {
                            ids: [],
                            children: {}
                        }
                    },
                    serialize: function() {
                        return {
                            datums: this.datums,
                            trie: this.trie
                        }
                    }
                }), n;

                function i(t) {
                    return t = e.filter(t, function(t) {
                        return !!t
                    }), t = e.map(t, function(t) {
                        return t.toLowerCase()
                    })
                }
            }(),
            u = function() {
                "use strict";
                return {
                    local: function(t) {
                        return t.local || null
                    },
                    prefetch: function(i) {
                        var s, r;
                        r = {
                            url: null,
                            thumbprint: "",
                            ttl: 864e5,
                            filter: null,
                            ajax: {}
                        }, (s = i.prefetch || null) && (s = e.isString(s) ? {
                            url: s
                        } : s, (s = e.mixin(r, s)).thumbprint = n + s.thumbprint, s.ajax.type = s.ajax.type || "GET", s.ajax.dataType = s.ajax.dataType || "json", !s.url && t.error("prefetch requires url to be set"));
                        return s
                    },
                    remote: function(n) {
                        var i, s;
                        s = {
                            url: null,
                            cache: !0,
                            wildcard: "%QUERY",
                            replace: null,
                            rateLimitBy: "debounce",
                            rateLimitWait: 300,
                            send: null,
                            filter: null,
                            ajax: {}
                        }, (i = n.remote || null) && (i = e.isString(i) ? {
                            url: i
                        } : i, (i = e.mixin(s, i)).rateLimiter = /^throttle$/i.test(i.rateLimitBy) ? (r = i.rateLimitWait, function(t) {
                            return e.throttle(t, r)
                        }) : function(t) {
                            return function(n) {
                                return e.debounce(n, t)
                            }
                        }(i.rateLimitWait), i.ajax.type = i.ajax.type || "GET", i.ajax.dataType = i.ajax.dataType || "json", delete i.rateLimitBy, delete i.rateLimitWait, !i.url && t.error("remote requires url to be set"));
                        var r;
                        return i
                    }
                }
            }();
        ! function(n) {
            "use strict";
            var s, c;

            function l(n) {
                n && (n.local || n.prefetch || n.remote) || t.error("one of local, prefetch, or remote is required"), this.limit = n.limit || 5, this.sorter = function(t) {
                    return e.isFunction(t) ? function(e) {
                        return e.sort(t)
                    } : function(t) {
                        return t
                    }
                }(n.sorter), this.dupDetector = n.dupDetector || h, this.local = u.local(n), this.prefetch = u.prefetch(n), this.remote = u.remote(n), this.cacheKey = this.prefetch ? this.prefetch.cacheKey || this.prefetch.url : null, this.index = new a({
                    datumTokenizer: n.datumTokenizer,
                    queryTokenizer: n.queryTokenizer
                }), this.storage = this.cacheKey ? new r(this.cacheKey) : null
            }
            return s = n.Bloodhound, c = {
                data: "data",
                protocol: "protocol",
                thumbprint: "thumbprint"
            }, n.Bloodhound = l, l.noConflict = function() {
                return n.Bloodhound = s, l
            }, l.tokenizers = i, e.mixin(l.prototype, {
                _loadPrefetch: function(e) {
                    var n, i, s = this;
                    return (n = this._readFromStorage(e.thumbprint)) ? (this.index.bootstrap(n), i = t.Deferred().resolve()) : i = t.ajax(e.url, e.ajax).done(function(t) {
                        s.clear(), s.add(e.filter ? e.filter(t) : t), s._saveToStorage(s.index.serialize(), e.thumbprint, e.ttl)
                    }), i
                },
                _getFromRemote: function(t, e) {
                    var n, i, s = this;
                    if (this.transport) return t = t || "", i = encodeURIComponent(t), n = this.remote.replace ? this.remote.replace(this.remote.url, t) : this.remote.url.replace(this.remote.wildcard, i), this.transport.get(n, this.remote.ajax, function(t, n) {
                        e(t ? [] : s.remote.filter ? s.remote.filter(n) : n)
                    })
                },
                _cancelLastRemoteRequest: function() {
                    this.transport && this.transport.cancel()
                },
                _saveToStorage: function(t, e, n) {
                    this.storage && (this.storage.set(c.data, t, n), this.storage.set(c.protocol, location.protocol, n), this.storage.set(c.thumbprint, e, n))
                },
                _readFromStorage: function(t) {
                    var e, n = {};
                    return this.storage && (n.data = this.storage.get(c.data), n.protocol = this.storage.get(c.protocol), n.thumbprint = this.storage.get(c.thumbprint)), e = n.thumbprint !== t || n.protocol !== location.protocol, n.data && !e ? n.data : null
                },
                _initialize: function() {
                    var n, i = this,
                        s = this.local;
                    return n = this.prefetch ? this._loadPrefetch(this.prefetch) : t.Deferred().resolve(), s && n.done(function() {
                        i.add(e.isFunction(s) ? s() : s)
                    }), this.transport = this.remote ? new o(this.remote) : null, this.initPromise = n.promise()
                },
                initialize: function(t) {
                    return !this.initPromise || t ? this._initialize() : this.initPromise
                },
                add: function(t) {
                    this.index.add(t)
                },
                get: function(t, n) {
                    var i = this,
                        s = [],
                        r = !1;
                    s = this.index.get(t), (s = this.sorter(s).slice(0, this.limit)).length < this.limit ? r = this._getFromRemote(t, function(t) {
                        var r = s.slice(0);
                        e.each(t, function(t) {
                            return !e.some(r, function(e) {
                                return i.dupDetector(t, e)
                            }) && r.push(t), r.length < i.limit
                        }), n && n(i.sorter(r))
                    }) : this._cancelLastRemoteRequest(), r || (s.length > 0 || !this.transport) && n && n(s)
                },
                clear: function() {
                    this.index.reset()
                },
                clearPrefetchCache: function() {
                    this.storage && this.storage.clear()
                },
                clearRemoteCache: function() {
                    this.transport && o.resetCache()
                },
                ttAdapter: function() {
                    return e.bind(this.get, this)
                }
            }), l;

            function h() {
                return !1
            }
        }(this);
        var c = {
                wrapper: '<span class="twitter-typeahead"></span>',
                dropdown: '<span class="tt-dropdown-menu"></span>',
                dataset: '<div class="algolia-dataset tt-dataset-%CLASS%"></div>',
                suggestions: '<span class="tt-suggestions"></span>',
                suggestion: '<div class="tt-suggestion"></div>'
            },
            l = function() {
                "use strict";
                var t = {
                    wrapper: {
                        position: "relative",
                        display: "inline-block"
                    },
                    hint: {
                        position: "absolute",
                        top: "0",
                        left: "0",
                        borderColor: "transparent",
                        boxShadow: "none",
                        opacity: "1"
                    },
                    input: {
                        position: "relative",
                        verticalAlign: "top",
                        backgroundColor: "transparent"
                    },
                    inputWithNoHint: {
                        position: "relative",
                        verticalAlign: "top"
                    },
                    dropdown: {
                        position: "absolute",
                        top: "100%",
                        left: "0",
                        zIndex: "100",
                        display: "none"
                    },
                    suggestions: {
                        display: "block"
                    },
                    suggestion: {
                        whiteSpace: "nowrap",
                        cursor: "pointer"
                    },
                    suggestionChild: {
                        whiteSpace: "normal"
                    },
                    ltr: {
                        left: "0",
                        right: "auto"
                    },
                    rtl: {
                        left: "auto",
                        right: " 0"
                    }
                };
                return e.isMsie() && e.mixin(t.input, {
                    backgroundImage: "url(data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7)"
                }), e.isMsie() && e.isMsie() <= 7 && e.mixin(t.input, {
                    marginTop: "-1px"
                }), t
            }(),
            h = function() {
                "use strict";

                function n(e) {
                    e && e.el || t.error("EventBus initialized without el"), this.$el = t(e.el)
                }
                return e.mixin(n.prototype, {
                    trigger: function(t) {
                        var e = [].slice.call(arguments, 1);
                        this.$el.trigger("typeahead:" + t, e)
                    }
                }), n
            }(),
            p = function() {
                "use strict";
                var t = /\s+/,
                    e = function() {
                        var t;
                        t = window.setImmediate ? function(t) {
                            setImmediate(function() {
                                t()
                            })
                        } : function(t) {
                            setTimeout(function() {
                                t()
                            }, 0)
                        };
                        return t
                    }();
                return {
                    onSync: function(t, e, i) {
                        return n.call(this, "sync", t, e, i)
                    },
                    onAsync: function(t, e, i) {
                        return n.call(this, "async", t, e, i)
                    },
                    off: function(e) {
                        var n;
                        if (!this._callbacks) return this;
                        e = e.split(t);
                        for (; n = e.shift();) delete this._callbacks[n];
                        return this
                    },
                    trigger: function(n) {
                        var s, r, o, a, u;
                        if (!this._callbacks) return this;
                        n = n.split(t), o = [].slice.call(arguments, 1);
                        for (;
                            (s = n.shift()) && (r = this._callbacks[s]);) a = i(r.sync, this, [s].concat(o)), u = i(r.async, this, [s].concat(o)), a() && e(u);
                        return this
                    }
                };

                function n(e, n, i, s) {
                    var r;
                    if (!i) return this;
                    for (n = n.split(t), i = s ? function(t, e) {
                            return t.bind ? t.bind(e) : function() {
                                t.apply(e, [].slice.call(arguments, 0))
                            }
                        }(i, s) : i, this._callbacks = this._callbacks || {}; r = n.shift();) this._callbacks[r] = this._callbacks[r] || {
                        sync: [],
                        async: []
                    }, this._callbacks[r][e].push(i);
                    return this
                }

                function i(t, e, n) {
                    return function() {
                        for (var i, s = 0, r = t.length; !i && s < r; s += 1) i = !1 === t[s].apply(e, n);
                        return !i
                    }
                }
            }(),
            d = function(t) {
                "use strict";
                var n = {
                    node: null,
                    pattern: null,
                    tagName: "strong",
                    className: null,
                    wordsOnly: !1,
                    caseSensitive: !1
                };
                return function(i) {
                    var s;
                    (i = e.mixin({}, n, i)).node && i.pattern && (i.pattern = e.isArray(i.pattern) ? i.pattern : [i.pattern], s = function(t, n, i) {
                        for (var s, r = [], o = 0, a = t.length; o < a; o++) r.push(e.escapeRegExChars(t[o]));
                        return s = i ? "\\b(" + r.join("|") + ")\\b" : "(" + r.join("|") + ")", n ? new RegExp(s) : new RegExp(s, "i")
                    }(i.pattern, i.caseSensitive, i.wordsOnly), function t(e, n) {
                        var i;
                        for (var s = 0; s < e.childNodes.length; s++) 3 === (i = e.childNodes[s]).nodeType ? s += n(i) ? 1 : 0 : t(i, n)
                    }(i.node, function(e) {
                        var n, r, o;
                        (n = s.exec(e.data)) && (o = t.createElement(i.tagName), i.className && (o.className = i.className), (r = e.splitText(n.index)).splitText(n[0].length), o.appendChild(r.cloneNode(!0)), e.parentNode.replaceChild(o, r));
                        return !!n
                    }))
                }
            }(window.document),
            f = function() {
                "use strict";
                var n;

                function i(i) {
                    var s, r, o, a, u, c = this;
                    (i = i || {}).input || t.error("input is missing"), s = e.bind(this._onBlur, this), r = e.bind(this._onFocus, this), o = e.bind(this._onKeydown, this), a = e.bind(this._onInput, this), this.$hint = t(i.hint), this.$input = t(i.input).on("blur.tt", s).on("focus.tt", r).on("keydown.tt", o), 0 === this.$hint.length && (this.setHint = this.getHint = this.clearHint = this.clearHintIfInvalid = e.noop), e.isMsie() ? this.$input.on("keydown.tt keypress.tt cut.tt paste.tt", function(t) {
                        n[t.which || t.keyCode] || e.defer(e.bind(c._onInput, c, t))
                    }) : this.$input.on("input.tt", a), this.query = this.$input.val(), this.$overflowHelper = (u = this.$input, t('<pre aria-hidden="true"></pre>').css({
                        position: "absolute",
                        visibility: "hidden",
                        whiteSpace: "pre",
                        fontFamily: u.css("font-family"),
                        fontSize: u.css("font-size"),
                        fontStyle: u.css("font-style"),
                        fontVariant: u.css("font-variant"),
                        fontWeight: u.css("font-weight"),
                        wordSpacing: u.css("word-spacing"),
                        letterSpacing: u.css("letter-spacing"),
                        textIndent: u.css("text-indent"),
                        textRendering: u.css("text-rendering"),
                        textTransform: u.css("text-transform")
                    }).insertAfter(u))
                }
                return n = {
                    9: "tab",
                    27: "esc",
                    37: "left",
                    39: "right",
                    13: "enter",
                    38: "up",
                    40: "down"
                }, i.normalizeQuery = function(t) {
                    return (t || "").replace(/^\s*/g, "").replace(/\s{2,}/g, " ")
                }, e.mixin(i.prototype, p, {
                    _onBlur: function() {
                        this.resetInputValue(), this.trigger("blurred")
                    },
                    _onFocus: function() {
                        this.trigger("focused")
                    },
                    _onKeydown: function(t) {
                        var e = n[t.which || t.keyCode];
                        this._managePreventDefault(e, t), e && this._shouldTrigger(e, t) && this.trigger(e + "Keyed", t)
                    },
                    _onInput: function() {
                        this._checkInputValue()
                    },
                    _managePreventDefault: function(t, e) {
                        var n, i, r;
                        switch (t) {
                            case "tab":
                                i = this.getHint(), r = this.getInputValue(), n = i && i !== r && !s(e);
                                break;
                            case "up":
                            case "down":
                                n = !s(e);
                                break;
                            default:
                                n = !1
                        }
                        n && e.preventDefault()
                    },
                    _shouldTrigger: function(t, e) {
                        var n;
                        switch (t) {
                            case "tab":
                                n = !s(e);
                                break;
                            default:
                                n = !0
                        }
                        return n
                    },
                    _checkInputValue: function() {
                        var t, e, n, s, r;
                        (t = this.getInputValue()) && (t = t.replace(/[^a-z0-9]/gim, " ").replace(/\s+/g, " ")), s = t, r = this.query, n = !!(e = i.normalizeQuery(s) === i.normalizeQuery(r)) && this.query.length !== t.length, this.query = t, e ? n && this.trigger("whitespaceChanged", this.query) : this.trigger("queryChanged", this.query)
                    },
                    focus: function() {
                        this.$input.focus()
                    },
                    blur: function() {
                        this.$input.blur()
                    },
                    getQuery: function() {
                        return this.query
                    },
                    setQuery: function(t) {
                        this.query = t
                    },
                    getInputValue: function() {
                        return this.$input.val()
                    },
                    setInputValue: function(t, e) {
                        this.$input.val(t), e ? this.clearHint() : this._checkInputValue()
                    },
                    resetInputValue: function() {
                        this.setInputValue(this.query, !0)
                    },
                    getHint: function() {
                        return this.$hint.val()
                    },
                    setHint: function(t) {
                        this.$hint.val(t)
                    },
                    clearHint: function() {
                        this.setHint("")
                    },
                    clearHintIfInvalid: function() {
                        var t, e, n;
                        n = (t = this.getInputValue()) !== (e = this.getHint()) && 0 === e.indexOf(t), !("" !== t && n && !this.hasOverflow()) && this.clearHint()
                    },
                    getLanguageDirection: function() {
                        return (this.$input.css("direction") || "ltr").toLowerCase()
                    },
                    hasOverflow: function() {
                        var t = this.$input.width() - 2;
                        return this.$overflowHelper.text(this.getInputValue()), this.$overflowHelper.width() >= t
                    },
                    isCursorAtEnd: function() {
                        var t, n, i;
                        return t = this.$input.val().length, n = this.$input[0].selectionStart, e.isNumber(n) ? n === t : !document.selection || ((i = document.selection.createRange()).moveStart("character", -t), t === i.text.length)
                    },
                    destroy: function() {
                        this.$hint.off(".tt"), this.$input.off(".tt"), this.$hint = this.$input = this.$overflowHelper = null
                    }
                }), i;

                function s(t) {
                    return t.altKey || t.ctrlKey || t.metaKey || t.shiftKey
                }
            }(),
            g = function() {
                "use strict";
                var n = "ttDataset",
                    i = "ttValue",
                    s = "ttDatum";

                function r(n) {
                    var i;
                    (n = n || {}).templates = n.templates || {}, n.source || t.error("missing source"), n.name && (i = n.name, !/^[_a-zA-Z0-9-]+$/.test(i)) && t.error("invalid dataset name: " + n.name), this.query = null, this.highlight = !!n.highlight, this.name = n.name || e.getUniqueId(), this.source = n.source, this.displayFn = function(t) {
                        return t = t || "value", e.isFunction(t) ? t : function(e) {
                            return e[t]
                        }
                    }(n.display || n.displayKey), this.templates = function(t, n) {
                        return {
                            empty: t.empty && e.templatify(t.empty),
                            header: t.header && e.templatify(t.header),
                            footer: t.footer && e.templatify(t.footer),
                            suggestion: t.suggestion || function(t) {
                                return "<p>" + n(t) + "</p>"
                            }
                        }
                    }(n.templates, this.displayFn), this.$el = t(c.dataset.replace("%CLASS%", this.name)), this.hasSuggestions = !1
                }
                return r.extractDatasetName = function(e) {
                    return t(e).data(n)
                }, r.extractValue = function(e) {
                    return t(e).data(i)
                }, r.extractDatum = function(e) {
                    return t(e).data(s)
                }, e.mixin(r.prototype, p, {
                    _render: function(r, o) {
                        if (this.$el) {
                            var a, u = this;
                            this.$el.empty(), this.hasSuggestions = a = o && o.length, !a && this.templates.empty ? this.$el.html(u.templates.empty({
                                query: r,
                                isEmpty: !0
                            })).prepend(u.templates.header ? h() : null).append(u.templates.footer ? p() : null) : a && this.$el.html(function() {
                                var a, h;
                                return a = t(c.suggestions).css(l.suggestions), h = e.map(o, function(e) {
                                    var r;
                                    return (r = t(c.suggestion).append(u.templates.suggestion(e)).data(n, u.name).data(i, u.displayFn(e)).data(s, e)).children().each(function() {
                                        t(this).css(l.suggestionChild)
                                    }), r
                                }), a.append.apply(a, h), u.highlight && d({
                                    className: "tt-highlight",
                                    node: a[0],
                                    pattern: r
                                }), a
                            }()).prepend(u.templates.header ? h() : null).append(u.templates.footer ? p() : null), this.trigger("rendered")
                        }

                        function h() {
                            return u.templates.header({
                                query: r,
                                isEmpty: !a
                            })
                        }

                        function p() {
                            return u.templates.footer({
                                query: r,
                                isEmpty: !a
                            })
                        }
                    },
                    getRoot: function() {
                        return this.$el
                    },
                    update: function(t) {
                        var e = this;
                        this.query = t, this.canceled = !1, this.source(t, function(n) {
                            e.canceled || t !== e.query || e._render(t, n)
                        })
                    },
                    cancel: function() {
                        this.canceled = !0
                    },
                    clear: function() {
                        this.cancel(), this.$el.empty(), this.trigger("rendered")
                    },
                    isEmpty: function() {
                        return this.$el.is(":empty")
                    },
                    destroy: function() {
                        this.$el = null
                    }
                }), r
            }(),
            m = function() {
                "use strict";

                function n(n) {
                    var s, r, o, a = this;
                    (n = n || {}).menu || t.error("menu is required"), this.isOpen = !1, this.isEmpty = !0, this.datasets = e.map(n.datasets, i), this.templates = n.templates, s = e.bind(this._onSuggestionClick, this), r = e.bind(this._onSuggestionMouseEnter, this), o = e.bind(this._onSuggestionMouseLeave, this), this.$menu = t(n.menu).on("click.tt", ".tt-suggestion", s).on("mouseenter.tt", ".tt-suggestion", r).on("mouseleave.tt", ".tt-suggestion", o), e.each(this.datasets, function(t) {
                        a.$menu.append(t.getRoot()), t.onSync("rendered", a._onRendered, a)
                    })
                }
                return e.mixin(n.prototype, p, {
                    _onSuggestionClick: function(e) {
                        this.trigger("suggestionClicked", t(e.currentTarget))
                    },
                    _onSuggestionMouseEnter: function(e) {
                        this._removeCursor(), this._setCursor(t(e.currentTarget), !0)
                    },
                    _onSuggestionMouseLeave: function() {
                        this._removeCursor()
                    },
                    _onRendered: function() {
                        this.isEmpty = e.every(this.datasets, function(t) {
                            return t.isEmpty()
                        }), this.isEmpty ? this._hide() : this.isOpen && this._show(), this.trigger("datasetRendered")
                    },
                    _hide: function() {
                        this.$menu.hide()
                    },
                    _show: function() {
                        this.$menu.css("display", "block")
                    },
                    _getSuggestions: function() {
                        return this.$menu.find(".tt-suggestion")
                    },
                    _getCursor: function() {
                        return this.$menu.find(".tt-cursor").first()
                    },
                    _setCursor: function(t, e) {
                        t.first().addClass("tt-cursor"), !e && this.trigger("cursorMoved")
                    },
                    _removeCursor: function() {
                        this._getCursor().removeClass("tt-cursor")
                    },
                    _moveCursor: function(t) {
                        var e, n, i, s;
                        this.isOpen && (n = this._getCursor(), e = this._getSuggestions(), this._removeCursor(), -1 !== (i = ((i = e.index(n) + t) + 1) % (e.length + 1) - 1) ? (i < -1 && (i = e.length - 1), this._setCursor(s = e.eq(i)), this._ensureVisible(s)) : this.trigger("cursorRemoved"))
                    },
                    _ensureVisible: function(t) {
                        var e, n, i, s;
                        n = (e = t.position().top) + t.outerHeight(!0), i = this.$menu.scrollTop(), s = this.$menu.height() + parseInt(this.$menu.css("paddingTop"), 10) + parseInt(this.$menu.css("paddingBottom"), 10), e < 0 ? this.$menu.scrollTop(i + e) : s < n && this.$menu.scrollTop(i + (n - s))
                    },
                    close: function() {
                        this.isOpen && (this.isOpen = !1, this._removeCursor(), this._hide(), this.trigger("closed"))
                    },
                    open: function() {
                        this.isOpen || (this.isOpen = !0, !this.isEmpty && this._show(), this.trigger("opened"))
                    },
                    setLanguageDirection: function(t) {
                        this.$menu.css("ltr" === t ? l.ltr : l.rtl)
                    },
                    moveCursorUp: function() {
                        this._moveCursor(-1)
                    },
                    moveCursorDown: function() {
                        this._moveCursor(1)
                    },
                    getDatumForSuggestion: function(t) {
                        var e = null;
                        return t.length && (e = {
                            raw: g.extractDatum(t),
                            value: g.extractValue(t),
                            datasetName: g.extractDatasetName(t)
                        }), e
                    },
                    getDatumForCursor: function() {
                        return this.getDatumForSuggestion(this._getCursor().first())
                    },
                    getDatumForTopSuggestion: function() {
                        return this.getDatumForSuggestion(this._getSuggestions().first())
                    },
                    update: function(t) {
                        e.each(this.datasets, function(e) {
                            e.update(t)
                        });
                        var n = !0;
                        e.each(this.datasets, function(t) {
                            t.hasSuggestions > 0 && (n = !1)
                        }), n && this.templates && this.templates.empty && this.renderGlobalEmpty()
                    },
                    renderGlobalEmpty: function() {
                        var t = this.datasets[0];
                        t.$el && (t.$el.empty(), t.$el.html(function(t) {
                            return t.templates.empty
                        }(this)), t.trigger("rendered"))
                    },
                    empty: function() {
                        e.each(this.datasets, function(t) {
                            t.clear()
                        }), this.isEmpty = !0
                    },
                    isVisible: function() {
                        return this.isOpen && !this.isEmpty
                    },
                    destroy: function() {
                        this.$menu.off(".tt"), this.$menu = null, e.each(this.datasets, function(t) {
                            t.destroy()
                        })
                    }
                }), n;

                function i(t) {
                    return new g(t)
                }
            }(),
            v = function() {
                "use strict";
                var n = "ttAttrs";

                function i(i) {
                    var s, r, o, a;
                    (i = i || {}).input || t.error("missing input"), this.isActivated = !1, this.autoselect = !!i.autoselect, this.minLength = e.isNumber(i.minLength) ? i.minLength : 1, this.templates = e.isObject(i.templates) ? {
                        empty: (a = i.templates).empty && e.templatify(a.empty),
                        header: a.header && e.templatify(a.header),
                        footer: a.footer && e.templatify(a.footer)
                    } : {}, this.$node = function(e, i) {
                        var s, r, o, a;
                        s = t(e), r = t(c.wrapper).css(l.wrapper), o = t(c.dropdown).css(l.dropdown), (a = s.clone().css(l.hint).css((u = s, {
                            backgroundAttachment: u.css("background-attachment"),
                            backgroundClip: u.css("background-clip"),
                            backgroundColor: u.css("background-color"),
                            backgroundImage: u.css("background-image"),
                            backgroundOrigin: u.css("background-origin"),
                            backgroundPosition: u.css("background-position"),
                            backgroundRepeat: u.css("background-repeat"),
                            backgroundSize: u.css("background-size")
                        }))).val("").removeData().addClass("tt-hint").removeAttr("id name placeholder required").prop("readonly", !0).attr({
                            autocomplete: "off",
                            spellcheck: "false",
                            tabindex: -1
                        }), s.data(n, {
                            dir: s.attr("dir"),
                            autocomplete: s.attr("autocomplete"),
                            spellcheck: s.attr("spellcheck"),
                            style: s.attr("style")
                        }), s.addClass("tt-input").attr({
                            autocomplete: "off",
                            spellcheck: !1
                        }).css(i ? l.input : l.inputWithNoHint);
                        var u;
                        try {
                            !s.attr("dir") && s.attr("dir", "auto")
                        } catch (t) {}
                        return s.wrap(r).parent().prepend(i ? a : null).append(o)
                    }(i.input, i.withHint), s = this.$node.find(".tt-dropdown-menu"), r = this.$node.find(".tt-input"), o = this.$node.find(".tt-hint"), r.on("blur.tt", function(t) {
                        var n, i, o;
                        n = document.activeElement, i = s.is(n), o = s.has(n).length > 0, e.isMsie() && (i || o) && (t.preventDefault(), t.stopImmediatePropagation(), e.defer(function() {
                            r.focus()
                        }))
                    }), s.on("mousedown.tt", function(t) {
                        t.preventDefault()
                    }), this.eventBus = i.eventBus || new h({
                        el: r
                    }), this.dropdown = new m({
                        menu: s,
                        datasets: i.datasets,
                        templates: i.templates
                    }).onSync("suggestionClicked", this._onSuggestionClicked, this).onSync("cursorMoved", this._onCursorMoved, this).onSync("cursorRemoved", this._onCursorRemoved, this).onSync("opened", this._onOpened, this).onSync("closed", this._onClosed, this).onAsync("datasetRendered", this._onDatasetRendered, this), this.input = new f({
                        input: r,
                        hint: o
                    }).onSync("focused", this._onFocused, this).onSync("blurred", this._onBlurred, this).onSync("enterKeyed", this._onEnterKeyed, this).onSync("tabKeyed", this._onTabKeyed, this).onSync("escKeyed", this._onEscKeyed, this).onSync("upKeyed", this._onUpKeyed, this).onSync("downKeyed", this._onDownKeyed, this).onSync("leftKeyed", this._onLeftKeyed, this).onSync("rightKeyed", this._onRightKeyed, this).onSync("queryChanged", this._onQueryChanged, this).onSync("whitespaceChanged", this._onWhitespaceChanged, this), this._setLanguageDirection()
                }
                return e.mixin(i.prototype, {
                    _onSuggestionClicked: function(t, e) {
                        var n;
                        (n = this.dropdown.getDatumForSuggestion(e)) && this._select(n)
                    },
                    _onCursorMoved: function() {
                        var t = this.dropdown.getDatumForCursor();
                        this.input.setInputValue(t.value, !0), this.eventBus.trigger("cursorchanged", t.raw, t.datasetName)
                    },
                    _onCursorRemoved: function() {
                        this.input.resetInputValue(), this._updateHint()
                    },
                    _onDatasetRendered: function() {
                        this._updateHint(), this._updateDatasetBlocks()
                    },
                    _onOpened: function() {
                        this._updateHint(), this._updateDatasetMarkup(), this.eventBus.trigger("opened")
                    },
                    _onClosed: function() {
                        this.input.clearHint(), this.eventBus.trigger("closed")
                    },
                    _onFocused: function() {
                        this.isActivated = !0, this.dropdown.open()
                    },
                    _onBlurred: function() {
                        this.dealerinspire && this.dealerinspire.manages("blur") || (this.isActivated = !1, this.dropdown.empty(), this.dropdown.close())
                    },
                    _onEnterKeyed: function(t, e) {
                        var n, i;
                        n = this.dropdown.getDatumForCursor(), i = this.dropdown.getDatumForTopSuggestion(), n ? (this._select(n), e.preventDefault()) : this.autoselect && i && (this._select(i), e.preventDefault())
                    },
                    _onTabKeyed: function(t, e) {
                        var n;
                        (n = this.dropdown.getDatumForCursor()) ? (this._select(n), e.preventDefault()) : this._autocomplete(!0)
                    },
                    _onEscKeyed: function() {
                        this.dropdown.close(), this.input.resetInputValue()
                    },
                    _onUpKeyed: function() {
                        var t = this.input.getQuery();
                        this.dropdown.isEmpty && t.length >= this.minLength ? this.dropdown.update(t) : this.dropdown.moveCursorUp(), this.dropdown.open()
                    },
                    _onDownKeyed: function() {
                        var t = this.input.getQuery();
                        this.dropdown.isEmpty && t.length >= this.minLength ? this.dropdown.update(t) : this.dropdown.moveCursorDown(), this.dropdown.open()
                    },
                    _onLeftKeyed: function() {
                        "rtl" === this.dir && this._autocomplete()
                    },
                    _onRightKeyed: function() {
                        "ltr" === this.dir && this._autocomplete()
                    },
                    _onQueryChanged: function(t, e) {
                        this.input.clearHintIfInvalid(), e.length >= this.minLength ? this.dropdown.update(e) : this.dropdown.empty(), this.dropdown.open(), this._setLanguageDirection()
                    },
                    _onWhitespaceChanged: function() {
                        this._updateHint(), this.dropdown.open()
                    },
                    _setLanguageDirection: function() {
                        var t;
                        this.dir !== (t = this.input.getLanguageDirection()) && (this.dir = t, this.$node.css("direction", t), this.dropdown.setLanguageDirection(t))
                    },
                    _updateHint: function() {
                        var t, n, i, s, r;
                        (t = this.dropdown.getDatumForTopSuggestion()) && this.dropdown.isVisible() && !this.input.hasOverflow() ? (n = this.input.getInputValue(), i = f.normalizeQuery(n), s = e.escapeRegExChars(i), (r = new RegExp("^(?:" + s + ")(.+$)", "i").exec(t.value)) ? this.input.setHint(n + r[1]) : this.input.clearHint()) : this.input.clearHint()
                    },
                    _updateDatasetBlocks: function() {
                        ["email_addresses", "phone_numbers", "departmentHours", "pages"].forEach(function(t) {
                            var e = document.querySelector(".tt-dataset-" + t);
                            e && (e.style.display = "none", e.querySelectorAll(".tt-suggestions .tt-suggestion").forEach(function(t) {
                                "" !== t.innerHTML && (e.style.display = "block")
                            }))
                        })
                    },
                    _updateDatasetMarkup: function() {
                        this.dropdown.$menu[0].querySelectorAll(".tt-dataset-email_addresses").forEach(function(t, e) {
                            t.classList.add("tt-dataset-email")
                        }), this.dropdown.$menu[0].querySelectorAll(".tt-dataset-phone_numbers").forEach(function(t, e) {
                            t.classList.add("tt-dataset-phone")
                        })
                    },
                    _autocomplete: function(t) {
                        var e, n, i, s;
                        e = this.input.getHint(), n = this.input.getQuery(), i = t || this.input.isCursorAtEnd(), e && n !== e && i && ((s = this.dropdown.getDatumForTopSuggestion()) && this.input.setInputValue(s.value), this.eventBus.trigger("autocompleted", s.raw, s.datasetName))
                    },
                    _select: function(t) {
                        this.input.setQuery(t.value), this.input.setInputValue(t.value, !0), this._setLanguageDirection(), this.eventBus.trigger("selected", t.raw, t.datasetName), this.dropdown.close(), e.defer(e.bind(this.dropdown.empty, this.dropdown))
                    },
                    open: function() {
                        this.dropdown.open()
                    },
                    close: function() {
                        this.dropdown.close()
                    },
                    setVal: function(t) {
                        t = e.toStr(t), this.isActivated ? this.input.setInputValue(t) : (this.input.setQuery(t), this.input.setInputValue(t, !0)), this._setLanguageDirection()
                    },
                    getVal: function() {
                        return this.input.getQuery()
                    },
                    destroy: function() {
                        var t, i;
                        this.input.destroy(), this.dropdown.destroy(), t = this.$node, i = t.find(".tt-input"), e.each(i.data(n), function(t, n) {
                            e.isUndefined(t) ? i.removeAttr(n) : i.attr(n, t)
                        }), i.detach().removeData(n).removeClass("tt-input").insertAfter(t), t.remove(), this.$node = null
                    }
                }), i
            }();
        ! function() {
            "use strict";
            var n, i, s;
            n = t.fn.typeahead, i = "ttTypeahead", s = {
                initialize: function(n, s) {
                    return s = e.isArray(s) ? s : [].slice.call(arguments, 1), n = n || {}, this.each(function() {
                        var r, o = t(this);
                        e.each(s, function(t) {
                            t.highlight = !!n.highlight
                        }), (r = new v({
                            input: o,
                            eventBus: new h({
                                el: o
                            }),
                            withHint: !!e.isUndefined(n.hint) || !!n.hint,
                            minLength: n.minLength,
                            autoselect: n.autoselect,
                            datasets: s,
                            templates: n.sharedTemplates
                        })).dealerinspire = {
                            manage: [],
                            manages: function(t) {
                                return this.manage.indexOf(t) > -1
                            },
                            shouldManage: function(t) {
                                this.manages(t) || this.manage.push(t)
                            }
                        }, o.data(i, r), this.typeahead = r
                    })
                },
                open: function() {
                    return this.each(function() {
                        var e, n = t(this);
                        (e = n.data(i)) && e.open()
                    })
                },
                close: function() {
                    return this.each(function() {
                        var e, n = t(this);
                        (e = n.data(i)) && e.close()
                    })
                },
                val: function(e) {
                    return arguments.length ? this.each(function() {
                        var n, s = t(this);
                        (n = s.data(i)) && n.setVal(e)
                    }) : function(t) {
                        var e, n;
                        (e = t.data(i)) && (n = e.getVal());
                        return n
                    }(this.first())
                },
                destroy: function() {
                    return this.each(function() {
                        var e, n = t(this);
                        (e = n.data(i)) && (e.destroy(), n.removeData(i))
                    })
                }
            }, t.fn.typeahead = function(e) {
                var n;
                return s[e] && "initialize" !== e ? (n = this.filter(function() {
                    return !!t(this).data(i)
                }), s[e].apply(n, [].slice.call(arguments, 1))) : s.initialize.apply(this, arguments)
            }, t.fn.typeahead.noConflict = function() {
                return t.fn.typeahead = n, this
            }
        }()
    }(window.jQuery);
var mvnAlgoliaPrediction = function(t) {
    var e, n;
    return {
        initialize: function() {
            n = this, "undefined" != typeof AlgoliaSearch && this.initAlgolia()
        },
        initAlgolia: function() {
            var i = (e = new AlgoliaSearch(mvnAlgSettings.appId, mvnAlgSettings.apiKeySearch, "https")).initIndex(mvnAlgSettings.inventoryIndex),
                s = e.initIndex(mvnAlgSettings.contentIndex),
                r = (document.querySelector("html").getAttribute("lang"), mvnAlgSettings.im_noprice_label),
                o = (mvnAlgSettings.commonThemeFolder, mvnAlgSettings.pricing_field),
                a = "";
            mvnAlgSettings.freetextInventorySearch && (a = '<div class="inventory-freetext-heading"></div>');
            var u = Hogan.compile('<a href="{{{ link }}}" class="focus-element"><div class="inventorySearchResult"><div class="imgContainer"><img src="{{{ thumbnail }}}"></div><div class="conetntSectionContainer"><div class="invTitle">{{{ _highlightResult.year.value }}} {{{ _highlightResult.make.value }}} {{{ _highlightResult.model.value }}} {{#trim}}<small>({{ trim }})</small>{{/trim}}</div><div class="invColor">{{{ _highlightResult.ext_color.value }}}</div><div class="clearfix"></div><div class="invPrice {{{priceExtraClass}}}">{{{ formattedPrice }}}</div><div class="invMiles">{{{ formatedMiles }}}</div><div class="invStock {{{stock}}}" style="display:none">{{{ stock }}}</div></div><div class="clearfix"></div></div></a>'),
                c = Hogan.compile('<a class="pageResultLink {{{ language_class }}} focus-element" href="{{{ permalink }}}"><div class="contentSearchResult">{{{iconImg}}}<span class="pageName">{{{ title }}}</span></div></a>'),
                l = Hogan.compile('<div class="contentResult contentEmailResult focus-element">{{{iconImg}}}<div><span class="name emailName">{{{ name }}}</span><span class="email resultData">{{{ email }}}</span></div></div>'),
                h = Hogan.compile('<a href="tel:{{{ number }}}" class="contentResult contentNumberResult focus-element">{{{iconImg}}}<div><span class="name phoneName lang-en">{{{ name }}}</span><span class="name phoneName lang-es">{{{ nameEs }}}</span><span class="name phoneName lang-fr">{{{ nameFr }}}</span><span class="number resultData">{{{ number }}}</span></div></a>'),
                p = Hogan.compile('<div class="contentResult contentDeptResult focus-element">{{{iconImg}}}<div><span class="name lang-en">{{{ departmentName }}}</span><span class="name lang-es">{{{ departmentNameEs }}}</span><span class="name lang-fr">{{{ departmentNameFr }}}</span>{{#hours}}<div class="hours-list resultData lang-en"><span class="days">{{{ days }}}:&nbsp;</span><span class="openTime">{{{ open }}} - </span><span class="closeTime">{{{ close }}}</span><span class="number resultDisclaimer">{{{ disclaimer }}}</span></div>{{/hours}}{{#hoursEs}}<div class="hours-list resultData lang-es"><span class="days">{{{ days }}}:&nbsp;</span><span class="openTime">{{{ open }}} - </span><span class="closeTime">{{{ close }}}</span><span class="number resultDisclaimer">{{{ disclaimerEs }}}</span></div>{{/hoursEs}}{{#hoursFr}}<div class="hours-list resultData lang-fr"><span class="days">{{{ days }}}:&nbsp;</span><span class="openTime">{{{ open }}} - </span><span class="closeTime">{{{ close }}}</span><span class="number resultDisclaimer">{{{ disclaimerFr }}}</span></div>{{/hoursFr}}</div></div>'),
                d = (Hogan.compile('<div class="contentResult focus-element">{{{ content }}}</div>'), {
                    container: "search-alg-typeahead-container"
                });
            t(".alg-searc-class").parents("form").on("submit", function(t) {
                t.preventDefault()
            });
            var f = new Bloodhound({
                datumTokenizer: function(t) {
                    return Bloodhound.tokenizers.whitespace(t.val)
                },
                queryTokenizer: Bloodhound.tokenizers.whitespace,
                local: []
            });
            f.initialize();
            var g = "";
            t.each(mvnAlgSearchVars.defaultPages, function(t, e) {
                g += c.render(e)
            }), t(".alg-searc-class").typeahead({
                hint: !1,
                selector: d
            }, [{
                selector: d,
                source: i.ttAdapter({
                    hitsPerPage: 15,
                    facetFilters: mvnAlgSettings.facetFilters,
                    removeStopWords: "en"
                }),
                name: "inventory",
                templates: {
                    header: function() {
                        if (a.length > 0) {
                            var e = t(".alg-searc-class").val().trim(),
                                n = mvnAlgSettings.freetextInventorySearchLinkBase + "#action=im_ajax_call&perform=get_results&search=" + encodeURIComponent(e) + "&page=1&show_all_filters=false",
                                i = t(a).append('<a href="' + n + "\">Show all vehicles matching '<b>" + e + "'</b></a>");
                            return '<div class="category catTitle">' + mvnAlgSearchVars.algSectionTitles.vehiclesTitle + "</div>" + t("<div/>").append(i).html()
                        }
                        return '<div class="category catTitle">' + mvnAlgSearchVars.algSectionTitles.vehiclesTitle + "</div>"
                    },
                    suggestion: function(t) {
                        return t[o] > 0 ? (t.priceExtraClass = "", t.formattedPrice = n.formatPrice(t[o])) : (t.priceExtraClass = "priceAsText", t.formattedPrice = r), t.formatedMiles = n.formatMiles(t.miles), t.link = n.formatMultiLingualLink(t.link, mvnAlgSettings.langCode), u.render(t)
                    }
                }
            }, {
                name: "email_addresses",
                source: s.ttAdapter({
                    hitsPerPage: 15
                }),
                templates: {
                    header: '<div class="category catTitle">' + mvnAlgSearchVars.algSectionTitles.emailAddressesTitle + "</div>",
                    suggestion: function(t) {
                        if (t && void 0 !== t.email) {
                            return t.iconImg = '<i class="fa fa-envelope-o"></i>', l.render(t)
                        }
                    }
                }
            }, {
                name: "phone_numbers",
                source: s.ttAdapter({
                    hitsPerPage: 15
                }),
                templates: {
                    header: '<div class="category catTitle">' + mvnAlgSearchVars.algSectionTitles.phoneNumbersTitle + "</div>",
                    suggestion: function(t) {
                        if (t && void 0 !== t.number) {
                            return t.iconImg = '<i class="fa fa-phone"></i>', h.render(t)
                        }
                    }
                }
            }, {
                name: "departmentHours",
                source: s.ttAdapter({
                    hitsPerPage: 15
                }),
                templates: {
                    header: '<div class="category catTitle">' + mvnAlgSearchVars.algSectionTitles.hoursTitle + "</div>",
                    suggestion: function(t) {
                        if (t && void 0 !== t.hours) {
                            return t.iconImg = '<i class="fa fa-clock-o"></i>', p.render(t)
                        }
                    }
                }
            }, {
                name: "pages",
                source: s.ttAdapter({
                    hitsPerPage: 15
                }),
                templates: {
                    header: '<div class="category catTitle">' + mvnAlgSearchVars.algSectionTitles.pagesTitle + "</div>",
                    suggestion: function(t) {
                        if (t && void 0 !== t.content) {
                            iconImg = "";
                            var e = n.getIconForPage(t.title);
                            return "" != e && (iconImg = e), t.iconImg = iconImg, c.render(t)
                        }
                    }
                }
            }, {
                name: "defaults",
                source: f.ttAdapter({
                    hitsPerPage: 10
                }),
                templates: {
                    header: '<div class="category catTitle">' + mvnAlgSearchVars.algSectionTitles.commonlySearchedTitle + "</div>",
                    empty: g
                }
            }])
        },
        getIconForPage: function(t) {
            if (t) {
                t = t.toLowerCase();
                for (var e = ["thank", "finder", "search", "order", "calculator", "contact", "directions", "financing", "schedule", "reviews", "testimonials", "service", "special", "staff", "coupons", "video", "part", "blog", "post", "gallery"], n = ['<i class="fa fa-thumbs-o-up fa-fw"></i>', '<i class="fa fa-search fa-fw"></i>', '<i class="fa fa-search fa-fw"></i>', '<i class="fa fa-paper-plane-o fa-fw"></i>', '<i class="fa fa-calculator fa-fw"></i>', '<i class="fa fa-comments-o fa-fw"></i>', '<i class="fa fa-map-marker fa-fw"></i>', '<i class="fa fa-check-circle-o fa-fw"></i>', '<i class="fa fa-calendar-o fa-fw"></i>', '<i class="fa fa-smile-o fa-fw"></i>', '<i class="fa fa-smile-o fa-fw"></i>', '<i class="fa fa-wrench fa-fw"></i>', '<i class="fa fa-tags fa-fw"></i>', '<i class="fa fa-users fa-fw"></i>', '<span class="glyphicon glyphicon-scissors"></span>', '<i class="fa fa-film fa-fw"></i>', '<i class="fa fa-cogs fa-fw"></i>', '<i class="fa fa-newspaper-o fa-fw"></i>', '<i class="fa fa-newspaper-o fa-fw"></i>', '<i class="fa fa-picture-o fa-fw"></i>'], i = 0; i < e.length; i++) {
                    if (-1 !== t.search(e[i])) return n[i]
                }
                return '<i class="fa fa-pencil-square-o"></i>'
            }
        },
        formatPrice: function(t) {
            if (0 != t) return "$" + parseFloat(t, 10).toString().replace(/(\d+)(?=(\d{3})+\.?)/g, "$1,")
        },
        formatMiles: function(t) {
            return t.length > 3 ? t.substring(0, t.length - 3) + "k " + mvnAlgSettings.mileageUnits : t + " " + mvnAlgSettings.mileageUnits
        },
        formatMultiLingualLink: function(t, e) {
            var n = new URL(t),
                i = n.protocol + "//" + n.host,
                s = n.pathname.split("/");
            return 1 == mvnAlgSettings.isMultilingual ? "inventory" === s[1] && (s[0] = e, t = i + "/" + s.join("/")) : "inventory" !== s[1] && (s[1] = e, t = i + s.join("/")), t
        },
        getThumbnailSrc: function(t, e) {
            var n = "";
            return t && void 0 !== t.sizes && void 0 !== t.sizes[e] && t.sizes[e].file && (n = t.sizes[e].file), n
        }
    }
}(jQuery);
jQuery(document).ready(function(t) {
    mvnAlgoliaPrediction.initialize()
});