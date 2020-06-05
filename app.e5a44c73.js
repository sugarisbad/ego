(function(e) {
    function t(t) {
        for (var o, i, s = t[0], u = t[1], c = t[2], l = 0, d = []; l < s.length; l++)
            i = s[l],
            a[i] && d.push(a[i][0]),
            a[i] = 0;
        for (o in u)
            Object.prototype.hasOwnProperty.call(u, o) && (e[o] = u[o]);
        f && f(t);
        while (d.length)
            d.shift()();
        return r.push.apply(r, c || []),
        n()
    }
    function n() {
        for (var e, t = 0; t < r.length; t++) {
            for (var n = r[t], o = !0, i = 1; i < n.length; i++) {
                var u = n[i];
                0 !== a[u] && (o = !1)
            }
            o && (r.splice(t--, 1),
            e = s(s.s = n[0]))
        }
        return e
    }
    var o = {}
      , a = {
        app: 0
    }
      , r = [];
    function i(e) {
        return s.p + "main/js/" + ({}[e] || e) + "." + {
            "chunk-2d213c8b": "cab36996",
            "chunk-443d3bb9": "35c1880f"
        }[e] + ".js"
    }
    function s(t) {
        if (o[t])
            return o[t].exports;
        var n = o[t] = {
            i: t,
            l: !1,
            exports: {}
        };
        return e[t].call(n.exports, n, n.exports, s),
        n.l = !0,
        n.exports
    }
    s.e = function(e) {
        var t = []
          , n = a[e];
        if (0 !== n)
            if (n)
                t.push(n[2]);
            else {
                var o = new Promise(function(t, o) {
                    n = a[e] = [t, o]
                }
                );
                t.push(n[2] = o);
                var r, u = document.createElement("script");
                u.charset = "utf-8",
                u.timeout = 120,
                s.nc && u.setAttribute("nonce", s.nc),
                u.src = i(e),
                r = function(t) {
                    u.onerror = u.onload = null,
                    clearTimeout(c);
                    var n = a[e];
                    if (0 !== n) {
                        if (n) {
                            var o = t && ("load" === t.type ? "missing" : t.type)
                              , r = t && t.target && t.target.src
                              , i = new Error("Loading chunk " + e + " failed.\n(" + o + ": " + r + ")");
                            i.type = o,
                            i.request = r,
                            n[1](i)
                        }
                        a[e] = void 0
                    }
                }
                ;
                var c = setTimeout(function() {
                    r({
                        type: "timeout",
                        target: u
                    })
                }, 12e4);
                u.onerror = u.onload = r,
                document.head.appendChild(u)
            }
        return Promise.all(t)
    }
    ,
    s.m = e,
    s.c = o,
    s.d = function(e, t, n) {
        s.o(e, t) || Object.defineProperty(e, t, {
            enumerable: !0,
            get: n
        })
    }
    ,
    s.r = function(e) {
        "undefined" !== typeof Symbol && Symbol.toStringTag && Object.defineProperty(e, Symbol.toStringTag, {
            value: "Module"
        }),
        Object.defineProperty(e, "__esModule", {
            value: !0
        })
    }
    ,
    s.t = function(e, t) {
        if (1 & t && (e = s(e)),
        8 & t)
            return e;
        if (4 & t && "object" === typeof e && e && e.__esModule)
            return e;
        var n = Object.create(null);
        if (s.r(n),
        Object.defineProperty(n, "default", {
            enumerable: !0,
            value: e
        }),
        2 & t && "string" != typeof e)
            for (var o in e)
                s.d(n, o, function(t) {
                    return e[t]
                }
                .bind(null, o));
        return n
    }
    ,
    s.n = function(e) {
        var t = e && e.__esModule ? function() {
            return e["default"]
        }
        : function() {
            return e
        }
        ;
        return s.d(t, "a", t),
        t
    }
    ,
    s.o = function(e, t) {
        return Object.prototype.hasOwnProperty.call(e, t)
    }
    ,
    s.p = "/",
    s.oe = function(e) {
        throw console.error(e),
        e
    }
    ;
    var u = window["webpackJsonp"] = window["webpackJsonp"] || []
      , c = u.push.bind(u);
    u.push = t,
    u = u.slice();
    for (var l = 0; l < u.length; l++)
        t(u[l]);
    var f = c;
    r.push([0, "chunk-vendors"]),
    n()
}
)({
    0: function(e, t, n) {
        e.exports = n("56d7")
    },
    "21b9": function(e, t, n) {
        "use strict";
        n.r(t);
        var o = function() {
            var e = this
              , t = e.$createElement
              , n = e._self._c || t;
            return n("Layout", [n("h1", {
                class: e.$style.title
            }, [e._v("\n    The page timed out while loading. Are you sure you're still connected to\n    the Internet?\n  ")])])
        }
          , a = []
          , r = n("444f")
          , i = {
            page: {
                title: "Page timeout",
                meta: [{
                    name: "description",
                    content: "The page timed out while loading."
                }]
            },
            components: {
                Layout: r["a"]
            }
        }
          , s = i
          , u = n("56b4")
          , c = n("2877");
        function l(e) {
            this["$style"] = u["default"].locals || u["default"]
        }
        var f = Object(c["a"])(s, o, a, !1, l, null, null);
        f.options.__file = "_timeout.vue";
        t["default"] = f.exports
    },
    2883: function(e, t, n) {
        "use strict";
        n.r(t);
        var o = function() {
            var e = this
              , t = e.$createElement
              , n = e._self._c || t;
            return n("Layout", [n("Transition", {
                attrs: {
                    appear: ""
                }
            }, [n("BaseIcon", {
                class: e.$style.loadingIcon,
                attrs: {
                    name: "sync",
                    spin: ""
                }
            })], 1)], 1)
        }
          , a = []
          , r = n("444f")
          , i = {
            page: {
                title: "Loading page...",
                meta: [{
                    name: "description",
                    content: "Loading page..."
                }]
            },
            components: {
                Layout: r["a"]
            }
        }
          , s = i
          , u = n("2877")
          , c = Object(u["a"])(s, o, a, !1, null, null, null);
        c.options.__file = "_loading.vue";
        t["default"] = c.exports
    },
    4023: function(e, t) {
        e.exports = {
            title: "Dev-version.0.1",
            description: "Dev-version.0.1"
        }
    },
    "444f": function(e, t, n) {
        "use strict";
        var o = function() {
            var e = this
              , t = e.$createElement
              , n = e._self._c || t;
            return n("div", {
                staticClass: "main-content animated fadeIn faster"
            }, [n("Header"), e._t("default")], 2)
        }
          , a = []
          , r = function() {
            var e = this
              , t = e.$createElement
              , o = e._self._c || t;
            return o("div", [o("div", {
                staticClass: "header"
            }, [o("div", [e._v(" ")]), o("div", {
                staticClass: "brand"
            }, [o("RouterLink", {
                attrs: {
                    to: {
                        name: e.$route.name,
                        params: e.$route.params
                    }
                }
            }, [o("img", {
                attrs: {
                    src: n("e347"),
                    alt: "Работа кипит",
                    width: "140"
                }
            })])], 1), o("div", [e._v(" ")])])])
        }
          , i = []
          , s = n("2877")
          , u = {}
          , c = Object(s["a"])(u, r, i, !1, null, null, null);
        c.options.__file = "header.vue";
        var l = c.exports
          , f = {
            components: {
                Header: l
            }
        }
          , d = f
          , p = Object(s["a"])(d, o, a, !1, null, null, null);
        p.options.__file = "main.vue";
        t["a"] = p.exports
    },
    "56b4": function(e, t, n) {
        "use strict";
        var o = n("d646")
          , a = n.n(o);
        t["default"] = a.a
    },
    "56d7": function(e, t, n) {
        "use strict";
        n.r(t);
        var o = n("2b0e")
          , a = function() {
            var e = this
              , t = e.$createElement
              , n = e._self._c || t;
            return n("div", {
                attrs: {
                    id: "app"
                }
            }, [n("RouterView", {
                key: e.$route.fullPath
            })], 1)
        }
          , r = []
          , i = n("4023")
          , s = n.n(i)
          , u = {
            page: {
                titleTemplate(e) {
                    return e = "function" === typeof e ? e(this.$store) : e,
                    e ? `${e} | ${s.a.title}` : s.a.title
                }
            }
        }
          , c = u
          , l = (n("6294"),
        n("2877"))
          , f = Object(l["a"])(c, a, r, !1, null, null, null);
        f.options.__file = "app.vue";
        var d = f.exports
          , p = n("8c4f")
          , m = n("0a89")
          , h = n.n(m)
          , v = n("323e")
          , b = n.n(v)
          , _ = (n("ac6a"),
        n("2f62"))
          , y = n("be94")
          , g = (n("a481"),
        n("28a5"),
        n("bba4"))
          , w = n.n(g);
        const O = {}
          , $ = {
            modules: {}
        };
        function j(e, t) {
            if (1 === t.length)
                return e;
            const n = t.shift();
            return e.modules[n] = Object(y["a"])({
                modules: {},
                namespaced: !0
            }, e.modules[n]),
            j(e.modules[n], t)
        }
        (function() {
            const e = n("cfa9");
            e.keys().forEach(t=>{
                const n = e(t);
                if (O[t] === n)
                    return;
                O[t] = n;
                const o = t.replace(/^\.\//, "").replace(/\.\w+$/, "").split(/\//).map(w.a)
                  , a = j($, o)
                  , r = a.modules;
                r[o.pop()] = Object(y["a"])({
                    namespaced: !0
                }, n)
            }
            )
        }
        )();
        var x = $.modules;
        o["default"].use(_["a"]);
        const E = new _["a"].Store({
            modules: x,
            strict: !1
        });
        for (const D of Object.keys(x))
            x[D].actions && x[D].actions.init && E.dispatch(`${D}/init`);
        var k = E
          , I = [{
            path: "/",
            name: "home",
            component: ()=>P(n.e("chunk-443d3bb9").then(n.bind(null, "bcf2")))
        }, {
            path: "/:flowId/:specialist",
            name: "specialChat",
            component: ()=>P(n.e("chunk-443d3bb9").then(n.bind(null, "bcf2"))),
            meta: {
                beforeResolve(e, t, n) {
                    let o = !1;
                    "4" !== e.params.flowId && "5" !== e.params.flowId && (o = !0),
                    "psy" !== e.params.specialist && "taro" !== e.params.specialist && "astro" !== e.params.specialist && (o = !0),
                    o && n({
                        name: "404"
                    }),
                    n()
                }
            }
        }, {
            path: "/privacy",
            name: "privacy",
            component: ()=>P(n.e("chunk-2d213c8b").then(n.bind(null, "adc5")))
        }, {
            path: "/404",
            name: "404",
            component: n("5993").default,
            props: !0
        }, {
            path: "*",
            redirect: "404"
        }];
        function P(e) {
            const t = ()=>({
                component: e,
                loading: n("2883").default,
                delay: 400,
                error: n("21b9").default,
                timeout: 1e4
            });
            return Promise.resolve({
                functional: !0,
                render(e, n) {
                    let o = n.data
                      , a = n.children;
                    return e(t, o, a)
                }
            })
        }
        o["default"].use(p["a"]),
        o["default"].use(h.a, {
            keyName: "page"
        });
        const L = new p["a"]({
            routes: I,
            mode: "history",
            scrollBehavior(e, t, n) {
                return n || {
                    x: 0,
                    y: 0
                }
            }
        });
        L.beforeEach((e,t,n)=>{
            null !== t.name && b.a.start();
            const o = e.matched.some(e=>e.meta.authRequired);
            if (!o)
                return n();
            if (k.getters["auth/loggedIn"])
                return k.dispatch("auth/validate").then(e=>{
                    e ? n() : a()
                }
                );
            function a() {
                n({
                    name: "login",
                    query: {
                        redirectFrom: e.fullPath
                    }
                })
            }
            a()
        }
        ),
        L.beforeResolve(async(e,t,n)=>{
            try {
                for (const o of e.matched)
                    await new Promise((a,r)=>{o.meta&&o.meta.beforeResolve?o.meta.beforeResolve(e,t,function (){for (var e=arguments.length,o=new Array(e),i=0;i<e;i++)o[i]=arguments[i];o.length?(t.name===o[0].name&&b.a.done(),n(...o),r(new Error("Redirected"))):a()}):a()})
            } catch (o) {
                return
            }
            n()
        }
        ),
        L.afterEach((e,t)=>{
            b.a.done()
        }
        );
        var C = L
          , T = n("8a03")
          , N = n.n(T)
          , S = n("8103")
          , F = n.n(S)
          , R = n("7bb1");
        const A = n("b526");
        A.keys().forEach(e=>{
            const t = A(e)
              , n = F()(w()(e.replace(/^\.\/_/, "").replace(/\.\w+$/, "")));
            o["default"].component(n, t.default || t)
        }
        ),
        o["default"].use(N.a, {
            defaultIconPack: "fa",
            defaultDayNames: ["Вс", "Пн", "Вт", "Ср", "Чт", "Пт", "Сб"],
            defaultMonthNames: ["Январь", "Февраль", "Март", "Апрель", "Май", "Июнь", "Июль", "Август", "Сентябрь", "Октябрь", "Ноябрь", "Декабрь"],
            defaultFirstDayOfWeek: 1
        }),
        o["default"].use(R["a"], {
            events: ""
        }),
        window.config = {},
        window.config.be_uri = "https://api.egohelp.dev.spacey.su/",
        //window.config.be_uri = "https://apifeaio.egohelp.ru/",
        o["default"].config.productionTip = !0,
        window.Cypress && (o["default"].config.errorHandler = window.Cypress.cy.onUncaughtException);
        const M = new o["default"]({
            router: C,
            store: k,
            render: e=>e(d)
        }).$mount("#app");
        window.Cypress && (window.__app__ = M)
    },
    5993: function(e, t, n) {
        "use strict";
        n.r(t);
        var o = function() {
            var e = this
              , t = e.$createElement
              , n = e._self._c || t;
            return n("Layout", [n("h1", {
                class: e.$style.title
            }, [e._v("\n    404\n    "), e.resource ? [e._v("\n      " + e._s(e.resource) + "\n    ")] : e._e(), e._v("\n    Not Found\n  ")], 2)])
        }
          , a = []
          , r = n("444f")
          , i = {
            page: {
                title: "404",
                meta: [{
                    name: "description",
                    content: "404"
                }]
            },
            components: {
                Layout: r["a"]
            },
            props: {
                resource: {
                    type: String,
                    default: ""
                }
            }
        }
          , s = i
          , u = n("753c")
          , c = n("2877");
        function l(e) {
            this["$style"] = u["default"].locals || u["default"]
        }
        var f = Object(c["a"])(s, o, a, !1, l, null, null);
        f.options.__file = "_404.vue";
        t["default"] = f.exports
    },
    6294: function(e, t, n) {
        "use strict";
        var o = n("7fba")
          , a = n.n(o);
        a.a
    },
    "670f": function(e, t, n) {
        "use strict";
        n.r(t);
        var o = function() {
            var e = this
              , t = e.$createElement
              , n = e._self._c || t;
            return "font-awesome" === e.source ? n("FontAwesomeIcon", e._b({
                attrs: {
                    icon: e.name
                }
            }, "FontAwesomeIcon", e.$attrs, !1)) : "custom" === e.source ? n("span", e._b({
                class: e.customIconClass
            }, "span", e.$attrs, !1)) : e._e()
        }
          , a = []
          , r = n("ad3d")
          , i = n("ecee")
          , s = n("bba4")
          , u = n.n(s);
        i["c"].add(n("3818").definition, n("1adf").definition, n("7f18").definition, n("a2a7").definition, n("211a").definition, n("9ae8").definition, n("e20b").definition, n("9e52").definition, n("8668").definition, n("f01e").definition, n("552c").definition, n("50f1").definition, n("1129").definition, n("7ac7").definition, n("7491").definition, n("e3e1").definition, n("9ed8").definition, n("5eba").definition, n("8ed1").definition, n("16a6").definition, n("adbc").definition, n("441b").definition, n("eb89").definition, n("f8c9").definition, n("de5d").definition, n("b1ea").definition);
        var c = {
            components: {
                FontAwesomeIcon: r["a"]
            },
            inheritAttrs: !1,
            props: {
                source: {
                    type: String,
                    default: "font-awesome"
                },
                name: {
                    type: String,
                    required: !0
                }
            },
            computed: {
                customIconClass() {
                    return this.$style[u()("icon-custom-" + this.name)]
                }
            }
        }
          , l = c
          , f = n("2877")
          , d = Object(f["a"])(l, o, a, !1, null, null, null);
        d.options.__file = "_base-icon.vue";
        t["default"] = d.exports
    },
    "753c": function(e, t, n) {
        "use strict";
        var o = n("75da")
          , a = n.n(o);
        t["default"] = a.a
    },
    "75da": function(e, t, n) {
        e.exports = {
            title: "_404_title_3G4zv"
        }
    },
    "7fba": function(e, t, n) {},
    b526: function(e, t, n) {
        var o = {
            "./_base-icon.vue": "670f"
        };
        function a(e) {
            var t = r(e);
            return n(t)
        }
        function r(e) {
            var t = o[e];
            if (!(t + 1)) {
                var n = new Error("Cannot find module '" + e + "'");
                throw n.code = "MODULE_NOT_FOUND",
                n
            }
            return t
        }
        a.keys = function() {
            return Object.keys(o)
        }
        ,
        a.resolve = r,
        e.exports = a,
        a.id = "b526"
    },
    cfa9: function(e, t) {
        function n(e) {
            var t = new Error("Cannot find module '" + e + "'");
            throw t.code = "MODULE_NOT_FOUND",
            t
        }
        n.keys = function() {
            return []
        }
        ,
        n.resolve = n,
        e.exports = n,
        n.id = "cfa9"
    },
    d646: function(e, t, n) {
        e.exports = {
            title: "_timeout_title_3ZaLN"
        }
    },
    e347: function(e, t, n) {
        e.exports = n.p + "main/img/logo.0cc371bd.svg"
    }
});
//# sourceMappingURL=app.e5a44c73.js.map
