const projects = [
  {
    name: "Count Down",
    link: "./15projectsjs/countdown/index.html",
    image: "./public/countdown.png",
  },
  {
    name: "Counter",
    link: "./15projectsjs/counter/index.html",
    image: "./public/counter.png",
  },
  {
    name: "FAQs",
    link: "./15projectsjs/faqs/index.html",
    image: "./public/faqs.png",
  },
  {
    name: "Grocery Bud",
    link: "./15projectsjs/groceryBud/index.html",
    image: "./public/groceryBud.png",
  },
  {
    name: "Hex Color",
    link: "./15projectsjs/hexColor/index.html",
    image: "./public/hexColor.png",
  },
  {
    name: "Paragraph Generator",
    link: "./15projectsjs/loremipsum/index.html",
    image: "./public/loremIpsum.png",
  },
  {
    name: "Menu",
    link: "./15projectsjs/menuproject/index.html",
    image: "./public/menu.png",
  },
  {
    name: "Modal",
    link: "./15projectsjs/modal/index.html",
    image: "./public/modal.png",
  },
  {
    name: "Navbar",
    link: "./15projectsjs/navbar/index.html",
    image: "./public/navbar.png",
  },
  {
    name: "Reviews",
    link: "./15projectsjs/reviews/index.html",
    image: "./public/review.png",
  },
  {
    name: "Scroll",
    link: "./15projectsjs/scrollproject/index.html",
    image: "./public/scroll.png",
  },
  {
    name: "Sidebar",
    link: "./15projectsjs/sidebar/index.html",
    image: "./public/sidebar.png",
  },
  {
    name: "Slider",
    link: "./15projectsjs/sliderproject/index.html",
    image: "./public/slider.png",
  },
  {
    name: "Tabs",
    link: "./15projectsjs/tabsproject/index.html",
    image: "./public/tabs.png",
  },
  {
    name: "Video",
    link: "./15projectsjs/videoproject/index.html",
    image: "./public/video.png",
  },
  {
    name: "Image Opacity Solution",
    link: "./15projectsjs/imageopacitysolution/index.html",
    image: "./public/opacityImage.png",
  },
];

const projectGrid = document.getElementById("project-grid");

projects.forEach((project) => {
  const projectCard = document.createElement("a");
  projectCard.href = project.link;
  projectCard.target = "_blank";
  projectCard.classList.add("card");
  projectCard.innerHTML = `
      <img src="${project.image}" alt="${project.name}">
      <h2>${project.name}</h2>
      <p>Click to view project</p>
    `;
  projectGrid.appendChild(projectCard);
});
