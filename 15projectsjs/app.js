const projects = [
  {
    name: "Count Down",
    link: "./countdown/index.html",
    image: "../public/countdown.png",
  },
  {
    name: "Counter",
    link: "./counter/index.html",
    image: "../public/counter.png",
  },
  {
    name: "FAQs",
    link: "./faqs/index.html",
    image: "../public/faqs.png",
  },
  {
    name: "Grocery Bud",
    link: "./groceryBud/index.html",
    image: "../public/groceryBud.png",
  },
  {
    name: "Hex Color",
    link: "./hexColor/index.html",
    image: "../public/hexColor.png",
  },
  {
    name: "Paragraph Generator",
    link: "./loremipsum/index.html",
    image: "../public/loremIpsum.png",
  },
  {
    name: "Menu",
    link: "./menuproject/index.html",
    image: "../public/menu.png",
  },
  {
    name: "Modal",
    link: "./modal/index.html",
    image: "../public/modal.png",
  },
  {
    name: "Navbar",
    link: "./navbar/index.html",
    image: "../public/navbar.png",
  },
  {
    name: "Reviews",
    link: "./reviews/index.html",
    image: "../public/review.png",
  },
  {
    name: "Scroll",
    link: "./scrollproject/index.html",
    image: "../public/scroll.png",
  },
  {
    name: "Sidebar",
    link: "./sidebar/index.html",
    image: "../public/sidebar.png",
  },
  {
    name: "Slider",
    link: "./sliderproject/index.html",
    image: "../public/slider.png",
  },
  {
    name: "Tabs",
    link: "./tabsproject/index.html",
    image: "../public/tabs.png",
  },
  {
    name: "Video",
    link: "./videoproject/index.html",
    image: "../public/video.png",
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
