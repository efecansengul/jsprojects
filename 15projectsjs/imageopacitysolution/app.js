const verticalLine = document.querySelector(".vertical-line");
const layer = document.querySelector(".layer");
const box = document.querySelector(".box");
box.addEventListener("mousemove", (event) => {
  const boxRect = box.getBoundingClientRect();

  // Sadece kutunun yatay sınırlarında hareket ettir
  if (event.clientX > boxRect.left && event.clientX < boxRect.right) {
    const newLeft = event.clientX - boxRect.left;
    verticalLine.style.left = `${newLeft}px`; // px eklenmeli
    layer.style.width = `${newLeft}px`;
  }
});
