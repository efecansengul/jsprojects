const btns = document.querySelectorAll(".btn");
const video = document.querySelector(".video");
btns.forEach((btn) => {
  btn.addEventListener("click", (e) => {
    if (e.currentTarget.innerText.startsWith("Con")) {
      video.play();
    } else if (e.currentTarget.innerText.startsWith("Stop")) {
      video.pause();
    }
  });
});

window.addEventListener("DOMContentLoaded", () => {
  const video = document.querySelector(".video");
  video
    .play()
    .then(() => console.log("Video başarıyla başladı."))
    .catch((err) => console.error("Video başlatılamadı:", err));
});
