function videoAutoPlay() {
  var videos = document.querySelectorAll("video");
  if (!videos.length) {
    return;
  }
  var video = videos[videos.length - 1];
  var src = video.getAttribute("src") || video.getAttribute("_src");
  var type = "video/" + src.slice(src.lastIndexOf(".") + 1);
  var mobile = parseInt(video.getAttribute("_mobile") || "0px");
  var hd = parseInt(video.getAttribute("_hd") || "0px");
  var ratio = window.devicePixelRatio > 1 ? 2 : 1;
  var loopDelay = parseInt(video.getAttribute("_loopdelay") || "0ms");
  // check if the video can be played by this browser.
  if (!video.canPlayType(type)) {
    if (!video.poster) {
      var resize = function() {
        // it cannot be played. just show the poster.
        if (mobile && document.body.offsetWidth <= mobile) {
          video.poster = video.getAttribute("_mobileposter");
        } else {
          video.poster = video.getAttribute("_poster");
        }
      };
      window.addEventListener("resize", resize);
      resize();
    }
    return video;
  }
  // The video can be played by this browser.
  var useHD;
  var current;
  var resize = function() {
    var change;
    if (mobile && document.body.offsetWidth <= mobile) {
      change = video.getAttribute("_mobilesrc");
    } else {
      change = video.getAttribute("_src");
    }
    if (useHD || (ratio > 1 && hd && document.body.offsetWidth >= hd)) {
      useHD = true;
      change =
        change.slice(0, change.lastIndexOf(".")) +
        "@2x" +
        change.slice(change.lastIndexOf("."));
    }
    if (current != change) {
      current = change;
      video.src = current;
    }
  };
  window.addEventListener("resize", resize);
  resize();
  // register the touchstart autoplay code for low-powered mobile devices that
  // do not automatically start video playback
  var listener = function() {
    video.play();
    window.removeEventListener("touchstart", listener);
  };
  window.addEventListener("touchstart", listener);
  video.addEventListener("canplay", function() {
    video.play();
  });
  video.addEventListener("ended", function() {
    setTimeout(function() {
      video.play();
    }, loopDelay);
  });
  return video;
}
