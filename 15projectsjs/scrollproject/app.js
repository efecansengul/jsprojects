const hamburgerButton = document.querySelector(".fas.fa-bars");
const smallheader = document.querySelector(".small-header");
const scrollTop = document.querySelector(".scroll-to-top");
const pages = document.querySelectorAll("[data-page]");
let currentSectionIndex = 0;
console.log(pages);
window.addEventListener("wheel", (event) => {
  //assa kaydırma
  if (event.deltaY > 0) {
    currentSectionIndex = Math.min(currentSectionIndex + 1, pages.length - 1);
    console.log(currentSectionIndex);
  } //yukarı kaydırma
  else {
    currentSectionIndex = Math.max(currentSectionIndex - 1, 0);
    console.log(currentSectionIndex);
  }
  //ilgili bölüme kaydır
  pages[currentSectionIndex].scrollIntoView({
    behavior: "smooth",
    block: "start",
  });
});

scrollTop.addEventListener("click", () => {
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
});

hamburgerButton.addEventListener("click", () => {
  smallheader.classList.toggle("active");
  smallheader.childNodes.forEach((item) =>
    item.addEventListener("click", () => {
      smallheader.classList.remove("active");
    })
  );
});
