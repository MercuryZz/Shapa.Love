window.requestAnimFrame = window.requestAnimationFrame || window.webkitRequestAnimationFrame || window.mozRequestAnimationFrame || window.oRequestAnimationFrame || window.msRequestAnimationFrame || function (t) {
    window.setTimeout(t, 1e3 / 60)
},
    window.onresize = function () {
        c.width = cw = c.offsetWidth,
            c.height = ch = c.offsetHeight,
            ctx.fillStyle = "rgba(21,21,21,1)",
            ctx.fillRect(0, 0, cw, ch)
    };

var cf = document.createElement("canvas"),
    c = document.getElementById("startrack");

c.width = cf.width = cw = c.offsetWidth,
    c.height = cf.height = ch = c.offsetHeight;

var longside = Math.max(cw, ch);
cf.width = 2.6 * longside,
    cf.height = 2.6 * longside;

var ctx = c.getContext("2d"),
    cftx = cf.getContext("2d"),
    centerX = cw,
    centerY = 0,
    stars = [],
    drawTimes = 0;

function rand(t, a) {
    var e = a - t,
        n = Math.random();

    return t + Math.round(n * e)
}

function createStar() {
    stars.push({
        x: rand(-cf.width, cf.width),
        y: rand(-cf.height, cf.height),
        size: 1,
        color: randomColor()
    })
}

function randomColor() {
    return "rgba(" + rand(120, 255) + "," + rand(120, 255) + "," + rand(120, 255) + "," + rand(30, 100) / 100 + ")"
}

function drawStar() {
    for (var t = stars.length; t--;) {
        var a = stars[t];

        cftx.beginPath(),
            cftx.arc(a.x, a.y, a.size, 0, 2 * Math.PI, !0),
            cftx.fillStyle = a.color,
            cftx.closePath(),
            cftx.fill()
    }
}

function drawfromCache() {
    ctx.drawImage(cf, -cf.width / 2, -cf.height / 2)
}

function loop() {
    drawfromCache(),
        ++drawTimes > 150 && drawTimes % 8 == 0 && (ctx.fillStyle = "rgba(0,0,0,.04)",
            ctx.fillRect(-3 * longside, -3 * longside, 6 * longside, 6 * longside)),
        rotateCanvas(.025)
}

function rotateCanvas(t) {
    ctx.rotate(t * Math.PI / 180)
}
ctx.fillStyle = "rgba(21,21,21,1)",
    ctx.fillRect(0, 0, cw, ch),
    ctx.lineCap = "round";

for (var count = 2e4; count--;)

    createStar();

drawStar();

var x = centerX,
    y = centerY;

function fireAnimate() {
    requestAnimFrame(fireAnimate),
        loop()
}

function changeStar() {
    loop = function () {
        drawfromCache(),
            ++drawTimes > 150 && drawTimes % 8 == 0 && (ctx.fillStyle = "rgba(0,0,0,.04)",
                ctx.fillRect(-3 * longside, -3 * longside, 6 * longside, 6 * longside)),
            rotateCanvas(random(1, 100))
    }
}

function getMsg() {
    var t = ["Losed ❤ & Loving Shapa"],
        a = random(0, t.length - 1);

    $("#slogan").html(t[a])
}

function random(t, a) {
    var e = a - t, n = Math.random();

    return t + Math.round(n * e)
}

ctx.translate(x, y),
    fireAnimate(),
    // $(function () { getMsg() }),
    window.onscroll = function () {
        $(window).scrollTop() > .6 * $(window).height() ? $(".background").addClass("fixed") : $(".background").removeClass("fixed")
    },
    $(function () {
        $(".chatbox .line[data-meta-conf=init]").css("display", "block"),
            $("[data-meta-flag]").on("click", function () {
                var t = $(this).attr("data-meta-flag"),
                    a = $(this).parent(".line.question");
                if (a.hasClass("disable")) $(this).removeClass("error").addClass("error");
                else {
                    !function (t) {
                        switch (t) {
                            case "the-end":
                            case "nekotora-magic":
                                $(".chatbox").slideUp();
                                break;
                            case "do-another-style":
                                $("body").html('\n          <div class="container">\n            <h1>你好我是哞菇/Nekotora.</h1>\n            <h4>完了。</h4>\n          </div>\n        ')
                        }
                    }(t),
                    a.addClass("disable"),
                    $(this).addClass("selected"),
                    $(".chatbox .loading").css("display", "block"),
                    $(`[data-meta-content=${t}]>*`).css("display", "none"),
                    $(`[data-meta-content=${t}]`).css("display", "block");

                    var e = 0; $(`[data-meta-content=${t}]>*`).each(function () {
                        var t = random(1e3, 2e3);

                        e += t,
                            $(".chatbox .loading").css("display", "block"),
                            setTimeout(
                                () => { $(this).fadeIn() }, e)
                    }),
                        setTimeout(
                            () => { $(".chatbox .loading").css("display", "none") }, e)
                }
            })
    });