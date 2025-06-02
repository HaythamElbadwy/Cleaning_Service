/* @license GPL-2.0-or-later https://www.drupal.org/licensing/faq */
(function($) {})(jQuery);;
(function($) {
    'use strict';
    $(document).ready(function() {
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
(function(Drupal, $) {
    Drupal.behaviors.captcha = {
        attach: function() {
            var webformCaptcha = $('.webform-submission-form .captcha');
            if (webformCaptcha.length > 0) webformCaptcha.each(function(i) {
                var webformButton = $(webformCaptcha[i]).prevAll('#edit-actions').first();
                if (webformButton) {
                    webformButton.remove();
                    webformButton.insertAfter(webformCaptcha[i]);
                }
            });
        }
    };
})(Drupal, jQuery);;
! function(e, t, n) {
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
        return e.replace(/([a-z])-([a-z])/g, function(e, t, n) {
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
        return function() {
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
        return e.replace(/([A-Z])/g, function(e, t) {
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
            return o = o.join(" or "), m("@supports (" + o + ") { #modernizr { position: absolute; } }", function(e) {
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
                } catch (v) {}
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
            on: function(e, t) {
                var n = this;
                setTimeout(function() {
                    t(n[e]);
                }, 0);
            },
            addTest: function(e, t, n) {
                b.push({
                    name: e,
                    fn: t,
                    options: n
                });
            },
            addAsyncTest: function(e) {
                b.push({
                    name: null,
                    fn: e
                });
            }
        },
        Modernizr = function() {};
    Modernizr.prototype = C, Modernizr = new Modernizr();
    var _, x = t.documentElement,
        S = "svg" === x.nodeName.toLowerCase();
    ! function() {
        var e = {}.hasOwnProperty;
        _ = i(e, "undefined") || i(e.call, "undefined") ? function(e, t) {
            return t in e && i(e.constructor.prototype[t], "undefined");
        } : function(t, n) {
            return e.call(t, n);
        };
    }(), C._l = {}, C.on = function(e, t) {
        this._l[e] || (this._l[e] = []), this._l[e].push(t), Modernizr.hasOwnProperty(e) && setTimeout(function() {
            Modernizr._trigger(e, Modernizr[e]);
        }, 0);
    }, C._trigger = function(e, t) {
        if (this._l[e]) {
            var n = this._l[e];
            setTimeout(function() {
                var e, r;
                for (e = 0; e < n.length; e++)(r = n[e])(t);
            }, 0), delete this._l[e];
        }
    }, Modernizr._q.push(function() {
        C.addTest = s;
    }), Modernizr.addAsyncTest(function() {
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
        e(n.name, n.uri, function(n) {
            if (n && "load" === n.type)
                for (var r = 0; r < t.length; r++) e(t[r].name, t[r].uri);
        });
    });
    var B = "Moz O ms Webkit",
        Q = C._config.usePrefixes ? B.split(" ") : [];
    C._cssomPrefixes = Q;
    var T = function(t) {
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
    Modernizr._q.push(function() {
        delete k.elem;
    });
    var R = {
        style: k.elem.style
    };
    Modernizr._q.unshift(function() {
        delete R.style;
    }), C.testAllProps = v, C.testAllProps = y, Modernizr.addTest("cssgridlegacy", y("grid-columns", "10px", !0)), Modernizr.addTest("cssgrid", y("grid-template-rows", "none", !0));
    var E = C.prefixed = function(e, t, n) {
        return 0 === e.indexOf("@") ? T(e) : (-1 != e.indexOf("-") && (e = a(e)), t ? v(e, t, n) : v(e, "pfx"));
    };
    Modernizr.addTest("objectfit", !!E("objectFit"), {
        aliases: ["object-fit"]
    });
    var P = u("input"),
        j = "search tel url email datetime date month week time datetime-local number range color".split(" "),
        V = {};
    Modernizr.inputtypes = function(e) {
        for (var r, i, o, s = e.length, a = "1)", l = 0; s > l; l++) P.setAttribute("type", r = e[l]), o = "text" !== P.type && "style" in P, o && (P.value = a, P.style.cssText = "position:absolute;visibility:hidden;", /^range$/.test(r) && P.style.WebkitAppearance !== n ? (x.appendChild(P), i = t.defaultView, o = i.getComputedStyle && "textfield" !== i.getComputedStyle(P, null).WebkitAppearance && 0 !== P.offsetHeight, x.removeChild(P)) : /^(search|tel)$/.test(r) || (o = /^(url|email)$/.test(r) ? P.checkValidity && P.checkValidity() === !1 : P.value != a)), V[e[l]] = !!o;
        return V;
    }(j), o(), r(w), delete C.addTest, delete C.addAsyncTest;
    for (var z = 0; z < Modernizr._q.length; z++) Modernizr._q[z]();
    e.Modernizr = Modernizr;
}(window, document);;
! function(a, b) {
    "function" == typeof define && define.amd ? define(["jquery"], b) : "object" == typeof exports ? module.exports = b(require("jquery")) : a.lightbox = b(a.jQuery);
}(this, function(a) {
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
    }, b.prototype.option = function(b) {
        a.extend(this.options, b);
    }, b.prototype.imageCountLabel = function(a, b) {
        return this.options.albumLabel.replace(/%1/g, a).replace(/%2/g, b);
    }, b.prototype.init = function() {
        var b = this;
        a(document).ready(function() {
            b.enable(), b.build();
        });
    }, b.prototype.enable = function() {
        var b = this;
        a("body").on("click", "a[rel^=lightbox], area[rel^=lightbox], a[data-lightbox], area[data-lightbox]", function(c) {
            return b.start(a(c.currentTarget)), !1;
        });
    }, b.prototype.build = function() {
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
            }, this.$overlay.hide().on("click", function() {
                return b.end(), !1;
            }), this.$lightbox.hide().on("click", function(c) {
                "lightbox" === a(c.target).attr("id") && b.end();
            }), this.$outerContainer.on("click", function(c) {
                return "lightbox" === a(c.target).attr("id") && b.end(), !1;
            }), this.$lightbox.find(".lb-prev").on("click", function() {
                return 0 === b.currentImageIndex ? b.changeImage(b.album.length - 1) : b.changeImage(b.currentImageIndex - 1), !1;
            }), this.$lightbox.find(".lb-next").on("click", function() {
                return b.currentImageIndex === b.album.length - 1 ? b.changeImage(0) : b.changeImage(b.currentImageIndex + 1), !1;
            }), this.$nav.on("mousedown", function(a) {
                3 === a.which && (b.$nav.css("pointer-events", "none"), b.$lightbox.one("contextmenu", function() {
                    setTimeout(function() {
                        this.$nav.css("pointer-events", "auto");
                    }.bind(b), 0);
                }));
            }), this.$lightbox.find(".lb-loader, .lb-close").on("click", function() {
                return b.end(), !1;
            });
        }
    }, b.prototype.start = function(b) {
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
    }, b.prototype.changeImage = function(b) {
        var c = this,
            d = this.album[b].link,
            e = d.split(".").slice(-1)[0],
            f = this.$lightbox.find(".lb-image");
        this.disableKeyboardNav(), this.$overlay.fadeIn(this.options.fadeDuration), a(".lb-loader").fadeIn("slow"), this.$lightbox.find(".lb-image, .lb-nav, .lb-prev, .lb-next, .lb-dataContainer, .lb-numbers, .lb-caption").hide(), this.$outerContainer.addClass("animating");
        var g = new Image();
        g.onload = function() {
            var h, i, j, k, l, m;
            f.attr({
                alt: c.album[b].alt,
                src: d
            }), a(g), f.width(g.width), f.height(g.height), m = a(window).width(), l = a(window).height(), k = m - c.containerPadding.left - c.containerPadding.right - c.imageBorderWidth.left - c.imageBorderWidth.right - 20, j = l - c.containerPadding.top - c.containerPadding.bottom - c.imageBorderWidth.top - c.imageBorderWidth.bottom - c.options.positionFromTop - 70, "svg" === e && (0 !== g.width && 0 !== g.height || (f.width(k), f.height(j))), c.options.fitImagesInViewport ? (c.options.maxWidth && c.options.maxWidth < k && (k = c.options.maxWidth), c.options.maxHeight && c.options.maxHeight < j && (j = c.options.maxHeight)) : (k = c.options.maxWidth || g.width || k, j = c.options.maxHeight || g.height || j), (g.width > k || g.height > j) && (g.width / k > g.height / j ? (i = k, h = parseInt(g.height / (g.width / i), 10), f.width(i), f.height(h)) : (h = j, i = parseInt(g.width / (g.height / h), 10), f.width(i), f.height(h))), c.sizeContainer(f.width(), f.height());
        }, g.src = this.album[b].link, this.currentImageIndex = b;
    }, b.prototype.sizeOverlay = function() {
        var b = this;
        setTimeout(function() {
            b.$overlay.width(a(document).width()).height(a(document).height());
        }, 0);
    }, b.prototype.sizeContainer = function(a, b) {
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
        }, this.options.resizeDuration, "swing", function() {
            c();
        }) : c();
    }, b.prototype.showImage = function() {
        this.$lightbox.find(".lb-loader").stop(!0).hide(), this.$lightbox.find(".lb-image").fadeIn(this.options.imageFadeDuration), this.updateNav(), this.updateDetails(), this.preloadNeighboringImages(), this.enableKeyboardNav();
    }, b.prototype.updateNav = function() {
        var a = !1;
        try {
            document.createEvent("TouchEvent"), a = !!this.options.alwaysShowNavOnTouchDevices;
        } catch (a) {}
        this.$lightbox.find(".lb-nav").show(), this.album.length > 1 && (this.options.wrapAround ? (a && this.$lightbox.find(".lb-prev, .lb-next").css("opacity", "1"), this.$lightbox.find(".lb-prev, .lb-next").show()) : (this.currentImageIndex > 0 && (this.$lightbox.find(".lb-prev").show(), a && this.$lightbox.find(".lb-prev").css("opacity", "1")), this.currentImageIndex < this.album.length - 1 && (this.$lightbox.find(".lb-next").show(), a && this.$lightbox.find(".lb-next").css("opacity", "1"))));
    }, b.prototype.updateDetails = function() {
        var a = this;
        if (void 0 !== this.album[this.currentImageIndex].title && "" !== this.album[this.currentImageIndex].title) {
            var b = this.$lightbox.find(".lb-caption");
            this.options.sanitizeTitle ? b.text(this.album[this.currentImageIndex].title) : b.html(this.album[this.currentImageIndex].title), b.fadeIn("fast");
        }
        if (this.album.length > 1 && this.options.showImageNumberLabel) {
            var c = this.imageCountLabel(this.currentImageIndex + 1, this.album.length);
            this.$lightbox.find(".lb-number").text(c).fadeIn("fast");
        } else this.$lightbox.find(".lb-number").hide();
        this.$outerContainer.removeClass("animating"), this.$lightbox.find(".lb-dataContainer").fadeIn(this.options.resizeDuration, function() {
            return a.sizeOverlay();
        });
    }, b.prototype.preloadNeighboringImages = function() {
        if (this.album.length > this.currentImageIndex + 1)(new Image()).src = this.album[this.currentImageIndex + 1].link;
        if (this.currentImageIndex > 0)(new Image()).src = this.album[this.currentImageIndex - 1].link;
    }, b.prototype.enableKeyboardNav = function() {
        this.$lightbox.on("keyup.keyboard", a.proxy(this.keyboardAction, this)), this.$overlay.on("keyup.keyboard", a.proxy(this.keyboardAction, this));
    }, b.prototype.disableKeyboardNav = function() {
        this.$lightbox.off(".keyboard"), this.$overlay.off(".keyboard");
    }, b.prototype.keyboardAction = function(a) {
        var b = a.keyCode;
        27 === b ? (a.stopPropagation(), this.end()) : 37 === b ? 0 !== this.currentImageIndex ? this.changeImage(this.currentImageIndex - 1) : this.options.wrapAround && this.album.length > 1 && this.changeImage(this.album.length - 1) : 39 === b && (this.currentImageIndex !== this.album.length - 1 ? this.changeImage(this.currentImageIndex + 1) : this.options.wrapAround && this.album.length > 1 && this.changeImage(0));
    }, b.prototype.end = function() {
        this.disableKeyboardNav(), a(window).off("resize", this.sizeOverlay), this.$lightbox.fadeOut(this.options.fadeDuration), this.$overlay.fadeOut(this.options.fadeDuration), this.options.disableScrolling && a("body").removeClass("lb-disable-scrolling");
    }, new b();
});;;
(function(factory) {
    'use strict';
    if (typeof define === 'function' && define.amd) define(['jquery'], factory);
    else if (typeof exports !== 'undefined') module.exports = factory(require('jquery'));
    else factory(jQuery);
}(function($) {
    'use strict';
    var Slick = window.Slick || {};
    Slick = (function() {
        var instanceUid = 0;

        function Slick(element, settings) {
            var _ = this,
                dataSettings;
            _.defaults = {
                accessibility: true,
                adaptiveHeight: false,
                appendArrows: $(element),
                appendDots: $(element),
                arrows: true,
                asNavFor: null,
                prevArrow: '<button class="slick-prev" aria-label="Previous" type="button">Previous</button>',
                nextArrow: '<button class="slick-next" aria-label="Next" type="button">Next</button>',
                autoplay: false,
                autoplaySpeed: 3000,
                centerMode: false,
                centerPadding: '50px',
                cssEase: 'ease',
                customPaging: function(slider, i) {
                    return $('<button type="button" />').text(i + 1);
                },
                dots: false,
                dotsClass: 'slick-dots',
                draggable: true,
                easing: 'linear',
                edgeFriction: 0.35,
                fade: false,
                focusOnSelect: false,
                focusOnChange: false,
                infinite: true,
                initialSlide: 0,
                lazyLoad: 'ondemand',
                mobileFirst: false,
                pauseOnHover: true,
                pauseOnFocus: true,
                pauseOnDotsHover: false,
                respondTo: 'window',
                responsive: null,
                rows: 1,
                rtl: false,
                slide: '',
                slidesPerRow: 1,
                slidesToShow: 1,
                slidesToScroll: 1,
                speed: 500,
                swipe: true,
                swipeToSlide: false,
                touchMove: true,
                touchThreshold: 5,
                useCSS: true,
                useTransform: true,
                variableWidth: false,
                vertical: false,
                verticalSwiping: false,
                waitForAnimate: true,
                zIndex: 1000
            };
            _.initials = {
                animating: false,
                dragging: false,
                autoPlayTimer: null,
                currentDirection: 0,
                currentLeft: null,
                currentSlide: 0,
                direction: 1,
                $dots: null,
                listWidth: null,
                listHeight: null,
                loadIndex: 0,
                $nextArrow: null,
                $prevArrow: null,
                scrolling: false,
                slideCount: null,
                slideWidth: null,
                $slideTrack: null,
                $slides: null,
                sliding: false,
                slideOffset: 0,
                swipeLeft: null,
                swiping: false,
                $list: null,
                touchObject: {},
                transformsEnabled: false,
                unslicked: false
            };
            $.extend(_, _.initials);
            _.activeBreakpoint = null;
            _.animType = null;
            _.animProp = null;
            _.breakpoints = [];
            _.breakpointSettings = [];
            _.cssTransitions = false;
            _.focussed = false;
            _.interrupted = false;
            _.hidden = 'hidden';
            _.paused = true;
            _.positionProp = null;
            _.respondTo = null;
            _.rowCount = 1;
            _.shouldClick = true;
            _.$slider = $(element);
            _.$slidesCache = null;
            _.transformType = null;
            _.transitionType = null;
            _.visibilityChange = 'visibilitychange';
            _.windowWidth = 0;
            _.windowTimer = null;
            dataSettings = $(element).data('slick') || {};
            _.options = $.extend({}, _.defaults, settings, dataSettings);
            _.currentSlide = _.options.initialSlide;
            _.originalSettings = _.options;
            if (typeof document.mozHidden !== 'undefined') {
                _.hidden = 'mozHidden';
                _.visibilityChange = 'mozvisibilitychange';
            } else {
                if (typeof document.webkitHidden !== 'undefined') {
                    _.hidden = 'webkitHidden';
                    _.visibilityChange = 'webkitvisibilitychange';
                }
            }
            _.autoPlay = $.proxy(_.autoPlay, _);
            _.autoPlayClear = $.proxy(_.autoPlayClear, _);
            _.autoPlayIterator = $.proxy(_.autoPlayIterator, _);
            _.changeSlide = $.proxy(_.changeSlide, _);
            _.clickHandler = $.proxy(_.clickHandler, _);
            _.selectHandler = $.proxy(_.selectHandler, _);
            _.setPosition = $.proxy(_.setPosition, _);
            _.swipeHandler = $.proxy(_.swipeHandler, _);
            _.dragHandler = $.proxy(_.dragHandler, _);
            _.keyHandler = $.proxy(_.keyHandler, _);
            _.instanceUid = instanceUid++;
            _.htmlExpr = /^(?:\s*(<[\w\W]+>)[^>]*)$/;
            _.registerBreakpoints();
            _.init(true);
        }
        return Slick;
    }());
    Slick.prototype.activateADA = function() {
        var _ = this;
        _.$slideTrack.find('.slick-active').attr({
            'aria-hidden': 'false'
        }).find('a, input, button, select').attr({
            'tabindex': '0'
        });
    };
    Slick.prototype.addSlide = Slick.prototype.slickAdd = function(markup, index, addBefore) {
        var _ = this;
        if (typeof(index) === 'boolean') {
            addBefore = index;
            index = null;
        } else {
            if (index < 0 || (index >= _.slideCount)) return false;
        }
        _.unload();
        if (typeof(index) === 'number')
            if (index === 0 && _.$slides.length === 0) $(markup).appendTo(_.$slideTrack);
            else if (addBefore) $(markup).insertBefore(_.$slides.eq(index));
        else $(markup).insertAfter(_.$slides.eq(index));
        else if (addBefore === true) $(markup).prependTo(_.$slideTrack);
        else $(markup).appendTo(_.$slideTrack);
        _.$slides = _.$slideTrack.children(this.options.slide);
        _.$slideTrack.children(this.options.slide).detach();
        _.$slideTrack.append(_.$slides);
        _.$slides.each(function(index, element) {
            $(element).attr('data-slick-index', index);
        });
        _.$slidesCache = _.$slides;
        _.reinit();
    };
    Slick.prototype.animateHeight = function() {
        var _ = this;
        if (_.options.slidesToShow === 1 && _.options.adaptiveHeight === true && _.options.vertical === false) {
            var targetHeight = _.$slides.eq(_.currentSlide).outerHeight(true);
            _.$list.animate({
                height: targetHeight
            }, _.options.speed);
        }
    };
    Slick.prototype.animateSlide = function(targetLeft, callback) {
        var animProps = {},
            _ = this;
        _.animateHeight();
        if (_.options.rtl === true && _.options.vertical === false) targetLeft = -targetLeft;
        if (_.transformsEnabled === false)
            if (_.options.vertical === false) _.$slideTrack.animate({
                left: targetLeft
            }, _.options.speed, _.options.easing, callback);
            else _.$slideTrack.animate({
                top: targetLeft
            }, _.options.speed, _.options.easing, callback);
        else if (_.cssTransitions === false) {
            if (_.options.rtl === true) _.currentLeft = -(_.currentLeft);
            $({
                animStart: _.currentLeft
            }).animate({
                animStart: targetLeft
            }, {
                duration: _.options.speed,
                easing: _.options.easing,
                step: function(now) {
                    now = Math.ceil(now);
                    if (_.options.vertical === false) {
                        animProps[_.animType] = 'translate(' + now + 'px, 0px)';
                        _.$slideTrack.css(animProps);
                    } else {
                        animProps[_.animType] = 'translate(0px,' + now + 'px)';
                        _.$slideTrack.css(animProps);
                    }
                },
                complete: function() {
                    if (callback) callback.call();
                }
            });
        } else {
            _.applyTransition();
            targetLeft = Math.ceil(targetLeft);
            if (_.options.vertical === false) animProps[_.animType] = 'translate3d(' + targetLeft + 'px, 0px, 0px)';
            else animProps[_.animType] = 'translate3d(0px,' + targetLeft + 'px, 0px)';
            _.$slideTrack.css(animProps);
            if (callback) setTimeout(function() {
                _.disableTransition();
                callback.call();
            }, _.options.speed);
        }
    };
    Slick.prototype.getNavTarget = function() {
        var _ = this,
            asNavFor = _.options.asNavFor;
        if (asNavFor && asNavFor !== null) asNavFor = $(asNavFor).not(_.$slider);
        return asNavFor;
    };
    Slick.prototype.asNavFor = function(index) {
        var _ = this,
            asNavFor = _.getNavTarget();
        if (asNavFor !== null && typeof asNavFor === 'object') asNavFor.each(function() {
            var target = $(this).slick('getSlick');
            if (!target.unslicked) target.slideHandler(index, true);
        });
    };
    Slick.prototype.applyTransition = function(slide) {
        var _ = this,
            transition = {};
        if (_.options.fade === false) transition[_.transitionType] = _.transformType + ' ' + _.options.speed + 'ms ' + _.options.cssEase;
        else transition[_.transitionType] = 'opacity ' + _.options.speed + 'ms ' + _.options.cssEase;
        if (_.options.fade === false) _.$slideTrack.css(transition);
        else _.$slides.eq(slide).css(transition);
    };
    Slick.prototype.autoPlay = function() {
        var _ = this;
        _.autoPlayClear();
        if (_.slideCount > _.options.slidesToShow) _.autoPlayTimer = setInterval(_.autoPlayIterator, _.options.autoplaySpeed);
    };
    Slick.prototype.autoPlayClear = function() {
        var _ = this;
        if (_.autoPlayTimer) clearInterval(_.autoPlayTimer);
    };
    Slick.prototype.autoPlayIterator = function() {
        var _ = this,
            slideTo = _.currentSlide + _.options.slidesToScroll;
        if (!_.paused && !_.interrupted && !_.focussed) {
            if (_.options.infinite === false)
                if (_.direction === 1 && (_.currentSlide + 1) === (_.slideCount - 1)) _.direction = 0;
                else {
                    if (_.direction === 0) {
                        slideTo = _.currentSlide - _.options.slidesToScroll;
                        if (_.currentSlide - 1 === 0) _.direction = 1;
                    }
                }
            _.slideHandler(slideTo);
        }
    };
    Slick.prototype.buildArrows = function() {
        var _ = this;
        if (_.options.arrows === true) {
            _.$prevArrow = $(_.options.prevArrow).addClass('slick-arrow');
            _.$nextArrow = $(_.options.nextArrow).addClass('slick-arrow');
            if (_.slideCount > _.options.slidesToShow) {
                _.$prevArrow.removeClass('slick-hidden').removeAttr('aria-hidden tabindex');
                _.$nextArrow.removeClass('slick-hidden').removeAttr('aria-hidden tabindex');
                if (_.htmlExpr.test(_.options.prevArrow)) _.$prevArrow.prependTo(_.options.appendArrows);
                if (_.htmlExpr.test(_.options.nextArrow)) _.$nextArrow.appendTo(_.options.appendArrows);
                if (_.options.infinite !== true) _.$prevArrow.addClass('slick-disabled').attr('aria-disabled', 'true');
            } else _.$prevArrow.add(_.$nextArrow).addClass('slick-hidden').attr({
                'aria-disabled': 'true',
                'tabindex': '-1'
            });
        }
    };
    Slick.prototype.buildDots = function() {
        var _ = this,
            i, dot;
        if (_.options.dots === true && _.slideCount > _.options.slidesToShow) {
            _.$slider.addClass('slick-dotted');
            dot = $('<ul />').addClass(_.options.dotsClass);
            for (i = 0; i <= _.getDotCount(); i += 1) dot.append($('<li />').append(_.options.customPaging.call(this, _, i)));
            _.$dots = dot.appendTo(_.options.appendDots);
            _.$dots.find('li').first().addClass('slick-active');
        }
    };
    Slick.prototype.buildOut = function() {
        var _ = this;
        _.$slides = _.$slider.children(_.options.slide + ':not(.slick-cloned)').addClass('slick-slide');
        _.slideCount = _.$slides.length;
        _.$slides.each(function(index, element) {
            $(element).attr('data-slick-index', index).data('originalStyling', $(element).attr('style') || '');
        });
        _.$slider.addClass('slick-slider');
        _.$slideTrack = (_.slideCount === 0) ? $('<div class="slick-track"/>').appendTo(_.$slider) : _.$slides.wrapAll('<div class="slick-track"/>').parent();
        _.$list = _.$slideTrack.wrap('<div class="slick-list"/>').parent();
        _.$slideTrack.css('opacity', 0);
        if (_.options.centerMode === true || _.options.swipeToSlide === true) _.options.slidesToScroll = 1;
        $('img[data-lazy]', _.$slider).not('[src]').addClass('slick-loading');
        _.setupInfinite();
        _.buildArrows();
        _.buildDots();
        _.updateDots();
        _.setSlideClasses(typeof _.currentSlide === 'number' ? _.currentSlide : 0);
        if (_.options.draggable === true) _.$list.addClass('draggable');
    };
    Slick.prototype.buildRows = function() {
        var _ = this,
            a, b, c, newSlides, numOfSlides, originalSlides, slidesPerSection;
        newSlides = document.createDocumentFragment();
        originalSlides = _.$slider.children();
        if (_.options.rows > 0) {
            slidesPerSection = _.options.slidesPerRow * _.options.rows;
            numOfSlides = Math.ceil(originalSlides.length / slidesPerSection);
            for (a = 0; a < numOfSlides; a++) {
                var slide = document.createElement('div');
                for (b = 0; b < _.options.rows; b++) {
                    var row = document.createElement('div');
                    for (c = 0; c < _.options.slidesPerRow; c++) {
                        var target = (a * slidesPerSection + ((b * _.options.slidesPerRow) + c));
                        if (originalSlides.get(target)) row.appendChild(originalSlides.get(target));
                    }
                    slide.appendChild(row);
                }
                newSlides.appendChild(slide);
            }
            _.$slider.empty().append(newSlides);
            _.$slider.children().children().children().css({
                'width': (100 / _.options.slidesPerRow) + '%',
                'display': 'inline-block'
            });
        }
    };
    Slick.prototype.checkResponsive = function(initial, forceUpdate) {
        var _ = this,
            breakpoint, targetBreakpoint, respondToWidth, triggerBreakpoint = false;
        var sliderWidth = _.$slider.width();
        var windowWidth = window.innerWidth || $(window).width();
        if (_.respondTo === 'window') respondToWidth = windowWidth;
        else if (_.respondTo === 'slider') respondToWidth = sliderWidth;
        else {
            if (_.respondTo === 'min') respondToWidth = Math.min(windowWidth, sliderWidth);
        }
        if (_.options.responsive && _.options.responsive.length && _.options.responsive !== null) {
            targetBreakpoint = null;
            for (breakpoint in _.breakpoints)
                if (_.breakpoints.hasOwnProperty(breakpoint))
                    if (_.originalSettings.mobileFirst === false) {
                        if (respondToWidth < _.breakpoints[breakpoint]) targetBreakpoint = _.breakpoints[breakpoint];
                    } else {
                        if (respondToWidth > _.breakpoints[breakpoint]) targetBreakpoint = _.breakpoints[breakpoint];
                    }
            if (targetBreakpoint !== null)
                if (_.activeBreakpoint !== null) {
                    if (targetBreakpoint !== _.activeBreakpoint || forceUpdate) {
                        _.activeBreakpoint = targetBreakpoint;
                        if (_.breakpointSettings[targetBreakpoint] === 'unslick') _.unslick(targetBreakpoint);
                        else {
                            _.options = $.extend({}, _.originalSettings, _.breakpointSettings[targetBreakpoint]);
                            if (initial === true) _.currentSlide = _.options.initialSlide;
                            _.refresh(initial);
                        }
                        triggerBreakpoint = targetBreakpoint;
                    }
                } else {
                    _.activeBreakpoint = targetBreakpoint;
                    if (_.breakpointSettings[targetBreakpoint] === 'unslick') _.unslick(targetBreakpoint);
                    else {
                        _.options = $.extend({}, _.originalSettings, _.breakpointSettings[targetBreakpoint]);
                        if (initial === true) _.currentSlide = _.options.initialSlide;
                        _.refresh(initial);
                    }
                    triggerBreakpoint = targetBreakpoint;
                }
            else {
                if (_.activeBreakpoint !== null) {
                    _.activeBreakpoint = null;
                    _.options = _.originalSettings;
                    if (initial === true) _.currentSlide = _.options.initialSlide;
                    _.refresh(initial);
                    triggerBreakpoint = targetBreakpoint;
                }
            }
            if (!initial && triggerBreakpoint !== false) _.$slider.trigger('breakpoint', [_, triggerBreakpoint]);
        }
    };
    Slick.prototype.changeSlide = function(event, dontAnimate) {
        var _ = this,
            $target = $(event.currentTarget),
            indexOffset, slideOffset, unevenOffset;
        if ($target.is('a')) event.preventDefault();
        if (!$target.is('li')) $target = $target.closest('li');
        unevenOffset = (_.slideCount % _.options.slidesToScroll !== 0);
        indexOffset = unevenOffset ? 0 : (_.slideCount - _.currentSlide) % _.options.slidesToScroll;
        switch (event.data.message) {
            case 'previous':
                slideOffset = indexOffset === 0 ? _.options.slidesToScroll : _.options.slidesToShow - indexOffset;
                if (_.slideCount > _.options.slidesToShow) _.slideHandler(_.currentSlide - slideOffset, false, dontAnimate);
                break;
            case 'next':
                slideOffset = indexOffset === 0 ? _.options.slidesToScroll : indexOffset;
                if (_.slideCount > _.options.slidesToShow) _.slideHandler(_.currentSlide + slideOffset, false, dontAnimate);
                break;
            case 'index':
                var index = event.data.index === 0 ? 0 : event.data.index || $target.index() * _.options.slidesToScroll;
                _.slideHandler(_.checkNavigable(index), false, dontAnimate);
                $target.children().trigger('focus');
                break;
            default:
                return;
        }
    };
    Slick.prototype.checkNavigable = function(index) {
        var _ = this,
            navigables, prevNavigable;
        navigables = _.getNavigableIndexes();
        prevNavigable = 0;
        if (index > navigables[navigables.length - 1]) index = navigables[navigables.length - 1];
        else
            for (var n in navigables) {
                if (index < navigables[n]) {
                    index = prevNavigable;
                    break;
                }
                prevNavigable = navigables[n];
            }
        return index;
    };
    Slick.prototype.cleanUpEvents = function() {
        var _ = this;
        if (_.options.dots && _.$dots !== null) {
            $('li', _.$dots).off('click.slick', _.changeSlide).off('mouseenter.slick', $.proxy(_.interrupt, _, true)).off('mouseleave.slick', $.proxy(_.interrupt, _, false));
            if (_.options.accessibility === true) _.$dots.off('keydown.slick', _.keyHandler);
        }
        _.$slider.off('focus.slick blur.slick');
        if (_.options.arrows === true && _.slideCount > _.options.slidesToShow) {
            _.$prevArrow && _.$prevArrow.off('click.slick', _.changeSlide);
            _.$nextArrow && _.$nextArrow.off('click.slick', _.changeSlide);
            if (_.options.accessibility === true) {
                _.$prevArrow && _.$prevArrow.off('keydown.slick', _.keyHandler);
                _.$nextArrow && _.$nextArrow.off('keydown.slick', _.keyHandler);
            }
        }
        _.$list.off('touchstart.slick mousedown.slick', _.swipeHandler);
        _.$list.off('touchmove.slick mousemove.slick', _.swipeHandler);
        _.$list.off('touchend.slick mouseup.slick', _.swipeHandler);
        _.$list.off('touchcancel.slick mouseleave.slick', _.swipeHandler);
        _.$list.off('click.slick', _.clickHandler);
        $(document).off(_.visibilityChange, _.visibility);
        _.cleanUpSlideEvents();
        if (_.options.accessibility === true) _.$list.off('keydown.slick', _.keyHandler);
        if (_.options.focusOnSelect === true) $(_.$slideTrack).children().off('click.slick', _.selectHandler);
        $(window).off('orientationchange.slick.slick-' + _.instanceUid, _.orientationChange);
        $(window).off('resize.slick.slick-' + _.instanceUid, _.resize);
        $('[draggable!=true]', _.$slideTrack).off('dragstart', _.preventDefault);
        $(window).off('load.slick.slick-' + _.instanceUid, _.setPosition);
    };
    Slick.prototype.cleanUpSlideEvents = function() {
        var _ = this;
        _.$list.off('mouseenter.slick', $.proxy(_.interrupt, _, true));
        _.$list.off('mouseleave.slick', $.proxy(_.interrupt, _, false));
    };
    Slick.prototype.cleanUpRows = function() {
        var _ = this,
            originalSlides;
        if (_.options.rows > 0) {
            originalSlides = _.$slides.children().children();
            originalSlides.removeAttr('style');
            _.$slider.empty().append(originalSlides);
        }
    };
    Slick.prototype.clickHandler = function(event) {
        var _ = this;
        if (_.shouldClick === false) {
            event.stopImmediatePropagation();
            event.stopPropagation();
            event.preventDefault();
        }
    };
    Slick.prototype.destroy = function(refresh) {
        var _ = this;
        _.autoPlayClear();
        _.touchObject = {};
        _.cleanUpEvents();
        $('.slick-cloned', _.$slider).detach();
        if (_.$dots) _.$dots.remove();
        if (_.$prevArrow && _.$prevArrow.length) {
            _.$prevArrow.removeClass('slick-disabled slick-arrow slick-hidden').removeAttr('aria-hidden aria-disabled tabindex').css('display', '');
            if (_.htmlExpr.test(_.options.prevArrow)) _.$prevArrow.remove();
        }
        if (_.$nextArrow && _.$nextArrow.length) {
            _.$nextArrow.removeClass('slick-disabled slick-arrow slick-hidden').removeAttr('aria-hidden aria-disabled tabindex').css('display', '');
            if (_.htmlExpr.test(_.options.nextArrow)) _.$nextArrow.remove();
        }
        if (_.$slides) {
            _.$slides.removeClass('slick-slide slick-active slick-center slick-visible slick-current').removeAttr('aria-hidden').removeAttr('data-slick-index').each(function() {
                $(this).attr('style', $(this).data('originalStyling'));
            });
            _.$slideTrack.children(this.options.slide).detach();
            _.$slideTrack.detach();
            _.$list.detach();
            _.$slider.append(_.$slides);
        }
        _.cleanUpRows();
        _.$slider.removeClass('slick-slider');
        _.$slider.removeClass('slick-initialized');
        _.$slider.removeClass('slick-dotted');
        _.unslicked = true;
        if (!refresh) _.$slider.trigger('destroy', [_]);
    };
    Slick.prototype.disableTransition = function(slide) {
        var _ = this,
            transition = {};
        transition[_.transitionType] = '';
        if (_.options.fade === false) _.$slideTrack.css(transition);
        else _.$slides.eq(slide).css(transition);
    };
    Slick.prototype.fadeSlide = function(slideIndex, callback) {
        var _ = this;
        if (_.cssTransitions === false) {
            _.$slides.eq(slideIndex).css({
                zIndex: _.options.zIndex
            });
            _.$slides.eq(slideIndex).animate({
                opacity: 1
            }, _.options.speed, _.options.easing, callback);
        } else {
            _.applyTransition(slideIndex);
            _.$slides.eq(slideIndex).css({
                opacity: 1,
                zIndex: _.options.zIndex
            });
            if (callback) setTimeout(function() {
                _.disableTransition(slideIndex);
                callback.call();
            }, _.options.speed);
        }
    };
    Slick.prototype.fadeSlideOut = function(slideIndex) {
        var _ = this;
        if (_.cssTransitions === false) _.$slides.eq(slideIndex).animate({
            opacity: 0,
            zIndex: _.options.zIndex - 2
        }, _.options.speed, _.options.easing);
        else {
            _.applyTransition(slideIndex);
            _.$slides.eq(slideIndex).css({
                opacity: 0,
                zIndex: _.options.zIndex - 2
            });
        }
    };
    Slick.prototype.filterSlides = Slick.prototype.slickFilter = function(filter) {
        var _ = this;
        if (filter !== null) {
            _.$slidesCache = _.$slides;
            _.unload();
            _.$slideTrack.children(this.options.slide).detach();
            _.$slidesCache.filter(filter).appendTo(_.$slideTrack);
            _.reinit();
        }
    };
    Slick.prototype.focusHandler = function() {
        var _ = this;
        _.$slider.off('focus.slick blur.slick').on('focus.slick blur.slick', '*', function(event) {
            event.stopImmediatePropagation();
            var $sf = $(this);
            setTimeout(function() {
                if (_.options.pauseOnFocus) {
                    _.focussed = $sf.is(':focus');
                    _.autoPlay();
                }
            }, 0);
        });
    };
    Slick.prototype.getCurrent = Slick.prototype.slickCurrentSlide = function() {
        var _ = this;
        return _.currentSlide;
    };
    Slick.prototype.getDotCount = function() {
        var _ = this;
        var breakPoint = 0;
        var counter = 0;
        var pagerQty = 0;
        if (_.options.infinite === true)
            if (_.slideCount <= _.options.slidesToShow) ++pagerQty;
            else
                while (breakPoint < _.slideCount) {
                    ++pagerQty;
                    breakPoint = counter + _.options.slidesToScroll;
                    counter += _.options.slidesToScroll <= _.options.slidesToShow ? _.options.slidesToScroll : _.options.slidesToShow;
                } else if (_.options.centerMode === true) pagerQty = _.slideCount;
                else if (!_.options.asNavFor) pagerQty = 1 + Math.ceil((_.slideCount - _.options.slidesToShow) / _.options.slidesToScroll);
        else
            while (breakPoint < _.slideCount) {
                ++pagerQty;
                breakPoint = counter + _.options.slidesToScroll;
                counter += _.options.slidesToScroll <= _.options.slidesToShow ? _.options.slidesToScroll : _.options.slidesToShow;
            }
        return pagerQty - 1;
    };
    Slick.prototype.getLeft = function(slideIndex) {
        var _ = this,
            targetLeft, verticalHeight, verticalOffset = 0,
            targetSlide, coef;
        _.slideOffset = 0;
        verticalHeight = _.$slides.first().outerHeight(true);
        if (_.options.infinite === true) {
            if (_.slideCount > _.options.slidesToShow) {
                _.slideOffset = (_.slideWidth * _.options.slidesToShow) * -1;
                coef = -1;
                if (_.options.vertical === true && _.options.centerMode === true)
                    if (_.options.slidesToShow === 2) coef = -1.5;
                    else {
                        if (_.options.slidesToShow === 1) coef = -2;
                    }
                verticalOffset = (verticalHeight * _.options.slidesToShow) * coef;
            }
            if (_.slideCount % _.options.slidesToScroll !== 0)
                if (slideIndex + _.options.slidesToScroll > _.slideCount && _.slideCount > _.options.slidesToShow)
                    if (slideIndex > _.slideCount) {
                        _.slideOffset = ((_.options.slidesToShow - (slideIndex - _.slideCount)) * _.slideWidth) * -1;
                        verticalOffset = ((_.options.slidesToShow - (slideIndex - _.slideCount)) * verticalHeight) * -1;
                    } else {
                        _.slideOffset = ((_.slideCount % _.options.slidesToScroll) * _.slideWidth) * -1;
                        verticalOffset = ((_.slideCount % _.options.slidesToScroll) * verticalHeight) * -1;
                    }
        } else {
            if (slideIndex + _.options.slidesToShow > _.slideCount) {
                _.slideOffset = ((slideIndex + _.options.slidesToShow) - _.slideCount) * _.slideWidth;
                verticalOffset = ((slideIndex + _.options.slidesToShow) - _.slideCount) * verticalHeight;
            }
        }
        if (_.slideCount <= _.options.slidesToShow) {
            _.slideOffset = 0;
            verticalOffset = 0;
        }
        if (_.options.centerMode === true && _.slideCount <= _.options.slidesToShow) _.slideOffset = ((_.slideWidth * Math.floor(_.options.slidesToShow)) / 2) - ((_.slideWidth * _.slideCount) / 2);
        else if (_.options.centerMode === true && _.options.infinite === true) _.slideOffset += _.slideWidth * Math.floor(_.options.slidesToShow / 2) - _.slideWidth;
        else {
            if (_.options.centerMode === true) {
                _.slideOffset = 0;
                _.slideOffset += _.slideWidth * Math.floor(_.options.slidesToShow / 2);
            }
        }
        if (_.options.vertical === false) targetLeft = ((slideIndex * _.slideWidth) * -1) + _.slideOffset;
        else targetLeft = ((slideIndex * verticalHeight) * -1) + verticalOffset;
        if (_.options.variableWidth === true) {
            if (_.slideCount <= _.options.slidesToShow || _.options.infinite === false) targetSlide = _.$slideTrack.children('.slick-slide').eq(slideIndex);
            else targetSlide = _.$slideTrack.children('.slick-slide').eq(slideIndex + _.options.slidesToShow);
            if (_.options.rtl === true)
                if (targetSlide[0]) targetLeft = (_.$slideTrack.width() - targetSlide[0].offsetLeft - targetSlide.width()) * -1;
                else targetLeft = 0;
            else targetLeft = targetSlide[0] ? targetSlide[0].offsetLeft * -1 : 0;
            if (_.options.centerMode === true) {
                if (_.slideCount <= _.options.slidesToShow || _.options.infinite === false) targetSlide = _.$slideTrack.children('.slick-slide').eq(slideIndex);
                else targetSlide = _.$slideTrack.children('.slick-slide').eq(slideIndex + _.options.slidesToShow + 1);
                if (_.options.rtl === true)
                    if (targetSlide[0]) targetLeft = (_.$slideTrack.width() - targetSlide[0].offsetLeft - targetSlide.width()) * -1;
                    else targetLeft = 0;
                else targetLeft = targetSlide[0] ? targetSlide[0].offsetLeft * -1 : 0;
                targetLeft += (_.$list.width() - targetSlide.outerWidth()) / 2;
            }
        }
        return targetLeft;
    };
    Slick.prototype.getOption = Slick.prototype.slickGetOption = function(option) {
        var _ = this;
        return _.options[option];
    };
    Slick.prototype.getNavigableIndexes = function() {
        var _ = this,
            breakPoint = 0,
            counter = 0,
            indexes = [],
            max;
        if (_.options.infinite === false) max = _.slideCount;
        else {
            breakPoint = _.options.slidesToScroll * -1;
            counter = _.options.slidesToScroll * -1;
            max = _.slideCount * 2;
        }
        while (breakPoint < max) {
            indexes.push(breakPoint);
            breakPoint = counter + _.options.slidesToScroll;
            counter += _.options.slidesToScroll <= _.options.slidesToShow ? _.options.slidesToScroll : _.options.slidesToShow;
        }
        return indexes;
    };
    Slick.prototype.getSlick = function() {
        return this;
    };
    Slick.prototype.getSlideCount = function() {
        var _ = this,
            slidesTraversed, swipedSlide, centerOffset;
        centerOffset = _.options.centerMode === true ? _.slideWidth * Math.floor(_.options.slidesToShow / 2) : 0;
        if (_.options.swipeToSlide === true) {
            _.$slideTrack.find('.slick-slide').each(function(index, slide) {
                if (slide.offsetLeft - centerOffset + ($(slide).outerWidth() / 2) > (_.swipeLeft * -1)) {
                    swipedSlide = slide;
                    return false;
                }
            });
            slidesTraversed = Math.abs($(swipedSlide).attr('data-slick-index') - _.currentSlide) || 1;
            return slidesTraversed;
        } else return _.options.slidesToScroll;
    };
    Slick.prototype.goTo = Slick.prototype.slickGoTo = function(slide, dontAnimate) {
        var _ = this;
        _.changeSlide({
            data: {
                message: 'index',
                index: parseInt(slide)
            }
        }, dontAnimate);
    };
    Slick.prototype.init = function(creation) {
        var _ = this;
        if (!$(_.$slider).hasClass('slick-initialized')) {
            $(_.$slider).addClass('slick-initialized');
            _.buildRows();
            _.buildOut();
            _.setProps();
            _.startLoad();
            _.loadSlider();
            _.initializeEvents();
            _.updateArrows();
            _.updateDots();
            _.checkResponsive(true);
            _.focusHandler();
        }
        if (creation) _.$slider.trigger('init', [_]);
        if (_.options.accessibility === true) _.initADA();
        if (_.options.autoplay) {
            _.paused = false;
            _.autoPlay();
        }
    };
    Slick.prototype.initADA = function() {
        var _ = this,
            numDotGroups = Math.ceil(_.slideCount / _.options.slidesToShow),
            tabControlIndexes = _.getNavigableIndexes().filter(function(val) {
                return (val >= 0) && (val < _.slideCount);
            });
        _.$slides.add(_.$slideTrack.find('.slick-cloned')).attr({
            'aria-hidden': 'true',
            'tabindex': '-1'
        }).find('a, input, button, select').attr({
            'tabindex': '-1'
        });
        if (_.$dots !== null) {
            _.$slides.not(_.$slideTrack.find('.slick-cloned')).each(function(i) {
                var slideControlIndex = tabControlIndexes.indexOf(i);
                $(this).attr({
                    'role': 'tabpanel',
                    'id': 'slick-slide' + _.instanceUid + i,
                    'tabindex': -1
                });
                if (slideControlIndex !== -1) {
                    var ariaButtonControl = 'slick-slide-control' + _.instanceUid + slideControlIndex;
                    if ($('#' + ariaButtonControl).length) $(this).attr({
                        'aria-describedby': ariaButtonControl
                    });
                }
            });
            _.$dots.attr('role', 'tablist').find('li').each(function(i) {
                var mappedSlideIndex = tabControlIndexes[i];
                $(this).attr({
                    'role': 'presentation'
                });
                $(this).find('button').first().attr({
                    'role': 'tab',
                    'id': 'slick-slide-control' + _.instanceUid + i,
                    'aria-controls': 'slick-slide' + _.instanceUid + mappedSlideIndex,
                    'aria-label': (i + 1) + ' of ' + numDotGroups,
                    'aria-selected': null,
                    'tabindex': '-1'
                });
            }).eq(_.currentSlide).find('button').attr({
                'aria-selected': 'true',
                'tabindex': '0'
            }).end();
        }
        for (var i = _.currentSlide, max = i + _.options.slidesToShow; i < max; i++)
            if (_.options.focusOnChange) _.$slides.eq(i).attr({
                'tabindex': '0'
            });
            else _.$slides.eq(i).removeAttr('tabindex');
        _.activateADA();
    };
    Slick.prototype.initArrowEvents = function() {
        var _ = this;
        if (_.options.arrows === true && _.slideCount > _.options.slidesToShow) {
            _.$prevArrow.off('click.slick').on('click.slick', {
                message: 'previous'
            }, _.changeSlide);
            _.$nextArrow.off('click.slick').on('click.slick', {
                message: 'next'
            }, _.changeSlide);
            if (_.options.accessibility === true) {
                _.$prevArrow.on('keydown.slick', _.keyHandler);
                _.$nextArrow.on('keydown.slick', _.keyHandler);
            }
        }
    };
    Slick.prototype.initDotEvents = function() {
        var _ = this;
        if (_.options.dots === true && _.slideCount > _.options.slidesToShow) {
            $('li', _.$dots).on('click.slick', {
                message: 'index'
            }, _.changeSlide);
            if (_.options.accessibility === true) _.$dots.on('keydown.slick', _.keyHandler);
        }
        if (_.options.dots === true && _.options.pauseOnDotsHover === true && _.slideCount > _.options.slidesToShow) $('li', _.$dots).on('mouseenter.slick', $.proxy(_.interrupt, _, true)).on('mouseleave.slick', $.proxy(_.interrupt, _, false));
    };
    Slick.prototype.initSlideEvents = function() {
        var _ = this;
        if (_.options.pauseOnHover) {
            _.$list.on('mouseenter.slick', $.proxy(_.interrupt, _, true));
            _.$list.on('mouseleave.slick', $.proxy(_.interrupt, _, false));
        }
    };
    Slick.prototype.initializeEvents = function() {
        var _ = this;
        _.initArrowEvents();
        _.initDotEvents();
        _.initSlideEvents();
        _.$list.on('touchstart.slick mousedown.slick', {
            action: 'start'
        }, _.swipeHandler);
        _.$list.on('touchmove.slick mousemove.slick', {
            action: 'move'
        }, _.swipeHandler);
        _.$list.on('touchend.slick mouseup.slick', {
            action: 'end'
        }, _.swipeHandler);
        _.$list.on('touchcancel.slick mouseleave.slick', {
            action: 'end'
        }, _.swipeHandler);
        _.$list.on('click.slick', _.clickHandler);
        $(document).on(_.visibilityChange, $.proxy(_.visibility, _));
        if (_.options.accessibility === true) _.$list.on('keydown.slick', _.keyHandler);
        if (_.options.focusOnSelect === true) $(_.$slideTrack).children().on('click.slick', _.selectHandler);
        $(window).on('orientationchange.slick.slick-' + _.instanceUid, $.proxy(_.orientationChange, _));
        $(window).on('resize.slick.slick-' + _.instanceUid, $.proxy(_.resize, _));
        $('[draggable!=true]', _.$slideTrack).on('dragstart', _.preventDefault);
        $(window).on('load.slick.slick-' + _.instanceUid, _.setPosition);
        $(_.setPosition);
    };
    Slick.prototype.initUI = function() {
        var _ = this;
        if (_.options.arrows === true && _.slideCount > _.options.slidesToShow) {
            _.$prevArrow.show();
            _.$nextArrow.show();
        }
        if (_.options.dots === true && _.slideCount > _.options.slidesToShow) _.$dots.show();
    };
    Slick.prototype.keyHandler = function(event) {
        var _ = this;
        if (!event.target.tagName.match('TEXTAREA|INPUT|SELECT'))
            if (event.keyCode === 37 && _.options.accessibility === true) _.changeSlide({
                data: {
                    message: _.options.rtl === true ? 'next' : 'previous'
                }
            });
            else {
                if (event.keyCode === 39 && _.options.accessibility === true) _.changeSlide({
                    data: {
                        message: _.options.rtl === true ? 'previous' : 'next'
                    }
                });
            }
    };
    Slick.prototype.lazyLoad = function() {
        var _ = this,
            loadRange, cloneRange, rangeStart, rangeEnd;

        function loadImages(imagesScope) {
            $('img[data-lazy]', imagesScope).each(function() {
                var image = $(this),
                    imageSource = $(this).attr('data-lazy'),
                    imageSrcSet = $(this).attr('data-srcset'),
                    imageSizes = $(this).attr('data-sizes') || _.$slider.attr('data-sizes'),
                    imageToLoad = document.createElement('img');
                imageToLoad.onload = function() {
                    image.animate({
                        opacity: 0
                    }, 100, function() {
                        if (imageSrcSet) {
                            image.attr('srcset', imageSrcSet);
                            if (imageSizes) image.attr('sizes', imageSizes);
                        }
                        image.attr('src', imageSource).animate({
                            opacity: 1
                        }, 200, function() {
                            image.removeAttr('data-lazy data-srcset data-sizes').removeClass('slick-loading');
                        });
                        _.$slider.trigger('lazyLoaded', [_, image, imageSource]);
                    });
                };
                imageToLoad.onerror = function() {
                    image.removeAttr('data-lazy').removeClass('slick-loading').addClass('slick-lazyload-error');
                    _.$slider.trigger('lazyLoadError', [_, image, imageSource]);
                };
                imageToLoad.src = imageSource;
            });
        }
        if (_.options.centerMode === true)
            if (_.options.infinite === true) {
                rangeStart = _.currentSlide + (_.options.slidesToShow / 2 + 1);
                rangeEnd = rangeStart + _.options.slidesToShow + 2;
            } else {
                rangeStart = Math.max(0, _.currentSlide - (_.options.slidesToShow / 2 + 1));
                rangeEnd = 2 + (_.options.slidesToShow / 2 + 1) + _.currentSlide;
            }
        else {
            rangeStart = _.options.infinite ? _.options.slidesToShow + _.currentSlide : _.currentSlide;
            rangeEnd = Math.ceil(rangeStart + _.options.slidesToShow);
            if (_.options.fade === true) {
                if (rangeStart > 0) rangeStart--;
                if (rangeEnd <= _.slideCount) rangeEnd++;
            }
        }
        loadRange = _.$slider.find('.slick-slide').slice(rangeStart, rangeEnd);
        if (_.options.lazyLoad === 'anticipated') {
            var prevSlide = rangeStart - 1,
                nextSlide = rangeEnd,
                $slides = _.$slider.find('.slick-slide');
            for (var i = 0; i < _.options.slidesToScroll; i++) {
                if (prevSlide < 0) prevSlide = _.slideCount - 1;
                loadRange = loadRange.add($slides.eq(prevSlide));
                loadRange = loadRange.add($slides.eq(nextSlide));
                prevSlide--;
                nextSlide++;
            }
        }
        loadImages(loadRange);
        if (_.slideCount <= _.options.slidesToShow) {
            cloneRange = _.$slider.find('.slick-slide');
            loadImages(cloneRange);
        } else if (_.currentSlide >= _.slideCount - _.options.slidesToShow) {
            cloneRange = _.$slider.find('.slick-cloned').slice(0, _.options.slidesToShow);
            loadImages(cloneRange);
        } else {
            if (_.currentSlide === 0) {
                cloneRange = _.$slider.find('.slick-cloned').slice(_.options.slidesToShow * -1);
                loadImages(cloneRange);
            }
        }
    };
    Slick.prototype.loadSlider = function() {
        var _ = this;
        _.setPosition();
        _.$slideTrack.css({
            opacity: 1
        });
        _.$slider.removeClass('slick-loading');
        _.initUI();
        if (_.options.lazyLoad === 'progressive') _.progressiveLazyLoad();
    };
    Slick.prototype.next = Slick.prototype.slickNext = function() {
        var _ = this;
        _.changeSlide({
            data: {
                message: 'next'
            }
        });
    };
    Slick.prototype.orientationChange = function() {
        var _ = this;
        _.checkResponsive();
        _.setPosition();
    };
    Slick.prototype.pause = Slick.prototype.slickPause = function() {
        var _ = this;
        _.autoPlayClear();
        _.paused = true;
    };
    Slick.prototype.play = Slick.prototype.slickPlay = function() {
        var _ = this;
        _.autoPlay();
        _.options.autoplay = true;
        _.paused = false;
        _.focussed = false;
        _.interrupted = false;
    };
    Slick.prototype.postSlide = function(index) {
        var _ = this;
        if (!_.unslicked) {
            _.$slider.trigger('afterChange', [_, index]);
            _.animating = false;
            if (_.slideCount > _.options.slidesToShow) _.setPosition();
            _.swipeLeft = null;
            if (_.options.autoplay) _.autoPlay();
            if (_.options.accessibility === true) {
                _.initADA();
                if (_.options.focusOnChange) {
                    var $currentSlide = $(_.$slides.get(_.currentSlide));
                    $currentSlide.attr('tabindex', 0).focus();
                }
            }
        }
    };
    Slick.prototype.prev = Slick.prototype.slickPrev = function() {
        var _ = this;
        _.changeSlide({
            data: {
                message: 'previous'
            }
        });
    };
    Slick.prototype.preventDefault = function(event) {
        event.preventDefault();
    };
    Slick.prototype.progressiveLazyLoad = function(tryCount) {
        tryCount = tryCount || 1;
        var _ = this,
            $imgsToLoad = $('img[data-lazy]', _.$slider),
            image, imageSource, imageSrcSet, imageSizes, imageToLoad;
        if ($imgsToLoad.length) {
            image = $imgsToLoad.first();
            imageSource = image.attr('data-lazy');
            imageSrcSet = image.attr('data-srcset');
            imageSizes = image.attr('data-sizes') || _.$slider.attr('data-sizes');
            imageToLoad = document.createElement('img');
            imageToLoad.onload = function() {
                if (imageSrcSet) {
                    image.attr('srcset', imageSrcSet);
                    if (imageSizes) image.attr('sizes', imageSizes);
                }
                image.attr('src', imageSource).removeAttr('data-lazy data-srcset data-sizes').removeClass('slick-loading');
                if (_.options.adaptiveHeight === true) _.setPosition();
                _.$slider.trigger('lazyLoaded', [_, image, imageSource]);
                _.progressiveLazyLoad();
            };
            imageToLoad.onerror = function() {
                if (tryCount < 3) setTimeout(function() {
                    _.progressiveLazyLoad(tryCount + 1);
                }, 500);
                else {
                    image.removeAttr('data-lazy').removeClass('slick-loading').addClass('slick-lazyload-error');
                    _.$slider.trigger('lazyLoadError', [_, image, imageSource]);
                    _.progressiveLazyLoad();
                }
            };
            imageToLoad.src = imageSource;
        } else _.$slider.trigger('allImagesLoaded', [_]);
    };
    Slick.prototype.refresh = function(initializing) {
        var _ = this,
            currentSlide, lastVisibleIndex;
        lastVisibleIndex = _.slideCount - _.options.slidesToShow;
        if (!_.options.infinite && (_.currentSlide > lastVisibleIndex)) _.currentSlide = lastVisibleIndex;
        if (_.slideCount <= _.options.slidesToShow) _.currentSlide = 0;
        currentSlide = _.currentSlide;
        _.destroy(true);
        $.extend(_, _.initials, {
            currentSlide
        });
        _.init();
        if (!initializing) _.changeSlide({
            data: {
                message: 'index',
                index: currentSlide
            }
        }, false);
    };
    Slick.prototype.registerBreakpoints = function() {
        var _ = this,
            breakpoint, currentBreakpoint, l, responsiveSettings = _.options.responsive || null;
        if ($.type(responsiveSettings) === 'array' && responsiveSettings.length) {
            _.respondTo = _.options.respondTo || 'window';
            for (breakpoint in responsiveSettings) {
                l = _.breakpoints.length - 1;
                if (responsiveSettings.hasOwnProperty(breakpoint)) {
                    currentBreakpoint = responsiveSettings[breakpoint].breakpoint;
                    while (l >= 0) {
                        if (_.breakpoints[l] && _.breakpoints[l] === currentBreakpoint) _.breakpoints.splice(l, 1);
                        l--;
                    }
                    _.breakpoints.push(currentBreakpoint);
                    _.breakpointSettings[currentBreakpoint] = responsiveSettings[breakpoint].settings;
                }
            }
            _.breakpoints.sort(function(a, b) {
                return (_.options.mobileFirst) ? a - b : b - a;
            });
        }
    };
    Slick.prototype.reinit = function() {
        var _ = this;
        _.$slides = _.$slideTrack.children(_.options.slide).addClass('slick-slide');
        _.slideCount = _.$slides.length;
        if (_.currentSlide >= _.slideCount && _.currentSlide !== 0) _.currentSlide = _.currentSlide - _.options.slidesToScroll;
        if (_.slideCount <= _.options.slidesToShow) _.currentSlide = 0;
        _.registerBreakpoints();
        _.setProps();
        _.setupInfinite();
        _.buildArrows();
        _.updateArrows();
        _.initArrowEvents();
        _.buildDots();
        _.updateDots();
        _.initDotEvents();
        _.cleanUpSlideEvents();
        _.initSlideEvents();
        _.checkResponsive(false, true);
        if (_.options.focusOnSelect === true) $(_.$slideTrack).children().on('click.slick', _.selectHandler);
        _.setSlideClasses(typeof _.currentSlide === 'number' ? _.currentSlide : 0);
        _.setPosition();
        _.focusHandler();
        _.paused = !_.options.autoplay;
        _.autoPlay();
        _.$slider.trigger('reInit', [_]);
    };
    Slick.prototype.resize = function() {
        var _ = this;
        if ($(window).width() !== _.windowWidth) {
            clearTimeout(_.windowDelay);
            _.windowDelay = window.setTimeout(function() {
                _.windowWidth = $(window).width();
                _.checkResponsive();
                if (!_.unslicked) _.setPosition();
            }, 50);
        }
    };
    Slick.prototype.removeSlide = Slick.prototype.slickRemove = function(index, removeBefore, removeAll) {
        var _ = this;
        if (typeof(index) === 'boolean') {
            removeBefore = index;
            index = removeBefore === true ? 0 : _.slideCount - 1;
        } else index = removeBefore === true ? --index : index;
        if (_.slideCount < 1 || index < 0 || index > _.slideCount - 1) return false;
        _.unload();
        if (removeAll === true) _.$slideTrack.children().remove();
        else _.$slideTrack.children(this.options.slide).eq(index).remove();
        _.$slides = _.$slideTrack.children(this.options.slide);
        _.$slideTrack.children(this.options.slide).detach();
        _.$slideTrack.append(_.$slides);
        _.$slidesCache = _.$slides;
        _.reinit();
    };
    Slick.prototype.setCSS = function(position) {
        var _ = this,
            positionProps = {},
            x, y;
        if (_.options.rtl === true) position = -position;
        x = _.positionProp == 'left' ? Math.ceil(position) + 'px' : '0px';
        y = _.positionProp == 'top' ? Math.ceil(position) + 'px' : '0px';
        positionProps[_.positionProp] = position;
        if (_.transformsEnabled === false) _.$slideTrack.css(positionProps);
        else {
            positionProps = {};
            if (_.cssTransitions === false) {
                positionProps[_.animType] = 'translate(' + x + ', ' + y + ')';
                _.$slideTrack.css(positionProps);
            } else {
                positionProps[_.animType] = 'translate3d(' + x + ', ' + y + ', 0px)';
                _.$slideTrack.css(positionProps);
            }
        }
    };
    Slick.prototype.setDimensions = function() {
        var _ = this;
        if (_.options.vertical === false) {
            if (_.options.centerMode === true) _.$list.css({
                padding: ('0px ' + _.options.centerPadding)
            });
        } else {
            _.$list.height(_.$slides.first().outerHeight(true) * _.options.slidesToShow);
            if (_.options.centerMode === true) _.$list.css({
                padding: (_.options.centerPadding + ' 0px')
            });
        }
        _.listWidth = _.$list.width();
        _.listHeight = _.$list.height();
        if (_.options.vertical === false && _.options.variableWidth === false) {
            _.slideWidth = Math.ceil(_.listWidth / _.options.slidesToShow);
            _.$slideTrack.width(Math.ceil((_.slideWidth * _.$slideTrack.children('.slick-slide').length)));
        } else if (_.options.variableWidth === true) _.$slideTrack.width(5000 * _.slideCount);
        else {
            _.slideWidth = Math.ceil(_.listWidth);
            _.$slideTrack.height(Math.ceil((_.$slides.first().outerHeight(true) * _.$slideTrack.children('.slick-slide').length)));
        }
        var offset = _.$slides.first().outerWidth(true) - _.$slides.first().width();
        if (_.options.variableWidth === false) _.$slideTrack.children('.slick-slide').width(_.slideWidth - offset);
    };
    Slick.prototype.setFade = function() {
        var _ = this,
            targetLeft;
        _.$slides.each(function(index, element) {
            targetLeft = (_.slideWidth * index) * -1;
            if (_.options.rtl === true) $(element).css({
                position: 'relative',
                right: targetLeft,
                top: 0,
                zIndex: _.options.zIndex - 2,
                opacity: 0
            });
            else $(element).css({
                position: 'relative',
                left: targetLeft,
                top: 0,
                zIndex: _.options.zIndex - 2,
                opacity: 0
            });
        });
        _.$slides.eq(_.currentSlide).css({
            zIndex: _.options.zIndex - 1,
            opacity: 1
        });
    };
    Slick.prototype.setHeight = function() {
        var _ = this;
        if (_.options.slidesToShow === 1 && _.options.adaptiveHeight === true && _.options.vertical === false) {
            var targetHeight = _.$slides.eq(_.currentSlide).outerHeight(true);
            _.$list.css('height', targetHeight);
        }
    };
    Slick.prototype.setOption = Slick.prototype.slickSetOption = function() {
        var _ = this,
            l, item, option, value, refresh = false,
            type;
        if ($.type(arguments[0]) === 'object') {
            option = arguments[0];
            refresh = arguments[1];
            type = 'multiple';
        } else {
            if ($.type(arguments[0]) === 'string') {
                option = arguments[0];
                value = arguments[1];
                refresh = arguments[2];
                if (arguments[0] === 'responsive' && $.type(arguments[1]) === 'array') type = 'responsive';
                else {
                    if (typeof arguments[1] !== 'undefined') type = 'single';
                }
            }
        }
        if (type === 'single') _.options[option] = value;
        else if (type === 'multiple') $.each(option, function(opt, val) {
            _.options[opt] = val;
        });
        else {
            if (type === 'responsive')
                for (item in value)
                    if ($.type(_.options.responsive) !== 'array') _.options.responsive = [value[item]];
                    else {
                        l = _.options.responsive.length - 1;
                        while (l >= 0) {
                            if (_.options.responsive[l].breakpoint === value[item].breakpoint) _.options.responsive.splice(l, 1);
                            l--;
                        }
                        _.options.responsive.push(value[item]);
                    }
        }
        if (refresh) {
            _.unload();
            _.reinit();
        }
    };
    Slick.prototype.setPosition = function() {
        var _ = this;
        _.setDimensions();
        _.setHeight();
        if (_.options.fade === false) _.setCSS(_.getLeft(_.currentSlide));
        else _.setFade();
        _.$slider.trigger('setPosition', [_]);
    };
    Slick.prototype.setProps = function() {
        var _ = this,
            bodyStyle = document.body.style;
        _.positionProp = _.options.vertical === true ? 'top' : 'left';
        if (_.positionProp === 'top') _.$slider.addClass('slick-vertical');
        else _.$slider.removeClass('slick-vertical');
        if (bodyStyle.WebkitTransition !== undefined || bodyStyle.MozTransition !== undefined || bodyStyle.msTransition !== undefined)
            if (_.options.useCSS === true) _.cssTransitions = true;
        if (_.options.fade)
            if (typeof _.options.zIndex === 'number') {
                if (_.options.zIndex < 3) _.options.zIndex = 3;
            } else _.options.zIndex = _.defaults.zIndex;
        if (bodyStyle.OTransform !== undefined) {
            _.animType = 'OTransform';
            _.transformType = '-o-transform';
            _.transitionType = 'OTransition';
            if (bodyStyle.perspectiveProperty === undefined && bodyStyle.webkitPerspective === undefined) _.animType = false;
        }
        if (bodyStyle.MozTransform !== undefined) {
            _.animType = 'MozTransform';
            _.transformType = '-moz-transform';
            _.transitionType = 'MozTransition';
            if (bodyStyle.perspectiveProperty === undefined && bodyStyle.MozPerspective === undefined) _.animType = false;
        }
        if (bodyStyle.webkitTransform !== undefined) {
            _.animType = 'webkitTransform';
            _.transformType = '-webkit-transform';
            _.transitionType = 'webkitTransition';
            if (bodyStyle.perspectiveProperty === undefined && bodyStyle.webkitPerspective === undefined) _.animType = false;
        }
        if (bodyStyle.msTransform !== undefined) {
            _.animType = 'msTransform';
            _.transformType = '-ms-transform';
            _.transitionType = 'msTransition';
            if (bodyStyle.msTransform === undefined) _.animType = false;
        }
        if (bodyStyle.transform !== undefined && _.animType !== false) {
            _.animType = 'transform';
            _.transformType = 'transform';
            _.transitionType = 'transition';
        }
        _.transformsEnabled = _.options.useTransform && (_.animType !== null && _.animType !== false);
    };
    Slick.prototype.setSlideClasses = function(index) {
        var _ = this,
            centerOffset, allSlides, indexOffset, remainder;
        allSlides = _.$slider.find('.slick-slide').removeClass('slick-active slick-center slick-current').attr('aria-hidden', 'true');
        _.$slides.eq(index).addClass('slick-current');
        if (_.options.centerMode === true) {
            var evenCoef = _.options.slidesToShow % 2 === 0 ? 1 : 0;
            centerOffset = Math.floor(_.options.slidesToShow / 2);
            if (_.options.infinite === true) {
                if (index >= centerOffset && index <= (_.slideCount - 1) - centerOffset) _.$slides.slice(index - centerOffset + evenCoef, index + centerOffset + 1).addClass('slick-active').attr('aria-hidden', 'false');
                else {
                    indexOffset = _.options.slidesToShow + index;
                    allSlides.slice(indexOffset - centerOffset + 1 + evenCoef, indexOffset + centerOffset + 2).addClass('slick-active').attr('aria-hidden', 'false');
                }
                if (index === 0) allSlides.eq(allSlides.length - 1 - _.options.slidesToShow).addClass('slick-center');
                else {
                    if (index === _.slideCount - 1) allSlides.eq(_.options.slidesToShow).addClass('slick-center');
                }
            }
            _.$slides.eq(index).addClass('slick-center');
        } else if (index >= 0 && index <= (_.slideCount - _.options.slidesToShow)) _.$slides.slice(index, index + _.options.slidesToShow).addClass('slick-active').attr('aria-hidden', 'false');
        else if (allSlides.length <= _.options.slidesToShow) allSlides.addClass('slick-active').attr('aria-hidden', 'false');
        else {
            remainder = _.slideCount % _.options.slidesToShow;
            indexOffset = _.options.infinite === true ? _.options.slidesToShow + index : index;
            if (_.options.slidesToShow == _.options.slidesToScroll && (_.slideCount - index) < _.options.slidesToShow) allSlides.slice(indexOffset - (_.options.slidesToShow - remainder), indexOffset + remainder).addClass('slick-active').attr('aria-hidden', 'false');
            else allSlides.slice(indexOffset, indexOffset + _.options.slidesToShow).addClass('slick-active').attr('aria-hidden', 'false');
        }
        if (_.options.lazyLoad === 'ondemand' || _.options.lazyLoad === 'anticipated') _.lazyLoad();
    };
    Slick.prototype.setupInfinite = function() {
        var _ = this,
            i, slideIndex, infiniteCount;
        if (_.options.fade === true) _.options.centerMode = false;
        if (_.options.infinite === true && _.options.fade === false) {
            slideIndex = null;
            if (_.slideCount > _.options.slidesToShow) {
                if (_.options.centerMode === true) infiniteCount = _.options.slidesToShow + 1;
                else infiniteCount = _.options.slidesToShow;
                for (i = _.slideCount; i > (_.slideCount - infiniteCount); i -= 1) {
                    slideIndex = i - 1;
                    $(_.$slides[slideIndex]).clone(true).attr('id', '').attr('data-slick-index', slideIndex - _.slideCount).prependTo(_.$slideTrack).addClass('slick-cloned');
                }
                for (i = 0; i < infiniteCount + _.slideCount; i += 1) {
                    slideIndex = i;
                    $(_.$slides[slideIndex]).clone(true).attr('id', '').attr('data-slick-index', slideIndex + _.slideCount).appendTo(_.$slideTrack).addClass('slick-cloned');
                }
                _.$slideTrack.find('.slick-cloned').find('[id]').each(function() {
                    $(this).attr('id', '');
                });
            }
        }
    };
    Slick.prototype.interrupt = function(toggle) {
        var _ = this;
        if (!toggle) _.autoPlay();
        _.interrupted = toggle;
    };
    Slick.prototype.selectHandler = function(event) {
        var _ = this;
        var targetElement = $(event.target).is('.slick-slide') ? $(event.target) : $(event.target).parents('.slick-slide');
        var index = parseInt(targetElement.attr('data-slick-index'));
        if (!index) index = 0;
        if (_.slideCount <= _.options.slidesToShow) {
            _.slideHandler(index, false, true);
            return;
        }
        _.slideHandler(index);
    };
    Slick.prototype.slideHandler = function(index, sync, dontAnimate) {
        var targetSlide, animSlide, oldSlide, slideLeft, targetLeft = null,
            _ = this,
            navTarget;
        sync = sync || false;
        if (_.animating === true && _.options.waitForAnimate === true) return;
        if (_.options.fade === true && _.currentSlide === index) return;
        if (sync === false) _.asNavFor(index);
        targetSlide = index;
        targetLeft = _.getLeft(targetSlide);
        slideLeft = _.getLeft(_.currentSlide);
        _.currentLeft = _.swipeLeft === null ? slideLeft : _.swipeLeft;
        if (_.options.infinite === false && _.options.centerMode === false && (index < 0 || index > _.getDotCount() * _.options.slidesToScroll)) {
            if (_.options.fade === false) {
                targetSlide = _.currentSlide;
                if (dontAnimate !== true && _.slideCount > _.options.slidesToShow) _.animateSlide(slideLeft, function() {
                    _.postSlide(targetSlide);
                });
                else _.postSlide(targetSlide);
            }
            return;
        } else {
            if (_.options.infinite === false && _.options.centerMode === true && (index < 0 || index > (_.slideCount - _.options.slidesToScroll))) {
                if (_.options.fade === false) {
                    targetSlide = _.currentSlide;
                    if (dontAnimate !== true && _.slideCount > _.options.slidesToShow) _.animateSlide(slideLeft, function() {
                        _.postSlide(targetSlide);
                    });
                    else _.postSlide(targetSlide);
                }
                return;
            }
        }
        if (_.options.autoplay) clearInterval(_.autoPlayTimer);
        if (targetSlide < 0)
            if (_.slideCount % _.options.slidesToScroll !== 0) animSlide = _.slideCount - (_.slideCount % _.options.slidesToScroll);
            else animSlide = _.slideCount + targetSlide;
        else if (targetSlide >= _.slideCount)
            if (_.slideCount % _.options.slidesToScroll !== 0) animSlide = 0;
            else animSlide = targetSlide - _.slideCount;
        else animSlide = targetSlide;
        _.animating = true;
        _.$slider.trigger('beforeChange', [_, _.currentSlide, animSlide]);
        oldSlide = _.currentSlide;
        _.currentSlide = animSlide;
        _.setSlideClasses(_.currentSlide);
        if (_.options.asNavFor) {
            navTarget = _.getNavTarget();
            navTarget = navTarget.slick('getSlick');
            if (navTarget.slideCount <= navTarget.options.slidesToShow) navTarget.setSlideClasses(_.currentSlide);
        }
        _.updateDots();
        _.updateArrows();
        if (_.options.fade === true) {
            if (dontAnimate !== true) {
                _.fadeSlideOut(oldSlide);
                _.fadeSlide(animSlide, function() {
                    _.postSlide(animSlide);
                });
            } else _.postSlide(animSlide);
            _.animateHeight();
            return;
        }
        if (dontAnimate !== true && _.slideCount > _.options.slidesToShow) _.animateSlide(targetLeft, function() {
            _.postSlide(animSlide);
        });
        else _.postSlide(animSlide);
    };
    Slick.prototype.startLoad = function() {
        var _ = this;
        if (_.options.arrows === true && _.slideCount > _.options.slidesToShow) {
            _.$prevArrow.hide();
            _.$nextArrow.hide();
        }
        if (_.options.dots === true && _.slideCount > _.options.slidesToShow) _.$dots.hide();
        _.$slider.addClass('slick-loading');
    };
    Slick.prototype.swipeDirection = function() {
        var xDist, yDist, r, swipeAngle, _ = this;
        xDist = _.touchObject.startX - _.touchObject.curX;
        yDist = _.touchObject.startY - _.touchObject.curY;
        r = Math.atan2(yDist, xDist);
        swipeAngle = Math.round(r * 180 / Math.PI);
        if (swipeAngle < 0) swipeAngle = 360 - Math.abs(swipeAngle);
        if ((swipeAngle <= 45) && (swipeAngle >= 0)) return (_.options.rtl === false ? 'left' : 'right');
        if ((swipeAngle <= 360) && (swipeAngle >= 315)) return (_.options.rtl === false ? 'left' : 'right');
        if ((swipeAngle >= 135) && (swipeAngle <= 225)) return (_.options.rtl === false ? 'right' : 'left');
        if (_.options.verticalSwiping === true)
            if ((swipeAngle >= 35) && (swipeAngle <= 135)) return 'down';
            else return 'up';
        return 'vertical';
    };
    Slick.prototype.swipeEnd = function(event) {
        var _ = this,
            slideCount, direction;
        _.dragging = false;
        _.swiping = false;
        if (_.scrolling) {
            _.scrolling = false;
            return false;
        }
        _.interrupted = false;
        _.shouldClick = (_.touchObject.swipeLength > 10) ? false : true;
        if (_.touchObject.curX === undefined) return false;
        if (_.touchObject.edgeHit === true) _.$slider.trigger('edge', [_, _.swipeDirection()]);
        if (_.touchObject.swipeLength >= _.touchObject.minSwipe) {
            direction = _.swipeDirection();
            switch (direction) {
                case 'left':
                case 'down':
                    slideCount = _.options.swipeToSlide ? _.checkNavigable(_.currentSlide + _.getSlideCount()) : _.currentSlide + _.getSlideCount();
                    _.currentDirection = 0;
                    break;
                case 'right':
                case 'up':
                    slideCount = _.options.swipeToSlide ? _.checkNavigable(_.currentSlide - _.getSlideCount()) : _.currentSlide - _.getSlideCount();
                    _.currentDirection = 1;
                    break;
                default:
            }
            if (direction != 'vertical') {
                _.slideHandler(slideCount);
                _.touchObject = {};
                _.$slider.trigger('swipe', [_, direction]);
            }
        } else {
            if (_.touchObject.startX !== _.touchObject.curX) {
                _.slideHandler(_.currentSlide);
                _.touchObject = {};
            }
        }
    };
    Slick.prototype.swipeHandler = function(event) {
        var _ = this;
        if ((_.options.swipe === false) || ('ontouchend' in document && _.options.swipe === false)) return;
        else {
            if (_.options.draggable === false && event.type.indexOf('mouse') !== -1) return;
        }
        _.touchObject.fingerCount = event.originalEvent && event.originalEvent.touches !== undefined ? event.originalEvent.touches.length : 1;
        _.touchObject.minSwipe = _.listWidth / _.options.touchThreshold;
        if (_.options.verticalSwiping === true) _.touchObject.minSwipe = _.listHeight / _.options.touchThreshold;
        switch (event.data.action) {
            case 'start':
                _.swipeStart(event);
                break;
            case 'move':
                _.swipeMove(event);
                break;
            case 'end':
                _.swipeEnd(event);
                break;
        }
    };
    Slick.prototype.swipeMove = function(event) {
        var _ = this,
            edgeWasHit = false,
            curLeft, swipeDirection, swipeLength, positionOffset, touches, verticalSwipeLength;
        touches = event.originalEvent !== undefined ? event.originalEvent.touches : null;
        if (!_.dragging || _.scrolling || touches && touches.length !== 1) return false;
        curLeft = _.getLeft(_.currentSlide);
        _.touchObject.curX = touches !== undefined ? touches[0].pageX : event.clientX;
        _.touchObject.curY = touches !== undefined ? touches[0].pageY : event.clientY;
        _.touchObject.swipeLength = Math.round(Math.sqrt(Math.pow(_.touchObject.curX - _.touchObject.startX, 2)));
        verticalSwipeLength = Math.round(Math.sqrt(Math.pow(_.touchObject.curY - _.touchObject.startY, 2)));
        if (!_.options.verticalSwiping && !_.swiping && verticalSwipeLength > 4) {
            _.scrolling = true;
            return false;
        }
        if (_.options.verticalSwiping === true) _.touchObject.swipeLength = verticalSwipeLength;
        swipeDirection = _.swipeDirection();
        if (event.originalEvent !== undefined && _.touchObject.swipeLength > 4) {
            _.swiping = true;
            event.preventDefault();
        }
        positionOffset = (_.options.rtl === false ? 1 : -1) * (_.touchObject.curX > _.touchObject.startX ? 1 : -1);
        if (_.options.verticalSwiping === true) positionOffset = _.touchObject.curY > _.touchObject.startY ? 1 : -1;
        swipeLength = _.touchObject.swipeLength;
        _.touchObject.edgeHit = false;
        if (_.options.infinite === false)
            if ((_.currentSlide === 0 && swipeDirection === 'right') || (_.currentSlide >= _.getDotCount() && swipeDirection === 'left')) {
                swipeLength = _.touchObject.swipeLength * _.options.edgeFriction;
                _.touchObject.edgeHit = true;
            }
        if (_.options.vertical === false) _.swipeLeft = curLeft + swipeLength * positionOffset;
        else _.swipeLeft = curLeft + (swipeLength * (_.$list.height() / _.listWidth)) * positionOffset;
        if (_.options.verticalSwiping === true) _.swipeLeft = curLeft + swipeLength * positionOffset;
        if (_.options.fade === true || _.options.touchMove === false) return false;
        if (_.animating === true) {
            _.swipeLeft = null;
            return false;
        }
        _.setCSS(_.swipeLeft);
    };
    Slick.prototype.swipeStart = function(event) {
        var _ = this,
            touches;
        _.interrupted = true;
        if (_.touchObject.fingerCount !== 1 || _.slideCount <= _.options.slidesToShow) {
            _.touchObject = {};
            return false;
        }
        if (event.originalEvent !== undefined && event.originalEvent.touches !== undefined) touches = event.originalEvent.touches[0];
        _.touchObject.startX = _.touchObject.curX = touches !== undefined ? touches.pageX : event.clientX;
        _.touchObject.startY = _.touchObject.curY = touches !== undefined ? touches.pageY : event.clientY;
        _.dragging = true;
    };
    Slick.prototype.unfilterSlides = Slick.prototype.slickUnfilter = function() {
        var _ = this;
        if (_.$slidesCache !== null) {
            _.unload();
            _.$slideTrack.children(this.options.slide).detach();
            _.$slidesCache.appendTo(_.$slideTrack);
            _.reinit();
        }
    };
    Slick.prototype.unload = function() {
        var _ = this;
        $('.slick-cloned', _.$slider).remove();
        if (_.$dots) _.$dots.remove();
        if (_.$prevArrow && _.htmlExpr.test(_.options.prevArrow)) _.$prevArrow.remove();
        if (_.$nextArrow && _.htmlExpr.test(_.options.nextArrow)) _.$nextArrow.remove();
        _.$slides.removeClass('slick-slide slick-active slick-visible slick-current').attr('aria-hidden', 'true').css('width', '');
    };
    Slick.prototype.unslick = function(fromBreakpoint) {
        var _ = this;
        _.$slider.trigger('unslick', [_, fromBreakpoint]);
        _.destroy();
    };
    Slick.prototype.updateArrows = function() {
        var _ = this,
            centerOffset;
        centerOffset = Math.floor(_.options.slidesToShow / 2);
        if (_.options.arrows === true && _.slideCount > _.options.slidesToShow && !_.options.infinite) {
            _.$prevArrow.removeClass('slick-disabled').attr('aria-disabled', 'false');
            _.$nextArrow.removeClass('slick-disabled').attr('aria-disabled', 'false');
            if (_.currentSlide === 0) {
                _.$prevArrow.addClass('slick-disabled').attr('aria-disabled', 'true');
                _.$nextArrow.removeClass('slick-disabled').attr('aria-disabled', 'false');
            } else if (_.currentSlide >= _.slideCount - _.options.slidesToShow && _.options.centerMode === false) {
                _.$nextArrow.addClass('slick-disabled').attr('aria-disabled', 'true');
                _.$prevArrow.removeClass('slick-disabled').attr('aria-disabled', 'false');
            } else {
                if (_.currentSlide >= _.slideCount - 1 && _.options.centerMode === true) {
                    _.$nextArrow.addClass('slick-disabled').attr('aria-disabled', 'true');
                    _.$prevArrow.removeClass('slick-disabled').attr('aria-disabled', 'false');
                }
            }
        }
    };
    Slick.prototype.updateDots = function() {
        var _ = this;
        if (_.$dots !== null) {
            _.$dots.find('li').removeClass('slick-active').end();
            _.$dots.find('li').eq(Math.floor(_.currentSlide / _.options.slidesToScroll)).addClass('slick-active');
        }
    };
    Slick.prototype.visibility = function() {
        var _ = this;
        if (_.options.autoplay)
            if (document[_.hidden]) _.interrupted = true;
            else _.interrupted = false;
    };
    $.fn.slick = function() {
        var _ = this,
            opt = arguments[0],
            args = Array.prototype.slice.call(arguments, 1),
            l = _.length,
            i, ret;
        for (i = 0; i < l; i++) {
            if (typeof opt == 'object' || typeof opt == 'undefined') _[i].slick = new Slick(_[i], opt);
            else ret = _[i].slick[opt].apply(_[i].slick, args);
            if (typeof ret != 'undefined') return ret;
        }
        return _;
    };
}));;
(function($) {
    $('body').on('click', '.cta-menu-toggle', function() {
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
document.addEventListener("DOMContentLoaded", function() {
    let paragraphs = document.querySelectorAll("p");
    paragraphs.forEach(function(p) {
        if (p.textContent.trim() === "" && !p.querySelector("img")) p.remove();
    });
});
(function($) {
    $(document).ready(function($) {
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
(function($) {
    $.ajax({
        dataType: 'json',
        url: baseUrl + '?channelId=088f1b87-dbd4-4fa0-84de-9907010972fe&openOption=redirect&culture=da-DK&layout=StandardWideAlternative&containerId=widgetContainer&displayPromoCode=false&displayCorpCode=false&displayIATACode=false&displayCalendarStartsAtFirstAvailableDay=false&currency=DKK',
        xhrFields: {
            withCredentials: true
        },
        success: function(data) {
            $('#widgetContainer').html(data.Widget);
        }
    });
})(jQuery);
var baseUrl = "https://online.bookvisit.com/v2/widget/getwidget";
(function($) {
    $.ajax({
        dataType: 'json',
        url: baseUrl + '?channelId=4bbd2048-c2ab-4fd6-bdd9-e185467b3349&openOption=redirect&culture=da-DK&layout=StandardWideAlternative&containerId=widgetContainer02&displayPromoCode=false&displayCorpCode=false&displayIATACode=false&displayCalendarStartsAtFirstAvailableDay=false&currency=DKK',
        xhrFields: {
            withCredentials: true
        },
        success: function(data) {
            $('#widgetContainer02').html(data.Widget);
        }
    });
})(jQuery);
! function() {
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
    t.prototype.queueTrigger = function(t) {
        this.group.queueTrigger(this, t);
    }, t.prototype.trigger = function(t) {
        this.enabled && this.callback && this.callback.apply(this, t);
    }, t.prototype.destroy = function() {
        this.context.remove(this), this.group.remove(this), delete i[this.key];
    }, t.prototype.disable = function() {
        return this.enabled = !1, this;
    }, t.prototype.enable = function() {
        return this.context.refresh(), this.enabled = !0, this;
    }, t.prototype.next = function() {
        return this.group.next(this);
    }, t.prototype.previous = function() {
        return this.group.previous(this);
    }, t.invokeAll = function(t) {
        var e = [];
        for (var o in i) e.push(i[o]);
        for (var n = 0, r = e.length; r > n; n++) e[n][t]();
    }, t.destroyAll = function() {
        t.invokeAll("destroy");
    }, t.disableAll = function() {
        t.invokeAll("disable");
    }, t.enableAll = function() {
        t.invokeAll("enable");
    }, t.refreshAll = function() {
        t.Context.refreshAll();
    }, t.viewportHeight = function() {
        return window.innerHeight || document.documentElement.clientHeight;
    }, t.viewportWidth = function() {
        return document.documentElement.clientWidth;
    }, t.adapters = [], t.defaults = {
        context: window,
        continuous: !0,
        enabled: !0,
        group: "default",
        horizontal: !1,
        offset: 0
    }, t.offsetAliases = {
        "bottom-in-view": function() {
            return this.context.innerHeight() - this.adapter.outerHeight();
        },
        "right-in-view": function() {
            return this.context.innerWidth() - this.adapter.outerWidth();
        }
    }, window.Waypoint = t;
}(),
function() {
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
    e.prototype.add = function(t) {
        var e = t.options.horizontal ? "horizontal" : "vertical";
        this.waypoints[e][t.key] = t, this.refresh();
    }, e.prototype.checkEmpty = function() {
        var t = this.Adapter.isEmptyObject(this.waypoints.horizontal),
            e = this.Adapter.isEmptyObject(this.waypoints.vertical);
        t && e && (this.adapter.off(".waypoints"), delete o[this.key]);
    }, e.prototype.createThrottledResizeHandler = function() {
        function t() {
            e.handleResize(), e.didResize = !1;
        }
        var e = this;
        this.adapter.on("resize.waypoints", function() {
            e.didResize || (e.didResize = !0, n.requestAnimationFrame(t));
        });
    }, e.prototype.createThrottledScrollHandler = function() {
        function t() {
            e.handleScroll(), e.didScroll = !1;
        }
        var e = this;
        this.adapter.on("scroll.waypoints", function() {
            (!e.didScroll || n.isTouch) && (e.didScroll = !0, n.requestAnimationFrame(t));
        });
    }, e.prototype.handleResize = function() {
        n.Context.refreshAll();
    }, e.prototype.handleScroll = function() {
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
    }, e.prototype.innerHeight = function() {
        return this.element == this.element.window ? n.viewportHeight() : this.adapter.innerHeight();
    }, e.prototype.remove = function(t) {
        delete this.waypoints[t.axis][t.key], this.checkEmpty();
    }, e.prototype.innerWidth = function() {
        return this.element == this.element.window ? n.viewportWidth() : this.adapter.innerWidth();
    }, e.prototype.destroy = function() {
        var t = [];
        for (var e in this.waypoints)
            for (var i in this.waypoints[e]) t.push(this.waypoints[e][i]);
        for (var o = 0, n = t.length; n > o; o++) t[o].destroy();
    }, e.prototype.refresh = function() {
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
        return n.requestAnimationFrame(function() {
            for (var t in o) o[t].flushTriggers();
        }), this;
    }, e.findOrCreateByElement = function(t) {
        return e.findByElement(t) || new e(t);
    }, e.refreshAll = function() {
        for (var t in o) o[t].refresh();
    }, e.findByElement = function(t) {
        return o[t.waypointContextKey];
    }, window.onload = function() {
        r && r(), e.refreshAll();
    }, n.requestAnimationFrame = function(e) {
        var i = window.requestAnimationFrame || window.mozRequestAnimationFrame || window.webkitRequestAnimationFrame || t;
        i.call(window, e);
    }, n.Context = e;
}(),
function() {
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
    i.prototype.add = function(t) {
        this.waypoints.push(t);
    }, i.prototype.clearTriggerQueues = function() {
        this.triggerQueues = {
            up: [],
            down: [],
            left: [],
            right: []
        };
    }, i.prototype.flushTriggers = function() {
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
    }, i.prototype.next = function(e) {
        this.waypoints.sort(t);
        var i = n.Adapter.inArray(e, this.waypoints),
            o = i === this.waypoints.length - 1;
        return o ? null : this.waypoints[i + 1];
    }, i.prototype.previous = function(e) {
        this.waypoints.sort(t);
        var i = n.Adapter.inArray(e, this.waypoints);
        return i ? this.waypoints[i - 1] : null;
    }, i.prototype.queueTrigger = function(t, e) {
        this.triggerQueues[e].push(t);
    }, i.prototype.remove = function(t) {
        var e = n.Adapter.inArray(t, this.waypoints);
        e > -1 && this.waypoints.splice(e, 1);
    }, i.prototype.first = function() {
        return this.waypoints[0];
    }, i.prototype.last = function() {
        return this.waypoints[this.waypoints.length - 1];
    }, i.findOrCreate = function(t) {
        return o[t.axis][t.name] || new i(t);
    }, n.Group = i;
}(),
function() {
    "use strict";

    function t(t) {
        this.$element = e(t);
    }
    var e = window.jQuery,
        i = window.Waypoint;
    e.each(["innerHeight", "innerWidth", "off", "offset", "on", "outerHeight", "outerWidth", "scrollLeft", "scrollTop"], function(e, i) {
        t.prototype[i] = function() {
            var t = Array.prototype.slice.call(arguments);
            return this.$element[i].apply(this.$element, t);
        };
    }), e.each(["extend", "inArray", "isEmptyObject"], function(i, o) {
        t[o] = e[o];
    }), i.adapters.push({
        name: "jquery",
        Adapter: t
    }), i.Adapter = t;
}(),
function() {
    "use strict";

    function t(t) {
        return function() {
            var i = [],
                o = arguments[0];
            return t.isFunction(arguments[0]) && (o = t.extend({}, arguments[1]), o.handler = arguments[0]), this.each(function() {
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
(function($) {
    "use strict";
    $.fn.counterUp = function(options) {
        var settings = $.extend({
                time: 400,
                delay: 10,
                offset: 100,
                beginAt: 0,
                formatter: false,
                context: "window",
                callback: function() {}
            }, options),
            s;
        return this.each(function() {
            var $this = $(this),
                counter = {
                    time: $(this).data("counterup-time") || settings.time,
                    delay: $(this).data("counterup-delay") || settings.delay,
                    offset: $(this).data("counterup-offset") || settings.offset,
                    beginAt: $(this).data("counterup-beginat") || settings.beginAt,
                    context: $(this).data("counterup-context") || settings.context
                };
            var counterUpper = function() {
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
                var f = function() {
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
            $this.waypoint(function(direction) {
                counterUpper();
                this.destroy();
            }, {
                offset: counter.offset + "%",
                context: counter.context
            });
        });
    };
})(jQuery);
document.addEventListener("DOMContentLoaded", function() {
    var referenceLinks = document.querySelectorAll('.reference-link a');
    referenceLinks.forEach(function(link) {
        link.setAttribute('target', '_blank');
    });
});;
(function($, Drupal) {
    'use strict';
    $(document).ready(function() {
        $('input').on('focus', function() {
            var head = document.getElementsByTagName('head')[0];
            var script = document.createElement('script');
            script.type = 'text/javascript';
            var site_key = $('.recaptcha-v3-token:first').data('recaptchaV3SiteKey');
            script.src = 'https://www.google.com/recaptcha/api.js?onload=renderReCaptcha&render=' + site_key;
            head.appendChild(script);
        });

        function renderReCaptcha() {
            $('.recaptcha-v3-token').each(function() {
                var $token_element = $(this);
                grecaptcha.ready(function() {
                    grecaptcha.execute($token_element.data('recaptchaV3SiteKey'), {
                        action: $token_element.data('recaptchaV3Action')
                    }).then(function(token) {
                        $token_element.val(token);
                        $token_element.trigger('change');
                    });
                });
            });
        }
        window.renderReCaptcha = renderReCaptcha;
    });
})(jQuery, Drupal);;
/* @license GPL-2.0-or-later https://raw.githubusercontent.com/jquery-form/form/master/LICENSE */
(function(factory) {
    if (typeof define === 'function' && define.amd) define(['jquery'], factory);
    else if (typeof module === 'object' && module.exports) module.exports = function(root, jQuery) {
        if (typeof jQuery === 'undefined')
            if (typeof window !== 'undefined') jQuery = require('jquery');
            else jQuery = require('jquery')(root);
        factory(jQuery);
        return jQuery;
    };
    else factory(jQuery);
}(function($) {
    'use strict';
    var rCRLF = /\r?\n/g;
    var feature = {};
    feature.fileapi = $('<input type="file">').get(0).files !== undefined;
    feature.formdata = (typeof window.FormData !== 'undefined');
    var hasProp = !!$.fn.prop;
    $.fn.attr2 = function() {
        if (!hasProp) return this.attr.apply(this, arguments);
        var val = this.prop.apply(this, arguments);
        if ((val && val.jquery) || typeof val === 'string') return val;
        return this.attr.apply(this, arguments);
    };
    $.fn.ajaxSubmit = function(options, data, dataType, onSuccess) {
        if (!this.length) {
            log('ajaxSubmit: skipping submit process - no element selected');
            return this;
        }
        var method, action, url, isMsie, iframeSrc, $form = this;
        if (typeof options === 'function') options = {
            success: options
        };
        else if (typeof options === 'string' || (options === false && arguments.length > 0)) {
            options = {
                'url': options,
                'data': data,
                'dataType': dataType
            };
            if (typeof onSuccess === 'function') options.success = onSuccess;
        } else {
            if (typeof options === 'undefined') options = {};
        }
        method = options.method || options.type || this.attr2('method');
        action = options.url || this.attr2('action');
        url = (typeof action === 'string') ? action.trim() : '';
        url = url || window.location.href || '';
        if (url) url = (url.match(/^([^#]+)/) || [])[1];
        isMsie = /(MSIE|Trident)/.test(navigator.userAgent || '');
        iframeSrc = (isMsie && /^https/i.test(window.location.href || '')) ? 'javascript:false' : 'about:blank';
        options = $.extend(true, {
            url,
            success: $.ajaxSettings.success,
            type: method || $.ajaxSettings.type,
            iframeSrc
        }, options);
        var veto = {};
        this.trigger('form-pre-serialize', [this, options, veto]);
        if (veto.veto) {
            log('ajaxSubmit: submit vetoed via form-pre-serialize trigger');
            return this;
        }
        if (options.beforeSerialize && options.beforeSerialize(this, options) === false) {
            log('ajaxSubmit: submit aborted via beforeSerialize callback');
            return this;
        }
        var traditional = options.traditional;
        if (typeof traditional === 'undefined') traditional = $.ajaxSettings.traditional;
        var elements = [];
        var qx, a = this.formToArray(options.semantic, elements, options.filtering);
        if (options.data) {
            var optionsData = typeof(options.data) === "function" ? options.data(a) : options.data;
            options.extraData = optionsData;
            qx = $.param(optionsData, traditional);
        }
        if (options.beforeSubmit && options.beforeSubmit(a, this, options) === false) {
            log('ajaxSubmit: submit aborted via beforeSubmit callback');
            return this;
        }
        this.trigger('form-submit-validate', [a, this, options, veto]);
        if (veto.veto) {
            log('ajaxSubmit: submit vetoed via form-submit-validate trigger');
            return this;
        }
        var q = $.param(a, traditional);
        if (qx) q = (q ? (q + '&' + qx) : qx);
        if (options.type.toUpperCase() === 'GET') {
            options.url += (options.url.indexOf('?') >= 0 ? '&' : '?') + q;
            options.data = null;
        } else options.data = q;
        var callbacks = [];
        if (options.resetForm) callbacks.push(function() {
            $form.resetForm();
        });
        if (options.clearForm) callbacks.push(function() {
            $form.clearForm(options.includeHidden);
        });
        if (!options.dataType && options.target) {
            var oldSuccess = options.success || function() {};
            callbacks.push(function(data, textStatus, jqXHR) {
                var successArguments = arguments,
                    fn = options.replaceTarget ? 'replaceWith' : 'html';
                $(options.target)[fn](data).each(function() {
                    oldSuccess.apply(this, successArguments);
                });
            });
        } else {
            if (options.success)
                if (Array.isArray(options.success)) callbacks = callbacks.concat(options.success);
                else callbacks.push(options.success);
        }
        options.success = function(data, status, xhr) {
            var context = options.context || this;
            for (var i = 0, max = callbacks.length; i < max; i++) callbacks[i].apply(context, [data, status, xhr || $form, $form]);
        };
        if (options.error) {
            var oldError = options.error;
            options.error = function(xhr, status, error) {
                var context = options.context || this;
                oldError.apply(context, [xhr, status, error, $form]);
            };
        }
        if (options.complete) {
            var oldComplete = options.complete;
            options.complete = function(xhr, status) {
                var context = options.context || this;
                oldComplete.apply(context, [xhr, status, $form]);
            };
        }
        var fileInputs = $('input[type=file]:enabled', this).filter(function() {
            return $(this).val() !== '';
        });
        var hasFileInputs = fileInputs.length > 0;
        var mp = 'multipart/form-data';
        var multipart = ($form.attr('enctype') === mp || $form.attr('encoding') === mp);
        var fileAPI = feature.fileapi && feature.formdata;
        log('fileAPI :' + fileAPI);
        var shouldUseFrame = (hasFileInputs || multipart) && !fileAPI;
        var jqxhr;
        if (options.iframe !== false && (options.iframe || shouldUseFrame))
            if (options.closeKeepAlive) $.get(options.closeKeepAlive, function() {
                jqxhr = fileUploadIframe(a);
            });
            else jqxhr = fileUploadIframe(a);
        else if ((hasFileInputs || multipart) && fileAPI) jqxhr = fileUploadXhr(a);
        else jqxhr = $.ajax(options);
        $form.removeData('jqxhr').data('jqxhr', jqxhr);
        for (var k = 0; k < elements.length; k++) elements[k] = null;
        this.trigger('form-submit-notify', [this, options]);
        return this;

        function deepSerialize(extraData) {
            var serialized = $.param(extraData, options.traditional).split('&');
            var len = serialized.length;
            var result = [];
            var i, part;
            for (i = 0; i < len; i++) {
                serialized[i] = serialized[i].replace(/\+/g, ' ');
                part = serialized[i].split('=');
                result.push([decodeURIComponent(part[0]), decodeURIComponent(part[1])]);
            }
            return result;
        }

        function fileUploadXhr(a) {
            var formdata = new FormData();
            for (var i = 0; i < a.length; i++) formdata.append(a[i].name, a[i].value);
            if (options.extraData) {
                var serializedData = deepSerialize(options.extraData);
                for (i = 0; i < serializedData.length; i++)
                    if (serializedData[i]) formdata.append(serializedData[i][0], serializedData[i][1]);
            }
            options.data = null;
            var s = $.extend(true, {}, $.ajaxSettings, options, {
                contentType: false,
                processData: false,
                cache: false,
                type: method || 'POST'
            });
            if (options.uploadProgress) s.xhr = function() {
                var xhr = $.ajaxSettings.xhr();
                if (xhr.upload) xhr.upload.addEventListener('progress', function(event) {
                    var percent = 0;
                    var position = event.loaded || event.position;
                    var total = event.total;
                    if (event.lengthComputable) percent = Math.ceil(position / total * 100);
                    options.uploadProgress(event, position, total, percent);
                }, false);
                return xhr;
            };
            s.data = null;
            var beforeSend = s.beforeSend;
            s.beforeSend = function(xhr, o) {
                if (options.formData) o.data = options.formData;
                else o.data = formdata;
                if (beforeSend) beforeSend.call(this, xhr, o);
            };
            return $.ajax(s);
        }

        function fileUploadIframe(a) {
            var form = $form[0],
                el, i, s, g, id, $io, io, xhr, sub, n, timedOut, timeoutHandle;
            var deferred = $.Deferred();
            deferred.abort = function(status) {
                xhr.abort(status);
            };
            if (a)
                for (i = 0; i < elements.length; i++) {
                    el = $(elements[i]);
                    if (hasProp) el.prop('disabled', false);
                    else el.removeAttr('disabled');
                }
            s = $.extend(true, {}, $.ajaxSettings, options);
            s.context = s.context || s;
            id = 'jqFormIO' + new Date().getTime();
            var ownerDocument = form.ownerDocument;
            var $body = $form.closest('body');
            if (s.iframeTarget) {
                $io = $(s.iframeTarget, ownerDocument);
                n = $io.attr2('name');
                if (!n) $io.attr2('name', id);
                else id = n;
            } else {
                $io = $('<iframe name="' + id + '" src="' + s.iframeSrc + '" />', ownerDocument);
                $io.css({
                    position: 'absolute',
                    top: '-1000px',
                    left: '-1000px'
                });
            }
            io = $io[0];
            xhr = {
                aborted: 0,
                responseText: null,
                responseXML: null,
                status: 0,
                statusText: 'n/a',
                getAllResponseHeaders: function() {},
                getResponseHeader: function() {},
                setRequestHeader: function() {},
                abort: function(status) {
                    var e = (status === 'timeout' ? 'timeout' : 'aborted');
                    log('aborting upload... ' + e);
                    this.aborted = 1;
                    try {
                        if (io.contentWindow.document.execCommand) io.contentWindow.document.execCommand('Stop');
                    } catch (ignore) {}
                    $io.attr('src', s.iframeSrc);
                    xhr.error = e;
                    if (s.error) s.error.call(s.context, xhr, e, status);
                    if (g) $.event.trigger('ajaxError', [xhr, s, e]);
                    if (s.complete) s.complete.call(s.context, xhr, e);
                }
            };
            g = s.global;
            if (g && $.active++ === 0) $.event.trigger('ajaxStart');
            if (g) $.event.trigger('ajaxSend', [xhr, s]);
            if (s.beforeSend && s.beforeSend.call(s.context, xhr, s) === false) {
                if (s.global) $.active--;
                deferred.reject();
                return deferred;
            }
            if (xhr.aborted) {
                deferred.reject();
                return deferred;
            }
            sub = form.clk;
            if (sub) {
                n = sub.name;
                if (n && !sub.disabled) {
                    s.extraData = s.extraData || {};
                    s.extraData[n] = sub.value;
                    if (sub.type === 'image') {
                        s.extraData[n + '.x'] = form.clk_x;
                        s.extraData[n + '.y'] = form.clk_y;
                    }
                }
            }
            var CLIENT_TIMEOUT_ABORT = 1;
            var SERVER_ABORT = 2;

            function getDoc(frame) {
                var doc = null;
                try {
                    if (frame.contentWindow) doc = frame.contentWindow.document;
                } catch (err) {
                    log('cannot get iframe.contentWindow document: ' + err);
                }
                if (doc) return doc;
                try {
                    doc = frame.contentDocument ? frame.contentDocument : frame.document;
                } catch (err) {
                    log('cannot get iframe.contentDocument: ' + err);
                    doc = frame.document;
                }
                return doc;
            }
            var csrf_token = $('meta[name=csrf-token]').attr('content');
            var csrf_param = $('meta[name=csrf-param]').attr('content');
            if (csrf_param && csrf_token) {
                s.extraData = s.extraData || {};
                s.extraData[csrf_param] = csrf_token;
            }

            function doSubmit() {
                var t = $form.attr2('target'),
                    a = $form.attr2('action'),
                    mp = 'multipart/form-data',
                    et = $form.attr('enctype') || $form.attr('encoding') || mp;
                form.setAttribute('target', id);
                if (!method || /post/i.test(method)) form.setAttribute('method', 'POST');
                if (a !== s.url) form.setAttribute('action', s.url);
                if (!s.skipEncodingOverride && (!method || /post/i.test(method))) $form.attr({
                    encoding: 'multipart/form-data',
                    enctype: 'multipart/form-data'
                });
                if (s.timeout) timeoutHandle = setTimeout(function() {
                    timedOut = true;
                    cb(CLIENT_TIMEOUT_ABORT);
                }, s.timeout);

                function checkState() {
                    try {
                        var state = getDoc(io).readyState;
                        log('state = ' + state);
                        if (state && state.toLowerCase() === 'uninitialized') setTimeout(checkState, 50);
                    } catch (e) {
                        log('Server abort: ', e, ' (', e.name, ')');
                        cb(SERVER_ABORT);
                        if (timeoutHandle) clearTimeout(timeoutHandle);
                        timeoutHandle = undefined;
                    }
                }
                var extraInputs = [];
                try {
                    if (s.extraData)
                        for (var n in s.extraData)
                            if (s.extraData.hasOwnProperty(n))
                                if ($.isPlainObject(s.extraData[n]) && s.extraData[n].hasOwnProperty('name') && s.extraData[n].hasOwnProperty('value')) extraInputs.push($('<input type="hidden" name="' + s.extraData[n].name + '">', ownerDocument).val(s.extraData[n].value).appendTo(form)[0]);
                                else extraInputs.push($('<input type="hidden" name="' + n + '">', ownerDocument).val(s.extraData[n]).appendTo(form)[0]);
                    if (!s.iframeTarget) $io.appendTo($body);
                    if (io.attachEvent) io.attachEvent('onload', cb);
                    else io.addEventListener('load', cb, false);
                    setTimeout(checkState, 15);
                    try {
                        form.submit();
                    } catch (err) {
                        var submitFn = document.createElement('form').submit;
                        submitFn.apply(form);
                    }
                } finally {
                    form.setAttribute('action', a);
                    form.setAttribute('enctype', et);
                    if (t) form.setAttribute('target', t);
                    else $form.removeAttr('target');
                    $(extraInputs).remove();
                }
            }
            if (s.forceSync) doSubmit();
            else setTimeout(doSubmit, 10);
            var data, doc, domCheckCount = 50,
                callbackProcessed;

            function cb(e) {
                if (xhr.aborted || callbackProcessed) return;
                doc = getDoc(io);
                if (!doc) {
                    log('cannot access response document');
                    e = SERVER_ABORT;
                }
                if (e === CLIENT_TIMEOUT_ABORT && xhr) {
                    xhr.abort('timeout');
                    deferred.reject(xhr, 'timeout');
                    return;
                }
                if (e === SERVER_ABORT && xhr) {
                    xhr.abort('server abort');
                    deferred.reject(xhr, 'error', 'server abort');
                    return;
                }
                if (!doc || doc.location.href === s.iframeSrc)
                    if (!timedOut) return;
                if (io.detachEvent) io.detachEvent('onload', cb);
                else io.removeEventListener('load', cb, false);
                var status = 'success',
                    errMsg;
                try {
                    if (timedOut) throw 'timeout';
                    var isXml = s.dataType === 'xml' || doc.XMLDocument || $.isXMLDoc(doc);
                    log('isXml=' + isXml);
                    if (!isXml && window.opera && (doc.body === null || !doc.body.innerHTML))
                        if (--domCheckCount) {
                            log('requeing onLoad callback, DOM not available');
                            setTimeout(cb, 250);
                            return;
                        }
                    var docRoot = doc.body ? doc.body : doc.documentElement;
                    xhr.responseText = docRoot ? docRoot.innerHTML : null;
                    xhr.responseXML = doc.XMLDocument ? doc.XMLDocument : doc;
                    if (isXml) s.dataType = 'xml';
                    xhr.getResponseHeader = function(header) {
                        var headers = {
                            'content-type': s.dataType
                        };
                        return headers[header.toLowerCase()];
                    };
                    if (docRoot) {
                        xhr.status = Number(docRoot.getAttribute('status')) || xhr.status;
                        xhr.statusText = docRoot.getAttribute('statusText') || xhr.statusText;
                    }
                    var dt = (s.dataType || '').toLowerCase();
                    var scr = /(json|script|text)/.test(dt);
                    if (scr || s.textarea) {
                        var ta = doc.getElementsByTagName('textarea')[0];
                        if (ta) {
                            xhr.responseText = ta.value;
                            xhr.status = Number(ta.getAttribute('status')) || xhr.status;
                            xhr.statusText = ta.getAttribute('statusText') || xhr.statusText;
                        } else {
                            if (scr) {
                                var pre = doc.getElementsByTagName('pre')[0];
                                var b = doc.getElementsByTagName('body')[0];
                                if (pre) xhr.responseText = pre.textContent ? pre.textContent : pre.innerText;
                                else {
                                    if (b) xhr.responseText = b.textContent ? b.textContent : b.innerText;
                                }
                            }
                        }
                    } else {
                        if (dt === 'xml' && !xhr.responseXML && xhr.responseText) xhr.responseXML = toXml(xhr.responseText);
                    }
                    try {
                        data = httpData(xhr, dt, s);
                    } catch (err) {
                        status = 'parsererror';
                        xhr.error = errMsg = (err || status);
                    }
                } catch (err) {
                    log('error caught: ', err);
                    status = 'error';
                    xhr.error = errMsg = (err || status);
                }
                if (xhr.aborted) {
                    log('upload aborted');
                    status = null;
                }
                if (xhr.status) status = ((xhr.status >= 200 && xhr.status < 300) || xhr.status === 304) ? 'success' : 'error';
                if (status === 'success') {
                    if (s.success) s.success.call(s.context, data, 'success', xhr);
                    deferred.resolve(xhr.responseText, 'success', xhr);
                    if (g) $.event.trigger('ajaxSuccess', [xhr, s]);
                } else {
                    if (status) {
                        if (typeof errMsg === 'undefined') errMsg = xhr.statusText;
                        if (s.error) s.error.call(s.context, xhr, status, errMsg);
                        deferred.reject(xhr, 'error', errMsg);
                        if (g) $.event.trigger('ajaxError', [xhr, s, errMsg]);
                    }
                }
                if (g) $.event.trigger('ajaxComplete', [xhr, s]);
                if (g && !--$.active) $.event.trigger('ajaxStop');
                if (s.complete) s.complete.call(s.context, xhr, status);
                callbackProcessed = true;
                if (s.timeout) clearTimeout(timeoutHandle);
                setTimeout(function() {
                    if (!s.iframeTarget) $io.remove();
                    else $io.attr('src', s.iframeSrc);
                    xhr.responseXML = null;
                }, 100);
            }
            var toXml = $.parseXML || function(s, doc) {
                if (window.ActiveXObject) {
                    doc = new ActiveXObject('Microsoft.XMLDOM');
                    doc.async = 'false';
                    doc.loadXML(s);
                } else doc = (new DOMParser()).parseFromString(s, 'text/xml');
                return (doc && doc.documentElement && doc.documentElement.nodeName !== 'parsererror') ? doc : null;
            };
            var parseJSON = $.parseJSON || function(s) {
                return window['eval']('(' + s + ')');
            };
            var httpData = function(xhr, type, s) {
                var ct = xhr.getResponseHeader('content-type') || '',
                    xml = ((type === 'xml' || !type) && ct.indexOf('xml') >= 0),
                    data = xml ? xhr.responseXML : xhr.responseText;
                if (xml && data.documentElement.nodeName === 'parsererror')
                    if ($.error) $.error('parsererror');
                if (s && s.dataFilter) data = s.dataFilter(data, type);
                if (typeof data === 'string')
                    if ((type === 'json' || !type) && ct.indexOf('json') >= 0) data = parseJSON(data);
                    else {
                        if ((type === 'script' || !type) && ct.indexOf('javascript') >= 0) $.globalEval(data);
                    }
                return data;
            };
            return deferred;
        }
    };
    $.fn.ajaxForm = function(options, data, dataType, onSuccess) {
        if (typeof options === 'string' || (options === false && arguments.length > 0)) {
            options = {
                'url': options,
                'data': data,
                'dataType': dataType
            };
            if (typeof onSuccess === 'function') options.success = onSuccess;
        }
        options = options || {};
        options.delegation = options.delegation && typeof $.fn.on === 'function';
        if (!options.delegation && this.length === 0) {
            var o = {
                s: this.selector,
                c: this.context
            };
            if (!$.isReady && o.s) {
                log('DOM not ready, queuing ajaxForm');
                $(function() {
                    $(o.s, o.c).ajaxForm(options);
                });
                return this;
            }
            log('terminating; zero elements found by selector' + ($.isReady ? '' : ' (DOM not ready)'));
            return this;
        }
        if (options.delegation) {
            $(document).off('submit.form-plugin', this.selector, doAjaxSubmit).off('click.form-plugin', this.selector, captureSubmittingElement).on('submit.form-plugin', this.selector, options, doAjaxSubmit).on('click.form-plugin', this.selector, options, captureSubmittingElement);
            return this;
        }
        if (options.beforeFormUnbind) options.beforeFormUnbind(this, options);
        return this.ajaxFormUnbind().on('submit.form-plugin', options, doAjaxSubmit).on('click.form-plugin', options, captureSubmittingElement);
    };

    function doAjaxSubmit(e) {
        var options = e.data;
        if (!e.isDefaultPrevented()) {
            e.preventDefault();
            $(e.target).closest('form').ajaxSubmit(options);
        }
    }

    function captureSubmittingElement(e) {
        var target = e.target;
        var $el = $(target);
        if (!$el.is('[type=submit],[type=image]')) {
            var t = $el.closest('[type=submit]');
            if (t.length === 0) return;
            target = t[0];
        }
        var form = target.form;
        form.clk = target;
        if (target.type === 'image')
            if (typeof e.offsetX !== 'undefined') {
                form.clk_x = e.offsetX;
                form.clk_y = e.offsetY;
            } else if (typeof $.fn.offset === 'function') {
            var offset = $el.offset();
            form.clk_x = e.pageX - offset.left;
            form.clk_y = e.pageY - offset.top;
        } else {
            form.clk_x = e.pageX - target.offsetLeft;
            form.clk_y = e.pageY - target.offsetTop;
        }
        setTimeout(function() {
            form.clk = form.clk_x = form.clk_y = null;
        }, 100);
    }
    $.fn.ajaxFormUnbind = function() {
        return this.off('submit.form-plugin click.form-plugin');
    };
    $.fn.formToArray = function(semantic, elements, filtering) {
        var a = [];
        if (this.length === 0) return a;
        var form = this[0];
        var formId = this.attr('id');
        var els = (semantic || typeof form.elements === 'undefined') ? form.getElementsByTagName('*') : form.elements;
        var els2;
        if (els) els = $.makeArray(els);
        if (formId && (semantic || /(Edge|Trident)\//.test(navigator.userAgent))) {
            els2 = $(':input[form="' + formId + '"]').get();
            if (els2.length) els = (els || []).concat(els2);
        }
        if (!els || !els.length) return a;
        if (typeof(filtering) === "function") els = $.map(els, filtering);
        var i, j, n, v, el, max, jmax;
        for (i = 0, max = els.length; i < max; i++) {
            el = els[i];
            n = el.name;
            if (!n || el.disabled) continue;
            if (semantic && form.clk && el.type === 'image') {
                if (form.clk === el) {
                    a.push({
                        name: n,
                        value: $(el).val(),
                        type: el.type
                    });
                    a.push({
                        name: n + '.x',
                        value: form.clk_x
                    }, {
                        name: n + '.y',
                        value: form.clk_y
                    });
                }
                continue;
            }
            v = $.fieldValue(el, true);
            if (v && v.constructor === Array) {
                if (elements) elements.push(el);
                for (j = 0, jmax = v.length; j < jmax; j++) a.push({
                    name: n,
                    value: v[j]
                });
            } else if (feature.fileapi && el.type === 'file') {
                if (elements) elements.push(el);
                var files = el.files;
                if (files.length)
                    for (j = 0; j < files.length; j++) a.push({
                        name: n,
                        value: files[j],
                        type: el.type
                    });
                else a.push({
                    name: n,
                    value: '',
                    type: el.type
                });
            } else {
                if (v !== null && typeof v !== 'undefined') {
                    if (elements) elements.push(el);
                    a.push({
                        name: n,
                        value: v,
                        type: el.type,
                        required: el.required
                    });
                }
            }
        }
        if (!semantic && form.clk) {
            var $input = $(form.clk),
                input = $input[0];
            n = input.name;
            if (n && !input.disabled && input.type === 'image') {
                a.push({
                    name: n,
                    value: $input.val()
                });
                a.push({
                    name: n + '.x',
                    value: form.clk_x
                }, {
                    name: n + '.y',
                    value: form.clk_y
                });
            }
        }
        return a;
    };
    $.fn.formSerialize = function(semantic) {
        return $.param(this.formToArray(semantic));
    };
    $.fn.fieldSerialize = function(successful) {
        var a = [];
        this.each(function() {
            var n = this.name;
            if (!n) return;
            var v = $.fieldValue(this, successful);
            if (v && v.constructor === Array)
                for (var i = 0, max = v.length; i < max; i++) a.push({
                    name: n,
                    value: v[i]
                });
            else {
                if (v !== null && typeof v !== 'undefined') a.push({
                    name: this.name,
                    value: v
                });
            }
        });
        return $.param(a);
    };
    $.fn.fieldValue = function(successful) {
        for (var val = [], i = 0, max = this.length; i < max; i++) {
            var el = this[i];
            var v = $.fieldValue(el, successful);
            if (v === null || typeof v === 'undefined' || (v.constructor === Array && !v.length)) continue;
            if (Array.isArray(v)) val = val.concat(v);
            else val.push(v);
        }
        return val;
    };
    $.fieldValue = function(el, successful) {
        var n = el.name,
            t = el.type,
            tag = el.tagName.toLowerCase();
        if (typeof successful === 'undefined') successful = true;
        if (successful && (!n || el.disabled || t === 'reset' || t === 'button' || (t === 'checkbox' || t === 'radio') && !el.checked || (t === 'submit' || t === 'image') && el.form && el.form.clk !== el || tag === 'select' && el.selectedIndex === -1)) return null;
        if (tag === 'select') {
            var index = el.selectedIndex;
            if (index < 0) return null;
            var a = [],
                ops = el.options;
            var one = (t === 'select-one');
            var max = (one ? index + 1 : ops.length);
            for (var i = (one ? index : 0); i < max; i++) {
                var op = ops[i];
                if (op.selected && !op.disabled) {
                    var v = op.value;
                    if (!v) v = (op.attributes && op.attributes.value && !(op.attributes.value.specified)) ? op.text : op.value;
                    if (one) return v;
                    a.push(v);
                }
            }
            return a;
        }
        return $(el).val().replace(rCRLF, '\r\n');
    };
    $.fn.clearForm = function(includeHidden) {
        return this.each(function() {
            $('input,select,textarea', this).clearFields(includeHidden);
        });
    };
    $.fn.clearFields = $.fn.clearInputs = function(includeHidden) {
        var re = /^(?:color|date|datetime|email|month|number|password|range|search|tel|text|time|url|week)$/i;
        return this.each(function() {
            var t = this.type,
                tag = this.tagName.toLowerCase();
            if (re.test(t) || tag === 'textarea') this.value = '';
            else if (t === 'checkbox' || t === 'radio') this.checked = false;
            else if (tag === 'select') this.selectedIndex = -1;
            else if (t === 'file')
                if (/MSIE/.test(navigator.userAgent)) $(this).replaceWith($(this).clone(true));
                else $(this).val('');
            else {
                if (includeHidden)
                    if ((includeHidden === true && /hidden/.test(t)) || (typeof includeHidden === 'string' && $(this).is(includeHidden))) this.value = '';
            }
        });
    };
    $.fn.resetForm = function() {
        return this.each(function() {
            var el = $(this);
            var tag = this.tagName.toLowerCase();
            switch (tag) {
                case 'input':
                    this.checked = this.defaultChecked;
                case 'textarea':
                    this.value = this.defaultValue;
                    return true;
                case 'option':
                case 'optgroup':
                    var select = el.parents('select');
                    if (select.length && select[0].multiple)
                        if (tag === 'option') this.selected = this.defaultSelected;
                        else el.find('option').resetForm();
                    else select.resetForm();
                    return true;
                case 'select':
                    el.find('option').each(function(i) {
                        this.selected = this.defaultSelected;
                        if (this.defaultSelected && !el[0].multiple) {
                            el[0].selectedIndex = i;
                            return false;
                        }
                    });
                    return true;
                case 'label':
                    var forEl = $(el.attr('for'));
                    var list = el.find('input,select,textarea');
                    if (forEl[0]) list.unshift(forEl[0]);
                    list.resetForm();
                    return true;
                case 'form':
                    if (typeof this.reset === 'function' || (typeof this.reset === 'object' && !this.reset.nodeType)) this.reset();
                    return true;
                default:
                    el.find('form,input,label,select,textarea').resetForm();
                    return true;
            }
        });
    };
    $.fn.enable = function(b) {
        if (typeof b === 'undefined') b = true;
        return this.each(function() {
            this.disabled = !b;
        });
    };
    $.fn.selected = function(select) {
        if (typeof select === 'undefined') select = true;
        return this.each(function() {
            var t = this.type;
            if (t === 'checkbox' || t === 'radio') this.checked = select;
            else {
                if (this.tagName.toLowerCase() === 'option') {
                    var $sel = $(this).parent('select');
                    if (select && $sel[0] && $sel[0].type === 'select-one') $sel.find('option').selected(false);
                    this.selected = select;
                }
            }
        });
    };
    $.fn.ajaxSubmit.debug = false;

    function log() {
        if (!$.fn.ajaxSubmit.debug) return;
        var msg = '[jquery.form] ' + Array.prototype.join.call(arguments, '');
        if (window.console && window.console.log) window.console.log(msg);
        else {
            if (window.opera && window.opera.postError) window.opera.postError(msg);
        }
    }
}));;
/* @license GPL-2.0-or-later https://www.drupal.org/licensing/faq */
(function($, Drupal, drupalSettings) {
    Drupal.Views = {};
    Drupal.Views.parseQueryString = function(query) {
        const args = {};
        if (query.includes('?')) query = query.substring(query.indexOf('?') + 1);
        let pair;
        const pairs = query.split('&');
        for (let i = 0; i < pairs.length; i++) {
            pair = pairs[i].split('=');
            if (pair[0] !== 'q')
                if (pair[1]) args[decodeURIComponent(pair[0].replace(/\+/g, ' '))] = decodeURIComponent(pair[1].replace(/\+/g, ' '));
                else args[decodeURIComponent(pair[0].replace(/\+/g, ' '))] = '';
        }
        return args;
    };
    Drupal.Views.parseViewArgs = function(href, viewPath) {
        const returnObj = {};
        const path = Drupal.Views.getPath(href);
        const viewHref = Drupal.url(viewPath).substring(drupalSettings.path.baseUrl.length);
        if (viewHref && path.startsWith(`${viewHref}/`)) {
            returnObj.view_args = decodeURIComponent(path.substring(viewHref.length + 1, path.length));
            returnObj.view_path = path;
        }
        return returnObj;
    };
    Drupal.Views.pathPortion = function(href) {
        const protocol = window.location.protocol;
        if (href.startsWith(protocol)) href = href.substring(href.indexOf('/', protocol.length + 2));
        return href;
    };
    Drupal.Views.getPath = function(href) {
        href = Drupal.Views.pathPortion(href);
        href = href.substring(drupalSettings.path.baseUrl.length, href.length);
        if (href.startsWith('?q=')) href = href.substring(3, href.length);
        const chars = ['#', '?', '&'];
        for (let i = 0; i < chars.length; i++)
            if (href.includes(chars[i])) href = href.substring(0, href.indexOf(chars[i]));
        return href;
    };
})(jQuery, Drupal, drupalSettings);;
(function($, Drupal, drupalSettings) {
    Drupal.behaviors.ViewsAjaxView = {};
    Drupal.behaviors.ViewsAjaxView.attach = function(context, settings) {
        if (settings && settings.views && settings.views.ajaxViews) {
            const {
                views: {
                    ajaxViews
                }
            } = settings;
            Object.keys(ajaxViews || {}).forEach((i) => {
                Drupal.views.instances[i] = new Drupal.views.ajaxView(ajaxViews[i]);
            });
        }
    };
    Drupal.behaviors.ViewsAjaxView.detach = (context, settings, trigger) => {
        if (trigger === 'unload')
            if (settings && settings.views && settings.views.ajaxViews) {
                const {
                    views: {
                        ajaxViews
                    }
                } = settings;
                Object.keys(ajaxViews || {}).forEach((i) => {
                    const selector = `.js-view-dom-id-${ajaxViews[i].view_dom_id}`;
                    if ($(selector, context).length) {
                        delete Drupal.views.instances[i];
                        delete settings.views.ajaxViews[i];
                    }
                });
            }
    };
    Drupal.views = {};
    Drupal.views.instances = {};
    Drupal.views.ajaxView = function(settings) {
        const selector = `.js-view-dom-id-${settings.view_dom_id}`;
        this.$view = $(selector);
        let ajaxPath = drupalSettings.views.ajax_path;
        if (ajaxPath.constructor.toString().includes('Array')) ajaxPath = ajaxPath[0];
        let queryString = window.location.search || '';
        if (queryString !== '') {
            queryString = queryString.slice(1).replace(/q=[^&]+&?|page=[^&]+&?|&?render=[^&]+/, '');
            if (queryString !== '') queryString = (/\?/.test(ajaxPath) ? '&' : '?') + queryString;
        }
        this.element_settings = {
            url: ajaxPath + queryString,
            submit: settings,
            httpMethod: 'GET',
            setClick: true,
            event: 'click',
            selector,
            progress: {
                type: 'fullscreen'
            }
        };
        this.settings = settings;
        this.$exposed_form = $(`form#views-exposed-form-${settings.view_name.replace(/_/g,'-')}-${settings.view_display_id.replace(/_/g,'-')}`);
        once('exposed-form', this.$exposed_form).forEach(this.attachExposedFormAjax.bind(this));
        once('ajax-pager', this.$view.filter(this.filterNestedViews.bind(this))).forEach(this.attachPagerAjax.bind(this));
        const selfSettings = $.extend({}, this.element_settings, {
            event: 'RefreshView',
            base: this.selector,
            httpMethod: 'GET',
            element: this.$view.get(0)
        });
        this.refreshViewAjax = Drupal.ajax(selfSettings);
    };
    Drupal.views.ajaxView.prototype.attachExposedFormAjax = function() {
        const that = this;
        this.exposedFormAjax = [];
        $('input[type=submit], button[type=submit], input[type=image]', this.$exposed_form).not('[data-drupal-selector=edit-reset]').each(function(index) {
            const selfSettings = $.extend({}, that.element_settings, {
                base: $(this).attr('id'),
                element: this
            });
            that.exposedFormAjax[index] = Drupal.ajax(selfSettings);
        });
    };
    Drupal.views.ajaxView.prototype.filterNestedViews = function() {
        return !this.$view.parents('.view').length;
    };
    Drupal.views.ajaxView.prototype.attachPagerAjax = function() {
        this.$view.find('.js-pager__items a, th.views-field a, .attachment .views-summary a').each(this.attachPagerLinkAjax.bind(this));
    };
    Drupal.views.ajaxView.prototype.attachPagerLinkAjax = function(id, link) {
        const $link = $(link);
        const viewData = {};
        const href = $link.attr('href');
        $.extend(viewData, this.settings, Drupal.Views.parseQueryString(href), Drupal.Views.parseViewArgs(href, this.settings.view_base_path));
        const selfSettings = $.extend({}, this.element_settings, {
            submit: viewData,
            base: false,
            element: link,
            httpMethod: 'GET'
        });
        this.pagerAjax = Drupal.ajax(selfSettings);
    };
    Drupal.AjaxCommands.prototype.viewsScrollTop = function(ajax, response) {
        Drupal.AjaxCommands.prototype.scrollTop(ajax, response);
    };
})(jQuery, Drupal, drupalSettings);;
(function($, Drupal, once) {
    'use strict';
    var hasLocalStorage = (function() {
        try {
            localStorage.setItem('webform', 'webform');
            localStorage.removeItem('webform');
            return true;
        } catch (e) {
            return false;
        }
    }());
    Drupal.behaviors.webformDetailsSave = {
        attach: function(context) {
            if (!hasLocalStorage) return;
            $(once('webform-details-summary-save', 'details > summary', context)).on('click', function() {
                var $details = $(this).parent();
                if ($details[0].hasAttribute('data-webform-details-nosave')) return;
                var name = Drupal.webformDetailsSaveGetName($details);
                if (!name) return;
                var open = ($details.attr('open') !== 'open') ? '1' : '0';
                localStorage.setItem(name, open);
            });
            $(once('webform-details-save', 'details', context)).each(function() {
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
    Drupal.webformDetailsSaveGetName = function($details) {
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
(function($, Drupal, once) {
    'use strict';
    Drupal.webform = Drupal.webform || {};
    Drupal.webform.detailsToggle = Drupal.webform.detailsToggle || {};
    Drupal.webform.detailsToggle.options = Drupal.webform.detailsToggle.options || {};
    Drupal.behaviors.webformDetailsToggle = {
        attach: function(context) {
            $(once('webform-details-toggle', '.js-webform-details-toggle', context)).each(function() {
                var $form = $(this);
                var $tabs = $form.find('.webform-tabs');
                var selector = ($tabs.length) ? '.webform-tab' : '.js-webform-details-toggle, .webform-elements';
                var $details = $form.find('details').filter(function() {
                    var $parents = $(this).parentsUntil(selector);
                    return ($parents.find('details').length === 0);
                });
                if ($details.length < 2) return;
                var options = $.extend({
                    button: '<button type="button" class="webform-details-toggle-state"></button>'
                }, Drupal.webform.detailsToggle.options);
                var $toggle = $(options.button).attr('title', Drupal.t('Toggle details widget state.')).on('click', function(e) {
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
                    if (Drupal.webformDetailsSaveGetName) $details.each(function() {
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
    Drupal.webform.detailsToggle.isFormDetailsOpen = function($form) {
        return ($form.find('details[open]').length === $form.find('details').length);
    };
    Drupal.webform.detailsToggle.setDetailsToggleLabel = function($form) {
        var isOpen = Drupal.webform.detailsToggle.isFormDetailsOpen($form);
        var label = (isOpen) ? Drupal.t('Collapse all') : Drupal.t('Expand all');
        $form.find('.webform-details-toggle-state').html(label);
        var text = (isOpen) ? Drupal.t('All details have been expanded.') : Drupal.t('All details have been collapsed.');
        Drupal.announce(text);
    };
})(jQuery, Drupal, once);;
(function($, Drupal, once) {
    'use strict';
    var hasLocalStorage = (function() {
        try {
            localStorage.setItem('webform', 'webform');
            localStorage.removeItem('webform');
            return true;
        } catch (e) {
            return false;
        }
    }());
    var hasSessionStorage = (function() {
        try {
            sessionStorage.setItem('webform', 'webform');
            sessionStorage.removeItem('webform');
            return true;
        } catch (e) {
            return false;
        }
    }());
    Drupal.behaviors.webformMessageClose = {
        attach: function(context) {
            $(once('webform-message--close', '.js-webform-message--close', context)).each(function() {
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
                $element.find('.js-webform-message__link').on('click', function(event) {
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
(function($, Drupal, debounce) {
    $.fn.drupalGetSummary = function() {
        const callback = this.data('summaryCallback');
        if (!this[0] || !callback) return '';
        const result = callback(this[0]);
        return result ? result.trim() : '';
    };
    $.fn.drupalSetSummary = function(callback) {
        const self = this;
        if (typeof callback !== 'function') {
            const val = callback;
            callback = function() {
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
                const $form = $(e.currentTarget);
                const formValues = new URLSearchParams(new FormData(e.target)).toString();
                const previousValues = $form.attr('data-drupal-form-submit-last');
                if (previousValues === formValues) e.preventDefault();
                else $form.attr('data-drupal-form-submit-last', formValues);
            }
            $(once('form-single-submit', 'body')).on('submit.singleSubmit', 'form:not([method~="GET"])', onFormSubmit);
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
                if (browserData && (emptyValue || defaultValue)) $element.each(function(index, item) {
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
(function($, Drupal) {
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
            Drupal.attachBehaviors = function(context, settings) {
                setTimeout(function() {
                    attachBehaviors(context, settings);
                }, 300);
            };
        }
    }
})(jQuery, Drupal);;
(function($, Drupal) {
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
    states.Dependent = function(args) {
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
            this.compare = function(reference, selector, state) {
                (cache[selector] || (cache[selector] = [])).push(state.name);
            };
            this.verifyConstraints(this.constraints);
            this.compare = _compare;
            return cache;
        }
    };
    states.Trigger = function(args) {
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
            this.element.on(event, function(e) {
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
            states.postponed.push(function() {
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
                this.each(function() {
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
    states.State = function(state) {
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
    states.State.sanitize = function(state) {
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
                const label = `label${e.target.id?`[for=${e.target.id}]`:''}`;
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
(function($, Drupal, once) {
    'use strict';
    Drupal.webform = Drupal.webform || {};
    Drupal.webform.states = Drupal.webform.states || {};
    Drupal.webform.states.slideDown = Drupal.webform.states.slideDown || {};
    Drupal.webform.states.slideDown.duration = 'slow';
    Drupal.webform.states.slideUp = Drupal.webform.states.slideUp || {};
    Drupal.webform.states.slideUp.duration = 'fast';
    $.fn.hasData = function(data) {
        return (typeof this.data(data) !== 'undefined');
    };
    $.fn.isWebform = function() {
        return $(this).closest('form.webform-submission-form, form[id^="webform"], form[data-is-webform]').length ? true : false;
    };
    $.fn.isWebformElement = function() {
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
    Drupal.states.Dependent.comparisons.Object = function(reference, value) {
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
    $document.on('state:required', function(e) {
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
    $document.on('state:checked', function(e) {
        if (e.trigger) $(e.target).trigger('change');
    });
    $document.on('state:readonly', function(e) {
        if (e.trigger && $(e.target).isWebformElement()) {
            $(e.target).prop('readonly', e.value).closest('.js-form-item, .js-form-wrapper').toggleClass('webform-readonly', e.value).find('input, textarea').prop('readonly', e.value);
            $(e.target).trigger('webform:readonly').find('select, input, textarea, button').trigger('webform:readonly');
        }
    });
    $document.on('state:visible state:visible-slide', function(e) {
        if (e.trigger && $(e.target).isWebformElement())
            if (e.value) $(':input', e.target).addBack().each(function() {
                restoreValueAndRequired(this);
                triggerEventHandlers(this);
            });
            else $(':input', e.target).addBack().each(function() {
                backupValueAndRequired(this);
                clearValueAndRequired(this);
                triggerEventHandlers(this);
            });
    });
    $document.on('state:visible-slide', function(e) {
        if (e.trigger && $(e.target).isWebformElement()) {
            var effect = e.value ? 'slideDown' : 'slideUp';
            var duration = Drupal.webform.states[effect].duration;
            $(e.target).closest('.js-form-item, .js-form-submit, .js-form-wrapper')[effect](duration);
        }
    });
    Drupal.states.State.aliases['invisible-slide'] = '!visible-slide';
    $document.on('state:disabled', function(e) {
        if (e.trigger && $(e.target).isWebformElement()) {
            $(e.target).prop('disabled', e.value).closest('.js-form-item, .js-form-submit, .js-form-wrapper').toggleClass('form-disabled', e.value).find('select, input, textarea, button').prop('disabled', e.value);
            var fileElements = $(e.target).find(':input[type="hidden"][name$="[fids]"]');
            if (fileElements.length) {
                if ($(e.target).is('fieldset')) $(e.target).prop('disabled', false);
                fileElements.removeAttr('disabled');
            }
            $(e.target).trigger('webform:disabled').find('select, input, textarea, button').trigger('webform:disabled');
        }
    });
    Drupal.behaviors.webformCheckboxesRequired = {
        attach: function(context) {
            $(once('webform-checkboxes-required', '.js-form-type-checkboxes.required, .webform-term-checkboxes.required, .js-form-type-webform-checkboxes-other.required, .js-webform-type-checkboxes.required, .js-webform-type-webform-checkboxes-other.required, .js-webform-type-webform-radios-other.checkboxes', context)).each(function() {
                var $element = $(this);
                $element.find('input[type="checkbox"]').on('click', statesCheckboxesRequiredEventHandler);
                setTimeout(function() {
                    checkboxesRequired($element);
                });
            });
        }
    };
    Drupal.behaviors.webformRadiosRequired = {
        attach: function(context) {
            $(once('webform-radios-required', '.js-form-type-radios, .js-form-type-webform-radios-other, .js-webform-type-radios, .js-webform-type-webform-radios-other, .js-webform-type-webform-entity-radios, .js-webform-type-webform-scale', context)).each(function() {
                var $element = $(this);
                setTimeout(function() {
                    radiosRequired($element);
                });
            });
        }
    };
    Drupal.behaviors.webformTableSelectRequired = {
        attach: function(context) {
            $(once('webform-tableselect-required', '.js-webform-tableselect.required', context)).each(function() {
                var $element = $(this);
                var $tbody = $element.find('tbody');
                var isMultiple = $element.is('[multiple]');
                if (isMultiple) $tbody.find('input[type="checkbox"]').on('click change', function() {
                    checkboxesRequired($tbody);
                });
                setTimeout(function() {
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
            $input.find('option:selected').each(function(i, option) {
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
            else if (tag === 'select') $.each(value, function(i, option_value) {
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
            $input.each(function() {
                this.setCustomValidity && this.setCustomValidity('');
            });
        }
    }

    function copyRequireMessage($source, $destination) {
        if ($source.attr('data-msg-required')) $destination.attr('data-msg-required', $source.attr('data-msg-required'));
    }
})(jQuery, Drupal, once);;
(function($, Drupal, once) {
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
        attach: function(context) {
            $(once('webform-disable-autosubmit', $('.js-webform-disable-autosubmit input').not(':button, :submit, :reset, :image, :file'))).on('keyup keypress', function(e) {
                if (e.which === 13) {
                    e.preventDefault();
                    return false;
                }
            });
        }
    };
    Drupal.behaviors.webformRequiredError = {
        attach: function(context) {
            $(once('webform-required-error', $(context).find(':input[data-webform-required-error], :input[data-webform-pattern-error]'))).on('invalid', function() {
                this.setCustomValidity('');
                if (this.valid) return;
                if (this.validity.patternMismatch && $(this).attr('data-webform-pattern-error')) this.setCustomValidity($(this).attr('data-webform-pattern-error'));
                else {
                    if (this.validity.valueMissing && $(this).attr('data-webform-required-error')) this.setCustomValidity($(this).attr('data-webform-required-error'));
                }
            }).on('input change', function() {
                var name = $(this).attr('name');
                $(this.form).find(':input[name="' + name + '"]').each(function() {
                    this.setCustomValidity('');
                });
            });
        }
    };
    $(document).on('state:required', function(e) {
        $(e.target).filter(':input[data-webform-required-error]').each(function() {
            this.setCustomValidity('');
        });
    });
})(jQuery, Drupal, once);;