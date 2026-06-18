(function () {
  function qs(selector, scope) {
    return (scope || document).querySelector(selector);
  }

  function qsa(selector, scope) {
    return Array.prototype.slice.call(
      (scope || document).querySelectorAll(selector),
    );
  }

  var toggle = qs("[data-menu-toggle]");
  var mobileNav = qs("[data-mobile-nav]");
  if (toggle && mobileNav) {
    toggle.addEventListener("click", function () {
      mobileNav.classList.toggle("open");
    });
  }

  qsa("[data-hero-carousel]").forEach(function (carousel) {
    var slides = qsa(".hero-slide", carousel);
    var dots = qsa(".hero-dot", carousel);
    var current = 0;

    function show(index) {
      current = (index + slides.length) % slides.length;
      slides.forEach(function (slide, slideIndex) {
        slide.classList.toggle("is-active", slideIndex === current);
      });
      dots.forEach(function (dot, dotIndex) {
        dot.classList.toggle("is-active", dotIndex === current);
      });
    }

    dots.forEach(function (dot, index) {
      dot.addEventListener("click", function () {
        show(index);
      });
    });

    if (slides.length > 1) {
      window.setInterval(function () {
        show(current + 1);
      }, 5600);
    }
  });

  qsa("[data-search-input]").forEach(function (input) {
    var scope = document;
    var items = qsa("[data-search-item]", scope);
    input.addEventListener("input", function () {
      var value = input.value.trim().toLowerCase();
      items.forEach(function (item) {
        var haystack = item.getAttribute("data-search") || "";
        item.style.display = haystack.indexOf(value) === -1 ? "none" : "";
      });
    });
  });

  qsa("[data-player]").forEach(function (box) {
    var video = qs("video", box);
    var button = qs("[data-play-button]", box);
    var errorBox = qs("[data-player-error]", box);
    if (!video) {
      return;
    }

    var streamUrl = video.getAttribute("data-stream");
    var hlsInstance = null;

    function showError(message) {
      if (errorBox) {
        errorBox.textContent = message;
        errorBox.classList.add("show");
      }
    }

    function attachStream() {
      if (!streamUrl) {
        showError("影片暂时无法播放");
        return;
      }

      if (window.Hls && window.Hls.isSupported()) {
        hlsInstance = new window.Hls({
          enableWorker: true,
          lowLatencyMode: true,
        });
        hlsInstance.loadSource(streamUrl);
        hlsInstance.attachMedia(video);
        hlsInstance.on(window.Hls.Events.ERROR, function (event, data) {
          if (!data || !data.fatal) {
            return;
          }
          if (data.type === window.Hls.ErrorTypes.MEDIA_ERROR) {
            hlsInstance.recoverMediaError();
          } else {
            hlsInstance.destroy();
            showError("视频加载失败，请稍后重试");
          }
        });
      } else if (video.canPlayType("application/vnd.apple.mpegurl")) {
        video.src = streamUrl;
      } else {
        video.src = streamUrl;
      }
    }

    function playOrPause() {
      if (video.paused) {
        var playResult = video.play();
        if (playResult && typeof playResult.catch === "function") {
          playResult.catch(function () {
            showError("请点击视频区域开始播放");
          });
        }
      } else {
        video.pause();
      }
    }

    attachStream();

    if (button) {
      button.addEventListener("click", function (event) {
        event.preventDefault();
        playOrPause();
      });
    }

    video.addEventListener("play", function () {
      box.classList.add("is-playing");
      if (button) {
        button.textContent = "暂停";
      }
    });

    video.addEventListener("pause", function () {
      box.classList.remove("is-playing");
      if (button) {
        button.textContent = "播放";
      }
    });
  });
})();
