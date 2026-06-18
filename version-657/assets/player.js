(function () {
    function bindStream(video, source) {
        if (video.dataset.ready === "true") {
            return;
        }
        video.dataset.ready = "true";
        if (video.canPlayType("application/vnd.apple.mpegurl")) {
            video.src = source;
            return;
        }
        if (window.Hls && window.Hls.isSupported()) {
            var hls = new window.Hls({
                enableWorker: true,
                lowLatencyMode: true,
                backBufferLength: 90
            });
            hls.loadSource(source);
            hls.attachMedia(video);
            video._hls = hls;
            return;
        }
        video.src = source;
    }

    window.initMoviePlayer = function (videoId, buttonId, coverId, source) {
        var video = document.getElementById(videoId);
        var button = document.getElementById(buttonId);
        var cover = document.getElementById(coverId);
        if (!video || !button || !cover || !source) {
            return;
        }

        function start() {
            bindStream(video, source);
            cover.classList.add("is-hidden");
            video.setAttribute("controls", "controls");
            var playback = video.play();
            if (playback && typeof playback.catch === "function") {
                playback.catch(function () {
                    video.muted = true;
                    video.play();
                });
            }
        }

        button.addEventListener("click", start);
        cover.addEventListener("click", start);
        video.addEventListener("click", function () {
            if (video.paused) {
                video.play();
            }
        });
    };
})();
