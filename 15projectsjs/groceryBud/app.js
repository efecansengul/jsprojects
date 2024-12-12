const input = document.querySelector(".input");
const button = document.querySelector(".btn");
const appear = document.querySelector(".appear");
const clearAll = document.querySelector(".removeall");
const ul = document.querySelector(".taken");
let text = "";

function removeItem(id) {
  const listItems = document.querySelectorAll("li");
  listItems.forEach((item) => {
    item.childNodes[1].firstElementChild.addEventListener("click", (e) => {
      localStorage.removeItem(id);
      item.remove();
      appear.classList.add("remove");
      appear.innerText = "item removed";
      setTimeout(() => {
        appear.classList.remove("remove");
        appear.innerText = "Bos gözüksün";
      }, 1000);
    });

    listItems.forEach((item) => {
      item.childNodes[1].lastElementChild.addEventListener("click", (e) => {
        input.value = e.target.parentElement.parentElement.innerText;
        input.style.color = "red";
        button.innerText = "Change Item";
        input.style.focus = "onfocus";
        input.focus();
        input.addEventListener("input", (e) => {
          text = e.target.value;
          localStorage.removeItem(item.getAttribute("data-id"));
        });
        button.addEventListener("click", (e) => {
          e.preventDefault();
          item.remove();
          console.log(e.target.innerText == "Change Item");

          item.innerText = text;
          input.style.color = "black";
          button.innerText = "Submit";
          item.setAttribute("data-id", text);
          localStorage.setItem(item.getAttribute("data-id"), text);
          input.value = "";
        });
      });
    });
  });
}

function addListItem(value) {
  let liEl = document.createElement("li");
  liEl.innerHTML = value;
  liEl.setAttribute("data-id", value);
  localStorage.setItem(liEl.getAttribute("data-id"), value);
  liEl.innerHTML += `
  <div>
      <i style="color:red" class="fas fa-trash"></i> 
      <i style="color:green" class="fas fa-pen"></i> 
    </div>`;

  document.querySelector("ul").appendChild(liEl);
  setTimeout(() => {
    appear.classList.remove("add");
    appear.innerHTML = "Bos gözüksün";
  }, 1000);
  removeItem(liEl.getAttribute("data-id"));
}

button.addEventListener("click", (e) => {
  e.preventDefault();
  if (!text) {
    alert("bos text gönderilemez");
  } else {
    appear.classList.add("add");
    appear.innerText = "item added";
    input.value = "";
    addListItem(text);
  }
});

input.addEventListener("input", (e) => {
  text = e.target.value;
});

clearAll.addEventListener("click", () => {
  input.focus();
  appear.classList.add("remove");
  appear.innerText = "Remove all item";
  while (ul.firstChild) {
    localStorage.clear();
    ul.firstChild.remove();
  }
  setTimeout(() => {
    appear.classList.remove("remove");
    appear.innerText = "gözükmüyor zaten";
  }, 1000);
});
document.addEventListener("DOMContentLoaded", () => {
  for (let i = 0; i < localStorage.length; i++) {
    let key = localStorage.key(i);
    let value = localStorage.getItem(key);
    addListItem(value);
  }
});
