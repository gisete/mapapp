(function(g, c, d) {
    "undefined" != typeof module ? module.exports = d(g, c) : "function" == typeof define && "object" == typeof define.amd ? define(d) : c[g] = d(g, c)
})("categorizr", this, function(g, c) {
    function d() {
        for (var a = k.length; a--;) e["is" + k[a]] = m(k[a].toLowerCase()), n && (c.$["is" + k[a]] = m(k[a].toLowerCase()));
        b && (p.className = p.className.replace(/(^|\s)desktop|tablet|tv|mobile(\s|$)/, "$1$2") + (" " + h));
        q && c.$(c).trigger("deviceChange", [{
            type: h
        }])
    }
    var f, b = null != c && c == c.window,
        l = !b,
        n = b && c.$,
        q = function() {
            var a;
            return n && (a =
                c.$("").trigger), a
        }(),
        p = l ? null : document.documentElement,
        k = ["Tv", "Desktop", "Tablet", "Mobile"],
        l = function(a) {
            return a.match(/GoogleTV|SmartTV|Internet.TV|NetCast|NETTV|AppleTV|boxee|Kylo|Roku|DLNADOC|CE\-HTML/i) ? "tv" : a.match(/Xbox|PLAYSTATION.3|Wii/i) ? "tv" : a.match(/iPad/i) || a.match(/tablet/i) && !a.match(/RX-34/i) && !a.match(/pc/i) || a.match(/FOLIO/i) ? "tablet" : a.match(/Linux/i) && a.match(/Android/i) && !a.match(/Fennec|mobi|HTC.Magic|HTCX06HT|Nexus.One|SC-02B|fone.945/i) ? "tablet" : a.match(/Kindle/i) || a.match(/Mac.OS/i) &&
                a.match(/Silk/i) ? "tablet" : a.match(/GT-P10|SC-01C|SHW-M180S|SGH-T849|SCH-I800|SHW-M180L|SPH-P100|SGH-I987|zt180|HTC(.Flyer|\_Flyer)|Sprint.ATP51|ViewPad7|pandigital(sprnova|nova)|Ideos.S7|Dell.Streak.7|Advent.Vega|A101IT|A70BHT|MID7015|Next2|nook/i) || a.match(/MB511/i) && a.match(/RUTEM/i) ? "tablet" : a.match(/BOLT|Fennec|Iris|Maemo|Minimo|Mobi|mowser|NetFront|Novarra|Prism|RX-34|Skyfire|Tear|XV6875|XV6975|Google.Wireless.Transcoder/i) ? "mobile" : a.match(/Opera/i) && a.match(/Windows.NT.5/i) && a.match(/HTC|Xda|Mini|Vario|SAMSUNG\-GT\-i8000|SAMSUNG\-SGH\-i9/i) ?
                "mobile" : a.match(/Windows.(NT|XP|ME|9)/) && !a.match(/Phone/i) || a.match(/Win(9|.9|NT)/i) ? "desktop" : a.match(/Macintosh|PowerPC/i) && !a.match(/Silk/i) ? "desktop" : a.match(/Linux/i) && a.match(/X11/i) ? "desktop" : a.match(/Solaris|SunOS|BSD/i) ? "desktop" : a.match(/Bot|Crawler|Spider|Yahoo|ia_archiver|Covario-IDS|findlinks|DataparkSearch|larbin|Mediapartners-Google|NG-Search|Snappy|Teoma|Jeeves|TinEye/i) && !a.match(/Mobile/i) ? "desktop" : "mobile"
        },
        h = l(c.navigator ? c.navigator.userAgent : c.request ? c.request.headers["user-agent"] :
            "No User-Agent Provided"),
        m = function(a) {
            return h === a
        },
        e = function() {
            var a = [].slice.call(arguments, 0);
            return 2 === a.length && h === a[0] ? (h = a[1], d()) : 1 === a.length && "string" == typeof a[0] && (h = a[0], d()), h
        };
    e.is = m;
    e.test = l;
    d();
    if (n) {
        for (f in e) Object.hasOwnProperty.call(e, f) && (c.$["test" == f ? "testUserAgent" : "is" == f ? "isDeviceType" : f] = e[f]);
        c.$.categorizr = e
    }
    return e
});
$(function() {
    $.html5Loader({
        filesToLoad: "spip.php?page=inc_preload.json",
        onBeforeLoad: function() {
            $('<div class="stroke"></div><div class="countdown">0 %</div>').appendTo("#preload");
            $("#preload > .stroke").delay(800).queue(function() {
                $(this).addClass("on").dequeue()
            });
            $("#preload > img").delay(1200).queue(function() {
                $(this).addClass("on").dequeue()
            });
            $("#preload > .countdown").delay(1400).queue(function() {
                $(this).addClass("on").dequeue()
            })
        },
        onUpdate: function(b) {
            setTimeout(function() {
                $("#preload > .countdown").html(b +
                    " %");
                100 == b && ($endTransition = "webkitTransitionEnd otransitionend oTransitionEnd msTransitionEnd transitionend", setTimeout(function() {
                    $(window).scrollTop(0)
                }, 200), $("#preload > img").removeClass("on").on($endTransition, function() {
                    $("#preload > .countdown").removeClass("on");
                    $("#preload > .stroke").addClass("on2").on($endTransition, function() {
                        $(this).addClass("on3");
                        $(".upper, .lower").addClass("on").on($endTransition, function() {
                            $(".logo a img").attr("src", "./WD_IMAGES/GLOBAL/animation-logo-lempens-design.gif").addClass("on");
                            $("#preload").remove();
                            setAnimLogo()
                        })
                    })
                }))
            }, 2E3)
        }
    });
    $nav = $(".navButton");
    $subnav = $(".subnav");
    $main = $("#main");
    $liHeightMenu = 130;
    $liHeightShare = 97;
    $minHeightSubnav = 10;
    $controller = new ScrollMagic;
    $mouseEventOut = $mouseEventHover = $mouseEventClick = null;
    categorizr.isDesktop && ($main.addClass("on"), $("body").addClass("desktop"), $mouseEventClick = "click", $mouseEventHover = "mouseenter", $mouseEventOut = "mouseleave");
    categorizr.isTablet && ($("body").addClass("tablet"), $mouseEventHover = $mouseEventClick = "tap", $('<script src="WD_SCRIPTS/JS/iscroll/iscroll.js" type="text/javascript">\x3c/script>').appendTo($("head")),
        $('<script src="WD_SCRIPTS/JS/iscroll/iscroll-probe.js" type="text/javascript">\x3c/script>').appendTo($("head")), $main.wrapInner('<div id="slider"></div>'), $controller = new ScrollMagic({
            container: "#main"
        }), $myScroll = new IScroll("#main", {
            scrollX: !1,
            scrollY: !0,
            scrollbars: "clip",
            useTransition: !0,
            probeType: 3
        }), document.addEventListener("touchmove", function(b) {
            b.preventDefault()
        }, !1), $controller.scrollPos(function() {
            return -$myScroll.y
        }), $myScroll.on("scroll", function() {
            $controller.update()
        }));
    categorizr.isMobile &&
        ($("body").addClass("mobile"), $mouseEventHover = $mouseEventClick = "tap", $date = new Date, $("body").html(""), $('<div class="mobileUnderProgress"><h1>Version mobile en construction<br>Mobile version under construction</h1><img src="./WD_IMAGES/GLOBAL/animation-logo-lempens-design.gif?' + $date.getTime() + '" alt="S\u00c3\u00a9bastien Lempens Design - http://www.lempens-design.com"></div>').prependTo("body"));
    setScrollIcon();
    smoothScroll();
    detectDevicesandScreens();
    int_interests_icons();
    adapt_mainPic_height();
    rotateH1();
    (new ScrollScene({
        triggerElement: "#france .mainPicture",
        triggerHook: 0,
        duration: 5
    })).addTo($controller).on("start", function(b) {
        "FORWARD" == b.scrollDirection && (animate_illustration("illustration_france", "start"), subnav($(".btn-menu"), "out", $liHeightMenu))
    }).on("end", function(b) {
        "REVERSE" == b.scrollDirection && (animate_illustration("illustration_france", "end"), animate_illustration("illustration_luxembourg", "end"), animate_illustration("illustration_belgique", "end"), $increment = 0, setTimeout(function() {
                $("#awards .counter").html("-")
            },
            300))
    });
    categorizr.isDesktop && (new ScrollScene({
        triggerElement: "#france .mainPicture",
        triggerHook: 0,
        duration: $(window).height()
    })).addTo($controller).setTween(TweenMax.fromTo("#france .mainPicture", 1, {
        backgroundPosition: "center 0px"
    }, {
        backgroundPosition: "center 200px",
        ease: Linear.easeNone
    }));
    categorizr.isDesktop && (new ScrollScene({
        triggerElement: "#france .mainPicture > .fadeMainPicture",
        triggerHook: 0,
        duration: $(window).height()
    })).addTo($controller).setTween(TweenMax.to("#france .mainPicture > .fadeMainPicture",
        1, {
            opacity: .4
        }));
    (new ScrollScene({
        triggerElement: $(".apropos-1"),
        triggerHook: .4,
        offset: 50,
        duration: $(window).height() / 2
    })).addTo($controller).on("start end", function(b) {
        "DURING" == b.state && TweenMax.to($(".apropos-1").find(".stickers_next"), .3, {
            scale: 1,
            ease: Back.easeOut
        })
    }).on("leave", function(b) {
        TweenMax.to($(".apropos-1").find(".stickers_next"), .3, {
            scale: 0,
            ease: Back.easeIn
        })
    });
    (new ScrollScene({
        triggerElement: $(".apropos-1"),
        triggerHook: .4,
        offset: 350,
        duration: $(window).height()
    })).addTo($controller).setTween(TweenMax.to($(".animationMetro"),
        1, {
            css: {
                backgroundPosition: "2000px bottom"
            },
            ease: Linear.easeNone
        }));
    (new ScrollScene({
        triggerElement: $(".apropos-2"),
        triggerHook: .9,
        duration: 350
    })).addTo($controller).setTween(TweenMax.to($(".apropos-2"), 1, {
        backgroundColor: "#714463",
        ease: Linear.easeNone
    }));
    (new ScrollScene({
        triggerElement: "#luxembourg .mainPicture",
        triggerHook: 0,
        duration: $("#luxembourg .mainPicture").height() / 4
    })).addTo($controller).on("start", function(b) {
        "FORWARD" == b.scrollDirection && animate_illustration("illustration_luxembourg",
            "start")
    });
    (new ScrollScene({
        triggerElement: "#luxembourg .mainPicture > .fadeMainPicture",
        triggerHook: 0,
        duration: $(window).height()
    })).addTo($controller).setTween(TweenMax.to("#luxembourg .mainPicture > .fadeMainPicture", 1, {
        opacity: .4
    }));
    categorizr.isDesktop && (1200 > $(window).width() ? ($bgpFrom = "center -50px", $bgpTo = "center 150px") : ($bgpFrom = "center -200px", $bgpTo = "center 0px"), $(window).resize(function() {
        1200 > $(this).width() ? ($bgpFrom = "center -50px", $bgpTo = "center 150px") : ($bgpFrom = "center -200px",
            $bgpTo = "center 0px")
    }), (new ScrollScene({
        triggerElement: "#luxembourg .mainPicture",
        triggerHook: .85,
        duration: $(window).height() + 800
    })).addTo($controller).setTween(TweenMax.fromTo("#luxembourg .mainPicture", 1, {
        backgroundPosition: $bgpFrom
    }, {
        backgroundPosition: $bgpTo,
        ease: Linear.easeNone
    })));
    (new ScrollScene({
        triggerElement: ".portfolio-tab",
        triggerHook: 1,
        duration: 200
    })).on("end", function(b) {
        "REVERSE" == b.scrollDirection && $("#portfolio-details,#portfolio .prow, #top-left-fixed-block,.portfolio-tab,.portfolio-nav").removeClass("on")
    }).addTo($controller);
    (new ScrollScene({
        triggerElement: "#awards",
        triggerHook: .85,
        duration: $(window).height() + 400
    })).setTween(TweenMax.to($(".raylight"), 3, {
        rotation: 180,
        ease: Linear.easeNone
    })).addTo($controller);
    (new ScrollScene({
        triggerElement: "#awards",
        triggerHook: .7,
        duration: $(window).height() - 150
    })).on("start", function(b) {
        "FORWARD" == b.scrollDirection && countAwards()
    }).on("end", function(b) {
        "REVERSE" == b.scrollDirection && countAwards()
    }).addTo($controller);
    (new ScrollScene({
        triggerElement: "#awards",
        triggerHook: .3,
        duration: $(window).height() /
            2
    })).on("start", function(b) {
        $("#portfolio-details").hasClass("on") && $("#portfolio-details,#portfolio .prow, #top-left-fixed-block,.portfolio-tab,.portfolio-nav").removeClass("on")
    }).addTo($controller);
    if ($("#portfolio-details").length) {
        var g = function() {
                $posYportfolio = parseInt($("#portfolio").position().top + 80);
                $("#portfolio-details").css("top", $posYportfolio)
            },
            c = function() {
                d();
                $("#portfolio-details .row").each(function() {
                    $(this).removeClass("on noMouseOut")
                });
                $("#portfolio-details section").each(function() {
                    $(this).removeClass("on")
                });
                $("#portfolio-details .slideshow").slickPause()
            },
            d = function() {
                setTimeout(function() {
                    $("#portfolio-details > div:first").mCustomScrollbar("scrollTo", "top")
                }, 500)
            },
            f = function() {
                $(".portfolio-nav").delay(600).queue(function() {
                    $(this).addClass("on").dequeue();
                    $(this).find("span").on($mouseEventClick, function() {
                        $index = $(this).data("type");
                        $(this).addClass("on").siblings().removeClass("on");
                        $filter = $(this).data("type");
                        void 0 == $filter && ($filter = "all");
                        $("#portfolio-details .row").each(function(b) {
                            $(this).data("type") ==
                                $filter ? ($index = $(this).data("index"), $(this).addClass("filtered").prependTo(".mCSB_container")) : $(this).removeClass("filtered");
                            "all" == $filter && ($index = $(this).data("index"), $(this).removeClass("filtered"));
                            $("section[data-index=" + $index + "]").each(function(b) {
                                $(this).eq(b).prependTo("#portfolio-details > div:last");
                                $("#portfolio-details nav").prependTo("#portfolio-details > div:last")
                            })
                        });
                        c();
                        $("#portfolio-details .row:first").addClass("on noMouseOut");
                        $("#portfolio-details section:first").addClass("on").find(".slideshow").slickPlay()
                    })
                });
                $(".portfolio-tab").addClass("on")
            };
        $("#portfolio .prow").on($mouseEventClick, function() {
            $("#portfolio-details").addClass("on");
            g();
            categorizr.isDesktop ? $("html, body").animate({
                scrollTop: parseInt($("#luxembourg").position().top + $posYportfolio - 200)
            }, 1E3) : $myScroll.scrollToElement(document.querySelector(".portfolio-nav"), 0, null, null, !0);
            $("#top-left-fixed-block").addClass("on");
            $currentClickedThumb = $(this).children().data("index");
            $("section[data-index=" + $currentClickedThumb + "]").prependTo("#portfolio-details > div:last").addClass("on").find(".slideshow").slickPlay();
            $("#portfolio-details .row[data-index=" + $currentClickedThumb + "]").addClass("on noMouseOut filtered").prependTo(".mCSB_container");
            $("#portfolio-details nav").prependTo("#portfolio-details > div:last");
            f()
        });
        $("#portfolio .prow").on($mouseEventHover, function() {
            $(this).hasClass("on") || $(this).addClass("on").siblings().removeClass("on").parent(".column").siblings().children().removeClass("on");
            $(".portfolio-tab").on($mouseEventOut, function() {
                $("#portfolio .prow").removeClass("on")
            })
        });
        $("#portfolio-details > div:first").mCustomScrollbar({
            scrollButtons: {
                enable: !0
            }
        });
        $("#portfolio-details .slideshow").slick({
            cssEase: "cubic-bezier(1.000, 0.000, 0.000, 1.000)",
            arrows: !1,
            draggable: !1,
            autoplay: !0,
            speed: 800,
            dots: !0,
            autoplaySpeed: 3E3
        });
        $("#portfolio-details .slideshow").slickPause();
        $("#portfolio-details .row").on("click", function() {
            var b = $(this);
            $("#portfolio-details .row").removeClass("on noMouseOut");
            b.addClass("on noMouseOut");
            $index = b.data("index");
            $currentSection = $("#portfolio-details").find("section[data-index=" + $index + "]");
            $currentSection.addClass("on").siblings().removeClass("on");
            $("#portfolio-details .slideshow").slickPause();
            $currentSection.find(".slideshow").slickPlay()
        });
        $("#portfolio-details nav > a.close").on($mouseEventClick, function() {
            $("#portfolio-details,#portfolio .prow, #top-left-fixed-block,.portfolio-tab,.portfolio-nav").removeClass("on");
            setTimeout(function() {
                $("#portfolio-details").find("nav a:not(.close):last").addClass("on").siblings().removeClass("on")
            }, 2E3);
            c()
        });
        (function() {
            $("#portfolio-details .row").on($mouseEventHover, function() {
                $(this).hasClass("on") ||
                    $(this).addClass("on")
            });
            $("#portfolio-details .row").on($mouseEventOut, function() {
                $(this).hasClass("noMouseOut") || $(this).removeClass("on")
            })
        })();
        g()
    }(new ScrollScene({
        triggerElement: "#belgique .mainPicture",
        triggerHook: 0,
        duration: 200
    })).addTo($controller).on("start", function(b) {
        "FORWARD" == b.scrollDirection && animate_illustration("illustration_belgique", "start")
    });
    categorizr.isDesktop && (new ScrollScene({
        triggerElement: "#belgique .mainPicture > .fadeMainPicture",
        triggerHook: 0,
        duration: $(window).height()
    })).addTo($controller).setTween(TweenMax.to("#belgique .mainPicture > .fadeMainPicture",
        1, {
            opacity: .4
        }));
    categorizr.isDesktop && (new ScrollScene({
        triggerElement: "#belgique .mainPicture",
        triggerHook: 1,
        duration: $(window).height() + 500
    })).addTo($controller).setTween(TweenMax.fromTo("#belgique .mainPicture", 1, {
        backgroundPosition: "center -180px"
    }, {
        backgroundPosition: "center 50px",
        ease: Linear.easeNone
    }));
    $(".social-icons").on("mouseenter", "a", function() {
        _index = $(".social-icons a").index($(this));
        $("#belgique .texte2 .w990px span").eq(_index).animate({
            opacity: 1
        }, 200).siblings("span").animate({
                opacity: 0
            },
            200,
            function() {
                $(this).stop()
            })
    });
    $(".social-icons").on("mouseleave", "a", function() {
        $("#belgique .texte2 .w990px span").animate({
            opacity: 0
        }, 200)
    });
    $(window).resize(function() {
        adapt_mainPic_height();
        detectDevicesandScreens()
    });
    categorizr.isDesktop && ($nav.on($mouseEventHover, function() {
        $(this).hasClass("btn-menu") && $(this).find(".subnav").height() < $minHeightSubnav && subnav($(this), "hover", $liHeightMenu);
        $(this).hasClass("btn-share") && $(this).find(".subnav").height() < $minHeightSubnav && subnav($(this),
            "hover", $liHeightShare)
    }), $nav.on($mouseEventOut, function() {
        $(this).hasClass("btn-menu") && subnav($(this), "out", $liHeightMenu);
        $(this).hasClass("btn-share") && subnav($(this), "out", $liHeightShare)
    }));
    if (categorizr.isTablet || categorizr.isMobile) $nav.on($mouseEventClick, function() {
        $(this).hasClass("openSubNav") ? (subnav($(this), "out", 0), $(this).removeClass("openSubNav")) : (subnav($(this), "hover", 130), $(this).addClass("openSubNav"))
    }), $nav.find("li").on("tap", function() {
        $(this).closest(".navButton").hasClass("btn-menu") &&
            ($moveTo = $(this).attr("class"), $myScroll.scrollToElement(document.querySelector("section#" + $moveTo + " .welcomeTitle"), 800, null, -200))
    });
    $("#slides_about_me").slick({
        dots: !0,
        speed: 800,
        onAfterChange: function(b, c) {
            init_slides();
            1 == c && anim_slide_skills_circles();
            2 == c ? anim_slide_skills_softwares() : init_slides()
        }
    });
    $("#awards .slideAwards").slick({
        dots: !1,
        speed: 800,
        infinite: !0,
        slidesToShow: 3
    })
});