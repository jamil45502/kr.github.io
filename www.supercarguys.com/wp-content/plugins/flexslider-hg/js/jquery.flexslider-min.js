! function(a) {
    var b = !0;
    a.flexslider = function(c, d) {
        var e = a(c);
        e.vars = a.extend({}, a.flexslider.defaults, d);
        var k, f = e.vars.namespace,
            g = window.navigator && window.navigator.msPointerEnabled && window.MSGesture,
            h = ("ontouchstart" in window || g || window.DocumentTouch && document instanceof DocumentTouch) && e.vars.touch,
            i = "click touchend MSPointerUp keyup",
            j = "",
            l = "vertical" === e.vars.direction,
            m = e.vars.reverse,
            n = e.vars.itemWidth > 0,
            o = "fade" === e.vars.animation,
            p = "" !== e.vars.asNavFor,
            q = {};
        a.data(c, "flexslider", e), q = {
            init: function() {
                e.animating = !1, e.currentSlide = parseInt(e.vars.startAt ? e.vars.startAt : 0, 10), isNaN(e.currentSlide) && (e.currentSlide = 0), e.animatingTo = e.currentSlide, e.atEnd = 0 === e.currentSlide || e.currentSlide === e.last, e.containerSelector = e.vars.selector.substr(0, e.vars.selector.search(" ")), e.slides = a(e.vars.selector, e), e.container = a(e.containerSelector, e), e.count = e.slides.length, e.syncExists = a(e.vars.sync).length > 0, "slide" === e.vars.animation && (e.vars.animation = "swing"), e.prop = l ? "top" : "marginLeft", e.args = {}, e.manualPause = !1, e.stopped = !1, e.started = !1, e.startTimeout = null, e.transitions = !e.vars.video && !o && e.vars.useCSS && function() {
                    var a = document.createElement("div"),
                        b = ["perspectiveProperty", "WebkitPerspective", "MozPerspective", "OPerspective", "msPerspective"];
                    for (var c in b)
                        if (void 0 !== a.style[b[c]]) return e.pfx = b[c].replace("Perspective", "").toLowerCase(), e.prop = "-" + e.pfx + "-transform", !0;
                    return !1
                }(), e.ensureAnimationEnd = "", "" !== e.vars.controlsContainer && (e.controlsContainer = a(e.vars.controlsContainer).length > 0 && a(e.vars.controlsContainer)), "" !== e.vars.manualControls && (e.manualControls = a(e.vars.manualControls).length > 0 && a(e.vars.manualControls)), "" !== e.vars.customDirectionNav && (e.customDirectionNav = 2 === a(e.vars.customDirectionNav).length && a(e.vars.customDirectionNav)), e.vars.randomize && (e.slides.sort(function() {
                    return Math.round(Math.random()) - .5
                }), e.container.empty().append(e.slides)), e.doMath(), e.setup("init"), e.vars.controlNav && q.controlNav.setup(), e.vars.directionNav && q.directionNav.setup(), e.vars.keyboard && (1 === a(e.containerSelector).length || e.vars.multipleKeyboard) && a(document).bind("keyup", function(a) {
                    var b = a.keyCode;
                    if (!e.animating && (39 === b || 37 === b)) {
                        var c = 39 === b ? e.getTarget("next") : 37 === b ? e.getTarget("prev") : !1;
                        e.flexAnimate(c, e.vars.pauseOnAction)
                    }
                }), e.vars.mousewheel && e.bind("mousewheel", function(a, b, c, d) {
                    a.preventDefault();
                    var f = 0 > b ? e.getTarget("next") : e.getTarget("prev");
                    e.flexAnimate(f, e.vars.pauseOnAction)
                }), e.vars.pausePlay && q.pausePlay.setup(), e.vars.slideshow && e.vars.pauseInvisible && q.pauseInvisible.init(), e.vars.slideshow && (e.vars.pauseOnHover && e.hover(function() {
                    e.manualPlay || e.manualPause || e.pause()
                }, function() {
                    e.manualPause || e.manualPlay || e.stopped || e.play()
                }), e.vars.pauseInvisible && q.pauseInvisible.isHidden() || (e.vars.initDelay > 0 ? e.startTimeout = setTimeout(e.play, e.vars.initDelay) : e.play())), p && q.asNav.setup(), h && e.vars.touch && q.touch(), (!o || o && e.vars.smoothHeight) && a(window).bind("resize orientationchange focus", q.resize), e.find("img").attr("draggable", "false"), setTimeout(function() {
                    e.vars.start(e)
                }, 200)
            },
            asNav: {
                setup: function() {
                    e.asNav = !0, e.animatingTo = Math.floor(e.currentSlide / e.move), e.currentItem = e.currentSlide, e.slides.removeClass(f + "active-slide").eq(e.currentItem).addClass(f + "active-slide"), g ? (c._slider = e, e.slides.each(function() {
                        var b = this;
                        b._gesture = new MSGesture, b._gesture.target = b, b.addEventListener("MSPointerDown", function(a) {
                            a.preventDefault(), a.currentTarget._gesture && a.currentTarget._gesture.addPointer(a.pointerId)
                        }, !1), b.addEventListener("MSGestureTap", function(b) {
                            b.preventDefault();
                            var c = a(this),
                                d = c.index();
                            a(e.vars.asNavFor).data("flexslider").animating || c.hasClass("active") || (e.direction = e.currentItem < d ? "next" : "prev", e.flexAnimate(d, e.vars.pauseOnAction, !1, !0, !0))
                        })
                    })) : e.slides.on(i, function(b) {
                        b.preventDefault();
                        var c = a(this),
                            d = c.index(),
                            g = c.offset().left - a(e).scrollLeft();
                        0 >= g && c.hasClass(f + "active-slide") ? e.flexAnimate(e.getTarget("prev"), !0) : a(e.vars.asNavFor).data("flexslider").animating || c.hasClass(f + "active-slide") || (e.direction = e.currentItem < d ? "next" : "prev", e.flexAnimate(d, e.vars.pauseOnAction, !1, !0, !0))
                    })
                }
            },
            controlNav: {
                setup: function() {
                    e.manualControls ? q.controlNav.setupManual() : q.controlNav.setupPaging()
                },
                setupPaging: function() {
                    var d, g, b = "thumbnails" === e.vars.controlNav ? "control-thumbs" : "control-paging",
                        c = 1;
                    if (e.controlNavScaffold = a('<ol class="' + f + "control-nav " + f + b + '"></ol>'), e.pagingCount > 1)
                        for (var h = 0; h < e.pagingCount; h++) {
                            g = e.slides.eq(h), void 0 === g.attr("data-thumb-alt") && g.attr("data-thumb-alt", "");
                            var k = "" !== g.attr("data-thumb-alt") ? k = ' alt="' + g.attr("data-thumb-alt") + '"' : "";
                            if (d = "thumbnails" === e.vars.controlNav ? '<img src="' + g.attr("data-thumb") + '"' + k + "/>" : '<a href="#">' + c + "</a>", "thumbnails" === e.vars.controlNav && !0 === e.vars.thumbCaptions) {
                                var l = g.attr("data-thumbcaption");
                                "" !== l && void 0 !== l && (d += '<span class="' + f + 'caption">' + l + "</span>")
                            }
                            e.controlNavScaffold.append("<li>" + d + "</li>"), c++
                        }
                    e.controlsContainer ? a(e.controlsContainer).append(e.controlNavScaffold) : e.append(e.controlNavScaffold), q.controlNav.set(), q.controlNav.active(), e.controlNavScaffold.delegate("a, img", i, function(b) {
                        if (b.preventDefault(), "" === j || j === b.type) {
                            var c = a(this),
                                d = e.controlNav.index(c);
                            c.hasClass(f + "active") || (e.direction = d > e.currentSlide ? "next" : "prev", e.flexAnimate(d, e.vars.pauseOnAction))
                        }
                        "" === j && (j = b.type), q.setToClearWatchedEvent()
                    })
                },
                setupManual: function() {
                    e.controlNav = e.manualControls, q.controlNav.active(), e.controlNav.bind(i, function(b) {
                        if (b.preventDefault(), "" === j || j === b.type) {
                            var c = a(this),
                                d = e.controlNav.index(c);
                            c.hasClass(f + "active") || (d > e.currentSlide ? e.direction = "next" : e.direction = "prev", e.flexAnimate(d, e.vars.pauseOnAction))
                        }
                        "" === j && (j = b.type), q.setToClearWatchedEvent()
                    })
                },
                set: function() {
                    var b = "thumbnails" === e.vars.controlNav ? "img" : "a";
                    e.controlNav = a("." + f + "control-nav li " + b, e.controlsContainer ? e.controlsContainer : e)
                },
                active: function() {
                    e.controlNav.removeClass(f + "active").eq(e.animatingTo).addClass(f + "active")
                },
                update: function(b, c) {
                    e.pagingCount > 1 && "add" === b ? e.controlNavScaffold.append(a('<li><a href="#">' + e.count + "</a></li>")) : 1 === e.pagingCount ? e.controlNavScaffold.find("li").remove() : e.controlNav.eq(c).closest("li").remove(), q.controlNav.set(), e.pagingCount > 1 && e.pagingCount !== e.controlNav.length ? e.update(c, b) : q.controlNav.active()
                }
            },
            directionNav: {
                setup: function() {
                    var b = a('<ul class="' + f + 'direction-nav"><li class="' + f + 'nav-prev"><a class="' + f + 'prev" href="#">' + e.vars.prevText + '</a></li><li class="' + f + 'nav-next"><a class="' + f + 'next" href="#">' + e.vars.nextText + "</a></li></ul>");
                    e.customDirectionNav ? e.directionNav = e.customDirectionNav : e.controlsContainer ? (a(e.controlsContainer).append(b), e.directionNav = a("." + f + "direction-nav li a", e.controlsContainer)) : (e.append(b), e.directionNav = a("." + f + "direction-nav li a", e)), q.directionNav.update(), e.directionNav.bind(i, function(b) {
                        b.preventDefault();
                        var c;
                        ("" === j || j === b.type) && (c = a(this).hasClass(f + "next") ? e.getTarget("next") : e.getTarget("prev"), e.flexAnimate(c, e.vars.pauseOnAction)), "" === j && (j = b.type), q.setToClearWatchedEvent()
                    })
                },
                update: function() {
                    var a = f + "disabled";
                    1 === e.pagingCount ? e.directionNav.addClass(a).attr("tabindex", "-1") : e.vars.animationLoop ? e.directionNav.removeClass(a).removeAttr("tabindex") : 0 === e.animatingTo ? e.directionNav.removeClass(a).filter("." + f + "prev").addClass(a).attr("tabindex", "-1") : e.animatingTo === e.last ? e.directionNav.removeClass(a).filter("." + f + "next").addClass(a).attr("tabindex", "-1") : e.directionNav.removeClass(a).removeAttr("tabindex")
                }
            },
            pausePlay: {
                setup: function() {
                    var b = a('<div class="' + f + 'pauseplay"><a href="#"></a></div>');
                    e.controlsContainer ? (e.controlsContainer.append(b), e.pausePlay = a("." + f + "pauseplay a", e.controlsContainer)) : (e.append(b), e.pausePlay = a("." + f + "pauseplay a", e)), q.pausePlay.update(e.vars.slideshow ? f + "pause" : f + "play"), e.pausePlay.bind(i, function(b) {
                        b.preventDefault(), ("" === j || j === b.type) && (a(this).hasClass(f + "pause") ? (e.manualPause = !0, e.manualPlay = !1, e.pause()) : (e.manualPause = !1, e.manualPlay = !0, e.play())), "" === j && (j = b.type), q.setToClearWatchedEvent()
                    })
                },
                update: function(a) {
                    "play" === a ? e.pausePlay.removeClass(f + "pause").addClass(f + "play").html(e.vars.playText) : e.pausePlay.removeClass(f + "play").addClass(f + "pause").html(e.vars.pauseText)
                }
            },
            touch: function() {
                function u(a) {
                    a.stopPropagation(), e.animating ? a.preventDefault() : (e.pause(), c._gesture.addPointer(a.pointerId), t = 0, f = l ? e.h : e.w, i = Number(new Date), d = n && m && e.animatingTo === e.last ? 0 : n && m ? e.limit - (e.itemW + e.vars.itemMargin) * e.move * e.animatingTo : n && e.currentSlide === e.last ? e.limit : n ? (e.itemW + e.vars.itemMargin) * e.move * e.currentSlide : m ? (e.last - e.currentSlide + e.cloneOffset) * f : (e.currentSlide + e.cloneOffset) * f)
                }

                function v(a) {
                    a.stopPropagation();
                    var b = a.target._slider;
                    if (b) {
                        var e = -a.translationX,
                            g = -a.translationY;
                        return t += l ? g : e, h = t, q = l ? Math.abs(t) < Math.abs(-e) : Math.abs(t) < Math.abs(-g), a.detail === a.MSGESTURE_FLAG_INERTIA ? void setImmediate(function() {
                            c._gesture.stop()
                        }) : void((!q || Number(new Date) - i > 500) && (a.preventDefault(), !o && b.transitions && (b.vars.animationLoop || (h = t / (0 === b.currentSlide && 0 > t || b.currentSlide === b.last && t > 0 ? Math.abs(t) / f + 2 : 1)), b.setProps(d + h, "setTouch"))))
                    }
                }

                function w(c) {
                    c.stopPropagation();
                    var e = c.target._slider;
                    if (e) {
                        if (e.animatingTo === e.currentSlide && !q && null !== h) {
                            var g = m ? -h : h,
                                j = g > 0 ? e.getTarget("next") : e.getTarget("prev");
                            e.canAdvance(j) && (Number(new Date) - i < 550 && Math.abs(g) > 50 || Math.abs(g) > f / 2) ? e.flexAnimate(j, e.vars.pauseOnAction) : o || e.flexAnimate(e.currentSlide, e.vars.pauseOnAction, !0)
                        }
                        a = null, b = null, h = null, d = null, t = 0
                    }
                }
                var a, b, d, f, h, i, j, k, p, q = !1,
                    r = 0,
                    s = 0,
                    t = 0;
                g ? (c.style.msTouchAction = "none", c._gesture = new MSGesture, c._gesture.target = c, c.addEventListener("MSPointerDown", u, !1), c._slider = e, c.addEventListener("MSGestureChange", v, !1), c.addEventListener("MSGestureEnd", w, !1)) : (j = function(g) {
                    e.animating ? g.preventDefault() : (window.navigator.msPointerEnabled || 1 === g.touches.length) && (e.pause(), f = l ? e.h : e.w, i = Number(new Date), r = g.touches[0].pageX, s = g.touches[0].pageY, d = n && m && e.animatingTo === e.last ? 0 : n && m ? e.limit - (e.itemW + e.vars.itemMargin) * e.move * e.animatingTo : n && e.currentSlide === e.last ? e.limit : n ? (e.itemW + e.vars.itemMargin) * e.move * e.currentSlide : m ? (e.last - e.currentSlide + e.cloneOffset) * f : (e.currentSlide + e.cloneOffset) * f, a = l ? s : r, b = l ? r : s, c.addEventListener("touchmove", k, !1), c.addEventListener("touchend", p, !1))
                }, k = function(c) {
                    r = c.touches[0].pageX, s = c.touches[0].pageY, h = l ? a - s : a - r, q = l ? Math.abs(h) < Math.abs(r - b) : Math.abs(h) < Math.abs(s - b);
                    var g = 500;
                    (!q || Number(new Date) - i > g) && (c.preventDefault(), !o && e.transitions && (e.vars.animationLoop || (h /= 0 === e.currentSlide && 0 > h || e.currentSlide === e.last && h > 0 ? Math.abs(h) / f + 2 : 1), e.setProps(d + h, "setTouch")))
                }, p = function(g) {
                    if (c.removeEventListener("touchmove", k, !1), e.animatingTo === e.currentSlide && !q && null !== h) {
                        var j = m ? -h : h,
                            l = j > 0 ? e.getTarget("next") : e.getTarget("prev");
                        e.canAdvance(l) && (Number(new Date) - i < 550 && Math.abs(j) > 50 || Math.abs(j) > f / 2) ? e.flexAnimate(l, e.vars.pauseOnAction) : o || e.flexAnimate(e.currentSlide, e.vars.pauseOnAction, !0)
                    }
                    c.removeEventListener("touchend", p, !1), a = null, b = null, h = null, d = null
                }, c.addEventListener("touchstart", j, !1))
            },
            resize: function() {
                !e.animating && e.is(":visible") && (n || e.doMath(), o ? q.smoothHeight() : n ? (e.slides.width(e.computedW), e.update(e.pagingCount), e.setProps()) : l ? (e.viewport.height(e.h), e.setProps(e.h, "setTotal")) : (e.vars.smoothHeight && q.smoothHeight(), e.newSlides.width(e.computedW), e.setProps(e.computedW, "setTotal")))
            },
            smoothHeight: function(a) {
                if (!l || o) {
                    var b = o ? e : e.viewport;
                    a ? b.animate({
                        height: e.slides.eq(e.animatingTo).innerHeight()
                    }, a) : b.innerHeight(e.slides.eq(e.animatingTo).innerHeight())
                }
            },
            sync: function(b) {
                var c = a(e.vars.sync).data("flexslider"),
                    d = e.animatingTo;
                switch (b) {
                    case "animate":
                        c.flexAnimate(d, e.vars.pauseOnAction, !1, !0);
                        break;
                    case "play":
                        c.playing || c.asNav || c.play();
                        break;
                    case "pause":
                        c.pause()
                }
            },
            uniqueID: function(b) {
                return b.filter("[id]").add(b.find("[id]")).each(function() {
                    var b = a(this);
                    b.attr("id", b.attr("id") + "_clone")
                }), b
            },
            pauseInvisible: {
                visProp: null,
                init: function() {
                    var a = q.pauseInvisible.getHiddenProp();
                    if (a) {
                        var b = a.replace(/[H|h]idden/, "") + "visibilitychange";
                        document.addEventListener(b, function() {
                            q.pauseInvisible.isHidden() ? e.startTimeout ? clearTimeout(e.startTimeout) : e.pause() : e.started ? e.play() : e.vars.initDelay > 0 ? setTimeout(e.play, e.vars.initDelay) : e.play()
                        })
                    }
                },
                isHidden: function() {
                    var a = q.pauseInvisible.getHiddenProp();
                    return a ? document[a] : !1
                },
                getHiddenProp: function() {
                    var a = ["webkit", "moz", "ms", "o"];
                    if ("hidden" in document) return "hidden";
                    for (var b = 0; b < a.length; b++)
                        if (a[b] + "Hidden" in document) return a[b] + "Hidden";
                    return null
                }
            },
            setToClearWatchedEvent: function() {
                clearTimeout(k), k = setTimeout(function() {
                    j = ""
                }, 3e3)
            }
        }, e.flexAnimate = function(b, c, d, g, i) {
            if (e.vars.animationLoop || b === e.currentSlide || (e.direction = b > e.currentSlide ? "next" : "prev"), p && 1 === e.pagingCount && (e.direction = e.currentItem < b ? "next" : "prev"), !e.animating && (e.canAdvance(b, i) || d) && e.is(":visible")) {
                if (p && g) {
                    var j = a(e.vars.asNavFor).data("flexslider");
                    if (e.atEnd = 0 === b || b === e.count - 1, j.flexAnimate(b, !0, !1, !0, i), e.direction = e.currentItem < b ? "next" : "prev", j.direction = e.direction, Math.ceil((b + 1) / e.visible) - 1 === e.currentSlide || 0 === b) return e.currentItem = b, e.slides.removeClass(f + "active-slide").eq(b).addClass(f + "active-slide"), !1;
                    e.currentItem = b, e.slides.removeClass(f + "active-slide").eq(b).addClass(f + "active-slide"), b = Math.floor(b / e.visible)
                }
                if (e.animating = !0, e.animatingTo = b, c && e.pause(), e.vars.before(e), e.syncExists && !i && q.sync("animate"), e.vars.controlNav && q.controlNav.active(), n || e.slides.removeClass(f + "active-slide").eq(b).addClass(f + "active-slide"), e.atEnd = 0 === b || b === e.last, e.vars.directionNav && q.directionNav.update(), b === e.last && (e.vars.end(e), e.vars.animationLoop || e.pause()), o) h ? (e.slides.eq(e.currentSlide).css({
                    opacity: 0,
                    zIndex: 1
                }), e.slides.eq(b).css({
                    opacity: 1,
                    zIndex: 2
                }), e.wrapup(k)) : (e.slides.eq(e.currentSlide).css({
                    zIndex: 1
                }).animate({
                    opacity: 0
                }, e.vars.animationSpeed, e.vars.easing), e.slides.eq(b).css({
                    zIndex: 2
                }).animate({
                    opacity: 1
                }, e.vars.animationSpeed, e.vars.easing, e.wrapup));
                else {
                    var r, s, t, k = l ? e.slides.filter(":first").height() : e.computedW;
                    n ? (r = e.vars.itemMargin, t = (e.itemW + r) * e.move * e.animatingTo, s = t > e.limit && 1 !== e.visible ? e.limit : t) : s = 0 === e.currentSlide && b === e.count - 1 && e.vars.animationLoop && "next" !== e.direction ? m ? (e.count + e.cloneOffset) * k : 0 : e.currentSlide === e.last && 0 === b && e.vars.animationLoop && "prev" !== e.direction ? m ? 0 : (e.count + 1) * k : m ? (e.count - 1 - b + e.cloneOffset) * k : (b + e.cloneOffset) * k, e.setProps(s, "", e.vars.animationSpeed), e.transitions ? (e.vars.animationLoop && e.atEnd || (e.animating = !1, e.currentSlide = e.animatingTo), e.container.unbind("webkitTransitionEnd transitionend"), e.container.bind("webkitTransitionEnd transitionend", function() {
                        clearTimeout(e.ensureAnimationEnd), e.wrapup(k)
                    }), clearTimeout(e.ensureAnimationEnd), e.ensureAnimationEnd = setTimeout(function() {
                        e.wrapup(k)
                    }, e.vars.animationSpeed + 100)) : e.container.animate(e.args, e.vars.animationSpeed, e.vars.easing, function() {
                        e.wrapup(k)
                    })
                }
                e.vars.smoothHeight && q.smoothHeight(e.vars.animationSpeed)
            }
        }, e.wrapup = function(a) {
            o || n || (0 === e.currentSlide && e.animatingTo === e.last && e.vars.animationLoop ? e.setProps(a, "jumpEnd") : e.currentSlide === e.last && 0 === e.animatingTo && e.vars.animationLoop && e.setProps(a, "jumpStart")), e.animating = !1, e.currentSlide = e.animatingTo, e.vars.after(e)
        }, e.animateSlides = function() {
            !e.animating && b && e.flexAnimate(e.getTarget("next"))
        }, e.pause = function() {
            clearInterval(e.animatedSlides), e.animatedSlides = null, e.playing = !1, e.vars.pausePlay && q.pausePlay.update("play"), e.syncExists && q.sync("pause")
        }, e.play = function() {
            e.playing && clearInterval(e.animatedSlides), e.animatedSlides = e.animatedSlides || setInterval(e.animateSlides, e.vars.slideshowSpeed), e.started = e.playing = !0, e.vars.pausePlay && q.pausePlay.update("pause"), e.syncExists && q.sync("play")
        }, e.stop = function() {
            e.pause(), e.stopped = !0
        }, e.canAdvance = function(a, b) {
            var c = p ? e.pagingCount - 1 : e.last;
            return b ? !0 : p && e.currentItem === e.count - 1 && 0 === a && "prev" === e.direction ? !0 : p && 0 === e.currentItem && a === e.pagingCount - 1 && "next" !== e.direction ? !1 : a !== e.currentSlide || p ? e.vars.animationLoop ? !0 : e.atEnd && 0 === e.currentSlide && a === c && "next" !== e.direction ? !1 : e.atEnd && e.currentSlide === c && 0 === a && "next" === e.direction ? !1 : !0 : !1
        }, e.getTarget = function(a) {
            return e.direction = a, "next" === a ? e.currentSlide === e.last ? 0 : e.currentSlide + 1 : 0 === e.currentSlide ? e.last : e.currentSlide - 1
        }, e.setProps = function(a, b, c) {
            var d = function() {
                var c = a ? a : (e.itemW + e.vars.itemMargin) * e.move * e.animatingTo,
                    d = function() {
                        if (n) return "setTouch" === b ? a : m && e.animatingTo === e.last ? 0 : m ? e.limit - (e.itemW + e.vars.itemMargin) * e.move * e.animatingTo : e.animatingTo === e.last ? e.limit : c;
                        switch (b) {
                            case "setTotal":
                                return m ? (e.count - 1 - e.currentSlide + e.cloneOffset) * a : (e.currentSlide + e.cloneOffset) * a;
                            case "setTouch":
                                return m ? a : a;
                            case "jumpEnd":
                                return m ? a : e.count * a;
                            case "jumpStart":
                                return m ? e.count * a : a;
                            default:
                                return a
                        }
                    }();
                return -1 * d + "px"
            }();
            e.transitions && (d = l ? "translate3d(0," + d + ",0)" : "translate3d(" + d + ",0,0)", c = void 0 !== c ? c / 1e3 + "s" : "0s", e.container.css("-" + e.pfx + "-transition-duration", c), e.container.css("transition-duration", c)), e.args[e.prop] = d, (e.transitions || void 0 === c) && e.container.css(e.args), e.container.css("transform", d)
        }, e.setup = function(b) {
            if (o) e.slides.css({
                width: "100%",
                "float": "left",
                marginRight: "-100%",
                position: "relative"
            }), "init" === b && (h ? e.slides.css({
                opacity: 0,
                display: "block",
                webkitTransition: "opacity " + e.vars.animationSpeed / 1e3 + "s ease",
                zIndex: 1
            }).eq(e.currentSlide).css({
                opacity: 1,
                zIndex: 2
            }) : 0 == e.vars.fadeFirstSlide ? e.slides.css({
                opacity: 0,
                display: "block",
                zIndex: 1
            }).eq(e.currentSlide).css({
                zIndex: 2
            }).css({
                opacity: 1
            }) : e.slides.css({
                opacity: 0,
                display: "block",
                zIndex: 1
            }).eq(e.currentSlide).css({
                zIndex: 2
            }).animate({
                opacity: 1
            }, e.vars.animationSpeed, e.vars.easing)), e.vars.smoothHeight && q.smoothHeight();
            else {
                var c, d;
                "init" === b && (e.viewport = a('<div class="' + f + 'viewport"></div>').css({
                    overflow: "hidden",
                    position: "relative"
                }).appendTo(e).append(e.container), e.cloneCount = 0, e.cloneOffset = 0, m && (d = a.makeArray(e.slides).reverse(), e.slides = a(d), e.container.empty().append(e.slides))), e.vars.animationLoop && !n && (e.cloneCount = 2, e.cloneOffset = 1, "init" !== b && e.container.find(".clone").remove(), e.container.append(q.uniqueID(e.slides.first().clone().addClass("clone")).attr("aria-hidden", "true")).prepend(q.uniqueID(e.slides.last().clone().addClass("clone")).attr("aria-hidden", "true"))), e.newSlides = a(e.vars.selector, e), c = m ? e.count - 1 - e.currentSlide + e.cloneOffset : e.currentSlide + e.cloneOffset, l && !n ? (e.container.height(200 * (e.count + e.cloneCount) + "%").css("position", "absolute").width("100%"), setTimeout(function() {
                    e.newSlides.css({
                        display: "block"
                    }), e.doMath(), e.viewport.height(e.h), e.setProps(c * e.h, "init")
                }, "init" === b ? 100 : 0)) : (e.container.width(200 * (e.count + e.cloneCount) + "%"), e.setProps(c * e.computedW, "init"), setTimeout(function() {
                    e.doMath(), e.newSlides.css({
                        width: e.computedW,
                        marginRight: e.computedM,
                        "float": "left",
                        display: "block"
                    }), e.vars.smoothHeight && q.smoothHeight()
                }, "init" === b ? 100 : 0))
            }
            n || e.slides.removeClass(f + "active-slide").eq(e.currentSlide).addClass(f + "active-slide"), e.vars.init(e)
        }, e.doMath = function() {
            var a = e.slides.first(),
                b = e.vars.itemMargin,
                c = e.vars.minItems,
                d = e.vars.maxItems;
            e.w = void 0 === e.viewport ? e.width() : e.viewport.width(), e.h = a.height(), e.boxPadding = a.outerWidth() - a.width(), n ? (e.itemT = e.vars.itemWidth + b, e.itemM = b, e.minW = c ? c * e.itemT : e.w, e.maxW = d ? d * e.itemT - b : e.w, e.itemW = e.minW > e.w ? (e.w - b * (c - 1)) / c : e.maxW < e.w ? (e.w - b * (d - 1)) / d : e.vars.itemWidth > e.w ? e.w : e.vars.itemWidth, e.visible = Math.floor(e.w / e.itemW), e.move = e.vars.move > 0 && e.vars.move < e.visible ? e.vars.move : e.visible, e.pagingCount = Math.ceil((e.count - e.visible) / e.move + 1), e.last = e.pagingCount - 1, e.limit = 1 === e.pagingCount ? 0 : e.vars.itemWidth > e.w ? e.itemW * (e.count - 1) + b * (e.count - 1) : (e.itemW + b) * e.count - e.w - b) : (e.itemW = e.w, e.itemM = b, e.pagingCount = e.count, e.last = e.count - 1), e.computedW = e.itemW - e.boxPadding, e.computedM = e.itemM
        }, e.update = function(a, b) {
            e.doMath(), n || (a < e.currentSlide ? e.currentSlide += 1 : a <= e.currentSlide && 0 !== a && (e.currentSlide -= 1), e.animatingTo = e.currentSlide), e.vars.controlNav && !e.manualControls && ("add" === b && !n || e.pagingCount > e.controlNav.length ? q.controlNav.update("add") : ("remove" === b && !n || e.pagingCount < e.controlNav.length) && (n && e.currentSlide > e.last && (e.currentSlide -= 1, e.animatingTo -= 1), q.controlNav.update("remove", e.last))), e.vars.directionNav && q.directionNav.update()
        }, e.addSlide = function(b, c) {
            var d = a(b);
            e.count += 1, e.last = e.count - 1, l && m ? void 0 !== c ? e.slides.eq(e.count - c).after(d) : e.container.prepend(d) : void 0 !== c ? e.slides.eq(c).before(d) : e.container.append(d), e.update(c, "add"), e.slides = a(e.vars.selector + ":not(.clone)", e), e.setup(), e.vars.added(e)
        }, e.removeSlide = function(b) {
            var c = isNaN(b) ? e.slides.index(a(b)) : b;
            e.count -= 1, e.last = e.count - 1, isNaN(b) ? a(b, e.slides).remove() : l && m ? e.slides.eq(e.last).remove() : e.slides.eq(b).remove(), e.doMath(), e.update(c, "remove"), e.slides = a(e.vars.selector + ":not(.clone)", e), e.setup(), e.vars.removed(e)
        }, q.init()
    }, a(window).blur(function(a) {
        b = !1
    }).focus(function(a) {
        b = !0
    }), a.flexslider.defaults = {
        namespace: "flex-",
        selector: ".slides > li",
        animation: "fade",
        easing: "swing",
        direction: "horizontal",
        reverse: !1,
        animationLoop: !0,
        smoothHeight: !1,
        startAt: 0,
        slideshow: !0,
        slideshowSpeed: 7e3,
        animationSpeed: 600,
        initDelay: 0,
        randomize: !1,
        fadeFirstSlide: !0,
        thumbCaptions: !1,
        pauseOnAction: !0,
        pauseOnHover: !1,
        pauseInvisible: !0,
        useCSS: !0,
        touch: !0,
        video: !1,
        controlNav: !0,
        directionNav: !0,
        prevText: "Previous",
        nextText: "Next",
        keyboard: !0,
        multipleKeyboard: !1,
        mousewheel: !1,
        pausePlay: !1,
        pauseText: "Pause",
        playText: "Play",
        controlsContainer: "",
        manualControls: "",
        customDirectionNav: "",
        sync: "",
        asNavFor: "",
        itemWidth: 0,
        itemMargin: 0,
        minItems: 1,
        maxItems: 0,
        move: 0,
        allowOneSlide: !0,
        start: function() {},
        before: function() {},
        after: function() {},
        end: function() {},
        added: function() {},
        removed: function() {},
        init: function() {}
    }, a.fn.flexslider = function(b) {
        if (void 0 === b && (b = {}), "object" == typeof b) return this.each(function() {
            var c = a(this),
                d = b.selector ? b.selector : ".slides > li",
                e = c.find(d);
            1 === e.length && b.allowOneSlide === !1 || 0 === e.length ? (e.fadeIn(400), b.start && b.start(c)) : void 0 === c.data("flexslider") && new a.flexslider(this, b)
        });
        var c = a(this).data("flexslider");
        switch (b) {
            case "play":
                c.play();
                break;
            case "pause":
                c.pause();
                break;
            case "stop":
                c.stop();
                break;
            case "next":
                c.flexAnimate(c.getTarget("next"), !0);
                break;
            case "prev":
            case "previous":
                c.flexAnimate(c.getTarget("prev"), !0);
                break;
            default:
                "number" == typeof b && c.flexAnimate(b, !0)
        }
    }
}(jQuery);