(function () {
    document.querySelectorAll('.watch-player').forEach(function (player) {
        const video = player.querySelector('.js-video');
        const button = player.querySelector('.js-player-start');
        const stream = player.getAttribute('data-stream');
        let prepared = false;
        let hls = null;

        if (!video || !stream) {
            return;
        }

        function prepare() {
            if (prepared) {
                return Promise.resolve();
            }

            prepared = true;

            if (video.canPlayType('application/vnd.apple.mpegurl')) {
                video.src = stream;
                return Promise.resolve();
            }

            if (window.Hls && window.Hls.isSupported()) {
                return new Promise(function (resolve) {
                    hls = new window.Hls({
                        enableWorker: true,
                        lowLatencyMode: true
                    });
                    hls.loadSource(stream);
                    hls.attachMedia(video);
                    hls.on(window.Hls.Events.MANIFEST_PARSED, function () {
                        resolve();
                    });
                    hls.on(window.Hls.Events.ERROR, function () {
                        resolve();
                    });
                });
            }

            video.src = stream;
            return Promise.resolve();
        }

        function play() {
            player.classList.add('is-playing');
            prepare().then(function () {
                const promise = video.play();
                if (promise && typeof promise.catch === 'function') {
                    promise.catch(function () {});
                }
            });
        }

        if (button) {
            button.addEventListener('click', play);
        }

        video.addEventListener('click', function () {
            if (!prepared) {
                play();
            }
        });

        window.addEventListener('pagehide', function () {
            if (hls) {
                hls.destroy();
                hls = null;
            }
        });
    });
})();
