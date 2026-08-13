document.addEventListener("DOMContentLoaded", function () {
  const video = document.getElementById("my-video");
  const thumb = document.getElementById("thumb-image");

  // 動画が再生されたら、サムネイル画像を隠す
  video.addEventListener("play", function () {
    thumb.classList.add("is-hidden");
  });

  // 動画が終わったら、最初に戻して画像を再表示する
  video.addEventListener("ended", function () {
    video.currentTime = 0;
    video.pause();
    thumb.classList.remove("is-hidden");
  });
});
