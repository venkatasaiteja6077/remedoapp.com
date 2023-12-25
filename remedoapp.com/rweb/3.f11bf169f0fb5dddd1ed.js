(window.webpackJsonp = window.webpackJsonp || []).push([
    [3], {
        ARwZ: function(e, n, l) {
            var t = l("mrSG").__decorate,
                o = l("mrSG").__metadata;
            Object.defineProperty(n, "__esModule", {
                value: !0
            });
            var i = l("CcnG"),
                r = l("Ip0R"),
                u = l("gIcY");
            n.RATING_VALUE_ACCESSOR = {
                provide: u.NG_VALUE_ACCESSOR,
                useExisting: i.forwardRef((function() {
                    return a
                })),
                multi: !0
            };
            var a = function() {
                function e(e) {
                    this.cd = e, this.stars = 5, this.cancel = !0, this.iconOnClass = "pi pi-star", this.iconOffClass = "pi pi-star-o", this.iconCancelClass = "pi pi-ban", this.onRate = new i.EventEmitter, this.onCancel = new i.EventEmitter, this.onModelChange = function() {}, this.onModelTouched = function() {}
                }
                return e.prototype.ngOnInit = function() {
                    this.starsArray = [];
                    for (var e = 0; e < this.stars; e++) this.starsArray[e] = e
                }, e.prototype.rate = function(e, n) {
                    this.readonly || this.disabled || (this.value = n + 1, this.onModelChange(this.value), this.onModelTouched(), this.onRate.emit({
                        originalEvent: e,
                        value: n + 1
                    })), e.preventDefault()
                }, e.prototype.clear = function(e) {
                    this.readonly || this.disabled || (this.value = null, this.onModelChange(this.value), this.onModelTouched(), this.onCancel.emit(e)), e.preventDefault()
                }, e.prototype.writeValue = function(e) {
                    this.value = e, this.cd.detectChanges()
                }, e.prototype.registerOnChange = function(e) {
                    this.onModelChange = e
                }, e.prototype.registerOnTouched = function(e) {
                    this.onModelTouched = e
                }, e.prototype.setDisabledState = function(e) {
                    this.disabled = e
                }, t([i.Input(), o("design:type", Boolean)], e.prototype, "disabled", void 0), t([i.Input(), o("design:type", Boolean)], e.prototype, "readonly", void 0), t([i.Input(), o("design:type", Number)], e.prototype, "stars", void 0), t([i.Input(), o("design:type", Boolean)], e.prototype, "cancel", void 0), t([i.Input(), o("design:type", String)], e.prototype, "iconOnClass", void 0), t([i.Input(), o("design:type", Object)], e.prototype, "iconOnStyle", void 0), t([i.Input(), o("design:type", String)], e.prototype, "iconOffClass", void 0), t([i.Input(), o("design:type", Object)], e.prototype, "iconOffStyle", void 0), t([i.Input(), o("design:type", String)], e.prototype, "iconCancelClass", void 0), t([i.Input(), o("design:type", Object)], e.prototype, "iconCancelStyle", void 0), t([i.Output(), o("design:type", i.EventEmitter)], e.prototype, "onRate", void 0), t([i.Output(), o("design:type", i.EventEmitter)], e.prototype, "onCancel", void 0), t([i.Component({
                    selector: "p-rating",
                    template: '\n        <div class="ui-rating" [ngClass]="{\'ui-state-disabled\': disabled}">\n            <a [attr.tabindex]="disabled ? null : \'0\'" *ngIf="cancel" (click)="clear($event)" (keydown.enter)="clear($event)"  class="ui-rating-cancel">\n                <span class="ui-rating-icon" [ngClass]="iconCancelClass" [ngStyle]="iconCancelStyle"></span>\n            </a>\n            <a [attr.tabindex]="disabled ? null : \'0\'" *ngFor="let star of starsArray;let i=index" (click)="rate($event,i)" (keydown.enter)="rate($event,i)">\n                <span class="ui-rating-icon" \n                    [ngClass]="(!value || i >= value) ? iconOffClass : iconOnClass"\n                    [ngStyle]="(!value || i >= value) ? iconOffStyle : iconOnStyle"\n                ></span>\n            </a>\n        </div>\n    ',
                    providers: [n.RATING_VALUE_ACCESSOR]
                })], e)
            }();
            n.Rating = a, n.RatingModule = function() {
                return t([i.NgModule({
                    imports: [r.CommonModule],
                    exports: [a],
                    declarations: [a]
                })], (function() {}))
            }()
        },
        E5AT: function(e, n, l) {
            "use strict";
            l.d(n, "a", (function() {
                return i
            }));
            var t = l("CcnG"),
                o = l("AytR"),
                i = (l("N+K7"), function() {
                    function e(e, n, l, i, r) {
                        this.translate = e, this.location = n, this.router = l, this.route = i, this.httpService = r, this.onBackEvent = new t.EventEmitter, this.onLogout = new t.EventEmitter, this.falseDisableAll = new t.EventEmitter, this.domainUrl = "", this.imageDir = "", this.hostName = "", this.dropdownLanguages = [{
                            id: "en",
                            name: "English"
                        }, {
                            id: "hi",
                            name: "Hindi"
                        }], this.dropdownDefaultLanguage = "en", this.headerText = localStorage.getItem("head"), this.domainUrl = o.a.domainUrl, this.imageDir = o.a.imageDir, this.hostName = o.a.hostName, localStorage.defaultLanguage && this.setLanguage(localStorage.defaultLanguage), this.onGetProfile(), this.getRoutes()
                    }
                    return e.prototype.ngOnInit = function() {
                        this.url = this.router.url.split("/"), console.log("url===>", this.router.url.split("/")), this.ua = this.getAppcontainer()
                    }, e.prototype.getAppcontainer = function() {
                        var e = window.navigator.userAgent;
                        return /AppContainer/i.test(e)
                    }, e.prototype.setLanguage = function(e) {
                        console.log("Language selector: " + e), "" != e ? (this.translate.use(e), localStorage.setItem("defaultLanguage", e), this.dropdownDefaultLanguage = e) : (this.translate.use("en"), localStorage.setItem("defaultLanguage", "en"), this.dropdownDefaultLanguage = "en")
                    }, e.prototype.doLogout = function() {
                        console.info(this.isLogin), this.onLogout.emit()
                    }, e.prototype.onBack = function() {
                        this.isCustomBack ? this.onBackEvent.emit() : (this.falseDisableAll.emit(), this.location.back())
                    }, e.prototype.goToHelp = function() {
                        document.getElementById("target").scrollIntoView()
                    }, e.prototype.onGetProfile = function() {
                        var e = this;
                        this.httpService.fetchDoctorDetails(this.route.snapshot.params.doctorName).subscribe((function(n) {
                            var l = n.body[0].name.name.toString().split(" ");
                            e.username = l[0].slice(0, 1) + l[1].slice(0, 1), n.body[0].profile && n.body[0].profile.sefUrlV2 && (e.shareUrl = n.body[0].profile.sefUrlV2)
                        }), (function(e) {}))
                    }, e.prototype.getRoutes = function() {
                        var e = this;
                        this.route.queryParams.subscribe((function(n) {
                            e.paramRoutes = n
                        }))
                    }, e
                }())
        },
        EVdn: function(e, n, l) {
            var t;
            ! function(n, l) {
                "use strict";
                "object" == typeof e.exports ? e.exports = n.document ? l(n, !0) : function(e) {
                    if (!e.document) throw new Error("jQuery requires a window with a document");
                    return l(e)
                } : l(n)
            }("undefined" != typeof window ? window : this, (function(l, o) {
                "use strict";
                var i = [],
                    r = Object.getPrototypeOf,
                    u = i.slice,
                    a = i.flat ? function(e) {
                        return i.flat.call(e)
                    } : function(e) {
                        return i.concat.apply([], e)
                    },
                    s = i.push,
                    c = i.indexOf,
                    d = {},
                    f = d.toString,
                    p = d.hasOwnProperty,
                    h = p.toString,
                    g = h.call(Object),
                    v = {},
                    m = function(e) {
                        return "function" == typeof e && "number" != typeof e.nodeType && "function" != typeof e.item
                    },
                    y = function(e) {
                        return null != e && e === e.window
                    },
                    b = l.document,
                    x = {
                        type: !0,
                        src: !0,
                        nonce: !0,
                        noModule: !0
                    };

                function w(e, n, l) {
                    var t, o, i = (l = l || b).createElement("script");
                    if (i.text = e, n)
                        for (t in x)(o = n[t] || n.getAttribute && n.getAttribute(t)) && i.setAttribute(t, o);
                    l.head.appendChild(i).parentNode.removeChild(i)
                }

                function C(e) {
                    return null == e ? e + "" : "object" == typeof e || "function" == typeof e ? d[f.call(e)] || "object" : typeof e
                }
                var k = function(e, n) {
                    return new k.fn.init(e, n)
                };

                function T(e) {
                    var n = !!e && "length" in e && e.length,
                        l = C(e);
                    return !m(e) && !y(e) && ("array" === l || 0 === n || "number" == typeof n && n > 0 && n - 1 in e)
                }
                k.fn = k.prototype = {
                    jquery: "3.6.0",
                    constructor: k,
                    length: 0,
                    toArray: function() {
                        return u.call(this)
                    },
                    get: function(e) {
                        return null == e ? u.call(this) : e < 0 ? this[e + this.length] : this[e]
                    },
                    pushStack: function(e) {
                        var n = k.merge(this.constructor(), e);
                        return n.prevObject = this, n
                    },
                    each: function(e) {
                        return k.each(this, e)
                    },
                    map: function(e) {
                        return this.pushStack(k.map(this, (function(n, l) {
                            return e.call(n, l, n)
                        })))
                    },
                    slice: function() {
                        return this.pushStack(u.apply(this, arguments))
                    },
                    first: function() {
                        return this.eq(0)
                    },
                    last: function() {
                        return this.eq(-1)
                    },
                    even: function() {
                        return this.pushStack(k.grep(this, (function(e, n) {
                            return (n + 1) % 2
                        })))
                    },
                    odd: function() {
                        return this.pushStack(k.grep(this, (function(e, n) {
                            return n % 2
                        })))
                    },
                    eq: function(e) {
                        var n = this.length,
                            l = +e + (e < 0 ? n : 0);
                        return this.pushStack(l >= 0 && l < n ? [this[l]] : [])
                    },
                    end: function() {
                        return this.prevObject || this.constructor()
                    },
                    push: s,
                    sort: i.sort,
                    splice: i.splice
                }, k.extend = k.fn.extend = function() {
                    var e, n, l, t, o, i, r = arguments[0] || {},
                        u = 1,
                        a = arguments.length,
                        s = !1;
                    for ("boolean" == typeof r && (s = r, r = arguments[u] || {}, u++), "object" == typeof r || m(r) || (r = {}), u === a && (r = this, u--); u < a; u++)
                        if (null != (e = arguments[u]))
                            for (n in e) t = e[n], "__proto__" !== n && r !== t && (s && t && (k.isPlainObject(t) || (o = Array.isArray(t))) ? (l = r[n], i = o && !Array.isArray(l) ? [] : o || k.isPlainObject(l) ? l : {}, o = !1, r[n] = k.extend(s, i, t)) : void 0 !== t && (r[n] = t));
                    return r
                }, k.extend({
                    expando: "jQuery" + ("3.6.0" + Math.random()).replace(/\D/g, ""),
                    isReady: !0,
                    error: function(e) {
                        throw new Error(e)
                    },
                    noop: function() {},
                    isPlainObject: function(e) {
                        var n, l;
                        return !(!e || "[object Object]" !== f.call(e) || (n = r(e)) && ("function" != typeof(l = p.call(n, "constructor") && n.constructor) || h.call(l) !== g))
                    },
                    isEmptyObject: function(e) {
                        var n;
                        for (n in e) return !1;
                        return !0
                    },
                    globalEval: function(e, n, l) {
                        w(e, {
                            nonce: n && n.nonce
                        }, l)
                    },
                    each: function(e, n) {
                        var l, t = 0;
                        if (T(e))
                            for (l = e.length; t < l && !1 !== n.call(e[t], t, e[t]); t++);
                        else
                            for (t in e)
                                if (!1 === n.call(e[t], t, e[t])) break;
                        return e
                    },
                    makeArray: function(e, n) {
                        var l = n || [];
                        return null != e && (T(Object(e)) ? k.merge(l, "string" == typeof e ? [e] : e) : s.call(l, e)), l
                    },
                    inArray: function(e, n, l) {
                        return null == n ? -1 : c.call(n, e, l)
                    },
                    merge: function(e, n) {
                        for (var l = +n.length, t = 0, o = e.length; t < l; t++) e[o++] = n[t];
                        return e.length = o, e
                    },
                    grep: function(e, n, l) {
                        for (var t = [], o = 0, i = e.length, r = !l; o < i; o++) !n(e[o], o) !== r && t.push(e[o]);
                        return t
                    },
                    map: function(e, n, l) {
                        var t, o, i = 0,
                            r = [];
                        if (T(e))
                            for (t = e.length; i < t; i++) null != (o = n(e[i], i, l)) && r.push(o);
                        else
                            for (i in e) null != (o = n(e[i], i, l)) && r.push(o);
                        return a(r)
                    },
                    guid: 1,
                    support: v
                }), "function" == typeof Symbol && (k.fn[Symbol.iterator] = i[Symbol.iterator]), k.each("Boolean Number String Function Array Date RegExp Object Error Symbol".split(" "), (function(e, n) {
                    d["[object " + n + "]"] = n.toLowerCase()
                }));
                var _ = function(e) {
                    var n, l, t, o, i, r, u, a, s, c, d, f, p, h, g, v, m, y, b, x = "sizzle" + 1 * new Date,
                        w = e.document,
                        C = 0,
                        k = 0,
                        T = ae(),
                        _ = ae(),
                        O = ae(),
                        E = ae(),
                        S = function(e, n) {
                            return e === n && (d = !0), 0
                        },
                        P = {}.hasOwnProperty,
                        A = [],
                        M = A.pop,
                        D = A.push,
                        N = A.push,
                        j = A.slice,
                        I = function(e, n) {
                            for (var l = 0, t = e.length; l < t; l++)
                                if (e[l] === n) return l;
                            return -1
                        },
                        q = "checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped",
                        L = "[\\x20\\t\\r\\n\\f]",
                        R = "(?:\\\\[\\da-fA-F]{1,6}" + L + "?|\\\\[^\\r\\n\\f]|[\\w-]|[^\0-\\x7f])+",
                        H = "\\[" + L + "*(" + R + ")(?:" + L + "*([*^$|!~]?=)" + L + "*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|(" + R + "))|)" + L + "*\\]",
                        W = ":(" + R + ")(?:\\((('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|((?:\\\\.|[^\\\\()[\\]]|" + H + ")*)|.*)\\)|)",
                        B = new RegExp(L + "+", "g"),
                        F = new RegExp("^" + L + "+|((?:^|[^\\\\])(?:\\\\.)*)" + L + "+$", "g"),
                        $ = new RegExp("^" + L + "*," + L + "*"),
                        z = new RegExp("^" + L + "*([>+~]|" + L + ")" + L + "*"),
                        V = new RegExp(L + "|>"),
                        U = new RegExp(W),
                        Y = new RegExp("^" + R + "$"),
                        X = {
                            ID: new RegExp("^#(" + R + ")"),
                            CLASS: new RegExp("^\\.(" + R + ")"),
                            TAG: new RegExp("^(" + R + "|[*])"),
                            ATTR: new RegExp("^" + H),
                            PSEUDO: new RegExp("^" + W),
                            CHILD: new RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\(" + L + "*(even|odd|(([+-]|)(\\d*)n|)" + L + "*(?:([+-]|)" + L + "*(\\d+)|))" + L + "*\\)|)", "i"),
                            bool: new RegExp("^(?:" + q + ")$", "i"),
                            needsContext: new RegExp("^" + L + "*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\(" + L + "*((?:-\\d)?\\d*)" + L + "*\\)|)(?=[^-]|$)", "i")
                        },
                        G = /HTML$/i,
                        K = /^(?:input|select|textarea|button)$/i,
                        J = /^h\d$/i,
                        Q = /^[^{]+\{\s*\[native \w/,
                        Z = /^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,
                        ee = /[+~]/,
                        ne = new RegExp("\\\\[\\da-fA-F]{1,6}" + L + "?|\\\\([^\\r\\n\\f])", "g"),
                        le = function(e, n) {
                            var l = "0x" + e.slice(1) - 65536;
                            return n || (l < 0 ? String.fromCharCode(l + 65536) : String.fromCharCode(l >> 10 | 55296, 1023 & l | 56320))
                        },
                        te = /([\0-\x1f\x7f]|^-?\d)|^-$|[^\0-\x1f\x7f-\uFFFF\w-]/g,
                        oe = function(e, n) {
                            return n ? "\0" === e ? "\ufffd" : e.slice(0, -1) + "\\" + e.charCodeAt(e.length - 1).toString(16) + " " : "\\" + e
                        },
                        ie = function() {
                            f()
                        },
                        re = xe((function(e) {
                            return !0 === e.disabled && "fieldset" === e.nodeName.toLowerCase()
                        }), {
                            dir: "parentNode",
                            next: "legend"
                        });
                    try {
                        N.apply(A = j.call(w.childNodes), w.childNodes)
                    } catch (_e) {
                        N = {
                            apply: A.length ? function(e, n) {
                                D.apply(e, j.call(n))
                            } : function(e, n) {
                                for (var l = e.length, t = 0; e[l++] = n[t++];);
                                e.length = l - 1
                            }
                        }
                    }

                    function ue(e, n, t, o) {
                        var i, u, s, c, d, h, m, y = n && n.ownerDocument,
                            w = n ? n.nodeType : 9;
                        if (t = t || [], "string" != typeof e || !e || 1 !== w && 9 !== w && 11 !== w) return t;
                        if (!o && (f(n), n = n || p, g)) {
                            if (11 !== w && (d = Z.exec(e)))
                                if (i = d[1]) {
                                    if (9 === w) {
                                        if (!(s = n.getElementById(i))) return t;
                                        if (s.id === i) return t.push(s), t
                                    } else if (y && (s = y.getElementById(i)) && b(n, s) && s.id === i) return t.push(s), t
                                } else {
                                    if (d[2]) return N.apply(t, n.getElementsByTagName(e)), t;
                                    if ((i = d[3]) && l.getElementsByClassName && n.getElementsByClassName) return N.apply(t, n.getElementsByClassName(i)), t
                                }
                            if (l.qsa && !E[e + " "] && (!v || !v.test(e)) && (1 !== w || "object" !== n.nodeName.toLowerCase())) {
                                if (m = e, y = n, 1 === w && (V.test(e) || z.test(e))) {
                                    for ((y = ee.test(e) && me(n.parentNode) || n) === n && l.scope || ((c = n.getAttribute("id")) ? c = c.replace(te, oe) : n.setAttribute("id", c = x)), u = (h = r(e)).length; u--;) h[u] = (c ? "#" + c : ":scope") + " " + be(h[u]);
                                    m = h.join(",")
                                }
                                try {
                                    return N.apply(t, y.querySelectorAll(m)), t
                                } catch (C) {
                                    E(e, !0)
                                } finally {
                                    c === x && n.removeAttribute("id")
                                }
                            }
                        }
                        return a(e.replace(F, "$1"), n, t, o)
                    }

                    function ae() {
                        var e = [];
                        return function n(l, o) {
                            return e.push(l + " ") > t.cacheLength && delete n[e.shift()], n[l + " "] = o
                        }
                    }

                    function se(e) {
                        return e[x] = !0, e
                    }

                    function ce(e) {
                        var n = p.createElement("fieldset");
                        try {
                            return !!e(n)
                        } catch (_e) {
                            return !1
                        } finally {
                            n.parentNode && n.parentNode.removeChild(n), n = null
                        }
                    }

                    function de(e, n) {
                        for (var l = e.split("|"), o = l.length; o--;) t.attrHandle[l[o]] = n
                    }

                    function fe(e, n) {
                        var l = n && e,
                            t = l && 1 === e.nodeType && 1 === n.nodeType && e.sourceIndex - n.sourceIndex;
                        if (t) return t;
                        if (l)
                            for (; l = l.nextSibling;)
                                if (l === n) return -1;
                        return e ? 1 : -1
                    }

                    function pe(e) {
                        return function(n) {
                            return "input" === n.nodeName.toLowerCase() && n.type === e
                        }
                    }

                    function he(e) {
                        return function(n) {
                            var l = n.nodeName.toLowerCase();
                            return ("input" === l || "button" === l) && n.type === e
                        }
                    }

                    function ge(e) {
                        return function(n) {
                            return "form" in n ? n.parentNode && !1 === n.disabled ? "label" in n ? "label" in n.parentNode ? n.parentNode.disabled === e : n.disabled === e : n.isDisabled === e || n.isDisabled !== !e && re(n) === e : n.disabled === e : "label" in n && n.disabled === e
                        }
                    }

                    function ve(e) {
                        return se((function(n) {
                            return n = +n, se((function(l, t) {
                                for (var o, i = e([], l.length, n), r = i.length; r--;) l[o = i[r]] && (l[o] = !(t[o] = l[o]))
                            }))
                        }))
                    }

                    function me(e) {
                        return e && void 0 !== e.getElementsByTagName && e
                    }
                    for (n in l = ue.support = {}, i = ue.isXML = function(e) {
                            var n = e && (e.ownerDocument || e).documentElement;
                            return !G.test(e && e.namespaceURI || n && n.nodeName || "HTML")
                        }, f = ue.setDocument = function(e) {
                            var n, o, r = e ? e.ownerDocument || e : w;
                            return r != p && 9 === r.nodeType && r.documentElement ? (h = (p = r).documentElement, g = !i(p), w != p && (o = p.defaultView) && o.top !== o && (o.addEventListener ? o.addEventListener("unload", ie, !1) : o.attachEvent && o.attachEvent("onunload", ie)), l.scope = ce((function(e) {
                                return h.appendChild(e).appendChild(p.createElement("div")), void 0 !== e.querySelectorAll && !e.querySelectorAll(":scope fieldset div").length
                            })), l.attributes = ce((function(e) {
                                return e.className = "i", !e.getAttribute("className")
                            })), l.getElementsByTagName = ce((function(e) {
                                return e.appendChild(p.createComment("")), !e.getElementsByTagName("*").length
                            })), l.getElementsByClassName = Q.test(p.getElementsByClassName), l.getById = ce((function(e) {
                                return h.appendChild(e).id = x, !p.getElementsByName || !p.getElementsByName(x).length
                            })), l.getById ? (t.filter.ID = function(e) {
                                var n = e.replace(ne, le);
                                return function(e) {
                                    return e.getAttribute("id") === n
                                }
                            }, t.find.ID = function(e, n) {
                                if (void 0 !== n.getElementById && g) {
                                    var l = n.getElementById(e);
                                    return l ? [l] : []
                                }
                            }) : (t.filter.ID = function(e) {
                                var n = e.replace(ne, le);
                                return function(e) {
                                    var l = void 0 !== e.getAttributeNode && e.getAttributeNode("id");
                                    return l && l.value === n
                                }
                            }, t.find.ID = function(e, n) {
                                if (void 0 !== n.getElementById && g) {
                                    var l, t, o, i = n.getElementById(e);
                                    if (i) {
                                        if ((l = i.getAttributeNode("id")) && l.value === e) return [i];
                                        for (o = n.getElementsByName(e), t = 0; i = o[t++];)
                                            if ((l = i.getAttributeNode("id")) && l.value === e) return [i]
                                    }
                                    return []
                                }
                            }), t.find.TAG = l.getElementsByTagName ? function(e, n) {
                                return void 0 !== n.getElementsByTagName ? n.getElementsByTagName(e) : l.qsa ? n.querySelectorAll(e) : void 0
                            } : function(e, n) {
                                var l, t = [],
                                    o = 0,
                                    i = n.getElementsByTagName(e);
                                if ("*" === e) {
                                    for (; l = i[o++];) 1 === l.nodeType && t.push(l);
                                    return t
                                }
                                return i
                            }, t.find.CLASS = l.getElementsByClassName && function(e, n) {
                                if (void 0 !== n.getElementsByClassName && g) return n.getElementsByClassName(e)
                            }, m = [], v = [], (l.qsa = Q.test(p.querySelectorAll)) && (ce((function(e) {
                                var n;
                                h.appendChild(e).innerHTML = "<a id='" + x + "'></a><select id='" + x + "-\r\\' msallowcapture=''><option selected=''></option></select>", e.querySelectorAll("[msallowcapture^='']").length && v.push("[*^$]=" + L + "*(?:''|\"\")"), e.querySelectorAll("[selected]").length || v.push("\\[" + L + "*(?:value|" + q + ")"), e.querySelectorAll("[id~=" + x + "-]").length || v.push("~="), (n = p.createElement("input")).setAttribute("name", ""), e.appendChild(n), e.querySelectorAll("[name='']").length || v.push("\\[" + L + "*name" + L + "*=" + L + "*(?:''|\"\")"), e.querySelectorAll(":checked").length || v.push(":checked"), e.querySelectorAll("a#" + x + "+*").length || v.push(".#.+[+~]"), e.querySelectorAll("\\\f"), v.push("[\\r\\n\\f]")
                            })), ce((function(e) {
                                e.innerHTML = "<a href='' disabled='disabled'></a><select disabled='disabled'><option/></select>";
                                var n = p.createElement("input");
                                n.setAttribute("type", "hidden"), e.appendChild(n).setAttribute("name", "D"), e.querySelectorAll("[name=d]").length && v.push("name" + L + "*[*^$|!~]?="), 2 !== e.querySelectorAll(":enabled").length && v.push(":enabled", ":disabled"), h.appendChild(e).disabled = !0, 2 !== e.querySelectorAll(":disabled").length && v.push(":enabled", ":disabled"), e.querySelectorAll("*,:x"), v.push(",.*:")
                            }))), (l.matchesSelector = Q.test(y = h.matches || h.webkitMatchesSelector || h.mozMatchesSelector || h.oMatchesSelector || h.msMatchesSelector)) && ce((function(e) {
                                l.disconnectedMatch = y.call(e, "*"), y.call(e, "[s!='']:x"), m.push("!=", W)
                            })), v = v.length && new RegExp(v.join("|")), m = m.length && new RegExp(m.join("|")), n = Q.test(h.compareDocumentPosition), b = n || Q.test(h.contains) ? function(e, n) {
                                var l = 9 === e.nodeType ? e.documentElement : e,
                                    t = n && n.parentNode;
                                return e === t || !(!t || 1 !== t.nodeType || !(l.contains ? l.contains(t) : e.compareDocumentPosition && 16 & e.compareDocumentPosition(t)))
                            } : function(e, n) {
                                if (n)
                                    for (; n = n.parentNode;)
                                        if (n === e) return !0;
                                return !1
                            }, S = n ? function(e, n) {
                                if (e === n) return d = !0, 0;
                                var t = !e.compareDocumentPosition - !n.compareDocumentPosition;
                                return t || (1 & (t = (e.ownerDocument || e) == (n.ownerDocument || n) ? e.compareDocumentPosition(n) : 1) || !l.sortDetached && n.compareDocumentPosition(e) === t ? e == p || e.ownerDocument == w && b(w, e) ? -1 : n == p || n.ownerDocument == w && b(w, n) ? 1 : c ? I(c, e) - I(c, n) : 0 : 4 & t ? -1 : 1)
                            } : function(e, n) {
                                if (e === n) return d = !0, 0;
                                var l, t = 0,
                                    o = e.parentNode,
                                    i = n.parentNode,
                                    r = [e],
                                    u = [n];
                                if (!o || !i) return e == p ? -1 : n == p ? 1 : o ? -1 : i ? 1 : c ? I(c, e) - I(c, n) : 0;
                                if (o === i) return fe(e, n);
                                for (l = e; l = l.parentNode;) r.unshift(l);
                                for (l = n; l = l.parentNode;) u.unshift(l);
                                for (; r[t] === u[t];) t++;
                                return t ? fe(r[t], u[t]) : r[t] == w ? -1 : u[t] == w ? 1 : 0
                            }, p) : p
                        }, ue.matches = function(e, n) {
                            return ue(e, null, null, n)
                        }, ue.matchesSelector = function(e, n) {
                            if (f(e), l.matchesSelector && g && !E[n + " "] && (!m || !m.test(n)) && (!v || !v.test(n))) try {
                                var t = y.call(e, n);
                                if (t || l.disconnectedMatch || e.document && 11 !== e.document.nodeType) return t
                            } catch (_e) {
                                E(n, !0)
                            }
                            return ue(n, p, null, [e]).length > 0
                        }, ue.contains = function(e, n) {
                            return (e.ownerDocument || e) != p && f(e), b(e, n)
                        }, ue.attr = function(e, n) {
                            (e.ownerDocument || e) != p && f(e);
                            var o = t.attrHandle[n.toLowerCase()],
                                i = o && P.call(t.attrHandle, n.toLowerCase()) ? o(e, n, !g) : void 0;
                            return void 0 !== i ? i : l.attributes || !g ? e.getAttribute(n) : (i = e.getAttributeNode(n)) && i.specified ? i.value : null
                        }, ue.escape = function(e) {
                            return (e + "").replace(te, oe)
                        }, ue.error = function(e) {
                            throw new Error("Syntax error, unrecognized expression: " + e)
                        }, ue.uniqueSort = function(e) {
                            var n, t = [],
                                o = 0,
                                i = 0;
                            if (d = !l.detectDuplicates, c = !l.sortStable && e.slice(0), e.sort(S), d) {
                                for (; n = e[i++];) n === e[i] && (o = t.push(i));
                                for (; o--;) e.splice(t[o], 1)
                            }
                            return c = null, e
                        }, o = ue.getText = function(e) {
                            var n, l = "",
                                t = 0,
                                i = e.nodeType;
                            if (i) {
                                if (1 === i || 9 === i || 11 === i) {
                                    if ("string" == typeof e.textContent) return e.textContent;
                                    for (e = e.firstChild; e; e = e.nextSibling) l += o(e)
                                } else if (3 === i || 4 === i) return e.nodeValue
                            } else
                                for (; n = e[t++];) l += o(n);
                            return l
                        }, (t = ue.selectors = {
                            cacheLength: 50,
                            createPseudo: se,
                            match: X,
                            attrHandle: {},
                            find: {},
                            relative: {
                                ">": {
                                    dir: "parentNode",
                                    first: !0
                                },
                                " ": {
                                    dir: "parentNode"
                                },
                                "+": {
                                    dir: "previousSibling",
                                    first: !0
                                },
                                "~": {
                                    dir: "previousSibling"
                                }
                            },
                            preFilter: {
                                ATTR: function(e) {
                                    return e[1] = e[1].replace(ne, le), e[3] = (e[3] || e[4] || e[5] || "").replace(ne, le), "~=" === e[2] && (e[3] = " " + e[3] + " "), e.slice(0, 4)
                                },
                                CHILD: function(e) {
                                    return e[1] = e[1].toLowerCase(), "nth" === e[1].slice(0, 3) ? (e[3] || ue.error(e[0]), e[4] = +(e[4] ? e[5] + (e[6] || 1) : 2 * ("even" === e[3] || "odd" === e[3])), e[5] = +(e[7] + e[8] || "odd" === e[3])) : e[3] && ue.error(e[0]), e
                                },
                                PSEUDO: function(e) {
                                    var n, l = !e[6] && e[2];
                                    return X.CHILD.test(e[0]) ? null : (e[3] ? e[2] = e[4] || e[5] || "" : l && U.test(l) && (n = r(l, !0)) && (n = l.indexOf(")", l.length - n) - l.length) && (e[0] = e[0].slice(0, n), e[2] = l.slice(0, n)), e.slice(0, 3))
                                }
                            },
                            filter: {
                                TAG: function(e) {
                                    var n = e.replace(ne, le).toLowerCase();
                                    return "*" === e ? function() {
                                        return !0
                                    } : function(e) {
                                        return e.nodeName && e.nodeName.toLowerCase() === n
                                    }
                                },
                                CLASS: function(e) {
                                    var n = T[e + " "];
                                    return n || (n = new RegExp("(^|" + L + ")" + e + "(" + L + "|$)")) && T(e, (function(e) {
                                        return n.test("string" == typeof e.className && e.className || void 0 !== e.getAttribute && e.getAttribute("class") || "")
                                    }))
                                },
                                ATTR: function(e, n, l) {
                                    return function(t) {
                                        var o = ue.attr(t, e);
                                        return null == o ? "!=" === n : !n || (o += "", "=" === n ? o === l : "!=" === n ? o !== l : "^=" === n ? l && 0 === o.indexOf(l) : "*=" === n ? l && o.indexOf(l) > -1 : "$=" === n ? l && o.slice(-l.length) === l : "~=" === n ? (" " + o.replace(B, " ") + " ").indexOf(l) > -1 : "|=" === n && (o === l || o.slice(0, l.length + 1) === l + "-"))
                                    }
                                },
                                CHILD: function(e, n, l, t, o) {
                                    var i = "nth" !== e.slice(0, 3),
                                        r = "last" !== e.slice(-4),
                                        u = "of-type" === n;
                                    return 1 === t && 0 === o ? function(e) {
                                        return !!e.parentNode
                                    } : function(n, l, a) {
                                        var s, c, d, f, p, h, g = i !== r ? "nextSibling" : "previousSibling",
                                            v = n.parentNode,
                                            m = u && n.nodeName.toLowerCase(),
                                            y = !a && !u,
                                            b = !1;
                                        if (v) {
                                            if (i) {
                                                for (; g;) {
                                                    for (f = n; f = f[g];)
                                                        if (u ? f.nodeName.toLowerCase() === m : 1 === f.nodeType) return !1;
                                                    h = g = "only" === e && !h && "nextSibling"
                                                }
                                                return !0
                                            }
                                            if (h = [r ? v.firstChild : v.lastChild], r && y) {
                                                for (b = (p = (s = (c = (d = (f = v)[x] || (f[x] = {}))[f.uniqueID] || (d[f.uniqueID] = {}))[e] || [])[0] === C && s[1]) && s[2], f = p && v.childNodes[p]; f = ++p && f && f[g] || (b = p = 0) || h.pop();)
                                                    if (1 === f.nodeType && ++b && f === n) {
                                                        c[e] = [C, p, b];
                                                        break
                                                    }
                                            } else if (y && (b = p = (s = (c = (d = (f = n)[x] || (f[x] = {}))[f.uniqueID] || (d[f.uniqueID] = {}))[e] || [])[0] === C && s[1]), !1 === b)
                                                for (;
                                                    (f = ++p && f && f[g] || (b = p = 0) || h.pop()) && ((u ? f.nodeName.toLowerCase() !== m : 1 !== f.nodeType) || !++b || (y && ((c = (d = f[x] || (f[x] = {}))[f.uniqueID] || (d[f.uniqueID] = {}))[e] = [C, b]), f !== n)););
                                            return (b -= o) === t || b % t == 0 && b / t >= 0
                                        }
                                    }
                                },
                                PSEUDO: function(e, n) {
                                    var l, o = t.pseudos[e] || t.setFilters[e.toLowerCase()] || ue.error("unsupported pseudo: " + e);
                                    return o[x] ? o(n) : o.length > 1 ? (l = [e, e, "", n], t.setFilters.hasOwnProperty(e.toLowerCase()) ? se((function(e, l) {
                                        for (var t, i = o(e, n), r = i.length; r--;) e[t = I(e, i[r])] = !(l[t] = i[r])
                                    })) : function(e) {
                                        return o(e, 0, l)
                                    }) : o
                                }
                            },
                            pseudos: {
                                not: se((function(e) {
                                    var n = [],
                                        l = [],
                                        t = u(e.replace(F, "$1"));
                                    return t[x] ? se((function(e, n, l, o) {
                                        for (var i, r = t(e, null, o, []), u = e.length; u--;)(i = r[u]) && (e[u] = !(n[u] = i))
                                    })) : function(e, o, i) {
                                        return n[0] = e, t(n, null, i, l), n[0] = null, !l.pop()
                                    }
                                })),
                                has: se((function(e) {
                                    return function(n) {
                                        return ue(e, n).length > 0
                                    }
                                })),
                                contains: se((function(e) {
                                    return e = e.replace(ne, le),
                                        function(n) {
                                            return (n.textContent || o(n)).indexOf(e) > -1
                                        }
                                })),
                                lang: se((function(e) {
                                    return Y.test(e || "") || ue.error("unsupported lang: " + e), e = e.replace(ne, le).toLowerCase(),
                                        function(n) {
                                            var l;
                                            do {
                                                if (l = g ? n.lang : n.getAttribute("xml:lang") || n.getAttribute("lang")) return (l = l.toLowerCase()) === e || 0 === l.indexOf(e + "-")
                                            } while ((n = n.parentNode) && 1 === n.nodeType);
                                            return !1
                                        }
                                })),
                                target: function(n) {
                                    var l = e.location && e.location.hash;
                                    return l && l.slice(1) === n.id
                                },
                                root: function(e) {
                                    return e === h
                                },
                                focus: function(e) {
                                    return e === p.activeElement && (!p.hasFocus || p.hasFocus()) && !!(e.type || e.href || ~e.tabIndex)
                                },
                                enabled: ge(!1),
                                disabled: ge(!0),
                                checked: function(e) {
                                    var n = e.nodeName.toLowerCase();
                                    return "input" === n && !!e.checked || "option" === n && !!e.selected
                                },
                                selected: function(e) {
                                    return !0 === e.selected
                                },
                                empty: function(e) {
                                    for (e = e.firstChild; e; e = e.nextSibling)
                                        if (e.nodeType < 6) return !1;
                                    return !0
                                },
                                parent: function(e) {
                                    return !t.pseudos.empty(e)
                                },
                                header: function(e) {
                                    return J.test(e.nodeName)
                                },
                                input: function(e) {
                                    return K.test(e.nodeName)
                                },
                                button: function(e) {
                                    var n = e.nodeName.toLowerCase();
                                    return "input" === n && "button" === e.type || "button" === n
                                },
                                text: function(e) {
                                    var n;
                                    return "input" === e.nodeName.toLowerCase() && "text" === e.type && (null == (n = e.getAttribute("type")) || "text" === n.toLowerCase())
                                },
                                first: ve((function() {
                                    return [0]
                                })),
                                last: ve((function(e, n) {
                                    return [n - 1]
                                })),
                                eq: ve((function(e, n, l) {
                                    return [l < 0 ? l + n : l]
                                })),
                                even: ve((function(e, n) {
                                    for (var l = 0; l < n; l += 2) e.push(l);
                                    return e
                                })),
                                odd: ve((function(e, n) {
                                    for (var l = 1; l < n; l += 2) e.push(l);
                                    return e
                                })),
                                lt: ve((function(e, n, l) {
                                    for (var t = l < 0 ? l + n : l > n ? n : l; --t >= 0;) e.push(t);
                                    return e
                                })),
                                gt: ve((function(e, n, l) {
                                    for (var t = l < 0 ? l + n : l; ++t < n;) e.push(t);
                                    return e
                                }))
                            }
                        }).pseudos.nth = t.pseudos.eq, {
                            radio: !0,
                            checkbox: !0,
                            file: !0,
                            password: !0,
                            image: !0
                        }) t.pseudos[n] = pe(n);
                    for (n in {
                            submit: !0,
                            reset: !0
                        }) t.pseudos[n] = he(n);

                    function ye() {}

                    function be(e) {
                        for (var n = 0, l = e.length, t = ""; n < l; n++) t += e[n].value;
                        return t
                    }

                    function xe(e, n, l) {
                        var t = n.dir,
                            o = n.next,
                            i = o || t,
                            r = l && "parentNode" === i,
                            u = k++;
                        return n.first ? function(n, l, o) {
                            for (; n = n[t];)
                                if (1 === n.nodeType || r) return e(n, l, o);
                            return !1
                        } : function(n, l, a) {
                            var s, c, d, f = [C, u];
                            if (a) {
                                for (; n = n[t];)
                                    if ((1 === n.nodeType || r) && e(n, l, a)) return !0
                            } else
                                for (; n = n[t];)
                                    if (1 === n.nodeType || r)
                                        if (c = (d = n[x] || (n[x] = {}))[n.uniqueID] || (d[n.uniqueID] = {}), o && o === n.nodeName.toLowerCase()) n = n[t] || n;
                                        else {
                                            if ((s = c[i]) && s[0] === C && s[1] === u) return f[2] = s[2];
                                            if (c[i] = f, f[2] = e(n, l, a)) return !0
                                        } return !1
                        }
                    }

                    function we(e) {
                        return e.length > 1 ? function(n, l, t) {
                            for (var o = e.length; o--;)
                                if (!e[o](n, l, t)) return !1;
                            return !0
                        } : e[0]
                    }

                    function Ce(e, n, l, t, o) {
                        for (var i, r = [], u = 0, a = e.length, s = null != n; u < a; u++)(i = e[u]) && (l && !l(i, t, o) || (r.push(i), s && n.push(u)));
                        return r
                    }

                    function ke(e, n, l, t, o, i) {
                        return t && !t[x] && (t = ke(t)), o && !o[x] && (o = ke(o, i)), se((function(i, r, u, a) {
                            var s, c, d, f = [],
                                p = [],
                                h = r.length,
                                g = i || function(e, n, l) {
                                    for (var t = 0, o = n.length; t < o; t++) ue(e, n[t], l);
                                    return l
                                }(n || "*", u.nodeType ? [u] : u, []),
                                v = !e || !i && n ? g : Ce(g, f, e, u, a),
                                m = l ? o || (i ? e : h || t) ? [] : r : v;
                            if (l && l(v, m, u, a), t)
                                for (s = Ce(m, p), t(s, [], u, a), c = s.length; c--;)(d = s[c]) && (m[p[c]] = !(v[p[c]] = d));
                            if (i) {
                                if (o || e) {
                                    if (o) {
                                        for (s = [], c = m.length; c--;)(d = m[c]) && s.push(v[c] = d);
                                        o(null, m = [], s, a)
                                    }
                                    for (c = m.length; c--;)(d = m[c]) && (s = o ? I(i, d) : f[c]) > -1 && (i[s] = !(r[s] = d))
                                }
                            } else m = Ce(m === r ? m.splice(h, m.length) : m), o ? o(null, r, m, a) : N.apply(r, m)
                        }))
                    }

                    function Te(e) {
                        for (var n, l, o, i = e.length, r = t.relative[e[0].type], u = r || t.relative[" "], a = r ? 1 : 0, c = xe((function(e) {
                                return e === n
                            }), u, !0), d = xe((function(e) {
                                return I(n, e) > -1
                            }), u, !0), f = [function(e, l, t) {
                                var o = !r && (t || l !== s) || ((n = l).nodeType ? c(e, l, t) : d(e, l, t));
                                return n = null, o
                            }]; a < i; a++)
                            if (l = t.relative[e[a].type]) f = [xe(we(f), l)];
                            else {
                                if ((l = t.filter[e[a].type].apply(null, e[a].matches))[x]) {
                                    for (o = ++a; o < i && !t.relative[e[o].type]; o++);
                                    return ke(a > 1 && we(f), a > 1 && be(e.slice(0, a - 1).concat({
                                        value: " " === e[a - 2].type ? "*" : ""
                                    })).replace(F, "$1"), l, a < o && Te(e.slice(a, o)), o < i && Te(e = e.slice(o)), o < i && be(e))
                                }
                                f.push(l)
                            }
                        return we(f)
                    }
                    return ye.prototype = t.filters = t.pseudos, t.setFilters = new ye, r = ue.tokenize = function(e, n) {
                        var l, o, i, r, u, a, s, c = _[e + " "];
                        if (c) return n ? 0 : c.slice(0);
                        for (u = e, a = [], s = t.preFilter; u;) {
                            for (r in l && !(o = $.exec(u)) || (o && (u = u.slice(o[0].length) || u), a.push(i = [])), l = !1, (o = z.exec(u)) && (l = o.shift(), i.push({
                                    value: l,
                                    type: o[0].replace(F, " ")
                                }), u = u.slice(l.length)), t.filter) !(o = X[r].exec(u)) || s[r] && !(o = s[r](o)) || (l = o.shift(), i.push({
                                value: l,
                                type: r,
                                matches: o
                            }), u = u.slice(l.length));
                            if (!l) break
                        }
                        return n ? u.length : u ? ue.error(e) : _(e, a).slice(0)
                    }, u = ue.compile = function(e, n) {
                        var l, o = [],
                            i = [],
                            u = O[e + " "];
                        if (!u) {
                            for (n || (n = r(e)), l = n.length; l--;)(u = Te(n[l]))[x] ? o.push(u) : i.push(u);
                            (u = O(e, function(e, n) {
                                var l = n.length > 0,
                                    o = e.length > 0,
                                    i = function(i, r, u, a, c) {
                                        var d, h, v, m = 0,
                                            y = "0",
                                            b = i && [],
                                            x = [],
                                            w = s,
                                            k = i || o && t.find.TAG("*", c),
                                            T = C += null == w ? 1 : Math.random() || .1,
                                            _ = k.length;
                                        for (c && (s = r == p || r || c); y !== _ && null != (d = k[y]); y++) {
                                            if (o && d) {
                                                for (h = 0, r || d.ownerDocument == p || (f(d), u = !g); v = e[h++];)
                                                    if (v(d, r || p, u)) {
                                                        a.push(d);
                                                        break
                                                    }
                                                c && (C = T)
                                            }
                                            l && ((d = !v && d) && m--, i && b.push(d))
                                        }
                                        if (m += y, l && y !== m) {
                                            for (h = 0; v = n[h++];) v(b, x, r, u);
                                            if (i) {
                                                if (m > 0)
                                                    for (; y--;) b[y] || x[y] || (x[y] = M.call(a));
                                                x = Ce(x)
                                            }
                                            N.apply(a, x), c && !i && x.length > 0 && m + n.length > 1 && ue.uniqueSort(a)
                                        }
                                        return c && (C = T, s = w), b
                                    };
                                return l ? se(i) : i
                            }(i, o))).selector = e
                        }
                        return u
                    }, a = ue.select = function(e, n, l, o) {
                        var i, a, s, c, d, f = "function" == typeof e && e,
                            p = !o && r(e = f.selector || e);
                        if (l = l || [], 1 === p.length) {
                            if ((a = p[0] = p[0].slice(0)).length > 2 && "ID" === (s = a[0]).type && 9 === n.nodeType && g && t.relative[a[1].type]) {
                                if (!(n = (t.find.ID(s.matches[0].replace(ne, le), n) || [])[0])) return l;
                                f && (n = n.parentNode), e = e.slice(a.shift().value.length)
                            }
                            for (i = X.needsContext.test(e) ? 0 : a.length; i-- && !t.relative[c = (s = a[i]).type];)
                                if ((d = t.find[c]) && (o = d(s.matches[0].replace(ne, le), ee.test(a[0].type) && me(n.parentNode) || n))) {
                                    if (a.splice(i, 1), !(e = o.length && be(a))) return N.apply(l, o), l;
                                    break
                                }
                        }
                        return (f || u(e, p))(o, n, !g, l, !n || ee.test(e) && me(n.parentNode) || n), l
                    }, l.sortStable = x.split("").sort(S).join("") === x, l.detectDuplicates = !!d, f(), l.sortDetached = ce((function(e) {
                        return 1 & e.compareDocumentPosition(p.createElement("fieldset"))
                    })), ce((function(e) {
                        return e.innerHTML = "<a href='#'></a>", "#" === e.firstChild.getAttribute("href")
                    })) || de("type|href|height|width", (function(e, n, l) {
                        if (!l) return e.getAttribute(n, "type" === n.toLowerCase() ? 1 : 2)
                    })), l.attributes && ce((function(e) {
                        return e.innerHTML = "<input/>", e.firstChild.setAttribute("value", ""), "" === e.firstChild.getAttribute("value")
                    })) || de("value", (function(e, n, l) {
                        if (!l && "input" === e.nodeName.toLowerCase()) return e.defaultValue
                    })), ce((function(e) {
                        return null == e.getAttribute("disabled")
                    })) || de(q, (function(e, n, l) {
                        var t;
                        if (!l) return !0 === e[n] ? n.toLowerCase() : (t = e.getAttributeNode(n)) && t.specified ? t.value : null
                    })), ue
                }(l);
                k.find = _, k.expr = _.selectors, k.expr[":"] = k.expr.pseudos, k.uniqueSort = k.unique = _.uniqueSort, k.text = _.getText, k.isXMLDoc = _.isXML, k.contains = _.contains, k.escapeSelector = _.escape;
                var O = function(e, n, l) {
                        for (var t = [], o = void 0 !== l;
                            (e = e[n]) && 9 !== e.nodeType;)
                            if (1 === e.nodeType) {
                                if (o && k(e).is(l)) break;
                                t.push(e)
                            }
                        return t
                    },
                    E = function(e, n) {
                        for (var l = []; e; e = e.nextSibling) 1 === e.nodeType && e !== n && l.push(e);
                        return l
                    },
                    S = k.expr.match.needsContext;

                function P(e, n) {
                    return e.nodeName && e.nodeName.toLowerCase() === n.toLowerCase()
                }
                var A = /^<([a-z][^\/\0>:\x20\t\r\n\f]*)[\x20\t\r\n\f]*\/?>(?:<\/\1>|)$/i;

                function M(e, n, l) {
                    return m(n) ? k.grep(e, (function(e, t) {
                        return !!n.call(e, t, e) !== l
                    })) : n.nodeType ? k.grep(e, (function(e) {
                        return e === n !== l
                    })) : "string" != typeof n ? k.grep(e, (function(e) {
                        return c.call(n, e) > -1 !== l
                    })) : k.filter(n, e, l)
                }
                k.filter = function(e, n, l) {
                    var t = n[0];
                    return l && (e = ":not(" + e + ")"), 1 === n.length && 1 === t.nodeType ? k.find.matchesSelector(t, e) ? [t] : [] : k.find.matches(e, k.grep(n, (function(e) {
                        return 1 === e.nodeType
                    })))
                }, k.fn.extend({
                    find: function(e) {
                        var n, l, t = this.length,
                            o = this;
                        if ("string" != typeof e) return this.pushStack(k(e).filter((function() {
                            for (n = 0; n < t; n++)
                                if (k.contains(o[n], this)) return !0
                        })));
                        for (l = this.pushStack([]), n = 0; n < t; n++) k.find(e, o[n], l);
                        return t > 1 ? k.uniqueSort(l) : l
                    },
                    filter: function(e) {
                        return this.pushStack(M(this, e || [], !1))
                    },
                    not: function(e) {
                        return this.pushStack(M(this, e || [], !0))
                    },
                    is: function(e) {
                        return !!M(this, "string" == typeof e && S.test(e) ? k(e) : e || [], !1).length
                    }
                });
                var D, N = /^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]+))$/;
                (k.fn.init = function(e, n, l) {
                    var t, o;
                    if (!e) return this;
                    if (l = l || D, "string" == typeof e) {
                        if (!(t = "<" === e[0] && ">" === e[e.length - 1] && e.length >= 3 ? [null, e, null] : N.exec(e)) || !t[1] && n) return !n || n.jquery ? (n || l).find(e) : this.constructor(n).find(e);
                        if (t[1]) {
                            if (k.merge(this, k.parseHTML(t[1], (n = n instanceof k ? n[0] : n) && n.nodeType ? n.ownerDocument || n : b, !0)), A.test(t[1]) && k.isPlainObject(n))
                                for (t in n) m(this[t]) ? this[t](n[t]) : this.attr(t, n[t]);
                            return this
                        }
                        return (o = b.getElementById(t[2])) && (this[0] = o, this.length = 1), this
                    }
                    return e.nodeType ? (this[0] = e, this.length = 1, this) : m(e) ? void 0 !== l.ready ? l.ready(e) : e(k) : k.makeArray(e, this)
                }).prototype = k.fn, D = k(b);
                var j = /^(?:parents|prev(?:Until|All))/,
                    I = {
                        children: !0,
                        contents: !0,
                        next: !0,
                        prev: !0
                    };

                function q(e, n) {
                    for (;
                        (e = e[n]) && 1 !== e.nodeType;);
                    return e
                }
                k.fn.extend({
                    has: function(e) {
                        var n = k(e, this),
                            l = n.length;
                        return this.filter((function() {
                            for (var e = 0; e < l; e++)
                                if (k.contains(this, n[e])) return !0
                        }))
                    },
                    closest: function(e, n) {
                        var l, t = 0,
                            o = this.length,
                            i = [],
                            r = "string" != typeof e && k(e);
                        if (!S.test(e))
                            for (; t < o; t++)
                                for (l = this[t]; l && l !== n; l = l.parentNode)
                                    if (l.nodeType < 11 && (r ? r.index(l) > -1 : 1 === l.nodeType && k.find.matchesSelector(l, e))) {
                                        i.push(l);
                                        break
                                    }
                        return this.pushStack(i.length > 1 ? k.uniqueSort(i) : i)
                    },
                    index: function(e) {
                        return e ? "string" == typeof e ? c.call(k(e), this[0]) : c.call(this, e.jquery ? e[0] : e) : this[0] && this[0].parentNode ? this.first().prevAll().length : -1
                    },
                    add: function(e, n) {
                        return this.pushStack(k.uniqueSort(k.merge(this.get(), k(e, n))))
                    },
                    addBack: function(e) {
                        return this.add(null == e ? this.prevObject : this.prevObject.filter(e))
                    }
                }), k.each({
                    parent: function(e) {
                        var n = e.parentNode;
                        return n && 11 !== n.nodeType ? n : null
                    },
                    parents: function(e) {
                        return O(e, "parentNode")
                    },
                    parentsUntil: function(e, n, l) {
                        return O(e, "parentNode", l)
                    },
                    next: function(e) {
                        return q(e, "nextSibling")
                    },
                    prev: function(e) {
                        return q(e, "previousSibling")
                    },
                    nextAll: function(e) {
                        return O(e, "nextSibling")
                    },
                    prevAll: function(e) {
                        return O(e, "previousSibling")
                    },
                    nextUntil: function(e, n, l) {
                        return O(e, "nextSibling", l)
                    },
                    prevUntil: function(e, n, l) {
                        return O(e, "previousSibling", l)
                    },
                    siblings: function(e) {
                        return E((e.parentNode || {}).firstChild, e)
                    },
                    children: function(e) {
                        return E(e.firstChild)
                    },
                    contents: function(e) {
                        return null != e.contentDocument && r(e.contentDocument) ? e.contentDocument : (P(e, "template") && (e = e.content || e), k.merge([], e.childNodes))
                    }
                }, (function(e, n) {
                    k.fn[e] = function(l, t) {
                        var o = k.map(this, n, l);
                        return "Until" !== e.slice(-5) && (t = l), t && "string" == typeof t && (o = k.filter(t, o)), this.length > 1 && (I[e] || k.uniqueSort(o), j.test(e) && o.reverse()), this.pushStack(o)
                    }
                }));
                var L = /[^\x20\t\r\n\f]+/g;

                function R(e) {
                    return e
                }

                function H(e) {
                    throw e
                }

                function W(e, n, l, t) {
                    var o;
                    try {
                        e && m(o = e.promise) ? o.call(e).done(n).fail(l) : e && m(o = e.then) ? o.call(e, n, l) : n.apply(void 0, [e].slice(t))
                    } catch (e) {
                        l.apply(void 0, [e])
                    }
                }
                k.Callbacks = function(e) {
                    e = "string" == typeof e ? function(e) {
                        var n = {};
                        return k.each(e.match(L) || [], (function(e, l) {
                            n[l] = !0
                        })), n
                    }(e) : k.extend({}, e);
                    var n, l, t, o, i = [],
                        r = [],
                        u = -1,
                        a = function() {
                            for (o = o || e.once, t = n = !0; r.length; u = -1)
                                for (l = r.shift(); ++u < i.length;) !1 === i[u].apply(l[0], l[1]) && e.stopOnFalse && (u = i.length, l = !1);
                            e.memory || (l = !1), n = !1, o && (i = l ? [] : "")
                        },
                        s = {
                            add: function() {
                                return i && (l && !n && (u = i.length - 1, r.push(l)), function n(l) {
                                    k.each(l, (function(l, t) {
                                        m(t) ? e.unique && s.has(t) || i.push(t) : t && t.length && "string" !== C(t) && n(t)
                                    }))
                                }(arguments), l && !n && a()), this
                            },
                            remove: function() {
                                return k.each(arguments, (function(e, n) {
                                    for (var l;
                                        (l = k.inArray(n, i, l)) > -1;) i.splice(l, 1), l <= u && u--
                                })), this
                            },
                            has: function(e) {
                                return e ? k.inArray(e, i) > -1 : i.length > 0
                            },
                            empty: function() {
                                return i && (i = []), this
                            },
                            disable: function() {
                                return o = r = [], i = l = "", this
                            },
                            disabled: function() {
                                return !i
                            },
                            lock: function() {
                                return o = r = [], l || n || (i = l = ""), this
                            },
                            locked: function() {
                                return !!o
                            },
                            fireWith: function(e, l) {
                                return o || (l = [e, (l = l || []).slice ? l.slice() : l], r.push(l), n || a()), this
                            },
                            fire: function() {
                                return s.fireWith(this, arguments), this
                            },
                            fired: function() {
                                return !!t
                            }
                        };
                    return s
                }, k.extend({
                    Deferred: function(e) {
                        var n = [
                                ["notify", "progress", k.Callbacks("memory"), k.Callbacks("memory"), 2],
                                ["resolve", "done", k.Callbacks("once memory"), k.Callbacks("once memory"), 0, "resolved"],
                                ["reject", "fail", k.Callbacks("once memory"), k.Callbacks("once memory"), 1, "rejected"]
                            ],
                            t = "pending",
                            o = {
                                state: function() {
                                    return t
                                },
                                always: function() {
                                    return i.done(arguments).fail(arguments), this
                                },
                                catch: function(e) {
                                    return o.then(null, e)
                                },
                                pipe: function() {
                                    var e = arguments;
                                    return k.Deferred((function(l) {
                                        k.each(n, (function(n, t) {
                                            var o = m(e[t[4]]) && e[t[4]];
                                            i[t[1]]((function() {
                                                var e = o && o.apply(this, arguments);
                                                e && m(e.promise) ? e.promise().progress(l.notify).done(l.resolve).fail(l.reject) : l[t[0] + "With"](this, o ? [e] : arguments)
                                            }))
                                        })), e = null
                                    })).promise()
                                },
                                then: function(e, t, o) {
                                    var i = 0;

                                    function r(e, n, t, o) {
                                        return function() {
                                            var u = this,
                                                a = arguments,
                                                s = function() {
                                                    var l, s;
                                                    if (!(e < i)) {
                                                        if ((l = t.apply(u, a)) === n.promise()) throw new TypeError("Thenable self-resolution");
                                                        m(s = l && ("object" == typeof l || "function" == typeof l) && l.then) ? o ? s.call(l, r(i, n, R, o), r(i, n, H, o)) : (i++, s.call(l, r(i, n, R, o), r(i, n, H, o), r(i, n, R, n.notifyWith))) : (t !== R && (u = void 0, a = [l]), (o || n.resolveWith)(u, a))
                                                    }
                                                },
                                                c = o ? s : function() {
                                                    try {
                                                        s()
                                                    } catch (l) {
                                                        k.Deferred.exceptionHook && k.Deferred.exceptionHook(l, c.stackTrace), e + 1 >= i && (t !== H && (u = void 0, a = [l]), n.rejectWith(u, a))
                                                    }
                                                };
                                            e ? c() : (k.Deferred.getStackHook && (c.stackTrace = k.Deferred.getStackHook()), l.setTimeout(c))
                                        }
                                    }
                                    return k.Deferred((function(l) {
                                        n[0][3].add(r(0, l, m(o) ? o : R, l.notifyWith)), n[1][3].add(r(0, l, m(e) ? e : R)), n[2][3].add(r(0, l, m(t) ? t : H))
                                    })).promise()
                                },
                                promise: function(e) {
                                    return null != e ? k.extend(e, o) : o
                                }
                            },
                            i = {};
                        return k.each(n, (function(e, l) {
                            var r = l[2],
                                u = l[5];
                            o[l[1]] = r.add, u && r.add((function() {
                                t = u
                            }), n[3 - e][2].disable, n[3 - e][3].disable, n[0][2].lock, n[0][3].lock), r.add(l[3].fire), i[l[0]] = function() {
                                return i[l[0] + "With"](this === i ? void 0 : this, arguments), this
                            }, i[l[0] + "With"] = r.fireWith
                        })), o.promise(i), e && e.call(i, i), i
                    },
                    when: function(e) {
                        var n = arguments.length,
                            l = n,
                            t = Array(l),
                            o = u.call(arguments),
                            i = k.Deferred(),
                            r = function(e) {
                                return function(l) {
                                    t[e] = this, o[e] = arguments.length > 1 ? u.call(arguments) : l, --n || i.resolveWith(t, o)
                                }
                            };
                        if (n <= 1 && (W(e, i.done(r(l)).resolve, i.reject, !n), "pending" === i.state() || m(o[l] && o[l].then))) return i.then();
                        for (; l--;) W(o[l], r(l), i.reject);
                        return i.promise()
                    }
                });
                var B = /^(Eval|Internal|Range|Reference|Syntax|Type|URI)Error$/;
                k.Deferred.exceptionHook = function(e, n) {
                    l.console && l.console.warn && e && B.test(e.name) && l.console.warn("jQuery.Deferred exception: " + e.message, e.stack, n)
                }, k.readyException = function(e) {
                    l.setTimeout((function() {
                        throw e
                    }))
                };
                var F = k.Deferred();

                function $() {
                    b.removeEventListener("DOMContentLoaded", $), l.removeEventListener("load", $), k.ready()
                }
                k.fn.ready = function(e) {
                    return F.then(e).catch((function(e) {
                        k.readyException(e)
                    })), this
                }, k.extend({
                    isReady: !1,
                    readyWait: 1,
                    ready: function(e) {
                        (!0 === e ? --k.readyWait : k.isReady) || (k.isReady = !0, !0 !== e && --k.readyWait > 0 || F.resolveWith(b, [k]))
                    }
                }), k.ready.then = F.then, "complete" === b.readyState || "loading" !== b.readyState && !b.documentElement.doScroll ? l.setTimeout(k.ready) : (b.addEventListener("DOMContentLoaded", $), l.addEventListener("load", $));
                var z = function(e, n, l, t, o, i, r) {
                        var u = 0,
                            a = e.length,
                            s = null == l;
                        if ("object" === C(l))
                            for (u in o = !0, l) z(e, n, u, l[u], !0, i, r);
                        else if (void 0 !== t && (o = !0, m(t) || (r = !0), s && (r ? (n.call(e, t), n = null) : (s = n, n = function(e, n, l) {
                                return s.call(k(e), l)
                            })), n))
                            for (; u < a; u++) n(e[u], l, r ? t : t.call(e[u], u, n(e[u], l)));
                        return o ? e : s ? n.call(e) : a ? n(e[0], l) : i
                    },
                    V = /^-ms-/,
                    U = /-([a-z])/g;

                function Y(e, n) {
                    return n.toUpperCase()
                }

                function X(e) {
                    return e.replace(V, "ms-").replace(U, Y)
                }
                var G = function(e) {
                    return 1 === e.nodeType || 9 === e.nodeType || !+e.nodeType
                };

                function K() {
                    this.expando = k.expando + K.uid++
                }
                K.uid = 1, K.prototype = {
                    cache: function(e) {
                        var n = e[this.expando];
                        return n || (n = {}, G(e) && (e.nodeType ? e[this.expando] = n : Object.defineProperty(e, this.expando, {
                            value: n,
                            configurable: !0
                        }))), n
                    },
                    set: function(e, n, l) {
                        var t, o = this.cache(e);
                        if ("string" == typeof n) o[X(n)] = l;
                        else
                            for (t in n) o[X(t)] = n[t];
                        return o
                    },
                    get: function(e, n) {
                        return void 0 === n ? this.cache(e) : e[this.expando] && e[this.expando][X(n)]
                    },
                    access: function(e, n, l) {
                        return void 0 === n || n && "string" == typeof n && void 0 === l ? this.get(e, n) : (this.set(e, n, l), void 0 !== l ? l : n)
                    },
                    remove: function(e, n) {
                        var l, t = e[this.expando];
                        if (void 0 !== t) {
                            if (void 0 !== n) {
                                l = (n = Array.isArray(n) ? n.map(X) : (n = X(n)) in t ? [n] : n.match(L) || []).length;
                                for (; l--;) delete t[n[l]]
                            }(void 0 === n || k.isEmptyObject(t)) && (e.nodeType ? e[this.expando] = void 0 : delete e[this.expando])
                        }
                    },
                    hasData: function(e) {
                        var n = e[this.expando];
                        return void 0 !== n && !k.isEmptyObject(n)
                    }
                };
                var J = new K,
                    Q = new K,
                    Z = /^(?:\{[\w\W]*\}|\[[\w\W]*\])$/,
                    ee = /[A-Z]/g;

                function ne(e, n, l) {
                    var t;
                    if (void 0 === l && 1 === e.nodeType)
                        if (t = "data-" + n.replace(ee, "-$&").toLowerCase(), "string" == typeof(l = e.getAttribute(t))) {
                            try {
                                l = function(e) {
                                    return "true" === e || "false" !== e && ("null" === e ? null : e === +e + "" ? +e : Z.test(e) ? JSON.parse(e) : e)
                                }(l)
                            } catch (o) {}
                            Q.set(e, n, l)
                        } else l = void 0;
                    return l
                }
                k.extend({
                    hasData: function(e) {
                        return Q.hasData(e) || J.hasData(e)
                    },
                    data: function(e, n, l) {
                        return Q.access(e, n, l)
                    },
                    removeData: function(e, n) {
                        Q.remove(e, n)
                    },
                    _data: function(e, n, l) {
                        return J.access(e, n, l)
                    },
                    _removeData: function(e, n) {
                        J.remove(e, n)
                    }
                }), k.fn.extend({
                    data: function(e, n) {
                        var l, t, o, i = this[0],
                            r = i && i.attributes;
                        if (void 0 === e) {
                            if (this.length && (o = Q.get(i), 1 === i.nodeType && !J.get(i, "hasDataAttrs"))) {
                                for (l = r.length; l--;) r[l] && 0 === (t = r[l].name).indexOf("data-") && (t = X(t.slice(5)), ne(i, t, o[t]));
                                J.set(i, "hasDataAttrs", !0)
                            }
                            return o
                        }
                        return "object" == typeof e ? this.each((function() {
                            Q.set(this, e)
                        })) : z(this, (function(n) {
                            var l;
                            if (i && void 0 === n) return void 0 !== (l = Q.get(i, e)) || void 0 !== (l = ne(i, e)) ? l : void 0;
                            this.each((function() {
                                Q.set(this, e, n)
                            }))
                        }), null, n, arguments.length > 1, null, !0)
                    },
                    removeData: function(e) {
                        return this.each((function() {
                            Q.remove(this, e)
                        }))
                    }
                }), k.extend({
                    queue: function(e, n, l) {
                        var t;
                        if (e) return t = J.get(e, n = (n || "fx") + "queue"), l && (!t || Array.isArray(l) ? t = J.access(e, n, k.makeArray(l)) : t.push(l)), t || []
                    },
                    dequeue: function(e, n) {
                        var l = k.queue(e, n = n || "fx"),
                            t = l.length,
                            o = l.shift(),
                            i = k._queueHooks(e, n);
                        "inprogress" === o && (o = l.shift(), t--), o && ("fx" === n && l.unshift("inprogress"), delete i.stop, o.call(e, (function() {
                            k.dequeue(e, n)
                        }), i)), !t && i && i.empty.fire()
                    },
                    _queueHooks: function(e, n) {
                        var l = n + "queueHooks";
                        return J.get(e, l) || J.access(e, l, {
                            empty: k.Callbacks("once memory").add((function() {
                                J.remove(e, [n + "queue", l])
                            }))
                        })
                    }
                }), k.fn.extend({
                    queue: function(e, n) {
                        var l = 2;
                        return "string" != typeof e && (n = e, e = "fx", l--), arguments.length < l ? k.queue(this[0], e) : void 0 === n ? this : this.each((function() {
                            var l = k.queue(this, e, n);
                            k._queueHooks(this, e), "fx" === e && "inprogress" !== l[0] && k.dequeue(this, e)
                        }))
                    },
                    dequeue: function(e) {
                        return this.each((function() {
                            k.dequeue(this, e)
                        }))
                    },
                    clearQueue: function(e) {
                        return this.queue(e || "fx", [])
                    },
                    promise: function(e, n) {
                        var l, t = 1,
                            o = k.Deferred(),
                            i = this,
                            r = this.length,
                            u = function() {
                                --t || o.resolveWith(i, [i])
                            };
                        for ("string" != typeof e && (n = e, e = void 0), e = e || "fx"; r--;)(l = J.get(i[r], e + "queueHooks")) && l.empty && (t++, l.empty.add(u));
                        return u(), o.promise(n)
                    }
                });
                var le = /[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source,
                    te = new RegExp("^(?:([+-])=|)(" + le + ")([a-z%]*)$", "i"),
                    oe = ["Top", "Right", "Bottom", "Left"],
                    ie = b.documentElement,
                    re = function(e) {
                        return k.contains(e.ownerDocument, e)
                    },
                    ue = {
                        composed: !0
                    };
                ie.getRootNode && (re = function(e) {
                    return k.contains(e.ownerDocument, e) || e.getRootNode(ue) === e.ownerDocument
                });
                var ae = function(e, n) {
                    return "none" === (e = n || e).style.display || "" === e.style.display && re(e) && "none" === k.css(e, "display")
                };

                function se(e, n, l, t) {
                    var o, i, r = 20,
                        u = t ? function() {
                            return t.cur()
                        } : function() {
                            return k.css(e, n, "")
                        },
                        a = u(),
                        s = l && l[3] || (k.cssNumber[n] ? "" : "px"),
                        c = e.nodeType && (k.cssNumber[n] || "px" !== s && +a) && te.exec(k.css(e, n));
                    if (c && c[3] !== s) {
                        for (s = s || c[3], c = +(a /= 2) || 1; r--;) k.style(e, n, c + s), (1 - i) * (1 - (i = u() / a || .5)) <= 0 && (r = 0), c /= i;
                        k.style(e, n, (c *= 2) + s), l = l || []
                    }
                    return l && (c = +c || +a || 0, o = l[1] ? c + (l[1] + 1) * l[2] : +l[2], t && (t.unit = s, t.start = c, t.end = o)), o
                }
                var ce = {};

                function de(e) {
                    var n, l = e.ownerDocument,
                        t = e.nodeName,
                        o = ce[t];
                    return o || (n = l.body.appendChild(l.createElement(t)), o = k.css(n, "display"), n.parentNode.removeChild(n), "none" === o && (o = "block"), ce[t] = o, o)
                }

                function fe(e, n) {
                    for (var l, t, o = [], i = 0, r = e.length; i < r; i++)(t = e[i]).style && (l = t.style.display, n ? ("none" === l && (o[i] = J.get(t, "display") || null, o[i] || (t.style.display = "")), "" === t.style.display && ae(t) && (o[i] = de(t))) : "none" !== l && (o[i] = "none", J.set(t, "display", l)));
                    for (i = 0; i < r; i++) null != o[i] && (e[i].style.display = o[i]);
                    return e
                }
                k.fn.extend({
                    show: function() {
                        return fe(this, !0)
                    },
                    hide: function() {
                        return fe(this)
                    },
                    toggle: function(e) {
                        return "boolean" == typeof e ? e ? this.show() : this.hide() : this.each((function() {
                            ae(this) ? k(this).show() : k(this).hide()
                        }))
                    }
                });
                var pe, he, ge = /^(?:checkbox|radio)$/i,
                    ve = /<([a-z][^\/\0>\x20\t\r\n\f]*)/i,
                    me = /^$|^module$|\/(?:java|ecma)script/i;
                pe = b.createDocumentFragment().appendChild(b.createElement("div")), (he = b.createElement("input")).setAttribute("type", "radio"), he.setAttribute("checked", "checked"), he.setAttribute("name", "t"), pe.appendChild(he), v.checkClone = pe.cloneNode(!0).cloneNode(!0).lastChild.checked, pe.innerHTML = "<textarea>x</textarea>", v.noCloneChecked = !!pe.cloneNode(!0).lastChild.defaultValue, pe.innerHTML = "<option></option>", v.option = !!pe.lastChild;
                var ye = {
                    thead: [1, "<table>", "</table>"],
                    col: [2, "<table><colgroup>", "</colgroup></table>"],
                    tr: [2, "<table><tbody>", "</tbody></table>"],
                    td: [3, "<table><tbody><tr>", "</tr></tbody></table>"],
                    _default: [0, "", ""]
                };

                function be(e, n) {
                    var l;
                    return l = void 0 !== e.getElementsByTagName ? e.getElementsByTagName(n || "*") : void 0 !== e.querySelectorAll ? e.querySelectorAll(n || "*") : [], void 0 === n || n && P(e, n) ? k.merge([e], l) : l
                }

                function xe(e, n) {
                    for (var l = 0, t = e.length; l < t; l++) J.set(e[l], "globalEval", !n || J.get(n[l], "globalEval"))
                }
                ye.tbody = ye.tfoot = ye.colgroup = ye.caption = ye.thead, ye.th = ye.td, v.option || (ye.optgroup = ye.option = [1, "<select multiple='multiple'>", "</select>"]);
                var we = /<|&#?\w+;/;

                function Ce(e, n, l, t, o) {
                    for (var i, r, u, a, s, c, d = n.createDocumentFragment(), f = [], p = 0, h = e.length; p < h; p++)
                        if ((i = e[p]) || 0 === i)
                            if ("object" === C(i)) k.merge(f, i.nodeType ? [i] : i);
                            else if (we.test(i)) {
                        for (r = r || d.appendChild(n.createElement("div")), u = (ve.exec(i) || ["", ""])[1].toLowerCase(), r.innerHTML = (a = ye[u] || ye._default)[1] + k.htmlPrefilter(i) + a[2], c = a[0]; c--;) r = r.lastChild;
                        k.merge(f, r.childNodes), (r = d.firstChild).textContent = ""
                    } else f.push(n.createTextNode(i));
                    for (d.textContent = "", p = 0; i = f[p++];)
                        if (t && k.inArray(i, t) > -1) o && o.push(i);
                        else if (s = re(i), r = be(d.appendChild(i), "script"), s && xe(r), l)
                        for (c = 0; i = r[c++];) me.test(i.type || "") && l.push(i);
                    return d
                }
                var ke = /^([^.]*)(?:\.(.+)|)/;

                function Te() {
                    return !0
                }

                function _e() {
                    return !1
                }

                function Oe(e, n) {
                    return e === function() {
                        try {
                            return b.activeElement
                        } catch (e) {}
                    }() == ("focus" === n)
                }

                function Ee(e, n, l, t, o, i) {
                    var r, u;
                    if ("object" == typeof n) {
                        for (u in "string" != typeof l && (t = t || l, l = void 0), n) Ee(e, u, l, t, n[u], i);
                        return e
                    }
                    if (null == t && null == o ? (o = l, t = l = void 0) : null == o && ("string" == typeof l ? (o = t, t = void 0) : (o = t, t = l, l = void 0)), !1 === o) o = _e;
                    else if (!o) return e;
                    return 1 === i && (r = o, (o = function(e) {
                        return k().off(e), r.apply(this, arguments)
                    }).guid = r.guid || (r.guid = k.guid++)), e.each((function() {
                        k.event.add(this, n, o, t, l)
                    }))
                }

                function Se(e, n, l) {
                    l ? (J.set(e, n, !1), k.event.add(e, n, {
                        namespace: !1,
                        handler: function(e) {
                            var t, o, i = J.get(this, n);
                            if (1 & e.isTrigger && this[n]) {
                                if (i.length)(k.event.special[n] || {}).delegateType && e.stopPropagation();
                                else if (i = u.call(arguments), J.set(this, n, i), t = l(this, n), this[n](), i !== (o = J.get(this, n)) || t ? J.set(this, n, !1) : o = {}, i !== o) return e.stopImmediatePropagation(), e.preventDefault(), o && o.value
                            } else i.length && (J.set(this, n, {
                                value: k.event.trigger(k.extend(i[0], k.Event.prototype), i.slice(1), this)
                            }), e.stopImmediatePropagation())
                        }
                    })) : void 0 === J.get(e, n) && k.event.add(e, n, Te)
                }
                k.event = {
                    global: {},
                    add: function(e, n, l, t, o) {
                        var i, r, u, a, s, c, d, f, p, h, g, v = J.get(e);
                        if (G(e))
                            for (l.handler && (l = (i = l).handler, o = i.selector), o && k.find.matchesSelector(ie, o), l.guid || (l.guid = k.guid++), (a = v.events) || (a = v.events = Object.create(null)), (r = v.handle) || (r = v.handle = function(n) {
                                    return void 0 !== k && k.event.triggered !== n.type ? k.event.dispatch.apply(e, arguments) : void 0
                                }), s = (n = (n || "").match(L) || [""]).length; s--;) p = g = (u = ke.exec(n[s]) || [])[1], h = (u[2] || "").split(".").sort(), p && (d = k.event.special[p] || {}, d = k.event.special[p = (o ? d.delegateType : d.bindType) || p] || {}, c = k.extend({
                                type: p,
                                origType: g,
                                data: t,
                                handler: l,
                                guid: l.guid,
                                selector: o,
                                needsContext: o && k.expr.match.needsContext.test(o),
                                namespace: h.join(".")
                            }, i), (f = a[p]) || ((f = a[p] = []).delegateCount = 0, d.setup && !1 !== d.setup.call(e, t, h, r) || e.addEventListener && e.addEventListener(p, r)), d.add && (d.add.call(e, c), c.handler.guid || (c.handler.guid = l.guid)), o ? f.splice(f.delegateCount++, 0, c) : f.push(c), k.event.global[p] = !0)
                    },
                    remove: function(e, n, l, t, o) {
                        var i, r, u, a, s, c, d, f, p, h, g, v = J.hasData(e) && J.get(e);
                        if (v && (a = v.events)) {
                            for (s = (n = (n || "").match(L) || [""]).length; s--;)
                                if (p = g = (u = ke.exec(n[s]) || [])[1], h = (u[2] || "").split(".").sort(), p) {
                                    for (d = k.event.special[p] || {}, f = a[p = (t ? d.delegateType : d.bindType) || p] || [], u = u[2] && new RegExp("(^|\\.)" + h.join("\\.(?:.*\\.|)") + "(\\.|$)"), r = i = f.length; i--;) c = f[i], !o && g !== c.origType || l && l.guid !== c.guid || u && !u.test(c.namespace) || t && t !== c.selector && ("**" !== t || !c.selector) || (f.splice(i, 1), c.selector && f.delegateCount--, d.remove && d.remove.call(e, c));
                                    r && !f.length && (d.teardown && !1 !== d.teardown.call(e, h, v.handle) || k.removeEvent(e, p, v.handle), delete a[p])
                                } else
                                    for (p in a) k.event.remove(e, p + n[s], l, t, !0);
                            k.isEmptyObject(a) && J.remove(e, "handle events")
                        }
                    },
                    dispatch: function(e) {
                        var n, l, t, o, i, r, u = new Array(arguments.length),
                            a = k.event.fix(e),
                            s = (J.get(this, "events") || Object.create(null))[a.type] || [],
                            c = k.event.special[a.type] || {};
                        for (u[0] = a, n = 1; n < arguments.length; n++) u[n] = arguments[n];
                        if (a.delegateTarget = this, !c.preDispatch || !1 !== c.preDispatch.call(this, a)) {
                            for (r = k.event.handlers.call(this, a, s), n = 0;
                                (o = r[n++]) && !a.isPropagationStopped();)
                                for (a.currentTarget = o.elem, l = 0;
                                    (i = o.handlers[l++]) && !a.isImmediatePropagationStopped();) a.rnamespace && !1 !== i.namespace && !a.rnamespace.test(i.namespace) || (a.handleObj = i, a.data = i.data, void 0 !== (t = ((k.event.special[i.origType] || {}).handle || i.handler).apply(o.elem, u)) && !1 === (a.result = t) && (a.preventDefault(), a.stopPropagation()));
                            return c.postDispatch && c.postDispatch.call(this, a), a.result
                        }
                    },
                    handlers: function(e, n) {
                        var l, t, o, i, r, u = [],
                            a = n.delegateCount,
                            s = e.target;
                        if (a && s.nodeType && !("click" === e.type && e.button >= 1))
                            for (; s !== this; s = s.parentNode || this)
                                if (1 === s.nodeType && ("click" !== e.type || !0 !== s.disabled)) {
                                    for (i = [], r = {}, l = 0; l < a; l++) void 0 === r[o = (t = n[l]).selector + " "] && (r[o] = t.needsContext ? k(o, this).index(s) > -1 : k.find(o, this, null, [s]).length), r[o] && i.push(t);
                                    i.length && u.push({
                                        elem: s,
                                        handlers: i
                                    })
                                }
                        return s = this, a < n.length && u.push({
                            elem: s,
                            handlers: n.slice(a)
                        }), u
                    },
                    addProp: function(e, n) {
                        Object.defineProperty(k.Event.prototype, e, {
                            enumerable: !0,
                            configurable: !0,
                            get: m(n) ? function() {
                                if (this.originalEvent) return n(this.originalEvent)
                            } : function() {
                                if (this.originalEvent) return this.originalEvent[e]
                            },
                            set: function(n) {
                                Object.defineProperty(this, e, {
                                    enumerable: !0,
                                    configurable: !0,
                                    writable: !0,
                                    value: n
                                })
                            }
                        })
                    },
                    fix: function(e) {
                        return e[k.expando] ? e : new k.Event(e)
                    },
                    special: {
                        load: {
                            noBubble: !0
                        },
                        click: {
                            setup: function(e) {
                                var n = this || e;
                                return ge.test(n.type) && n.click && P(n, "input") && Se(n, "click", Te), !1
                            },
                            trigger: function(e) {
                                var n = this || e;
                                return ge.test(n.type) && n.click && P(n, "input") && Se(n, "click"), !0
                            },
                            _default: function(e) {
                                var n = e.target;
                                return ge.test(n.type) && n.click && P(n, "input") && J.get(n, "click") || P(n, "a")
                            }
                        },
                        beforeunload: {
                            postDispatch: function(e) {
                                void 0 !== e.result && e.originalEvent && (e.originalEvent.returnValue = e.result)
                            }
                        }
                    }
                }, k.removeEvent = function(e, n, l) {
                    e.removeEventListener && e.removeEventListener(n, l)
                }, k.Event = function(e, n) {
                    if (!(this instanceof k.Event)) return new k.Event(e, n);
                    e && e.type ? (this.originalEvent = e, this.type = e.type, this.isDefaultPrevented = e.defaultPrevented || void 0 === e.defaultPrevented && !1 === e.returnValue ? Te : _e, this.target = e.target && 3 === e.target.nodeType ? e.target.parentNode : e.target, this.currentTarget = e.currentTarget, this.relatedTarget = e.relatedTarget) : this.type = e, n && k.extend(this, n), this.timeStamp = e && e.timeStamp || Date.now(), this[k.expando] = !0
                }, k.Event.prototype = {
                    constructor: k.Event,
                    isDefaultPrevented: _e,
                    isPropagationStopped: _e,
                    isImmediatePropagationStopped: _e,
                    isSimulated: !1,
                    preventDefault: function() {
                        var e = this.originalEvent;
                        this.isDefaultPrevented = Te, e && !this.isSimulated && e.preventDefault()
                    },
                    stopPropagation: function() {
                        var e = this.originalEvent;
                        this.isPropagationStopped = Te, e && !this.isSimulated && e.stopPropagation()
                    },
                    stopImmediatePropagation: function() {
                        var e = this.originalEvent;
                        this.isImmediatePropagationStopped = Te, e && !this.isSimulated && e.stopImmediatePropagation(), this.stopPropagation()
                    }
                }, k.each({
                    altKey: !0,
                    bubbles: !0,
                    cancelable: !0,
                    changedTouches: !0,
                    ctrlKey: !0,
                    detail: !0,
                    eventPhase: !0,
                    metaKey: !0,
                    pageX: !0,
                    pageY: !0,
                    shiftKey: !0,
                    view: !0,
                    char: !0,
                    code: !0,
                    charCode: !0,
                    key: !0,
                    keyCode: !0,
                    button: !0,
                    buttons: !0,
                    clientX: !0,
                    clientY: !0,
                    offsetX: !0,
                    offsetY: !0,
                    pointerId: !0,
                    pointerType: !0,
                    screenX: !0,
                    screenY: !0,
                    targetTouches: !0,
                    toElement: !0,
                    touches: !0,
                    which: !0
                }, k.event.addProp), k.each({
                    focus: "focusin",
                    blur: "focusout"
                }, (function(e, n) {
                    k.event.special[e] = {
                        setup: function() {
                            return Se(this, e, Oe), !1
                        },
                        trigger: function() {
                            return Se(this, e), !0
                        },
                        _default: function() {
                            return !0
                        },
                        delegateType: n
                    }
                })), k.each({
                    mouseenter: "mouseover",
                    mouseleave: "mouseout",
                    pointerenter: "pointerover",
                    pointerleave: "pointerout"
                }, (function(e, n) {
                    k.event.special[e] = {
                        delegateType: n,
                        bindType: n,
                        handle: function(e) {
                            var l, t = this,
                                o = e.relatedTarget,
                                i = e.handleObj;
                            return o && (o === t || k.contains(t, o)) || (e.type = i.origType, l = i.handler.apply(this, arguments), e.type = n), l
                        }
                    }
                })), k.fn.extend({
                    on: function(e, n, l, t) {
                        return Ee(this, e, n, l, t)
                    },
                    one: function(e, n, l, t) {
                        return Ee(this, e, n, l, t, 1)
                    },
                    off: function(e, n, l) {
                        var t, o;
                        if (e && e.preventDefault && e.handleObj) return t = e.handleObj, k(e.delegateTarget).off(t.namespace ? t.origType + "." + t.namespace : t.origType, t.selector, t.handler), this;
                        if ("object" == typeof e) {
                            for (o in e) this.off(o, n, e[o]);
                            return this
                        }
                        return !1 !== n && "function" != typeof n || (l = n, n = void 0), !1 === l && (l = _e), this.each((function() {
                            k.event.remove(this, e, l, n)
                        }))
                    }
                });
                var Pe = /<script|<style|<link/i,
                    Ae = /checked\s*(?:[^=]|=\s*.checked.)/i,
                    Me = /^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g;

                function De(e, n) {
                    return P(e, "table") && P(11 !== n.nodeType ? n : n.firstChild, "tr") && k(e).children("tbody")[0] || e
                }

                function Ne(e) {
                    return e.type = (null !== e.getAttribute("type")) + "/" + e.type, e
                }

                function je(e) {
                    return "true/" === (e.type || "").slice(0, 5) ? e.type = e.type.slice(5) : e.removeAttribute("type"), e
                }

                function Ie(e, n) {
                    var l, t, o, i, r, u;
                    if (1 === n.nodeType) {
                        if (J.hasData(e) && (u = J.get(e).events))
                            for (o in J.remove(n, "handle events"), u)
                                for (l = 0, t = u[o].length; l < t; l++) k.event.add(n, o, u[o][l]);
                        Q.hasData(e) && (i = Q.access(e), r = k.extend({}, i), Q.set(n, r))
                    }
                }

                function qe(e, n) {
                    var l = n.nodeName.toLowerCase();
                    "input" === l && ge.test(e.type) ? n.checked = e.checked : "input" !== l && "textarea" !== l || (n.defaultValue = e.defaultValue)
                }

                function Le(e, n, l, t) {
                    n = a(n);
                    var o, i, r, u, s, c, d = 0,
                        f = e.length,
                        p = f - 1,
                        h = n[0],
                        g = m(h);
                    if (g || f > 1 && "string" == typeof h && !v.checkClone && Ae.test(h)) return e.each((function(o) {
                        var i = e.eq(o);
                        g && (n[0] = h.call(this, o, i.html())), Le(i, n, l, t)
                    }));
                    if (f && (i = (o = Ce(n, e[0].ownerDocument, !1, e, t)).firstChild, 1 === o.childNodes.length && (o = i), i || t)) {
                        for (u = (r = k.map(be(o, "script"), Ne)).length; d < f; d++) s = o, d !== p && (s = k.clone(s, !0, !0), u && k.merge(r, be(s, "script"))), l.call(e[d], s, d);
                        if (u)
                            for (c = r[r.length - 1].ownerDocument, k.map(r, je), d = 0; d < u; d++) me.test((s = r[d]).type || "") && !J.access(s, "globalEval") && k.contains(c, s) && (s.src && "module" !== (s.type || "").toLowerCase() ? k._evalUrl && !s.noModule && k._evalUrl(s.src, {
                                nonce: s.nonce || s.getAttribute("nonce")
                            }, c) : w(s.textContent.replace(Me, ""), s, c))
                    }
                    return e
                }

                function Re(e, n, l) {
                    for (var t, o = n ? k.filter(n, e) : e, i = 0; null != (t = o[i]); i++) l || 1 !== t.nodeType || k.cleanData(be(t)), t.parentNode && (l && re(t) && xe(be(t, "script")), t.parentNode.removeChild(t));
                    return e
                }
                k.extend({
                    htmlPrefilter: function(e) {
                        return e
                    },
                    clone: function(e, n, l) {
                        var t, o, i, r, u = e.cloneNode(!0),
                            a = re(e);
                        if (!(v.noCloneChecked || 1 !== e.nodeType && 11 !== e.nodeType || k.isXMLDoc(e)))
                            for (r = be(u), t = 0, o = (i = be(e)).length; t < o; t++) qe(i[t], r[t]);
                        if (n)
                            if (l)
                                for (i = i || be(e), r = r || be(u), t = 0, o = i.length; t < o; t++) Ie(i[t], r[t]);
                            else Ie(e, u);
                        return (r = be(u, "script")).length > 0 && xe(r, !a && be(e, "script")), u
                    },
                    cleanData: function(e) {
                        for (var n, l, t, o = k.event.special, i = 0; void 0 !== (l = e[i]); i++)
                            if (G(l)) {
                                if (n = l[J.expando]) {
                                    if (n.events)
                                        for (t in n.events) o[t] ? k.event.remove(l, t) : k.removeEvent(l, t, n.handle);
                                    l[J.expando] = void 0
                                }
                                l[Q.expando] && (l[Q.expando] = void 0)
                            }
                    }
                }), k.fn.extend({
                    detach: function(e) {
                        return Re(this, e, !0)
                    },
                    remove: function(e) {
                        return Re(this, e)
                    },
                    text: function(e) {
                        return z(this, (function(e) {
                            return void 0 === e ? k.text(this) : this.empty().each((function() {
                                1 !== this.nodeType && 11 !== this.nodeType && 9 !== this.nodeType || (this.textContent = e)
                            }))
                        }), null, e, arguments.length)
                    },
                    append: function() {
                        return Le(this, arguments, (function(e) {
                            1 !== this.nodeType && 11 !== this.nodeType && 9 !== this.nodeType || De(this, e).appendChild(e)
                        }))
                    },
                    prepend: function() {
                        return Le(this, arguments, (function(e) {
                            if (1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) {
                                var n = De(this, e);
                                n.insertBefore(e, n.firstChild)
                            }
                        }))
                    },
                    before: function() {
                        return Le(this, arguments, (function(e) {
                            this.parentNode && this.parentNode.insertBefore(e, this)
                        }))
                    },
                    after: function() {
                        return Le(this, arguments, (function(e) {
                            this.parentNode && this.parentNode.insertBefore(e, this.nextSibling)
                        }))
                    },
                    empty: function() {
                        for (var e, n = 0; null != (e = this[n]); n++) 1 === e.nodeType && (k.cleanData(be(e, !1)), e.textContent = "");
                        return this
                    },
                    clone: function(e, n) {
                        return e = null != e && e, n = null == n ? e : n, this.map((function() {
                            return k.clone(this, e, n)
                        }))
                    },
                    html: function(e) {
                        return z(this, (function(e) {
                            var n = this[0] || {},
                                l = 0,
                                t = this.length;
                            if (void 0 === e && 1 === n.nodeType) return n.innerHTML;
                            if ("string" == typeof e && !Pe.test(e) && !ye[(ve.exec(e) || ["", ""])[1].toLowerCase()]) {
                                e = k.htmlPrefilter(e);
                                try {
                                    for (; l < t; l++) 1 === (n = this[l] || {}).nodeType && (k.cleanData(be(n, !1)), n.innerHTML = e);
                                    n = 0
                                } catch (o) {}
                            }
                            n && this.empty().append(e)
                        }), null, e, arguments.length)
                    },
                    replaceWith: function() {
                        var e = [];
                        return Le(this, arguments, (function(n) {
                            var l = this.parentNode;
                            k.inArray(this, e) < 0 && (k.cleanData(be(this)), l && l.replaceChild(n, this))
                        }), e)
                    }
                }), k.each({
                    appendTo: "append",
                    prependTo: "prepend",
                    insertBefore: "before",
                    insertAfter: "after",
                    replaceAll: "replaceWith"
                }, (function(e, n) {
                    k.fn[e] = function(e) {
                        for (var l, t = [], o = k(e), i = o.length - 1, r = 0; r <= i; r++) l = r === i ? this : this.clone(!0), k(o[r])[n](l), s.apply(t, l.get());
                        return this.pushStack(t)
                    }
                }));
                var He = new RegExp("^(" + le + ")(?!px)[a-z%]+$", "i"),
                    We = function(e) {
                        var n = e.ownerDocument.defaultView;
                        return n && n.opener || (n = l), n.getComputedStyle(e)
                    },
                    Be = function(e, n, l) {
                        var t, o, i = {};
                        for (o in n) i[o] = e.style[o], e.style[o] = n[o];
                        for (o in t = l.call(e), n) e.style[o] = i[o];
                        return t
                    },
                    Fe = new RegExp(oe.join("|"), "i");

                function $e(e, n, l) {
                    var t, o, i, r, u = e.style;
                    return (l = l || We(e)) && ("" !== (r = l.getPropertyValue(n) || l[n]) || re(e) || (r = k.style(e, n)), !v.pixelBoxStyles() && He.test(r) && Fe.test(n) && (t = u.width, o = u.minWidth, i = u.maxWidth, u.minWidth = u.maxWidth = u.width = r, r = l.width, u.width = t, u.minWidth = o, u.maxWidth = i)), void 0 !== r ? r + "" : r
                }

                function ze(e, n) {
                    return {
                        get: function() {
                            if (!e()) return (this.get = n).apply(this, arguments);
                            delete this.get
                        }
                    }
                }! function() {
                    function e() {
                        if (c) {
                            s.style.cssText = "position:absolute;left:-11111px;width:60px;margin-top:1px;padding:0;border:0", c.style.cssText = "position:relative;display:block;box-sizing:border-box;overflow:scroll;margin:auto;border:1px;padding:1px;width:60%;top:1%", ie.appendChild(s).appendChild(c);
                            var e = l.getComputedStyle(c);
                            t = "1%" !== e.top, a = 12 === n(e.marginLeft), c.style.right = "60%", r = 36 === n(e.right), o = 36 === n(e.width), c.style.position = "absolute", i = 12 === n(c.offsetWidth / 3), ie.removeChild(s), c = null
                        }
                    }

                    function n(e) {
                        return Math.round(parseFloat(e))
                    }
                    var t, o, i, r, u, a, s = b.createElement("div"),
                        c = b.createElement("div");
                    c.style && (c.style.backgroundClip = "content-box", c.cloneNode(!0).style.backgroundClip = "", v.clearCloneStyle = "content-box" === c.style.backgroundClip, k.extend(v, {
                        boxSizingReliable: function() {
                            return e(), o
                        },
                        pixelBoxStyles: function() {
                            return e(), r
                        },
                        pixelPosition: function() {
                            return e(), t
                        },
                        reliableMarginLeft: function() {
                            return e(), a
                        },
                        scrollboxSize: function() {
                            return e(), i
                        },
                        reliableTrDimensions: function() {
                            var e, n, t, o;
                            return null == u && (e = b.createElement("table"), n = b.createElement("tr"), t = b.createElement("div"), e.style.cssText = "position:absolute;left:-11111px;border-collapse:separate", n.style.cssText = "border:1px solid", n.style.height = "1px", t.style.height = "9px", t.style.display = "block", ie.appendChild(e).appendChild(n).appendChild(t), o = l.getComputedStyle(n), u = parseInt(o.height, 10) + parseInt(o.borderTopWidth, 10) + parseInt(o.borderBottomWidth, 10) === n.offsetHeight, ie.removeChild(e)), u
                        }
                    }))
                }();
                var Ve = ["Webkit", "Moz", "ms"],
                    Ue = b.createElement("div").style,
                    Ye = {};

                function Xe(e) {
                    return k.cssProps[e] || Ye[e] || (e in Ue ? e : Ye[e] = function(e) {
                        for (var n = e[0].toUpperCase() + e.slice(1), l = Ve.length; l--;)
                            if ((e = Ve[l] + n) in Ue) return e
                    }(e) || e)
                }
                var Ge = /^(none|table(?!-c[ea]).+)/,
                    Ke = /^--/,
                    Je = {
                        position: "absolute",
                        visibility: "hidden",
                        display: "block"
                    },
                    Qe = {
                        letterSpacing: "0",
                        fontWeight: "400"
                    };

                function Ze(e, n, l) {
                    var t = te.exec(n);
                    return t ? Math.max(0, t[2] - (l || 0)) + (t[3] || "px") : n
                }

                function en(e, n, l, t, o, i) {
                    var r = "width" === n ? 1 : 0,
                        u = 0,
                        a = 0;
                    if (l === (t ? "border" : "content")) return 0;
                    for (; r < 4; r += 2) "margin" === l && (a += k.css(e, l + oe[r], !0, o)), t ? ("content" === l && (a -= k.css(e, "padding" + oe[r], !0, o)), "margin" !== l && (a -= k.css(e, "border" + oe[r] + "Width", !0, o))) : (a += k.css(e, "padding" + oe[r], !0, o), "padding" !== l ? a += k.css(e, "border" + oe[r] + "Width", !0, o) : u += k.css(e, "border" + oe[r] + "Width", !0, o));
                    return !t && i >= 0 && (a += Math.max(0, Math.ceil(e["offset" + n[0].toUpperCase() + n.slice(1)] - i - a - u - .5)) || 0), a
                }

                function nn(e, n, l) {
                    var t = We(e),
                        o = (!v.boxSizingReliable() || l) && "border-box" === k.css(e, "boxSizing", !1, t),
                        i = o,
                        r = $e(e, n, t),
                        u = "offset" + n[0].toUpperCase() + n.slice(1);
                    if (He.test(r)) {
                        if (!l) return r;
                        r = "auto"
                    }
                    return (!v.boxSizingReliable() && o || !v.reliableTrDimensions() && P(e, "tr") || "auto" === r || !parseFloat(r) && "inline" === k.css(e, "display", !1, t)) && e.getClientRects().length && (o = "border-box" === k.css(e, "boxSizing", !1, t), (i = u in e) && (r = e[u])), (r = parseFloat(r) || 0) + en(e, n, l || (o ? "border" : "content"), i, t, r) + "px"
                }

                function ln(e, n, l, t, o) {
                    return new ln.prototype.init(e, n, l, t, o)
                }
                k.extend({
                    cssHooks: {
                        opacity: {
                            get: function(e, n) {
                                if (n) {
                                    var l = $e(e, "opacity");
                                    return "" === l ? "1" : l
                                }
                            }
                        }
                    },
                    cssNumber: {
                        animationIterationCount: !0,
                        columnCount: !0,
                        fillOpacity: !0,
                        flexGrow: !0,
                        flexShrink: !0,
                        fontWeight: !0,
                        gridArea: !0,
                        gridColumn: !0,
                        gridColumnEnd: !0,
                        gridColumnStart: !0,
                        gridRow: !0,
                        gridRowEnd: !0,
                        gridRowStart: !0,
                        lineHeight: !0,
                        opacity: !0,
                        order: !0,
                        orphans: !0,
                        widows: !0,
                        zIndex: !0,
                        zoom: !0
                    },
                    cssProps: {},
                    style: function(e, n, l, t) {
                        if (e && 3 !== e.nodeType && 8 !== e.nodeType && e.style) {
                            var o, i, r, u = X(n),
                                a = Ke.test(n),
                                s = e.style;
                            if (a || (n = Xe(u)), r = k.cssHooks[n] || k.cssHooks[u], void 0 === l) return r && "get" in r && void 0 !== (o = r.get(e, !1, t)) ? o : s[n];
                            "string" == (i = typeof l) && (o = te.exec(l)) && o[1] && (l = se(e, n, o), i = "number"), null != l && l == l && ("number" !== i || a || (l += o && o[3] || (k.cssNumber[u] ? "" : "px")), v.clearCloneStyle || "" !== l || 0 !== n.indexOf("background") || (s[n] = "inherit"), r && "set" in r && void 0 === (l = r.set(e, l, t)) || (a ? s.setProperty(n, l) : s[n] = l))
                        }
                    },
                    css: function(e, n, l, t) {
                        var o, i, r, u = X(n);
                        return Ke.test(n) || (n = Xe(u)), (r = k.cssHooks[n] || k.cssHooks[u]) && "get" in r && (o = r.get(e, !0, l)), void 0 === o && (o = $e(e, n, t)), "normal" === o && n in Qe && (o = Qe[n]), "" === l || l ? (i = parseFloat(o), !0 === l || isFinite(i) ? i || 0 : o) : o
                    }
                }), k.each(["height", "width"], (function(e, n) {
                    k.cssHooks[n] = {
                        get: function(e, l, t) {
                            if (l) return !Ge.test(k.css(e, "display")) || e.getClientRects().length && e.getBoundingClientRect().width ? nn(e, n, t) : Be(e, Je, (function() {
                                return nn(e, n, t)
                            }))
                        },
                        set: function(e, l, t) {
                            var o, i = We(e),
                                r = !v.scrollboxSize() && "absolute" === i.position,
                                u = (r || t) && "border-box" === k.css(e, "boxSizing", !1, i),
                                a = t ? en(e, n, t, u, i) : 0;
                            return u && r && (a -= Math.ceil(e["offset" + n[0].toUpperCase() + n.slice(1)] - parseFloat(i[n]) - en(e, n, "border", !1, i) - .5)), a && (o = te.exec(l)) && "px" !== (o[3] || "px") && (e.style[n] = l, l = k.css(e, n)), Ze(0, l, a)
                        }
                    }
                })), k.cssHooks.marginLeft = ze(v.reliableMarginLeft, (function(e, n) {
                    if (n) return (parseFloat($e(e, "marginLeft")) || e.getBoundingClientRect().left - Be(e, {
                        marginLeft: 0
                    }, (function() {
                        return e.getBoundingClientRect().left
                    }))) + "px"
                })), k.each({
                    margin: "",
                    padding: "",
                    border: "Width"
                }, (function(e, n) {
                    k.cssHooks[e + n] = {
                        expand: function(l) {
                            for (var t = 0, o = {}, i = "string" == typeof l ? l.split(" ") : [l]; t < 4; t++) o[e + oe[t] + n] = i[t] || i[t - 2] || i[0];
                            return o
                        }
                    }, "margin" !== e && (k.cssHooks[e + n].set = Ze)
                })), k.fn.extend({
                    css: function(e, n) {
                        return z(this, (function(e, n, l) {
                            var t, o, i = {},
                                r = 0;
                            if (Array.isArray(n)) {
                                for (t = We(e), o = n.length; r < o; r++) i[n[r]] = k.css(e, n[r], !1, t);
                                return i
                            }
                            return void 0 !== l ? k.style(e, n, l) : k.css(e, n)
                        }), e, n, arguments.length > 1)
                    }
                }), k.Tween = ln, (ln.prototype = {
                    constructor: ln,
                    init: function(e, n, l, t, o, i) {
                        this.elem = e, this.prop = l, this.easing = o || k.easing._default, this.options = n, this.start = this.now = this.cur(), this.end = t, this.unit = i || (k.cssNumber[l] ? "" : "px")
                    },
                    cur: function() {
                        var e = ln.propHooks[this.prop];
                        return e && e.get ? e.get(this) : ln.propHooks._default.get(this)
                    },
                    run: function(e) {
                        var n, l = ln.propHooks[this.prop];
                        return this.pos = n = this.options.duration ? k.easing[this.easing](e, this.options.duration * e, 0, 1, this.options.duration) : e, this.now = (this.end - this.start) * n + this.start, this.options.step && this.options.step.call(this.elem, this.now, this), l && l.set ? l.set(this) : ln.propHooks._default.set(this), this
                    }
                }).init.prototype = ln.prototype, (ln.propHooks = {
                    _default: {
                        get: function(e) {
                            var n;
                            return 1 !== e.elem.nodeType || null != e.elem[e.prop] && null == e.elem.style[e.prop] ? e.elem[e.prop] : (n = k.css(e.elem, e.prop, "")) && "auto" !== n ? n : 0
                        },
                        set: function(e) {
                            k.fx.step[e.prop] ? k.fx.step[e.prop](e) : 1 !== e.elem.nodeType || !k.cssHooks[e.prop] && null == e.elem.style[Xe(e.prop)] ? e.elem[e.prop] = e.now : k.style(e.elem, e.prop, e.now + e.unit)
                        }
                    }
                }).scrollTop = ln.propHooks.scrollLeft = {
                    set: function(e) {
                        e.elem.nodeType && e.elem.parentNode && (e.elem[e.prop] = e.now)
                    }
                }, k.easing = {
                    linear: function(e) {
                        return e
                    },
                    swing: function(e) {
                        return .5 - Math.cos(e * Math.PI) / 2
                    },
                    _default: "swing"
                }, k.fx = ln.prototype.init, k.fx.step = {};
                var tn, on, rn = /^(?:toggle|show|hide)$/,
                    un = /queueHooks$/;

                function an() {
                    on && (!1 === b.hidden && l.requestAnimationFrame ? l.requestAnimationFrame(an) : l.setTimeout(an, k.fx.interval), k.fx.tick())
                }

                function sn() {
                    return l.setTimeout((function() {
                        tn = void 0
                    })), tn = Date.now()
                }

                function cn(e, n) {
                    var l, t = 0,
                        o = {
                            height: e
                        };
                    for (n = n ? 1 : 0; t < 4; t += 2 - n) o["margin" + (l = oe[t])] = o["padding" + l] = e;
                    return n && (o.opacity = o.width = e), o
                }

                function dn(e, n, l) {
                    for (var t, o = (fn.tweeners[n] || []).concat(fn.tweeners["*"]), i = 0, r = o.length; i < r; i++)
                        if (t = o[i].call(l, n, e)) return t
                }

                function fn(e, n, l) {
                    var t, o, i = 0,
                        r = fn.prefilters.length,
                        u = k.Deferred().always((function() {
                            delete a.elem
                        })),
                        a = function() {
                            if (o) return !1;
                            for (var n = tn || sn(), l = Math.max(0, s.startTime + s.duration - n), t = 1 - (l / s.duration || 0), i = 0, r = s.tweens.length; i < r; i++) s.tweens[i].run(t);
                            return u.notifyWith(e, [s, t, l]), t < 1 && r ? l : (r || u.notifyWith(e, [s, 1, 0]), u.resolveWith(e, [s]), !1)
                        },
                        s = u.promise({
                            elem: e,
                            props: k.extend({}, n),
                            opts: k.extend(!0, {
                                specialEasing: {},
                                easing: k.easing._default
                            }, l),
                            originalProperties: n,
                            originalOptions: l,
                            startTime: tn || sn(),
                            duration: l.duration,
                            tweens: [],
                            createTween: function(n, l) {
                                var t = k.Tween(e, s.opts, n, l, s.opts.specialEasing[n] || s.opts.easing);
                                return s.tweens.push(t), t
                            },
                            stop: function(n) {
                                var l = 0,
                                    t = n ? s.tweens.length : 0;
                                if (o) return this;
                                for (o = !0; l < t; l++) s.tweens[l].run(1);
                                return n ? (u.notifyWith(e, [s, 1, 0]), u.resolveWith(e, [s, n])) : u.rejectWith(e, [s, n]), this
                            }
                        }),
                        c = s.props;
                    for (function(e, n) {
                            var l, t, o, i, r;
                            for (l in e)
                                if (o = n[t = X(l)], i = e[l], Array.isArray(i) && (o = i[1], i = e[l] = i[0]), l !== t && (e[t] = i, delete e[l]), (r = k.cssHooks[t]) && "expand" in r)
                                    for (l in i = r.expand(i), delete e[t], i) l in e || (e[l] = i[l], n[l] = o);
                                else n[t] = o
                        }(c, s.opts.specialEasing); i < r; i++)
                        if (t = fn.prefilters[i].call(s, e, c, s.opts)) return m(t.stop) && (k._queueHooks(s.elem, s.opts.queue).stop = t.stop.bind(t)), t;
                    return k.map(c, dn, s), m(s.opts.start) && s.opts.start.call(e, s), s.progress(s.opts.progress).done(s.opts.done, s.opts.complete).fail(s.opts.fail).always(s.opts.always), k.fx.timer(k.extend(a, {
                        elem: e,
                        anim: s,
                        queue: s.opts.queue
                    })), s
                }
                k.Animation = k.extend(fn, {
                        tweeners: {
                            "*": [function(e, n) {
                                var l = this.createTween(e, n);
                                return se(l.elem, e, te.exec(n), l), l
                            }]
                        },
                        tweener: function(e, n) {
                            m(e) ? (n = e, e = ["*"]) : e = e.match(L);
                            for (var l, t = 0, o = e.length; t < o; t++)(fn.tweeners[l = e[t]] = fn.tweeners[l] || []).unshift(n)
                        },
                        prefilters: [function(e, n, l) {
                            var t, o, i, r, u, a, s, c, d = "width" in n || "height" in n,
                                f = this,
                                p = {},
                                h = e.style,
                                g = e.nodeType && ae(e),
                                v = J.get(e, "fxshow");
                            for (t in l.queue || (null == (r = k._queueHooks(e, "fx")).unqueued && (r.unqueued = 0, u = r.empty.fire, r.empty.fire = function() {
                                    r.unqueued || u()
                                }), r.unqueued++, f.always((function() {
                                    f.always((function() {
                                        r.unqueued--, k.queue(e, "fx").length || r.empty.fire()
                                    }))
                                }))), n)
                                if (rn.test(o = n[t])) {
                                    if (delete n[t], i = i || "toggle" === o, o === (g ? "hide" : "show")) {
                                        if ("show" !== o || !v || void 0 === v[t]) continue;
                                        g = !0
                                    }
                                    p[t] = v && v[t] || k.style(e, t)
                                }
                            if ((a = !k.isEmptyObject(n)) || !k.isEmptyObject(p))
                                for (t in d && 1 === e.nodeType && (l.overflow = [h.overflow, h.overflowX, h.overflowY], null == (s = v && v.display) && (s = J.get(e, "display")), "none" === (c = k.css(e, "display")) && (s ? c = s : (fe([e], !0), s = e.style.display || s, c = k.css(e, "display"), fe([e]))), ("inline" === c || "inline-block" === c && null != s) && "none" === k.css(e, "float") && (a || (f.done((function() {
                                        h.display = s
                                    })), null == s && (s = "none" === (c = h.display) ? "" : c)), h.display = "inline-block")), l.overflow && (h.overflow = "hidden", f.always((function() {
                                        h.overflow = l.overflow[0], h.overflowX = l.overflow[1], h.overflowY = l.overflow[2]
                                    }))), a = !1, p) a || (v ? "hidden" in v && (g = v.hidden) : v = J.access(e, "fxshow", {
                                    display: s
                                }), i && (v.hidden = !g), g && fe([e], !0), f.done((function() {
                                    for (t in g || fe([e]), J.remove(e, "fxshow"), p) k.style(e, t, p[t])
                                }))), a = dn(g ? v[t] : 0, t, f), t in v || (v[t] = a.start, g && (a.end = a.start, a.start = 0))
                        }],
                        prefilter: function(e, n) {
                            n ? fn.prefilters.unshift(e) : fn.prefilters.push(e)
                        }
                    }), k.speed = function(e, n, l) {
                        var t = e && "object" == typeof e ? k.extend({}, e) : {
                            complete: l || !l && n || m(e) && e,
                            duration: e,
                            easing: l && n || n && !m(n) && n
                        };
                        return k.fx.off ? t.duration = 0 : "number" != typeof t.duration && (t.duration = t.duration in k.fx.speeds ? k.fx.speeds[t.duration] : k.fx.speeds._default), null != t.queue && !0 !== t.queue || (t.queue = "fx"), t.old = t.complete, t.complete = function() {
                            m(t.old) && t.old.call(this), t.queue && k.dequeue(this, t.queue)
                        }, t
                    }, k.fn.extend({
                        fadeTo: function(e, n, l, t) {
                            return this.filter(ae).css("opacity", 0).show().end().animate({
                                opacity: n
                            }, e, l, t)
                        },
                        animate: function(e, n, l, t) {
                            var o = k.isEmptyObject(e),
                                i = k.speed(n, l, t),
                                r = function() {
                                    var n = fn(this, k.extend({}, e), i);
                                    (o || J.get(this, "finish")) && n.stop(!0)
                                };
                            return r.finish = r, o || !1 === i.queue ? this.each(r) : this.queue(i.queue, r)
                        },
                        stop: function(e, n, l) {
                            var t = function(e) {
                                var n = e.stop;
                                delete e.stop, n(l)
                            };
                            return "string" != typeof e && (l = n, n = e, e = void 0), n && this.queue(e || "fx", []), this.each((function() {
                                var n = !0,
                                    o = null != e && e + "queueHooks",
                                    i = k.timers,
                                    r = J.get(this);
                                if (o) r[o] && r[o].stop && t(r[o]);
                                else
                                    for (o in r) r[o] && r[o].stop && un.test(o) && t(r[o]);
                                for (o = i.length; o--;) i[o].elem !== this || null != e && i[o].queue !== e || (i[o].anim.stop(l), n = !1, i.splice(o, 1));
                                !n && l || k.dequeue(this, e)
                            }))
                        },
                        finish: function(e) {
                            return !1 !== e && (e = e || "fx"), this.each((function() {
                                var n, l = J.get(this),
                                    t = l[e + "queue"],
                                    o = l[e + "queueHooks"],
                                    i = k.timers,
                                    r = t ? t.length : 0;
                                for (l.finish = !0, k.queue(this, e, []), o && o.stop && o.stop.call(this, !0), n = i.length; n--;) i[n].elem === this && i[n].queue === e && (i[n].anim.stop(!0), i.splice(n, 1));
                                for (n = 0; n < r; n++) t[n] && t[n].finish && t[n].finish.call(this);
                                delete l.finish
                            }))
                        }
                    }), k.each(["toggle", "show", "hide"], (function(e, n) {
                        var l = k.fn[n];
                        k.fn[n] = function(e, t, o) {
                            return null == e || "boolean" == typeof e ? l.apply(this, arguments) : this.animate(cn(n, !0), e, t, o)
                        }
                    })), k.each({
                        slideDown: cn("show"),
                        slideUp: cn("hide"),
                        slideToggle: cn("toggle"),
                        fadeIn: {
                            opacity: "show"
                        },
                        fadeOut: {
                            opacity: "hide"
                        },
                        fadeToggle: {
                            opacity: "toggle"
                        }
                    }, (function(e, n) {
                        k.fn[e] = function(e, l, t) {
                            return this.animate(n, e, l, t)
                        }
                    })), k.timers = [], k.fx.tick = function() {
                        var e, n = 0,
                            l = k.timers;
                        for (tn = Date.now(); n < l.length; n++)(e = l[n])() || l[n] !== e || l.splice(n--, 1);
                        l.length || k.fx.stop(), tn = void 0
                    }, k.fx.timer = function(e) {
                        k.timers.push(e), k.fx.start()
                    }, k.fx.interval = 13, k.fx.start = function() {
                        on || (on = !0, an())
                    }, k.fx.stop = function() {
                        on = null
                    }, k.fx.speeds = {
                        slow: 600,
                        fast: 200,
                        _default: 400
                    }, k.fn.delay = function(e, n) {
                        return e = k.fx && k.fx.speeds[e] || e, this.queue(n = n || "fx", (function(n, t) {
                            var o = l.setTimeout(n, e);
                            t.stop = function() {
                                l.clearTimeout(o)
                            }
                        }))
                    },
                    function() {
                        var e = b.createElement("input"),
                            n = b.createElement("select").appendChild(b.createElement("option"));
                        e.type = "checkbox", v.checkOn = "" !== e.value, v.optSelected = n.selected, (e = b.createElement("input")).value = "t", e.type = "radio", v.radioValue = "t" === e.value
                    }();
                var pn, hn = k.expr.attrHandle;
                k.fn.extend({
                    attr: function(e, n) {
                        return z(this, k.attr, e, n, arguments.length > 1)
                    },
                    removeAttr: function(e) {
                        return this.each((function() {
                            k.removeAttr(this, e)
                        }))
                    }
                }), k.extend({
                    attr: function(e, n, l) {
                        var t, o, i = e.nodeType;
                        if (3 !== i && 8 !== i && 2 !== i) return void 0 === e.getAttribute ? k.prop(e, n, l) : (1 === i && k.isXMLDoc(e) || (o = k.attrHooks[n.toLowerCase()] || (k.expr.match.bool.test(n) ? pn : void 0)), void 0 !== l ? null === l ? void k.removeAttr(e, n) : o && "set" in o && void 0 !== (t = o.set(e, l, n)) ? t : (e.setAttribute(n, l + ""), l) : o && "get" in o && null !== (t = o.get(e, n)) ? t : null == (t = k.find.attr(e, n)) ? void 0 : t)
                    },
                    attrHooks: {
                        type: {
                            set: function(e, n) {
                                if (!v.radioValue && "radio" === n && P(e, "input")) {
                                    var l = e.value;
                                    return e.setAttribute("type", n), l && (e.value = l), n
                                }
                            }
                        }
                    },
                    removeAttr: function(e, n) {
                        var l, t = 0,
                            o = n && n.match(L);
                        if (o && 1 === e.nodeType)
                            for (; l = o[t++];) e.removeAttribute(l)
                    }
                }), pn = {
                    set: function(e, n, l) {
                        return !1 === n ? k.removeAttr(e, l) : e.setAttribute(l, l), l
                    }
                }, k.each(k.expr.match.bool.source.match(/\w+/g), (function(e, n) {
                    var l = hn[n] || k.find.attr;
                    hn[n] = function(e, n, t) {
                        var o, i, r = n.toLowerCase();
                        return t || (i = hn[r], hn[r] = o, o = null != l(e, n, t) ? r : null, hn[r] = i), o
                    }
                }));
                var gn = /^(?:input|select|textarea|button)$/i,
                    vn = /^(?:a|area)$/i;

                function mn(e) {
                    return (e.match(L) || []).join(" ")
                }

                function yn(e) {
                    return e.getAttribute && e.getAttribute("class") || ""
                }

                function bn(e) {
                    return Array.isArray(e) ? e : "string" == typeof e && e.match(L) || []
                }
                k.fn.extend({
                    prop: function(e, n) {
                        return z(this, k.prop, e, n, arguments.length > 1)
                    },
                    removeProp: function(e) {
                        return this.each((function() {
                            delete this[k.propFix[e] || e]
                        }))
                    }
                }), k.extend({
                    prop: function(e, n, l) {
                        var t, o, i = e.nodeType;
                        if (3 !== i && 8 !== i && 2 !== i) return 1 === i && k.isXMLDoc(e) || (o = k.propHooks[n = k.propFix[n] || n]), void 0 !== l ? o && "set" in o && void 0 !== (t = o.set(e, l, n)) ? t : e[n] = l : o && "get" in o && null !== (t = o.get(e, n)) ? t : e[n]
                    },
                    propHooks: {
                        tabIndex: {
                            get: function(e) {
                                var n = k.find.attr(e, "tabindex");
                                return n ? parseInt(n, 10) : gn.test(e.nodeName) || vn.test(e.nodeName) && e.href ? 0 : -1
                            }
                        }
                    },
                    propFix: {
                        for: "htmlFor",
                        class: "className"
                    }
                }), v.optSelected || (k.propHooks.selected = {
                    get: function(e) {
                        return null
                    },
                    set: function(e) {}
                }), k.each(["tabIndex", "readOnly", "maxLength", "cellSpacing", "cellPadding", "rowSpan", "colSpan", "useMap", "frameBorder", "contentEditable"], (function() {
                    k.propFix[this.toLowerCase()] = this
                })), k.fn.extend({
                    addClass: function(e) {
                        var n, l, t, o, i, r, u, a = 0;
                        if (m(e)) return this.each((function(n) {
                            k(this).addClass(e.call(this, n, yn(this)))
                        }));
                        if ((n = bn(e)).length)
                            for (; l = this[a++];)
                                if (o = yn(l), t = 1 === l.nodeType && " " + mn(o) + " ") {
                                    for (r = 0; i = n[r++];) t.indexOf(" " + i + " ") < 0 && (t += i + " ");
                                    o !== (u = mn(t)) && l.setAttribute("class", u)
                                }
                        return this
                    },
                    removeClass: function(e) {
                        var n, l, t, o, i, r, u, a = 0;
                        if (m(e)) return this.each((function(n) {
                            k(this).removeClass(e.call(this, n, yn(this)))
                        }));
                        if (!arguments.length) return this.attr("class", "");
                        if ((n = bn(e)).length)
                            for (; l = this[a++];)
                                if (o = yn(l), t = 1 === l.nodeType && " " + mn(o) + " ") {
                                    for (r = 0; i = n[r++];)
                                        for (; t.indexOf(" " + i + " ") > -1;) t = t.replace(" " + i + " ", " ");
                                    o !== (u = mn(t)) && l.setAttribute("class", u)
                                }
                        return this
                    },
                    toggleClass: function(e, n) {
                        var l = typeof e,
                            t = "string" === l || Array.isArray(e);
                        return "boolean" == typeof n && t ? n ? this.addClass(e) : this.removeClass(e) : m(e) ? this.each((function(l) {
                            k(this).toggleClass(e.call(this, l, yn(this), n), n)
                        })) : this.each((function() {
                            var n, o, i, r;
                            if (t)
                                for (o = 0, i = k(this), r = bn(e); n = r[o++];) i.hasClass(n) ? i.removeClass(n) : i.addClass(n);
                            else void 0 !== e && "boolean" !== l || ((n = yn(this)) && J.set(this, "__className__", n), this.setAttribute && this.setAttribute("class", n || !1 === e ? "" : J.get(this, "__className__") || ""))
                        }))
                    },
                    hasClass: function(e) {
                        var n, l, t = 0;
                        for (n = " " + e + " "; l = this[t++];)
                            if (1 === l.nodeType && (" " + mn(yn(l)) + " ").indexOf(n) > -1) return !0;
                        return !1
                    }
                });
                var xn = /\r/g;
                k.fn.extend({
                    val: function(e) {
                        var n, l, t, o = this[0];
                        return arguments.length ? (t = m(e), this.each((function(l) {
                            var o;
                            1 === this.nodeType && (null == (o = t ? e.call(this, l, k(this).val()) : e) ? o = "" : "number" == typeof o ? o += "" : Array.isArray(o) && (o = k.map(o, (function(e) {
                                return null == e ? "" : e + ""
                            }))), (n = k.valHooks[this.type] || k.valHooks[this.nodeName.toLowerCase()]) && "set" in n && void 0 !== n.set(this, o, "value") || (this.value = o))
                        }))) : o ? (n = k.valHooks[o.type] || k.valHooks[o.nodeName.toLowerCase()]) && "get" in n && void 0 !== (l = n.get(o, "value")) ? l : "string" == typeof(l = o.value) ? l.replace(xn, "") : null == l ? "" : l : void 0
                    }
                }), k.extend({
                    valHooks: {
                        option: {
                            get: function(e) {
                                var n = k.find.attr(e, "value");
                                return null != n ? n : mn(k.text(e))
                            }
                        },
                        select: {
                            get: function(e) {
                                var n, l, t, o = e.options,
                                    i = e.selectedIndex,
                                    r = "select-one" === e.type,
                                    u = r ? null : [],
                                    a = r ? i + 1 : o.length;
                                for (t = i < 0 ? a : r ? i : 0; t < a; t++)
                                    if (((l = o[t]).selected || t === i) && !l.disabled && (!l.parentNode.disabled || !P(l.parentNode, "optgroup"))) {
                                        if (n = k(l).val(), r) return n;
                                        u.push(n)
                                    }
                                return u
                            },
                            set: function(e, n) {
                                for (var l, t, o = e.options, i = k.makeArray(n), r = o.length; r--;)((t = o[r]).selected = k.inArray(k.valHooks.option.get(t), i) > -1) && (l = !0);
                                return l || (e.selectedIndex = -1), i
                            }
                        }
                    }
                }), k.each(["radio", "checkbox"], (function() {
                    k.valHooks[this] = {
                        set: function(e, n) {
                            if (Array.isArray(n)) return e.checked = k.inArray(k(e).val(), n) > -1
                        }
                    }, v.checkOn || (k.valHooks[this].get = function(e) {
                        return null === e.getAttribute("value") ? "on" : e.value
                    })
                })), v.focusin = "onfocusin" in l;
                var wn = /^(?:focusinfocus|focusoutblur)$/,
                    Cn = function(e) {
                        e.stopPropagation()
                    };
                k.extend(k.event, {
                    trigger: function(e, n, t, o) {
                        var i, r, u, a, s, c, d, f, h = [t || b],
                            g = p.call(e, "type") ? e.type : e,
                            v = p.call(e, "namespace") ? e.namespace.split(".") : [];
                        if (r = f = u = t = t || b, 3 !== t.nodeType && 8 !== t.nodeType && !wn.test(g + k.event.triggered) && (g.indexOf(".") > -1 && (v = g.split("."), g = v.shift(), v.sort()), s = g.indexOf(":") < 0 && "on" + g, (e = e[k.expando] ? e : new k.Event(g, "object" == typeof e && e)).isTrigger = o ? 2 : 3, e.namespace = v.join("."), e.rnamespace = e.namespace ? new RegExp("(^|\\.)" + v.join("\\.(?:.*\\.|)") + "(\\.|$)") : null, e.result = void 0, e.target || (e.target = t), n = null == n ? [e] : k.makeArray(n, [e]), d = k.event.special[g] || {}, o || !d.trigger || !1 !== d.trigger.apply(t, n))) {
                            if (!o && !d.noBubble && !y(t)) {
                                for (wn.test((a = d.delegateType || g) + g) || (r = r.parentNode); r; r = r.parentNode) h.push(r), u = r;
                                u === (t.ownerDocument || b) && h.push(u.defaultView || u.parentWindow || l)
                            }
                            for (i = 0;
                                (r = h[i++]) && !e.isPropagationStopped();) f = r, e.type = i > 1 ? a : d.bindType || g, (c = (J.get(r, "events") || Object.create(null))[e.type] && J.get(r, "handle")) && c.apply(r, n), (c = s && r[s]) && c.apply && G(r) && (e.result = c.apply(r, n), !1 === e.result && e.preventDefault());
                            return e.type = g, o || e.isDefaultPrevented() || d._default && !1 !== d._default.apply(h.pop(), n) || !G(t) || s && m(t[g]) && !y(t) && ((u = t[s]) && (t[s] = null), k.event.triggered = g, e.isPropagationStopped() && f.addEventListener(g, Cn), t[g](), e.isPropagationStopped() && f.removeEventListener(g, Cn), k.event.triggered = void 0, u && (t[s] = u)), e.result
                        }
                    },
                    simulate: function(e, n, l) {
                        var t = k.extend(new k.Event, l, {
                            type: e,
                            isSimulated: !0
                        });
                        k.event.trigger(t, null, n)
                    }
                }), k.fn.extend({
                    trigger: function(e, n) {
                        return this.each((function() {
                            k.event.trigger(e, n, this)
                        }))
                    },
                    triggerHandler: function(e, n) {
                        var l = this[0];
                        if (l) return k.event.trigger(e, n, l, !0)
                    }
                }), v.focusin || k.each({
                    focus: "focusin",
                    blur: "focusout"
                }, (function(e, n) {
                    var l = function(e) {
                        k.event.simulate(n, e.target, k.event.fix(e))
                    };
                    k.event.special[n] = {
                        setup: function() {
                            var t = this.ownerDocument || this.document || this,
                                o = J.access(t, n);
                            o || t.addEventListener(e, l, !0), J.access(t, n, (o || 0) + 1)
                        },
                        teardown: function() {
                            var t = this.ownerDocument || this.document || this,
                                o = J.access(t, n) - 1;
                            o ? J.access(t, n, o) : (t.removeEventListener(e, l, !0), J.remove(t, n))
                        }
                    }
                }));
                var kn = l.location,
                    Tn = {
                        guid: Date.now()
                    },
                    _n = /\?/;
                k.parseXML = function(e) {
                    var n, t;
                    if (!e || "string" != typeof e) return null;
                    try {
                        n = (new l.DOMParser).parseFromString(e, "text/xml")
                    } catch (o) {}
                    return t = n && n.getElementsByTagName("parsererror")[0], n && !t || k.error("Invalid XML: " + (t ? k.map(t.childNodes, (function(e) {
                        return e.textContent
                    })).join("\n") : e)), n
                };
                var On = /\[\]$/,
                    En = /\r?\n/g,
                    Sn = /^(?:submit|button|image|reset|file)$/i,
                    Pn = /^(?:input|select|textarea|keygen)/i;

                function An(e, n, l, t) {
                    var o;
                    if (Array.isArray(n)) k.each(n, (function(n, o) {
                        l || On.test(e) ? t(e, o) : An(e + "[" + ("object" == typeof o && null != o ? n : "") + "]", o, l, t)
                    }));
                    else if (l || "object" !== C(n)) t(e, n);
                    else
                        for (o in n) An(e + "[" + o + "]", n[o], l, t)
                }
                k.param = function(e, n) {
                    var l, t = [],
                        o = function(e, n) {
                            var l = m(n) ? n() : n;
                            t[t.length] = encodeURIComponent(e) + "=" + encodeURIComponent(null == l ? "" : l)
                        };
                    if (null == e) return "";
                    if (Array.isArray(e) || e.jquery && !k.isPlainObject(e)) k.each(e, (function() {
                        o(this.name, this.value)
                    }));
                    else
                        for (l in e) An(l, e[l], n, o);
                    return t.join("&")
                }, k.fn.extend({
                    serialize: function() {
                        return k.param(this.serializeArray())
                    },
                    serializeArray: function() {
                        return this.map((function() {
                            var e = k.prop(this, "elements");
                            return e ? k.makeArray(e) : this
                        })).filter((function() {
                            var e = this.type;
                            return this.name && !k(this).is(":disabled") && Pn.test(this.nodeName) && !Sn.test(e) && (this.checked || !ge.test(e))
                        })).map((function(e, n) {
                            var l = k(this).val();
                            return null == l ? null : Array.isArray(l) ? k.map(l, (function(e) {
                                return {
                                    name: n.name,
                                    value: e.replace(En, "\r\n")
                                }
                            })) : {
                                name: n.name,
                                value: l.replace(En, "\r\n")
                            }
                        })).get()
                    }
                });
                var Mn = /%20/g,
                    Dn = /#.*$/,
                    Nn = /([?&])_=[^&]*/,
                    jn = /^(.*?):[ \t]*([^\r\n]*)$/gm,
                    In = /^(?:GET|HEAD)$/,
                    qn = /^\/\//,
                    Ln = {},
                    Rn = {},
                    Hn = "*/".concat("*"),
                    Wn = b.createElement("a");

                function Bn(e) {
                    return function(n, l) {
                        "string" != typeof n && (l = n, n = "*");
                        var t, o = 0,
                            i = n.toLowerCase().match(L) || [];
                        if (m(l))
                            for (; t = i[o++];) "+" === t[0] ? (t = t.slice(1) || "*", (e[t] = e[t] || []).unshift(l)) : (e[t] = e[t] || []).push(l)
                    }
                }

                function Fn(e, n, l, t) {
                    var o = {},
                        i = e === Rn;

                    function r(u) {
                        var a;
                        return o[u] = !0, k.each(e[u] || [], (function(e, u) {
                            var s = u(n, l, t);
                            return "string" != typeof s || i || o[s] ? i ? !(a = s) : void 0 : (n.dataTypes.unshift(s), r(s), !1)
                        })), a
                    }
                    return r(n.dataTypes[0]) || !o["*"] && r("*")
                }

                function $n(e, n) {
                    var l, t, o = k.ajaxSettings.flatOptions || {};
                    for (l in n) void 0 !== n[l] && ((o[l] ? e : t || (t = {}))[l] = n[l]);
                    return t && k.extend(!0, e, t), e
                }
                Wn.href = kn.href, k.extend({
                    active: 0,
                    lastModified: {},
                    etag: {},
                    ajaxSettings: {
                        url: kn.href,
                        type: "GET",
                        isLocal: /^(?:about|app|app-storage|.+-extension|file|res|widget):$/.test(kn.protocol),
                        global: !0,
                        processData: !0,
                        async: !0,
                        contentType: "application/x-www-form-urlencoded; charset=UTF-8",
                        accepts: {
                            "*": Hn,
                            text: "text/plain",
                            html: "text/html",
                            xml: "application/xml, text/xml",
                            json: "application/json, text/javascript"
                        },
                        contents: {
                            xml: /\bxml\b/,
                            html: /\bhtml/,
                            json: /\bjson\b/
                        },
                        responseFields: {
                            xml: "responseXML",
                            text: "responseText",
                            json: "responseJSON"
                        },
                        converters: {
                            "* text": String,
                            "text html": !0,
                            "text json": JSON.parse,
                            "text xml": k.parseXML
                        },
                        flatOptions: {
                            url: !0,
                            context: !0
                        }
                    },
                    ajaxSetup: function(e, n) {
                        return n ? $n($n(e, k.ajaxSettings), n) : $n(k.ajaxSettings, e)
                    },
                    ajaxPrefilter: Bn(Ln),
                    ajaxTransport: Bn(Rn),
                    ajax: function(e, n) {
                        "object" == typeof e && (n = e, e = void 0);
                        var t, o, i, r, u, a, s, c, d, f, p = k.ajaxSetup({}, n = n || {}),
                            h = p.context || p,
                            g = p.context && (h.nodeType || h.jquery) ? k(h) : k.event,
                            v = k.Deferred(),
                            m = k.Callbacks("once memory"),
                            y = p.statusCode || {},
                            x = {},
                            w = {},
                            C = "canceled",
                            T = {
                                readyState: 0,
                                getResponseHeader: function(e) {
                                    var n;
                                    if (s) {
                                        if (!r)
                                            for (r = {}; n = jn.exec(i);) r[n[1].toLowerCase() + " "] = (r[n[1].toLowerCase() + " "] || []).concat(n[2]);
                                        n = r[e.toLowerCase() + " "]
                                    }
                                    return null == n ? null : n.join(", ")
                                },
                                getAllResponseHeaders: function() {
                                    return s ? i : null
                                },
                                setRequestHeader: function(e, n) {
                                    return null == s && (e = w[e.toLowerCase()] = w[e.toLowerCase()] || e, x[e] = n), this
                                },
                                overrideMimeType: function(e) {
                                    return null == s && (p.mimeType = e), this
                                },
                                statusCode: function(e) {
                                    var n;
                                    if (e)
                                        if (s) T.always(e[T.status]);
                                        else
                                            for (n in e) y[n] = [y[n], e[n]];
                                    return this
                                },
                                abort: function(e) {
                                    var n = e || C;
                                    return t && t.abort(n), _(0, n), this
                                }
                            };
                        if (v.promise(T), p.url = ((e || p.url || kn.href) + "").replace(qn, kn.protocol + "//"), p.type = n.method || n.type || p.method || p.type, p.dataTypes = (p.dataType || "*").toLowerCase().match(L) || [""], null == p.crossDomain) {
                            a = b.createElement("a");
                            try {
                                a.href = p.url, a.href = a.href, p.crossDomain = Wn.protocol + "//" + Wn.host != a.protocol + "//" + a.host
                            } catch (O) {
                                p.crossDomain = !0
                            }
                        }
                        if (p.data && p.processData && "string" != typeof p.data && (p.data = k.param(p.data, p.traditional)), Fn(Ln, p, n, T), s) return T;
                        for (d in (c = k.event && p.global) && 0 == k.active++ && k.event.trigger("ajaxStart"), p.type = p.type.toUpperCase(), p.hasContent = !In.test(p.type), o = p.url.replace(Dn, ""), p.hasContent ? p.data && p.processData && 0 === (p.contentType || "").indexOf("application/x-www-form-urlencoded") && (p.data = p.data.replace(Mn, "+")) : (f = p.url.slice(o.length), p.data && (p.processData || "string" == typeof p.data) && (o += (_n.test(o) ? "&" : "?") + p.data, delete p.data), !1 === p.cache && (o = o.replace(Nn, "$1"), f = (_n.test(o) ? "&" : "?") + "_=" + Tn.guid++ + f), p.url = o + f), p.ifModified && (k.lastModified[o] && T.setRequestHeader("If-Modified-Since", k.lastModified[o]), k.etag[o] && T.setRequestHeader("If-None-Match", k.etag[o])), (p.data && p.hasContent && !1 !== p.contentType || n.contentType) && T.setRequestHeader("Content-Type", p.contentType), T.setRequestHeader("Accept", p.dataTypes[0] && p.accepts[p.dataTypes[0]] ? p.accepts[p.dataTypes[0]] + ("*" !== p.dataTypes[0] ? ", " + Hn + "; q=0.01" : "") : p.accepts["*"]), p.headers) T.setRequestHeader(d, p.headers[d]);
                        if (p.beforeSend && (!1 === p.beforeSend.call(h, T, p) || s)) return T.abort();
                        if (C = "abort", m.add(p.complete), T.done(p.success), T.fail(p.error), t = Fn(Rn, p, n, T)) {
                            if (T.readyState = 1, c && g.trigger("ajaxSend", [T, p]), s) return T;
                            p.async && p.timeout > 0 && (u = l.setTimeout((function() {
                                T.abort("timeout")
                            }), p.timeout));
                            try {
                                s = !1, t.send(x, _)
                            } catch (O) {
                                if (s) throw O;
                                _(-1, O)
                            }
                        } else _(-1, "No Transport");

                        function _(e, n, r, a) {
                            var d, f, b, x, w, C = n;
                            s || (s = !0, u && l.clearTimeout(u), t = void 0, i = a || "", T.readyState = e > 0 ? 4 : 0, d = e >= 200 && e < 300 || 304 === e, r && (x = function(e, n, l) {
                                for (var t, o, i, r, u = e.contents, a = e.dataTypes;
                                    "*" === a[0];) a.shift(), void 0 === t && (t = e.mimeType || n.getResponseHeader("Content-Type"));
                                if (t)
                                    for (o in u)
                                        if (u[o] && u[o].test(t)) {
                                            a.unshift(o);
                                            break
                                        }
                                if (a[0] in l) i = a[0];
                                else {
                                    for (o in l) {
                                        if (!a[0] || e.converters[o + " " + a[0]]) {
                                            i = o;
                                            break
                                        }
                                        r || (r = o)
                                    }
                                    i = i || r
                                }
                                if (i) return i !== a[0] && a.unshift(i), l[i]
                            }(p, T, r)), !d && k.inArray("script", p.dataTypes) > -1 && k.inArray("json", p.dataTypes) < 0 && (p.converters["text script"] = function() {}), x = function(e, n, l, t) {
                                var o, i, r, u, a, s = {},
                                    c = e.dataTypes.slice();
                                if (c[1])
                                    for (r in e.converters) s[r.toLowerCase()] = e.converters[r];
                                for (i = c.shift(); i;)
                                    if (e.responseFields[i] && (l[e.responseFields[i]] = n), !a && t && e.dataFilter && (n = e.dataFilter(n, e.dataType)), a = i, i = c.shift())
                                        if ("*" === i) i = a;
                                        else if ("*" !== a && a !== i) {
                                    if (!(r = s[a + " " + i] || s["* " + i]))
                                        for (o in s)
                                            if ((u = o.split(" "))[1] === i && (r = s[a + " " + u[0]] || s["* " + u[0]])) {
                                                !0 === r ? r = s[o] : !0 !== s[o] && (i = u[0], c.unshift(u[1]));
                                                break
                                            }
                                    if (!0 !== r)
                                        if (r && e.throws) n = r(n);
                                        else try {
                                            n = r(n)
                                        } catch (O) {
                                            return {
                                                state: "parsererror",
                                                error: r ? O : "No conversion from " + a + " to " + i
                                            }
                                        }
                                }
                                return {
                                    state: "success",
                                    data: n
                                }
                            }(p, x, T, d), d ? (p.ifModified && ((w = T.getResponseHeader("Last-Modified")) && (k.lastModified[o] = w), (w = T.getResponseHeader("etag")) && (k.etag[o] = w)), 204 === e || "HEAD" === p.type ? C = "nocontent" : 304 === e ? C = "notmodified" : (C = x.state, f = x.data, d = !(b = x.error))) : (b = C, !e && C || (C = "error", e < 0 && (e = 0))), T.status = e, T.statusText = (n || C) + "", d ? v.resolveWith(h, [f, C, T]) : v.rejectWith(h, [T, C, b]), T.statusCode(y), y = void 0, c && g.trigger(d ? "ajaxSuccess" : "ajaxError", [T, p, d ? f : b]), m.fireWith(h, [T, C]), c && (g.trigger("ajaxComplete", [T, p]), --k.active || k.event.trigger("ajaxStop")))
                        }
                        return T
                    },
                    getJSON: function(e, n, l) {
                        return k.get(e, n, l, "json")
                    },
                    getScript: function(e, n) {
                        return k.get(e, void 0, n, "script")
                    }
                }), k.each(["get", "post"], (function(e, n) {
                    k[n] = function(e, l, t, o) {
                        return m(l) && (o = o || t, t = l, l = void 0), k.ajax(k.extend({
                            url: e,
                            type: n,
                            dataType: o,
                            data: l,
                            success: t
                        }, k.isPlainObject(e) && e))
                    }
                })), k.ajaxPrefilter((function(e) {
                    var n;
                    for (n in e.headers) "content-type" === n.toLowerCase() && (e.contentType = e.headers[n] || "")
                })), k._evalUrl = function(e, n, l) {
                    return k.ajax({
                        url: e,
                        type: "GET",
                        dataType: "script",
                        cache: !0,
                        async: !1,
                        global: !1,
                        converters: {
                            "text script": function() {}
                        },
                        dataFilter: function(e) {
                            k.globalEval(e, n, l)
                        }
                    })
                }, k.fn.extend({
                    wrapAll: function(e) {
                        var n;
                        return this[0] && (m(e) && (e = e.call(this[0])), n = k(e, this[0].ownerDocument).eq(0).clone(!0), this[0].parentNode && n.insertBefore(this[0]), n.map((function() {
                            for (var e = this; e.firstElementChild;) e = e.firstElementChild;
                            return e
                        })).append(this)), this
                    },
                    wrapInner: function(e) {
                        return m(e) ? this.each((function(n) {
                            k(this).wrapInner(e.call(this, n))
                        })) : this.each((function() {
                            var n = k(this),
                                l = n.contents();
                            l.length ? l.wrapAll(e) : n.append(e)
                        }))
                    },
                    wrap: function(e) {
                        var n = m(e);
                        return this.each((function(l) {
                            k(this).wrapAll(n ? e.call(this, l) : e)
                        }))
                    },
                    unwrap: function(e) {
                        return this.parent(e).not("body").each((function() {
                            k(this).replaceWith(this.childNodes)
                        })), this
                    }
                }), k.expr.pseudos.hidden = function(e) {
                    return !k.expr.pseudos.visible(e)
                }, k.expr.pseudos.visible = function(e) {
                    return !!(e.offsetWidth || e.offsetHeight || e.getClientRects().length)
                }, k.ajaxSettings.xhr = function() {
                    try {
                        return new l.XMLHttpRequest
                    } catch (e) {}
                };
                var zn = {
                        0: 200,
                        1223: 204
                    },
                    Vn = k.ajaxSettings.xhr();
                v.cors = !!Vn && "withCredentials" in Vn, v.ajax = Vn = !!Vn, k.ajaxTransport((function(e) {
                    var n, t;
                    if (v.cors || Vn && !e.crossDomain) return {
                        send: function(o, i) {
                            var r, u = e.xhr();
                            if (u.open(e.type, e.url, e.async, e.username, e.password), e.xhrFields)
                                for (r in e.xhrFields) u[r] = e.xhrFields[r];
                            for (r in e.mimeType && u.overrideMimeType && u.overrideMimeType(e.mimeType), e.crossDomain || o["X-Requested-With"] || (o["X-Requested-With"] = "XMLHttpRequest"), o) u.setRequestHeader(r, o[r]);
                            n = function(e) {
                                return function() {
                                    n && (n = t = u.onload = u.onerror = u.onabort = u.ontimeout = u.onreadystatechange = null, "abort" === e ? u.abort() : "error" === e ? "number" != typeof u.status ? i(0, "error") : i(u.status, u.statusText) : i(zn[u.status] || u.status, u.statusText, "text" !== (u.responseType || "text") || "string" != typeof u.responseText ? {
                                        binary: u.response
                                    } : {
                                        text: u.responseText
                                    }, u.getAllResponseHeaders()))
                                }
                            }, u.onload = n(), t = u.onerror = u.ontimeout = n("error"), void 0 !== u.onabort ? u.onabort = t : u.onreadystatechange = function() {
                                4 === u.readyState && l.setTimeout((function() {
                                    n && t()
                                }))
                            }, n = n("abort");
                            try {
                                u.send(e.hasContent && e.data || null)
                            } catch (a) {
                                if (n) throw a
                            }
                        },
                        abort: function() {
                            n && n()
                        }
                    }
                })), k.ajaxPrefilter((function(e) {
                    e.crossDomain && (e.contents.script = !1)
                })), k.ajaxSetup({
                    accepts: {
                        script: "text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"
                    },
                    contents: {
                        script: /\b(?:java|ecma)script\b/
                    },
                    converters: {
                        "text script": function(e) {
                            return k.globalEval(e), e
                        }
                    }
                }), k.ajaxPrefilter("script", (function(e) {
                    void 0 === e.cache && (e.cache = !1), e.crossDomain && (e.type = "GET")
                })), k.ajaxTransport("script", (function(e) {
                    var n, l;
                    if (e.crossDomain || e.scriptAttrs) return {
                        send: function(t, o) {
                            n = k("<script>").attr(e.scriptAttrs || {}).prop({
                                charset: e.scriptCharset,
                                src: e.url
                            }).on("load error", l = function(e) {
                                n.remove(), l = null, e && o("error" === e.type ? 404 : 200, e.type)
                            }), b.head.appendChild(n[0])
                        },
                        abort: function() {
                            l && l()
                        }
                    }
                }));
                var Un, Yn = [],
                    Xn = /(=)\?(?=&|$)|\?\?/;
                k.ajaxSetup({
                    jsonp: "callback",
                    jsonpCallback: function() {
                        var e = Yn.pop() || k.expando + "_" + Tn.guid++;
                        return this[e] = !0, e
                    }
                }), k.ajaxPrefilter("json jsonp", (function(e, n, t) {
                    var o, i, r, u = !1 !== e.jsonp && (Xn.test(e.url) ? "url" : "string" == typeof e.data && 0 === (e.contentType || "").indexOf("application/x-www-form-urlencoded") && Xn.test(e.data) && "data");
                    if (u || "jsonp" === e.dataTypes[0]) return o = e.jsonpCallback = m(e.jsonpCallback) ? e.jsonpCallback() : e.jsonpCallback, u ? e[u] = e[u].replace(Xn, "$1" + o) : !1 !== e.jsonp && (e.url += (_n.test(e.url) ? "&" : "?") + e.jsonp + "=" + o), e.converters["script json"] = function() {
                        return r || k.error(o + " was not called"), r[0]
                    }, e.dataTypes[0] = "json", i = l[o], l[o] = function() {
                        r = arguments
                    }, t.always((function() {
                        void 0 === i ? k(l).removeProp(o) : l[o] = i, e[o] && (e.jsonpCallback = n.jsonpCallback, Yn.push(o)), r && m(i) && i(r[0]), r = i = void 0
                    })), "script"
                })), v.createHTMLDocument = ((Un = b.implementation.createHTMLDocument("").body).innerHTML = "<form></form><form></form>", 2 === Un.childNodes.length), k.parseHTML = function(e, n, l) {
                    return "string" != typeof e ? [] : ("boolean" == typeof n && (l = n, n = !1), n || (v.createHTMLDocument ? ((t = (n = b.implementation.createHTMLDocument("")).createElement("base")).href = b.location.href, n.head.appendChild(t)) : n = b), i = !l && [], (o = A.exec(e)) ? [n.createElement(o[1])] : (o = Ce([e], n, i), i && i.length && k(i).remove(), k.merge([], o.childNodes)));
                    var t, o, i
                }, k.fn.load = function(e, n, l) {
                    var t, o, i, r = this,
                        u = e.indexOf(" ");
                    return u > -1 && (t = mn(e.slice(u)), e = e.slice(0, u)), m(n) ? (l = n, n = void 0) : n && "object" == typeof n && (o = "POST"), r.length > 0 && k.ajax({
                        url: e,
                        type: o || "GET",
                        dataType: "html",
                        data: n
                    }).done((function(e) {
                        i = arguments, r.html(t ? k("<div>").append(k.parseHTML(e)).find(t) : e)
                    })).always(l && function(e, n) {
                        r.each((function() {
                            l.apply(this, i || [e.responseText, n, e])
                        }))
                    }), this
                }, k.expr.pseudos.animated = function(e) {
                    return k.grep(k.timers, (function(n) {
                        return e === n.elem
                    })).length
                }, k.offset = {
                    setOffset: function(e, n, l) {
                        var t, o, i, r, u, a, s = k.css(e, "position"),
                            c = k(e),
                            d = {};
                        "static" === s && (e.style.position = "relative"), u = c.offset(), i = k.css(e, "top"), a = k.css(e, "left"), ("absolute" === s || "fixed" === s) && (i + a).indexOf("auto") > -1 ? (r = (t = c.position()).top, o = t.left) : (r = parseFloat(i) || 0, o = parseFloat(a) || 0), m(n) && (n = n.call(e, l, k.extend({}, u))), null != n.top && (d.top = n.top - u.top + r), null != n.left && (d.left = n.left - u.left + o), "using" in n ? n.using.call(e, d) : c.css(d)
                    }
                }, k.fn.extend({
                    offset: function(e) {
                        if (arguments.length) return void 0 === e ? this : this.each((function(n) {
                            k.offset.setOffset(this, e, n)
                        }));
                        var n, l, t = this[0];
                        return t ? t.getClientRects().length ? {
                            top: (n = t.getBoundingClientRect()).top + (l = t.ownerDocument.defaultView).pageYOffset,
                            left: n.left + l.pageXOffset
                        } : {
                            top: 0,
                            left: 0
                        } : void 0
                    },
                    position: function() {
                        if (this[0]) {
                            var e, n, l, t = this[0],
                                o = {
                                    top: 0,
                                    left: 0
                                };
                            if ("fixed" === k.css(t, "position")) n = t.getBoundingClientRect();
                            else {
                                for (n = this.offset(), l = t.ownerDocument, e = t.offsetParent || l.documentElement; e && (e === l.body || e === l.documentElement) && "static" === k.css(e, "position");) e = e.parentNode;
                                e && e !== t && 1 === e.nodeType && ((o = k(e).offset()).top += k.css(e, "borderTopWidth", !0), o.left += k.css(e, "borderLeftWidth", !0))
                            }
                            return {
                                top: n.top - o.top - k.css(t, "marginTop", !0),
                                left: n.left - o.left - k.css(t, "marginLeft", !0)
                            }
                        }
                    },
                    offsetParent: function() {
                        return this.map((function() {
                            for (var e = this.offsetParent; e && "static" === k.css(e, "position");) e = e.offsetParent;
                            return e || ie
                        }))
                    }
                }), k.each({
                    scrollLeft: "pageXOffset",
                    scrollTop: "pageYOffset"
                }, (function(e, n) {
                    var l = "pageYOffset" === n;
                    k.fn[e] = function(t) {
                        return z(this, (function(e, t, o) {
                            var i;
                            if (y(e) ? i = e : 9 === e.nodeType && (i = e.defaultView), void 0 === o) return i ? i[n] : e[t];
                            i ? i.scrollTo(l ? i.pageXOffset : o, l ? o : i.pageYOffset) : e[t] = o
                        }), e, t, arguments.length)
                    }
                })), k.each(["top", "left"], (function(e, n) {
                    k.cssHooks[n] = ze(v.pixelPosition, (function(e, l) {
                        if (l) return l = $e(e, n), He.test(l) ? k(e).position()[n] + "px" : l
                    }))
                })), k.each({
                    Height: "height",
                    Width: "width"
                }, (function(e, n) {
                    k.each({
                        padding: "inner" + e,
                        content: n,
                        "": "outer" + e
                    }, (function(l, t) {
                        k.fn[t] = function(o, i) {
                            var r = arguments.length && (l || "boolean" != typeof o),
                                u = l || (!0 === o || !0 === i ? "margin" : "border");
                            return z(this, (function(n, l, o) {
                                var i;
                                return y(n) ? 0 === t.indexOf("outer") ? n["inner" + e] : n.document.documentElement["client" + e] : 9 === n.nodeType ? (i = n.documentElement, Math.max(n.body["scroll" + e], i["scroll" + e], n.body["offset" + e], i["offset" + e], i["client" + e])) : void 0 === o ? k.css(n, l, u) : k.style(n, l, o, u)
                            }), n, r ? o : void 0, r)
                        }
                    }))
                })), k.each(["ajaxStart", "ajaxStop", "ajaxComplete", "ajaxError", "ajaxSuccess", "ajaxSend"], (function(e, n) {
                    k.fn[n] = function(e) {
                        return this.on(n, e)
                    }
                })), k.fn.extend({
                    bind: function(e, n, l) {
                        return this.on(e, null, n, l)
                    },
                    unbind: function(e, n) {
                        return this.off(e, null, n)
                    },
                    delegate: function(e, n, l, t) {
                        return this.on(n, e, l, t)
                    },
                    undelegate: function(e, n, l) {
                        return 1 === arguments.length ? this.off(e, "**") : this.off(n, e || "**", l)
                    },
                    hover: function(e, n) {
                        return this.mouseenter(e).mouseleave(n || e)
                    }
                }), k.each("blur focus focusin focusout resize scroll click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup contextmenu".split(" "), (function(e, n) {
                    k.fn[n] = function(e, l) {
                        return arguments.length > 0 ? this.on(n, null, e, l) : this.trigger(n)
                    }
                }));
                var Gn = /^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g;
                k.proxy = function(e, n) {
                    var l, t, o;
                    if ("string" == typeof n && (l = e[n], n = e, e = l), m(e)) return t = u.call(arguments, 2), (o = function() {
                        return e.apply(n || this, t.concat(u.call(arguments)))
                    }).guid = e.guid = e.guid || k.guid++, o
                }, k.holdReady = function(e) {
                    e ? k.readyWait++ : k.ready(!0)
                }, k.isArray = Array.isArray, k.parseJSON = JSON.parse, k.nodeName = P, k.isFunction = m, k.isWindow = y, k.camelCase = X, k.type = C, k.now = Date.now, k.isNumeric = function(e) {
                    var n = k.type(e);
                    return ("number" === n || "string" === n) && !isNaN(e - parseFloat(e))
                }, k.trim = function(e) {
                    return null == e ? "" : (e + "").replace(Gn, "")
                }, void 0 === (t = (function() {
                    return k
                }).apply(n, [])) || (e.exports = t);
                var Kn = l.jQuery,
                    Jn = l.$;
                return k.noConflict = function(e) {
                    return l.$ === k && (l.$ = Jn), e && l.jQuery === k && (l.jQuery = Kn), k
                }, void 0 === o && (l.jQuery = l.$ = k), k
            }))
        },
        EXYV: function(e, n, l) {
            "use strict";
            var t = l("CcnG"),
                o = l("Ip0R");
            l("Rg05"), l.d(n, "a", (function() {
                return i
            })), l.d(n, "b", (function() {
                return a
            }));
            var i = t["\u0275crt"]({
                encapsulation: 0,
                styles: [
                    [".border_right_left[_ngcontent-%COMP%]{border-left:1px solid #d1c2c2;border-right:1px solid #d1c2c2}.green_text[_ngcontent-%COMP%]{color:#1eab2e}.light_yellow_bg[_ngcontent-%COMP%]{background-color:#ffc}.light_gray_text_color[_ngcontent-%COMP%]{color:#776a6a}.dark_gray_text_color[_ngcontent-%COMP%]{color:#5e5a5a}.dark_green_text[_ngcontent-%COMP%]{color:#1eab2e}.light_green_bg[_ngcontent-%COMP%]{background-color:#e2fff3}.light_font[_ngcontent-%COMP%]{font-weight:300}.blue_bg[_ngcontent-%COMP%]{background-color:#0176c5;color:#fff}.blue_text_color[_ngcontent-%COMP%]{color:#0176c5}.f-12[_ngcontent-%COMP%]{font-size:12px}.f-16[_ngcontent-%COMP%]{font-size:16px}.f-14[_ngcontent-%COMP%]{font-size:14px}.bg_radius[_ngcontent-%COMP%]{border-radius:50px;padding:4px 20px;margin:auto}.doctor_dp[_ngcontent-%COMP%]{border-radius:50%;-o-object-fit:cover;object-fit:cover;max-width:90px;margin:auto;height:90px;width:90px}.avail_slot[_ngcontent-%COMP%]{border-left:1px solid #d1c2c2}.video_call_icon[_ngcontent-%COMP%]{width:25px}.frequently_asked_questions[_ngcontent-%COMP%]{background-color:#ddf198}.faq[_ngcontent-%COMP%]{position:absolute;opacity:0;transition:width 1s}.faq[_ngcontent-%COMP%] + div[_ngcontent-%COMP%]{transform-origin:top;transform:scaleY(0);height:0;transition:height 2s}.faq[_ngcontent-%COMP%]:checked + div[_ngcontent-%COMP%]{transform-origin:top;transform:scaleY(1);height:auto;transition:height 2s}.faq-link[_ngcontent-%COMP%]{color:#8b8080}.arrow_icon[_ngcontent-%COMP%]{width:24px}.card-header[_ngcontent-%COMP%]{cursor:pointer}.doctor_dp_bottom[_ngcontent-%COMP%]{width:40px}.joincall[_ngcontent-%COMP%]   .video_call_icon[_ngcontent-%COMP%]{width:10px}.joincall[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]{padding:7px 10px}.remedoapp_logo[_ngcontent-%COMP%]{text-align:center}.remedoapp_logo[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{width:250px}.whatsapp_help[_ngcontent-%COMP%]{position:fixed;bottom:100px;right:20px;z-index:112;cursor:pointer}footer[_ngcontent-%COMP%]{padding:15px 0;background-color:#e3f2f9}.column-item[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{font-size:14px;margin-bottom:0}footer.footer-light-medium[_ngcontent-%COMP%]   .footer-column[_ngcontent-%COMP%]{padding:0;list-style-type:none;text-decoration:none}footer.footer-light-medium[_ngcontent-%COMP%]   .footer-column[_ngcontent-%COMP%]   .column-header[_ngcontent-%COMP%]{font-family:Poppins Light,sans-serif;text-transform:uppercase;color:#444f60;font-size:14px;font-weight:700;margin:10px 0}.social-links[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{width:18px}@media (min-width:320px) and (max-width:767px){.fees_time_slot_section[_ngcontent-%COMP%]{border:none}.text-alignment[_ngcontent-%COMP%]{text-align:left}.consult_button[_ngcontent-%COMP%]{font-size:14px;display:flex;justify-content:center;align-items:center;border:none;outline:0;box-shadow:none;border-radius:5px}.consult_button[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{width:20px}h2[_ngcontent-%COMP%]{font-size:20px}.joincall[_ngcontent-%COMP%]{z-index:111;position:fixed;width:100%;padding:10px;left:0;bottom:0;-webkit-backdrop-filter:blur(10px);backdrop-filter:blur(10px);background-color:rgba(244,255,251,.5);border-top:.5px solid #cbcbcb;box-sizing:border-box}.speciality_icon[_ngcontent-%COMP%]{width:40px;min-height:50px}.speciality_text[_ngcontent-%COMP%]{font-size:14px}.nodoctor_img[_ngcontent-%COMP%]{height:200px!important}}@media (min-width:767px) and (max-width:992px){.doctor_dp[_ngcontent-%COMP%]{max-width:75px}.speciality_icon[_ngcontent-%COMP%]{width:40px;min-height:50px}.joincall[_ngcontent-%COMP%]{position:-webkit-sticky;position:sticky;padding:10px;top:59px;-webkit-backdrop-filter:blur(10px);backdrop-filter:blur(10px);background-color:rgba(244,255,251,.5);border-top:none;box-sizing:border-box;z-index:5}.max_width_center[_ngcontent-%COMP%]{max-width:450px;margin:auto}}@media (min-width:992px){.fees_time_slot_section[_ngcontent-%COMP%]{border:1px solid #d1c2c2;border-radius:3px}.doctor_profile[_ngcontent-%COMP%]{min-height:60px}.text-alignment[_ngcontent-%COMP%]{text-align:center}.speciality_icon[_ngcontent-%COMP%]{width:65px;min-height:50px}.speciality_text[_ngcontent-%COMP%]{font-size:20px}.consult_button[_ngcontent-%COMP%]{width:100%;border:none;border-radius:5px}#accordion[_ngcontent-%COMP%]{max-width:700px;margin:auto}.max_width_center[_ngcontent-%COMP%]{max-width:450px;margin:auto}}.view-more[_ngcontent-%COMP%]{float:right}.nodoctor_img[_ngcontent-%COMP%]{height:300px}.profile-box[_ngcontent-%COMP%]{min-height:75px}@media screen and (min-width:1023px){.align[_ngcontent-%COMP%]{margin:0 5%}}.hide[_ngcontent-%COMP%]{display:none!important}.show-card[_ngcontent-%COMP%]{display:block!important}"]
                ],
                data: {}
            });

            function r(e) {
                return t["\u0275vid"](0, [(e()(), t["\u0275eld"](0, 0, null, null, 98, "div", [
                    ["class", "mt-3"]
                ], null, null, null, null, null)), (e()(), t["\u0275eld"](1, 0, null, null, 97, "div", [
                    ["class", "my-5"],
                    ["id", "accordion"]
                ], null, null, null, null, null)), (e()(), t["\u0275eld"](2, 0, null, null, 11, "label", [
                    ["class", "card"],
                    ["for", "headingOne"]
                ], null, null, null, null, null)), (e()(), t["\u0275eld"](3, 0, null, null, 7, "div", [
                    ["class", "card-header"]
                ], null, [
                    [null, "click"]
                ], (function(e, n, l) {
                    var t = !0;
                    return "click" === n && (t = !1 !== e.component.openCollapse("collapse1") && t), t
                }), null, null)), (e()(), t["\u0275eld"](4, 0, null, null, 6, "div", [
                    ["class", "row"]
                ], null, null, null, null, null)), (e()(), t["\u0275eld"](5, 0, null, null, 3, "div", [
                    ["class", "col-10"]
                ], null, null, null, null, null)), (e()(), t["\u0275eld"](6, 0, null, null, 2, "h5", [
                    ["class", "mb-0"]
                ], null, null, null, null, null)), (e()(), t["\u0275eld"](7, 0, null, null, 1, "span", [
                    ["class", "f-14 faq-link"]
                ], null, null, null, null, null)), (e()(), t["\u0275ted"](-1, null, [" What are the payment options available? "])), (e()(), t["\u0275eld"](9, 0, null, null, 1, "div", [
                    ["class", "col-2 px-1"]
                ], null, null, null, null, null)), (e()(), t["\u0275eld"](10, 0, null, null, 0, "img", [
                    ["class", "float-right arrow_icon"],
                    ["src", "assets/default/images/bi_arrow-down-circle-fill.svg"]
                ], null, null, null, null, null)), (e()(), t["\u0275eld"](11, 0, null, null, 2, "div", [
                    ["class", "hide"],
                    ["id", "collapse1"]
                ], null, null, null, null, null)), (e()(), t["\u0275eld"](12, 0, null, null, 1, "div", [
                    ["class", "card-body f-12"]
                ], null, null, null, null, null)), (e()(), t["\u0275ted"](-1, null, [" E.g, You can pay using a variety of methods such as Internet Banking, Debit/Credit card, Wallet, UPI, and so on. "])), (e()(), t["\u0275eld"](14, 0, null, null, 11, "label", [
                    ["class", "card"],
                    ["for", "headingTwo"]
                ], null, null, null, null, null)), (e()(), t["\u0275eld"](15, 0, null, null, 7, "div", [
                    ["class", "card-header"]
                ], null, [
                    [null, "click"]
                ], (function(e, n, l) {
                    var t = !0;
                    return "click" === n && (t = !1 !== e.component.openCollapse("collapse2") && t), t
                }), null, null)), (e()(), t["\u0275eld"](16, 0, null, null, 6, "div", [
                    ["class", "row"]
                ], null, null, null, null, null)), (e()(), t["\u0275eld"](17, 0, null, null, 3, "div", [
                    ["class", "col-10"]
                ], null, null, null, null, null)), (e()(), t["\u0275eld"](18, 0, null, null, 2, "h5", [
                    ["class", "mb-0"]
                ], null, null, null, null, null)), (e()(), t["\u0275eld"](19, 0, null, null, 1, "span", [
                    ["class", "f-14 faq-link"]
                ], null, null, null, null, null)), (e()(), t["\u0275ted"](-1, null, [" Do we serve all over India? "])), (e()(), t["\u0275eld"](21, 0, null, null, 1, "div", [
                    ["class", "col-2 px-1"]
                ], null, null, null, null, null)), (e()(), t["\u0275eld"](22, 0, null, null, 0, "img", [
                    ["class", "float-right arrow_icon"],
                    ["src", "assets/default/images/bi_arrow-down-circle-fill.svg"]
                ], null, null, null, null, null)), (e()(), t["\u0275eld"](23, 0, null, null, 2, "div", [
                    ["class", "hide"],
                    ["id", "collapse2"]
                ], null, null, null, null, null)), (e()(), t["\u0275eld"](24, 0, null, null, 1, "div", [
                    ["class", "card-body f-12"]
                ], null, null, null, null, null)), (e()(), t["\u0275ted"](25, null, [" We are currently based in ", ", however, we offer services nationwide via online consultations. "])), (e()(), t["\u0275eld"](26, 0, null, null, 11, "label", [
                    ["class", "card"],
                    ["for", "headingThree"]
                ], null, null, null, null, null)), (e()(), t["\u0275eld"](27, 0, null, null, 7, "div", [
                    ["class", "card-header"]
                ], null, [
                    [null, "click"]
                ], (function(e, n, l) {
                    var t = !0;
                    return "click" === n && (t = !1 !== e.component.openCollapse("collapse3") && t), t
                }), null, null)), (e()(), t["\u0275eld"](28, 0, null, null, 6, "div", [
                    ["class", "row"]
                ], null, null, null, null, null)), (e()(), t["\u0275eld"](29, 0, null, null, 3, "div", [
                    ["class", "col-10"]
                ], null, null, null, null, null)), (e()(), t["\u0275eld"](30, 0, null, null, 2, "h5", [
                    ["class", "mb-0"]
                ], null, null, null, null, null)), (e()(), t["\u0275eld"](31, 0, null, null, 1, "span", [
                    ["class", "f-14 faq-link"]
                ], null, null, null, null, null)), (e()(), t["\u0275ted"](-1, null, [" What are the walk-in options available? "])), (e()(), t["\u0275eld"](33, 0, null, null, 1, "div", [
                    ["class", "col-2 px-1"]
                ], null, null, null, null, null)), (e()(), t["\u0275eld"](34, 0, null, null, 0, "img", [
                    ["class", "float-right arrow_icon"],
                    ["src", "assets/default/images/bi_arrow-down-circle-fill.svg"]
                ], null, null, null, null, null)), (e()(), t["\u0275eld"](35, 0, null, null, 2, "div", [
                    ["class", "hide"],
                    ["id", "collapse3"]
                ], null, null, null, null, null)), (e()(), t["\u0275eld"](36, 0, null, null, 1, "div", [
                    ["class", "card-body f-12"]
                ], null, null, null, null, null)), (e()(), t["\u0275ted"](37, null, [" We offer services at our clinics located at ", " "])), (e()(), t["\u0275eld"](38, 0, null, null, 11, "label", [
                    ["class", "card"],
                    ["for", "headingFour"]
                ], null, null, null, null, null)), (e()(), t["\u0275eld"](39, 0, null, null, 7, "div", [
                    ["class", "card-header"]
                ], null, [
                    [null, "click"]
                ], (function(e, n, l) {
                    var t = !0;
                    return "click" === n && (t = !1 !== e.component.openCollapse("collapse4") && t), t
                }), null, null)), (e()(), t["\u0275eld"](40, 0, null, null, 6, "div", [
                    ["class", "row"]
                ], null, null, null, null, null)), (e()(), t["\u0275eld"](41, 0, null, null, 3, "div", [
                    ["class", "col-10"]
                ], null, null, null, null, null)), (e()(), t["\u0275eld"](42, 0, null, null, 2, "h5", [
                    ["class", "mb-0"]
                ], null, null, null, null, null)), (e()(), t["\u0275eld"](43, 0, null, null, 1, "span", [
                    ["class", "f-14 faq-link"]
                ], null, null, null, null, null)), (e()(), t["\u0275ted"](-1, null, [" Are online consultations available? "])), (e()(), t["\u0275eld"](45, 0, null, null, 1, "div", [
                    ["class", "col-2 px-1"]
                ], null, null, null, null, null)), (e()(), t["\u0275eld"](46, 0, null, null, 0, "img", [
                    ["class", "float-right arrow_icon"],
                    ["src", "assets/default/images/bi_arrow-down-circle-fill.svg"]
                ], null, null, null, null, null)), (e()(), t["\u0275eld"](47, 0, null, null, 2, "div", [
                    ["class", "hide"],
                    ["id", "collapse4"]
                ], null, null, null, null, null)), (e()(), t["\u0275eld"](48, 0, null, null, 1, "div", [
                    ["class", "card-body f-12"]
                ], null, null, null, null, null)), (e()(), t["\u0275ted"](-1, null, [" Yes, we offer teleconsultation and onlineservices. Book an appointment at link provided. "])), (e()(), t["\u0275eld"](50, 0, null, null, 11, "label", [
                    ["class", "card"],
                    ["for", "headingFive"]
                ], null, null, null, null, null)), (e()(), t["\u0275eld"](51, 0, null, null, 7, "div", [
                    ["class", "card-header"]
                ], null, [
                    [null, "click"]
                ], (function(e, n, l) {
                    var t = !0;
                    return "click" === n && (t = !1 !== e.component.openCollapse("collapse5") && t), t
                }), null, null)), (e()(), t["\u0275eld"](52, 0, null, null, 6, "div", [
                    ["class", "row"]
                ], null, null, null, null, null)), (e()(), t["\u0275eld"](53, 0, null, null, 3, "div", [
                    ["class", "col-10"]
                ], null, null, null, null, null)), (e()(), t["\u0275eld"](54, 0, null, null, 2, "h5", [
                    ["class", "mb-0"]
                ], null, null, null, null, null)), (e()(), t["\u0275eld"](55, 0, null, null, 1, "span", [
                    ["class", "f-14 faq-link"]
                ], null, null, null, null, null)), (e()(), t["\u0275ted"](-1, null, [" How long will my appointment take? "])), (e()(), t["\u0275eld"](57, 0, null, null, 1, "div", [
                    ["class", "col-2 px-1"]
                ], null, null, null, null, null)), (e()(), t["\u0275eld"](58, 0, null, null, 0, "img", [
                    ["class", "float-right arrow_icon"],
                    ["src", "assets/default/images/bi_arrow-down-circle-fill.svg"]
                ], null, null, null, null, null)), (e()(), t["\u0275eld"](59, 0, null, null, 2, "div", [
                    ["class", "hide"],
                    ["id", "collapse5"]
                ], null, null, null, null, null)), (e()(), t["\u0275eld"](60, 0, null, null, 1, "div", [
                    ["class", "card-body f-12"]
                ], null, null, null, null, null)), (e()(), t["\u0275ted"](-1, null, [" The length of your appointment is determined by the condition or injuries being treated, as well as whether or not x-rays or an MRI are required. Please allow at least one hour for doctors to provide personalized attention and high-quality care. "])), (e()(), t["\u0275eld"](62, 0, null, null, 11, "label", [
                    ["class", "card"],
                    ["for", "headingSix"]
                ], null, null, null, null, null)), (e()(), t["\u0275eld"](63, 0, null, null, 7, "div", [
                    ["class", "card-header"]
                ], null, [
                    [null, "click"]
                ], (function(e, n, l) {
                    var t = !0;
                    return "click" === n && (t = !1 !== e.component.openCollapse("collapse6") && t), t
                }), null, null)), (e()(), t["\u0275eld"](64, 0, null, null, 6, "div", [
                    ["class", "row"]
                ], null, null, null, null, null)), (e()(), t["\u0275eld"](65, 0, null, null, 3, "div", [
                    ["class", "col-10"]
                ], null, null, null, null, null)), (e()(), t["\u0275eld"](66, 0, null, null, 2, "h5", [
                    ["class", "mb-0"]
                ], null, null, null, null, null)), (e()(), t["\u0275eld"](67, 0, null, null, 1, "span", [
                    ["class", "f-14 faq-link"]
                ], null, null, null, null, null)), (e()(), t["\u0275ted"](-1, null, [" Is any referral required for appointments? "])), (e()(), t["\u0275eld"](69, 0, null, null, 1, "div", [
                    ["class", "col-2 px-1"]
                ], null, null, null, null, null)), (e()(), t["\u0275eld"](70, 0, null, null, 0, "img", [
                    ["class", "float-right arrow_icon"],
                    ["src", "assets/default/images/bi_arrow-down-circle-fill.svg"]
                ], null, null, null, null, null)), (e()(), t["\u0275eld"](71, 0, null, null, 2, "div", [
                    ["class", "hide"],
                    ["id", "collapse6"]
                ], null, null, null, null, null)), (e()(), t["\u0275eld"](72, 0, null, null, 1, "div", [
                    ["class", "card-body f-12"]
                ], null, null, null, null, null)), (e()(), t["\u0275ted"](-1, null, [" No, we do not require a referral for the appointments. "])), (e()(), t["\u0275eld"](74, 0, null, null, 12, "label", [
                    ["class", "card"],
                    ["for", "headingSeven"]
                ], null, null, null, null, null)), (e()(), t["\u0275eld"](75, 0, null, null, 7, "div", [
                    ["class", "card-header"]
                ], null, [
                    [null, "click"]
                ], (function(e, n, l) {
                    var t = !0;
                    return "click" === n && (t = !1 !== e.component.openCollapse("collapse7") && t), t
                }), null, null)), (e()(), t["\u0275eld"](76, 0, null, null, 6, "div", [
                    ["class", "row"]
                ], null, null, null, null, null)), (e()(), t["\u0275eld"](77, 0, null, null, 3, "div", [
                    ["class", "col-10"]
                ], null, null, null, null, null)), (e()(), t["\u0275eld"](78, 0, null, null, 2, "h5", [
                    ["class", "mb-0"]
                ], null, null, null, null, null)), (e()(), t["\u0275eld"](79, 0, null, null, 1, "span", [
                    ["aria-controls", "collapse7"],
                    ["aria-expanded", "true"],
                    ["class", "f-14 faq-link"],
                    ["data-target", "#collapse7"],
                    ["data-toggle", "collapse"]
                ], null, null, null, null, null)), (e()(), t["\u0275ted"](-1, null, [" How can I book an appointment? "])), (e()(), t["\u0275eld"](81, 0, null, null, 1, "div", [
                    ["class", "col-2 px-1"]
                ], null, null, null, null, null)), (e()(), t["\u0275eld"](82, 0, null, null, 0, "img", [
                    ["class", "float-right arrow_icon"],
                    ["src", "assets/default/images/bi_arrow-down-circle-fill.svg"]
                ], null, null, null, null, null)), (e()(), t["\u0275eld"](83, 0, null, null, 0, "input", [
                    ["class", "faq"],
                    ["id", "headingSeven"],
                    ["name", ""],
                    ["type", "checkbox"]
                ], null, null, null, null, null)), (e()(), t["\u0275eld"](84, 0, null, null, 2, "div", [
                    ["aria-labelledby", "headingSeven"],
                    ["class", "hide"],
                    ["data-parent", "#accordion"],
                    ["id", "collapse7"]
                ], null, null, null, null, null)), (e()(), t["\u0275eld"](85, 0, null, null, 1, "div", [
                    ["class", "card-body f-12"]
                ], null, null, null, null, null)), (e()(), t["\u0275ted"](-1, null, [" You can click on the book appointment link. "])), (e()(), t["\u0275eld"](87, 0, null, null, 11, "label", [
                    ["class", "card"],
                    ["for", "headingEight"]
                ], null, null, null, null, null)), (e()(), t["\u0275eld"](88, 0, null, null, 7, "div", [
                    ["class", "card-header"]
                ], null, [
                    [null, "click"]
                ], (function(e, n, l) {
                    var t = !0;
                    return "click" === n && (t = !1 !== e.component.openCollapse("collapse8") && t), t
                }), null, null)), (e()(), t["\u0275eld"](89, 0, null, null, 6, "div", [
                    ["class", "row"]
                ], null, null, null, null, null)), (e()(), t["\u0275eld"](90, 0, null, null, 3, "div", [
                    ["class", "col-10"]
                ], null, null, null, null, null)), (e()(), t["\u0275eld"](91, 0, null, null, 2, "h5", [
                    ["class", "mb-0"]
                ], null, null, null, null, null)), (e()(), t["\u0275eld"](92, 0, null, null, 1, "span", [
                    ["class", "f-14 faq-link"]
                ], null, null, null, null, null)), (e()(), t["\u0275ted"](-1, null, [" Do I need to bring anything at my first appointment? "])), (e()(), t["\u0275eld"](94, 0, null, null, 1, "div", [
                    ["class", "col-2 px-1"]
                ], null, null, null, null, null)), (e()(), t["\u0275eld"](95, 0, null, null, 0, "img", [
                    ["class", "float-right arrow_icon"],
                    ["src", "assets/default/images/bi_arrow-down-circle-fill.svg"]
                ], null, null, null, null, null)), (e()(), t["\u0275eld"](96, 0, null, null, 2, "div", [
                    ["class", "hide"],
                    ["id", "collapse8"]
                ], null, null, null, null, null)), (e()(), t["\u0275eld"](97, 0, null, null, 1, "div", [
                    ["class", "card-body f-12"]
                ], null, null, null, null, null)), (e()(), t["\u0275ted"](-1, null, [" You may bring the following documents, if available: ID Proof Prior medication list Any prior diagnosis documentation X-RAY reports "]))], null, (function(e, n) {
                    var l = n.component;
                    e(n, 25, 0, l.location), e(n, 37, 0, l.location)
                }))
            }

            function u(e) {
                return t["\u0275vid"](0, [(e()(), t["\u0275eld"](0, 0, null, null, 145, "div", [
                    ["class", "mt-3"]
                ], null, null, null, null, null)), (e()(), t["\u0275eld"](1, 0, null, null, 144, "div", [
                    ["class", "my-5"],
                    ["id", "accordion"]
                ], null, null, null, null, null)), (e()(), t["\u0275eld"](2, 0, null, null, 11, "label", [
                    ["class", "card"],
                    ["for", "headingOne"]
                ], null, null, null, null, null)), (e()(), t["\u0275eld"](3, 0, null, null, 7, "div", [
                    ["class", "card-header"]
                ], null, [
                    [null, "click"]
                ], (function(e, n, l) {
                    var t = !0;
                    return "click" === n && (t = !1 !== e.component.openCollapse("collapse1") && t), t
                }), null, null)), (e()(), t["\u0275eld"](4, 0, null, null, 6, "div", [
                    ["class", "row"]
                ], null, null, null, null, null)), (e()(), t["\u0275eld"](5, 0, null, null, 3, "div", [
                    ["class", "col-10"]
                ], null, null, null, null, null)), (e()(), t["\u0275eld"](6, 0, null, null, 2, "h5", [
                    ["class", "mb-0"]
                ], null, null, null, null, null)), (e()(), t["\u0275eld"](7, 0, null, null, 1, "span", [
                    ["class", "f-14 faq-link"]
                ], null, null, null, null, null)), (e()(), t["\u0275ted"](-1, null, [" How can I book an online consultation? "])), (e()(), t["\u0275eld"](9, 0, null, null, 1, "div", [
                    ["class", "col-2 px-1"]
                ], null, null, null, null, null)), (e()(), t["\u0275eld"](10, 0, null, null, 0, "img", [
                    ["class", "float-right arrow_icon"],
                    ["src", "assets/default/images/bi_arrow-down-circle-fill.svg"]
                ], null, null, null, null, null)), (e()(), t["\u0275eld"](11, 0, null, null, 2, "div", [
                    ["class", "hide"],
                    ["id", "collapse1"]
                ], null, null, null, null, null)), (e()(), t["\u0275eld"](12, 0, null, null, 1, "div", [
                    ["class", "card-body f-12"]
                ], null, null, null, null, null)), (e()(), t["\u0275ted"](-1, null, [" Choose between audio and video consultations, as well as a time slot. To confirm the appointment, enter patient information and pay online. Click the 'Join Call' button to begin the online consultation at the time of the appointment. "])), (e()(), t["\u0275eld"](14, 0, null, null, 11, "label", [
                    ["class", "card"],
                    ["for", "headingTwo"]
                ], null, null, null, null, null)), (e()(), t["\u0275eld"](15, 0, null, null, 7, "div", [
                    ["class", "card-header"]
                ], null, [
                    [null, "click"]
                ], (function(e, n, l) {
                    var t = !0;
                    return "click" === n && (t = !1 !== e.component.openCollapse("collapse2") && t), t
                }), null, null)), (e()(), t["\u0275eld"](16, 0, null, null, 6, "div", [
                    ["class", "row"]
                ], null, null, null, null, null)), (e()(), t["\u0275eld"](17, 0, null, null, 3, "div", [
                    ["class", "col-10"]
                ], null, null, null, null, null)), (e()(), t["\u0275eld"](18, 0, null, null, 2, "h5", [
                    ["class", "mb-0"]
                ], null, null, null, null, null)), (e()(), t["\u0275eld"](19, 0, null, null, 1, "span", [
                    ["class", "f-14 faq-link"]
                ], null, null, null, null, null)), (e()(), t["\u0275ted"](-1, null, [" Is the doctor's prescription generated during the online consultation valid? "])), (e()(), t["\u0275eld"](21, 0, null, null, 1, "div", [
                    ["class", "col-2 px-1"]
                ], null, null, null, null, null)), (e()(), t["\u0275eld"](22, 0, null, null, 0, "img", [
                    ["class", "float-right arrow_icon"],
                    ["src", "assets/default/images/bi_arrow-down-circle-fill.svg"]
                ], null, null, null, null, null)), (e()(), t["\u0275eld"](23, 0, null, null, 2, "div", [
                    ["class", "hide"],
                    ["id", "collapse2"]
                ], null, null, null, null, null)), (e()(), t["\u0275eld"](24, 0, null, null, 1, "div", [
                    ["class", "card-body f-12"]
                ], null, null, null, null, null)), (e()(), t["\u0275ted"](-1, null, [" Yes. According to government regulations, the prescription generated during the online consultation is as reliable as a physical prescription and will be valid if you want to purchase any medicines offline or online. "])), (e()(), t["\u0275eld"](26, 0, null, null, 11, "label", [
                    ["class", "card"],
                    ["for", "headingThree"]
                ], null, null, null, null, null)), (e()(), t["\u0275eld"](27, 0, null, null, 7, "div", [
                    ["class", "card-header"]
                ], null, [
                    [null, "click"]
                ], (function(e, n, l) {
                    var t = !0;
                    return "click" === n && (t = !1 !== e.component.openCollapse("collapse3") && t), t
                }), null, null)), (e()(), t["\u0275eld"](28, 0, null, null, 6, "div", [
                    ["class", "row"]
                ], null, null, null, null, null)), (e()(), t["\u0275eld"](29, 0, null, null, 3, "div", [
                    ["class", "col-10"]
                ], null, null, null, null, null)), (e()(), t["\u0275eld"](30, 0, null, null, 2, "h5", [
                    ["class", "mb-0"]
                ], null, null, null, null, null)), (e()(), t["\u0275eld"](31, 0, null, null, 1, "span", [
                    ["class", "f-14 faq-link"]
                ], null, null, null, null, null)), (e()(), t["\u0275ted"](-1, null, [" How do I make a payment for an online doctor consultation? "])), (e()(), t["\u0275eld"](33, 0, null, null, 1, "div", [
                    ["class", "col-2 px-1"]
                ], null, null, null, null, null)), (e()(), t["\u0275eld"](34, 0, null, null, 0, "img", [
                    ["class", "float-right arrow_icon"],
                    ["src", "assets/default/images/bi_arrow-down-circle-fill.svg"]
                ], null, null, null, null, null)), (e()(), t["\u0275eld"](35, 0, null, null, 2, "div", [
                    ["class", "hide"],
                    ["id", "collapse3"]
                ], null, null, null, null, null)), (e()(), t["\u0275eld"](36, 0, null, null, 1, "div", [
                    ["class", "card-body f-12"]
                ], null, null, null, null, null)), (e()(), t["\u0275ted"](-1, null, [" Online consultations are pre-paid and can be paid by using any of the following methods: UPI, Wallets, Debit or Credit Card, or Netbanking. "])), (e()(), t["\u0275eld"](38, 0, null, null, 11, "label", [
                    ["class", "card"],
                    ["for", "headingFour"]
                ], null, null, null, null, null)), (e()(), t["\u0275eld"](39, 0, null, null, 7, "div", [
                    ["class", "card-header"]
                ], null, [
                    [null, "click"]
                ], (function(e, n, l) {
                    var t = !0;
                    return "click" === n && (t = !1 !== e.component.openCollapse("collapse4") && t), t
                }), null, null)), (e()(), t["\u0275eld"](40, 0, null, null, 6, "div", [
                    ["class", "row"]
                ], null, null, null, null, null)), (e()(), t["\u0275eld"](41, 0, null, null, 3, "div", [
                    ["class", "col-10"]
                ], null, null, null, null, null)), (e()(), t["\u0275eld"](42, 0, null, null, 2, "h5", [
                    ["class", "mb-0"]
                ], null, null, null, null, null)), (e()(), t["\u0275eld"](43, 0, null, null, 1, "span", [
                    ["class", "f-14 faq-link"]
                ], null, null, null, null, null)), (e()(), t["\u0275ted"](-1, null, [" Is there a time limit on how long I can speak with the doctor? "])), (e()(), t["\u0275eld"](45, 0, null, null, 1, "div", [
                    ["class", "col-2 px-1"]
                ], null, null, null, null, null)), (e()(), t["\u0275eld"](46, 0, null, null, 0, "img", [
                    ["class", "float-right arrow_icon"],
                    ["src", "assets/default/images/bi_arrow-down-circle-fill.svg"]
                ], null, null, null, null, null)), (e()(), t["\u0275eld"](47, 0, null, null, 2, "div", [
                    ["class", "hide"],
                    ["id", "collapse4"]
                ], null, null, null, null, null)), (e()(), t["\u0275eld"](48, 0, null, null, 1, "div", [
                    ["class", "card-body f-12"]
                ], null, null, null, null, null)), (e()(), t["\u0275ted"](-1, null, [" The doctor selects the time slot based on his or her experience, and it usually lasts 10-15 minutes, though this can vary depending on your health condition, the number of questions you have, and the doctor's judgement. "])), (e()(), t["\u0275eld"](50, 0, null, null, 11, "label", [
                    ["class", "card"],
                    ["for", "headingFive"]
                ], null, null, null, null, null)), (e()(), t["\u0275eld"](51, 0, null, null, 7, "div", [
                    ["class", "card-header"]
                ], null, [
                    [null, "click"]
                ], (function(e, n, l) {
                    var t = !0;
                    return "click" === n && (t = !1 !== e.component.openCollapse("collapse5") && t), t
                }), null, null)), (e()(), t["\u0275eld"](52, 0, null, null, 6, "div", [
                    ["class", "row"]
                ], null, null, null, null, null)), (e()(), t["\u0275eld"](53, 0, null, null, 3, "div", [
                    ["class", "col-10"]
                ], null, null, null, null, null)), (e()(), t["\u0275eld"](54, 0, null, null, 2, "h5", [
                    ["class", "mb-0"]
                ], null, null, null, null, null)), (e()(), t["\u0275eld"](55, 0, null, null, 1, "span", [
                    ["class", "f-14 faq-link"]
                ], null, null, null, null, null)), (e()(), t["\u0275ted"](-1, null, [" Where can I find my online doctor consultation prescription? "])), (e()(), t["\u0275eld"](57, 0, null, null, 1, "div", [
                    ["class", "col-2 px-1"]
                ], null, null, null, null, null)), (e()(), t["\u0275eld"](58, 0, null, null, 0, "img", [
                    ["class", "float-right arrow_icon"],
                    ["src", "assets/default/images/bi_arrow-down-circle-fill.svg"]
                ], null, null, null, null, null)), (e()(), t["\u0275eld"](59, 0, null, null, 2, "div", [
                    ["class", "hide"],
                    ["id", "collapse5"]
                ], null, null, null, null, null)), (e()(), t["\u0275eld"](60, 0, null, null, 1, "div", [
                    ["class", "card-body f-12"]
                ], null, null, null, null, null)), (e()(), t["\u0275ted"](-1, null, [" Your prescription for your online consult can be found in the Remedo app's 'Records' tab. When you click on this tab, you will be able to view your prescription and, if you choose the download option, you will be able to download it as well. "])), (e()(), t["\u0275eld"](62, 0, null, null, 11, "label", [
                    ["class", "card"],
                    ["for", "headingSix"]
                ], null, null, null, null, null)), (e()(), t["\u0275eld"](63, 0, null, null, 7, "div", [
                    ["class", "card-header"]
                ], null, [
                    [null, "click"]
                ], (function(e, n, l) {
                    var t = !0;
                    return "click" === n && (t = !1 !== e.component.openCollapse("collapse6") && t), t
                }), null, null)), (e()(), t["\u0275eld"](64, 0, null, null, 6, "div", [
                    ["class", "row"]
                ], null, null, null, null, null)), (e()(), t["\u0275eld"](65, 0, null, null, 3, "div", [
                    ["class", "col-10"]
                ], null, null, null, null, null)), (e()(), t["\u0275eld"](66, 0, null, null, 2, "h5", [
                    ["class", "mb-0"]
                ], null, null, null, null, null)), (e()(), t["\u0275eld"](67, 0, null, null, 1, "span", [
                    ["class", "f-14 faq-link"]
                ], null, null, null, null, null)), (e()(), t["\u0275ted"](-1, null, [" Will I receive an invoice? In whose name will it be generated? "])), (e()(), t["\u0275eld"](69, 0, null, null, 1, "div", [
                    ["class", "col-2 px-1"]
                ], null, null, null, null, null)), (e()(), t["\u0275eld"](70, 0, null, null, 0, "img", [
                    ["class", "float-right arrow_icon"],
                    ["src", "assets/default/images/bi_arrow-down-circle-fill.svg"]
                ], null, null, null, null, null)), (e()(), t["\u0275eld"](71, 0, null, null, 2, "div", [
                    ["class", "hide"],
                    ["id", "collapse6"]
                ], null, null, null, null, null)), (e()(), t["\u0275eld"](72, 0, null, null, 1, "div", [
                    ["class", "card-body f-12"]
                ], null, null, null, null, null)), (e()(), t["\u0275ted"](-1, null, [" Yes. An automatic invoice will be generated in the patient's name and will be visible in the Remedo app, as well as a link to it will be sent on the registered mobile number. "])), (e()(), t["\u0275eld"](74, 0, null, null, 11, "label", [
                    ["class", "card"],
                    ["for", "headingSeven"]
                ], null, null, null, null, null)), (e()(), t["\u0275eld"](75, 0, null, null, 7, "div", [
                    ["class", "card-header"]
                ], null, [
                    [null, "click"]
                ], (function(e, n, l) {
                    var t = !0;
                    return "click" === n && (t = !1 !== e.component.openCollapse("collapse7") && t), t
                }), null, null)), (e()(), t["\u0275eld"](76, 0, null, null, 6, "div", [
                    ["class", "row"]
                ], null, null, null, null, null)), (e()(), t["\u0275eld"](77, 0, null, null, 3, "div", [
                    ["class", "col-10"]
                ], null, null, null, null, null)), (e()(), t["\u0275eld"](78, 0, null, null, 2, "h5", [
                    ["class", "mb-0"]
                ], null, null, null, null, null)), (e()(), t["\u0275eld"](79, 0, null, null, 1, "span", [
                    ["class", "f-14 faq-link"]
                ], null, null, null, null, null)), (e()(), t["\u0275ted"](-1, null, [" Is it okay if I share my prescriptions or test results with you before my consultation? "])), (e()(), t["\u0275eld"](81, 0, null, null, 1, "div", [
                    ["class", "col-2 px-1"]
                ], null, null, null, null, null)), (e()(), t["\u0275eld"](82, 0, null, null, 0, "img", [
                    ["class", "float-right arrow_icon"],
                    ["src", "assets/default/images/bi_arrow-down-circle-fill.svg"]
                ], null, null, null, null, null)), (e()(), t["\u0275eld"](83, 0, null, null, 2, "div", [
                    ["class", "hide"],
                    ["id", "collapse7"]
                ], null, null, null, null, null)), (e()(), t["\u0275eld"](84, 0, null, null, 1, "div", [
                    ["class", "card-body f-12"]
                ], null, null, null, null, null)), (e()(), t["\u0275ted"](-1, null, [" Yes. During an online consultation, you can share your previous prescriptions and test results with the doctor. To share any relevant medical reports with the doctor, go to the Records section of the app and follow the steps. "])), (e()(), t["\u0275eld"](86, 0, null, null, 11, "label", [
                    ["class", "card"],
                    ["for", "headingEight"]
                ], null, null, null, null, null)), (e()(), t["\u0275eld"](87, 0, null, null, 7, "div", [
                    ["class", "card-header"]
                ], null, [
                    [null, "click"]
                ], (function(e, n, l) {
                    var t = !0;
                    return "click" === n && (t = !1 !== e.component.openCollapse("collapse8") && t), t
                }), null, null)), (e()(), t["\u0275eld"](88, 0, null, null, 6, "div", [
                    ["class", "row"]
                ], null, null, null, null, null)), (e()(), t["\u0275eld"](89, 0, null, null, 3, "div", [
                    ["class", "col-10"]
                ], null, null, null, null, null)), (e()(), t["\u0275eld"](90, 0, null, null, 2, "h5", [
                    ["class", "mb-0"]
                ], null, null, null, null, null)), (e()(), t["\u0275eld"](91, 0, null, null, 1, "span", [
                    ["class", "f-14 faq-link"]
                ], null, null, null, null, null)), (e()(), t["\u0275ted"](-1, null, [" The video was not clear during the online consultation. So, what do I do now? "])), (e()(), t["\u0275eld"](93, 0, null, null, 1, "div", [
                    ["class", "col-2 px-1"]
                ], null, null, null, null, null)), (e()(), t["\u0275eld"](94, 0, null, null, 0, "img", [
                    ["class", "float-right arrow_icon"],
                    ["src", "assets/default/images/bi_arrow-down-circle-fill.svg"]
                ], null, null, null, null, null)), (e()(), t["\u0275eld"](95, 0, null, null, 2, "div", [
                    ["class", "hide"],
                    ["id", "collapse8"]
                ], null, null, null, null, null)), (e()(), t["\u0275eld"](96, 0, null, null, 1, "div", [
                    ["class", "card-body f-12"]
                ], null, null, null, null, null)), (e()(), t["\u0275ted"](-1, null, [" This could be due to a technical issue or poor internet connectivity. Please check your internet connection and try again if this happens. Do contact our support team if the problem continues. "])), (e()(), t["\u0275eld"](98, 0, null, null, 11, "label", [
                    ["class", "card"],
                    ["for", "headingNine"]
                ], null, null, null, null, null)), (e()(), t["\u0275eld"](99, 0, null, null, 7, "div", [
                    ["class", "card-header"]
                ], null, [
                    [null, "click"]
                ], (function(e, n, l) {
                    var t = !0;
                    return "click" === n && (t = !1 !== e.component.openCollapse("collapse9") && t), t
                }), null, null)), (e()(), t["\u0275eld"](100, 0, null, null, 6, "div", [
                    ["class", "row"]
                ], null, null, null, null, null)), (e()(), t["\u0275eld"](101, 0, null, null, 3, "div", [
                    ["class", "col-10"]
                ], null, null, null, null, null)), (e()(), t["\u0275eld"](102, 0, null, null, 2, "h5", [
                    ["class", "mb-0"]
                ], null, null, null, null, null)), (e()(), t["\u0275eld"](103, 0, null, null, 1, "span", [
                    ["class", "f-14 faq-link"]
                ], null, null, null, null, null)), (e()(), t["\u0275ted"](-1, null, [" Is it possible for me to cancel the appointment? If I cancel the appointment, will I receive a refund? "])), (e()(), t["\u0275eld"](105, 0, null, null, 1, "div", [
                    ["class", "col-2 px-1"]
                ], null, null, null, null, null)), (e()(), t["\u0275eld"](106, 0, null, null, 0, "img", [
                    ["class", "float-right arrow_icon"],
                    ["src", "assets/default/images/bi_arrow-down-circle-fill.svg"]
                ], null, null, null, null, null)), (e()(), t["\u0275eld"](107, 0, null, null, 2, "div", [
                    ["class", "hide"],
                    ["id", "collapse9"]
                ], null, null, null, null, null)), (e()(), t["\u0275eld"](108, 0, null, null, 1, "div", [
                    ["class", "card-body f-12"]
                ], null, null, null, null, null)), (e()(), t["\u0275ted"](-1, null, [" Yes. You can cancel the appointment by contacting our support team in the event of unforeseen circumstances. If you cancel an online consultation, you will receive a refund in your account within 5 to 7 business days. "])), (e()(), t["\u0275eld"](110, 0, null, null, 11, "label", [
                    ["class", "card"],
                    ["for", "headingTen"]
                ], null, null, null, null, null)), (e()(), t["\u0275eld"](111, 0, null, null, 7, "div", [
                    ["class", "card-header"]
                ], null, [
                    [null, "click"]
                ], (function(e, n, l) {
                    var t = !0;
                    return "click" === n && (t = !1 !== e.component.openCollapse("collapse10") && t), t
                }), null, null)), (e()(), t["\u0275eld"](112, 0, null, null, 6, "div", [
                    ["class", "row"]
                ], null, null, null, null, null)), (e()(), t["\u0275eld"](113, 0, null, null, 3, "div", [
                    ["class", "col-10"]
                ], null, null, null, null, null)), (e()(), t["\u0275eld"](114, 0, null, null, 2, "h5", [
                    ["class", "mb-0"]
                ], null, null, null, null, null)), (e()(), t["\u0275eld"](115, 0, null, null, 1, "span", [
                    ["class", "f-14 faq-link"]
                ], null, null, null, null, null)), (e()(), t["\u0275ted"](-1, null, [" What am I supposed to do if my doctor did not answer the call? "])), (e()(), t["\u0275eld"](117, 0, null, null, 1, "div", [
                    ["class", "col-2 px-1"]
                ], null, null, null, null, null)), (e()(), t["\u0275eld"](118, 0, null, null, 0, "img", [
                    ["class", "float-right arrow_icon"],
                    ["src", "assets/default/images/bi_arrow-down-circle-fill.svg"]
                ], null, null, null, null, null)), (e()(), t["\u0275eld"](119, 0, null, null, 2, "div", [
                    ["class", "hide"],
                    ["id", "collapse10"]
                ], null, null, null, null, null)), (e()(), t["\u0275eld"](120, 0, null, null, 1, "div", [
                    ["class", "card-body f-12"]
                ], null, null, null, null, null)), (e()(), t["\u0275ted"](-1, null, [" This is a rare occurrence, but it can happen if the doctor is preoccupied with an emergency or another serious patient. But there's no need to be concerned. You can contact our customer service team, who will assist you in scheduling an appointment with the doctor as soon as possible. In the event that the slot does not suit you or you wish to cancel, you will be refunded your entire deposit. "])), (e()(), t["\u0275eld"](122, 0, null, null, 11, "label", [
                    ["class", "card"],
                    ["for", "headingEleven"]
                ], null, null, null, null, null)), (e()(), t["\u0275eld"](123, 0, null, null, 7, "div", [
                    ["class", "card-header"]
                ], null, [
                    [null, "click"]
                ], (function(e, n, l) {
                    var t = !0;
                    return "click" === n && (t = !1 !== e.component.openCollapse("collapse11") && t), t
                }), null, null)), (e()(), t["\u0275eld"](124, 0, null, null, 6, "div", [
                    ["class", "row"]
                ], null, null, null, null, null)), (e()(), t["\u0275eld"](125, 0, null, null, 3, "div", [
                    ["class", "col-10"]
                ], null, null, null, null, null)), (e()(), t["\u0275eld"](126, 0, null, null, 2, "h5", [
                    ["class", "mb-0"]
                ], null, null, null, null, null)), (e()(), t["\u0275eld"](127, 0, null, null, 1, "span", [
                    ["class", "f-14 faq-link"]
                ], null, null, null, null, null)), (e()(), t["\u0275ted"](-1, null, [" What am I supposed to do if I missed the doctor's consultation call? "])), (e()(), t["\u0275eld"](129, 0, null, null, 1, "div", [
                    ["class", "col-2 px-1"]
                ], null, null, null, null, null)), (e()(), t["\u0275eld"](130, 0, null, null, 0, "img", [
                    ["class", "float-right arrow_icon"],
                    ["src", "assets/default/images/bi_arrow-down-circle-fill.svg"]
                ], null, null, null, null, null)), (e()(), t["\u0275eld"](131, 0, null, null, 2, "div", [
                    ["class", "hide"],
                    ["id", "collapse11"]
                ], null, null, null, null, null)), (e()(), t["\u0275eld"](132, 0, null, null, 1, "div", [
                    ["class", "card-body f-12"]
                ], null, null, null, null, null)), (e()(), t["\u0275ted"](-1, null, [" If you've missed a call from the doctor, please contact our team, and we'll assist you in rescheduling the appointment after speaking with the doctor. Please keep in mind that in such cases, the doctor's availability will be prioritised. "])), (e()(), t["\u0275eld"](134, 0, null, null, 11, "label", [
                    ["class", "card"],
                    ["for", "heading12"]
                ], null, null, null, null, null)), (e()(), t["\u0275eld"](135, 0, null, null, 7, "div", [
                    ["class", "card-header"]
                ], null, [
                    [null, "click"]
                ], (function(e, n, l) {
                    var t = !0;
                    return "click" === n && (t = !1 !== e.component.openCollapse("collapse12") && t), t
                }), null, null)), (e()(), t["\u0275eld"](136, 0, null, null, 6, "div", [
                    ["class", "row"]
                ], null, null, null, null, null)), (e()(), t["\u0275eld"](137, 0, null, null, 3, "div", [
                    ["class", "col-10"]
                ], null, null, null, null, null)), (e()(), t["\u0275eld"](138, 0, null, null, 2, "h5", [
                    ["class", "mb-0"]
                ], null, null, null, null, null)), (e()(), t["\u0275eld"](139, 0, null, null, 1, "span", [
                    ["class", "f-14 faq-link"]
                ], null, null, null, null, null)), (e()(), t["\u0275ted"](-1, null, [" What if my phone gets disconnected amid the consultation? "])), (e()(), t["\u0275eld"](141, 0, null, null, 1, "div", [
                    ["class", "col-2 px-1"]
                ], null, null, null, null, null)), (e()(), t["\u0275eld"](142, 0, null, null, 0, "img", [
                    ["class", "float-right arrow_icon"],
                    ["src", "assets/default/images/bi_arrow-down-circle-fill.svg"]
                ], null, null, null, null, null)), (e()(), t["\u0275eld"](143, 0, null, null, 2, "div", [
                    ["class", "hide"],
                    ["id", "collapse12"]
                ], null, null, null, null, null)), (e()(), t["\u0275eld"](144, 0, null, null, 1, "div", [
                    ["class", "card-body f-12"]
                ], null, null, null, null, null)), (e()(), t["\u0275ted"](-1, null, [" If your audio/video call drops out during the online consultation, you can reconnect by clicking join call if your internet connection is stable and your time slot is still available. Please contact our team if you have any questions or concerns. "]))], null, null)
            }

            function a(e) {
                return t["\u0275vid"](0, [(e()(), t["\u0275eld"](0, 0, null, null, 9, "div", [
                    ["class", "container-fluid container"]
                ], null, null, null, null, null)), (e()(), t["\u0275eld"](1, 0, null, null, 8, "div", [
                    ["class", "frequently_asked_questions row align"]
                ], null, null, null, null, null)), (e()(), t["\u0275eld"](2, 0, null, null, 7, "div", [
                    ["class", "container-fluid mt-5 mb-5"]
                ], null, null, null, null, null)), (e()(), t["\u0275eld"](3, 0, null, null, 1, "h2", [
                    ["class", "text-center"]
                ], null, null, null, null, null)), (e()(), t["\u0275ted"](-1, null, ["Frequently asked questions"])), (e()(), t["\u0275eld"](5, 0, null, null, 4, "div", [
                    ["class", "container"]
                ], null, null, null, null, null)), (e()(), t["\u0275and"](16777216, null, null, 1, null, r)), t["\u0275did"](7, 16384, null, 0, o.NgIf, [t.ViewContainerRef, t.TemplateRef], {
                    ngIf: [0, "ngIf"]
                }, null), (e()(), t["\u0275and"](16777216, null, null, 1, null, u)), t["\u0275did"](9, 16384, null, 0, o.NgIf, [t.ViewContainerRef, t.TemplateRef], {
                    ngIf: [0, "ngIf"]
                }, null)], (function(e, n) {
                    var l = n.component;
                    e(n, 7, 0, "inconsult" == l.consultType), e(n, 9, 0, "inconsult" !== l.consultType)
                }), null)
            }
        },
        ErIi: function(e, n, l) {
            "use strict";
            l.d(n, "a", (function() {
                return t
            }));
            var t = function() {
                return function() {}
            }()
        },
        PilI: function(e, n, l) {
            "use strict";
            var t = l("CcnG"),
                o = l("Ip0R");
            l("E5AT"), l("A7o+"), l("ZYCi"), l("N+K7"), l.d(n, "a", (function() {
                return i
            })), l.d(n, "b", (function() {
                return p
            }));
            var i = t["\u0275crt"]({
                encapsulation: 0,
                styles: [
                    ['@import url(https://fonts.googleapis.com/css?family=Poppins&display=swap);@import url(https://fonts.googleapis.com/css?family=Poppins&display=swap);[_ngcontent-%COMP%]:root{--primary-color:#254886;--secondary-color:#254886;--primary-color-light:#f2e5f2;--body-background-color:#f2f2f2;--block-gray-background:#e4e4e4;--primary-green-color:#02a77a;--primary-font:"Roboto";--primary-active:#1a4694}header[_ngcontent-%COMP%]{background-color:#fff;height:59px;box-shadow:0 1px 6px rgba(32,33,36,.28);position:-webkit-sticky;position:sticky;top:0;z-index:6;width:100%}header[_ngcontent-%COMP%]   .lang[_ngcontent-%COMP%]   select[_ngcontent-%COMP%]{background-color:var(--primary-color);border-radius:17px!important;background-color:var(--primary-color);padding:5px 10px;color:#fff}.header_components[_ngcontent-%COMP%]{padding:5px 0}.logo-rem[_ngcontent-%COMP%]{margin-top:5px}@media (max-width:321px){.logo-rem[_ngcontent-%COMP%]{width:150px;height:28px;margin-top:7px}input[type=radio][_ngcontent-%COMP%]{margin-left:4px}}.lang[_ngcontent-%COMP%]{float:right;margin-top:3px}header[_ngcontent-%COMP%]   .lang[_ngcontent-%COMP%]   option[_ngcontent-%COMP%]{background-color:#fff;padding:5px 10px;color:var(--primary-color);border-radius:5px}header[_ngcontent-%COMP%]   .lang[_ngcontent-%COMP%]   option[_ngcontent-%COMP%]:focus, header[_ngcontent-%COMP%]   .lang[_ngcontent-%COMP%]   option[_ngcontent-%COMP%]:selected, header[_ngcontent-%COMP%]   .lang[_ngcontent-%COMP%]   option[_ngcontent-%COMP%]:visited{background-color:#f2f2f2;color:#fff}.select_lang_colors[_ngcontent-%COMP%]{background-color:#fff!important;color:var(--primary-color)!important;font-weight:700}.profile[_ngcontent-%COMP%]{padding:16px}.white_bg[_ngcontent-%COMP%]{background-color:#fff}.cursor[_ngcontent-%COMP%]{cursor:pointer}.logout[_ngcontent-%COMP%]{float:right;cursor:pointer;color:var(--primary-color)!important;white-space:no-wrap;font-size:14px}.doc-intial[_ngcontent-%COMP%]{border-radius:50%;width:45px;height:45px;display:inline-block;background-color:#ff6767;color:#fff;text-align:center;line-height:45px;font-weight:500;text-transform:uppercase;font-size:18px}.help[_ngcontent-%COMP%]{float:right;cursor:pointer;color:#0176c4;font-size:14px;line-height:24px}']
                ],
                data: {}
            });

            function r(e) {
                return t["\u0275vid"](0, [(e()(), t["\u0275eld"](0, 0, null, null, 1, "div", [
                    ["class", "logout mt-2"]
                ], null, [
                    [null, "click"]
                ], (function(e, n, l) {
                    var t = !0;
                    return "click" === n && (t = !1 !== e.component.doLogout() && t), t
                }), null, null)), (e()(), t["\u0275ted"](-1, null, ["Logout"]))], null, null)
            }

            function u(e) {
                return t["\u0275vid"](0, [(e()(), t["\u0275eld"](0, 0, null, null, 6, "div", [], null, null, null, null, null)), (e()(), t["\u0275eld"](1, 0, null, null, 5, "div", [
                    ["class", "pt-1"]
                ], null, null, null, null, null)), (e()(), t["\u0275eld"](2, 0, null, null, 0, "img", [
                    ["alt", ""],
                    ["class", "cursor"],
                    ["src", "assets/default/images/arrow-right-short.svg"],
                    ["style", "height: 35px"]
                ], null, [
                    [null, "click"]
                ], (function(e, n, l) {
                    var t = !0;
                    return "click" === n && (t = !1 !== e.component.onBack() && t), t
                }), null, null)), (e()(), t["\u0275eld"](3, 0, null, null, 1, "b", [
                    ["class", "pl-2"]
                ], null, null, null, null, null)), (e()(), t["\u0275ted"](4, null, [" ", " "])), (e()(), t["\u0275and"](16777216, null, null, 1, null, r)), t["\u0275did"](6, 16384, null, 0, o.NgIf, [t.ViewContainerRef, t.TemplateRef], {
                    ngIf: [0, "ngIf"]
                }, null)], (function(e, n) {
                    e(n, 6, 0, n.component.isLogin)
                }), (function(e, n) {
                    e(n, 4, 0, n.component.headerText)
                }))
            }

            function a(e) {
                return t["\u0275vid"](0, [(e()(), t["\u0275eld"](0, 0, null, null, 0, "img", [
                    ["alt", ""],
                    ["class", "cursor"],
                    ["src", "assets/default/images/arrow-right-short.svg"],
                    ["style", "margin-right: 12px; height: 35px"]
                ], null, [
                    [null, "click"]
                ], (function(e, n, l) {
                    var t = !0;
                    return "click" === n && (t = !1 !== e.component.onBack() && t), t
                }), null, null))], null, null)
            }

            function s(e) {
                return t["\u0275vid"](0, [(e()(), t["\u0275eld"](0, 0, null, null, 2, "a", [], [
                    [8, "href", 4]
                ], null, null, null, null)), (e()(), t["\u0275eld"](1, 0, null, null, 1, "div", [
                    ["class", "doc-intial"]
                ], null, null, null, null, null)), (e()(), t["\u0275ted"](2, null, ["", ""]))], null, (function(e, n) {
                    var l = n.component;
                    e(n, 0, 0, t["\u0275inlineInterpolate"](1, "", l.shareUrl, "")), e(n, 2, 0, l.username)
                }))
            }

            function c(e) {
                return t["\u0275vid"](0, [(e()(), t["\u0275eld"](0, 0, null, null, 0, "img", [
                    ["class", "logo-rem logo-link"]
                ], [
                    [8, "src", 4]
                ], null, null, null, null))], null, (function(e, n) {
                    e(n, 0, 0, t["\u0275inlineInterpolate"](1, "", n.component.imageDir, "logo.svg"))
                }))
            }

            function d(e) {
                return t["\u0275vid"](0, [(e()(), t["\u0275eld"](0, 0, null, null, 1, "div", [
                    ["class", "help mt-2"]
                ], null, [
                    [null, "click"]
                ], (function(e, n, l) {
                    var t = !0;
                    return "click" === n && (t = !1 !== e.component.goToHelp() && t), t
                }), null, null)), (e()(), t["\u0275ted"](-1, null, ["Help ?"]))], null, null)
            }

            function f(e) {
                return t["\u0275vid"](0, [(e()(), t["\u0275eld"](0, 0, null, null, 9, "div", [
                    ["class", "row"]
                ], null, null, null, null, null)), (e()(), t["\u0275eld"](1, 0, null, null, 8, "div", [
                    ["class", "logo-head col col-sm"]
                ], null, null, null, null, null)), (e()(), t["\u0275and"](16777216, null, null, 1, null, a)), t["\u0275did"](3, 16384, null, 0, o.NgIf, [t.ViewContainerRef, t.TemplateRef], {
                    ngIf: [0, "ngIf"]
                }, null), (e()(), t["\u0275and"](16777216, null, null, 1, null, s)), t["\u0275did"](5, 16384, null, 0, o.NgIf, [t.ViewContainerRef, t.TemplateRef], {
                    ngIf: [0, "ngIf"]
                }, null), (e()(), t["\u0275and"](16777216, null, null, 1, null, c)), t["\u0275did"](7, 16384, null, 0, o.NgIf, [t.ViewContainerRef, t.TemplateRef], {
                    ngIf: [0, "ngIf"]
                }, null), (e()(), t["\u0275and"](16777216, null, null, 1, null, d)), t["\u0275did"](9, 16384, null, 0, o.NgIf, [t.ViewContainerRef, t.TemplateRef], {
                    ngIf: [0, "ngIf"]
                }, null)], (function(e, n) {
                    var l = n.component;
                    e(n, 3, 0, l.isLogoBack), e(n, 5, 0, !l.ua), e(n, 7, 0, l.ua), e(n, 9, 0, "booking" == l.paramRoutes.param)
                }), null)
            }

            function p(e) {
                return t["\u0275vid"](0, [(e()(), t["\u0275eld"](0, 0, null, null, 6, "header", [], null, null, null, null, null)), (e()(), t["\u0275eld"](1, 0, null, null, 5, "div", [
                    ["class", "header_components"]
                ], null, null, null, null, null)), (e()(), t["\u0275eld"](2, 0, null, null, 4, "div", [
                    ["class", "container"]
                ], null, null, null, null, null)), (e()(), t["\u0275and"](16777216, null, null, 1, null, u)), t["\u0275did"](4, 16384, null, 0, o.NgIf, [t.ViewContainerRef, t.TemplateRef], {
                    ngIf: [0, "ngIf"]
                }, null), (e()(), t["\u0275and"](16777216, null, null, 1, null, f)), t["\u0275did"](6, 16384, null, 0, o.NgIf, [t.ViewContainerRef, t.TemplateRef], {
                    ngIf: [0, "ngIf"]
                }, null)], (function(e, n) {
                    var l = n.component;
                    e(n, 4, 0, l.route.params.value.doctorName && l.route.params.value.id || l.url.indexOf("services") > -1), e(n, 6, 0, l.isLogo || l.route.params.value.doctorName && !l.route.params.value.id && -1 == l.url.indexOf("services"))
                }), null)
            }
        },
        Rg05: function(e, n, l) {
            "use strict";
            l.d(n, "a", (function() {
                return i
            }));
            var t = l("EVdn"),
                o = l.n(t),
                i = function() {
                    function e() {
                        this.lastKeys = []
                    }
                    return e.prototype.ngOnInit = function() {}, e.prototype.openCollapse = function(e) {
                        for (var n = 1; n < 20; n++) o()("#collapse" + n).addClass("hide");
                        if (0 == this.lastKeys.filter((function(n) {
                                return n == e
                            })).length) this.lastKeys.push(e), o()("#" + e).removeClass("hide");
                        else if (this.lastKey == e)
                            for (o()("#" + e).addClass("hide"), n = 0; n < 8; n++) this.lastKeys[n] == e && this.lastKeys.splice(n, 1);
                        else o()("#" + e).removeClass("hide");
                        this.lastKey = e
                    }, e
                }()
        },
        sF7c: function(e, n, l) {
            "use strict";
            l.d(n, "a", (function() {
                return i
            })), l.d(n, "b", (function() {
                return a
            }));
            var t = l("CcnG"),
                o = (l("ARwZ"), l("Ip0R")),
                i = (l("gIcY"), t["\u0275crt"]({
                    encapsulation: 2,
                    styles: [],
                    data: {}
                }));

            function r(e) {
                return t["\u0275vid"](0, [(e()(), t["\u0275eld"](0, 0, null, null, 3, "a", [
                    ["class", "ui-rating-cancel"]
                ], [
                    [1, "tabindex", 0]
                ], [
                    [null, "click"],
                    [null, "keydown.enter"]
                ], (function(e, n, l) {
                    var t = !0,
                        o = e.component;
                    return "click" === n && (t = !1 !== o.clear(l) && t), "keydown.enter" === n && (t = !1 !== o.clear(l) && t), t
                }), null, null)), (e()(), t["\u0275eld"](1, 0, null, null, 2, "span", [
                    ["class", "ui-rating-icon"]
                ], null, null, null, null, null)), t["\u0275did"](2, 278528, null, 0, o.NgClass, [t.IterableDiffers, t.KeyValueDiffers, t.ElementRef, t.Renderer2], {
                    klass: [0, "klass"],
                    ngClass: [1, "ngClass"]
                }, null), t["\u0275did"](3, 278528, null, 0, o.NgStyle, [t.KeyValueDiffers, t.ElementRef, t.Renderer2], {
                    ngStyle: [0, "ngStyle"]
                }, null)], (function(e, n) {
                    var l = n.component;
                    e(n, 2, 0, "ui-rating-icon", l.iconCancelClass), e(n, 3, 0, l.iconCancelStyle)
                }), (function(e, n) {
                    e(n, 0, 0, n.component.disabled ? null : "0")
                }))
            }

            function u(e) {
                return t["\u0275vid"](0, [(e()(), t["\u0275eld"](0, 0, null, null, 3, "a", [], [
                    [1, "tabindex", 0]
                ], [
                    [null, "click"],
                    [null, "keydown.enter"]
                ], (function(e, n, l) {
                    var t = !0,
                        o = e.component;
                    return "click" === n && (t = !1 !== o.rate(l, e.context.index) && t), "keydown.enter" === n && (t = !1 !== o.rate(l, e.context.index) && t), t
                }), null, null)), (e()(), t["\u0275eld"](1, 0, null, null, 2, "span", [
                    ["class", "ui-rating-icon"]
                ], null, null, null, null, null)), t["\u0275did"](2, 278528, null, 0, o.NgClass, [t.IterableDiffers, t.KeyValueDiffers, t.ElementRef, t.Renderer2], {
                    klass: [0, "klass"],
                    ngClass: [1, "ngClass"]
                }, null), t["\u0275did"](3, 278528, null, 0, o.NgStyle, [t.KeyValueDiffers, t.ElementRef, t.Renderer2], {
                    ngStyle: [0, "ngStyle"]
                }, null)], (function(e, n) {
                    var l = n.component;
                    e(n, 2, 0, "ui-rating-icon", !l.value || n.context.index >= l.value ? l.iconOffClass : l.iconOnClass), e(n, 3, 0, !l.value || n.context.index >= l.value ? l.iconOffStyle : l.iconOnStyle)
                }), (function(e, n) {
                    e(n, 0, 0, n.component.disabled ? null : "0")
                }))
            }

            function a(e) {
                return t["\u0275vid"](0, [(e()(), t["\u0275eld"](0, 0, null, null, 6, "div", [
                    ["class", "ui-rating"]
                ], null, null, null, null, null)), t["\u0275did"](1, 278528, null, 0, o.NgClass, [t.IterableDiffers, t.KeyValueDiffers, t.ElementRef, t.Renderer2], {
                    klass: [0, "klass"],
                    ngClass: [1, "ngClass"]
                }, null), t["\u0275pod"](2, {
                    "ui-state-disabled": 0
                }), (e()(), t["\u0275and"](16777216, null, null, 1, null, r)), t["\u0275did"](4, 16384, null, 0, o.NgIf, [t.ViewContainerRef, t.TemplateRef], {
                    ngIf: [0, "ngIf"]
                }, null), (e()(), t["\u0275and"](16777216, null, null, 1, null, u)), t["\u0275did"](6, 278528, null, 0, o.NgForOf, [t.ViewContainerRef, t.TemplateRef, t.IterableDiffers], {
                    ngForOf: [0, "ngForOf"]
                }, null)], (function(e, n) {
                    var l = n.component,
                        t = e(n, 2, 0, l.disabled);
                    e(n, 1, 0, "ui-rating", t), e(n, 4, 0, l.cancel), e(n, 6, 0, l.starsArray)
                }), null)
            }
        }
    }
]);