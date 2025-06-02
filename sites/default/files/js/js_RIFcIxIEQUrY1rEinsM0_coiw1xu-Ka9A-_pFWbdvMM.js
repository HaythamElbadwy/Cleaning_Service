/* @license GPL-2.0-or-later https://www.drupal.org/licensing/faq */
Drupal.debounce = function(func, wait, immediate) {
    let timeout;
    let result;
    return function(...args) {
        const context = this;
        const later = function() {
            timeout = null;
            if (!immediate) result = func.apply(context, args);
        };
        const callNow = immediate && !timeout;
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
        if (callNow) result = func.apply(context, args);
        return result;
    };
};;
! function(l, o, n) {
    "use strict";
    var r, e, u = Object.assign,
        t = Array.prototype,
        i = Object.prototype,
        c = i.toString,
        a = t.splice,
        f = t.some,
        s = "undefined" != typeof Symbol && Symbol,
        d = "touchevents",
        h = "jQuery" in l,
        p = "cash" in l,
        m = "add",
        v = "remove",
        y = "has",
        g = "get",
        b = "set",
        w = "width",
        E = "clientWidth",
        S = "scroll",
        x = "iterator",
        C = "Observer",
        N = "EventListener",
        O = "body",
        z = "html",
        T = /-([a-z])/g,
        P = /^--/,
        I = l.localStorage,
        M = {},
        A = Math.pow(2, 53) - 1,
        j = (L.prototype.init = function(n, t) {
            t = new L(n, t);
            return U(n) ? (n.idblazy || (n.idblazy = t), n.idblazy) : t
        }, L);

    function L(n, t) {
        if (this.name = "dblazy", n) {
            if (H(n)) return n;
            var e = n;
            if (nn(n)) {
                if (!(e = In(Hn(t, n), n)).length) return
            } else if (G(n)) return this.ready(n);
            !e.nodeType && e !== l || (e = [e]);
            for (var r = this.length = e.length, i = 0; i < r; i++) this[i] = e[i]
        }
    }

    function B(n) {
        var t = this,
            e = (t = H(t) ? t : r(t)).length;
        return G(n) && (e && 1 !== e ? t.each(n) : n(t[0], 0)), t
    }

    function R(n, t) {
        function e() {
            return setTimeout(n, t || 0, r)
        }
        return ln(function() {
            "loading" !== o.readyState ? e() : o.addEventListener("DOMContentLoaded", e)
        }), this
    }

    function k(n) {
        var t = "[object " + n + "]";
        return function(n) {
            return c.call(n) === t
        }
    }
    e = j.prototype, ((r = e.init).fn = r.prototype = e).length = 0, e.splice = a, s && (e[s[x]] = t[s[x]]);
    var D, W, q = (D = "length", function(n) {
            return X(n) ? void 0 : n[D]
        }),
        _ = (W = q, function(n) {
            n = W(n);
            return "number" == typeof n && 0 <= n && n <= A
        });

    function F(n) {
        return Z(n) ? Object.keys(n) : []
    }

    function H(n) {
        return n instanceof j
    }

    function Q(n) {
        return !nn(n) && (n && (Array.isArray(n) || _(n)))
    }

    function $(n) {
        return !0 === n || !1 === n || "[object Boolean]" === c.call(n)
    }

    function U(n) {
        return n && (n instanceof Element || n.querySelector)
    }

    function V(n) {
        return !isNaN(n) && parseInt(Number(n)) === n && !isNaN(parseInt(n, 10))
    }

    function J(n, t) {
        return V(n) || (n = parseInt(n)), n || t || 0
    }
    var G = k("Function");

    function K(n) {
        if (X(n) || tn(n) || !1 === n) return !0;
        var t = q(n);
        return "number" == typeof t && (Q(n) || nn(n)) ? 0 === t : 0 === q(F(n))
    }

    function X(n) {
        return null === n
    }

    function Y(n) {
        return !isNaN(parseFloat(n)) && isFinite(n)
    }

    function Z(n) {
        if (!n || "object" != typeof n) return !1;
        n = Object.getPrototypeOf(n);
        return X(n) || n === i
    }

    function nn(n) {
        return n && "string" == typeof n
    }

    function tn(n) {
        return void 0 === n
    }

    function en(n) {
        return !!n && n === n.window
    }

    function rn(n) {
        return -1 !== [9, 11].indexOf(!!n && n.nodeType)
    }

    function on(n) {
        return n && (n.querySelector || -1 !== [1, 9, 11].indexOf(!!n && n.nodeType))
    }

    function un(n) {
        return on(n) || en(n)
    }

    function cn(n) {
        return n && "getAttribute" in n
    }

    function an() {
        return "bigPipePlaceholderIds" in n
    }

    function fn() {
        return !an() || K(n.bigPipePlaceholderIds)
    }

    function ln(n, t) {
        fn() && setTimeout(n, t || 101)
    }

    function sn(n) {
        var t = {};
        return "matchMedia" in l && (t = l.matchMedia("(hover: none), (pointer: coarse)"), n && t.addEventListener("change", n)), "ontouchstart" in l || l.DocumentTouch && o instanceof l.DocumentTouch || t.matches || 0 < navigator.maxTouchPoints || 0 < navigator.msMaxTouchPoints
    }

    function dn(n, t) {
        var e = {};
        return n && n.length && Dn(n).forEach(function(n) {
            e[n.name] = n.value
        }, t || this), e
    }

    function hn(n, t, e) {
        if (G(n) || nn(n) || $(n) || Y(n)) return [];
        if (Q(n) && !tn(n.length)) {
            var r = n.length;
            if (!r || 1 === r && " " === n[0]) return []
        }
        if (Z(n) && K(n)) return [];
        var i;
        if ("[object Object]" === c.call(n)) {
            for (var o in n)
                if (pn(n, o) && "length" !== o && "name" !== o && !1 === t.call(e, n[o], o, n)) break
        } else n && (n instanceof HTMLCollection && (n = Dn(n)), n instanceof NamedNodeMap ? (i = dn(n, e), t.call(e, i, 0, n)) : (i = n.length) && 1 === i && !tn(n[0]) ? t.call(e, n[0], 0, n) : n.forEach(t, e));
        return n
    }

    function pn(n, t) {
        return i.hasOwnProperty.call(n, t)
    }

    function mn(n) {
        return nn(n) ? -1 !== (n = n.trim()).indexOf(",") ? n.split(",").map(function(n) {
            return n.trim()
        }) : /\s/.test(n) ? n.split(" ").map(function(n) {
            return n.trim()
        }) : [n] : Q(n) ? n : [n]
    }

    function vn(n, t, e, r) {
        return cn(n) ? n[t + "Attribute"](e, r) : ""
    }

    function yn(n, t, r, e) {
        var i = this,
            o = tn(r),
            u = !Z(t) && (o || $(e)),
            c = nn(e) ? e : "",
            a = Qn(n);
        if (tn(t) && U(a)) return dn(a.attributes);
        if (u && nn(t)) {
            t = t.trim(), o && (r = "");
            var f = r;
            return mn(t).every(function(n) {
                return !vn(a, y, n) || !(f = vn(a, g, n))
            }), f
        }
        return B.call(n, function(e) {
            if (!cn(e)) return u ? "" : i;
            Z(t) ? hn(t, function(n, t) {
                vn(e, b, c + t, n)
            }) : X(r) ? hn(mn(t), function(n) {
                n = c + n;
                vn(e, y, n) && vn(e, v, n)
            }) : "src" === t ? e.src = r : "href" === t ? e.href = r : vn(e, b, t, r)
        })
    }

    function gn(n, r, i) {
        return B.call(n, function(n, t) {
            var e;
            cn(n) && (e = n.classList, G(r) && (r = r(vn(n, g, "class"), t)), t = mn(r), e && (tn(i) ? t.map(function(n) {
                e.toggle(n)
            }) : e[i].apply(e, t)))
        })
    }

    function bn(n, t) {
        return gn(n, t, m)
    }

    function wn(n, t) {
        return gn(n, t, v)
    }

    function En(t, n) {
        var e = 0;
        return U(t) && U(n) ? t !== n && t.contains(n) : Q(t) ? -1 !== t.indexOf(n) : (nn(t) && nn(n) && (t = t.toLowerCase(), hn(mn(n = n.toLowerCase()), function(n) {
            -1 !== t.indexOf(n) && e++
        })), 0 < e)
    }

    function Sn(n) {
        return n.replace(/[.*+\-?^${}()|[\]\\]/g, "\\$&")
    }

    function xn(t, n) {
        var e = 0;
        return nn(t) && hn(mn(n), function(n) {
            t.startsWith(n) && e++
        }), 0 < e
    }

    function Cn(n) {
        return n.replace(/\s+/g, " ").trim()
    }

    function Nn(n, t) {
        return U(n) && nn(t) ? n.closest(t) : null
    }

    function On(n, t) {
        if (U(n)) {
            if (nn(t)) return t = Pn(t), !!n.matches && n.matches(t);
            if (U(t)) return n === t
        }
        return n === t
    }

    function zn(t, n) {
        return !(!t || !t.nodeName) && f.call(mn(n), function(n) {
            return t.nodeName.toLowerCase() === n.toLowerCase()
        })
    }

    function Tn(n, t, e) {
        e = tn(e) && nn(t);
        return nn(n = n || o) && (n = Qn(n, !0)), on(n) ? (n = Hn(n, t = Pn(t)), e ? n.querySelector(t) : Wn(t, n)) : e ? null : []
    }

    function Pn(n) {
        var t = n;
        return nn(n) && xn(n, ">") && (t = ":scope " + n), t
    }

    function In(n, t) {
        return Tn(n, t, 1)
    }

    function Mn(n) {
        return U(n) && n.currentStyle || !tn(o.documentMode)
    }

    function An() {
        return l.devicePixelRatio || 1
    }

    function jn() {
        return l.innerWidth || o.documentElement[E] || l.screen[w]
    }

    function Ln() {
        return {
            width: jn(),
            height: l.innerHeight || o.documentElement.clientHeight
        }
    }

    function Bn(n, t, e, r, i, o) {
        return Fn(n, t, e, r, i, o, m)
    }

    function Rn(n, t, e, r, i, o) {
        return Fn(n, t, e, r, i, o, v)
    }

    function kn(n) {
        return n.decoded || n.complete
    }

    function Dn(n) {
        return t.slice.call(n)
    }

    function Wn(n, t) {
        t = t || o;
        var e = mn(n);
        return nn(n) && (e = t.querySelectorAll(n)), Dn(e)
    }

    function qn(n, t) {
        return (t || xn(n, ["blazy.", "bio."]) ? n : n.split(".")[0]).trim()
    }
    var _n = {
        _opts: function(n) {
            var t = !1,
                e = n || !1;
            return Z(n) && (t = (e = u({
                capture: !1,
                passive: !0
            }, n)).once || !1), {
                one: t,
                options: e
            }
        },
        add: function(t, n, e, r, i) {
            var o = this._opts(r),
                r = o.options,
                u = qn(n, i),
                i = e;
            o.one && Mn() && (i = function n() {
                t[v + N](u, n), e.apply(this, arguments)
            }), G(i) && (o = {
                name: n,
                callback: i,
                type: u
            }, M[n] = i, M[u] = o, t[m + N](u, i, r))
        },
        remove: function(n, t, e, r, i) {
            r = this._opts(r).options, i = qn(t, i), e = M[t] || e;
            G(e) && (n[v + N](i, e, r), delete M[t], delete M[i])
        }
    };

    function Fn(n, e, t, r, i, o, u) {
        var c, a = r,
            f = Mn();
        nn(n) && G(e) ? (i = t, r = e, e = n, n = [l]) : nn(t) ? (c = En(e, ["touchstart", S, "wheel"]), tn(i) && (i = !f && {
            capture: !c,
            passive: c
        }), r = function(n) {
            ! function(n, t, e) {
                var r = n.target;
                if (On(r, e)) t.call(r, n);
                else
                    for (; r && r !== this;) {
                        if (On(r, e)) {
                            t.call(r, n);
                            break
                        }
                        r = r.parentElement || r.parentNode
                    }
            }(n, a, t)
        }) : G(t) && (o = i, i = a, r = t);
        return B.call(n, function(t) {
            un(t) && hn(mn(e), function(n) {
                _n[u](t, n, r, i, o)
            })
        })
    }

    function Hn(n, t) {
        return n = Qn(n = n || o, !0) || o, t && (On(n, t) || On(t, O) || On(t, z)) && (n = o), on(n) && n.children && n.children.length || rn(n) ? n : o
    }

    function Qn(n, t) {
        if (nn(n)) return n === O ? o.body : n === z ? o : o.querySelector(n);
        if (t && On(n, z)) return o;
        var e = h && n instanceof l.jQuery,
            t = p && n instanceof l.cash;
        return n && (H(n) || e || t) ? n[0] : n
    }

    function $n(n) {
        return P.test(n)
    }

    function Un(n) {
        return U(n) ? n.getBoundingClientRect() : {}
    }

    function Vn(n, t, e) {
        if (U(n)) {
            var r = n[e];
            if (tn(t)) return r;
            for (; r;) {
                if (On(r, t) || zn(r, t)) return r;
                r = r[e]
            }
        }
        return null
    }

    function Jn(n, t) {
        return Vn(n, t, "parentElement")
    }

    function Gn(n, t, e) {
        return Vn(n, t, e + "ElementSibling")
    }

    function Kn(n, t) {
        return Gn(n, t, "previous")
    }
    r.isTag = k, r.isArr = Q, r.isBool = $, r.isDoc = rn, r.isElm = U, r.isFun = G, r.isEmpty = K, r.isInt = V, r.isNull = X, r.isNum = Y, r.isObj = Z, r.isStr = nn, r.isUnd = tn, r.isEvt = un, r.isQsa = on, r.isIo = "Intersection" + C in l, r.isMo = "Mutation" + C in l, r.isRo = "Resize" + C in l, r.isNativeLazy = "loading" in HTMLImageElement.prototype, r.isAmd = "function" == typeof define && define.amd, r.isWin = en, r.isBigPipe = an, r.wwoBigPipeDone = fn, r.wwoBigPipe = ln, r.isTouch = sn, r.touchOrNot = function n() {
        var t = o.documentElement,
            e = sn(n);
        wn(t, [d, "no-" + d]), bn(t, e ? d : "no-" + d)
    }, r._er = -1, r._ok = 1, r.chain = function(n, t) {
        return B.call(n, t)
    }, r.each = hn, r.extend = u, e.extend = function(n, t) {
        return (t = t || !1) ? u(n, e) : u(e, n)
    }, r.hasProp = pn, r.parse = function(n) {
        try {
            return 0 === n.length || "1" === n ? {} : JSON.parse(n)
        } catch (n) {
            return {}
        }
    }, r.toArray = mn, r.toInt = J, r.attr = yn.bind(r), r.hasAttr = function(t, n) {
        var e = 0;
        return cn(t) && nn(n) && hn(mn(n), function(n) {
            vn(t, y, n) && e++
        }), 0 < e
    }, r.nodeMapAttr = dn, r.removeAttr = function(n, t, e) {
        return yn(n, t, null, e || "")
    }.bind(r), r.hasClass = function(n, t) {
        var e, r = 0;
        return cn(n) && nn(t) && (e = yn(n, "class"), hn(mn(t), function(t) {
            hn(mn(e), function(n) {
                n && n === t && r++
            })
        })), 0 < r
    }, r.toggleClass = gn, r.addClass = bn, r.removeClass = wn, r.contains = En, r.escape = Sn, r.startsWith = xn, r.trimSpaces = Cn, r.closest = Nn, r.is = On, r.equal = zn, r.find = Tn, r.findAll = In, r.remove = function(n) {
        var t;
        !U(n) || (t = Jn(n)) && t.removeChild(n)
    }, r.ie = Mn, r.pixelRatio = An, r.windowWidth = jn, r.windowSize = Ln, r.activeWidth = function(t, n) {
        var e = n.up || !1,
            r = F(t),
            i = r[0],
            o = r[r.length - 1],
            u = n.ww || jn(),
            n = u * An(),
            c = e ? u : n;
        return tn(r = r.filter(function(n) {
            return e ? J(n, 0) <= c : J(n, 0) >= c
        }).map(function(n) {
            return t[n]
        })[e ? "pop" : "shift"]()) ? t[o <= c ? o : i] : r
    }, r.on = Bn, r.off = Rn, r.one = function(n, t, e, r) {
        return Bn(n, t, e, {
            once: !0
        }, r)
    }, r.trigger = function(n, t, i, o) {
        return nn(n) && (i = t, t = n, n = [l]), B.call(n, function(r) {
            un(r) && hn(mn(t), function(n) {
                var t = tn(i) ? new Event(n) : (e = {
                    bubbles: !0,
                    cancelable: !0,
                    detail: Z(i) ? i : {}
                }, Z(o) && (e = u(e, o)), new CustomEvent(n, e));
                r.dispatchEvent(t);
                var e = qn(n);
                M[e] && M[e].type === n && Q(i) && M[e].callback.apply(null, [t].concat(i))
            })
        })
    }, r.getScript = function(n, e, t) {
        var r = o.createElement("script"),
            i = o.getElementsByTagName("script")[0];
        r.async = 1, r.id = t, r.onload = r.onreadystatechange = function(n, t) {
            !t && r.readyState && !/loaded|complete/.test(r.readyState) || (r.onload = r.onreadystatechange = null, r = null, !t && e && l.setTimeout(e, 0))
        }, r.src = n, i.parentNode.insertBefore(r, i)
    }, r.isDecoded = kn, r.ready = R.bind(r), r.decode = function(e) {
        return kn(e) ? Promise.resolve(e) : "decode" in e ? (e.decoding = "async", e.decode()) : new Promise(function(n, t) {
            e.onload = function() {
                n(e)
            }, e.onerror = t()
        })
    }, r.throttle = function(t, e, r) {
        e = e || 50;
        var i = 0;
        return function() {
            var n = +new Date;
            n - i < e || (i = n, t.apply(r, arguments))
        }
    }, r.resize = function(a, n, t) {
        if (!this.isRo || tn(n)) return l.onresize = function() {
            clearTimeout(n), n = setTimeout(a, 200)
        }, a;
        var e = new ResizeObserver(function(n) {
                var o = this,
                    u = Ln(),
                    c = sn(t || a);
                hn(n, function(n) {
                    var t, e, r, i = ((t = n).contentBoxSize && (r = t.contentBoxSize[0]) && (e = r.inlineSize, i = r.blockSize), i || (e = (r = t.contentRect || Un(t.target)).width, i = r.height), {
                            width: Math.floor(e),
                            height: Math.floor(i)
                        }),
                        i = {
                            width: i.width,
                            height: i.height,
                            window: u,
                            touch: c
                        };
                    a.apply(null, [o, i, n])
                })
            }),
            r = Wn(n);
        return r.length && hn(r, function(n) {
            U(n) && e.observe(n)
        }), a
    }, r.template = function(n, t) {
        for (var e in t) pn(t, e) && (n = n.replace(new RegExp(Sn("$" + e), "g"), t[e]));
        return Cn(n)
    }, r.context = Hn, r.slice = Dn, r.toElm = Qn, r.toElms = Wn, r.camelCase = function(n) {
        return n.replace(T, function(n, t) {
            return t.toUpperCase()
        })
    }, r.isVar = $n, r.computeStyle = function(n, t, e) {
        if (!U(n)) return null;
        var r = getComputedStyle(n, null);
        return tn(t) ? r : e || $n(t) ? r.getPropertyValue(t) || null : r[t] || n.style[t]
    }, r.rect = Un, r.empty = function(n) {
        return B.call(n, function(n) {
            if (U(n))
                for (; n.firstChild;) n.removeChild(n.firstChild)
        })
    }, r.parent = Jn, r.next = function(n, t) {
        return Gn(n, t, "next")
    }, r.prev = Kn, r.index = function(e, n) {
        var r = 0,
            i = !0;
        if (U(e) && (tn(n) || hn(mn(n), function(n, t) {
                if (U(n)) {
                    if (i = !1, On(e, n)) return r = t, !1
                } else if (nn(n)) {
                    n = Nn(e, n);
                    if (U(n)) return e = n, !1
                }
            }), i))
            for (; !X(e = Kn(e));) r++;
        return r
    }, r.keys = F, r._op = vn, r.storage = function(t, e, n, r) {
        if (I) {
            if (tn(e)) return I.getItem(t);
            if (X(e)) I.removeItem(t);
            else try {
                I.setItem(t, e)
            } catch (n) {
                I.removeItem(t), r && I.setItem(t, e)
            }
        }
        return n || !1
    }, C = {
        chain: function(n) {
            return B.call(this, n)
        },
        each: function(n) {
            return hn(this, n)
        },
        ready: function(n) {
            return R.call(this, n)
        }
    }, e.extend(C), r.matches = On, r.forEach = hn, r.bindEvent = Bn.bind(r), r.unbindEvent = Rn.bind(r), "undefined" != typeof exports ? module.exports = r : l.dBlazy = r
}(this, this.document, drupalSettings);;
! function(r, n, e) {
    "use strict";
    var o = n.once || e.once;

    function u(n, e, t) {
        t = r.context(t, e);
        return o(n, e, t)
    }
    r.once = r.extend(function(n, e, t, o, c) {
        var i = [];
        return r.wwoBigPipeDone() ? r.isStr(n) && r.isUnd(o) ? u(n, e, t) : (r.isUnd(t) ? 0 : (i = u(e, t, o)).length && r.each(i, n, c), i) : i
    }, o), r.once.counter = 0, r.filter = function(t, n, o) {
        return n.filter(function(n) {
            var e = r.is(n, t);
            return e && o && o(n), e
        })
    }, r.once.unload = r.once.counter >= (r.isBigPipe() ? 1 : 0), r.once.removeSafely = function(n, e, t) {
        var o, c, i = [];
        return r.wwoBigPipeDone() && (o = r.once.unload, t = r.context(t, e), o && this.find(n, t).length && (i = this.remove(n, e, t), e = e, c = [], r.contains(e, ":not") && (e = e.split(":not"), r.each(e, function(n) {
            var e;
            r.contains(n, "(") && (e = n.split("(").pop().split(")")[0], r.contains(e, ",") ? (n = e.split(","), r.each(n, function(n) {
                n = n.replace(".", ""), c.push(n)
            })) : e && (e = e.replace(".", ""), c.push(e)))
        })), i.length && c.length && r.removeClass(i, c))), i
    }, n.behaviors.blazyOnce = {
        attach: function(n) {
            r.wwoBigPipe(function() {
                1 < r.once.counter && r.once.counter--
            })
        },
        detach: function(n, e, t) {
            "unload" === t && r.wwoBigPipe(function() {
                r.once.counter++
            })
        }
    }
}(dBlazy, Drupal, this);;
! function(i, s) {
    "use strict";

    function a(t, e, n) {
        return t ? ("undefined" != typeof DOMPurify ? (r = DOMPurify.sanitize(t, e), r = i.isObj(e) && e.RETURN_DOM ? (n = !0, r) : c(r)) : function r(t) {
            t = t.children;
            i.each(t, function(t) {
                var n, e;
                n = t, e = i.nodeMapAttr(n.attributes), i.each(e, function(t, e) {
                    return !!o(e, t) && void n.removeAttribute(e)
                }), r(t)
            })
        }(r = c(t)), n ? r.childNodes : r.innerHTML) : "";
        var r
    }

    function o(t, e) {
        t = t.toLowerCase(), e = e.replace(/\s+/g, "").toLowerCase();
        return !(!["src", "href", "xlink:href"].includes(t) || !e.includes("script:") && !e.includes("data:text/html")) || t.startsWith("on")
    }

    function c(t) {
        return (new DOMParser).parseFromString(t, "text/html").body || s.createElement("body")
    }
    i.create = function(t, e, n) {
        var r = s.createElement(t);
        return (i.isStr(e) || i.isObj(e)) && (i.isStr(e) ? r.className = e : i.attr(r, e)), n && (n = n.trim(), r.innerHTML = a(n), "template" === t && (r = r.content.firstChild || r)), r
    }, i.sanitizer = {
        isDangerous: o,
        sanitize: a,
        toNode: c
    }, i.sanitize = a
}(dBlazy, this.document);;
! function(c, n) {
    "use strict";
    var t = Array.prototype.some,
        u = "remove",
        h = "width",
        l = "height",
        e = "after",
        r = "before",
        i = "begin",
        o = "Top",
        s = "Left",
        f = "Height",
        a = "scroll";

    function d(t, n, r) {
        var i = this,
            e = c.isUnd(r),
            u = c.isObj(n),
            o = !u && e;
        if (o && c.isStr(n)) {
            var s = c.toElm(t),
                f = [h, l, "top", "right", "bottom", "left"],
                e = c.computeStyle(s, n),
                s = c.toInt(e, 0);
            return -1 === f.indexOf(n) ? e : s
        }
        return c.chain(t, function(e) {
            if (!c.isElm(e)) return o ? "" : i;

            function t(t, n) {
                c.isFun(t) && (t = t()), (c.contains(n, "-") || c.isVar(n)) && (n = c.camelCase(n)), e.style[n] = c.isStr(t) ? t : t + "px"
            }
            u ? c.each(n, t) : c.isNull(r) ? c.each(c.toArray(n), function(t) {
                e.style.removeProperty(t)
            }) : c.isStr(n) && t(r, n)
        })
    }

    function m(t) {
        t = c.rect(t);
        return {
            top: (t.top || 0) + n.body[a + o],
            left: (t.left || 0) + n.body[a + s]
        }
    }

    function p(t, n) {
        return d(t, h, n)
    }

    function g(t, n) {
        return d(t, l, n)
    }

    function v(t, n, e) {
        var r, i = 0;
        return c.isElm(t) && (i = t["offset" + e], n && (r = c.computeStyle(t), t = function(t) {
            return c.toInt(r["margin" + t], 0)
        }, i += e === f ? t(o) + t("Bottom") : t(s) + t("Right"))), i
    }

    function y(t, n) {
        return v(t, n, "Width")
    }

    function A(t, n) {
        return v(t, n, f)
    }

    function C(t, n, e) {
        c.isElm(t) && t["insertAdjacent" + (c.isElm(n) ? "Element" : "HTML")](e, n)
    }

    function E(t, n) {
        C(t, n, e + "end")
    }

    function b(t, n) {
        C(t, n, r + i)
    }

    function x(t, n) {
        c.isElm(t) && (c.isElm(n) ? t.appendChild(n) : C(t, n, r + "end"))
    }

    function S(t, n) {
        C(t, n, e + i)
    }

    function H(t, n) {
        c.isUnd(n) && (n = !0);
        return c.chain(t, function(t) {
            return c.isElm(t) && t.cloneNode(n)
        })
    }
    var w = {
        css: function(t, n) {
            return d(this, t, n)
        },
        hasAttr: function(n) {
            return t.call(this, function(t) {
                return c.hasAttr(t, n)
            })
        },
        attr: function(t, n, e) {
            return c.isNull(n) ? this.removeAttr(t, e) : c.attr(this, t, n, e)
        },
        removeAttr: function(t, n) {
            return c.removeAttr(this, t, n)
        },
        hasClass: function(n) {
            return t.call(this, function(t) {
                return c.hasClass(t, n)
            })
        },
        toggleClass: function(t, n) {
            return c.toggleClass(this, t, n)
        },
        addClass: function(t) {
            return this.toggleClass(t, "add")
        },
        removeClass: function(t) {
            return arguments.length ? this.toggleClass(t, u) : this.attr("class", "")
        },
        empty: function() {
            return c.empty(this)
        },
        first: function(t) {
            return c.isUnd(t) ? this[0] : t
        },
        after: function(t) {
            return E(this[0], t)
        },
        before: function(t) {
            return b(this[0], t)
        },
        append: function(t) {
            return x(this[0], t)
        },
        prepend: function(t) {
            return S(this[0], t)
        },
        remove: function() {
            this.each(c.remove)
        },
        closest: function(t) {
            return c.closest(this[0], t)
        },
        equal: function(t) {
            return c.equal(this[0], t)
        },
        find: function(t, n) {
            return c.find(this[0], t, n)
        },
        findAll: function(t) {
            return c.findAll(this[0], t)
        },
        clone: function(t) {
            return H(this, t)
        },
        computeStyle: function(t) {
            return c.computeStyle(this[0], t)
        },
        offset: function() {
            return m(this[0])
        },
        parent: function(t) {
            return c.parent(this[0], t)
        },
        prev: function(t) {
            return c.prev(this[0], t)
        },
        next: function(t) {
            return c.next(this[0], t)
        },
        index: function(t) {
            return c.index(this[0], t)
        },
        width: function(t) {
            return p(this[0], t)
        },
        height: function(t) {
            return g(this[0], t)
        },
        outerWidth: function(t) {
            return y(this[0], t)
        },
        outerHeight: function(t) {
            return A(this[0], t)
        },
        on: function(t, n, e, r, i) {
            return c.on(this, t, n, e, r, i, "add")
        },
        off: function(t, n, e, r, i) {
            return c.off(this, t, n, e, r, i, u)
        },
        one: function(t, n, e) {
            return c.one(this, t, n, e)
        },
        trigger: function(t, n, e) {
            return c.trigger(this, t, n, e)
        }
    };
    c.fn.extend(w), c.css = d, c.offset = m, c.clone = H, c.after = E, c.before = b, c.append = x, c.prepend = S, c.width = p, c.height = g, c.outerWidth = y, c.outerHeight = A
}(dBlazy, this.document);;
! function(e, r, i) {
    "use strict";

    function u(t) {
        return t.target || t
    }

    function a(t, n) {
        return e.hasClass(u(t), n)
    }
    e.debounce = function(t, n, i, e) {
        return i ? r.debounce(function() {
            t.call(i, n)
        }, e || 201, !0) : r.debounce.call(this, t)
    }, e.matchMedia = function(t, n) {
        return !!i.matchMedia && (e.isUnd(n) && (n = "max"), i.matchMedia("(" + n + "-device-width: " + t + ")").matches)
    }, e.isBg = function(t, n) {
        return a(t, n && n.bgClass || "b-bg")
    }, e.isBlur = function(t) {
        return a(t, "b-blur")
    }, e.isGrid = function(t) {
        return e.isElm(e.closest(u(t), ".grid"))
    }, e.isHtml = function(t) {
        return a(t, "b-html")
    }, e.image = {
        alt: function(t, n) {
            var i = e.find(t, "img:not(.b-blur)"),
                i = e.attr(i, "alt");
            return n = n || "Video preview", i || (t = e.find(t, ".media"), i = e.attr(t, "title")), i ? r.checkPlain(i) : r.t(n)
        },
        ratio: function(t) {
            var n = e.toInt(t.width, 640);
            return (e.toInt(t.height, 360) / n * 100).toFixed(2)
        },
        scale: function(t, n, i, e) {
            e = Math.min(i / t, e / n);
            return {
                width: t * e,
                height: n * e,
                ratio: e
            }
        },
        dimension: function(t, n) {
            return {
                width: t,
                height: n
            }
        },
        hack: function(t, n) {
            return {
                paddingBottom: t,
                height: n
            }
        }
    }
}(dBlazy, Drupal, this);;
! function(i) {
    "use strict";

    function o(t, n, a) {
        return i.chain(t, function(e) {
            i.isElm(e) && i.each(i.toArray(n), function(t) {
                var n, r = "data-" + t;
                i.hasAttr(e, r) && (n = i.attr(e, r), i.attr(e, t, n), a && i.removeAttr(e, r))
            })
        })
    }

    function e(t, a, u, c) {
        i.isUnd(c) && (c = !0);
        return i.chain(t, function(t) {
            var n, r, e;
            i.isElm(t) && (n = t.parentNode, r = i.equal(n, "picture"), e = null, c ? e = r ? n : t : r && (e = n), i.isElm(e) && (e = e.getElementsByTagName("source"), a = a || (r ? "srcset" : "src"), e.length && o(e, a, u)))
        })
    }
    i.mapAttr = o, i.fn.mapAttr = function(t, n) {
        return o(this, t, n)
    }, i.mapSource = e, i.fn.mapSource = function(t, n, r) {
        return e(this, t, n, r)
    }
}(dBlazy);;
! function(r, o, s) {
    "use strict";

    function e(t) {
        return t ? t.target || t : null
    }

    function u(t) {
        t = t || 0;
        var i = r.windowSize();
        return {
            top: 0 - t,
            left: 0 - t,
            bottom: i.height + t,
            right: i.width + t,
            width: i.width,
            height: i.height
        }
    }

    function f(t) {
        t = e(t);
        return t && r.isNull(t.offsetParent)
    }
    r.viewport = {
        vp: {
            top: 0,
            right: 0,
            bottom: 0,
            left: 0
        },
        ww: 0,
        opts: {},
        init: function(t) {
            var i = this;
            return i.opts = t || {}, i.vp = u(i.opts.offset), i.vp
        },
        isResized: function(t, i) {
            return i && "contentRect" in i && (!!i.contentRect || !!t.resizeTrigger) || !1
        },
        isHidden: f,
        isVisible: function(t, i) {
            if (!t) return !1;
            var n = e(t);
            return r.isIo && "isIntersecting" in t ? t.isIntersecting || 0 < t.intersectionRatio : (n = n, i = i, n = r.isElm(n) ? r.rect(n) : n, i = i || u(), n.right >= i.left && n.bottom >= i.top && n.left <= i.right && n.top <= i.bottom)
        },
        onresizing: function(t, i) {
            var n = t.elms,
                e = t.options || {};
            r.isFun(e.resizing) && e.resizing(t, n, i)
        },
        update: function(t) {
            t = t || i.opts;
            var i = this,
                n = t.offset || 0,
                e = s.documentElement;
            return i.vp.bottom = (o.innerHeight || e.clientHeight) + n, i.vp.right = (o.innerWidth || e.clientWidth) + n, i.windowData(t)
        },
        visibleParent: function(t) {
            for (var t = e(t), i = r.parent(t), n = i; i;) {
                if (r.isElm(i) && !f(i)) {
                    n = i;
                    break
                }
                i = i.parentElement || i.parentNode
            }
            return n
        },
        windowData: function(t, i) {
            t = t || n.opts;
            var n = this,
                e = t.offset || 0,
                r = t.mobileFirst || !1;
            return i && n.init(t), n.ww = n.vp.right - e, {
                vp: n.vp,
                ww: n.ww,
                up: r
            }
        }
    }
}(dBlazy, this, this.document);;
! function(l, s) {
    "use strict";
    var u = "data-",
        e = "srcset",
        d = u + "src",
        f = [e, "src"],
        b = 0;

    function r(s, e, r) {
        var t = l.closest(s, r.parent) || s,
            a = e === l._ok || !0 === e,
            o = r.successClass,
            i = r.errorClass,
            c = "is-" + o,
            n = "is-" + i;
        return l.addClass(s, a ? o : i), l.addClass(t, a ? c : n), a ? (i = s, c = e, n = t, a = r, (l.isFun(a.success) || l.isObj(a.success)) && a.success(i, c, n, a), 0 < b && b--, l.hasAttr(s, d) && l.removeAttr(s, f, u)) : (s = s, e = e, t = t, r = r, (l.isFun(r.error) || l.isObj(r.error)) && r.error(s, e, t, r), b = ++b), b
    }
    l._defaults = {
        error: !1,
        offset: 100,
        root: s,
        success: !1,
        selector: ".b-lazy",
        separator: "|",
        container: !1,
        containerClass: !1,
        errorClass: "b-error",
        loadInvisible: !1,
        successClass: "b-loaded",
        visibleClass: !1,
        validateDelay: 25,
        saveViewportOffsetDelay: 50,
        srcset: "data-srcset",
        src: d,
        bgClass: "b-bg",
        isMedia: !1,
        parent: ".media",
        disconnect: !1,
        intersecting: !1,
        observing: !1,
        resizing: !1,
        mobileFirst: !1,
        rootMargin: "0px",
        threshold: [0]
    }, l.isCompleted = function(s) {
        if (l.isElm(s)) {
            if (l.equal(s, "img")) return l.isDecoded(s);
            if (l.equal(s, "iframe")) return "complete" === (s.contentDocument || s.contentWindow.document).readyState
        }
        return !1
    }, l.selector = function(s, e) {
        var r = s.selector;
        return e && l.isBool(e) && (e = ":not(." + s.successClass + ")"), r + (e = e || "")
    }, l.status = r
}(dBlazy, this.document);;
! function(f, u) {
    "use strict";
    var i = f.viewport;
    f.observer = {
        elms: [],
        scope: {},
        withIo: !1,
        init: function(n, t, e, r) {
            var i, o = this,
                s = n.options || {},
                a = n._queue || [],
                u = "windowData" in n ? n.windowData() : {},
                l = f.viewport;
            n._raf || (n._raf = []);
            var c = {
                rootMargin: s.rootMargin || "0px",
                threshold: s.threshold || 0
            };

            function v(e) {
                var r;
                return a.length || (r = requestAnimationFrame(h), n._raf.push(r)), a.push(e), !1
            }

            function h() {
                var e, r, i;
                e = a, r = t, i = n, f.each(e, r.bind(i)), e.length = 0
            }
            o.elms = e = f.toArray(n.elms || e), o.scope = n, o.withIo = n.withIo || r, r && (n.ioObserver = f.isIo ? new IntersectionObserver(v, c) : t.call(n, e));
            return n.roObserver = function() {
                return i = this, u = f.isUnd(u.ww) ? l.windowData(s, !0) : n.windowData(), f.isRo ? new ResizeObserver(v) : t.call(n, e)
            }(), n.resizeTrigger = i, u
        },
        visibleParent: function(e) {
            var r = i;
            return r && r.isHidden(e) ? r.visibleParent(e) : null
        },
        hiddenChild: function(e, r) {
            var i = this.scope.ioObserver;
            if (i && !f.is(e, r)) {
                r = f.find(e, r);
                if (f.isElm(r)) return i.unobserve(e), r
            }
            return null
        },
        observe: function() {
            function e(i) {
                i && t && t.length && f.each(t, function(e) {
                    var r;
                    i !== s || (r = n.visibleParent(e)) && i.observe(r), i.observe(e)
                })
            }
            var n = this,
                r = n.scope,
                t = n.elms,
                i = n.withIo,
                o = r.options || {},
                s = r.ioObserver,
                a = r.roObserver;
            return f.isIo && (s || a) ? (i && e(s), e(a)) : "Blazy" in u && (r.bLazy = new Blazy(o)), r
        },
        unload: function(e) {
            e = (e = e || this.scope)._raf || [];
            e.length && f.each(e, function(e) {
                cancelAnimationFrame(e)
            })
        }
    }
}(dBlazy, this);;
! function(i, e) {
    "use strict";
    var s = "Bio",
        t = i.dBlazy;
    t.isAmd ? define([s, t, i], e) : "object" == typeof exports ? module.exports = e(s, t, i) : i[s] = e(s, t, i)
}(this || module || {}, function(s, h, f) {
    "use strict";
    h.isAmd && (f = window);
    var t, o, n = f.document,
        r = n,
        v = "bio",
        p = {},
        a = 0,
        e = 0,
        l = 0,
        d = "b-bg",
        b = "is-b-visible",
        u = v + ".intersecting " + v + ":intersecting",
        g = ".media",
        y = "addClass",
        m = "removeClass",
        c = !1,
        z = 25,
        C = 0,
        w = h.observer,
        L = h.viewport;

    function i(i) {
        var e = h.extend({}, o, this);
        return e.name = s, e.options = t = h.extend({}, h._defaults, i || {}), d = t.bgClass || d, z = t.validateDelay || z, g = t.parent || g, r = t.root || r, setTimeout(function() {
            e.reinit()
        }), e
    }

    function x(i, e) {
        var s = this,
            t = s.options,
            o = t.selector,
            n = s.count,
            r = s.ioObserver,
            d = t.visibleClass || e || !1;
        a === n - 1 && (h.trigger(f, v + ":done", {
            options: t
        }), d || s.destroyQuietly()), r && ((o = w.hiddenChild(i, o)) && (i = o), s.isLoaded(i) && !e && (t.isMedia && !d && r.unobserve(i), a++)), i.bhit && !e || (s.lazyLoad(i, p), h.isFun(t.intersecting) && t.intersecting(i, t), h.trigger(i, u, {
            options: t
        }), l++, i.bhit = !0)
    }

    function A(i) {
        var n = this,
            r = n.options,
            d = L.vp || {},
            a = L.ww || 0,
            e = i[0],
            l = h.isBlur(e),
            e = L.isResized(n, e),
            u = r.visibleClass,
            c = h.isBool(u) && u;
        if (e) p = L.update(r), L.onresizing(n, p), 0 < C && (e = {
            winData: p,
            entries: n.elms,
            currentWidth: a,
            oldWidth: C,
            enlarged: C < a
        }, C !== a ? h.trigger(f, v + ":resizing", e) : h.trigger(f, v + ":resized", e), n.resizeTick++);
        else if (n.destroyed && !u) return;
        h.each(i, function(i) {
            var e = i.target || i,
                s = L.isResized(n, i),
                t = L.isVisible(i, d),
                o = h.closest(e, g) || e;
            l = l && !h.hasClass(o, "is-b-animated"), t ? (n.isLoaded(e) || h[y](o, b), x.call(n, e), n.isLoaded(e) && ((l || c) && h[y](o, b), c || setTimeout(function() {
                h[m](o, b)
            }, 601))) : h[m](o, b), u && h.isStr(u) && h[t ? y : m](o, u), s && 0 < C && !l && C !== a && n.resizing(e, p), h.isFun(r.observing) && r.observing(i, t, r)
        }), C = a
    }
    return (o = i.prototype).constructor = i, o.count = 0, o.erCount = 0, o.resizeTick = 0, o.destroyed = !1, o.options = {}, o.lazyLoad = function(i, e) {}, o.loadImage = function(i, e, s) {}, o.resizing = function(i, e) {}, o.prepare = function() {}, o.windowData = function() {
        return h.isUnd(p.vp) ? L.windowData(this.options, !0) : p
    }, o.load = function(i, e, s) {
        var t = this;
        i = i && h.toArray(i), h.isUnd(s) || (t.options = h.extend({}, t.options, s || {})), e = e || t.options.loadInvisible, h.each(i, function(i) {
            (t.isValid(i) || h.isElm(i) && e) && x.call(t, i, e)
        })
    }, o.isLoaded = function(i) {
        return h.hasClass(i, this.options.successClass)
    }, o.isValid = function(i) {
        return h.isElm(i) && !this.isLoaded(i)
    }, o.revalidate = function(i) {
        (!0 === i || this.count !== l) && e < l && (this.elms = h.findAll(r, h.selector(this.options))).length && (this.observe(!0), e++)
    }, o.destroyQuietly = function(i) {
        var e = this.options;
        this.destroyed || !i && !h.isUnd(Drupal.io) || (e = h.find(n, h.selector(e, ":not(." + e.successClass + ")")), h.isElm(e) || this.destroy(i))
    }, o.destroy = function(i) {
        var e = this,
            s = e.options,
            t = e.ioObserver,
            s = a === e.count - 1 && s.disconnect;
        e.destroyed || 0 < e.erCounted && !i || (s || i) && (t && t.disconnect(), w.unload(), e.count = 0, e.elms = [], e.ioObserver = null, e.destroyed = !0)
    }, o.observe = function(i) {
        var e = this.elms;
        i = i || this.destroyed, c && !i || (p = w.init(this, A, e, !0), this.destroyed = !1, w.observe(), c = !0)
    }, o.reinit = function() {
        this.destroyed = !0, a = 0,
            function(i) {
                i.prepare();
                var e = h.findAll(r, h.selector(i.options));
                i.elms = e, i.count = e.length, i._raf = [], i._queue = [], i.withIo = !0, i.observe(!0)
            }(this)
    }, i
});;
! function(t, e) {
    "use strict";
    var a = "BioMedia",
        n = t.dBlazy,
        r = t.Bio;
    "function" == typeof define && define.amd ? define([a, n, r], e) : "object" == typeof exports ? module.exports = e(a, n, r) : t[a] = e(a, n, r)
}(this, function(a, l, n) {
    "use strict";
    var r, i, o = document,
        t = "data-",
        p = "src",
        f = "srcset",
        m = t + p,
        s = t + "b-html",
        h = [f, p],
        g = 0,
        c = !1,
        b = l.multimedia || !1;

    function e(t) {
        var e = n.apply(l.extend({}, i, l.extend({}, r, this)), arguments);
        return e.name = a, e
    }

    function A(t, e) {
        var a, n;
        l.isHtml(t) && l.hasAttr(t, s) && (n = !1, (a = l.attr(t, s)) && (n = !0, a = a.replace("data:text/plain;base64,", ""), a = atob(a), l.append(t, a), l.removeAttr(t, s)), g = l.status(t, n, e))
    }

    function v(t, e, a, n) {
        return c || (u(t, "defer", function(t) {
            l.attr(t, "loading", "lazy")
        }), c = !0), l.status(e, a, n)
    }

    function u(t, e, a) {
        t = t.options;
        if (!l.isNativeLazy) return 1;
        e = e || "a";
        e = l.selector(t, '[data-src][loading*="' + e + '"]:not(.b-blur)'), e = l.findAll(o, e);
        return e.length && l.each(e, function(t) {
            l.mapAttr(t, ["srcset", "src"], !0), l.mapSource(t, !1, !0, !1), l.isFun(a) && a(t)
        }), e
    }
    return i = Bio.prototype, (r = e.prototype = Object.create(i)).constructor = e, r.lazyLoad = function(t, e) {
        var a = this,
            n = a.options,
            r = t.parentNode,
            i = l.isBg(t),
            o = l.equal(r, "picture"),
            s = l.equal(t, "img"),
            c = l.equal(t, "audio"),
            u = l.equal(t, "video"),
            d = l.hasAttr(t, m);
        o ? (d && (l.mapSource(t, f, !0), l.mapAttr(t, p, !0)), g = v(a, t, !0, n)) : u || c ? (l.isBg(r) && a.loadImage(r, !0, e), u = t, c = !0, r = n, l.mapSource(u, p, !0), u.load(), b && b.init(u), g = l.status(u, c, r)) : s || i ? (a.loadImage(t, i, e), i && l.isHtml(t) && A(t, n)) : l.hasAttr(t, p) ? (l.attr(t, m) && l.mapAttr(t, p, !0), g = v(a, t, !0, n)) : A(t, n), a.erCount = g
    }, r.loadImage = function(t, a, n) {
        function e(t, e) {
            g = a && l.isFun(l.bg) ? (l.bg(t, n), l.status(t, e, i)) : v(r, t, e, i)
        }
        var r = this,
            i = r.options,
            o = new Image,
            s = l.hasAttr(t, f),
            c = l.hasAttr(t, m),
            u = c ? m : p,
            d = c ? "data-srcset" : f;
        "decode" in o && (o.decoding = "async"), a && l.isFun(l.bgUrl) ? o.src = l.bgUrl(t, n) : (c && l.mapAttr(t, h, !1), o.src = l.attr(t, u)), s && (o.srcset = l.attr(t, d)), l.decode(o).then(function() {
            e(t, !0)
        }).catch(function() {
            e(t, s), s || (t.bhit = !1)
        })
    }, r.resizing = function(t, e) {
        var a = l.isBg(t, this.options);
        a && this.loadImage(t, a, e)
    }, r.prepare = function() {
        var e, t, a;
        u(this), l.webp && (e = this, l.webp.isSupported() || (t = function(t) {
            return t = t || "", l.selector(e.options, "[" + t + 'srcset*=".webp"]')
        }, (a = l.findAll(o, t())).length || (a = l.findAll(o, t("data-"))), a.length && l.webp.run(a)))
    }, e
});;
! function(o, e, t, l, s) {
    "use strict";
    var a = "data",
        r = "b-checked",
        u = ".b-blur",
        c = ".media",
        i = "successClass",
        d = (n = "blazy") + ":done",
        n = function() {},
        g = {};
    e.blazy = {
        context: s,
        name: "Drupal.blazy",
        init: null,
        instances: [],
        resizeTick: 0,
        resizeTrigger: !1,
        blazySettings: t.blazy || {},
        ioSettings: t.blazyIo || {},
        options: {},
        clearCompat: n,
        clearScript: n,
        checkResize: n,
        resizing: n,
        revalidate: n,
        isIo: function() {
            return !0
        },
        isBlazy: function() {
            return !o.isIo && "Blazy" in l
        },
        isFluid: function(t, n) {
            return o.equal(t.parentNode, "picture") && o.hasAttr(n, "data-b-ratios")
        },
        isLoaded: function(t) {
            return o.hasClass(t, this.options[i])
        },
        globals: function() {
            var t = this,
                n = {
                    isMedia: !0,
                    success: t.clearing.bind(t),
                    error: t.clearing.bind(t),
                    resizing: t.resizing.bind(t),
                    selector: ".b-lazy",
                    parent: c,
                    errorClass: "b-error",
                    successClass: "b-loaded"
                };
            return o.extend(t.blazySettings, t.ioSettings, n)
        },
        extend: function(t) {
            g = o.extend({}, g, t)
        },
        merge: function(t) {
            var n = this;
            return n.options = o.extend({}, n.globals(), n.options, t || {}), n.options
        },
        run: function(t) {
            return new BioMedia(t)
        },
        mount: function(t) {
            var n = this;
            return n.merge(), t && o.each(g, function(t) {
                o.isFun(t) && t.call(n)
            }), o.extend(n, g)
        },
        selector: function(t) {
            t = t || "";
            var n = this.options;
            return n.selector + t + ":not(." + n[i] + ")"
        },
        clearing: function(t) {
            var n, i = this;
            if (o.hasClass(t, i.options.errorClass) && !o.hasClass(t, r)) return o.addClass(t, r), o.isFun(o.unloading) && o.unloading(t), void o.trigger(t, "blazy:error", [i]);
            n = o.hasClass(t, "b-responsive") && o.hasAttr(t, a + "-pfsrc"), l.picturefill && n && l.picturefill({
                reevaluate: !0,
                elements: [t]
            }), l.setTimeout(function() {
                o.isHtml(t) && e.attachBehaviors(t), o.isFun(o.unloading) && o.unloading(t)
            }, 300), i.clearCompat(t), i.clearScript(t), o.trigger(t, d, {
                options: i.options
            })
        },
        windowData: function() {
            return this.init ? this.init.windowData() : {}
        },
        load: function(n) {
            var i = this;
            l.setTimeout(function() {
                var t = o.findAll(n || s, i.selector());
                t.length && o.each(t, i.update.bind(i))
            }, 100)
        },
        update: function(t, n, i) {
            function e() {
                o.hasAttr(t, "data-b-bg") && o.isFun(o.bg) ? o.bg(t, i || s.windowData()) : s.init && (o.hasClass(t, r.substring(1)) || (t = o.find(t, r) || t), s.init.load(t, !0, a))
            }
            var s = this,
                a = s.options,
                r = a.selector;
            (n = n || !1) ? l.setTimeout(e, 100): e()
        },
        rebind: function(t, i, e) {
            var n = o.findAll(t, this.options.selector + ":not(" + u + ")"),
                s = n.length;
            s || (n = o.findAll(t, "img:not(" + u + ")")), n.length && o.each(n, function(t) {
                var n = s ? d : "load";
                o.one(t, n, i, s), e && e.observe(t)
            })
        },
        pad: function(n, i, t) {
            var e = this,
                s = o.closest(n, c) || n;
            setTimeout(function() {
                var t = Math.round(n.naturalHeight / n.naturalWidth * 100, 2);
                e.isFluid(n, s) && (s.style.paddingBottom = t + "%"), o.isFun(i) && i.call(e, n, s, t)
            }, t || 0)
        }
    }
}(dBlazy, Drupal, drupalSettings, this, this.document);;
! function(o, a) {
    "use strict";
    var i, r = "blazy",
        t = "data-",
        l = t + "b-ratios",
        c = t + "b-ratio",
        d = "picture",
        n = ".media--ratio",
        u = {};

    function e(t) {
        t = o.aniElement && o.aniElement(t);
        o.animate && o.isElm(t) && !o.hasClass(t, "is-b-animated") && o.animate(t)
    }

    function s(t, i, a) {
        var n;
        if (t = t.target || t, a = !!o.isBool(a) && a, o.isElm(t)) {
            if (n = o.parse(o.attr(t, l)), o.isEmpty(n)) return e = t, s = o.attr(e, c), void(!o.hasAttr(e, "style") && s && (e.style.paddingBottom = s + "%"));
            var e, s = o.isElm(o.find(t, d)) && a,
                a = o.extend(u, {
                    up: s
                }),
                s = o.closest(t, "." + r);
            t.dblazy = o.isElm(s) && s.dblazy, (a = o.activeWidth(n, a)) && !o.isUnd(a) && (t.style.paddingBottom = a + "%")
        }
    }

    function m() {
        var t = this;
        t.mount(!0), i = t.options, o.isNull(t.init) && (t.init = t.run(i)),
            function() {
                var t = this,
                    i = t.context,
                    a = o.findAll(i, n);
                a.length && (o.each(a, s.bind(t)), t.checkResize(a, s, i))
            }.call(t)
    }
    a.blazy = o.extend(a.blazy || {}, {
        clearCompat: function(t) {
            var i = o.isBg(t) && (this.isBlazy() || o.ie);
            this.pad(t, e, i ? 50 : 0)
        },
        checkResize: function(i, a, t, n) {
            var e = this,
                s = e.init;
            return o.on("bio:resizing.compat", function(t) {
                t = t && t.detail ? t.detail : {};
                u = t.winData || e.windowData(), e.resizeTick = s && s.resizeTick || 0, o.isFun(a) && o.each(i, function(t, i) {
                    t = t.target || t;
                    return a.call(e, t, i, !0)
                })
            }), n && o.isFun(n) && e.rebind(t, n, e.roObserver), e.destroyed = !1, u
        }
    }), a.behaviors.blazyCompat = {
        attach: function(t) {
            var i = a.blazy;
            i.context = o.context(t), o.once(m.call(i))
        }
    }
}(dBlazy, Drupal);;
/* @license MIT https://raw.githubusercontent.com/focus-trap/tabbable/v6.2.0/LICENSE */
/*!
 * tabbable 6.2.0
 * @license MIT, https://github.com/focus-trap/tabbable/blob/master/LICENSE
 */
! function(t, e) {
    "object" == typeof exports && "undefined" != typeof module ? e(exports) : "function" == typeof define && define.amd ? define(["exports"], e) : (t = "undefined" != typeof globalThis ? globalThis : t || self, function() {
        var n = t.tabbable,
            o = t.tabbable = {};
        e(o), o.noConflict = function() {
            return t.tabbable = n, o
        }
    }())
}(this, (function(t) {
    "use strict";
    var e = ["input:not([inert])", "select:not([inert])", "textarea:not([inert])", "a[href]:not([inert])", "button:not([inert])", "[tabindex]:not(slot):not([inert])", "audio[controls]:not([inert])", "video[controls]:not([inert])", '[contenteditable]:not([contenteditable="false"]):not([inert])', "details>summary:first-of-type:not([inert])", "details:not([inert])"],
        n = e.join(","),
        o = "undefined" == typeof Element,
        r = o ? function() {} : Element.prototype.matches || Element.prototype.msMatchesSelector || Element.prototype.webkitMatchesSelector,
        i = !o && Element.prototype.getRootNode ? function(t) {
            var e;
            return null == t || null === (e = t.getRootNode) || void 0 === e ? void 0 : e.call(t)
        } : function(t) {
            return null == t ? void 0 : t.ownerDocument
        },
        a = function t(e, n) {
            var o;
            void 0 === n && (n = !0);
            var r = null == e || null === (o = e.getAttribute) || void 0 === o ? void 0 : o.call(e, "inert");
            return "" === r || "true" === r || n && e && t(e.parentNode)
        },
        l = function(t, e, o) {
            if (a(t)) return [];
            var i = Array.prototype.slice.apply(t.querySelectorAll(n));
            return e && r.call(t, n) && i.unshift(t), i = i.filter(o)
        },
        u = function t(e, o, i) {
            for (var l = [], u = Array.from(e); u.length;) {
                var d = u.shift();
                if (!a(d, !1))
                    if ("SLOT" === d.tagName) {
                        var c = d.assignedElements(),
                            f = t(c.length ? c : d.children, !0, i);
                        i.flatten ? l.push.apply(l, f) : l.push({
                            scopeParent: d,
                            candidates: f
                        })
                    } else {
                        r.call(d, n) && i.filter(d) && (o || !e.includes(d)) && l.push(d);
                        var s = d.shadowRoot || "function" == typeof i.getShadowRoot && i.getShadowRoot(d),
                            p = !a(s, !1) && (!i.shadowRootFilter || i.shadowRootFilter(d));
                        if (s && p) {
                            var h = t(!0 === s ? d.children : s.children, !0, i);
                            i.flatten ? l.push.apply(l, h) : l.push({
                                scopeParent: d,
                                candidates: h
                            })
                        } else u.unshift.apply(u, d.children)
                    }
            }
            return l
        },
        d = function(t) {
            return !isNaN(parseInt(t.getAttribute("tabindex"), 10))
        },
        c = function(t) {
            if (!t) throw new Error("No node provided");
            return t.tabIndex < 0 && (/^(AUDIO|VIDEO|DETAILS)$/.test(t.tagName) || function(t) {
                var e, n = null == t || null === (e = t.getAttribute) || void 0 === e ? void 0 : e.call(t, "contenteditable");
                return "" === n || "true" === n
            }(t)) && !d(t) ? 0 : t.tabIndex
        },
        f = function(t, e) {
            return t.tabIndex === e.tabIndex ? t.documentOrder - e.documentOrder : t.tabIndex - e.tabIndex
        },
        s = function(t) {
            return "INPUT" === t.tagName
        },
        p = function(t) {
            return function(t) {
                return s(t) && "radio" === t.type
            }(t) && ! function(t) {
                if (!t.name) return !0;
                var e, n = t.form || i(t),
                    o = function(t) {
                        return n.querySelectorAll('input[type="radio"][name="' + t + '"]')
                    };
                if ("undefined" != typeof window && void 0 !== window.CSS && "function" == typeof window.CSS.escape) e = o(window.CSS.escape(t.name));
                else try {
                    e = o(t.name)
                } catch (t) {
                    return console.error("Looks like you have a radio button with a name attribute containing invalid CSS selector characters and need the CSS.escape polyfill: %s", t.message), !1
                }
                var r = function(t, e) {
                    for (var n = 0; n < t.length; n++)
                        if (t[n].checked && t[n].form === e) return t[n]
                }(e, t.form);
                return !r || r === t
            }(t)
        },
        h = function(t) {
            var e = t.getBoundingClientRect(),
                n = e.width,
                o = e.height;
            return 0 === n && 0 === o
        },
        v = function(t, e) {
            var n = e.displayCheck,
                o = e.getShadowRoot;
            if ("hidden" === getComputedStyle(t).visibility) return !0;
            var a = r.call(t, "details>summary:first-of-type") ? t.parentElement : t;
            if (r.call(a, "details:not([open]) *")) return !0;
            if (n && "full" !== n && "legacy-full" !== n) {
                if ("non-zero-area" === n) return h(t)
            } else {
                if ("function" == typeof o) {
                    for (var l = t; t;) {
                        var u = t.parentElement,
                            d = i(t);
                        if (u && !u.shadowRoot && !0 === o(u)) return h(t);
                        t = t.assignedSlot ? t.assignedSlot : u || d === t.ownerDocument ? u : d.host
                    }
                    t = l
                }
                if (function(t) {
                        var e, n, o, r, a = t && i(t),
                            l = null === (e = a) || void 0 === e ? void 0 : e.host,
                            u = !1;
                        if (a && a !== t)
                            for (u = !!(null !== (n = l) && void 0 !== n && null !== (o = n.ownerDocument) && void 0 !== o && o.contains(l) || null != t && null !== (r = t.ownerDocument) && void 0 !== r && r.contains(t)); !u && l;) {
                                var d, c, f;
                                u = !(null === (c = l = null === (d = a = i(l)) || void 0 === d ? void 0 : d.host) || void 0 === c || null === (f = c.ownerDocument) || void 0 === f || !f.contains(l))
                            }
                        return u
                    }(t)) return !t.getClientRects().length;
                if ("legacy-full" !== n) return !0
            }
            return !1
        },
        b = function(t, e) {
            return !(e.disabled || a(e) || function(t) {
                return s(t) && "hidden" === t.type
            }(e) || v(e, t) || function(t) {
                return "DETAILS" === t.tagName && Array.prototype.slice.apply(t.children).some((function(t) {
                    return "SUMMARY" === t.tagName
                }))
            }(e) || function(t) {
                if (/^(INPUT|BUTTON|SELECT|TEXTAREA)$/.test(t.tagName))
                    for (var e = t.parentElement; e;) {
                        if ("FIELDSET" === e.tagName && e.disabled) {
                            for (var n = 0; n < e.children.length; n++) {
                                var o = e.children.item(n);
                                if ("LEGEND" === o.tagName) return !!r.call(e, "fieldset[disabled] *") || !o.contains(t)
                            }
                            return !0
                        }
                        e = e.parentElement
                    }
                return !1
            }(e))
        },
        m = function(t, e) {
            return !(p(e) || c(e) < 0 || !b(t, e))
        },
        g = function(t) {
            var e = parseInt(t.getAttribute("tabindex"), 10);
            return !!(isNaN(e) || e >= 0)
        },
        y = function t(e) {
            var n = [],
                o = [];
            return e.forEach((function(e, r) {
                var i = !!e.scopeParent,
                    a = i ? e.scopeParent : e,
                    l = function(t, e) {
                        var n = c(t);
                        return n < 0 && e && !d(t) ? 0 : n
                    }(a, i),
                    u = i ? t(e.candidates) : a;
                0 === l ? i ? n.push.apply(n, u) : n.push(a) : o.push({
                    documentOrder: r,
                    tabIndex: l,
                    item: e,
                    isScope: i,
                    content: u
                })
            })), o.sort(f).reduce((function(t, e) {
                return e.isScope ? t.push.apply(t, e.content) : t.push(e.content), t
            }), []).concat(n)
        },
        w = e.concat("iframe").join(",");
    t.focusable = function(t, e) {
        return (e = e || {}).getShadowRoot ? u([t], e.includeContainer, {
            filter: b.bind(null, e),
            flatten: !0,
            getShadowRoot: e.getShadowRoot
        }) : l(t, e.includeContainer, b.bind(null, e))
    }, t.getTabIndex = c, t.isFocusable = function(t, e) {
        if (e = e || {}, !t) throw new Error("No node provided");
        return !1 !== r.call(t, w) && b(e, t)
    }, t.isTabbable = function(t, e) {
        if (e = e || {}, !t) throw new Error("No node provided");
        return !1 !== r.call(t, n) && m(e, t)
    }, t.tabbable = function(t, e) {
        var n;
        return n = (e = e || {}).getShadowRoot ? u([t], e.includeContainer, {
            filter: m.bind(null, e),
            flatten: !1,
            getShadowRoot: e.getShadowRoot,
            shadowRootFilter: g
        }) : l(t, e.includeContainer, m.bind(null, e)), y(n)
    }, Object.defineProperty(t, "__esModule", {
        value: !0
    })
}));

;
/* @license GPL-2.0-or-later https://www.drupal.org/licensing/faq */
(function($, Drupal) {
    Drupal.theme.progressBar = function(id) {
        const escapedId = Drupal.checkPlain(id);
        return (`<div id="${escapedId}" class="progress" aria-live="polite">` + '<div class="progress__label">&nbsp;</div>' + '<div class="progress__track"><div class="progress__bar"></div></div>' + '<div class="progress__percentage"></div>' + '<div class="progress__description">&nbsp;</div>' + '</div>');
    };
    Drupal.ProgressBar = function(id, updateCallback, method, errorCallback) {
        this.id = id;
        this.method = method || 'GET';
        this.updateCallback = updateCallback;
        this.errorCallback = errorCallback;
        this.element = $(Drupal.theme('progressBar', id));
    };
    $.extend(Drupal.ProgressBar.prototype, {
        setProgress(percentage, message, label) {
            if (percentage >= 0 && percentage <= 100) {
                $(this.element).find('div.progress__bar').each(function() {
                    this.style.width = `${percentage}%`;
                });
                $(this.element).find('div.progress__percentage').html(`${percentage}%`);
            }
            $('div.progress__description', this.element).html(message);
            $('div.progress__label', this.element).html(label);
            if (this.updateCallback) this.updateCallback(percentage, message, this);
        },
        startMonitoring(uri, delay) {
            this.delay = delay;
            this.uri = uri;
            this.sendPing();
        },
        stopMonitoring() {
            clearTimeout(this.timer);
            this.uri = null;
        },
        sendPing() {
            if (this.timer) clearTimeout(this.timer);
            if (this.uri) {
                const pb = this;
                let uri = this.uri;
                if (!uri.includes('?')) uri += '?';
                else uri += '&';
                uri += '_format=json';
                $.ajax({
                    type: this.method,
                    url: uri,
                    data: '',
                    dataType: 'json',
                    success(progress) {
                        if (progress.status === 0) {
                            pb.displayError(progress.data);
                            return;
                        }
                        pb.setProgress(progress.percentage, progress.message, progress.label);
                        pb.timer = setTimeout(() => {
                            pb.sendPing();
                        }, pb.delay);
                    },
                    error(xmlhttp) {
                        const e = new Drupal.AjaxError(xmlhttp, pb.uri);
                        pb.displayError(`<pre>${e.message}</pre>`);
                    }
                });
            }
        },
        displayError(string) {
            const error = $('<div class="messages messages--error"></div>').html(string);
            $(this.element).before(error).hide();
            if (this.errorCallback) this.errorCallback(this);
        }
    });
})(jQuery, Drupal);;
/* @license MIT https://raw.githubusercontent.com/muicss/loadjs/4.3.0/LICENSE.txt */
loadjs = function() {
    var h = function() {},
        o = {},
        c = {},
        f = {};

    function u(e, n) {
        if (e) {
            var t = f[e];
            if (c[e] = n, t)
                for (; t.length;) t[0](e, n), t.splice(0, 1)
        }
    }

    function l(e, n) {
        e.call && (e = {
            success: e
        }), n.length ? (e.error || h)(n) : (e.success || h)(e)
    }

    function p(t, r, i, s) {
        var o, e, u, n = document,
            c = i.async,
            f = (i.numRetries || 0) + 1,
            l = i.before || h,
            a = t.replace(/[\?|#].*$/, ""),
            d = t.replace(/^(css|img|module|nomodule)!/, "");
        if (s = s || 0, /(^css!|\.css$)/.test(a))(u = n.createElement("link")).rel = "stylesheet", u.href = d, (o = "hideFocus" in u) && u.relList && (o = 0, u.rel = "preload", u.as = "style");
        else if (/(^img!|\.(png|gif|jpg|svg|webp)$)/.test(a))(u = n.createElement("img")).src = d;
        else if ((u = n.createElement("script")).src = d, u.async = void 0 === c || c, e = "noModule" in u, /^module!/.test(a)) {
            if (!e) return r(t, "l");
            u.type = "module"
        } else if (/^nomodule!/.test(a) && e) return r(t, "l");
        !(u.onload = u.onerror = u.onbeforeload = function(e) {
            var n = e.type[0];
            if (o) try {
                u.sheet.cssText.length || (n = "e")
            } catch (e) {
                18 != e.code && (n = "e")
            }
            if ("e" == n) {
                if ((s += 1) < f) return p(t, r, i, s)
            } else if ("preload" == u.rel && "style" == u.as) return u.rel = "stylesheet";
            r(t, n, e.defaultPrevented)
        }) !== l(t, u) && n.head.appendChild(u)
    }

    function t(e, n, t) {
        var r, i;
        if (n && n.trim && (r = n), i = (r ? t : n) || {}, r) {
            if (r in o) throw "LoadJS";
            o[r] = !0
        }

        function s(n, t) {
            ! function(e, r, n) {
                var t, i, s = (e = e.push ? e : [e]).length,
                    o = s,
                    u = [];
                for (t = function(e, n, t) {
                        if ("e" == n && u.push(e), "b" == n) {
                            if (!t) return;
                            u.push(e)
                        }--s || r(u)
                    }, i = 0; i < o; i++) p(e[i], t, n)
            }(e, function(e) {
                l(i, e), n && l({
                    success: n,
                    error: t
                }, e), u(r, e)
            }, i)
        }
        if (i.returnPromise) return new Promise(s);
        s()
    }
    return t.ready = function(e, n) {
        return function(e, t) {
            e = e.push ? e : [e];
            var n, r, i, s = [],
                o = e.length,
                u = o;
            for (n = function(e, n) {
                    n.length && s.push(e), --u || t(s)
                }; o--;) r = e[o], (i = c[r]) ? n(r, i) : (f[r] = f[r] || []).push(n)
        }(e, function(e) {
            l(n, e)
        }), t
    }, t.done = function(e) {
        u(e, [])
    }, t.reset = function() {
        o = {}, c = {}, f = {}
    }, t.isDefined = function(e) {
        return e in o
    }, t
}();;
/* @license GPL-2.0-or-later https://www.drupal.org/licensing/faq */
(function(Drupal, debounce) {
    let liveElement;
    const announcements = [];
    Drupal.behaviors.drupalAnnounce = {
        attach(context) {
            if (!liveElement) {
                liveElement = document.createElement('div');
                liveElement.id = 'drupal-live-announce';
                liveElement.className = 'visually-hidden';
                liveElement.setAttribute('aria-live', 'polite');
                liveElement.setAttribute('aria-busy', 'false');
                document.body.appendChild(liveElement);
            }
        }
    };

    function announce() {
        const text = [];
        let priority = 'polite';
        let announcement;
        const il = announcements.length;
        for (let i = 0; i < il; i++) {
            announcement = announcements.pop();
            text.unshift(announcement.text);
            if (announcement.priority === 'assertive') priority = 'assertive';
        }
        if (text.length) {
            liveElement.innerHTML = '';
            liveElement.setAttribute('aria-busy', 'true');
            liveElement.setAttribute('aria-live', priority);
            liveElement.innerHTML = text.join('\n');
            liveElement.setAttribute('aria-busy', 'false');
        }
    }
    Drupal.announce = function(text, priority) {
        announcements.push({
            text,
            priority
        });
        return debounce(announce, 200)();
    };
})(Drupal, Drupal.debounce);;
((Drupal) => {
    Drupal.Message = class {
        constructor(messageWrapper = null) {
            if (!messageWrapper) this.messageWrapper = Drupal.Message.defaultWrapper();
            else this.messageWrapper = messageWrapper;
        }
        static defaultWrapper() {
            let wrapper = document.querySelector('[data-drupal-messages]') || document.querySelector('[data-drupal-messages-fallback]');
            if (!wrapper) {
                wrapper = document.createElement('div');
                document.body.appendChild(wrapper);
            }
            if (wrapper.hasAttribute('data-drupal-messages-fallback')) {
                wrapper.removeAttribute('data-drupal-messages-fallback');
                wrapper.classList.remove('hidden');
            }
            wrapper.setAttribute('data-drupal-messages', '');
            return wrapper.innerHTML === '' ? Drupal.Message.messageInternalWrapper(wrapper) : wrapper.firstElementChild;
        }
        static getMessageTypeLabels() {
            return {
                status: Drupal.t('Status message'),
                error: Drupal.t('Error message'),
                warning: Drupal.t('Warning message')
            };
        }
        add(message, options = {}) {
            if (!options.hasOwnProperty('type')) options.type = 'status';
            if (typeof message !== 'string') throw new Error('Message must be a string.');
            Drupal.Message.announce(message, options);
            options.id = options.id ? String(options.id) : `${options.type}-${Math.random().toFixed(15).replace('0.','')}`;
            if (!Drupal.Message.getMessageTypeLabels().hasOwnProperty(options.type)) {
                const {
                    type
                } = options;
                throw new Error(`The message type, ${type}, is not present in Drupal.Message.getMessageTypeLabels().`);
            }
            this.messageWrapper.appendChild(Drupal.theme('message', {
                text: message
            }, options));
            return options.id;
        }
        select(id) {
            return this.messageWrapper.querySelector(`[data-drupal-message-id^="${id}"]`);
        }
        remove(id) {
            return this.messageWrapper.removeChild(this.select(id));
        }
        clear() {
            Array.prototype.forEach.call(this.messageWrapper.querySelectorAll('[data-drupal-message-id]'), (message) => {
                this.messageWrapper.removeChild(message);
            });
        }
        static announce(message, options) {
            if (!options.priority && (options.type === 'warning' || options.type === 'error')) options.priority = 'assertive';
            if (options.announce !== '') Drupal.announce(options.announce || message, options.priority);
        }
        static messageInternalWrapper(messageWrapper) {
            const innerWrapper = document.createElement('div');
            innerWrapper.setAttribute('class', 'messages__wrapper');
            messageWrapper.insertAdjacentElement('afterbegin', innerWrapper);
            return innerWrapper;
        }
    };
    Drupal.theme.message = ({
        text
    }, {
        type,
        id
    }) => {
        const messagesTypes = Drupal.Message.getMessageTypeLabels();
        const messageWrapper = document.createElement('div');
        messageWrapper.setAttribute('class', `messages messages--${type}`);
        messageWrapper.setAttribute('role', type === 'error' || type === 'warning' ? 'alert' : 'status');
        messageWrapper.setAttribute('data-drupal-message-id', id);
        messageWrapper.setAttribute('data-drupal-message-type', type);
        messageWrapper.setAttribute('aria-label', messagesTypes[type]);
        messageWrapper.innerHTML = `${text}`;
        return messageWrapper;
    };
})(Drupal);;
(function($, window, Drupal, drupalSettings, loadjs, {
    isFocusable,
    tabbable
}) {
    Drupal.behaviors.AJAX = {
        attach(context, settings) {
            function loadAjaxBehavior(base) {
                const elementSettings = settings.ajax[base];
                if (typeof elementSettings.selector === 'undefined') elementSettings.selector = `#${base}`;
                once('drupal-ajax', $(elementSettings.selector)).forEach((el) => {
                    elementSettings.element = el;
                    elementSettings.base = base;
                    Drupal.ajax(elementSettings);
                });
            }
            Object.keys(settings.ajax || {}).forEach(loadAjaxBehavior);
            Drupal.ajax.bindAjaxLinks(document.body);
            once('ajax', '.use-ajax-submit').forEach((el) => {
                const elementSettings = {};
                elementSettings.url = $(el.form).attr('action');
                elementSettings.setClick = true;
                elementSettings.event = 'click';
                elementSettings.progress = {
                    type: 'throbber'
                };
                elementSettings.base = el.id;
                elementSettings.element = el;
                Drupal.ajax(elementSettings);
            });
        },
        detach(context, settings, trigger) {
            if (trigger === 'unload') Drupal.ajax.expired().forEach((instance) => {
                Drupal.ajax.instances[instance.instanceIndex] = null;
            });
        }
    };
    Drupal.AjaxError = function(xmlhttp, uri, customMessage) {
        let statusCode;
        let statusText;
        let responseText;
        if (xmlhttp.status) statusCode = `\n${Drupal.t('An AJAX HTTP error occurred.')}\n${Drupal.t('HTTP Result Code: !status',{'!status':xmlhttp.status})}`;
        else statusCode = `\n${Drupal.t('An AJAX HTTP request terminated abnormally.')}`;
        statusCode += `\n${Drupal.t('Debugging information follows.')}`;
        const pathText = `\n${Drupal.t('Path: !uri',{'!uri':uri})}`;
        statusText = '';
        try {
            statusText = `\n${Drupal.t('StatusText: !statusText',{'!statusText':xmlhttp.statusText.trim()})}`;
        } catch (e) {}
        responseText = '';
        try {
            responseText = `\n${Drupal.t('ResponseText: !responseText',{'!responseText':xmlhttp.responseText.trim()})}`;
        } catch (e) {}
        responseText = responseText.replace(/<("[^"]*"|'[^']*'|[^'">])*>/gi, '');
        responseText = responseText.replace(/[\n]+\s+/g, '\n');
        const readyStateText = xmlhttp.status === 0 ? `\n${Drupal.t('ReadyState: !readyState',{'!readyState':xmlhttp.readyState})}` : '';
        customMessage = customMessage ? `\n${Drupal.t('CustomMessage: !customMessage',{'!customMessage':customMessage})}` : '';
        this.message = statusCode + pathText + statusText + customMessage + responseText + readyStateText;
        this.name = 'AjaxError';
        if (!Drupal.AjaxError.messages) Drupal.AjaxError.messages = new Drupal.Message();
        Drupal.AjaxError.messages.add(Drupal.t("Oops, something went wrong. Check your browser's developer console for more details."), {
            type: 'error'
        });
    };
    Drupal.AjaxError.prototype = new Error();
    Drupal.AjaxError.prototype.constructor = Drupal.AjaxError;
    Drupal.ajax = function(settings) {
        if (arguments.length !== 1) throw new Error('Drupal.ajax() function must be called with one configuration object only');
        const base = settings.base || false;
        const element = settings.element || false;
        delete settings.base;
        delete settings.element;
        if (!settings.progress && !element) settings.progress = false;
        const ajax = new Drupal.Ajax(base, element, settings);
        ajax.instanceIndex = Drupal.ajax.instances.length;
        Drupal.ajax.instances.push(ajax);
        return ajax;
    };
    Drupal.ajax.instances = [];
    Drupal.ajax.expired = function() {
        return Drupal.ajax.instances.filter((instance) => instance && instance.element !== false && !document.body.contains(instance.element));
    };
    Drupal.ajax.bindAjaxLinks = (element) => {
        once('ajax', '.use-ajax', element).forEach((ajaxLink) => {
            const $linkElement = $(ajaxLink);
            const elementSettings = {
                progress: {
                    type: 'throbber'
                },
                dialogType: $linkElement.data('dialog-type'),
                dialog: $linkElement.data('dialog-options'),
                dialogRenderer: $linkElement.data('dialog-renderer'),
                base: $linkElement.attr('id'),
                element: ajaxLink
            };
            const href = $linkElement.attr('href');
            if (href) {
                elementSettings.url = href;
                elementSettings.event = 'click';
            }
            const httpMethod = $linkElement.data('ajax-http-method');
            if (httpMethod) elementSettings.httpMethod = httpMethod;
            Drupal.ajax(elementSettings);
        });
    };
    Drupal.Ajax = function(base, element, elementSettings) {
        const defaults = {
            httpMethod: 'POST',
            event: element ? 'mousedown' : null,
            keypress: true,
            selector: base ? `#${base}` : null,
            effect: 'none',
            speed: 'none',
            method: 'replaceWith',
            progress: {
                type: 'throbber',
                message: Drupal.t('Processing...')
            },
            submit: {
                js: true
            }
        };
        $.extend(this, defaults, elementSettings);
        this.commands = new Drupal.AjaxCommands();
        this.instanceIndex = false;
        if (this.wrapper) this.wrapper = `#${this.wrapper}`;
        this.element = element;
        this.preCommandsFocusedElementSelector = null;
        this.elementSettings = elementSettings;
        if (this.element && this.element.form) this.$form = $(this.element.form);
        if (!this.url) {
            const $element = $(this.element);
            if (this.element.tagName === 'A') this.url = $element.attr('href');
            else {
                if (this.element && element.form) this.url = this.$form.attr('action');
            }
        }
        const originalUrl = this.url;
        this.url = this.url.replace(/\/nojs(\/|$|\?|#)/, '/ajax$1');
        if (drupalSettings.ajaxTrustedUrl[originalUrl]) drupalSettings.ajaxTrustedUrl[this.url] = true;
        const ajax = this;
        ajax.options = {
            url: ajax.url,
            data: ajax.submit,
            isInProgress() {
                return ajax.ajaxing;
            },
            beforeSerialize(elementSettings, options) {
                return ajax.beforeSerialize(elementSettings, options);
            },
            beforeSubmit(formValues, elementSettings, options) {
                ajax.ajaxing = true;
                ajax.preCommandsFocusedElementSelector = null;
                return ajax.beforeSubmit(formValues, elementSettings, options);
            },
            beforeSend(xmlhttprequest, options) {
                ajax.ajaxing = true;
                return ajax.beforeSend(xmlhttprequest, options);
            },
            success(response, status, xmlhttprequest) {
                ajax.preCommandsFocusedElementSelector = document.activeElement.getAttribute('data-drupal-selector');
                if (typeof response === 'string') response = $.parseJSON(response);
                if (response !== null && !drupalSettings.ajaxTrustedUrl[ajax.url])
                    if (xmlhttprequest.getResponseHeader('X-Drupal-Ajax-Token') !== '1') {
                        const customMessage = Drupal.t('The response failed verification so will not be processed.');
                        return ajax.error(xmlhttprequest, ajax.url, customMessage);
                    }
                return (Promise.resolve(ajax.success(response, status)).then(() => {
                    ajax.ajaxing = false;
                    $(document).trigger('ajaxSuccess', [xmlhttprequest, this]);
                    $(document).trigger('ajaxComplete', [xmlhttprequest, this]);
                    if (--$.active === 0) $(document).trigger('ajaxStop');
                }));
            },
            error(xmlhttprequest, status, error) {
                ajax.ajaxing = false;
            },
            complete(xmlhttprequest, status) {
                if (status === 'error' || status === 'parsererror') return ajax.error(xmlhttprequest, ajax.url);
            },
            dataType: 'json',
            jsonp: false,
            method: ajax.httpMethod
        };
        if (elementSettings.dialog) ajax.options.data.dialogOptions = elementSettings.dialog;
        if (!ajax.options.url.includes('?')) ajax.options.url += '?';
        else ajax.options.url += '&';
        let wrapper = `drupal_${elementSettings.dialogType||'ajax'}`;
        if (elementSettings.dialogRenderer) wrapper += `.${elementSettings.dialogRenderer}`;
        ajax.options.url += `${Drupal.ajax.WRAPPER_FORMAT}=${wrapper}`;
        $(ajax.element).on(elementSettings.event, function(event) {
            if (!drupalSettings.ajaxTrustedUrl[ajax.url] && !Drupal.url.isLocal(ajax.url)) throw new Error(Drupal.t('The callback URL is not local and not trusted: !url', {
                '!url': ajax.url
            }));
            return ajax.eventResponse(this, event);
        });
        if (elementSettings.keypress) $(ajax.element).on('keypress', function(event) {
            return ajax.keypressResponse(this, event);
        });
        if (elementSettings.prevent) $(ajax.element).on(elementSettings.prevent, false);
    };
    Drupal.ajax.WRAPPER_FORMAT = '_wrapper_format';
    Drupal.Ajax.AJAX_REQUEST_PARAMETER = '_drupal_ajax';
    Drupal.Ajax.prototype.execute = function() {
        if (this.ajaxing) return;
        try {
            this.beforeSerialize(this.element, this.options);
            return $.ajax(this.options);
        } catch (e) {
            this.ajaxing = false;
            window.alert(`An error occurred while attempting to process ${this.options.url}: ${e.message}`);
            return $.Deferred().reject();
        }
    };
    Drupal.Ajax.prototype.keypressResponse = function(element, event) {
        const ajax = this;
        if (event.which === 13 || (event.which === 32 && element.type !== 'text' && element.type !== 'textarea' && element.type !== 'tel' && element.type !== 'number')) {
            event.preventDefault();
            event.stopPropagation();
            $(element).trigger(ajax.elementSettings.event);
        }
    };
    Drupal.Ajax.prototype.eventResponse = function(element, event) {
        event.preventDefault();
        event.stopPropagation();
        const ajax = this;
        if (ajax.ajaxing) return;
        try {
            if (ajax.$form) {
                if (ajax.setClick) element.form.clk = element;
                ajax.$form.ajaxSubmit(ajax.options);
            } else {
                ajax.beforeSerialize(ajax.element, ajax.options);
                $.ajax(ajax.options);
            }
        } catch (e) {
            ajax.ajaxing = false;
            window.alert(`An error occurred while attempting to process ${ajax.options.url}: ${e.message}`);
        }
    };
    Drupal.Ajax.prototype.beforeSerialize = function(element, options) {
        if (this.$form && document.body.contains(this.$form.get(0))) {
            const settings = this.settings || drupalSettings;
            Drupal.detachBehaviors(this.$form.get(0), settings, 'serialize');
        }
        options.data[Drupal.Ajax.AJAX_REQUEST_PARAMETER] = 1;
        const pageState = drupalSettings.ajaxPageState;
        options.data['ajax_page_state[theme]'] = pageState.theme;
        options.data['ajax_page_state[theme_token]'] = pageState.theme_token;
        options.data['ajax_page_state[libraries]'] = pageState.libraries;
    };
    Drupal.Ajax.prototype.beforeSubmit = function(formValues, element, options) {};
    Drupal.Ajax.prototype.beforeSend = function(xmlhttprequest, options) {
        if (this.$form) {
            options.extraData = options.extraData || {};
            options.extraData.ajax_iframe_upload = '1';
            const v = $.fieldValue(this.element);
            if (v !== null) options.extraData[this.element.name] = v;
        }
        $(this.element).prop('disabled', true);
        if (!this.progress || !this.progress.type) return;
        const progressIndicatorMethod = `setProgressIndicator${this.progress.type.slice(0,1).toUpperCase()}${this.progress.type.slice(1).toLowerCase()}`;
        if (progressIndicatorMethod in this && typeof this[progressIndicatorMethod] === 'function') this[progressIndicatorMethod].call(this);
    };
    Drupal.theme.ajaxProgressThrobber = (message) => {
        const messageMarkup = typeof message === 'string' ? Drupal.theme('ajaxProgressMessage', message) : '';
        const throbber = '<div class="throbber">&nbsp;</div>';
        return `<div class="ajax-progress ajax-progress-throbber">${throbber}${messageMarkup}</div>`;
    };
    Drupal.theme.ajaxProgressIndicatorFullscreen = () => '<div class="ajax-progress ajax-progress-fullscreen">&nbsp;</div>';
    Drupal.theme.ajaxProgressMessage = (message) => `<div class="message">${message}</div>`;
    Drupal.theme.ajaxProgressBar = ($element) => $('<div class="ajax-progress ajax-progress-bar"></div>').append($element);
    Drupal.Ajax.prototype.setProgressIndicatorBar = function() {
        const progressBar = new Drupal.ProgressBar(`ajax-progress-${this.element.id}`, $.noop, this.progress.method, $.noop);
        if (this.progress.message) progressBar.setProgress(-1, this.progress.message);
        if (this.progress.url) progressBar.startMonitoring(this.progress.url, this.progress.interval || 1500);
        this.progress.element = $(Drupal.theme('ajaxProgressBar', progressBar.element));
        this.progress.object = progressBar;
        $(this.element).after(this.progress.element);
    };
    Drupal.Ajax.prototype.setProgressIndicatorThrobber = function() {
        this.progress.element = $(Drupal.theme('ajaxProgressThrobber', this.progress.message));
        if ($(this.element).closest('[data-drupal-ajax-container]').length) $(this.element).closest('[data-drupal-ajax-container]').after(this.progress.element);
        else $(this.element).after(this.progress.element);
    };
    Drupal.Ajax.prototype.setProgressIndicatorFullscreen = function() {
        this.progress.element = $(Drupal.theme('ajaxProgressIndicatorFullscreen'));
        $('body').append(this.progress.element);
    };
    Drupal.Ajax.prototype.commandExecutionQueue = function(response, status) {
        const ajaxCommands = this.commands;
        return Object.keys(response || {}).reduce((executionQueue, key) => executionQueue.then(() => {
            const {
                command
            } = response[key];
            if (command && ajaxCommands[command]) return ajaxCommands[command](this, response[key], status);
        }), Promise.resolve());
    };
    Drupal.Ajax.prototype.success = function(response, status) {
        if (this.progress.element) $(this.progress.element).remove();
        if (this.progress.object) this.progress.object.stopMonitoring();
        $(this.element).prop('disabled', false);
        const elementParents = $(this.element).parents('[data-drupal-selector]').addBack().toArray();
        const focusChanged = Object.keys(response || {}).some((key) => {
            const {
                command,
                method
            } = response[key];
            return (command === 'focusFirst' || command === 'openDialog' || (command === 'invoke' && method === 'focus'));
        });
        return (this.commandExecutionQueue(response, status).then(() => {
            if (!focusChanged) {
                let target = false;
                if (this.element) {
                    if ($(this.element).data('refocus-blur') && this.preCommandsFocusedElementSelector) target = document.querySelector(`[data-drupal-selector="${this.preCommandsFocusedElementSelector}"]`);
                    if (!target && !$(this.element).data('disable-refocus')) {
                        for (let n = elementParents.length - 1; !target && n >= 0; n--) target = document.querySelector(`[data-drupal-selector="${elementParents[n].getAttribute('data-drupal-selector')}"]`);
                    }
                }
                if (target) $(target).trigger('focus');
            }
            if (this.$form && document.body.contains(this.$form.get(0))) {
                const settings = this.settings || drupalSettings;
                Drupal.attachBehaviors(this.$form.get(0), settings);
            }
            this.settings = null;
        }).catch((error) => console.error(Drupal.t('An error occurred during the execution of the Ajax response: !error', {
            '!error': error
        }))));
    };
    Drupal.Ajax.prototype.getEffect = function(response) {
        const type = response.effect || this.effect;
        const speed = response.speed || this.speed;
        const effect = {};
        if (type === 'none') {
            effect.showEffect = 'show';
            effect.hideEffect = 'hide';
            effect.showSpeed = '';
        } else if (type === 'fade') {
            effect.showEffect = 'fadeIn';
            effect.hideEffect = 'fadeOut';
            effect.showSpeed = speed;
        } else {
            effect.showEffect = `${type}Toggle`;
            effect.hideEffect = `${type}Toggle`;
            effect.showSpeed = speed;
        }
        return effect;
    };
    Drupal.Ajax.prototype.error = function(xmlhttprequest, uri, customMessage) {
        if (this.progress.element) $(this.progress.element).remove();
        if (this.progress.object) this.progress.object.stopMonitoring();
        $(this.wrapper).show();
        $(this.element).prop('disabled', false);
        if (this.$form && document.body.contains(this.$form.get(0))) {
            const settings = this.settings || drupalSettings;
            Drupal.attachBehaviors(this.$form.get(0), settings);
        }
        throw new Drupal.AjaxError(xmlhttprequest, uri, customMessage);
    };
    Drupal.theme.ajaxWrapperNewContent = ($newContent, ajax, response) => (response.effect || ajax.effect) !== 'none' && $newContent.filter((i) => !(($newContent[i].nodeName === '#comment' || ($newContent[i].nodeName === '#text' && /^(\s|\n|\r)*$/.test($newContent[i].textContent))))).length > 1 ? Drupal.theme('ajaxWrapperMultipleRootElements', $newContent) : $newContent;
    Drupal.theme.ajaxWrapperMultipleRootElements = ($elements) => $('<div></div>').append($elements);
    Drupal.AjaxCommands = function() {};
    Drupal.AjaxCommands.prototype = {
        insert(ajax, response) {
            const $wrapper = response.selector ? $(response.selector) : $(ajax.wrapper);
            const method = response.method || ajax.method;
            const effect = ajax.getEffect(response);
            const settings = response.settings || ajax.settings || drupalSettings;
            const parseHTML = (htmlString) => {
                const fragment = document.createDocumentFragment();
                const tempDiv = fragment.appendChild(document.createElement('div'));
                tempDiv.innerHTML = htmlString;
                return tempDiv.childNodes;
            };
            let $newContent = $(parseHTML(response.data));
            $newContent = Drupal.theme('ajaxWrapperNewContent', $newContent, ajax, response);
            switch (method) {
                case 'html':
                case 'replaceWith':
                case 'replaceAll':
                case 'empty':
                case 'remove':
                    Drupal.detachBehaviors($wrapper.get(0), settings);
                    break;
                default:
                    break;
            }
            $wrapper[method]($newContent);
            if (effect.showEffect !== 'show') $newContent.hide();
            const $ajaxNewContent = $newContent.find('.ajax-new-content');
            if ($ajaxNewContent.length) {
                $ajaxNewContent.hide();
                $newContent.show();
                $ajaxNewContent[effect.showEffect](effect.showSpeed);
            } else {
                if (effect.showEffect !== 'show') $newContent[effect.showEffect](effect.showSpeed);
            }
            $newContent.each((index, element) => {
                if (element.nodeType === Node.ELEMENT_NODE && document.documentElement.contains(element)) Drupal.attachBehaviors(element, settings);
            });
        },
        remove(ajax, response, status) {
            const settings = response.settings || ajax.settings || drupalSettings;
            $(response.selector).each(function() {
                Drupal.detachBehaviors(this, settings);
            }).remove();
        },
        changed(ajax, response, status) {
            const $element = $(response.selector);
            if (!$element.hasClass('ajax-changed')) {
                $element.addClass('ajax-changed');
                if (response.asterisk) $element.find(response.asterisk).append(` <abbr class="ajax-changed" title="${Drupal.t('Changed')}">*</abbr> `);
            }
        },
        alert(ajax, response, status) {
            window.alert(response.text);
        },
        announce(ajax, response) {
            if (response.priority) Drupal.announce(response.text, response.priority);
            else Drupal.announce(response.text);
        },
        redirect(ajax, response, status) {
            window.location = response.url;
        },
        css(ajax, response, status) {
            $(response.selector).css(response.argument);
        },
        settings(ajax, response, status) {
            const ajaxSettings = drupalSettings.ajax;
            if (ajaxSettings) Drupal.ajax.expired().forEach((instance) => {
                if (instance.selector) {
                    const selector = instance.selector.replace('#', '');
                    if (selector in ajaxSettings) delete ajaxSettings[selector];
                }
            });
            if (response.merge) $.extend(true, drupalSettings, response.settings);
            else ajax.settings = response.settings;
        },
        data(ajax, response, status) {
            $(response.selector).data(response.name, response.value);
        },
        focusFirst(ajax, response, status) {
            let focusChanged = false;
            const container = document.querySelector(response.selector);
            if (container) {
                const tabbableElements = tabbable(container);
                if (tabbableElements.length) {
                    tabbableElements[0].focus();
                    focusChanged = true;
                } else {
                    if (isFocusable(container)) {
                        container.focus();
                        focusChanged = true;
                    }
                }
            }
            if (ajax.hasOwnProperty('element') && !focusChanged) ajax.element.focus();
        },
        invoke(ajax, response, status) {
            const $element = $(response.selector);
            $element[response.method](...response.args);
        },
        restripe(ajax, response, status) {
            $(response.selector).find('> tbody > tr:visible, > tr:visible').removeClass('odd even').filter(':even').addClass('odd').end().filter(':odd').addClass('even');
        },
        update_build_id(ajax, response, status) {
            document.querySelectorAll(`input[name="form_build_id"][value="${response.old}"]`).forEach((item) => {
                item.value = response.new;
            });
        },
        add_css(ajax, response, status) {
            if (typeof response.data === 'string') {
                Drupal.deprecationError({
                    message: 'Passing a string to the Drupal.ajax.add_css() method is deprecated in 10.1.0 and is removed from drupal:11.0.0. See https://www.drupal.org/node/3154948.'
                });
                $('head').prepend(response.data);
                return;
            }
            const allUniqueBundleIds = response.data.map(function(style) {
                const uniqueBundleId = style.href;
                if (!loadjs.isDefined(uniqueBundleId)) loadjs(`css!${style.href}`, uniqueBundleId, {
                    before(path, styleEl) {
                        Object.keys(style).forEach((attributeKey) => {
                            styleEl.setAttribute(attributeKey, style[attributeKey]);
                        });
                    }
                });
                return uniqueBundleId;
            });
            return new Promise((resolve, reject) => {
                loadjs.ready(allUniqueBundleIds, {
                    success() {
                        resolve();
                    },
                    error(depsNotFound) {
                        const message = Drupal.t(`The following files could not be loaded: @dependencies`, {
                            '@dependencies': depsNotFound.join(', ')
                        });
                        reject(message);
                    }
                });
            });
        },
        message(ajax, response) {
            const messages = new Drupal.Message(document.querySelector(response.messageWrapperQuerySelector));
            if (response.clearPrevious) messages.clear();
            messages.add(response.message, response.messageOptions);
        },
        add_js(ajax, response, status) {
            const parentEl = document.querySelector(response.selector || 'body');
            const settings = ajax.settings || drupalSettings;
            const allUniqueBundleIds = response.data.map((script) => {
                const uniqueBundleId = script.src;
                if (!loadjs.isDefined(uniqueBundleId)) loadjs(script.src, uniqueBundleId, {
                    async: false,
                    before(path, scriptEl) {
                        Object.keys(script).forEach((attributeKey) => {
                            scriptEl.setAttribute(attributeKey, script[attributeKey]);
                        });
                        parentEl.appendChild(scriptEl);
                        return false;
                    }
                });
                return uniqueBundleId;
            });
            return new Promise((resolve, reject) => {
                loadjs.ready(allUniqueBundleIds, {
                    success() {
                        Drupal.attachBehaviors(parentEl, settings);
                        resolve();
                    },
                    error(depsNotFound) {
                        const message = Drupal.t(`The following files could not be loaded: @dependencies`, {
                            '@dependencies': depsNotFound.join(', ')
                        });
                        reject(message);
                    }
                });
            });
        },
        scrollTop(ajax, response) {
            const offset = $(response.selector).offset();
            let scrollTarget = response.selector;
            while ($(scrollTarget).scrollTop() === 0 && $(scrollTarget).parent()) scrollTarget = $(scrollTarget).parent();
            if (offset.top - 10 < $(scrollTarget).scrollTop()) scrollTarget.get(0).scrollTo({
                top: offset.top - 10,
                behavior: 'smooth'
            });
        }
    };
    const stopEvent = (xhr, settings) => {
        return (xhr.getResponseHeader('X-Drupal-Ajax-Token') === '1' && settings.isInProgress && settings.isInProgress());
    };
    $.extend(true, $.event.special, {
        ajaxSuccess: {
            trigger(event, xhr, settings) {
                if (stopEvent(xhr, settings)) return false;
            }
        },
        ajaxComplete: {
            trigger(event, xhr, settings) {
                if (stopEvent(xhr, settings)) {
                    $.active++;
                    return false;
                }
            }
        }
    });
})(jQuery, window, Drupal, drupalSettings, loadjs, window.tabbable);;
! function(c, s, n) {
    "use strict";
    var i, r, u = s.blazy || {},
        t = (s.Ajax || {}).prototype;
    t && (t.success = (r = t.success, function(t, e) {
        var o, a = u.init;
        return clearTimeout(i), i = setTimeout(function() {
            t && t.length && (c.once.unload = !0, a && (o = u.options, c.find(n, c.selector(o, !0)) && (c.once.removeSafely("b-root", "body", n), s.attachBehaviors(n.body))), c.trigger("blazy:ajaxSuccess", [a, t, e]))
        }, 100), r.apply(this, arguments)
    }))
}(dBlazy, Drupal, this.document);;