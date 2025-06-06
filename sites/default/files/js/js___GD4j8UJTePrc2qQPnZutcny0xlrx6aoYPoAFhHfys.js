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