document.addEventListener("DOMContentLoaded", () => {
  const barIcon = document.querySelector(".fas.fa-bars");
  const aside = document.querySelector(".aside");
  const exitButton = document.querySelector(".fas.fa-times");
  barIcon.addEventListener("click", () => {
    aside.classList.toggle("active");
    console.log(aside);
  });
  exitButton.addEventListener("click", () => {
    aside.classList.toggle("active");
  });
});
