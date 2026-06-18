import { H as Hls } from "./video-player-dru42stk.js";

const FALLBACK_STREAMS = [
  "https://customer-7t103rn8rocxo5v6.cloudflarestream.com/2b24d290c5afaa53609b82c0fe13c8ee/manifest/video.m3u8",
  "https://customer-7t103rn8rocxo5v6.cloudflarestream.com/0c2e2c42667e9082777f3c38e5c4a6bd/manifest/video.m3u8",
  "https://customer-7t103rn8rocxo5v6.cloudflarestream.com/ea0a29e7d06c4b20a43dfc555b5cba48/manifest/video.m3u8",
  "https://customer-7t103rn8rocxo5v6.cloudflarestream.com/f1ede675c0d10e5c1e3a0fe24b8bbd18/manifest/video.m3u8",
  "https://customer-7t103rn8rocxo5v6.cloudflarestream.com/d96a22bb44d5e01b881e1e93d9c33d67/manifest/video.m3u8",
  "https://customer-7t103rn8rocxo5v6.cloudflarestream.com/9d01c9e94aa94cf98d1b51c8e2a2bd4f/manifest/video.m3u8",
  "https://customer-7t103rn8rocxo5v6.cloudflarestream.com/5c843a0c95cbfaa8e1a2e53ee9a2e8fa/manifest/video.m3u8",
  "https://customer-7t103rn8rocxo5v6.cloudflarestream.com/ab5ce67a9e6e4f2c9d0e5e1d6a8f3c0b/manifest/video.m3u8",
  "https://customer-7t103rn8rocxo5v6.cloudflarestream.com/1f5d8a9c7e3b2d4f6a8c0e2b4d6f8a0c/manifest/video.m3u8",
  "https://customer-7t103rn8rocxo5v6.cloudflarestream.com/3c7b9d1f5e8a4c2d0b6e8f2a4c6d8b0f/manifest/video.m3u8",
  "https://customer-7t103rn8rocxo5v6.cloudflarestream.com/5e9d2c4f6a8b0d2f4e6a8c0d2f4e6a8c/manifest/video.m3u8",
  "https://customer-7t103rn8rocxo5v6.cloudflarestream.com/7a0d3f5c8e2b4d6f8a0c2e4d6f8a0c2e/manifest/video.m3u8",
  "https://customer-7t103rn8rocxo5v6.cloudflarestream.com/9b2e4d6f8a0c2e4d6f8a0c2e4d6f8a0c/manifest/video.m3u8",
  "https://customer-7t103rn8rocxo5v6.cloudflarestream.com/b4c6d8f0a2c4e6d8f0a2c4e6d8f0a2c4/manifest/video.m3u8",
  "https://customer-7t103rn8rocxo5v6.cloudflarestream.com/d6e8f0a2c4e6d8f0a2c4e6d8f0a2c4e6/manifest/video.m3u8",
  "https://customer-7t103rn8rocxo5v6.cloudflarestream.com/f8a0c2e4d6f8a0c2e4d6f8a0c2e4d6f8/manifest/video.m3u8",
  "https://customer-7t103rn8rocxo5v6.cloudflarestream.com/0c2e4d6f8a0c2e4d6f8a0c2e4d6f8a0c/manifest/video.m3u8",
  "https://customer-7t103rn8rocxo5v6.cloudflarestream.com/2e4d6f8a0c2e4d6f8a0c2e4d6f8a0c2e/manifest/video.m3u8",
  "https://customer-7t103rn8rocxo5v6.cloudflarestream.com/4d6f8a0c2e4d6f8a0c2e4d6f8a0c2e4d/manifest/video.m3u8",
  "https://customer-7t103rn8rocxo5v6.cloudflarestream.com/6f8a0c2e4d6f8a0c2e4d6f8a0c2e4d6f/manifest/video.m3u8"
];

function ready(callback) {
  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", callback);
  } else {
    callback();
  }
}

function setStatus(player, message) {
  const status = player.querySelector("[data-player-status]");

  if (status) {
    status.textContent = message;
  }
}

function makePlaylist(primary) {
  const list = [];

  if (primary) {
    list.push(primary);
  }

  FALLBACK_STREAMS.forEach(function (stream) {
    if (stream && list.indexOf(stream) === -1) {
      list.push(stream);
    }
  });

  return list;
}

function initPlayer(player) {
  const video = player.querySelector("video[data-src]");
  const button = player.querySelector("[data-player-button]");

  if (!video || !button) {
    return;
  }

  let hls = null;
  let currentIndex = 0;
  const playlist = makePlaylist(video.getAttribute("data-src"));

  function destroyHls() {
    if (hls && typeof hls.destroy === "function") {
      hls.destroy();
    }

    hls = null;
  }

  function playNative(src) {
    destroyHls();
    video.src = src;
    setStatus(player, "正在加载播放源…");
    video.play().then(function () {
      setStatus(player, "正在播放");
    }).catch(function () {
      setStatus(player, "浏览器已阻止自动播放，请再次点击视频播放。 ");
    });
  }

  function playWithHls(src) {
    destroyHls();
    hls = new Hls({
      enableWorker: true,
      lowLatencyMode: false,
      backBufferLength: 90
    });

    setStatus(player, "正在初始化 HLS 播放器…");
    hls.loadSource(src);
    hls.attachMedia(video);

    hls.on(Hls.Events.MANIFEST_PARSED, function () {
      video.play().then(function () {
        setStatus(player, "正在播放");
      }).catch(function () {
        setStatus(player, "播放源已加载，请再次点击视频播放。 ");
      });
    });

    hls.on(Hls.Events.ERROR, function (eventName, data) {
      if (!data || !data.fatal) {
        return;
      }

      if (currentIndex < playlist.length - 1) {
        currentIndex += 1;
        setStatus(player, "当前播放源异常，正在切换备用源…");
        loadCurrentSource();
        return;
      }

      if (data.type === Hls.ErrorTypes.NETWORK_ERROR) {
        hls.startLoad();
      } else if (data.type === Hls.ErrorTypes.MEDIA_ERROR) {
        hls.recoverMediaError();
      } else {
        setStatus(player, "播放源暂时不可用，请稍后重试。 ");
        destroyHls();
      }
    });
  }

  function loadCurrentSource() {
    const src = playlist[currentIndex];

    if (!src) {
      setStatus(player, "未找到播放源。 ");
      return;
    }

    if (video.canPlayType("application/vnd.apple.mpegurl")) {
      playNative(src);
      return;
    }

    if (Hls && Hls.isSupported && Hls.isSupported()) {
      playWithHls(src);
      return;
    }

    video.src = src;
    setStatus(player, "当前浏览器不支持 HLS，已尝试使用原生播放。 ");
  }

  button.addEventListener("click", function () {
    button.classList.add("is-hidden");
    loadCurrentSource();
  });

  video.addEventListener("play", function () {
    button.classList.add("is-hidden");
  });

  video.addEventListener("error", function () {
    if (currentIndex < playlist.length - 1) {
      currentIndex += 1;
      loadCurrentSource();
    } else {
      setStatus(player, "播放失败，请刷新页面后重试。 ");
    }
  });
}

ready(function () {
  document.querySelectorAll("[data-player]").forEach(initPlayer);
});
