const pictures = [
  {
    id: 0,
    imageSrc: "./public/chickenBurger.jpg",
    width: 995,
    height: 495,
  },
  {
    id: 1,
    imageSrc: "./public/home-made-robot-desk.jpg",
    width: 995,
    height: 495,
  },
  { id: 2, imageSrc: "./public/colorfolrainbow.jpg", width: 995, height: 495 },
  { id: 3, imageSrc: "./public/pizza.jpg", width: 995, height: 495 },
  { id: 4, imageSrc: "./public/regulartoast.jpg", width: 995, height: 495 },
  { id: 5, imageSrc: "./public/stackBurger.jpg", width: 995, height: 495 },
];

const buttons = document.querySelectorAll(".buttons");
const section = document.querySelector("section");
let count = 0;
let image = document.createElement("img");

let h2 = document.createElement("h2");
buttons.forEach((button) => {
  button.addEventListener("click", (e) => {
    removeImage();
    if (e.target.innerText === "Next") {
      if (count >= pictures.length - 1) {
        count = 0;
        createImage(count, "next");
      } else {
        count++;
        createImage(count, "next");
      }
    } else {
      if (count <= 0) {
        count = 5;
        createImage(count, "pre");
      } else {
        count--;
        createImage(count, "pre");
      }
    }
    console.log(count);
  });
});
function createImage(count, what) {
  pictures.map((picture, index) => {
    if (picture.id === count) {
      h2.innerText = count;

      image.width = `${picture.width}`;
      image.height = `${picture.height}`;
      if (what == "next") {
        image.classList.remove("pre");
        image.classList.add("next");
      } else {
        image.classList.remove("next");
        image.classList.add("pre");
      }
      image.src = `${picture.imageSrc}`;
      section.append(h2);
      section.append(image);
    }
  });
}

function removeImage() {
  console.log(section);
  if (!section[1]) {
    section.childNodes[1].remove();
  } else if (!section[0]) {
    section.childNodes[0].remove();
  }
  return;
}

window.addEventListener("DOMContentLoaded", () => {
  image.width = pictures[0].width;
  image.height = pictures[0].height;
  image.src = pictures[0].imageSrc;
  section.append(image);
});
