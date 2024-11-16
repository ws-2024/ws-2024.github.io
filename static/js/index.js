(function () {
    document.ready = function (callback) {
        if (document.addEventListener) {
            document.addEventListener('DOMContentLoaded', function () {
                document.removeEventListener('DOMContentLoaded', arguments.callee, false);
                callback();
            }, false)
        }
        else if (document.attachEvent) {
            document.attachEvent('onreadystatechange', function () {
                if (document.readyState == "complete") {
                    document.detachEvent("onreadystatechange", arguments.callee);
                    callback();
                }
            })
        }
        else if (document.lastChild == document.body) {
            callback();
        }
    };
    const _preloader = function () {
        var isMobile = /Android|webOS|iPhone|iPad|iPod|BlackBerry/i.test(
            navigator.userAgent
        )
            ? true
            : false;
        var preloader = document.getElementById('preloader');
        if (!isMobile) {
            setTimeout(function () {
                preloader.classList.add("preloaded");

            }, 200);
            setTimeout(function () {
                preloader.remove();
            }, 1000);
        } else {
            preloader.remove();
        }
    };
    const _onload = function () {
        setTimeout(function () {
            _preloader();
        }, 500);
    };
    const type_text = function () {
        var typed = new Typed(".auto-type", {
            strings: ["Web Developer", "Freelancer"],
            typeSpeed: 70,
            backSpeed: 70,
            backDelay: 900,
            loop: true,
        });
    };
    document.ready(function () {
        type_text();
        _onload();
    });
})();
