// app/javascript/custom_audio_player.js
document.addEventListener("DOMContentLoaded", () => {
  // 환경설정 페이지에서는 실행하지 않음
  if (window.location.pathname.startsWith("/settings") || window.location.pathname.startsWith("/환경설정")) {
    return;
  }

  const audio = document.getElementById("player");
  const playBtn = document.getElementById("play");

  // 요소가 없으면 초기화하지 않음
  if (!audio || !progress || !playBtn) {
    console.warn("Audio player elements not found");
    return;
  }

  // 버튼 클릭 시 재생/일시정지
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
