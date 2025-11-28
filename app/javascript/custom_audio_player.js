// app/javascript/custom_audio_player.js
document.addEventListener("DOMContentLoaded", () => {
  const audio = document.getElementById("player");
  const progress = document.getElementById("progress");
  const playBtn = document.getElementById("play");

  // 음악 길이에 맞춰 슬라이더 최대값 설정
  audio.addEventListener("loadedmetadata", () => {
    progress.max = audio.duration;
  });

  // 음악 재생 중일 때 슬라이더 값 업데이트
  audio.addEventListener("timeupdate", () => {
    progress.value = audio.currentTime;
  });

  // 슬라이더를 움직이면 재생 위치도 변경
  progress.addEventListener("input", () => {
    audio.currentTime = progress.value;
  });

  // 버튼 클릭 시 재생/일시정지
  playBtn.addEventListener("click", () => {
    if (audio.paused) {
      audio.play();
      playBtn.textContent = "⏸️";
    } else {
      audio.pause();
      playBtn.textContent = "▶️";
    }
  });
});
