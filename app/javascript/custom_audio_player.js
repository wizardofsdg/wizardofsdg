document.addEventListener("DOMContentLoaded", () => {
  const audio = document.getElementById("player");
  const progress = document.getElementById("progress");
  const playBtn = document.getElementById("play");

  if (!audio || !progress || !playBtn) return;

  // 초기 상태
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
      audio.play().then(() => {
        playBtn.textContent = "❚❚"; // 재생 중이면 일시정지 아이콘
      });
    } else {
      audio.pause();
      playBtn.textContent = "▶"; // 멈추면 재생 아이콘
    }
  });
});
