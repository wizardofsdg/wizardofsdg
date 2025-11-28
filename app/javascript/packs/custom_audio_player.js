document.addEventListener("DOMContentLoaded", () => {
  const audio = document.getElementById("player");
  const progress = document.getElementById("progress");
  const playBtn = document.getElementById("play");

  if (!audio || !progress || !playBtn) return;

  // 무한재생 설정
  audio.loop = true;

  playBtn.textContent = "▶";

  audio.addEventListener("loadedmetadata", () => {
    progress.max = audio.duration;
  });

  audio.addEventListener("timeupdate", () => {
    progress.value = audio.currentTime;
  });

  progress.addEventListener("input", () => {
    audio.currentTime = progress.value;
  });

  playBtn.addEventListener("click", () => {
    if (audio.paused) {
      audio.play();
      playBtn.textContent = "⏸︎";
    } else {
      audio.pause();
      playBtn.textContent = "▶";
    }
  });
});
