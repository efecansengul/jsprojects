const barsIcon = document.querySelector(".fas.fa-bars");
const appear = document.querySelector(".appear");

function letItApear() {
  appear.classList.toggle("block");
  const currentRotation = barsIcon.style.transform;

  // Eğer mevcutta bir dönüşüm varsa, 90 derece artır
  if (currentRotation === "rotate(90deg)") {
    barsIcon.style.transform = "rotate(0deg)";
  } else {
    barsIcon.style.transform = "rotate(90deg)";
  }
}

barsIcon.addEventListener("click", letItApear);
window.addEventListener("resize", function () {
  if (window.innerWidth > 800) {
    appear.classList.remove("block");
    barsIcon.style.transform = "rotate(0deg)"; // Dönüşümü sıfırla
  }
});
