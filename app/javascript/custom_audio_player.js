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
      playBtn.textContent = "⏸️"; // 클릭 직후 바로 바꿔줌
    } else {
      audio.pause();
      playBtn.textContent = "▶"; // 클릭 직후 바로 바꿔줌
    }
  });

  // 오디오 상태 이벤트로 최종 동기화
  audio.addEventListener("play", () => {
    playBtn.textContent = "⏸️";
  });

  audio.addEventListener("pause", () => {
    playBtn.textContent = "▶";
  });
});
