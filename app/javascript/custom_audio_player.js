document.addEventListener("DOMContentLoaded", () => {
  const audio = document.getElementById("player");
  const progress = document.getElementById("progress");
  const playBtn = document.getElementById("play");

  if (!audio || !progress || !playBtn) return;

  // 초기 상태: 재생 버튼
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
    } else {
      audio.pause();
    }
  });

  audio.addEventListener("play", () => {
    playBtn.textContent = "⏸️";
  });

  audio.addEventListener("pause", () => {
    playBtn.textContent = "▶";
  });
});
