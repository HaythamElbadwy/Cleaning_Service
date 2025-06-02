/* @license GPL-2.0-or-later https://www.drupal.org/licensing/faq */
(function ($) { })(jQuery);;
(function ($) {
    'use strict';
    $(document).ready(function () {
        var form = $('.failed-recaptcha-v3');
        if (form.length > 0) {
            const yOffset = -150;
            const y = form.get(0).getBoundingClientRect().top + window.pageYOffset + yOffset;
            window.scrollTo({
                top: y
            });
        }
        AOS.init({
            once: true,
            disable: 'mobile'
        });
    });
})(jQuery);
(function (Drupal, $) {
    Drupal.behaviors.captcha = {
        attach: function () {
            var webformCaptcha = $('.webform-submission-form .captcha');
            if (webformCaptcha.length > 0) webformCaptcha.each(function (i) {
                var webformButton = $(webformCaptcha[i]).prevAll('#edit-actions').first();
                if (webformButton) {
                    webformButton.remove();
                    webformButton.insertAfter(webformCaptcha[i]);
                }
            });
        }
    };
})(Drupal, jQuery);;
! function (e, t, n) {
    function r(e) {
        var t = x.className,
            n = Modernizr._config.classPrefix || "";
        if (S && (t = t.baseVal), Modernizr._config.enableJSClass) {
            var r = new RegExp("(^|\\s)" + n + "no-js(\\s|$)");
            t = t.replace(r, "$1" + n + "js$2");
        }
        Modernizr._config.enableClasses && (t += " " + n + e.join(" " + n), S ? x.className.baseVal = t : x.className = t);
    }

    function i(e, t) {
        return typeof e === t;
    }

    function o() {
        var e, t, n, r, o, s, a;
        for (var l in b)
            if (b.hasOwnProperty(l)) {
                if (e = [], t = b[l], t.name && (e.push(t.name.toLowerCase()), t.options && t.options.aliases && t.options.aliases.length))
                    for (n = 0; n < t.options.aliases.length; n++) e.push(t.options.aliases[n].toLowerCase());
                for (r = i(t.fn, "function") ? t.fn() : t.fn, o = 0; o < e.length; o++) s = e[o], a = s.split("."), 1 === a.length ? Modernizr[a[0]] = r : (!Modernizr[a[0]] || Modernizr[a[0]] instanceof Boolean || (Modernizr[a[0]] = new Boolean(Modernizr[a[0]])), Modernizr[a[0]][a[1]] = r), w.push((r ? "" : "no-") + a.join("-"));
            }
    }

    function s(e, t) {
        if ("object" == typeof e)
            for (var n in e) _(e, n) && s(n, e[n]);
        else {
            e = e.toLowerCase();
            var i = e.split("."),
                o = Modernizr[i[0]];
            if (2 == i.length && (o = o[i[1]]), "undefined" != typeof o) return Modernizr;
            t = "function" == typeof t ? t() : t, 1 == i.length ? Modernizr[i[0]] = t : (!Modernizr[i[0]] || Modernizr[i[0]] instanceof Boolean || (Modernizr[i[0]] = new Boolean(Modernizr[i[0]])), Modernizr[i[0]][i[1]] = t), r([(t && 0 != t ? "" : "no-") + i.join("-")]), Modernizr._trigger(e, t);
        }
        return Modernizr;
    }

    function a(e) {
        return e.replace(/([a-z])-([a-z])/g, function (e, t, n) {
            return t + n.toUpperCase();
        }).replace(/^-/, "");
    }

    function l(e, t) {
        return !!~("" + e).indexOf(t);
    }

    function u() {
        return "function" != typeof t.createElement ? t.createElement(arguments[0]) : S ? t.createElementNS.call(t, "http://www.w3.org/2000/svg", arguments[0]) : t.createElement.apply(t, arguments);
    }

    function f(e, t) {
        return function () {
            return e.apply(t, arguments);
        };
    }

    function A(e, t, n) {
        var r;
        for (var o in e)
            if (e[o] in t) return n === !1 ? e[o] : (r = t[e[o]], i(r, "function") ? f(r, n || t) : r);
        return !1;
    }

    function p(e) {
        return e.replace(/([A-Z])/g, function (e, t) {
            return "-" + t.toLowerCase();
        }).replace(/^ms-/, "-ms-");
    }

    function c(t, n, r) {
        var i;
        if ("getComputedStyle" in e) {
            i = getComputedStyle.call(e, t, n);
            var o = e.console;
            if (null !== i) r && (i = i.getPropertyValue(r));
            else {
                if (o) {
                    var s = o.error ? "error" : "log";
                    o[s].call(o, "getComputedStyle returning null, its possible modernizr test results are inaccurate");
                }
            }
        } else i = !n && t.currentStyle && t.currentStyle[r];
        return i;
    }

    function d() {
        var e = t.body;
        return e || (e = u(S ? "svg" : "body"), e.fake = !0), e;
    }

    function m(e, n, r, i) {
        var o, s, a, l, f = "modernizr",
            A = u("div"),
            p = d();
        if (parseInt(r, 10))
            for (; r--;) a = u("div"), a.id = i ? i[r] : f + (r + 1), A.appendChild(a);
        return o = u("style"), o.type = "text/css", o.id = "s" + f, (p.fake ? p : A).appendChild(o), p.appendChild(A), o.styleSheet ? o.styleSheet.cssText = e : o.appendChild(t.createTextNode(e)), A.id = f, p.fake && (p.style.background = "", p.style.overflow = "hidden", l = x.style.overflow, x.style.overflow = "hidden", x.appendChild(p)), s = n(A, e), p.fake ? (p.parentNode.removeChild(p), x.style.overflow = l, x.offsetHeight) : A.parentNode.removeChild(A), !!s;
    }

    function g(t, r) {
        var i = t.length;
        if ("CSS" in e && "supports" in e.CSS) {
            for (; i--;)
                if (e.CSS.supports(p(t[i]), r)) return !0;
            return !1;
        }
        if ("CSSSupportsRule" in e) {
            for (var o = []; i--;) o.push("(" + p(t[i]) + ":" + r + ")");
            return o = o.join(" or "), m("@supports (" + o + ") { #modernizr { position: absolute; } }", function (e) {
                return "absolute" == c(e, null, "position");
            });
        }
        return n;
    }

    function h(e, t, r, o) {
        function s() {
            A && (delete R.style, delete R.modElem);
        }
        if (o = i(o, "undefined") ? !1 : o, !i(r, "undefined")) {
            var f = g(e, r);
            if (!i(f, "undefined")) return f;
        }
        for (var A, p, c, d, m, h = ["modernizr", "tspan", "samp"]; !R.style && h.length;) A = !0, R.modElem = u(h.shift()), R.style = R.modElem.style;
        for (c = e.length, p = 0; c > p; p++)
            if (d = e[p], m = R.style[d], l(d, "-") && (d = a(d)), R.style[d] !== n) {
                if (o || i(r, "undefined")) return s(), "pfx" == t ? d : !0;
                try {
                    R.style[d] = r;
                } catch (v) { }
                if (R.style[d] != m) return s(), "pfx" == t ? d : !0;
            }
        return s(), !1;
    }

    function v(e, t, n, r, o) {
        var s = e.charAt(0).toUpperCase() + e.slice(1),
            a = (e + " " + Q.join(s + " ") + s).split(" ");
        return i(t, "string") || i(t, "undefined") ? h(a, t, r, o) : (a = (e + " " + U.join(s + " ") + s).split(" "), A(a, t, n));
    }

    function y(e, t, r) {
        return v(e, n, n, t, r);
    }
    var w = [],
        b = [],
        C = {
            _version: "3.6.0",
            _config: {
                classPrefix: "",
                enableClasses: !0,
                enableJSClass: !0,
                usePrefixes: !0
            },
            _q: [],
            on: function (e, t) {
                var n = this;
                setTimeout(function () {
                    t(n[e]);
                }, 0);
            },
            addTest: function (e, t, n) {
                b.push({
                    name: e,
                    fn: t,
                    options: n
                });
            },
            addAsyncTest: function (e) {
                b.push({
                    name: null,
                    fn: e
                });
            }
        },
        Modernizr = function () { };
    Modernizr.prototype = C, Modernizr = new Modernizr();
    var _, x = t.documentElement,
        S = "svg" === x.nodeName.toLowerCase();
    ! function () {
        var e = {}.hasOwnProperty;
        _ = i(e, "undefined") || i(e.call, "undefined") ? function (e, t) {
            return t in e && i(e.constructor.prototype[t], "undefined");
        } : function (t, n) {
            return e.call(t, n);
        };
    }(), C._l = {}, C.on = function (e, t) {
        this._l[e] || (this._l[e] = []), this._l[e].push(t), Modernizr.hasOwnProperty(e) && setTimeout(function () {
            Modernizr._trigger(e, Modernizr[e]);
        }, 0);
    }, C._trigger = function (e, t) {
        if (this._l[e]) {
            var n = this._l[e];
            setTimeout(function () {
                var e, r;
                for (e = 0; e < n.length; e++)(r = n[e])(t);
            }, 0), delete this._l[e];
        }
    }, Modernizr._q.push(function () {
        C.addTest = s;
    }), Modernizr.addAsyncTest(function () {
        function e(e, t, n) {
            function r(t) {
                var r = t && "load" === t.type ? 1 == i.width : !1,
                    o = "webp" === e;
                s(e, o && r ? new Boolean(r) : r), n && n(t);
            }
            var i = new Image();
            i.onerror = r, i.onload = r, i.src = t;
        }
        var t = [{
            uri: "data:image/webp;base64,UklGRiQAAABXRUJQVlA4IBgAAAAwAQCdASoBAAEAAwA0JaQAA3AA/vuUAAA=",
            name: "webp"
        }, {
            uri: "data:image/webp;base64,UklGRkoAAABXRUJQVlA4WAoAAAAQAAAAAAAAAAAAQUxQSAwAAAABBxAR/Q9ERP8DAABWUDggGAAAADABAJ0BKgEAAQADADQlpAADcAD++/1QAA==",
            name: "webp.alpha"
        }, {
            uri: "data:image/webp;base64,UklGRlIAAABXRUJQVlA4WAoAAAASAAAAAAAAAAAAQU5JTQYAAAD/////AABBTk1GJgAAAAAAAAAAAAAAAAAAAGQAAABWUDhMDQAAAC8AAAAQBxAREYiI/gcA",
            name: "webp.animation"
        }, {
            uri: "data:image/webp;base64,UklGRh4AAABXRUJQVlA4TBEAAAAvAAAAAAfQ//73v/+BiOh/AAA=",
            name: "webp.lossless"
        }],
            n = t.shift();
        e(n.name, n.uri, function (n) {
            if (n && "load" === n.type)
                for (var r = 0; r < t.length; r++) e(t[r].name, t[r].uri);
        });
    });
    var B = "Moz O ms Webkit",
        Q = C._config.usePrefixes ? B.split(" ") : [];
    C._cssomPrefixes = Q;
    var T = function (t) {
        var r, i = prefixes.length,
            o = e.CSSRule;
        if ("undefined" == typeof o) return n;
        if (!t) return !1;
        if (t = t.replace(/^@/, ""), r = t.replace(/-/g, "_").toUpperCase() + "_RULE", r in o) return "@" + t;
        for (var s = 0; i > s; s++) {
            var a = prefixes[s],
                l = a.toUpperCase() + "_" + r;
            if (l in o) return "@-" + a.toLowerCase() + "-" + t;
        }
        return !1;
    };
    C.atRule = T;
    var U = C._config.usePrefixes ? B.toLowerCase().split(" ") : [];
    C._domPrefixes = U;
    var k = {
        elem: u("modernizr")
    };
    Modernizr._q.push(function () {
        delete k.elem;
    });
    var R = {
        style: k.elem.style
    };
    Modernizr._q.unshift(function () {
        delete R.style;
    }), C.testAllProps = v, C.testAllProps = y, Modernizr.addTest("cssgridlegacy", y("grid-columns", "10px", !0)), Modernizr.addTest("cssgrid", y("grid-template-rows", "none", !0));
    var E = C.prefixed = function (e, t, n) {
        return 0 === e.indexOf("@") ? T(e) : (-1 != e.indexOf("-") && (e = a(e)), t ? v(e, t, n) : v(e, "pfx"));
    };
    Modernizr.addTest("objectfit", !!E("objectFit"), {
        aliases: ["object-fit"]
    });
    var P = u("input"),
        j = "search tel url email datetime date month week time datetime-local number range color".split(" "),
        V = {};
    Modernizr.inputtypes = function (e) {
        for (var r, i, o, s = e.length, a = "1)", l = 0; s > l; l++) P.setAttribute("type", r = e[l]), o = "text" !== P.type && "style" in P, o && (P.value = a, P.style.cssText = "position:absolute;visibility:hidden;", /^range$/.test(r) && P.style.WebkitAppearance !== n ? (x.appendChild(P), i = t.defaultView, o = i.getComputedStyle && "textfield" !== i.getComputedStyle(P, null).WebkitAppearance && 0 !== P.offsetHeight, x.removeChild(P)) : /^(search|tel)$/.test(r) || (o = /^(url|email)$/.test(r) ? P.checkValidity && P.checkValidity() === !1 : P.value != a)), V[e[l]] = !!o;
        return V;
    }(j), o(), r(w), delete C.addTest, delete C.addAsyncTest;
    for (var z = 0; z < Modernizr._q.length; z++) Modernizr._q[z]();
    e.Modernizr = Modernizr;
}(window, document);;
! function (a, b) {
    "function" == typeof define && define.amd ? define(["jquery"], b) : "object" == typeof exports ? module.exports = b(require("jquery")) : a.lightbox = b(a.jQuery);
}(this, function (a) {
    function b(b) {
        this.album = [], this.currentImageIndex = void 0, this.init(), this.options = a.extend({}, this.constructor.defaults), this.option(b);
    }
    return b.defaults = {
        albumLabel: "Image %1 of %2",
        alwaysShowNavOnTouchDevices: !1,
        fadeDuration: 600,
        fitImagesInViewport: !0,
        imageFadeDuration: 600,
        positionFromTop: 50,
        resizeDuration: 700,
        showImageNumberLabel: !0,
        wrapAround: !1,
        disableScrolling: !1,
        sanitizeTitle: !1
    }, b.prototype.option = function (b) {
        a.extend(this.options, b);
    }, b.prototype.imageCountLabel = function (a, b) {
        return this.options.albumLabel.replace(/%1/g, a).replace(/%2/g, b);
    }, b.prototype.init = function () {
        var b = this;
        a(document).ready(function () {
            b.enable(), b.build();
        });
    }, b.prototype.enable = function () {
        var b = this;
        a("body").on("click", "a[rel^=lightbox], area[rel^=lightbox], a[data-lightbox], area[data-lightbox]", function (c) {
            return b.start(a(c.currentTarget)), !1;
        });
    }, b.prototype.build = function () {
        if (!(a("#lightbox").length > 0)) {
            var b = this;
            a('<div id="lightboxOverlay" tabindex="-1" class="lightboxOverlay"></div><div id="lightbox" tabindex="-1" class="lightbox"><div class="lb-outerContainer"><div class="lb-container"><img class="lb-image" src="data:image/gif;base64,R0lGODlhAQABAIAAAP///wAAACH5BAEAAAAALAAAAAABAAEAAAICRAEAOw==" alt=""/><div class="lb-nav"><a class="lb-prev" aria-label="Previous image" href="" ></a><a class="lb-next" aria-label="Next image" href="" ></a></div><div class="lb-loader"><a class="lb-cancel"></a></div></div></div><div class="lb-dataContainer"><div class="lb-data"><div class="lb-details"><span class="lb-caption"></span><span class="lb-number"></span></div><div class="lb-closeContainer"><a class="lb-close"></a></div></div></div></div>').appendTo(a("body")), this.$lightbox = a("#lightbox"), this.$overlay = a("#lightboxOverlay"), this.$outerContainer = this.$lightbox.find(".lb-outerContainer"), this.$container = this.$lightbox.find(".lb-container"), this.$image = this.$lightbox.find(".lb-image"), this.$nav = this.$lightbox.find(".lb-nav"), this.containerPadding = {
                top: parseInt(this.$container.css("padding-top"), 10),
                right: parseInt(this.$container.css("padding-right"), 10),
                bottom: parseInt(this.$container.css("padding-bottom"), 10),
                left: parseInt(this.$container.css("padding-left"), 10)
            }, this.imageBorderWidth = {
                top: parseInt(this.$image.css("border-top-width"), 10),
                right: parseInt(this.$image.css("border-right-width"), 10),
                bottom: parseInt(this.$image.css("border-bottom-width"), 10),
                left: parseInt(this.$image.css("border-left-width"), 10)
            }, this.$overlay.hide().on("click", function () {
                return b.end(), !1;
            }), this.$lightbox.hide().on("click", function (c) {
                "lightbox" === a(c.target).attr("id") && b.end();
            }), this.$outerContainer.on("click", function (c) {
                return "lightbox" === a(c.target).attr("id") && b.end(), !1;
            }), this.$lightbox.find(".lb-prev").on("click", function () {
                return 0 === b.currentImageIndex ? b.changeImage(b.album.length - 1) : b.changeImage(b.currentImageIndex - 1), !1;
            }), this.$lightbox.find(".lb-next").on("click", function () {
                return b.currentImageIndex === b.album.length - 1 ? b.changeImage(0) : b.changeImage(b.currentImageIndex + 1), !1;
            }), this.$nav.on("mousedown", function (a) {
                3 === a.which && (b.$nav.css("pointer-events", "none"), b.$lightbox.one("contextmenu", function () {
                    setTimeout(function () {
                        this.$nav.css("pointer-events", "auto");
                    }.bind(b), 0);
                }));
            }), this.$lightbox.find(".lb-loader, .lb-close").on("click", function () {
                return b.end(), !1;
            });
        }
    }, b.prototype.start = function (b) {
        function c(a) {
            d.album.push({
                alt: a.attr("data-alt"),
                link: a.attr("href"),
                title: a.attr("data-title") || a.attr("title")
            });
        }
        var d = this,
            e = a(window);
        e.on("resize", a.proxy(this.sizeOverlay, this)), this.sizeOverlay(), this.album = [];
        var f, g = 0,
            h = b.attr("data-lightbox");
        if (h) {
            f = a(b.prop("tagName") + '[data-lightbox="' + h + '"]');
            for (var i = 0; i < f.length; i = ++i) c(a(f[i])), f[i] === b[0] && (g = i);
        } else if ("lightbox" === b.attr("rel")) c(b);
        else {
            f = a(b.prop("tagName") + '[rel="' + b.attr("rel") + '"]');
            for (var j = 0; j < f.length; j = ++j) c(a(f[j])), f[j] === b[0] && (g = j);
        }
        var k = e.scrollTop() + this.options.positionFromTop,
            l = e.scrollLeft();
        this.$lightbox.css({
            top: k + "px",
            left: l + "px"
        }).fadeIn(this.options.fadeDuration), this.options.disableScrolling && a("body").addClass("lb-disable-scrolling"), this.changeImage(g);
    }, b.prototype.changeImage = function (b) {
        var c = this,
            d = this.album[b].link,
            e = d.split(".").slice(-1)[0],
            f = this.$lightbox.find(".lb-image");
        this.disableKeyboardNav(), this.$overlay.fadeIn(this.options.fadeDuration), a(".lb-loader").fadeIn("slow"), this.$lightbox.find(".lb-image, .lb-nav, .lb-prev, .lb-next, .lb-dataContainer, .lb-numbers, .lb-caption").hide(), this.$outerContainer.addClass("animating");
        var g = new Image();
        g.onload = function () {
            var h, i, j, k, l, m;
            f.attr({
                alt: c.album[b].alt,
                src: d
            }), a(g), f.width(g.width), f.height(g.height), m = a(window).width(), l = a(window).height(), k = m - c.containerPadding.left - c.containerPadding.right - c.imageBorderWidth.left - c.imageBorderWidth.right - 20, j = l - c.containerPadding.top - c.containerPadding.bottom - c.imageBorderWidth.top - c.imageBorderWidth.bottom - c.options.positionFromTop - 70, "svg" === e && (0 !== g.width && 0 !== g.height || (f.width(k), f.height(j))), c.options.fitImagesInViewport ? (c.options.maxWidth && c.options.maxWidth < k && (k = c.options.maxWidth), c.options.maxHeight && c.options.maxHeight < j && (j = c.options.maxHeight)) : (k = c.options.maxWidth || g.width || k, j = c.options.maxHeight || g.height || j), (g.width > k || g.height > j) && (g.width / k > g.height / j ? (i = k, h = parseInt(g.height / (g.width / i), 10), f.width(i), f.height(h)) : (h = j, i = parseInt(g.width / (g.height / h), 10), f.width(i), f.height(h))), c.sizeContainer(f.width(), f.height());
        }, g.src = this.album[b].link, this.currentImageIndex = b;
    }, b.prototype.sizeOverlay = function () {
        var b = this;
        setTimeout(function () {
            b.$overlay.width(a(document).width()).height(a(document).height());
        }, 0);
    }, b.prototype.sizeContainer = function (a, b) {
        function c() {
            d.$lightbox.find(".lb-dataContainer").width(g), d.$lightbox.find(".lb-prevLink").height(h), d.$lightbox.find(".lb-nextLink").height(h), d.$overlay.focus(), d.showImage();
        }
        var d = this,
            e = this.$outerContainer.outerWidth(),
            f = this.$outerContainer.outerHeight(),
            g = a + this.containerPadding.left + this.containerPadding.right + this.imageBorderWidth.left + this.imageBorderWidth.right,
            h = b + this.containerPadding.top + this.containerPadding.bottom + this.imageBorderWidth.top + this.imageBorderWidth.bottom;
        e !== g || f !== h ? this.$outerContainer.animate({
            width: g,
            height: h
        }, this.options.resizeDuration, "swing", function () {
            c();
        }) : c();
    }, b.prototype.showImage = function () {
        this.$lightbox.find(".lb-loader").stop(!0).hide(), this.$lightbox.find(".lb-image").fadeIn(this.options.imageFadeDuration), this.updateNav(), this.updateDetails(), this.preloadNeighboringImages(), this.enableKeyboardNav();
    }, b.prototype.updateNav = function () {
        var a = !1;
        try {
            document.createEvent("TouchEvent"), a = !!this.options.alwaysShowNavOnTouchDevices;
        } catch (a) { }
        this.$lightbox.find(".lb-nav").show(), this.album.length > 1 && (this.options.wrapAround ? (a && this.$lightbox.find(".lb-prev, .lb-next").css("opacity", "1"), this.$lightbox.find(".lb-prev, .lb-next").show()) : (this.currentImageIndex > 0 && (this.$lightbox.find(".lb-prev").show(), a && this.$lightbox.find(".lb-prev").css("opacity", "1")), this.currentImageIndex < this.album.length - 1 && (this.$lightbox.find(".lb-next").show(), a && this.$lightbox.find(".lb-next").css("opacity", "1"))));
    }, b.prototype.updateDetails = function () {
        var a = this;
        if (void 0 !== this.album[this.currentImageIndex].title && "" !== this.album[this.currentImageIndex].title) {
            var b = this.$lightbox.find(".lb-caption");
            this.options.sanitizeTitle ? b.text(this.album[this.currentImageIndex].title) : b.html(this.album[this.currentImageIndex].title), b.fadeIn("fast");
        }
        if (this.album.length > 1 && this.options.showImageNumberLabel) {
            var c = this.imageCountLabel(this.currentImageIndex + 1, this.album.length);
            this.$lightbox.find(".lb-number").text(c).fadeIn("fast");
        } else this.$lightbox.find(".lb-number").hide();
        this.$outerContainer.removeClass("animating"), this.$lightbox.find(".lb-dataContainer").fadeIn(this.options.resizeDuration, function () {
            return a.sizeOverlay();
        });
    }, b.prototype.preloadNeighboringImages = function () {
        if (this.album.length > this.currentImageIndex + 1) (new Image()).src = this.album[this.currentImageIndex + 1].link;
        if (this.currentImageIndex > 0) (new Image()).src = this.album[this.currentImageIndex - 1].link;
    }, b.prototype.enableKeyboardNav = function () {
        this.$lightbox.on("keyup.keyboard", a.proxy(this.keyboardAction, this)), this.$overlay.on("keyup.keyboard", a.proxy(this.keyboardAction, this));
    }, b.prototype.disableKeyboardNav = function () {
        this.$lightbox.off(".keyboard"), this.$overlay.off(".keyboard");
    }, b.prototype.keyboardAction = function (a) {
        var b = a.keyCode;
        27 === b ? (a.stopPropagation(), this.end()) : 37 === b ? 0 !== this.currentImageIndex ? this.changeImage(this.currentImageIndex - 1) : this.options.wrapAround && this.album.length > 1 && this.changeImage(this.album.length - 1) : 39 === b && (this.currentImageIndex !== this.album.length - 1 ? this.changeImage(this.currentImageIndex + 1) : this.options.wrapAround && this.album.length > 1 && this.changeImage(0));
    }, b.prototype.end = function () {
        this.disableKeyboardNav(), a(window).off("resize", this.sizeOverlay), this.$lightbox.fadeOut(this.options.fadeDuration), this.$overlay.fadeOut(this.options.fadeDuration), this.options.disableScrolling && a("body").removeClass("lb-disable-scrolling");
    }, new b();
});;
(function ($) {
    $('body').on('click', '.cta-menu-toggle', function () {
        $('.cta-flex').toggleClass('active');
        $('.cta-menu-toggle').toggleClass('active');
    });
})(jQuery);

function handleIntersection(entries, observer) {
    entries.forEach((entry) => {
        if (entry.intersectionRatio > 0) {
            const visibleItems = Array.from(document.querySelectorAll('.entry__grid-item, .views-row,  .box__content, .slide-inner, .entry-focus__blocks, #block-topslider, .content-sidebar-second, .content-content, #block-ewcustom-herovideo1, #block-ewcustom-reviews2, #block-ewcustom-googlemaps, #block-footer3')).filter((item) => item.getBoundingClientRect().top < window.innerHeight);
            if (visibleItems.length === 1) {
                entry.target.classList.add('fade-in');
                observer.unobserve(entry.target);
            } else {
                if (visibleItems.length > 1) visibleItems.forEach((item, index) => {
                    setTimeout(() => {
                        item.classList.add('fade-in');
                    }, index * 100);
                });
            }
        }
    });
}
const options = {
    root: null,
    rootMargin: '0px',
    threshold: 0.05
};
const observer = new IntersectionObserver(handleIntersection, options);
const gridItems = document.querySelectorAll('.entry__grid-item, .views-row, .box__content, .slide-inner, .entry-focus__blocks, #block-topslider, .content-sidebar-second, .content-content, #block-ewcustom-herovideo1, #block-ewcustom-reviews2, #block-ewcustom-googlemaps, #block-footer3');
gridItems.forEach((item) => {
    observer.observe(item);
});
document.addEventListener("DOMContentLoaded", function () {
    let paragraphs = document.querySelectorAll("p");
    paragraphs.forEach(function (p) {
        if (p.textContent.trim() === "" && !p.querySelector("img")) p.remove();
    });
});
(function ($) {
    $(document).ready(function ($) {
        $('.counter').counterUp({
            delay: 10,
            time: 1300
        });
        $('.counter2').counterUp({
            delay: 10,
            time: 1000
        });
    });
})(jQuery);
var baseUrl = "https://online.bookvisit.com/v2/widget/getwidget";
(function ($) {
    $.ajax({
        dataType: 'json',
        url: baseUrl + '?channelId=088f1b87-dbd4-4fa0-84de-9907010972fe&openOption=redirect&culture=da-DK&layout=StandardWideAlternative&containerId=widgetContainer&displayPromoCode=false&displayCorpCode=false&displayIATACode=false&displayCalendarStartsAtFirstAvailableDay=false&currency=DKK',
        xhrFields: {
            withCredentials: true
        },
        success: function (data) {
            $('#widgetContainer').html(data.Widget);
        }
    });
})(jQuery);
var baseUrl = "https://online.bookvisit.com/v2/widget/getwidget";
(function ($) {
    $.ajax({
        dataType: 'json',
        url: baseUrl + '?channelId=4bbd2048-c2ab-4fd6-bdd9-e185467b3349&openOption=redirect&culture=da-DK&layout=StandardWideAlternative&containerId=widgetContainer02&displayPromoCode=false&displayCorpCode=false&displayIATACode=false&displayCalendarStartsAtFirstAvailableDay=false&currency=DKK',
        xhrFields: {
            withCredentials: true
        },
        success: function (data) {
            $('#widgetContainer02').html(data.Widget);
        }
    });
})(jQuery);
! function () {
    "use strict";

    function t(o) {
        if (!o) throw new Error("No options passed to Waypoint constructor");
        if (!o.element) throw new Error("No element option passed to Waypoint constructor");
        if (!o.handler) throw new Error("No handler option passed to Waypoint constructor");
        this.key = "waypoint-" + e, this.options = t.Adapter.extend({}, t.defaults, o), this.element = this.options.element, this.adapter = new t.Adapter(this.element), this.callback = o.handler, this.axis = this.options.horizontal ? "horizontal" : "vertical", this.enabled = this.options.enabled, this.triggerPoint = null, this.group = t.Group.findOrCreate({
            name: this.options.group,
            axis: this.axis
        }), this.context = t.Context.findOrCreateByElement(this.options.context), t.offsetAliases[this.options.offset] && (this.options.offset = t.offsetAliases[this.options.offset]), this.group.add(this), this.context.add(this), i[this.key] = this, e += 1;
    }
    var e = 0,
        i = {};
    t.prototype.queueTrigger = function (t) {
        this.group.queueTrigger(this, t);
    }, t.prototype.trigger = function (t) {
        this.enabled && this.callback && this.callback.apply(this, t);
    }, t.prototype.destroy = function () {
        this.context.remove(this), this.group.remove(this), delete i[this.key];
    }, t.prototype.disable = function () {
        return this.enabled = !1, this;
    }, t.prototype.enable = function () {
        return this.context.refresh(), this.enabled = !0, this;
    }, t.prototype.next = function () {
        return this.group.next(this);
    }, t.prototype.previous = function () {
        return this.group.previous(this);
    }, t.invokeAll = function (t) {
        var e = [];
        for (var o in i) e.push(i[o]);
        for (var n = 0, r = e.length; r > n; n++) e[n][t]();
    }, t.destroyAll = function () {
        t.invokeAll("destroy");
    }, t.disableAll = function () {
        t.invokeAll("disable");
    }, t.enableAll = function () {
        t.invokeAll("enable");
    }, t.refreshAll = function () {
        t.Context.refreshAll();
    }, t.viewportHeight = function () {
        return window.innerHeight || document.documentElement.clientHeight;
    }, t.viewportWidth = function () {
        return document.documentElement.clientWidth;
    }, t.adapters = [], t.defaults = {
        context: window,
        continuous: !0,
        enabled: !0,
        group: "default",
        horizontal: !1,
        offset: 0
    }, t.offsetAliases = {
        "bottom-in-view": function () {
            return this.context.innerHeight() - this.adapter.outerHeight();
        },
        "right-in-view": function () {
            return this.context.innerWidth() - this.adapter.outerWidth();
        }
    }, window.Waypoint = t;
}(),
    function () {
        "use strict";

        function t(t) {
            window.setTimeout(t, 1e3 / 60);
        }

        function e(t) {
            this.element = t, this.Adapter = n.Adapter, this.adapter = new this.Adapter(t), this.key = "waypoint-context-" + i, this.didScroll = !1, this.didResize = !1, this.oldScroll = {
                x: this.adapter.scrollLeft(),
                y: this.adapter.scrollTop()
            }, this.waypoints = {
                vertical: {},
                horizontal: {}
            }, t.waypointContextKey = this.key, o[t.waypointContextKey] = this, i += 1, this.createThrottledScrollHandler(), this.createThrottledResizeHandler();
        }
        var i = 0,
            o = {},
            n = window.Waypoint,
            r = window.onload;
        e.prototype.add = function (t) {
            var e = t.options.horizontal ? "horizontal" : "vertical";
            this.waypoints[e][t.key] = t, this.refresh();
        }, e.prototype.checkEmpty = function () {
            var t = this.Adapter.isEmptyObject(this.waypoints.horizontal),
                e = this.Adapter.isEmptyObject(this.waypoints.vertical);
            t && e && (this.adapter.off(".waypoints"), delete o[this.key]);
        }, e.prototype.createThrottledResizeHandler = function () {
            function t() {
                e.handleResize(), e.didResize = !1;
            }
            var e = this;
            this.adapter.on("resize.waypoints", function () {
                e.didResize || (e.didResize = !0, n.requestAnimationFrame(t));
            });
        }, e.prototype.createThrottledScrollHandler = function () {
            function t() {
                e.handleScroll(), e.didScroll = !1;
            }
            var e = this;
            this.adapter.on("scroll.waypoints", function () {
                (!e.didScroll || n.isTouch) && (e.didScroll = !0, n.requestAnimationFrame(t));
            });
        }, e.prototype.handleResize = function () {
            n.Context.refreshAll();
        }, e.prototype.handleScroll = function () {
            var t = {},
                e = {
                    horizontal: {
                        newScroll: this.adapter.scrollLeft(),
                        oldScroll: this.oldScroll.x,
                        forward: "right",
                        backward: "left"
                    },
                    vertical: {
                        newScroll: this.adapter.scrollTop(),
                        oldScroll: this.oldScroll.y,
                        forward: "down",
                        backward: "up"
                    }
                };
            for (var i in e) {
                var o = e[i],
                    n = o.newScroll > o.oldScroll,
                    r = n ? o.forward : o.backward;
                for (var s in this.waypoints[i]) {
                    var a = this.waypoints[i][s],
                        l = o.oldScroll < a.triggerPoint,
                        h = o.newScroll >= a.triggerPoint,
                        p = l && h,
                        u = !l && !h;
                    (p || u) && (a.queueTrigger(r), t[a.group.id] = a.group);
                }
            }
            for (var c in t) t[c].flushTriggers();
            this.oldScroll = {
                x: e.horizontal.newScroll,
                y: e.vertical.newScroll
            };
        }, e.prototype.innerHeight = function () {
            return this.element == this.element.window ? n.viewportHeight() : this.adapter.innerHeight();
        }, e.prototype.remove = function (t) {
            delete this.waypoints[t.axis][t.key], this.checkEmpty();
        }, e.prototype.innerWidth = function () {
            return this.element == this.element.window ? n.viewportWidth() : this.adapter.innerWidth();
        }, e.prototype.destroy = function () {
            var t = [];
            for (var e in this.waypoints)
                for (var i in this.waypoints[e]) t.push(this.waypoints[e][i]);
            for (var o = 0, n = t.length; n > o; o++) t[o].destroy();
        }, e.prototype.refresh = function () {
            var t, e = this.element == this.element.window,
                i = e ? void 0 : this.adapter.offset(),
                o = {};
            this.handleScroll(), t = {
                horizontal: {
                    contextOffset: e ? 0 : i.left,
                    contextScroll: e ? 0 : this.oldScroll.x,
                    contextDimension: this.innerWidth(),
                    oldScroll: this.oldScroll.x,
                    forward: "right",
                    backward: "left",
                    offsetProp: "left"
                },
                vertical: {
                    contextOffset: e ? 0 : i.top,
                    contextScroll: e ? 0 : this.oldScroll.y,
                    contextDimension: this.innerHeight(),
                    oldScroll: this.oldScroll.y,
                    forward: "down",
                    backward: "up",
                    offsetProp: "top"
                }
            };
            for (var r in t) {
                var s = t[r];
                for (var a in this.waypoints[r]) {
                    var l, h, p, u, c, d = this.waypoints[r][a],
                        f = d.options.offset,
                        w = d.triggerPoint,
                        y = 0,
                        g = null == w;
                    d.element !== d.element.window && (y = d.adapter.offset()[s.offsetProp]), "function" == typeof f ? f = f.apply(d) : "string" == typeof f && (f = parseFloat(f), d.options.offset.indexOf("%") > -1 && (f = Math.ceil(s.contextDimension * f / 100))), l = s.contextScroll - s.contextOffset, d.triggerPoint = y + l - f, h = w < s.oldScroll, p = d.triggerPoint >= s.oldScroll, u = h && p, c = !h && !p, !g && u ? (d.queueTrigger(s.backward), o[d.group.id] = d.group) : !g && c ? (d.queueTrigger(s.forward), o[d.group.id] = d.group) : g && s.oldScroll >= d.triggerPoint && (d.queueTrigger(s.forward), o[d.group.id] = d.group);
                }
            }
            return n.requestAnimationFrame(function () {
                for (var t in o) o[t].flushTriggers();
            }), this;
        }, e.findOrCreateByElement = function (t) {
            return e.findByElement(t) || new e(t);
        }, e.refreshAll = function () {
            for (var t in o) o[t].refresh();
        }, e.findByElement = function (t) {
            return o[t.waypointContextKey];
        }, window.onload = function () {
            r && r(), e.refreshAll();
        }, n.requestAnimationFrame = function (e) {
            var i = window.requestAnimationFrame || window.mozRequestAnimationFrame || window.webkitRequestAnimationFrame || t;
            i.call(window, e);
        }, n.Context = e;
    }(),
    function () {
        "use strict";

        function t(t, e) {
            return t.triggerPoint - e.triggerPoint;
        }

        function e(t, e) {
            return e.triggerPoint - t.triggerPoint;
        }

        function i(t) {
            this.name = t.name, this.axis = t.axis, this.id = this.name + "-" + this.axis, this.waypoints = [], this.clearTriggerQueues(), o[this.axis][this.name] = this;
        }
        var o = {
            vertical: {},
            horizontal: {}
        },
            n = window.Waypoint;
        i.prototype.add = function (t) {
            this.waypoints.push(t);
        }, i.prototype.clearTriggerQueues = function () {
            this.triggerQueues = {
                up: [],
                down: [],
                left: [],
                right: []
            };
        }, i.prototype.flushTriggers = function () {
            for (var i in this.triggerQueues) {
                var o = this.triggerQueues[i],
                    n = "up" === i || "left" === i;
                o.sort(n ? e : t);
                for (var r = 0, s = o.length; s > r; r += 1) {
                    var a = o[r];
                    (a.options.continuous || r === o.length - 1) && a.trigger([i]);
                }
            }
            this.clearTriggerQueues();
        }, i.prototype.next = function (e) {
            this.waypoints.sort(t);
            var i = n.Adapter.inArray(e, this.waypoints),
                o = i === this.waypoints.length - 1;
            return o ? null : this.waypoints[i + 1];
        }, i.prototype.previous = function (e) {
            this.waypoints.sort(t);
            var i = n.Adapter.inArray(e, this.waypoints);
            return i ? this.waypoints[i - 1] : null;
        }, i.prototype.queueTrigger = function (t, e) {
            this.triggerQueues[e].push(t);
        }, i.prototype.remove = function (t) {
            var e = n.Adapter.inArray(t, this.waypoints);
            e > -1 && this.waypoints.splice(e, 1);
        }, i.prototype.first = function () {
            return this.waypoints[0];
        }, i.prototype.last = function () {
            return this.waypoints[this.waypoints.length - 1];
        }, i.findOrCreate = function (t) {
            return o[t.axis][t.name] || new i(t);
        }, n.Group = i;
    }(),
    function () {
        "use strict";

        function t(t) {
            this.$element = e(t);
        }
        var e = window.jQuery,
            i = window.Waypoint;
        e.each(["innerHeight", "innerWidth", "off", "offset", "on", "outerHeight", "outerWidth", "scrollLeft", "scrollTop"], function (e, i) {
            t.prototype[i] = function () {
                var t = Array.prototype.slice.call(arguments);
                return this.$element[i].apply(this.$element, t);
            };
        }), e.each(["extend", "inArray", "isEmptyObject"], function (i, o) {
            t[o] = e[o];
        }), i.adapters.push({
            name: "jquery",
            Adapter: t
        }), i.Adapter = t;
    }(),
    function () {
        "use strict";

        function t(t) {
            return function () {
                var i = [],
                    o = arguments[0];
                return t.isFunction(arguments[0]) && (o = t.extend({}, arguments[1]), o.handler = arguments[0]), this.each(function () {
                    var n = t.extend({}, o, {
                        element: this
                    });
                    "string" == typeof n.context && (n.context = t(this).closest(n.context)[0]), i.push(new e(n));
                }), i;
            };
        }
        var e = window.Waypoint;
        window.jQuery && (window.jQuery.fn.waypoint = t(window.jQuery)), window.Zepto && (window.Zepto.fn.waypoint = t(window.Zepto));
    }();
(function ($) {
    "use strict";
    $.fn.counterUp = function (options) {
        var settings = $.extend({
            time: 400,
            delay: 10,
            offset: 100,
            beginAt: 0,
            formatter: false,
            context: "window",
            callback: function () { }
        }, options),
            s;
        return this.each(function () {
            var $this = $(this),
                counter = {
                    time: $(this).data("counterup-time") || settings.time,
                    delay: $(this).data("counterup-delay") || settings.delay,
                    offset: $(this).data("counterup-offset") || settings.offset,
                    beginAt: $(this).data("counterup-beginat") || settings.beginAt,
                    context: $(this).data("counterup-context") || settings.context
                };
            var counterUpper = function () {
                var nums = [];
                var divisions = counter.time / counter.delay;
                var num = $(this).attr("data-num") ? $(this).attr("data-num") : $this.text();
                var isComma = /[0-9]+,[0-9]+/.test(num);
                num = num.replace(/,/g, "");
                var decimalPlaces = (num.split(".")[1] || []).length;
                if (counter.beginAt > num) counter.beginAt = num;
                var isTime = /[0-9]+:[0-9]+:[0-9]+/.test(num);
                if (isTime) {
                    var times = num.split(":"),
                        m = 1;
                    s = 0;
                    while (times.length > 0) {
                        s += m * parseInt(times.pop(), 10);
                        m *= 60;
                    }
                }
                for (var i = divisions; i >= counter.beginAt / num * divisions; i--) {
                    var newNum = parseFloat(num / divisions * i).toFixed(decimalPlaces);
                    if (isTime) {
                        newNum = parseInt(s / divisions * i);
                        var hours = parseInt(newNum / 3600) % 24;
                        var minutes = parseInt(newNum / 60) % 60;
                        var seconds = parseInt(newNum % 60, 10);
                        newNum = (hours < 10 ? "0" + hours : hours) + ":" + (minutes < 10 ? "0" + minutes : minutes) + ":" + (seconds < 10 ? "0" + seconds : seconds);
                    }
                    if (isComma)
                        while (/(\d+)(\d{3})/.test(newNum.toString())) newNum = newNum.toString().replace(/(\d+)(\d{3})/, "$1" + "," + "$2");
                    if (settings.formatter) newNum = settings.formatter.call(this, newNum);
                    nums.unshift(newNum);
                }
                $this.data("counterup-nums", nums);
                $this.text(counter.beginAt);
                var f = function () {
                    if (!$this.data("counterup-nums")) {
                        settings.callback.call(this);
                        return;
                    }
                    $this.html($this.data("counterup-nums").shift());
                    if ($this.data("counterup-nums").length) setTimeout($this.data("counterup-func"), counter.delay);
                    else {
                        $this.data("counterup-nums", null);
                        $this.data("counterup-func", null);
                        settings.callback.call(this);
                    }
                };
                $this.data("counterup-func", f);
                setTimeout($this.data("counterup-func"), counter.delay);
            };
            $this.waypoint(function (direction) {
                counterUpper();
                this.destroy();
            }, {
                offset: counter.offset + "%",
                context: counter.context
            });
        });
    };
})(jQuery);
document.addEventListener("DOMContentLoaded", function () {
    var referenceLinks = document.querySelectorAll('.reference-link a');
    referenceLinks.forEach(function (link) {
        link.setAttribute('target', '_blank');
    });
});;
(function ($, Drupal) {
    'use strict';
    $(document).ready(function () {
        $('input').on('focus', function () {
            var head = document.getElementsByTagName('head')[0];
            var script = document.createElement('script');
            script.type = 'text/javascript';
            var site_key = $('.recaptcha-v3-token:first').data('recaptchaV3SiteKey');
            script.src = 'https://www.google.com/recaptcha/api.js?onload=renderReCaptcha&render=' + site_key;
            head.appendChild(script);
        });

        function renderReCaptcha() {
            $('.recaptcha-v3-token').each(function () {
                var $token_element = $(this);
                grecaptcha.ready(function () {
                    grecaptcha.execute($token_element.data('recaptchaV3SiteKey'), {
                        action: $token_element.data('recaptchaV3Action')
                    }).then(function (token) {
                        $token_element.val(token);
                        $token_element.trigger('change');
                    });
                });
            });
        }
        window.renderReCaptcha = renderReCaptcha;
    });
})(jQuery, Drupal);;
(function ($, Drupal, once) {
    'use strict';
    var hasLocalStorage = (function () {
        try {
            localStorage.setItem('webform', 'webform');
            localStorage.removeItem('webform');
            return true;
        } catch (e) {
            return false;
        }
    }());
    Drupal.behaviors.webformDetailsSave = {
        attach: function (context) {
            if (!hasLocalStorage) return;
            $(once('webform-details-summary-save', 'details > summary', context)).on('click', function () {
                var $details = $(this).parent();
                if ($details[0].hasAttribute('data-webform-details-nosave')) return;
                var name = Drupal.webformDetailsSaveGetName($details);
                if (!name) return;
                var open = ($details.attr('open') !== 'open') ? '1' : '0';
                localStorage.setItem(name, open);
            });
            $(once('webform-details-save', 'details', context)).each(function () {
                var $details = $(this);
                var name = Drupal.webformDetailsSaveGetName($details);
                if (!name) return;
                var open = localStorage.getItem(name);
                if (open === null) return;
                if (open === '1') $details.attr('open', 'open');
                else $details.removeAttr('open');
            });
        }
    };
    Drupal.webformDetailsSaveGetName = function ($details) {
        if (!hasLocalStorage) return '';
        if ($details.hasClass('vertical-tabs__pane')) return '';
        var webformId = $details.attr('data-webform-element-id');
        if (webformId) return 'Drupal.webform.' + webformId.replace('--', '.');
        var detailsId = $details.attr('id');
        if (!detailsId) return '';
        var $form = $details.parents('form');
        if (!$form.length || !$form.attr('id')) return '';
        var formId = $form.attr('id');
        if (!formId) return '';
        formId = formId.replace(/--.+?$/, '').replace(/-/g, '_');
        detailsId = detailsId.replace(/--.+?$/, '').replace(/-/g, '_');
        return 'Drupal.webform.' + formId + '.' + detailsId;
    };
})(jQuery, Drupal, once);;
(function ($, Drupal, once) {
    'use strict';
    Drupal.webform = Drupal.webform || {};
    Drupal.webform.detailsToggle = Drupal.webform.detailsToggle || {};
    Drupal.webform.detailsToggle.options = Drupal.webform.detailsToggle.options || {};
    Drupal.behaviors.webformDetailsToggle = {
        attach: function (context) {
            $(once('webform-details-toggle', '.js-webform-details-toggle', context)).each(function () {
                var $form = $(this);
                var $tabs = $form.find('.webform-tabs');
                var selector = ($tabs.length) ? '.webform-tab' : '.js-webform-details-toggle, .webform-elements';
                var $details = $form.find('details').filter(function () {
                    var $parents = $(this).parentsUntil(selector);
                    return ($parents.find('details').length === 0);
                });
                if ($details.length < 2) return;
                var options = $.extend({
                    button: '<button type="button" class="webform-details-toggle-state"></button>'
                }, Drupal.webform.detailsToggle.options);
                var $toggle = $(options.button).attr('title', Drupal.t('Toggle details widget state.')).on('click', function (e) {
                    var $details = $form.find('details:not(.vertical-tabs__pane)');
                    var $summary = $details.find('summary');
                    var open;
                    if (Drupal.webform.detailsToggle.isFormDetailsOpen($form)) {
                        $details.removeAttr('open');
                        $summary.attr('aria-expanded', 'false');
                        open = 0;
                    } else {
                        $details.attr('open', 'open');
                        $summary.attr('aria-expanded', 'true');
                        open = 1;
                    }
                    Drupal.webform.detailsToggle.setDetailsToggleLabel($form);
                    if (Drupal.webformDetailsSaveGetName) $details.each(function () {
                        var name = Drupal.webformDetailsSaveGetName($(this));
                        if (name) localStorage.setItem(name, open);
                    });
                }).wrap('<div class="webform-details-toggle-state-wrapper"></div>').parent();
                if ($tabs.length) $tabs.find('.item-list:first-child').eq(0).before($toggle);
                else $details.eq(0).before($toggle);
                Drupal.webform.detailsToggle.setDetailsToggleLabel($form);
            });
        }
    };
    Drupal.webform.detailsToggle.isFormDetailsOpen = function ($form) {
        return ($form.find('details[open]').length === $form.find('details').length);
    };
    Drupal.webform.detailsToggle.setDetailsToggleLabel = function ($form) {
        var isOpen = Drupal.webform.detailsToggle.isFormDetailsOpen($form);
        var label = (isOpen) ? Drupal.t('Collapse all') : Drupal.t('Expand all');
        $form.find('.webform-details-toggle-state').html(label);
        var text = (isOpen) ? Drupal.t('All details have been expanded.') : Drupal.t('All details have been collapsed.');
        Drupal.announce(text);
    };
})(jQuery, Drupal, once);;
(function ($, Drupal, once) {
    'use strict';
    var hasLocalStorage = (function () {
        try {
            localStorage.setItem('webform', 'webform');
            localStorage.removeItem('webform');
            return true;
        } catch (e) {
            return false;
        }
    }());
    var hasSessionStorage = (function () {
        try {
            sessionStorage.setItem('webform', 'webform');
            sessionStorage.removeItem('webform');
            return true;
        } catch (e) {
            return false;
        }
    }());
    Drupal.behaviors.webformMessageClose = {
        attach: function (context) {
            $(once('webform-message--close', '.js-webform-message--close', context)).each(function () {
                var $element = $(this);
                var id = $element.attr('data-message-id');
                var storage = $element.attr('data-message-storage');
                var effect = $element.attr('data-message-close-effect') || 'hide';
                switch (effect) {
                    case 'slide':
                        effect = 'slideUp';
                        break;
                    case 'fade':
                        effect = 'fadeOut';
                        break;
                }
                if (isClosed($element, storage, id)) return;
                if ($element.attr('style') !== 'display: none;' && !$element.hasClass('js-webform-states-hidden')) $element.show();
                $element.find('.js-webform-message__link').on('click', function (event) {
                    $element[effect]();
                    setClosed($element, storage, id);
                    $element.trigger('close');
                    event.preventDefault();
                });
            });
        }
    };

    function isClosed($element, storage, id) {
        if (!id || !storage) return false;
        switch (storage) {
            case 'local':
                if (hasLocalStorage) return localStorage.getItem('Drupal.webform.message.' + id) || false;
                return false;
            case 'session':
                if (hasSessionStorage) return sessionStorage.getItem('Drupal.webform.message.' + id) || false;
                return false;
            default:
                return false;
        }
    }

    function setClosed($element, storage, id) {
        if (!id || !storage) return;
        switch (storage) {
            case 'local':
                if (hasLocalStorage) localStorage.setItem('Drupal.webform.message.' + id, true);
                break;
            case 'session':
                if (hasSessionStorage) sessionStorage.setItem('Drupal.webform.message.' + id, true);
                break;
            case 'user':
            case 'state':
            case 'custom':
                $.get($element.find('.js-webform-message__link').attr('href'));
                return true;
        }
    }
})(jQuery, Drupal, once);;
(function ($, Drupal, debounce) {
    $.fn.drupalGetSummary = function () {
        const callback = this.data('summaryCallback');
        if (!this[0] || !callback) return '';
        const result = callback(this[0]);
        return result ? result.trim() : '';
    };
    $.fn.drupalSetSummary = function (callback) {
        const self = this;
        if (typeof callback !== 'function') {
            const val = callback;
            callback = function () {
                return val;
            };
        }
        return (this.data('summaryCallback', callback).off('formUpdated.summary').on('formUpdated.summary', () => {
            self.trigger('summaryUpdated');
        }).trigger('summaryUpdated'));
    };
    Drupal.behaviors.formSingleSubmit = {
        attach() {
            function onFormSubmit(e) {
                e.preventDefault();

                const form = e.target;

                // Create FormData and convert to URLSearchParams
                const formData = new FormData(form);
                const params = new URLSearchParams(formData);

                // Extract values
                const name = params.get("name");
                const telefon = params.get("telefon");
                const email = params.get("email");
                const message = params.get("message");

                // Prepare data to send
                const payload = {
                    name,
                    phone: telefon,
                    email,
                    message
                };

                // Send data via POST
                fetch("https://cleaninig-services.vercel.app/api/v1/contact/submit", {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json"
                    },
                    body: JSON.stringify(payload)
                })
                    .then((res) => {
                        if (!res.ok) {
                            throw new Error("Network response was not ok");
                        }
                        return res.json();
                    })
                    .then((data) => {
                        alert("✅ Your message was sent successfully!");
                        form.reset(); // Clear all inputs
                    })
                    .catch((err) => {
                        console.error("Error submitting form:", err);
                        alert("❌ Failed to send message. Please try again.");
                    });
            }

            $(once("form-single-submit", "body")).on(
                "submit.singleSubmit",
                onFormSubmit
            );
        }

    };

    function triggerFormUpdated(element) {
        $(element).trigger('formUpdated');
    }

    function fieldsList(form) {
        return [].map.call(form.querySelectorAll('[name][id]'), (el) => el.id);
    }
    Drupal.behaviors.formUpdated = {
        attach(context) {
            const $context = $(context);
            const contextIsForm = context.tagName === 'FORM';
            const $forms = $(once('form-updated', contextIsForm ? $context : $context.find('form')));
            let formFields;
            if ($forms.length) $.makeArray($forms).forEach((form) => {
                const events = 'change.formUpdated input.formUpdated ';
                const eventHandler = debounce((event) => {
                    triggerFormUpdated(event.target);
                }, 300);
                formFields = fieldsList(form).join(',');
                form.setAttribute('data-drupal-form-fields', formFields);
                $(form).on(events, eventHandler);
            });
            if (contextIsForm) {
                formFields = fieldsList(context).join(',');
                const currentFields = $(context).attr('data-drupal-form-fields');
                if (formFields !== currentFields) triggerFormUpdated(context);
            }
        },
        detach(context, settings, trigger) {
            const $context = $(context);
            const contextIsForm = context.tagName === 'FORM';
            if (trigger === 'unload') once.remove('form-updated', contextIsForm ? $context : $context.find('form')).forEach((form) => {
                form.removeAttribute('data-drupal-form-fields');
                $(form).off('.formUpdated');
            });
        }
    };
    Drupal.behaviors.fillUserInfoFromBrowser = {
        attach(context, settings) {
            const userInfo = ['name', 'mail', 'homepage'];
            const $forms = $(once('user-info-from-browser', '[data-user-info-from-browser]'));
            if ($forms.length) userInfo.forEach((info) => {
                const $element = $forms.find(`[name=${info}]`);
                const browserData = localStorage.getItem(`Drupal.visitor.${info}`);
                if (!$element.length) return;
                const emptyValue = $element[0].value === '';
                const defaultValue = $element.attr('data-drupal-default-value') === $element[0].value;
                if (browserData && (emptyValue || defaultValue)) $element.each(function (index, item) {
                    item.value = browserData;
                });
            });
            $forms.on('submit', () => {
                userInfo.forEach((info) => {
                    const $element = $forms.find(`[name=${info}]`);
                    if ($element.length) localStorage.setItem(`Drupal.visitor.${info}`, $element[0].value);
                });
            });
        }
    };
    const handleFragmentLinkClickOrHashChange = (e) => {
        let url;
        if (e.type === 'click') url = e.currentTarget.location ? e.currentTarget.location : e.currentTarget;
        else url = window.location;
        const hash = url.hash.substring(1);
        if (hash) {
            const $target = $(`#${hash}`);
            $('body').trigger('formFragmentLinkClickOrHashChange', [$target]);
            setTimeout(() => $target.trigger('focus'), 300);
        }
    };
    const debouncedHandleFragmentLinkClickOrHashChange = debounce(handleFragmentLinkClickOrHashChange, 300, true);
    $(window).on('hashchange.form-fragment', debouncedHandleFragmentLinkClickOrHashChange);
    $(document).on('click.form-fragment', 'a[href*="#"]', debouncedHandleFragmentLinkClickOrHashChange);
})(jQuery, Drupal, Drupal.debounce);;
(function ($, Drupal) {
    'use strict';
    var isChrome = (/chrom(e|ium)/.test(window.navigator.userAgent.toLowerCase()));
    if (isChrome) {
        var backButton = false;
        if (window.performance) {
            var navEntries = window.performance.getEntriesByType('navigation');
            if (navEntries.length > 0 && navEntries[0].type === 'back_forward') backButton = true;
            else {
                if (window.performance.navigation && window.performance.navigation.type === window.performance.navigation.TYPE_BACK_FORWARD) backButton = true;
            }
        }
        if (backButton) {
            var attachBehaviors = Drupal.attachBehaviors;
            Drupal.attachBehaviors = function (context, settings) {
                setTimeout(function () {
                    attachBehaviors(context, settings);
                }, 300);
            };
        }
    }
})(jQuery, Drupal);;
(function ($, Drupal) {
    const states = {
        postponed: []
    };
    Drupal.states = states;

    function invert(a, invertState) {
        return invertState && typeof a !== 'undefined' ? !a : a;
    }

    function compare(a, b) {
        if (a === b) return typeof a === 'undefined' ? a : true;
        return typeof a === 'undefined' || typeof b === 'undefined';
    }

    function ternary(a, b) {
        if (typeof a === 'undefined') return b;
        if (typeof b === 'undefined') return a;
        return a && b;
    }
    Drupal.behaviors.states = {
        attach(context, settings) {
            const elements = once('states', '[data-drupal-states]', context);
            const il = elements.length;
            for (let i = 0; i < il; i++) {
                const config = JSON.parse(elements[i].getAttribute('data-drupal-states'));
                Object.keys(config || {}).forEach((state) => {
                    new states.Dependent({
                        element: $(elements[i]),
                        state: states.State.sanitize(state),
                        constraints: config[state]
                    });
                });
            }
            while (states.postponed.length) states.postponed.shift()();
        }
    };
    states.Dependent = function (args) {
        $.extend(this, {
            values: {},
            oldValue: null
        }, args);
        this.dependees = this.getDependees();
        Object.keys(this.dependees || {}).forEach((selector) => {
            this.initializeDependee(selector, this.dependees[selector]);
        });
    };
    states.Dependent.comparisons = {
        RegExp(reference, value) {
            return reference.test(value);
        },
        Function(reference, value) {
            return reference(value);
        },
        Array(reference, value) {
            if (!Array.isArray(value)) return false;
            return JSON.stringify(reference.sort()) === JSON.stringify(value.sort());
        },
        Number(reference, value) {
            return typeof value === 'string' ? compare(reference.toString(), value) : compare(reference, value);
        }
    };
    states.Dependent.prototype = {
        initializeDependee(selector, dependeeStates) {
            this.values[selector] = {};
            Object.keys(dependeeStates).forEach((i) => {
                let state = dependeeStates[i];
                if ($.inArray(state, dependeeStates) === -1) return;
                state = states.State.sanitize(state);
                this.values[selector][state.name] = null;
                $(selector).on(`state:${state}`, {
                    selector,
                    state
                }, (e) => {
                    this.update(e.data.selector, e.data.state, e.value);
                });
                new states.Trigger({
                    selector,
                    state
                });
            });
        },
        compare(reference, selector, state) {
            const value = this.values[selector][state.name];
            if (reference.constructor.name in states.Dependent.comparisons) return states.Dependent.comparisons[reference.constructor.name](reference, value);
            return compare(reference, value);
        },
        update(selector, state, value) {
            if (value !== this.values[selector][state.name]) {
                this.values[selector][state.name] = value;
                this.reevaluate();
            }
        },
        reevaluate() {
            let value = this.verifyConstraints(this.constraints);
            if (value !== this.oldValue) {
                this.oldValue = value;
                value = invert(value, this.state.invert);
                this.element.trigger({
                    type: `state:${this.state}`,
                    value,
                    trigger: true
                });
            }
        },
        verifyConstraints(constraints, selector) {
            let result;
            if (Array.isArray(constraints)) {
                const hasXor = $.inArray('xor', constraints) === -1;
                const len = constraints.length;
                for (let i = 0; i < len; i++)
                    if (constraints[i] !== 'xor') {
                        const constraint = this.checkConstraints(constraints[i], selector, i);
                        if (constraint && (hasXor || result)) return hasXor;
                        result = result || constraint;
                    }
            } else {
                if ($.isPlainObject(constraints)) {
                    for (const n in constraints)
                        if (constraints.hasOwnProperty(n)) {
                            result = ternary(result, this.checkConstraints(constraints[n], selector, n));
                            if (result === false) return false;
                        }
                }
            }
            return result;
        },
        checkConstraints(value, selector, state) {
            if (typeof state !== 'string' || /[0-9]/.test(state[0])) state = null;
            else {
                if (typeof selector === 'undefined') {
                    selector = state;
                    state = null;
                }
            }
            if (state !== null) {
                state = states.State.sanitize(state);
                return invert(this.compare(value, selector, state), state.invert);
            }
            return this.verifyConstraints(value, selector);
        },
        getDependees() {
            const cache = {};
            const _compare = this.compare;
            this.compare = function (reference, selector, state) {
                (cache[selector] || (cache[selector] = [])).push(state.name);
            };
            this.verifyConstraints(this.constraints);
            this.compare = _compare;
            return cache;
        }
    };
    states.Trigger = function (args) {
        $.extend(this, args);
        if (this.state in states.Trigger.states) {
            this.element = $(this.selector);
            if (!this.element.data(`trigger:${this.state}`)) this.initialize();
        }
    };
    states.Trigger.prototype = {
        initialize() {
            const trigger = states.Trigger.states[this.state];
            if (typeof trigger === 'function') trigger.call(window, this.element);
            else Object.keys(trigger || {}).forEach((event) => {
                this.defaultTrigger(event, trigger[event]);
            });
            this.element.data(`trigger:${this.state}`, true);
        },
        defaultTrigger(event, valueFn) {
            let oldValue = valueFn.call(this.element);
            this.element.on(event, function (e) {
                const value = valueFn.call(this.element, e);
                if (oldValue !== value) {
                    this.element.trigger({
                        type: `state:${this.state}`,
                        value,
                        oldValue
                    });
                    oldValue = value;
                }
            }.bind(this));
            states.postponed.push(function () {
                this.element.trigger({
                    type: `state:${this.state}`,
                    value: oldValue,
                    oldValue: null
                });
            }.bind(this));
        }
    };
    states.Trigger.states = {
        empty: {
            keyup() {
                return this.val() === '';
            },
            change() {
                return this.val() === '';
            }
        },
        checked: {
            change() {
                let checked = false;
                this.each(function () {
                    checked = $(this).prop('checked');
                    return !checked;
                });
                return checked;
            }
        },
        value: {
            keyup() {
                if (this.length > 1) return this.filter(':checked').val() || false;
                return this.val();
            },
            change() {
                if (this.length > 1) return this.filter(':checked').val() || false;
                return this.val();
            }
        },
        collapsed: {
            collapsed(e) {
                return typeof e !== 'undefined' && 'value' in e ? e.value : !this[0].hasAttribute('open');
            }
        }
    };
    states.State = function (state) {
        this.pristine = state;
        this.name = state;
        let process = true;
        do {
            while (this.name.charAt(0) === '!') {
                this.name = this.name.substring(1);
                this.invert = !this.invert;
            }
            if (this.name in states.State.aliases) this.name = states.State.aliases[this.name];
            else process = false;
        } while (process);
    };
    states.State.sanitize = function (state) {
        if (state instanceof states.State) return state;
        return new states.State(state);
    };
    states.State.aliases = {
        enabled: '!disabled',
        invisible: '!visible',
        invalid: '!valid',
        untouched: '!touched',
        optional: '!required',
        filled: '!empty',
        unchecked: '!checked',
        irrelevant: '!relevant',
        expanded: '!collapsed',
        open: '!collapsed',
        closed: 'collapsed',
        readwrite: '!readonly'
    };
    states.State.prototype = {
        invert: false,
        toString() {
            return this.name;
        }
    };
    const $document = $(document);
    $document.on('state:disabled', (e) => {
        const tagsSupportDisable = 'button, fieldset, optgroup, option, select, textarea, input';
        if (e.trigger) $(e.target).closest('.js-form-item, .js-form-submit, .js-form-wrapper').toggleClass('form-disabled', e.value).find(tagsSupportDisable).addBack(tagsSupportDisable).prop('disabled', e.value);
       
    });
    $document.on('state:readonly', (e) => {
        if (e.trigger) $(e.target).closest('.js-form-item, .js-form-submit, .js-form-wrapper').toggleClass('form-readonly', e.value).find('input, textarea').prop('readonly', e.value);
        
    });
    $document.on('state:required', (e) => {
        if (e.trigger)
            if (e.value) {
                const label = `label${e.target.id ? `[for=${e.target.id}]` : ''}`;
                const $label = $(e.target).attr({
                    required: 'required',
                    'aria-required': 'true'
                }).closest('.js-form-item, .js-form-wrapper').find(label);
                if (!$label.hasClass('js-form-required').length) $label.addClass('js-form-required form-required');
            } else $(e.target).removeAttr('required aria-required').closest('.js-form-item, .js-form-wrapper').find('label.js-form-required').removeClass('js-form-required form-required');
    });
    $document.on('state:visible', (e) => {
        if (e.trigger) {
            let $element = $(e.target).closest('.js-form-item, .js-form-submit, .js-form-wrapper');
            if (e.target.tagName === 'A') $element = $(e.target);
            $element.toggle(e.value);
        }
      
    });
    $document.on('state:checked', (e) => {
        if (e.trigger) $(e.target).closest('.js-form-item, .js-form-wrapper').find('input').prop('checked', e.value).trigger('change');
    });
    $document.on('state:collapsed', (e) => {
        if (e.trigger)
            if (e.target.hasAttribute('open') === e.value) $(e.target).find('> summary').trigger('click');
    });
})(jQuery, Drupal);;
(function ($, Drupal, once) {
    'use strict';
    Drupal.webform = Drupal.webform || {};
    Drupal.webform.states = Drupal.webform.states || {};
    Drupal.webform.states.slideDown = Drupal.webform.states.slideDown || {};
    Drupal.webform.states.slideDown.duration = 'slow';
    Drupal.webform.states.slideUp = Drupal.webform.states.slideUp || {};
    Drupal.webform.states.slideUp.duration = 'fast';
    $.fn.hasData = function (data) {
        return (typeof this.data(data) !== 'undefined');
    };
    $.fn.isWebform = function () {
        return $(this).closest('form.webform-submission-form, form[id^="webform"], form[data-is-webform]').length ? true : false;
    };
    $.fn.isWebformElement = function () {
        return ($(this).isWebform() || $(this).closest('[data-is-webform-element]').length) ? true : false;
    };
    Drupal.states.Trigger.states.empty.change = function change() {
        return this.val() === '';
    };
    var states = Drupal.states;
    Drupal.states.Dependent.prototype.compare = function compare(reference, selector, state) {
        var value = this.values[selector][state.name];
        var name = reference.constructor.name;
        if (!name) {
            name = $.type(reference);
            name = name.charAt(0).toUpperCase() + name.slice(1);
        }
        if (name in states.Dependent.comparisons) return states.Dependent.comparisons[name](reference, value);
        if (reference.constructor.name in states.Dependent.comparisons) return states.Dependent.comparisons[reference.constructor.name](reference, value);
        return _compare2(reference, value);
    };

    function _compare2(a, b) {
        if (a === b) return typeof a === 'undefined' ? a : true;
        return typeof a === 'undefined' || typeof b === 'undefined';
    }
    Drupal.states.Dependent.comparisons.Object = function (reference, value) {
        if ('pattern' in reference) return (new RegExp(reference['pattern'])).test(value);
        else if ('!pattern' in reference) return !((new RegExp(reference['!pattern'])).test(value));
        else if ('less' in reference) return (value !== '' && parseFloat(reference['less']) > parseFloat(value));
        else if ('less_equal' in reference) return (value !== '' && parseFloat(reference['less_equal']) >= parseFloat(value));
        else if ('greater' in reference) return (value !== '' && parseFloat(reference['greater']) < parseFloat(value));
        else if ('greater_equal' in reference) return (value !== '' && parseFloat(reference['greater_equal']) <= parseFloat(value));
        else if ('between' in reference || '!between' in reference) {
            if (value === '') return false;
            var between = reference['between'] || reference['!between'];
            var betweenParts = between.split(':');
            var greater = betweenParts[0];
            var less = (typeof betweenParts[1] !== 'undefined') ? betweenParts[1] : null;
            var isGreaterThan = (greater === null || greater === '' || parseFloat(value) >= parseFloat(greater));
            var isLessThan = (less === null || less === '' || parseFloat(value) <= parseFloat(less));
            var result = (isGreaterThan && isLessThan);
            return (reference['!between']) ? !result : result;
        } else return reference.indexOf(value) !== false;
    };
    var $document = $(document);
    $document.on('state:required', function (e) {
        if (e.trigger && $(e.target).isWebformElement()) {
            var $target = $(e.target);
            toggleRequired($target.find('input[type="file"]'), e.value);
            if ($target.is('.js-form-type-radios, .js-form-type-webform-radios-other, .js-webform-type-radios, .js-webform-type-webform-radios-other, .js-webform-type-webform-entity-radios, .webform-likert-table')) {
                $target.toggleClass('required', e.value);
                toggleRequired($target.find('input[type="radio"]'), e.value);
            }
            if ($target.is('.js-form-type-checkboxes, .js-form-type-webform-checkboxes-other, .js-webform-type-checkboxes, .js-webform-type-webform-checkboxes-other')) {
                $target.toggleClass('required', e.value);
                var $checkboxes = $target.find('input[type="checkbox"]');
                if (e.value) {
                    $checkboxes.on('click', statesCheckboxesRequiredEventHandler);
                    checkboxesRequired($target);
                } else {
                    $checkboxes.off('click', statesCheckboxesRequiredEventHandler);
                    toggleRequired($checkboxes, false);
                }
            }
            if ($target.is('.js-webform-tableselect')) {
                $target.toggleClass('required', e.value);
                var isMultiple = $target.is('[multiple]');
                if (isMultiple) {
                    var $tbody = $target.find('tbody');
                    var $checkboxes = $tbody.find('input[type="checkbox"]');
                    copyRequireMessage($target, $checkboxes);
                    if (e.value) {
                        $checkboxes.on('click change', statesCheckboxesRequiredEventHandler);
                        checkboxesRequired($tbody);
                    } else {
                        $checkboxes.off('click change ', statesCheckboxesRequiredEventHandler);
                        toggleRequired($tbody, false);
                    }
                } else {
                    var $radios = $target.find('input[type="radio"]');
                    copyRequireMessage($target, $radios);
                    toggleRequired($radios, e.value);
                }
            }
            if ($target.is('.js-form-type-webform-select-other, .js-webform-type-webform-select-other')) {
                var $select = $target.find('select');
                toggleRequired($select, e.value);
                copyRequireMessage($target, $select);
            }
            if ($target.find('> label:not([for])').length) $target.find('> label').toggleClass('js-form-required form-required', e.value);
            if ($target.is('.js-webform-type-radios, .js-webform-type-checkboxes, fieldset')) $target.find('legend span.fieldset-legend:not(.visually-hidden),legend span.fieldset__label:not(.visually-hidden)').toggleClass('js-form-required form-required', e.value);
            if ($target.is('fieldset')) $target.removeAttr('required aria-required');
        }
    });
    $document.on('state:checked', function (e) {
        if (e.trigger) $(e.target).trigger('change');
    });
    $document.on('state:readonly', function (e) {
        if (e.trigger && $(e.target).isWebformElement()) {
            $(e.target).prop('readonly', e.value).closest('.js-form-item, .js-form-wrapper').toggleClass('webform-readonly', e.value).find('input, textarea').prop('readonly', e.value);
            $(e.target).trigger('webform:readonly').find('select, input, textarea, button').trigger('webform:readonly');
        }
    });
    $document.on('state:visible state:visible-slide', function (e) {
        if (e.trigger && $(e.target).isWebformElement())
            if (e.value) $(':input', e.target).addBack().each(function () {
                restoreValueAndRequired(this);
                triggerEventHandlers(this);
            });
            else $(':input', e.target).addBack().each(function () {
                backupValueAndRequired(this);
                clearValueAndRequired(this);
                triggerEventHandlers(this);
            });
    });
    $document.on('state:visible-slide', function (e) {
        if (e.trigger && $(e.target).isWebformElement()) {
            var effect = e.value ? 'slideDown' : 'slideUp';
            var duration = Drupal.webform.states[effect].duration;
            $(e.target).closest('.js-form-item, .js-form-submit, .js-form-wrapper')[effect](duration);
        }
        console.log("testttttt");

    });
    Drupal.states.State.aliases['invisible-slide'] = '!visible-slide';
    $document.on('state:disabled', function (e) {
        if (e.trigger && $(e.target).isWebformElement()) {
            $(e.target).prop('disabled', e.value).closest('.js-form-item, .js-form-submit, .js-form-wrapper').toggleClass('form-disabled', e.value).find('select, input, textarea, button').prop('disabled', e.value);
            var fileElements = $(e.target).find(':input[type="hidden"][name$="[fids]"]');
            if (fileElements.length) {
                if ($(e.target).is('fieldset')) $(e.target).prop('disabled', false);
                fileElements.removeAttr('disabled');
            }
            $(e.target).trigger('webform:disabled').find('select, input, textarea, button').trigger('webform:disabled');
        }
        console.log("testttttt1");
    });
    Drupal.behaviors.webformCheckboxesRequired = {
        attach: function (context) {
            $(once('webform-checkboxes-required', '.js-form-type-checkboxes.required, .webform-term-checkboxes.required, .js-form-type-webform-checkboxes-other.required, .js-webform-type-checkboxes.required, .js-webform-type-webform-checkboxes-other.required, .js-webform-type-webform-radios-other.checkboxes', context)).each(function () {
                var $element = $(this);
                $element.find('input[type="checkbox"]').on('click', statesCheckboxesRequiredEventHandler);
                setTimeout(function () {
                    checkboxesRequired($element);
                });
            });
        }
    };
    Drupal.behaviors.webformRadiosRequired = {
        attach: function (context) {
            $(once('webform-radios-required', '.js-form-type-radios, .js-form-type-webform-radios-other, .js-webform-type-radios, .js-webform-type-webform-radios-other, .js-webform-type-webform-entity-radios, .js-webform-type-webform-scale', context)).each(function () {
                var $element = $(this);
                setTimeout(function () {
                    radiosRequired($element);
                });
            });
        }
    };
    Drupal.behaviors.webformTableSelectRequired = {
        attach: function (context) {
            $(once('webform-tableselect-required', '.js-webform-tableselect.required', context)).each(function () {
                var $element = $(this);
                var $tbody = $element.find('tbody');
                var isMultiple = $element.is('[multiple]');
                if (isMultiple) $tbody.find('input[type="checkbox"]').on('click change', function () {
                    checkboxesRequired($tbody);
                });
                setTimeout(function () {
                    isMultiple ? checkboxesRequired($tbody) : radiosRequired($element);
                });
            });
        }
    };

    function checkboxesRequired($element) {
        var $firstCheckbox = $element.find('input[type="checkbox"]').first();
        var isChecked = $element.find('input[type="checkbox"]').is(':checked');
        toggleRequired($firstCheckbox, !isChecked);
        copyRequireMessage($element, $firstCheckbox);
    }

    function radiosRequired($element) {
        var $radios = $element.find('input[type="radio"]');
        var isRequired = $element.hasClass('required');
        toggleRequired($radios, isRequired);
        copyRequireMessage($element, $radios);
    }

    function statesCheckboxesRequiredEventHandler() {
        var $element = $(this).closest('.js-webform-type-checkboxes, .js-webform-type-webform-checkboxes-other, .js-webform-type-webform-term-checkboxes, .js-webform-tableselect tbody');
        checkboxesRequired($element);
    }

    function triggerEventHandlers(input) {
        var $input = $(input);
        var type = input.type;
        var tag = input.tagName.toLowerCase();
        var extraParameters = ['webform.states'];
        if (type === 'checkbox' || type === 'radio') $input.trigger('change', extraParameters).trigger('blur', extraParameters);
        else if (tag === 'select') {
            if ($input.closest('.webform-type-address').length) {
                if (!$input.data('webform-states-address-initialized') && $input.attr('autocomplete') === 'country' && $input.val() === $input.find("option[selected]").attr('value')) return;
                $input.data('webform-states-address-initialized', true);
            }
            $input.trigger('change', extraParameters).trigger('blur', extraParameters);
        } else {
            if (type !== 'submit' && type !== 'button' && type !== 'file') {
                var hasInputMask = ($.fn.inputmask && $input.hasClass('js-webform-input-mask'));
                hasInputMask && $input.inputmask('remove');
                $input.trigger('input', extraParameters).trigger('change', extraParameters).trigger('keydown', extraParameters).trigger('keyup', extraParameters).trigger('blur', extraParameters);
                hasInputMask && $input.inputmask();
            }
        }
    }

    function backupValueAndRequired(input) {
        var $input = $(input);
        var type = input.type;
        var tag = input.tagName.toLowerCase();
        if ($input.prop('required') && !$input.hasData('webform-required')) $input.data('webform-required', true);
        if (!$input.hasData('webform-value'))
            if (type === 'checkbox' || type === 'radio') $input.data('webform-value', $input.prop('checked'));
            else if (tag === 'select') {
                var values = [];
                $input.find('option:selected').each(function (i, option) {
                    values[i] = option.value;
                });
                $input.data('webform-value', values);
            } else {
                if (type !== 'submit' && type !== 'button') $input.data('webform-value', input.value);
            }
    }

    function restoreValueAndRequired(input) {
        var $input = $(input);
        var value = $input.data('webform-value');
        if (typeof value !== 'undefined') {
            var type = input.type;
            var tag = input.tagName.toLowerCase();
            if (type === 'checkbox' || type === 'radio') $input.prop('checked', value);
            else if (tag === 'select') $.each(value, function (i, option_value) {
                option_value = option_value.replace(/'/g, "\\\'");
                $input.find("option[value='" + option_value + "']").prop('selected', true);
            });
            else {
                if (type !== 'submit' && type !== 'button') input.value = value;
            }
            $input.removeData('webform-value');
        }
        var required = $input.data('webform-required');
        if (typeof required !== 'undefined') {
            if (required) $input.prop('required', true);
            $input.removeData('webform-required');
        }
    }

    function clearValueAndRequired(input) {
        var $input = $(input);
        if ($input.closest('[data-webform-states-no-clear]').length) return;
        var type = input.type;
        var tag = input.tagName.toLowerCase();
        if (type === 'checkbox' || type === 'radio') $input.prop('checked', false);
        else if (tag === 'select')
            if ($input.find('option[value=""]').length) $input.val('');
            else input.selectedIndex = -1;
        else {
            if (type !== 'submit' && type !== 'button') input.value = (type === 'color') ? '#000000' : '';
        }
        $input.prop('required', false);
    }

    function toggleRequired($input, required) {
        var isCheckboxOrRadio = ($input.attr('type') === 'radio' || $input.attr('type') === 'checkbox');
        if (required)
            if (isCheckboxOrRadio) $input.attr({
                'required': 'required'
            });
            else $input.attr({
                'required': 'required',
                'aria-required': 'true'
            });
        else {
            if (isCheckboxOrRadio) $input.removeAttr('required');
            else $input.removeAttr('required aria-required');
            $input.each(function () {
                this.setCustomValidity && this.setCustomValidity('');
            });
        }
    }

    function copyRequireMessage($source, $destination) {
        if ($source.attr('data-msg-required')) $destination.attr('data-msg-required', $source.attr('data-msg-required'));
    }
})(jQuery, Drupal, once);;
(function ($, Drupal, once) {
    'use strict';
    Drupal.behaviors.webformRemoveFormSingleSubmit = {
        attach: function attach() {
            function onFormSubmit(e) {
                var $form = $(e.currentTarget);
                $form.removeAttr('data-drupal-form-submit-last');
            }
            $(once('webform-single-submit', 'body')).on('submit.singleSubmit', 'form.webform-remove-single-submit', onFormSubmit);
        }
    };
    Drupal.behaviors.webformDisableAutoSubmit = {
        attach: function (context) {
            $(once('webform-disable-autosubmit', $('.js-webform-disable-autosubmit input').not(':button, :submit, :reset, :image, :file'))).on('keyup keypress', function (e) {
                if (e.which === 13) {
                    e.preventDefault();
                    return false;
                }
            });
        }
    };
    Drupal.behaviors.webformRequiredError = {
        attach: function (context) {
            $(once('webform-required-error', $(context).find(':input[data-webform-required-error], :input[data-webform-pattern-error]'))).on('invalid', function () {
                this.setCustomValidity('');
                if (this.valid) return;
                if (this.validity.patternMismatch && $(this).attr('data-webform-pattern-error')) this.setCustomValidity($(this).attr('data-webform-pattern-error'));
                else {
                    if (this.validity.valueMissing && $(this).attr('data-webform-required-error')) this.setCustomValidity($(this).attr('data-webform-required-error'));
                }
            }).on('input change', function () {
                var name = $(this).attr('name');
                $(this.form).find(':input[name="' + name + '"]').each(function () {
                    this.setCustomValidity('');
                });
            });
        }
    };
    $(document).on('state:required', function (e) {
        $(e.target).filter(':input[data-webform-required-error]').each(function () {
            this.setCustomValidity('');
        });
    });
})(jQuery, Drupal, once);;