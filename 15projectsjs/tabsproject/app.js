const tabs = document.querySelectorAll(".tab-button");
const descriptions = document.querySelectorAll(".description");

tabs.forEach((item) =>
  item.addEventListener("click", () => {
    descriptions.forEach((desc) => {
      desc.style.display = "none";
    });

    const dataId = item.getAttribute("data-tab");
    console.log(dataId);
    document.getElementById(dataId).style.display = "block";
    tabs.forEach((tab) => {
      tab.classList.remove("background");
    });
    item.classList.add("background");
  })
);
