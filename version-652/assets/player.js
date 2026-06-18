import { H as Hls } from "./video-player-dru42stk.js";

document.addEventListener("DOMContentLoaded", function () {
  document.querySelectorAll("[data-player]").forEach(function (player) {
    initializePlayer(player);
  });
});

function initializePlayer(player) {
  const video = player.querySelector("video");
  const shell = player.querySelector(".video-shell");
  const button = player.querySelector("[data-play-button]");
  const message = player.querySelector("[data-player-message]");
  const source = player.dataset.source;
  let hls = null;
  let loaded = false;

  if (!video || !source) {
    setMessage(message, "播放源未配置");
    return;
  }

  function loadSource() {
    if (loaded) {
      return;
    }

    loaded = true;
    setMessage(message, "正在加载播放源...");

    if (Hls.isSupported()) {
      hls = new Hls({
        enableWorker: true,
        lowLatencyMode: true
      });

      hls.loadSource(source);
      hls.attachMedia(video);

      hls.on(Hls.Events.MANIFEST_PARSED, function () {
        setMessage(message, "播放源已就绪");
      });

      hls.on(Hls.Events.ERROR, function (eventName, data) {
        if (data && data.fatal) {
          setMessage(message, "视频加载失败，请稍后重试");
        }
      });
    } else if (video.canPlayType("application/vnd.apple.mpegurl")) {
      video.src = source;
      setMessage(message, "播放源已就绪");
    } else {
      setMessage(message, "当前浏览器不支持 HLS 播放");
    }
  }

  async function playVideo() {
    loadSource();

    try {
      await video.play();
    } catch (error) {
      setMessage(message, "请再次点击播放按钮开始播放");
    }
  }

  if (button) {
    button.addEventListener("click", playVideo);
  }

  video.addEventListener("play", function () {
    if (shell) {
      shell.classList.add("is-playing");
    }

    setMessage(message, "正在播放");
  });

  video.addEventListener("pause", function () {
    if (shell) {
      shell.classList.remove("is-playing");
    }
  });

  video.addEventListener("waiting", function () {
    setMessage(message, "正在缓冲...");
  });

  video.addEventListener("ended", function () {
    if (shell) {
      shell.classList.remove("is-playing");
    }

    setMessage(message, "播放结束");
  });

  window.addEventListener("beforeunload", function () {
    if (hls) {
      hls.destroy();
    }
  });
}

function setMessage(node, text) {
  if (node) {
    node.textContent = text;
  }
}
