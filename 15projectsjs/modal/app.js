const openButton = document.querySelector(".open-button");
const overlay = document.querySelector(".overlay");
const openMod = document.querySelector(".open");
const modal = document.querySelector(".modal");
const exitButton = document.querySelector(".fas.fa-times");
function openModal() {
  overlay.classList.remove("hidden");
  openMod.classList.remove("hidden");
  modal.classList.add("hidden");
}

function exitModal() {
  modal.classList.remove("hidden");
  overlay.classList.add("hidden");
  openMod.classList.add("hidden");
}
openButton.addEventListener("click", openModal);
exitButton.addEventListener("click", exitModal);
overlay.addEventListener("click", exitModal);

document.addEventListener("keydown", (event) => {
  if (event.key === "Escape" && !overlay.classList.contains("hidden")) {
    exitModal();
  }
});
