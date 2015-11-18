function smoothScroll() {
    var a = $(window);
    a.on("mousewheel DOMMouseScroll", function(b) {
        b.preventDefault();
        b = b.originalEvent.wheelDelta / 120 || -b.originalEvent.detail / 3;
        b = a.scrollTop() - parseInt(280 * b);
        TweenMax.to(a, 1.1, {
            scrollTo: {
                y: b,
                autoKill: !0
            },
            ease: Power1.easeOut,
            overwrite: 5
        })
    })
}

function setScrollIcon() {
    setTimeout(function() {
        $(".scrollDown").hasClass("on") ? $(".scrollDown").removeClass("on") : $(".scrollDown").addClass("on");
        setScrollIcon()
    }, 4E3)
}

function setAnimLogo() {
    setTimeout(function() {
        $logo = $(".logo a img");
        $date = new Date;
        setTimeout(function() {
            $logo.attr("src", "./WD_IMAGES/GLOBAL/animation-logo-lempens-design.gif?" + $date.getTime() + "")
        }, 1E3);
        setAnimLogo()
    }, 3E4)
}

function detectDevicesandScreens() {
    $ifLargeScreen = function() {
        return 1600 < $(window).width() ? !0 : !1
    }
}

function adapt_mainPic_height() {
    var a = $(window).height();
    $(".mainPicture").height(a)
}

function rotateH1() {
    $(".rotateH1").each(function(a) {
        $(this).prepend('<h1 class="rotateXh1"><span>' + $(this).text() + "</span></h1>")
    });
    (new ScrollScene({
        triggerElement: ".rotateH1FR",
        triggerHook: .85,
        duration: 500
    })).addTo($controller).setTween([TweenMax.fromTo($(".rotateH1FR"), 1, {
        rotationX: -110
    }, {
        rotationX: 0,
        ease: Linear.easeNone
    }), TweenMax.fromTo($(".rotateH1FR").children(".rotateXh1"), 1, {
        backgroundColor: "#dcdbdc"
    }, {
        backgroundColor: "#868586",
        ease: Linear.easeNone
    })]);
    (new ScrollScene({
        triggerElement: ".rotateH1LU",
        triggerHook: .85,
        duration: 500
    })).addTo($controller).setTween([TweenMax.fromTo(".rotateH1LU", 1, {
        rotationX: -110
    }, {
        rotationX: 0,
        ease: Linear.easeNone
    }), TweenMax.fromTo($(".rotateH1LU").children(".rotateXh1"), 1, {
        backgroundColor: "#E1DFDE"
    }, {
        backgroundColor: "#868586",
        ease: Linear.easeNone
    })]);
    (new ScrollScene({
        triggerElement: ".rotateH1BE",
        triggerHook: 1,
        duration: 500
    })).addTo($controller).setTween([TweenMax.fromTo(".rotateH1BE", 1, {
        rotationX: -110
    }, {
        rotationX: 0,
        ease: Linear.easeNone
    }), TweenMax.fromTo($(".rotateH1BE").children(".rotateXh1"),
        1, {
            backgroundColor: "#DCDBDC"
        }, {
            backgroundColor: "#868586",
            ease: Linear.easeNone
        })])
}

function subnav(a, b, c) {
    var d = a.find("li").length;
    $(".subnav");
    switch (b) {
        case "hover":
            a.find(".subnav").width(177).css({
                overflow: "visible"
            });
            TweenMax.to(a, .35, {
                backgroundColor: "#fff",
                ease: "Expo.easeOut"
            });
            TweenMax.to(a.children("a"), .35, {
                backgroundPosition: "center 0px",
                ease: "Expo.easeOut"
            });
            for ($i = 0; $i <= d; $i++) TweenMax.fromTo(a.find("li").eq($i), .35, {
                rotationX: 89,
                height: 0
            }, {
                delay: .15 * $i,
                rotationX: 0,
                height: c,
                ease: "Expo.easeOut"
            }), TweenMax.to(a.find("li").eq($i).children(".after"), .35, {
                delay: .15 * $i,
                opacity: 0
            });
            categorizr.isDesktop && (a.find("li").on($mouseEventHover, function() {
                subnavLi($(this), "hover")
            }), a.find("li").on($mouseEventOut, function() {
                subnavLi($(this), "out")
            }), a.find("li").on($mouseEventClick, function() {
                var a = $(this).attr("class"),
                    b = 300;
                "france" == a && (b = 500);
                TweenMax.to($(window), 1.3, {
                    scrollTo: {
                        y: $("#" + a).position().top + b
                    },
                    ease: Expo.easeInOut
                })
            }));
            break;
        case "out":
            TweenMax.to(a, .35, {
                backgroundColor: "#ca0a60",
                ease: "Back.easeOut"
            }), TweenMax.to(a.children("a"), .35, {
                backgroundPosition: "center -22px",
                ease: "Back.easeOut"
            }), a.find(".subnav").width(0).css({
                overflow: "hidden"
            }), TweenMax.to(a.find("li"), 0, {
                height: 0,
                rotationX: 90
            }), TweenMax.to(a.find("li").children(".after"), 0, {
                opacity: 1
            })
    }
}

function subnavLi(a, b) {
    switch (b) {
        case "hover":
            TweenMax.to(a, .3, {
                borderWidth: 2,
                x: 25,
                rotationY: 0,
                ease: "Back.easeInOut"
            });
            TweenMax.fromTo(a.find(".logorub"), .7, {
                rotationY: 0
            }, {
                rotationY: 360,
                ease: Back.easeOut
            });
            break;
        case "out":
            TweenMax.to(a, .3, {
                borderWidth: 0,
                x: 0,
                rotationY: 0,
                ease: "Back.easeInOut"
            })
    }
}

function animate_illustration(a, b) {
    $("#" + a).find("div");
    TweenMax.killTweensOf($("#" + a));
    switch (b) {
        case "start":
            setTimeout(function() {
                $("#" + a).find('div:not(".cloud,.country_name")').each(function(a) {
                    TweenMax.to($(this), .5, {
                        delay: .15 * a,
                        rotationX: 0,
                        opacity: 1,
                        ease: "Back.easeOut",
                        startAt: {
                            visibility: "visible"
                        }
                    })
                })
            }, 100);
            setTimeout(function() {
                    $("#" + a).find("div.cloud").each(function(a) {
                        TweenMax.fromTo($(this), .5, {
                            scale: 3,
                            opacity: 0,
                            rotationX: 0,
                            visibility: "visible"
                        }, {
                            delay: .15 * a,
                            scale: 1,
                            opacity: 1,
                            ease: "Back.easeOut"
                        })
                    })
                },
                400);
            setTimeout(function() {
                TweenMax.to($("#" + a).find("div.country_name"), .5, {
                    opacity: 1,
                    left: $("#" + a).find("div.country_name").data("posx") + "%",
                    ease: "Back.easeOut"
                })
            }, 1E3);
            break;
        case "end":
            setTimeout(function() {
                    $("#" + a).find('div:not(".cloud,.country_name")').each(function(a) {
                        TweenMax.fromTo($(this), .5, {
                            rotationX: 0,
                            startAt: {
                                visibility: "visible"
                            }
                        }, {
                            delay: .15 * a,
                            rotationX: -89,
                            ease: "Back.easeIn",
                            opacity: 0,
                            onCompleteParams: [$(this)],
                            onComplete: function(a) {
                                a.css({
                                    visibility: "hidden",
                                    opacity: 1
                                })
                            }
                        })
                    })
                }, 400),
                $("#" + a).find("div.cloud").each(function(a) {
                    TweenMax.fromTo($(this), .5, {
                        scale: 1,
                        opacity: 1,
                        startAt: {
                            visibility: "visible"
                        }
                    }, {
                        delay: .15 * a,
                        scale: 0,
                        ease: "Back.easeIn",
                        opacity: 0,
                        onCompleteParams: [$(this)],
                        onComplete: function(a) {
                            $(this).css({
                                visibility: "hidden",
                                opacity: 1,
                                scale: 3
                            })
                        }
                    })
                }), setTimeout(function() {
                    $("#" + a).find("div.country_name").each(function(a) {
                        TweenMax.to($(this), .5, {
                            delay: .15 * a,
                            opacity: 0,
                            left: "20%",
                            ease: "Back.easeOut"
                        })
                    })
                }, 1E3)
    }
}

function init_slides() {
    TweenMax.killTweensOf($(".skills_circles"), $(".skills_softwares"));
    $(".svgCircle").removeClass("animate");
    $(".activeThumb").css("opacity", 0);
    $(".skills_circles").find("h1").css("opacity", 0);
    $(".skills_softwares").children(".row").css({
        top: 0,
        opacity: 0
    });
    $(".skills_softwares").find(".col").children("div").css({
        height: 0
    });
    $(".skills_softwares").find(".col").children("h1").css({
        marginBottom: -10,
        opacity: 0
    });
    $(".skills_softwares").next("p").css({
        opacity: 0
    })
}

function anim_slide_skills_circles() {
    $(".svgCircle").each(function(a) {
        $(this).delay(580 * a).fadeIn(0, function() {
            $(this).addClass("animate")
        })
    });
    $(".activeThumb").each(function(a) {
        $(this).delay(580 * a).fadeIn(0, function() {
            TweenMax.fromTo($(this), .3, {
                scale: .2,
                opacity: 0,
                y: -90
            }, {
                opacity: 1,
                scale: 1,
                y: 0,
                ease: Back.easeOut
            })
        })
    });
    $(".skills_circles").find("h1").each(function(a) {
        $(this).delay(680 * a).fadeIn(0, function() {
            TweenMax.fromTo($(this), .3, {
                opacity: 0,
                y: -35
            }, {
                opacity: 1,
                y: 0,
                ease: Back.easeOut
            })
        })
    })
}

function anim_slide_skills_softwares() {
    1 < $(".skills_softwares").length && $(".skills_softwares").eq(0).remove();
    $(".skills_softwares").children(".row").each(function(a) {
        $(this).delay(150 * a).fadeIn(0, function() {
            TweenMax.to($(this), .3, {
                top: 45 * a,
                opacity: 1,
                ease: Back.easeOut
            })
        })
    });
    setTimeout(function() {
        $(".skills_softwares").find(".col").children("div").each(function(a) {
            $(this).delay(150 * a).fadeIn(0, function() {
                TweenMax.to($(this), .3, {
                    height: parseInt(1.8 * $(this).data("skills")),
                    ease: Back.easeOut
                })
            })
        })
    }, 750);
    setTimeout(function() {
        TweenMax.to($(".skills_softwares").next("p"), 1.5, {
            opacity: 1,
            ease: Back.easeOut
        })
    }, 1500);
    setTimeout(function() {
        $(".skills_softwares").find(".col").children("h1").each(function(a) {
            $(this).delay(150 * a).fadeIn(0, function() {
                TweenMax.to($(this), .3, {
                    marginBottom: 20,
                    opacity: 1,
                    ease: Back.easeOut
                })
            })
        })
    }, 750)
}

function int_interests_icons() {
    TweenMax.fromTo($(".heart img"), .45, {
        scale: 1.4
    }, {
        repeatDelay: .5,
        scale: 1,
        repeat: -1,
        ease: Back.easeOut
    });
    $("#interests_about_me").find("span").each(function(a) {
        a *= 145;
        TweenMax.to($(this), 0, {
            startAt: {
                backgroundPosition: "-" + a + "px 0"
            }
        });
        $(this).on("mouseenter", function() {
            var a = $(this).css("backgroundPosition").split(" ")[0];
            $(this).parent().append('<div class="fillBg"></div>');
            TweenMax.to($(this), .6, {
                backgroundPosition: a + " -145px",
                ease: Back.easeOut
            });
            TweenMax.to($(this).parent().children(".fillBg"),
                .3, {
                    height: 145,
                    ease: Back.easeOut
                })
        });
        $(this).on("mouseleave", function() {
            var a = $(this).css("backgroundPosition").split(" ")[0];
            TweenMax.to($(this), .6, {
                backgroundPosition: a + " 0px",
                ease: Back.easeIn
            });
            TweenMax.to($(this).parent().children(".fillBg"), .3, {
                height: 0,
                ease: Back.easeIn,
                onCompleteParams: [$(this).parent().children(".fillBg")],
                onComplete: function(a) {
                    a.remove()
                }
            })
        })
    })
}
$increment = 0;

function countAwards() {
    var a = $("#awards .counter"),
        b = $(".slideAwards .slick-slide:not(.slick-cloned) a:not(.not_awards)").length,
        c;
    c = setInterval(function() {
        $increment < b + 1 ? (a.html($increment), $increment++) : clearInterval(c)
    }, 120)
};