(function (a) {
    var c = null !== a.location.href.match(/^http:\/\/(lightgraffiti\.)?littlesun.com/i),
        b = "log debug info warn error assert dir dirxml trace group groupCollapsed groupEnd time timeEnd profile profileEnd count exception table".split(" "),
        d, f, g;
    if ("undefined" == typeof a.console || !a.console) try {
        a.console = {}
    } catch (e) {}
    d = !c && "undefined" != typeof a.console.log ? a.console.log : function () {};
    f = 0;
    for (g = b.length; f < g; f++) if (c || "undefined" == typeof a.console[b[f]] || !a.console[b[f]]) try {
        a.console[b[f]] = d
    } catch (j) {}
})(window);
var UTILS = UTILS || {};
UTILS.getRandPointOnSphereSurface = function (a) {
    p = new THREE.Vector3;
    p.x = 2 * Math.random() - 1;
    p.y = 2 * Math.random() - 1;
    p.z = 2 * Math.random() - 1;
    p.normalize();
    p.setLength(a);
    return p
};
UTILS.getIntersect = function (a, c) {
    var b = [],
        d = {}, f = c.length,
        g, e;
    for (g = 0; g < f; g++) d[c[g]] = !0;
    f = a.length;
    for (g = 0; g < f; g++) e = a[g], e in d && b.push(e);
    return b
};
UTILS.getNotIntersect = function (a, c) {
    var b = [],
        d = {}, f = c.length,
        g, e;
    for (g = 0; g < f; g++) d[c[g]] = !0;
    f = a.length;
    for (g = 0; g < f; g++) e = a[g], e in d || b.push(e);
    return b
};
UTILS.pointsOnSphere = function (a, c) {
    for (var b = [], d = Math.PI * (3 - Math.sqrt(5)), f = 2 / a, g = 0; g < a; g++) {
        var e = g * f - 1 + f / 2,
            j = Math.sqrt(1 - e * e),
            i = g * d,
            e = new THREE.Vector3(Math.cos(i) * j, e, Math.sin(i) * j);
        c && e.multiplyScalar(c);
        b.push(e)
    }
    return b
};
UTILS.cartesianToSpherical = function (a, c, b) {
    var d = a * a + c * c,
        f = Math.sqrt(d + b * b),
        b = Math.atan2(b, Math.sqrt(d)),
        a = Math.atan2(c, a);
    return {
        r: f,
        elev: b,
        az: a
    }
};
UTILS.sphericalToCartesian = function (a, c, b) {
    return {
        x: a * Math.sin(b) * Math.cos(c),
        y: a * Math.sin(b) * Math.sin(c),
        z: a * Math.cos(b)
    }
};
UTILS.getQuaternionBetweenVecs = function (a, c, b) {
    var d = new THREE.Matrix4;
    d.lookAt(c, a, b);
    var f = d.n11,
        a = d.n21,
        c = d.n31,
        b = d.n12,
        g = d.n22,
        e = d.n32,
        j = d.n13,
        i = d.n23,
        d = d.n33,
        h = f + g + d,
        l;
    0 < h ? (d = 2 * Math.sqrt(h + 1), l = 0.25 * d, f = (e - i) / d, g = (j - c) / d, h = (a - b) / d) : f > g && f > d ? (d = 2 * Math.sqrt(1 + f - g - d), f = 0.25 * d, g = (a + b) / d, h = (j + c) / d, l = (e - i) / d) : g > d ? (d = 2 * Math.sqrt(1 + g - f - d), g = 0.25 * d, f = (a + b) / d, h = (e + i) / d, l = (j - c) / d) : (d = 2 * Math.sqrt(1 + d - f - g), h = 0.25 * d, f = (j + c) / d, g = (e + i) / d, l = (a - b) / d);
    a = new THREE.Quaternion(f, g, h, l);
    a.normalize();
    return a
};
UTILS.rotateObjectFromAxisAngle = function (a, c, b) {
    var d = new THREE.Matrix4;
    d.setRotationAxis(c.normalize(), b);
    d.multiplySelf(a.matrix);
    a.matrix = d;
    c = a.quaternion.clone();
    c.setFromRotationMatrix(d);
    a.quaternion = c
};
UTILS.QuaternionSlerp = function (a, c, b, d) {
    var f = a.w * c.w + a.x * c.x + a.y * c.y + a.z * c.z;
    0 > f ? (b.w = -c.w, b.x = -c.x, b.y = -c.y, b.z = -c.z, f = -f) : b.copy(c);
    if (1 <= Math.abs(f)) return b.w = a.w, b.x = a.x, b.y = a.y, b.z = a.z, b;
    var g = Math.acos(f),
        f = Math.sqrt(1 - f * f);
    if (0.0010 > Math.abs(f)) return b.w = 0.5 * (a.w + c.w), b.x = 0.5 * (a.x + c.x), b.y = 0.5 * (a.y + c.y), b.z = 0.5 * (a.z + c.z), b;
    c = Math.sin((1 - d) * g) / f;
    d = Math.sin(d * g) / f;
    b.w = a.w * c + b.w * d;
    b.x = a.x * c + b.x * d;
    b.y = a.y * c + b.y * d;
    b.z = a.z * c + b.z * d;
    return b
};
UTILS.shouldWeFlipQuart = function (a, c) {
    return 0 > a.w * c.w + a.x * c.x + a.y * c.y + a.z * c.z ? !0 : !1
};
UTILS.getMouse = function (a) {
    var c = a.currentTarget,
        b = 0,
        d = 0;
    if (void 0 !== c.offsetParent) {
        do b += c.offsetLeft, d += c.offsetTop;
        while (c = c.offsetParent)
    }
    b += UTILS.stylePaddingLeft + UTILS.styleBorderLeft + UTILS.htmlLeft;
    d += UTILS.stylePaddingTop + UTILS.styleBorderTop + UTILS.htmlTop;
    return {
        x: a.pageX - b,
        y: a.pageY - d
    }
};
UTILS.raySphereIntersect = function (a, c, b, d) {
    var f = new THREE.Vector3;
    f.sub(b, a);
    a = f.length();
    c = f.dot(c);
    d = d * d - (a * a - c * c);
    return 0 > d ? -1 : c - Math.sqrt(d)
};
var WEB_MODE = 0,
    KIOSK_MODE = 1,
    DEBUG_MODE = 2,
    initWithFindForm = !1,
    displayMode = WEB_MODE,
    fadeSpeed = 300,
    overlayOpac = 0.7,
    infoBoxOpen = !1,
    photoBoxOpen = !1,
    checkUID = "none",
    totalCount = 0,
    urlVars = null,
    urlUID = null,
    WEBGL_ENABLED = !0,
    FIRST_UID, LAST_UID, spinnerOpts = {
        lines: 11,
        length: 4,
        width: 3,
        radius: 6,
        corners: 1,
        rotate: 0,
        color: "#fff",
        speed: 1.1,
        trail: 67,
        shadow: !1,
        hwaccel: !1,
        className: "spinner",
        zIndex: 2E9,
        top: "auto",
        left: "auto"
    };

function initUI() {
    $("body").append('<div id="photobox"></div>');
    $("#overlay").hide();
    $("#photobox").hide();
    $("body").append('<img id="left-arrow-globe" src="assets/prev.png" /><img id="right-arrow-globe" src="assets/next.png" />');
    var a = (window.innerHeight - 45) / 2;
    $("#left-arrow-globe").css({
        top: a,
        left: 0
    });
    $("#right-arrow-globe").css({
        top: a,
        right: 0
    });
    $("#left-arrow-globe").click(function () {
        UTILS.sceneManager.leftBarFunc()
    });
    $("#right-arrow-globe").click(function () {
        UTILS.sceneManager.rightBarFunc()
    });
    $("#photobox").append('<div class="photowrapper">&nbsp;</div><div class="photosub"><div class="photosocial"></div><div class="photoinfo"></div></div>');
    $("#photobox .photowrapper").click(function () {
        "none" == $("#photobox .photo").css("display") ? ($("#overlay").stop().fadeTo(fadeSpeed, overlayOpac), $("#photobox .photo").stop().fadeIn(fadeSpeed, function () {})) : ($("#overlay").stop().fadeTo(fadeSpeed, 0), $("#photobox .photo").stop().fadeOut(fadeSpeed, function () {}))
    });
    displayMode == WEB_MODE ? ($("body").append('<div id="infobox"><div class="content"></div></div>'),
    $("#infobox").hide(), $("#aboutlink").click(function () {
        openBox("about")
    }), $("#howlink").click(function () {
        openBox("how")
    }), $("#creditslink").click(function () {
        openBox("credits")
    }), $("#findyours a").click(function () {
        openBox("find")
    }), initWithFindForm && openBox("find")) : ($("#nav").remove(), $("#findyours").empty(), $("#findyours").html('<h2 style="margin:0">Visit the light graffiti room to <span class="yellow">contribute</span></h2>'), $("#social, #photobox .photosocial").hide());
    $("#overlay, #photobox, #infobox").click(function (a) {
        var b = true;
        infoBoxOpen ? overBounds(a.clientX, a.clientY, $("#infobox .content")) && (b = false) : photoBoxOpen && overBounds(a.clientX, a.clientY, $("#photobox .photo")) && (b = false);
        if (b) {
            closeDrawing();
            closeBox();
            photoBoxOpen && sceneManager && sceneManager.focus()
        }
    });
    DBInterface.getTotalSize(function (a) {
        DBInterface.getIDListBeforeIndex(1, 1, function (a) {
            FIRST_UID = a[0]
        });
        DBInterface.getIDListFromIndex(a - 1, 1, function (a) {
            LAST_UID = a[0]
        })
    })
}

function overBounds(a, c, b) {
    var d = $(b).offset().left,
        f = $(b).offset().top,
        g = d + $(b).width(),
        b = f + $(b).height() + 30;
    return a > d && a < g && c > f && c < b ? !0 : !1
}

function openDrawing(a) {
    var c = "http://" + document.location.host + "/",
        b = c + "search?method=image_medium_by_id&arg1=" + a,
        d, f = a.substr(0, 2),
        g = a.substr(2, 2);
    d = a.substr(4, 2) + " " + "Jan Feb Mar Apr May Jun Jul Aug Sept Oct Nov Dec".split(" ")[g - 1] + ", 20" + f;
    var e = c + a;
    setTimeout(function () {
        if ($("#overlay").css("display") && (!WEBGL_ENABLED || sceneManager.focusState == sceneManager.fStates.FOCUSSED)) {
            var f = $('<img class="photo" style="display:none;" src="' + b + '" />');
            $("#photobox").css("marginTop", "-180px");
            $("#photobox .photowrapper").html(f);
            " " != d && $("#photobox .photosub .photoinfo").html("Created on " + d);
            $("#overlay").stop().fadeTo(fadeSpeed, 0);
            $("#photobox").stop().fadeIn(fadeSpeed);
            $("#photobox .photosocial").append('<a href="https://twitter.com/share" class="twitter-share-button" data-dnt="true" data-count="none" data-text="Sunlight Graffiti at Tate Modern @LittleSun @OlafurEliasson" data-url="' + e + '">Tweet</a>');
            twttr.widgets.load();
            addFBLike("#photobox .photosocial", c, a);
            $("#photobox .photosocial").append('<span id="share-area"><a href="#" id="share-bt" class="mini-bt">Link</a>&nbsp;<input type="text" id="uri-link" SIZE="10" MAXLENGTH="30" value="http://lightgraffiti.littlesun.com/' + a + '" />');
            $("#photobox #share-bt").click(function (a) {
                a.preventDefault();
                a = $(this).parent().find("#uri-link");
                $(a).is(":visible") ? $(a).stop().fadeOut("fast") : $(a).stop().fadeIn("fast");
                return !1
            });
            $("#photobox #uri-link").click(function (a) {
                a.preventDefault();
                return !1
            });
            $("#photobox").append('<img id="left-arrow" src="assets/prev.png" /><img id="right-arrow" src="assets/next.png" />');
            var g = (window.innerHeight - 45) / 2;
            $("#left-arrow").css({
                top: g,
                left: window.innerWidth / 2 - 320 - 50 - 75
            });
            $("#right-arrow").css({
                top: g,
                left: window.innerWidth / 2 + 395
            });
            WEBGL_ENABLED ? ($("#left-arrow-globe, #right-arrow-globe, #pagination").stop().fadeOut("fast"), $("#left-arrow").click(function () {
                closeDrawing();
                UTILS.sceneManager.leftBarFunc()
            }), $("#right-arrow").click(function () {
                closeDrawing();
                UTILS.sceneManager.rightBarFunc()
            }), $("#left-arrow, #right-arrow").show(), photoBoxOpen = !0, f.load(function () {
                $("#overlay").delay(1500).stop().fadeTo(fadeSpeed, overlayOpac);
                $("#photobox .photo").delay(1500).stop().fadeIn(fadeSpeed, function () {})
            })) : (g = document.getElementById("photobox"), (new Spinner(spinnerOpts)).spin(g), $("#left-arrow").click(function () {
                loadPrevDrawing(a)
            }), $("#right-arrow").click(function () {
                loadNextDrawing(a)
            }), $(window).resize(function () {
                var a = (window.innerHeight - 45) / 2;
                $("#left-arrow").css({
                    top: a,
                    left: window.innerWidth / 2 - 320 - 50 - 75
                });
                $("#right-arrow").css({
                    top: a,
                    left: window.innerWidth / 2 + 395
                })
            }), photoBoxOpen = !0, $("#overlay").stop().fadeTo(fadeSpeed, overlayOpac), f.load(function () {
                $("#photobox .spinner").stop().fadeOut(100, function () {
                    $(this).remove()
                });
                a != FIRST_UID && $("#left-arrow").show();
                a != LAST_UID && $("#right-arrow").show();
                $("#photobox .photo").stop().fadeIn(fadeSpeed, function () {})
            }))
        }
    }, 0)
}
function loadNextDrawing(a) {
    DBInterface.getIDListFromID(a, 2, function (a) {
        1 < a.length && openDrawing(a[1])
    })
}
function loadPrevDrawing(a) {
    DBInterface.getIDListBeforeID(a, 1, function (a) {
        0 < a.length && openDrawing(a[0])
    })
}

function closeDrawing() {
    $("#overlay").stop().fadeOut(fadeSpeed);
    $("#photobox").stop().fadeOut(fadeSpeed, function () {
        $("#photobox .photo, #photobox #left-arrow, #photobox #right-arrow").remove();
        $("#photobox .photowrapper").empty();
        $("#photobox .photosub .photoinfo").empty();
        $("#photobox .photosub .photosocial").empty();
        photoBoxOpen = !1;
        setTimeout(function () {
            photoBoxOpen || $("#left-arrow-globe, #right-arrow-globe, #pagination").stop().fadeTo("fast", 1)
        }, 1500)
    })
}

function loadDrawing(a) {
    if (11 == a.length) {
        var c = a.substr(8, 3).replace(/0/, "O").toUpperCase(),
            a = a.substr(0, 8) + c,
            c = !1;
        if (WEBGL_ENABLED) {
            for (var b = 0; b < sceneManager.sun.grafs.uid.length; b++) if (sceneManager.sun.grafs.uid[b] == a) {
                closeBox();
                sceneManager.moveToFocussingIfNecessary(sceneManager.sun.grafs.uidToIndex[a]);
                c = !0;
                return
            }
            c || DBInterface.getIndexFromID(a, function (b) {
                DBInterface.getTotalSize(function (c) {
                    timeNavigator.totalUIDS = c;
                    c = timeNavigator.totalUIDS - sceneManager.sun.maxGrafs;
                    console.log("TotalUIDS " + timeNavigator.totalUIDS + " Last requestable index " + c);
                    var g = function (b) {
                        checkUID = a;
                        sceneManager.sun.addNewUids(b);
                        sceneManager.sun.manageLoadQueue()
                    };
                    b <= c ? (console.log("Find your uid " + a + " at " + b), DBInterface.getIDListFromID(a, sceneManager.sun.maxGrafs, g)) : DBInterface.getIDListFromIndex(c, sceneManager.sun.maxGrafs, g)
                })
            }, function (a) {
                console.log(a)
            })
        } else DBInterface.getJSON(a, function () {
            closeBox();
            openDrawing(a)
        }, function () {
            $("#find_error").html("The code you entered is invalid, please try again.");
            $("#find_error").show()
        })
    }
}

function findDrawing() {
    $("#find_error").hide();
    $("#email_error").hide();
    var a = $("#uid_input").val(),
        c = $("#email_input").val(),
        b = !1;
    $("#email_checkbox").is(":checked") && (b = !0);
    var d = !1;
    if (11 != a.length) $("#find_error").html("The code you entered is invalid, please try again."), $("#find_error").show(), d = !0;
    else var f = a.substr(8, 3).replace(/0/, "O").toUpperCase(),
        a = a.substr(0, 8) + f;
    0 == a.length && ($("#find_error").html("Please enter your code."), $("#find_error").show(), d = !0);
    "" != c && !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(c) && ($("#email_error").html("Please enter a valid e-mail address, or leave blank."), $("#email_error").show(), d = !0);
    if (!d) if (d = !1, WEBGL_ENABLED) {
        for (f = 0; f < sceneManager.sun.grafs.uid.length; f++) if (sceneManager.sun.grafs.uid[f] == a) {
            closeBox();
            sceneManager.moveToFocussingIfNecessary(sceneManager.sun.grafs.uidToIndex[a]);
            $.post("http://littlesun.com/sub/uinfo.php", {
                uid: a,
                email: c,
                checkbox: b
            });
            d = !0;
            return
        }
        d || DBInterface.getIndexFromID(a, function (d) {
            DBInterface.getTotalSize(function (e) {
                timeNavigator.totalUIDS = e;
                e = timeNavigator.totalUIDS - sceneManager.sun.maxGrafs;
                console.log("TotalUIDS " + timeNavigator.totalUIDS + " Last requestable index " + e);
                var f = function (b) {
                    $("#infobox .content").html('<span style="margin:0 auto;">Loading... please wait.</span>');
                    checkUID = a;
                    sceneManager.sun.addNewUids(b);
                    sceneManager.sun.manageLoadQueue()
                };
                if (d <= e) {
                    console.log("Find your uid " + a + " at " + d);
                    DBInterface.getIDListFromID(a, sceneManager.sun.maxGrafs, f)
                } else DBInterface.getIDListFromIndex(e, sceneManager.sun.maxGrafs, f);
                $.post("http://littlesun.com/sub/uinfo.php", {
                    uid: a,
                    email: c,
                    checkbox: b
                })
            })
        }, function () {
            $("#find_error").html("The code you entered is invalid, please try again.");
            $("#find_error").show()
        })
    } else DBInterface.getJSON(a, function () {
        openDrawing(a);
        $.post("http://littlesun.com/sub/uinfo.php", {
            uid: a,
            email: c,
            checkbox: b
        })
    }, function () {
        $("#find_error").html("The code you entered is invalid, please try again.");
        $("#find_error").show()
    })
}
function checkFromFinder() {}

function openBox(a) {
    photoBoxOpen ? ($("#overlay").stop().fadeOut(fadeSpeed), $("#photobox").stop().fadeOut(fadeSpeed, function () {
        $("#photobox .photo").remove();
        $("#photobox .photoinfo").empty();
        photoBoxOpen = !1;
        fillOpenBox(a)
    })) : fillOpenBox(a)
}

function fillOpenBox(a) {
    var c;
    "about" == a ? c = "text/about.html" : "how" == a ? c = "text/how.html" : "credits" == a ? c = "text/credits2.html" : "find" == a ? c = "text/find.html" : "nowebgl" == a && (c = "text/nowebgl.html");
    "about" == a ? $("#infobox .content").css("width", "830px") : $("#infobox .content").css("width", "550px");
    $("#infobox .content").unbind("click");
    "find" != a ? $("#infobox .content").click(function () {
        closeBox()
    }) : $("#infobox .content").click(function () {});
    $("#infobox").attr("name", a);
    $.get(c, function (b) {
        $("#infobox .content").html(b);
        $("#overlay").stop().fadeTo(fadeSpeed, overlayOpac);
        $("#infobox").css("marginTop", -$("#infobox").height() / 2 + "px");
        $("#infobox").stop().fadeIn(fadeSpeed);
        "find" == a && $("#find_submit").click(function () {
            findDrawing()
        });
        infoBoxOpen = !0
    })
}

function closeBox() {
    resetFBMetatags();
    $("#overlay").stop().fadeOut(fadeSpeed);
    $("#infobox").stop().fadeOut(fadeSpeed, function () {
        $(this).find(".content").html("");
        infoBoxOpen = !1;
        !WEBGL_ENABLED && "nowebgl" == $(this).attr("name") && ($(this).attr("name", ""), null != urlUID && loadDrawing(urlUID))
    })
}
function getUrlVars() {
    var a = {};
    window.location.href.replace(/[?&]+([^=&]+)=([^&]*)/gi, function (c, b, d) {
        a[b] = d
    });
    return a
}

function checkForUID() {
    urlVars = getUrlVars();
    if (urlVars.uid) {
        if (urlVars.uid.replace("#", ""), 11 == urlVars.uid.length) {
            var a = urlVars.uid.substr(8, 3).replace(/0/, "O").toUpperCase();
            urlUID = urlVars.uid.substr(0, 8) + a
        }
    } else if (a = window.location.href.split("/"), 3 < a.length) {
        var c = a[a.length - 1];
        c.replace("#", "");
        11 == c.length && (a = c.substr(8, 3).replace(/0/, "O").toUpperCase(), urlUID = c.substr(0, 8) + a)
    }
    null != urlUID && updateFBMetatags(document.domain, urlUID)
}

function addFBLike(a, c, b) {
    var d;
    d = b ? c + b : b;
    updateFBMetatags(c, b);
    $(a).append('<fb:like id="photolike" href="' + d + '" layout="button_count" style="width:47px;overflow:hidden;margin-left:10px;" show_faces="false" width="47" action="like" font="segoe ui" colorscheme="light" />');
    "undefined" !== typeof FB && FB.XFBML.parse(document.getElementById("like"))
}

function updateFBMetatags(a, c) {
    $('meta[property="og:url"]').attr("content", "http://" + a + c);
    $('meta[property="og:image"]').attr("content", "http://" + a + "search?method=image_small_by_id&arg1=" + c)
}
function resetFBMetatags() {
    $('meta[property="og:url"]').attr("content", "http://" + document.domain);
    $('meta[property="og:image"]').attr("content", "http://" + document.domain + "/assets/thumb.png")
}

function updatePagination() {
    var a = timeNavigator.when + sceneManager.sun.maxGrafs;
    $("#pagination").html('<div style="font-size: 41px;color:#ffcd00;">' + timeNavigator.totalUIDS + '</div><div style="font-size:26px;margin-top: -8px;">entries</div><br>Showing<br>' + (timeNavigator.when + 1) + " &#8211; " + (a + 1));
    $("#pagination").stop().fadeTo("fast", 1);
    a >= timeNavigator.totalUIDS - 1 ? $("#right-arrow-globe").hide() : $("#right-arrow-globe").show();
    0 == timeNavigator.when ? $("#left-arrow-globe").hide() : $("#left-arrow-globe").show()
};
THREE.SunTrackballControls = function (a, c) {
    var b = this;
    this.object = a;
    this.domElement = void 0 !== c ? c : document;
    this.enabled = !0;
    this.screen = {
        width: window.innerWidth,
        height: window.innerHeight,
        offsetLeft: 0,
        offsetTop: 0
    };
    this.radius = (this.screen.width + this.screen.height) / 4;
    this.rotateSpeed = 1;
    this.zoomSpeed = 1.2;
    this.panSpeed = 0.3;
    this.noLookAt = this.noPan = this.noZoom = this.noRotate = !1;
    this.dynamicDampingFactor = 0.2;
    this.staticMoving = !1;
    this.rotateSpeed = 1;
    this.minDistance = 0;
    this.maxDistance = Infinity;
    this.mouseMovedFlag = !1;
    this.keys = [65, 83, 68];
    this.lastTouched = 0;
    this.projector = new THREE.Projector;
    this.target = new THREE.Vector3;
    var d = new THREE.Vector3,
        f = !1,
        g = -1,
        e = new THREE.Vector3,
        j = new THREE.Vector3,
        i = new THREE.Vector3,
        h = new THREE.Vector2,
        l = new THREE.Vector2,
        k = new THREE.Vector2,
        m = new THREE.Vector2;
    this.handleEvent = function (a) {
        if ("function" == typeof this[a.type]) this[a.type](a)
    };
    this.getMouseOnScreen = function (a, c) {
        return new THREE.Vector2(0.5 * ((a - b.screen.offsetLeft) / b.radius), 0.5 * ((c - b.screen.offsetTop) / b.radius))
    };
    this.getMouseProjectionOnBall = function (a, c) {
        var d = new THREE.Vector3((a - 0.5 * b.screen.width - b.screen.offsetLeft) / b.radius, (0.5 * b.screen.height + b.screen.offsetTop - c) / b.radius, 0),
            f = d.length();
        1 < f ? d.normalize() : d.z = Math.sqrt(1 - f * f);
        e.copy(b.object.position).subSelf(b.target);
        f = b.object.up.clone().setLength(d.y);
        f.addSelf(b.object.up.clone().crossSelf(e).setLength(d.x));
        f.addSelf(e.setLength(d.z));
        return f
    };
    this.rotateCamera = function () {
        var a = Math.acos(j.dot(i) / j.length() / i.length());
        if (a) {
            var c = (new THREE.Vector3).cross(j,
            i).normalize(),
                d = new THREE.Quaternion,
                a = a * b.rotateSpeed;
            d.setFromAxisAngle(c, -a);
            d.multiplyVector3(e);
            d.multiplyVector3(b.object.up);
            d.multiplyVector3(i);
            b.staticMoving ? j = i : (d.setFromAxisAngle(c, a * (b.dynamicDampingFactor - 1)), d.multiplyVector3(j))
        }
    };
    this.zoomCamera = function () {
        var a = 1 + (l.y - h.y) * b.zoomSpeed;
        1 !== a && 0 < a && (e.multiplyScalar(a), b.staticMoving ? h = l : h.y += (l.y - h.y) * this.dynamicDampingFactor)
    };
    this.panCamera = function () {
        var a = m.clone().subSelf(k);
        if (a.lengthSq()) {
            a.multiplyScalar(e.length() * b.panSpeed);
            var c = e.clone().crossSelf(b.object.up).setLength(a.x);
            c.addSelf(b.object.up.clone().setLength(a.y));
            b.object.position.addSelf(c);
            b.target.addSelf(c);
            b.staticMoving ? k = m : k.addSelf(a.sub(m, k).multiplyScalar(b.dynamicDampingFactor))
        }
    };
    this.checkDistances = function () {
        if (!b.noZoom || !b.noPan) b.object.position.lengthSq() > b.maxDistance * b.maxDistance && b.object.position.setLength(b.maxDistance), e.lengthSq() < b.minDistance * b.minDistance && b.object.position.add(b.target, e.setLength(b.minDistance))
    };
    this.rotateTo = function (a) {
        i = a;
        console.log("TRYING")
    };
    this.update = function () {
        e.copy(b.object.position).subSelf(b.target);
        b.noRotate || b.rotateCamera();
        b.noZoom || b.zoomCamera();
        b.noPan || b.panCamera();
        b.object.position.add(b.target, e);
        b.checkDistances();
        b.noLookAt || b.object.lookAt(b.target);
        0 < d.distanceTo(b.object.position) && d.copy(b.object.position)
    };
    this.domElement.addEventListener("contextmenu", function (a) {
        a.preventDefault()
    }, !1);
    this.domElement.addEventListener("mousemove", function (a) {
        if (b.enabled) {
            b.mouseMovedFlag = 1;
            var c = new THREE.Vector3(2 * (a.clientX / window.innerWidth) - 1, 2 * -(a.clientY / window.innerHeight) + 1, 0.5);
            b.projector.unprojectVector(c, b.object);
            UTILS.sceneManager.mouseVector.copy(c);
            f && (j = i = b.getMouseProjectionOnBall(a.clientX, a.clientY), h = l = b.getMouseOnScreen(a.clientX, a.clientY), k = m = b.getMouseOnScreen(a.clientX, a.clientY), f = !1); - 1 !== g && (0 === g && !b.noRotate ? i = b.getMouseProjectionOnBall(a.clientX, a.clientY) : 1 === g && !b.noZoom ? l = b.getMouseOnScreen(a.clientX, a.clientY) : 2 === g && !b.noPan && (m = b.getMouseOnScreen(a.clientX,
            a.clientY)))
        }
    }, !1);
    this.domElement.addEventListener("mousedown", function (a) {
        var c = (new Date).getTime();
        b.lastTouched = c;
        b.enabled && (b.mouseMovedFlag = 0, a.preventDefault(), a.stopPropagation(), -1 === g && (g = a.button, 0 === g && !b.noRotate ? j = i = b.getMouseProjectionOnBall(a.clientX, a.clientY) : 1 === g && !b.noZoom ? h = l = b.getMouseOnScreen(a.clientX, a.clientY) : this.noPan || (k = m = b.getMouseOnScreen(a.clientX, a.clientY))))
    }, !1);
    this.domElement.addEventListener("mouseup", function (a) {
        var c = (new Date).getTime();
        b.lastTouched = c;
        if (b.enabled) {
            if (0 === b.mouseMovedFlag && UTILS.sceneManager.focusState === UTILS.sceneManager.fStates.UNFOCUSSED) {
                c = new THREE.Vector3(2 * (a.clientX / window.innerWidth) - 1, 2 * -(a.clientY / window.innerHeight) + 1, 0.5);
                b.projector.unprojectVector(c, b.object);
                var d = new THREE.Vector3(0, 0, 0),
                    d = UTILS.raySphereIntersect(b.object.position, c.subSelf(b.object.position).normalize(), d, UTILS.sceneManager.sun.getCurrentRadius());
                0 < d && (c.multiplyScalar(d), c.add(c, b.object.position), UTILS.sceneManager.focusOnClosestGrafToPoint(c))
            }
            a.preventDefault();
            a.stopPropagation();
            g = -1
        }
    }, !1);
    window.addEventListener("keydown", function (a) {
        b.enabled && -1 === g && (a.keyCode === b.keys[0] && !b.noRotate ? g = 0 : a.keyCode === b.keys[1] && !b.noZoom ? g = 1 : a.keyCode === b.keys[2] && !b.noPan && (g = 2), -1 !== g && (f = !0))
    }, !1);
    window.addEventListener("keyup", function () {
        b.enabled && -1 !== g && (g = -1)
    }, !1)
};
var tweaks = tweaks || {}, UTILS = UTILS || {}, sceneManager, SceneManager = function () {
    var a, c, b, d, f, g;
    this.useComposer = !0;
    this.t = this.dt = this.time = 0;
    this.focussed = !1;
    this.hud = this.camera = this.focusIndex = this.emptySpaceFunc = this.rightBarFunc = this.leftBarFunc = this.navBarFunc = this.numActiveTweens = this.tweenDist = this.camOrigDist = 0;
    this.startQuat = new THREE.Quaternion;
    this.endQuat = new THREE.Quaternion;
    this.rotQuart = new THREE.Quaternion(0, 0, 0, 1);
    this.camUp = new THREE.Vector3(0, 1, 0, 0);
    this.fStates = {
        UNFOCUSSED: 0,
        FOCUSSING: 1,
        UNFOCUSSING: 2,
        FOCUSSED: 3,
        MOVING: 4
    };
    this.trackball = this.camera = 0;
    this.focusTime = 1E3;
    this.distTime = 0;
    this.distDelay = 650;
    this.sunExplodeTime = 999;
    this.focusState = this.fStates.UNFOCUSSED;
    this.rotBasis = new THREE.Vector3(0, 0, -1);
    this.mouseVector = new THREE.Vector3(0, 0, 0);
    this.effectBloom = this.kiosk = this.sun = 0;
    UTILS.sceneManager = this;
    var e = this;
    this.render = function () {
        d.update();
        e.hud && e.hud.update();
        e.useComposer ? (c.clear(), b.render()) : c.render(a, e.camera)
    };
    this.init = function () {
        console.log("Using WebGL Renderer");
        c = new THREE.WebGLRenderer({
            antialias: !0,
            preserveDrawingBuffer: !0
        });
        c.setClearColorHex(0, 1);
        var f = !1,
            i = 800,
            h = 440,
            i = window.innerWidth,
            h = window.innerHeight;
        c.setSize(i, h);
        document.getElementById("container").appendChild(c.domElement);
        document.defaultView && document.defaultView.getComputedStyle && (UTILS.stylePaddingLeft = parseInt(document.defaultView.getComputedStyle(c.domElement, null).paddingLeft, 10) || 0, UTILS.stylePaddingTop = parseInt(document.defaultView.getComputedStyle(c.domElement, null).paddingTop, 10) || 0, UTILS.styleBorderLeft = parseInt(document.defaultView.getComputedStyle(c.domElement, null).borderLeftWidth, 10) || 0, UTILS.styleBorderTop = parseInt(document.defaultView.getComputedStyle(c.domElement, null).borderTopWidth, 10) || 0);
        var l = document.body.parentNode;
        UTILS.htmlTop = l.offsetTop;
        UTILS.htmlLeft = l.offsetLeft;
        f && (f = new Stats, f.domElement.style.position = "absolute", f.domElement.style.bottom = "0px", document.body.appendChild(f.domElement));
        a = new THREE.Scene;
        e.camera = new THREE.PerspectiveCamera(35, i / h, 1, 1E4);
        e.camera.position.set(0, 0, 500);
        a.add(e.camera);
        d = new THREE.SunTrackballControls(e.camera, c.domElement);
        d.rotateSpeed = 0.2;
        d.noZoom = !0;
        d.noPan = !0;
        e.trackball = d;
        THREEx.WindowResize.bind(c, e.camera);
        THREEx.FullScreen.available();
        e.useComposer && (b = new THREE.EffectComposer(c), c.autoClear = !1, f = new THREE.RenderPass(a, e.camera), b.addPass(f), this.effectBloom = new THREE.BloomPass(2), b.addPass(this.effectBloom), f = new THREE.ShaderPass(THREE.ShaderExtras.screen), f.renderToScreen = !0, b.addPass(f));
        g = new Starfield;
        a.add(g);
        displayMode == KIOSK_MODE && (e.kiosk = new Kiosk, e.kiosk.init())
    };
    this.animate = function () {
        requestAnimationFrame(sceneManager.animate);
        var a = (new Date).getTime();
        e.dt = a - (e.time || a);
        e.time = a;
        e.kiosk && e.kiosk.update(e.time);
        TWEEN.update();
        if (e.focusState === e.fStates.FOCUSSING || e.focusState === e.fStates.UNFOCUSSING || e.focusState === e.fStates.MOVING) a = new THREE.Vector3, e.rotQuart.multiplyVector3(e.rotBasis, a), a.multiplyScalar(e.tweenDist), e.camera.position = a, e.camera.up = e.camUp;
        e.t += 5E-4 * e.dt;
        g && g.update();
        f && (f.grafs.renderable.length === sceneManager.sun.maxGrafs && e.mouseHover(), f.update(e.t));
        e.render()
    };
    this.getScene = function () {
        return a
    };
    this.addMesh = function (b) {
        a.add(b)
    };
    this.unloadMesh = function (b) {
        a.remove(b);
        c.deallocateObject(b)
    };
    this.setSun = function (a) {
        this.sun = f = a
    };
    this.cameraControls = function () {
        return d
    };
    this.debugaxis = function (b, c) {
        function d(a, b, c) {
            return new THREE.Vertex(new THREE.Vector3(a, b, c))
        }
        function e(b, c, d) {
            var f = new THREE.Geometry,
                d = new THREE.LineBasicMaterial({
                    color: d,
                    lineWidth: 1
                });
            f.vertices.push(b, c);
            b = new THREE.Line(f, d);
            a.add(b)
        }
        c = c || {
            x: 0,
            y: 0,
            z: 0
        };
        e(d(c.x - b, c.y, c.z), d(c.x + b, c.y, c.z), 16711680);
        e(d(c.x, c.y - b, c.z), d(c.x, c.y + b, c.z), 65280);
        e(d(c.x, c.y, c.z - b), d(c.x, c.y, c.z + b), 255)
    };
    this.navBarFunc = function () {};
    this.leftBarFunc = function () {
        e.focusState === e.fStates.FOCUSSED && (e.focusIndex -= 1, -1 === e.focusIndex && (e.focusIndex = f.maxGrafs - 1), e.moveTo(e.focusIndex));
        e.focusState === e.fStates.UNFOCUSSED && (timeNavigator.when -= f.maxGrafs, 0 > timeNavigator.when && (timeNavigator.when = 0), DBInterface.getIDListFromIndex(Math.floor(timeNavigator.when),
        f.maxGrafs, function (a) {
            f.addNewUids(a)
        }), updatePagination())
    };
    this.rightBarFunc = function () {
        e.focusState === e.fStates.FOCUSSED && (e.focusIndex = (e.focusIndex + 1) % f.maxGrafs, e.moveTo(e.focusIndex));
        if (e.focusState === e.fStates.UNFOCUSSED) {
            var a = timeNavigator.totalUIDS - f.maxGrafs - 1;
            timeNavigator.when += f.maxGrafs;
            timeNavigator.when > a && (timeNavigator.when = a);
            DBInterface.getIDListFromIndex(timeNavigator.when, f.maxGrafs, function (a) {
                f.addNewUids(a)
            });
            updatePagination()
        }
    };
    this.checkFinished = function () {
        if (0 === e.numActiveTweens) switch (e.focusState) {
            case e.fStates.FOCUSSING:
                e.focusState = e.fStates.FOCUSSED;
                break;
            case e.fStates.UNFOCUSSING:
                e.focusState = e.fStates.UNFOCUSSED;
                d.noRotate = !1;
                break;
            case e.fStates.MOVING:
                e.focusState = e.fStates.FOCUSSED
        }
    };
    this.setupQuarts = function (a, b) {
        var c = new THREE.PerspectiveCamera(60, 1, 0, 1E4);
        c.lookAt(a);
        var d = new THREE.Matrix4;
        d.extractRotation(c.matrix);
        e.startQuat = new THREE.Quaternion;
        e.startQuat.setFromRotationMatrix(d);
        c.lookAt(b);
        d.extractRotation(c.matrix);
        e.endQuat.setFromRotationMatrix(d);
        !0 === UTILS.shouldWeFlipQuart(e.startQuat, e.endQuat) && (e.endQuat.w = -e.endQuat.w, e.endQuat.x = -e.endQuat.x, e.endQuat.y = -e.endQuat.y, e.endQuat.z = -e.endQuat.z)
    };
    this.tweenRotation = function (a, b, c, d, f) {
        e.numActiveTweens += 1;
        "function" !== typeof f && (f = function () {});
        "number" !== typeof d && (d = 0);
        e.setupQuarts(a, b);
        a = (new TWEEN.Tween(e.startQuat)).to({
            x: e.endQuat.x,
            y: e.endQuat.y,
            z: e.endQuat.z,
            w: e.endQuat.w
        }, c);
        a.onUpdate(function () {
            var a = new THREE.Quaternion(this.x, this.y, this.z, this.w);
            a.normalize();
            e.rotQuart.copy(a)
        });
        a.onComplete(function () {
            f();
            e.numActiveTweens--;
            e.checkFinished()
        });
        a.easing(TWEEN.Easing.Quadratic.InOut);
        a.delay(d);
        a.start()
    };
    this.tweenDistance = function (a, b, c, d, f) {
        e.numActiveTweens += 1;
        "function" !== typeof f && (f = function () {});
        "number" !== typeof d && (d = 0);
        a = (new TWEEN.Tween({
            d: a
        })).to({
            d: b
        }, c);
        a.onUpdate(function () {
            e.startDist = this.d
        });
        a.easing(TWEEN.Easing.Quadratic.InOut);
        a.onComplete(function () {
            f();
            e.numActiveTweens--;
            e.checkFinished()
        });
        a.delay(d);
        a.start()
    };
    this.tweenUp = function (a, b, c, d, f) {
        e.numActiveTweens += 1;
        "function" !== typeof f && (f = function () {});
        "number" !== typeof d && (d = 0);
        a = (new TWEEN.Tween(a)).to({
            x: b.x,
            y: b.y,
            z: b.z
        }, c);
        a.onComplete(function () {
            f;
            e.numActiveTweens--;
            e.checkFinished()
        });
        a.onUpdate(function () {
            e.camUp = this.clone()
        });
        a.delay(d);
        a.start()
    };
    this.focus = function (a) {
        if ("number" !== typeof a || 0 > a || a >= f.grafs.renderable.length) a = Math.floor(Math.random() * f.grafs.renderable.length);
        if (0 !== f.grafs.renderable[a]) {
            var b = e.fStates.UNFOCUSSED;
            switch (e.focusState) {
                case e.fStates.UNFOCUSSED:
                    var b = f.grafs.renderable[a].mesh.position.clone(),
                        c = e.camera.position.clone(),
                        g = e.camera.position.length();
                    e.tweenDist = g;
                    e.camOriginDist = e.camera.position.length();
                    var k = b.length() * UTILS.guiControls.graf.focusDistMult,
                        m = e.camera.up.clone(),
                        n = f.grafs.renderable[a].mesh.up.clone();
                    d.noRotate = !0;
                    e.tweenDistance(g, k, e.distTime, e.distDelay, function () {
                        f.explode(!0, e.sunExplodeTime)
                    });
                    e.tweenRotation(c, b, e.focusTime, 0, function () {
                        openDrawing(f.grafs.uid[a])
                    });
                    e.tweenUp(m, n, e.focusTime);
                    b = e.fStates.FOCUSSING;
                    break;
                case e.fStates.FOCUSSING:
                    b = e.fStates.FOCUSSING;
                    break;
                case e.fStates.UNFOCUSSING:
                    b = e.fStates.UNFOCUSSING;
                    break;
                case e.fStates.MOVING:
                    b = e.fStates.MOVING;
                    break;
                case e.fStates.FOCUSSED:
                    b = c = e.camera.position, g = e.camera.position.length(), e.tweenDist = g, k = e.camOriginDist, m = e.camera.up.clone(), n = e.camera.up.clone(), d.noRotate = !0, e.tweenDistance(g, k, e.distTime, 0, function () {
                        closeDrawing();
                        f.explode(!1, e.sunExplodeTime)
                    }), e.tweenRotation(c, b, e.focusTime), e.tweenUp(m, n, e.focusTime), b = e.fStates.UNFOCUSSING
            }
            e.focusState = b
        }
    };
    this.moveToFocussingIfNecessary = function (a) {
        e.focusState === e.fStates.FOCUSSED ? e.moveTo(a) : e.focus(a)
    };
    this.moveTo = function (a) {
        if ("number" !== typeof a || 0 > a || a >= f.grafs.renderable.length) a = Math.floor(Math.random() * f.grafs.renderable.length);
        if (0 !== f.grafs.renderable[a] && e.focusState === e.fStates.FOCUSSED) {
            var b = e.camera.position.clone(),
                c = f.grafs.renderable[a].mesh.position.clone(),
                d = e.camera.up.clone(),
                g = f.grafs.renderable[a].mesh.up.clone();
            e.focusState = e.fStates.MOVING;
            closeDrawing();
            e.tweenRotation(b, c, 800, 0, function () {
                0 <= a && openDrawing(f.grafs.uid[a])
            });
            e.tweenUp(d, g, 800)
        }
    };
    this.emptySpaceFunc = function () {
        e.focus()
    };
    this.mouseHover = function () {};
    this.focusOnClosestGrafToPoint = function (a) {
        for (var b = void 0, c = 1E11, d = new THREE.Vector3, g = 0, m = f.grafs.pos.length; g < m; g++) {
            var n;
            d.copy(f.grafs.pos[g]);
            d.multiplyScalar(f.radius);
            d.sub(a, d);
            n = d.lengthSq();
            n < c && (c = n, b = g)
        }
        void 0 !== b && e.focus(b)
    }
};
var SIMPLIFY = {
    calculate_distance: function (a, c) {
        var b = Math.pow(a.x - c.x, 2),
            d = Math.pow(a.y - c.y, 2);
        return Math.sqrt(b + d)
    },
    calculate_angle: function (a, c, b) {
        var d = this.calculate_distance(c, b),
            b = this.calculate_distance(a, b),
            c = this.calculate_distance(c, a),
            a = 180,
            b = Math.pow(b, 2) - Math.pow(d, 2) - Math.pow(c, 2),
            d = -2 * d * c;
        if (0 == d) a = 180;
        else try {
            a = Math.acos(b / d), a *= 180 / Math.PI
        } catch (f) {
            a = 180
        }
        isNaN(a) && (a = 0);
        return a
    },
    smooth_angles: function (a, c) {
        for (var b = {
            date: a.date,
            uid: a.uid,
            strokes: []
        }, d = 0; d < a.strokes.length; d++) {
            for (var f = [], g = 0; g < a.strokes[d].length - 2; g++) {
                var e = g + 1,
                    j = this.calculate_angle(a.strokes[d][e - 1], a.strokes[d][e], a.strokes[d][e + 1]);
                j < 180 + c && j > 180 - c && f.push(e)
            }
            e = [];
            for (g = 0; g < a.strokes[d].length; g++) 0 > f.indexOf(g) && e.push(a.strokes[d][g]);
            b.strokes.push(e)
        }
        return b
    },
    average_of_points: function (a) {
        for (var c = 0, b = 0, d = 0, f = 0, g = 0; g < a.length; g++) c += a[g].x, b += a[g].y, d += a[g].r, f += a[g].t;
        g = {
            x: 0,
            y: 0,
            r: 0,
            t: 0
        };
        g.x = c / a.length;
        g.y = b / a.length;
        g.r = d / a.length;
        g.t = f / a.length;
        return g
    },
    group_points: function (a, c) {
        for (var b = {
            date: a.date,
            uid: a.uid,
            strokes: []
        }, d = 0; d < a.strokes.length; d++) {
            for (var f = [], g = 0; g < a.strokes[d].length - 2; g++) {
                var e = g + 1,
                    j = a.strokes[d][e - 1],
                    i = a.strokes[d][e],
                    e = a.strokes[d][e + 1],
                    h = j;
                this.calculate_distance(j, i) < c && this.calculate_distance(i, e) >= c || (this.calculate_distance(j, i) >= c && this.calculate_distance(i, e) < c && (h = j), this.calculate_distance(j, i) < c && this.calculate_distance(i, e) < c && (h = this.average_of_points([j, i, e])), f.push(h))
            }
            f.push(a.strokes[d][a.strokes[d].length - 1]);
            f.unshift(a.strokes[d][0]);
            b.strokes.push(f)
        }
        return b
    },
    simplify: function (a, c, b) {
        for (var a = this.smooth_angles(a, c), c = 0.0020, d = 0; d < b; d++) a = this.group_points(a, c), c *= 2;
        return a
    },
    drawing_size: function (a) {
        for (var c = 0, b = 0; b < a.strokes.length; b++) for (var d = 0; d < a.strokes[b].length; d++) c += 1;
        return c
    },
    radiusRange: function (a) {
        for (var c = 1E6, b = 0, d = 0; d < a.strokes.length; d++) for (var f = 0; f < a.strokes[d].length; f++) c = Math.min(a.strokes[d][f].r, c), b = Math.max(a.strokes[d][f].r, b);
        return {
            min: c,
            max: b,
            range: b - c
        }
    }
};
var THREE = THREE || {}, $ = $ || {};

function buildGeometry(a, c, b) {
    var d = b * (1920 / 1080),
        a = a.strokes,
        f = function (a, b) {
            a = Math.max(a * b, 0.25);
            return a = Math.min(a, 1)
        }, g = new THREE.Geometry,
        e = 0;
    a.forEach(function (a) {
        var i = a.length;
        if (2 < i) {
            var h;
            h = new THREE.Vector3;
            var l = new THREE.Vector3,
                k = new THREE.Vector3,
                m = new THREE.Vector3;
            h.set((a[0].x - 0.5) * d, -(a[0].y - 0.5) * b, a[0].t);
            m.set((a[1].x - 0.5) * d, -(a[1].y - 0.5) * b, a[1].t);
            var n = new THREE.Vector3;
            n.sub(m, h);
            l = new THREE.Vector3(n.y, -n.x, 0);
            l.normalize();
            var t = e,
                o = new THREE.Vector3,
                o = l.clone();
            o.multiplyScalar(f(a[0].r,
            c));
            k = h.clone();
            k.addSelf(o);
            var q = h.clone();
            q.subSelf(o);
            g.vertices.push(k);
            g.vertices.push(q);
            e += 2;
            for (var r = [a[0].t, a[a.length - 1].t], s = 1; s < i - 1; s++) h = m.clone(), k = l.clone(), m = new THREE.Vector3((a[s + 1].x - 0.5) * d, -(a[s + 1].y - 0.5) * b, a[s + 1].t), n.sub(m, h), l = new THREE.Vector3(n.y, -n.x, 0), l.normalize(), o.add(k, l), o.normalize(), o.multiplyScalar(f(a[s].r, c)), k = h.clone(), k.addSelf(o), q = h.clone(), q.subSelf(o), h = h.z, h = Math.min(1, h), h = Math.max(0, h), k.z = h, q.z = h, 0.05 > Math.random() && (h = Math.random(), k.z += 0.5 * h, q.z += 0.5 * h), g.vertices.push(k), g.vertices.push(q), e += 2;
            s = a.length - 1;
            h = m.clone();
            o = l.clone();
            o.normalize();
            o.multiplyScalar(f(a[s].r, c));
            k = h.clone();
            k.addSelf(o);
            q = h.clone();
            q.subSelf(o);
            h = h.z;
            k.z = h;
            q.z = h;
            g.vertices.push(k);
            g.vertices.push(q);
            e += 2;
            a = e - t;
            for (s = 2; s < a; s++) l = t + s, m = s / a * (r[1] - r[0]) + r[0], g.faces.push(new THREE.Face3(l - 2, l - 1, l)), g.faceVertexUvs[0].push([new THREE.UV(m, m), new THREE.UV(m, m), new THREE.UV(m, m)])
        }
    });
    return g
};
THREE = THREE || {};
$ = $ || {};

function GrafMesh(a, c, b, d) {
    this.mesh = a || {};
    this.uniforms = c || {};
    this.material = b || {};
    this.uvoffset = Math.random();
    this.uvtimescale = d || 1
}

function stripper(a, c, b) {
    var d = 1 / a.duration,
        a = SIMPLIFY.simplify(a, 0, 1),
        a = buildGeometry(a, c, b),
        c = new THREE.Vector3(0.1, 0.1, 0.1),
        b = new THREE.Vector2(0.1, 0.1),
        c = {
            scale: {
                type: "v3",
                value: c
            },
            uvOffset: {
                type: "v2",
                value: b
            },
            map: {
                type: "t",
                value: 0,
                texture: tex
            }
        }, b = new THREE.ShaderMaterial({
            uniforms: c,
            vertexShader: $("#vertexshader").text(),
            fragmentShader: $("#fragmentshader").text(),
            map: tex,
            blending: THREE.NormalBlending,
            depthTest: !1,
            transparent: !0
        }),
        a = new THREE.Mesh(a, b);
    a.doubleSided = !0;
    return new GrafMesh(a, c,
    b, d)
};
var Hud = function () {
    var a = this;
    this.hudGrafs = [];
    this.grafFiles = ["json/leftarrow.json", "json/rightarrow.json", "json/scribblesun.json", "json/littlesun.json"];
    this.grafMeshes = [];
    this.loadedResources = 0;
    this.init = function () {
        for (var c = 0, b = a.grafFiles.length; c < b; c++) $.ajax({
            type: "GET",
            url: this.grafFiles[c],
            dataType: "json",
            success: function (b) {
                a.hudGrafs.push(b);
                b = stripper(b, 0.3, 30);
                a.grafMeshes.push(b);
                sceneManager.addMesh(b.mesh)
            },
            error: function () {
                alert("this.init couldn't load resource")
            }
        })
    };
    this.update = function () {
        var c = new THREE.Vector3,
            b = sceneManager.camera.matrix,
            d = new THREE.Vector3(b.n11, b.n12, b.n13);
        new THREE.Vector3(b.n21, b.n22, b.n23);
        b = new THREE.Vector3(b.n31, b.n32, b.n33);
        d.multiplyScalar(3);
        c.copy(sceneManager.camera.position);
        c.normalize();
        c.x = -c.x;
        c.y = -c.y;
        c.z = -c.z;
        d = new THREE.Vector3;
        d.copy(c);
        d.multiplyScalar(10);
        d.add(sceneManager.camera.position, d);
        (new THREE.Matrix4).extractRotation(sceneManager.camera.matrix);
        for (var c = 0, f = a.grafMeshes.length; c < f; c++) this.grafMeshes[c].mesh.position.copy(d),
        this.grafMeshes[c].mesh.lookAt(sceneManager.camera.position, this.grafMeshes[c].mesh.position, b)
    }
};
var SimplexNoise = function (a) {
    void 0 == a && (a = Math);
    this.grad3 = [
        [1, 1, 0],
        [-1, 1, 0],
        [1, -1, 0],
        [-1, -1, 0],
        [1, 0, 1],
        [-1, 0, 1],
        [1, 0, -1],
        [-1, 0, -1],
        [0, 1, 1],
        [0, -1, 1],
        [0, 1, -1],
        [0, -1, -1]
    ];
    this.p = [];
    for (var c = 0; 256 > c; c++) this.p[c] = Math.floor(256 * a.random());
    this.perm = [];
    for (c = 0; 512 > c; c++) this.perm[c] = this.p[c & 255];
    this.simplex = [
        [0, 1, 2, 3],
        [0, 1, 3, 2],
        [0, 0, 0, 0],
        [0, 2, 3, 1],
        [0, 0, 0, 0],
        [0, 0, 0, 0],
        [0, 0, 0, 0],
        [1, 2, 3, 0],
        [0, 2, 1, 3],
        [0, 0, 0, 0],
        [0, 3, 1, 2],
        [0, 3, 2, 1],
        [0, 0, 0, 0],
        [0, 0, 0, 0],
        [0, 0, 0, 0],
        [1, 3, 2, 0],
        [0, 0, 0, 0],
        [0, 0, 0, 0],
        [0, 0, 0, 0],
        [0, 0, 0, 0],
        [0, 0, 0, 0],
        [0, 0, 0, 0],
        [0, 0, 0, 0],
        [0, 0, 0, 0],
        [1, 2, 0, 3],
        [0, 0, 0, 0],
        [1, 3, 0, 2],
        [0, 0, 0, 0],
        [0, 0, 0, 0],
        [0, 0, 0, 0],
        [2, 3, 0, 1],
        [2, 3, 1, 0],
        [1, 0, 2, 3],
        [1, 0, 3, 2],
        [0, 0, 0, 0],
        [0, 0, 0, 0],
        [0, 0, 0, 0],
        [2, 0, 3, 1],
        [0, 0, 0, 0],
        [2, 1, 3, 0],
        [0, 0, 0, 0],
        [0, 0, 0, 0],
        [0, 0, 0, 0],
        [0, 0, 0, 0],
        [0, 0, 0, 0],
        [0, 0, 0, 0],
        [0, 0, 0, 0],
        [0, 0, 0, 0],
        [2, 0, 1, 3],
        [0, 0, 0, 0],
        [0, 0, 0, 0],
        [0, 0, 0, 0],
        [3, 0, 1, 2],
        [3, 0, 2, 1],
        [0, 0, 0, 0],
        [3, 1, 2, 0],
        [2, 1, 0, 3],
        [0, 0, 0, 0],
        [0, 0, 0, 0],
        [0, 0, 0, 0],
        [3, 1, 0, 2],
        [0, 0, 0, 0],
        [3, 2, 0, 1],
        [3, 2, 1, 0]
    ]
};
SimplexNoise.prototype.dot = function (a, c, b) {
    return a[0] * c + a[1] * b
};
SimplexNoise.prototype.noise = function (a, c) {
    var b, d, f;
    f = 0.5 * (Math.sqrt(3) - 1);
    f *= a + c;
    var g = Math.floor(a + f),
        e = Math.floor(c + f),
        j = (3 - Math.sqrt(3)) / 6;
    f = (g + e) * j;
    b = a - (g - f);
    var i = c - (e - f),
        h, l;
    b > i ? (h = 1, l = 0) : (h = 0, l = 1);
    d = b - h + j;
    var k = i - l + j;
    f = b - 1 + 2 * j;
    var j = i - 1 + 2 * j,
        m = g & 255,
        e = e & 255,
        g = this.perm[m + this.perm[e]] % 12;
    h = this.perm[m + h + this.perm[e + l]] % 12;
    l = this.perm[m + 1 + this.perm[e + 1]] % 12;
    e = 0.5 - b * b - i * i;
    0 > e ? b = 0 : (e *= e, b = e * e * this.dot(this.grad3[g], b, i));
    i = 0.5 - d * d - k * k;
    0 > i ? d = 0 : (i *= i, d = i * i * this.dot(this.grad3[h], d, k));
    k = 0.5 - f * f - j * j;
    0 > k ? f = 0 : (k *= k, f = k * k * this.dot(this.grad3[l], f, j));
    return 70 * (b + d + f)
};
SimplexNoise.prototype.noise3d = function (a, c, b) {
    var d, f, g, e = (a + c + b) * (1 / 3),
        j = Math.floor(a + e),
        i = Math.floor(c + e),
        h = Math.floor(b + e),
        e = 1 / 6;
    g = (j + i + h) * e;
    d = a - (j - g);
    f = c - (i - g);
    var l = b - (h - g),
        k, m, n, t, o, q;
    d >= f ? f >= l ? (k = 1, n = m = 0, o = t = 1, q = 0) : (d >= l ? (k = 1, n = m = 0) : (m = k = 0, n = 1), t = 1, o = 0, q = 1) : f < l ? (m = k = 0, n = 1, t = 0, q = o = 1) : d < l ? (k = 0, m = 1, t = n = 0, q = o = 1) : (k = 0, m = 1, n = 0, o = t = 1, q = 0);
    var r = d - k + e,
        s = f - m + e,
        w = l - n + e;
    g = d - t + 2 * e;
    var a = f - o + 2 * e,
        x = l - q + 2 * e,
        b = d - 1 + 3 * e,
        c = f - 1 + 3 * e,
        e = l - 1 + 3 * e,
        j = j & 255,
        u = i & 255,
        v = h & 255,
        i = this.perm[j + this.perm[u + this.perm[v]]] % 12,
        h = this.perm[j + k + this.perm[u + m + this.perm[v + n]]] % 12;
    t = this.perm[j + t + this.perm[u + o + this.perm[v + q]]] % 12;
    j = this.perm[j + 1 + this.perm[u + 1 + this.perm[v + 1]]] % 12;
    o = 0.6 - d * d - f * f - l * l;
    0 > o ? d = 0 : (o *= o, d = o * o * this.dot(this.grad3[i], d, f, l));
    f = 0.6 - r * r - s * s - w * w;
    0 > f ? f = 0 : (f *= f, f = f * f * this.dot(this.grad3[h], r, s, w));
    r = 0.6 - g * g - a * a - x * x;
    0 > r ? g = 0 : (r *= r, g = r * r * this.dot(this.grad3[t], g, a, x));
    a = 0.6 - b * b - c * c - e * e;
    0 > a ? b = 0 : (a *= a, b = a * a * this.dot(this.grad3[j], b, c, e));
    return 32 * (d + f + g + b)
};
SimplexNoise.prototype.turbulence3d = function (a, c, b, d, f) {
    for (var g = [0, 0, 0], a = a * d, c = c * d, b = b * d, d = 1; 0 < f;) a *= d, c *= d, b *= d, g[0] += this.noise3d(a, c, b) * d, g[1] += this.noise3d(c, b, a) * d, g[2] += this.noise3d(b, a, c) * d, d *= 0.5, f--;
    return g
};
SimplexNoise.prototype.turbulence1d = function (a, c, b, d) {
    for (var f = 0, a = a * b, c = c * b, b = 1; 0 < d;) a *= b, f += this.noise(a, c) * b, b *= 0.5, d--;
    return f
};
var noiseGen = new SimplexNoise;
var Mood = function () {
    var a = this;
    this.params = {
        scaleXYbase: 1.2,
        scaleXYvar: 0.2,
        scaleXYtimeMult: 1,
        scaleZbase: 2,
        scaleZvar: 2,
        scaleZtimeMult: 2,
        uvTimeMult: 5,
        bloom: 3.5,
        radiusVar: 0
    };
    this.noise = function (a, b, d, f, g, e) {
        return d + f * noiseGen.turbulence1d(a, e, b, g)
    };
    this.update = function (c) {
        this.params.scaleXYbase = a.noise(c, 0.05, 1.3, 0.3, 3, 0);
        this.params.scaleZbase = a.noise(c + 100, 0.05, 7, 4, 3, 100);
        this.params.scaleZvar = 0.5 * this.params.scaleZbase;
        this.params.radiusVar = a.noise(c + 200, 0.05, 0, 20, 3, 200)
    }
};
tweaks = tweaks || {};
UTILS = UTILS || {};
THREE = THREE || {};
$ = $ || {};
tweaks.useDatabase = !0;
var tex = THREE.ImageUtils.loadTexture("assets/newgradient100pc.png");

function Sun(a, c, b) {
    this.maxGrafs = a;
    this.shape = "sphere";
    this.radius = 120;
    this.explodedView = !1;
    this.explodedr = 1;
    this.explodedz = 0;
    this.explodedZScale = 0.1;
    this.grafFlyInDist = 2.5;
    this.flyInHoverz = 400;
    this.isExploding = !1;
    this.explodedViewRadius = 3.3;
    this.grafs = {};
    this.grafs.uid = [];
    this.grafs.pos = [];
    this.grafs.dist = [];
    this.grafs.hoverz = [];
    this.grafs.json = [];
    this.grafs.renderable = [];
    this.grafs.uidToIndex = {};
    this.grafs.newUidIndex = 0;
    this.grafs.indexReloadQueue = [];
    this.grafs.loading = 0;
    this.grafs.maxConcurrentJSONLoads = 3;
    this.grafs.rebuildWhenNotLoading = !1;
    this.grafs.renderParams = {
        lineWidth: 30,
        grafSize: 45
    };
    this.grafBuilder = new Worker("js/grafbuildworker.js");
    this.grafBuilder.addEventListener("message", Sun.prototype.makeMesh, !1);
    this.grafs.renderParams.grafSize = b;
    this.grafs.renderParams.lineWidth = c;
    this.grafs.defaultGraf = {};
    UTILS.sun = this;
    a = UTILS.pointsOnSphere(this.maxGrafs);
    for (b = c = a.length; b--;) {
        var d = parseInt(Math.random() * c),
            f = a[b];
        a[b] = a[d];
        a[d] = f
    }
    for (c = 0; c < this.maxGrafs; c++) this.grafs.uid[c] = 0, this.grafs.pos[c] = a[c], this.grafs.dist[c] = this.radius, this.grafs.hoverz[c] = 0;
    this.useWorkers = !1
}
Sun.prototype.makeMesh = function (a) {
    for (var a = a.data, c = new THREE.Geometry, b = 0; b !== a.vertices.length; b++) {
        var d = a.vertices[b],
            d = new THREE.Vector3(d.x, d.y, d.z);
        c.vertices.push(d)
    }
    for (b = 0; b !== a.faces.length; b++) d = a.faces[b], c.faces.push(new THREE.Face3(d.a, d.b, d.c));
    for (b = 0; b !== a.faceVertexUvs[0].length; b++) {
        for (var d = a.faceVertexUvs[0][b], f = [], g = 0; 3 != g; g++) f.push(new THREE.UV(d[g].u, d[g].v));
        c.faceVertexUvs[0].push(f)
    }
    b = new THREE.Vector3(0.1, 0.1, 0.1);
    d = new THREE.Vector2(0.1, 0.1);
    b = {
        scale: {
            type: "v3",
            value: b
        },
        uvOffset: {
            type: "v2",
            value: d
        },
        map: {
            type: "t",
            value: 0,
            texture: tex
        }
    };
    d = new THREE.ShaderMaterial({
        uniforms: b,
        vertexShader: $("#vertexshader").text(),
        fragmentShader: $("#fragmentshader").text(),
        map: tex,
        blending: THREE.NormalBlending,
        depthTest: !1,
        transparent: !0
    });
    c = new THREE.Mesh(c, d);
    c.doubleSided = !0;
    var c = new function (a, b, c, d) {
            this.mesh = a || {};
            this.uniforms = b || {};
            this.material = c || {};
            this.uvoffset = Math.random();
            this.uvtimescale = d || 1
        }(c, b, d, 1 / a.duration),
        e = a.renderableIndex;
    UTILS.sun.grafs.renderable[e] = c;
    UTILS.sun.grafs.renderable[e].mesh.lookAt(UTILS.sun.grafs.pos[e]);
    sceneManager.addMesh(UTILS.sun.grafs.renderable[e].mesh);
    a = (new TWEEN.Tween({
        r: UTILS.sun.radius * UTILS.sun.grafFlyInDist
    })).to({
        r: UTILS.sun.radius
    }, 1E3);
    a.onUpdate(function () {
        UTILS.sun.grafs.dist[e] = this.r
    });
    a.easing(TWEEN.Easing.Exponential.Out);
    a.start()
};
Sun.prototype.init = function () {
    this.mood = new Mood;
    $.ajax({
        type: "GET",
        url: "json/scribblesun.json",
        dataType: "json",
        success: function (a) {
            UTILS.sun.grafs.defaultGraf = a
        },
        error: function () {
            alert("default graf failed to load")
        }
    })
};
Sun.prototype.addNewUids = function (a) {
    if (a.length > this.maxGrafs) return !1;
    for (var c = 0, b = a.length; c < b; c++) this.grafs.uid[this.grafs.newUidIndex] = a[c], this.grafs.indexReloadQueue.push(this.grafs.newUidIndex), this.grafs.indexReloadQueue = this.grafs.indexReloadQueue.slice(-this.maxGrafs), this.grafs.uidToIndex[a[c]] = this.grafs.newUidIndex, this.grafs.newUidIndex = (this.grafs.newUidIndex + 1) % this.maxGrafs;
    return !0
};
Sun.prototype.addNewUid = function (a) {
    this.grafs.uid[this.grafs.newUidIndex] = a;
    this.grafs.indexReloadQueue.push(this.grafs.newUidIndex);
    this.grafs.indexReloadQueue = this.grafs.indexReloadQueue.slice(-this.maxGrafs);
    a = this.grafs.uidToIndex[a] = this.grafs.newUidIndex;
    this.grafs.newUidIndex = (this.grafs.newUidIndex + 1) % this.maxGrafs;
    return a
};
Sun.prototype.manageLoadQueue = function () {
    if (this.grafs.loading < this.grafs.maxConcurrentJSONLoads && this.grafs.indexReloadQueue.length) {
        var a = this.grafs.indexReloadQueue.shift(),
            c = this.grafs.uid[a];
        this.grafs.loading++;
        var b = this;
        if (tweaks.useDatabase) {
            if (DBInterface.getJSON(c, function (d) {
                b.grafs.json[a] = d;
                b.grafs.loading--;
                b.grafs.hoverz[a] = b.flyInHoverz;
                var f;
                "none" != checkUID && checkUID === c && (checkUID = "none", f = function () {
                    closeBox();
                    sceneManager.moveToFocussingIfNecessary(a)
                });
                b.initRenderable(a, f)
            },

            function () {
                b.grafs.json[a] = b.grafs.defaultGraf;
                b.initRenderable(a);
                b.grafs.loading--;
                console.log("error loading UID " + c + " at index " + a + ", substituting with default json.")
            }), this.grafs.renderable[a] && this.grafs.renderable[a].mesh) {
                var d = this.grafs.renderable[a].mesh,
                    f = {
                        x: 1,
                        y: 1,
                        z: 1
                    }, g = {
                        x: 0,
                        y: 0,
                        z: 0
                    }, g = (new TWEEN.Tween(f)).to(g, 500);
                g.onUpdate(function () {
                    d.scale.x = f.x;
                    d.scale.y = f.y;
                    d.scale.z = f.z
                });
                g.easing(TWEEN.Easing.Exponential.Out);
                g.onComplete(function () {
                    sceneManager.unloadMesh(d)
                });
                g.start()
            }
        } else $.ajax({
            type: "GET",
            url: "json/scribblesun.json",
            dataType: "json",
            success: function (c) {
                b.grafs.json[a] = c;
                b.initRenderable(a);
                b.grafs.loading = 0
            },
            error: function () {
                alert("manageLoadQueue:failed to load")
            }
        }), this.grafs.renderable[a] && this.grafs.renderable[a].mesh && (d = this.grafs.renderable[a].mesh, f = {
            x: 1,
            y: 1,
            z: 1
        }, g = {
            x: 0,
            y: 0,
            z: 0
        }, g = (new TWEEN.Tween(f)).to(g, 500), g.onUpdate(function () {
            d.scale.x = f.x;
            d.scale.y = f.y;
            d.scale.z = f.z
        }), g.easing(TWEEN.Easing.Exponential.Out), g.onComplete(function () {
            sceneManager.unloadMesh(d)
        }), g.start())
    }
};
Sun.prototype.initRenderable = function (a, c) {
    c = c || function () {};
    if (!0 === this.useWorkers) {
        var b = this.grafs.json[a];
        b.renderableIndex = a;
        b.lineWidth = this.grafs.renderParams.lineWidth;
        b.grafSize = this.grafs.renderParams.grafSize;
        this.grafBuilder.postMessage(b)
    } else this.grafs.renderable[a] = stripper(this.grafs.json[a], this.grafs.renderParams.lineWidth, this.grafs.renderParams.grafSize), this.grafs.renderable[a].mesh.lookAt(this.grafs.pos[a]), sceneManager.addMesh(this.grafs.renderable[a].mesh), b = (new TWEEN.Tween({
        r: UTILS.sun.radius * UTILS.sun.grafFlyInDist
    })).to({
        r: UTILS.sun.radius
    }, 1E3), b.onUpdate(function () {
        UTILS.sun.grafs.dist[a] = this.r
    }).onComplete(c), b.easing(TWEEN.Easing.Exponential.Out), b.start()
};
Sun.prototype.requestRebuild = function () {
    this.grafs.rebuildWhenNotLoading = !0
};
Sun.prototype.rebuild = function () {
    this.grafs.renderable.forEach(function (a) {
        sceneManager.unloadMesh(a.mesh);
        a.mesh = 0;
        a.uniforms = 0;
        a.material = 0
    });
    for (var a = 0; a < this.maxGrafs; a++) this.initRenderable(a)
};
Sun.prototype.preexplode = function () {
    var a = this,
        c = (new TWEEN.Tween({
            bbz: 0
        })).to({
            bbz: 100
        }, 200);
    c.onUpdate(function () {
        a.explodedz = this.bbz
    });
    c.easing(TWEEN.Easing.Linear.None);
    c.start();
    c = (new TWEEN.Tween({
        bbbz: 100
    })).to({
        bbbz: 0
    }, 200);
    c.onUpdate(function () {
        a.explodedz = this.bbbz
    });
    c.easing(TWEEN.Easing.Linear.None);
    c.delay(600);
    c.start()
};
Sun.prototype.explode = function (a, c) {
    if (this.explodedView != a) {
        if (this.explodedView = a) {
            this.isExploding = !0;
            var b = this,
                d = (new TWEEN.Tween({
                    r: 1
                })).to({
                    r: this.explodedViewRadius
                }, c)
        } else this.isExploding = !0, b = this, d = (new TWEEN.Tween({
            r: this.explodedViewRadius
        })).to({
            r: 1
        }, c);
        d.onUpdate(function () {
            b.explodedr = this.r
        });
        d.easing(TWEEN.Easing.Exponential.Out);
        d.onComplete(function () {
            b.isExploding = !1
        });
        d.start()
    }
};
Sun.prototype.getCurrentRadius = function () {
    return this.radius * this.explodedr + this.mood.params.radiusVar
};
Sun.prototype.update = function (a) {
    0 === this.grafs.loading && this.grafs.rebuildWhenNotLoading && (this.rebuild(), this.grafs.rebuildWhenNotLoading = !1);
    var c = this.grafs.renderable,
        b = 0,
        d = 2 * Math.PI / c.length,
        f = new THREE.Vector3;
    this.mood.update(a);
    var g = this.mood.params;
    sceneManager.effectBloom.screenUniforms.opacity.value = g.bloom;
    this.getCurrentRadius();
    for (var e = 0, j = c.length; e < j; e++) c[e] && (c[e].uniforms && c[e].mesh) && (c[e].uniforms.scale.value.x = g.scaleXYbase + g.scaleXYvar * Math.sin(a * g.scaleXYtimeMult + b), c[e].uniforms.scale.value.y = g.scaleXYbase + g.scaleXYvar * Math.cos(a * g.scaleXYtimeMult + b), c[e].uniforms.scale.value.z = this.grafs.hoverz[e] + g.scaleZbase + g.scaleZvar * Math.cos(a * g.scaleZtimeMult + b), b += d, c[e].uniforms.uvOffset.value.x = 0, c[e].uniforms.uvOffset.value.y = (c[e].uvoffset - a * c[e].uvtimescale * g.uvTimeMult) % 1, f.copy(this.grafs.pos[e]), f.multiplyScalar(g.radiusVar + this.grafs.dist[e] * this.explodedr), c[e].mesh.position.copy(f), this.grafs.hoverz[e] *= 0.8);
    this.manageLoadQueue()
};
Starfield = function () {
    var a = new THREE.Geometry;
    this.glowRate = 0.035;
    for (var c = 0; 5E3 > c; c++) {
        var b = 1400 * Math.random() + 600,
            d = Math.acos(2 * Math.random() - 1),
            f = 2 * Math.random() * Math.PI,
            g = b * Math.sin(d) * Math.cos(f),
            f = b * Math.sin(d) * Math.sin(f),
            b = b * Math.cos(d);
        vector = new THREE.Vector3(g, f, b);
        a.vertices.push(vector)
    }
    this.attributes = {
        size: {
            type: "f",
            value: []
        },
        customColor: {
            type: "c",
            value: []
        }
    };
    this.uniforms = {
        time: {
            type: "f",
            value: 0
        },
        color: {
            type: "c",
            value: new THREE.Color(16777215)
        },
        texture: {
            type: "t",
            value: 0,
            texture: THREE.ImageUtils.loadTexture("assets/star_sprite.png")
        }
    };
    c = new THREE.ShaderMaterial({
        uniforms: this.uniforms,
        attributes: this.attributes,
        vertexShader: document.getElementById("vs_starfield").textContent,
        fragmentShader: document.getElementById("fs_starfield").textContent,
        blending: THREE.AdditiveBlending,
        depthTest: !1,
        transparent: !0
    });
    THREE.ParticleSystem.call(this, a, c);
    this.dynamic = !0;
    this.scale.x = this.scale.y = this.scale.z = 1;
    a = this.geometry.vertices;
    c = this.attributes.size.value;
    g = this.attributes.customColor.value;
    for (b = 0; b < a.length; b++) c[b] = 30, g[b] = new THREE.Color(16755200),
    g[b].setHSV(0.1 + 0.1 * (b / a.length), 0.7, 0.9);
    this.update = function () {
        this.uniforms.time.value += this.glowRate;
        this.uniforms.time.needsUpdate = !0
    }
};
Starfield.prototype = new THREE.ParticleSystem;
Starfield.prototype.constructor = THREE.Starfield;
var Kiosk = function () {
    var a = this;
    this.lastRecentID = this.recentID = void 0;
    this.recentUIDs = [];
    this.lastKioskPoll = 0;
    this.kioskPollInterval = 3E3;
    this.screensaverTime = 3E4;
    this.maxRecentDrawings = 24;
    this.recentDrawingsLookedAt = this.recentDrawingIndex = this.t = 0;
    this.maxDrawingsToLookAtInOneGo = 6;
    this.gotanewone = !1;
    this.states = {
        NOT_READY: -1,
        USER_INTERACTING: 0,
        LOOKATNEWDRAWING: 1,
        IDLE: 2
    };
    this.stateTimes = {
        LOOKATNEWDRAWING: 1E4,
        IDLE: 3E4,
        LOOKATRECENTDRAWINGS: 8E3
    };
    this.state = this.states.NOT_READY;
    this.stateTimestamp = 0;
    this.init = function () {
        DBInterface.getRecentIDs(a.maxRecentDrawings, function (c) {
            a.recentUIDs = c;
            a.recentID = c[0];
            console.log("Got recent UIDS" + c + " " + c[0])
        })
    };
    this.pollDatabase = function () {
        this.lastRecentID = this.recentID;
        DBInterface.getRecentIDs(1, function (c) {
            a.recentID = c[0];
            a.recentID !== a.lastRecentID && (console.log("Kiosk got a new one: UID " + a.recentID), sceneManager.sun.addNewUid(c[0]), a.recentUIDs.unshift(a.recentID), a.recentUIDs.length > a.maxRecentDrawings && a.recentUIDs.slice(0, a.maxRecentDrawings),
            a.gotanewone = !0)
        })
    };
    this.update = function (c) {
        if (sceneManager.sun && sceneManager.sun.grafs && sceneManager.sun.grafs.renderable.length === sceneManager.sun.maxGrafs) {
            var b = (new Date).getTime();
            if (b - sceneManager.trackball.lastTouched < this.screensaverTime) a.state = a.states.IDLE;
            else switch (a.t = c, a.t - a.lastKioskPoll > a.kioskPollInterval && (a.lastKioskPoll = a.t, a.pollDatabase()), a.state) {
                case a.states.NOT_READY:
                    console.log("Go to Idle state");
                    a.state = a.states.IDLE;
                    a.stateTimestamp = b;
                    break;
                case a.states.IDLE:
                    a.gotanewone && 2E3 < b - this.stateTimestamp && sceneManager.focusState === sceneManager.fStates.UNFOCUSSED ? (console.log("Look at new drawing"), a.gotanewone = !1, a.state = a.states.LOOKATNEWDRAWING, a.stateTimestamp = b, sceneManager.focus(sceneManager.sun.grafs.uidToIndex[a.recentID])) : b - a.stateTimestamp > a.stateTimes.IDLE && (console.log("Look at recent drawings"), a.state = a.states.LOOKATRECENTDRAWINGS, a.stateTimestamp = b, a.recentDrawingsLookedAt = 0);
                    break;
                case a.states.LOOKATRECENTDRAWINGS:
                    if (b - a.stateTimestamp > a.stateTimes.LOOKATRECENTDRAWINGS && (console.log("Looking at drawing " + a.recentUIDs[a.recentDrawingIndex] + "RDI " + a.recentDrawingIndex), sceneManager.moveToFocussingIfNecessary(sceneManager.sun.grafs.uidToIndex[a.recentUIDs[a.recentDrawingIndex]]), a.stateTimestamp = b, a.recentDrawingsLookedAt++, a.recentDrawingIndex++, a.recentDrawingIndex %= a.maxRecentDrawings, a.recentDrawingsLookedAt === a.maxDrawingsToLookAtInOneGo || a.gotanewone)) console.log("LOOKATRECENTDRAWINGS returning to idle"), a.state = a.states.IDLE, a.stateTimestamp = b, sceneManager.focusState = sceneManager.fStates.FOCUSSED, sceneManager.focus();
                    break;
                case a.states.LOOKATNEWDRAWING:
                    b - a.stateTimestamp > a.stateTimes.LOOKATNEWDRAWING && (console.log("LOOKATNEWDRAWING returning to idle"), sceneManager.focus(), closeDrawing(), a.state = a.states.IDLE, a.stateTimestamp = b)
            }
        }
    }
};
var DBDom = "../",
    DBInterface = {
        getRecentIDs: function (a, c) {
            $.getJSON(DBDom + "search", {
                method: "recent",
                arg1: a
            }, c)
        },
        getFromDate: function (a, c) {
            $.getJSON(DBDom + "search", {
                method: "from_date",
                arg1: a.toISOString()
            }, c)
        },
        getJSON: function (a, c, b) {
            $.ajax({
                url: DBDom + "search",
                dataType: "json",
                data: {
                    method: "json_by_id",
                    arg1: a
                },
                success: c,
                error: b || function () {}
            })
        },
        getJSONList: function (a, c) {
            $.getJSON(DBDom + "search", {
                method: "json_by_id_list",
                arg1: JSON.stringify(a)
            }, c)
        },
        getIDListFromIndex: function (a, c, b) {
            $.getJSON(DBDom + "search", {
                method: "id_list_from_index",
                arg1: a,
                arg2: c
            }, b)
        },
        getIDListBeforeIndex: function (a, c, b) {
            $.getJSON(DBDom + "search", {
                method: "id_list_before_index",
                arg1: a,
                arg2: c
            }, b)
        },
        getIDListAroundIndex: function (a, c, b) {
            $.getJSON(DBDom + "search", {
                method: "id_list_around_index",
                arg1: a,
                arg2: c
            }, b)
        },
        getIDListBetweenIndex: function (a, c, b) {
            $.getJSON(DBDom + "search", {
                method: "id_list_between_index",
                arg1: a,
                arg2: c
            }, b)
        },
        getIDListFromID: function (a, c, b) {
            $.getJSON(DBDom + "search", {
                method: "id_list_from_id",
                arg1: a,
                arg2: c
            }, b)
        },
        getIDListBeforeID: function (a,
        c, b) {
            $.getJSON(DBDom + "search", {
                method: "id_list_before_id",
                arg1: a,
                arg2: c
            }, b)
        },
        getIDListAroundID: function (a, c, b) {
            $.getJSON(DBDom + "search", {
                method: "id_list_around_id",
                arg1: a,
                arg2: c
            }, b)
        },
        getIDListBetweenID: function (a, c, b) {
            $.getJSON(DBDom + "search", {
                method: "id_list_between_id",
                arg1: a,
                arg2: c
            }, b)
        },
        getIndexFromID: function (a, c, b) {
            $.ajax({
                url: DBDom + "search",
                dataType: "json",
                data: {
                    method: "index_from_id",
                    arg1: a
                },
                success: c,
                error: b || function () {}
            })
        },
        getTotalSize: function (a) {
            $.getJSON(DBDom + "search", {
                method: "total_entries"
            },
            a)
        }
    };
var timeNavigator = {
    latestUID: 0,
    firstUIDasint: 0,
    latestUIDasint: -1,
    totalUIDS: 0,
    when: 0,
    init: function (a) {
        var c = this;
        DBInterface.getRecentIDs(1, function (b) {
            c.latestUID = b[0];
            c.latestUIDasint = c.latestUID.replace(/^[0]+/g, "");
            c.latestUIDasint = parseInt(c.latestUIDasint);
            console.log("Latest UID is " + c.latestUID);
            a(c.firstUIDasint, c.latestUIDasint)
        });
        DBInterface.getTotalSize(function (a) {
            c.totalUIDS = a
        })
    }
};
Grid = function () {
    var a = this;
    this.loadedCount = 0;
    this.uids = [];
    this.listenForScroll = !0;
    this.load = function () {
        $("#non-content").append('<div id="grid"></div>');
        this.listenForScroll = !1;
        DBInterface.getRecentIDs(50, function (c) {
            a.uids = a.uids.concat(c);
            for (var b = 0; b < c.length; b++) {
                $("#grid").append('<span id="' + c[b] + '" class="thumb"><img src="' + a.getImgURL(c[b]) + '" /></span>');
                var d = $("#" + c[b]);
                $(d).find("img").one("load", function () {
                    $(this).parent().stop().fadeTo("fast", 1)
                }).each(function () {
                    this.complete && $(this).load()
                });
                $(d).mouseenter(function () {
                    $(this).find("img").stop().fadeTo(150, 0.75)
                });
                $(d).mouseleave(function () {
                    $(this).find("img").stop().fadeTo(150, 1)
                });
                $(d).click(function () {
                    openDrawing($(this).attr("id"), !0)
                })
            }
        });
        setTimeout(function () {
            a.listenForScroll = !0
        }, 2E3)
    };
    this.loadNext = function () {
        var c = document.getElementById("footer");
        (new Spinner(spinnerOpts)).spin(c);
        this.listenForScroll = !1;
        DBInterface.getIDListBeforeID(this.uids[this.uids.length - 1], 50, function (b) {
            b.reverse();
            a.uids = a.uids.concat(b);
            for (var c = 0; c < b.length; c++) {
                $("#grid").append('<span id="' + b[c] + '" class="thumb"><img src="' + a.getImgURL(b[c]) + '" /></span>');
                var f = $("#" + b[c]);
                $(f).find("img").one("load", function () {
                    $(this).parent().stop().fadeTo("fast", 1);
                    $("#footer .spinner").remove()
                }).each(function () {
                    this.complete && $(this).load()
                });
                $(f).mouseenter(function () {
                    $(this).find("img").stop().fadeTo("fast", 0.75)
                });
                $(f).mouseleave(function () {
                    $(this).find("img").stop().fadeTo("fast", 1)
                });
                $(f).click(function () {
                    openDrawing($(this).attr("id"))
                })
            }
        });
        setTimeout(function () {
            a.listenForScroll = !0
        }, 2E3)
    };
    this.getImgURL = function (a) {
        return "http://lightgraffiti.littlesun.com/search?method=image_small_by_id&arg1=" + a
    }
};
var dateFormat = function () {
    var a = /d{1,4}|m{1,4}|yy(?:yy)?|([HhMsTt])\1?|[LloSZ]|"[^"]*"|'[^']*'/g,
        c = /\b(?:[PMCEA][SDP]T|(?:Pacific|Mountain|Central|Eastern|Atlantic) (?:Standard|Daylight|Prevailing) Time|(?:GMT|UTC)(?:[-+]\d{4})?)\b/g,
        b = /[^-+\dA-Z]/g,
        d = function (a, b) {
            a = String(a);
            for (b = b || 2; a.length < b;) a = "0" + a;
            return a
        };
    return function (f, g, e) {
        var j = dateFormat;
        1 == arguments.length && ("[object String]" == Object.prototype.toString.call(f) && !/\d/.test(f)) && (g = f, f = void 0);
        f = f ? new Date(f) : new Date;
        if (isNaN(f)) throw SyntaxError("invalid date");
        g = String(j.masks[g] || g || j.masks["default"]);
        "UTC:" == g.slice(0, 4) && (g = g.slice(4), e = !0);
        var i = e ? "getUTC" : "get",
            h = f[i + "Date"](),
            l = f[i + "Day"](),
            k = f[i + "Month"](),
            m = f[i + "FullYear"](),
            n = f[i + "Hours"](),
            t = f[i + "Minutes"](),
            o = f[i + "Seconds"](),
            i = f[i + "Milliseconds"](),
            q = e ? 0 : f.getTimezoneOffset(),
            r = {
                d: h,
                dd: d(h),
                ddd: j.i18n.dayNames[l],
                dddd: j.i18n.dayNames[l + 7],
                m: k + 1,
                mm: d(k + 1),
                mmm: j.i18n.monthNames[k],
                mmmm: j.i18n.monthNames[k + 12],
                yy: String(m).slice(2),
                yyyy: m,
                h: n % 12 || 12,
                hh: d(n % 12 || 12),
                H: n,
                HH: d(n),
                M: t,
                MM: d(t),
                s: o,
                ss: d(o),
                l: d(i, 3),
                L: d(99 < i ? Math.round(i / 10) : i),
                t: 12 > n ? "a" : "p",
                tt: 12 > n ? "am" : "pm",
                T: 12 > n ? "A" : "P",
                TT: 12 > n ? "AM" : "PM",
                Z: e ? "UTC" : (String(f).match(c) || [""]).pop().replace(b, ""),
                o: (0 < q ? "-" : "+") + d(100 * Math.floor(Math.abs(q) / 60) + Math.abs(q) % 60, 4),
                S: ["th", "st", "nd", "rd"][3 < h % 10 ? 0 : (10 != h % 100 - h % 10) * h % 10]
            };
        return g.replace(a, function (a) {
            return a in r ? r[a] : a.slice(1, a.length - 1)
        })
    }
}();
dateFormat.masks = {
    "default": "ddd mmm dd yyyy HH:MM:ss",
    shortDate: "m/d/yy",
    mediumDate: "mmm d, yyyy",
    longDate: "mmmm d, yyyy",
    fullDate: "dddd, mmmm d, yyyy",
    shortTime: "h:MM TT",
    mediumTime: "h:MM:ss TT",
    longTime: "h:MM:ss TT Z",
    isoDate: "yyyy-mm-dd",
    isoTime: "HH:MM:ss",
    isoDateTime: "yyyy-mm-dd'T'HH:MM:ss",
    isoUtcDateTime: "UTC:yyyy-mm-dd'T'HH:MM:ss'Z'"
};
dateFormat.i18n = {
    dayNames: "Sun Mon Tue Wed Thu Fri Sat Sunday Monday Tuesday Wednesday Thursday Friday Saturday".split(" "),
    monthNames: "Jan Feb Mar Apr May Jun Jul Aug Sep Oct Nov Dec January February March April May June July August September October November December".split(" ")
};
Date.prototype.format = function (a, c) {
    return dateFormat(this, a, c)
};
var grid;
$(document).ready(function () {
    "kiosk" == urlVars.mode ? displayMode = KIOSK_MODE : "debug" == urlVars.mode && (displayMode = DEBUG_MODE);
    "1" == urlVars.find && (initWithFindForm = !0);
    initUI();
    twttr.widgets.load();
    if (Detector.webgl) {
        sceneManager = new SceneManager;
        sceneManager.init();
        sceneManager.animate();
        var a = new Sun(170, 10, 23);
        a.init();
        sceneManager.setSun(a);
        UTILS.guiControls = {
            graf: {
                focusDistMult: 1
            }
        };
        if (tweaks.useDatabase) timeNavigator.init(function (b) {
            DBInterface.getRecentIDs(a.maxGrafs, function (b) {
                a.addNewUids(b);
                a.manageLoadQueue();
                timeNavigator.when = timeNavigator.totalUIDS - a.maxGrafs - 1;
                updatePagination()
            });
            UTILS.guiControls.firstUIDasint = b;
            UTILS.gui && (b = UTILS.gui.addFolder("Debug"), controller = b.add(UTILS.guiControls.graf, "lineWidth", 0.1, 3), controller.onFinishChange(function (b) {
                a.grafs.renderParams.lineWidth = b;
                a.requestRebuild()
            }), b.add(a, "explodedViewRadius", 0.1, 10), controller = b.add(UTILS.guiControls.graf, "grafSize", 1, 100), controller.onFinishChange(function (b) {
                a.grafs.renderParams.grafSize = b;
                a.requestRebuild()
            }), b.add(UTILS.guiControls.graf,
                "focusDistMult", 0.1, 5))
        });
        else {
            for (var c = [], b = 0; b < a.maxGrafs; b++) c.push(b);
            a.addNewUids(c);
            a.manageLoadQueue()
        }
        null != urlUID && setTimeout(function () {
            loadDrawing(urlUID)
        }, 1500)
    } else WEBGL_ENABLED = !1, $("#left-arrow-globe").remove(), $("#right-arrow-globe").remove(), $("#findyours").css("position", "absolute"), $("body").append('<div id="non-content"></div>'), $("#non-content").append('<div><h1 class="headline" style="font-size:29px;">Explore the <span class="yellow">10,949</span> light graffiti made with the <a href="http://littlesun.com" class="yellow-link" target="_blank">Little Sun</a> <br>solar-powered light at Tate Modern, London, from 28 July <br>to 16 September 2012.</h1><p style="clear:both;"><a id="findoutmore" class="yellow-link tondo">Read more &#187;</a></p></div>'),
    $("#findoutmore").click(function () {
        openBox("about")
    }), $("#footer").appendTo("body"), $("#projline").css({
        position: "relative",
        "float": "left",
        padding: "10px 15px"
    }), $("#social").css({
        position: "relative",
        "float": "right",
        padding: "10px 15px"
    }), $("#footer").css({
        background: "#211E1F",
        width: "100%",
        position: "fixed",
        bottom: "0",
        left: "0",
        height: "40px",
        "-moz-box-shadow": "0 0 13px #000",
        "-webkit-box-shadow": "0 0 13px #000",
        "box-shadow": "0 0 13px #000",
        "border-top": "1px #333 solid"
    }), $(window).scroll(function () {
        var a = $(document).height() - $(window).height();
        if (!$("#overlay").is(":visible") && grid.listenForScroll && ($(document).scrollTop() == a || $(document).scrollTop() == a - 1)) console.log("load next!"), grid.loadNext()
    }), grid = new Grid, grid.load(), openBox("nowebgl")
});