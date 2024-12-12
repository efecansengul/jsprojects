const menu = [
  {
    id: 1,
    title: "stackBurger",
    category: "lunch",
    image: "./public/stackBurger.jpg",
    price: 50,
    description:
      "Stack Burger offers a delicious variety of gourmet burgers, stacked high with fresh ingredients and bold flavors. Perfectly crafted for burger lovers who crave quality and taste in every bite.",
  },
  {
    id: 2,
    title: "chickenBurger",
    category: "lunch",
    image: "./public/chickenBurger.jpg",
    price: 45,
    description:
      "Stack Chicken Burger features tender, juicy chicken fillets, layered with fresh toppings and savory sauces. A perfect choice for those who love a flavorful, crispy bite.",
  },
  {
    id: 3,
    title: "pizza",
    category: "lunch",
    image: "./public/pizza.jpg",
    price: 62,
    description:
      "Arugula Pizza offers a delightful combination of fresh arugula, melted cheese, and a savory tomato base. A light yet flavorful pizza for those who enjoy a peppery twist.",
  },
  {
    id: 4,
    title: "vegetables toast",
    category: "breakfast",
    image: "./public/vegetoast.jpg",
    price: 27,
    description:
      "A hearty and delicious vegetarian toast featuring a mix of fresh vegetables, melted cheese, and savory spreads, perfect for a light yet satisfying meal.",
  },

  {
    id: 5,
    title: "enjoy egg",
    category: "breakfast",
    image: "./public/egg.jpg",
    price: 24,
    description:
      "A classic fried egg served with a golden crispy edge and a soft, runny yolk, perfect for a hearty breakfast or as a topping for various dishes.",
  },
  {
    id: 6,
    title: "regular toast",
    category: "breakfast",
    image: "./public/regulartoast.jpg",
    price: 22,
    description:
      "A simple yet delicious grilled toast, perfectly golden and crispy, ideal for breakfast or as a quick snack with your favorite toppings.",
  },
  {
    id: 7,
    title: "smoothie",
    category: "shake",
    image: "./public/smoothie.jpg",
    price: 12,
    description:
      "A refreshing and creamy strawberry smoothie, made with fresh strawberries, blended to perfection for a sweet and healthy treat.",
  },
  {
    id: 8,
    title: "colorfol rainbow",
    category: "shake",
    image: "./public/colorfolrainbow.jpg",
    price: 12,
    description:
      "A vibrant and colorful rainbow cake, layered with rich buttercream, offering a delightful blend of flavors in every bite.",
  },
  {
    id: 9,
    title: "strawberry milkshake",
    category: "shake",
    image: "./public/strawberymilkshake.jpg",
    price: 12,
    description:
      "A creamy and refreshing strawberry milkshake made with fresh strawberries and smooth milk, perfect for a sweet and indulgent treat.",
  },
];

const all = document.querySelector(".all");
const breakfast = document.querySelector(".breakfast");
const lunch = document.querySelector(".lunch");
const shake = document.querySelector(".shakes");
const sectionCenter = document.querySelector(".section-center");

all.addEventListener("click", () => {
  sectionCenter.innerHTML = "";
  menu.map((item) => {
    return (sectionCenter.innerHTML += `<article class="menu-item">
          <img
            src=${item.image}
            class="photo"
            alt=${item.title}
            width="200px"
            height="200px"
          />
          <div class="item-info">
            <header>
              <h4>${item.title}</h4>
              <h4 class="price">${"$" + item.price}</h4>
            </header>
            <p class="item-text">
             ${item.description}
            </p>
          </div>
        </article>`);
  });
});

breakfast.addEventListener("click", () => {
  sectionCenter.innerHTML = "";
  const breakfast = menu.filter((item) => item.category == "breakfast");
  breakfast.map((item) => {
    sectionCenter.innerHTML += `<article class="menu-item">
          <img
            src=${item.image}
            class="photo"
            alt=${item.title}
            width="200px"
            height="200px"
          />
          <div class="item-info">
            <header>
              <h4>${item.title}</h4>
              <h4 class="price">${"$" + item.price}</h4>
            </header>
            <p class="item-text">
             ${item.description}
            </p>
          </div>
        </article>`;
  });
});
lunch.addEventListener("click", () => {
  sectionCenter.innerHTML = "";
  const lunch = menu.filter((item) => item.category == "lunch");
  lunch.map((item) => {
    return (sectionCenter.innerHTML += `<article class="menu-item">
            <img
              src=${item.image}
              class="photo"
              alt=${item.title}
              width="200px"
              height="200px"
            />
            <div class="item-info">
              <header>
                <h4>${item.title}</h4>
                <h4 class="price">${"$" + item.price}</h4>
              </header>
              <p class="item-text">
               ${item.description}
              </p>
            </div>
          </article>`);
  });
});
shake.addEventListener("click", () => {
  sectionCenter.innerHTML = "";
  const shake = menu.filter((item) => item.category == "shake");
  shake.map((item) => {
    return (sectionCenter.innerHTML += `<article class="menu-item">
              <img
                src=${item.image}
                class="photo"
                alt=${item.title}
                width="200px"
                height="200px"
              />
              <div class="item-info">
                <header>
                  <h4>${item.title}</h4>
                  <h4 class="price">${"$" + item.price}</h4>
                </header>
                <p class="item-text">
                 ${item.description}
                </p>
              </div>
            </article>`);
  });
});
window.addEventListener("DOMContentLoaded", () => {
  sectionCenter.innerHTML = "";
  menu.map((item) => {
    return (sectionCenter.innerHTML += `<article class="menu-item">
            <img
              src=${item.image}
              class="photo"
              alt=${item.title}
              width="200px"
              height="200px"
            />
            <div class="item-info">
              <header>
                <h4>${item.title}</h4>
                <h4 class="price">${"$" + item.price}</h4>
              </header>
              <p class="item-text">
               ${item.description}
              </p>
            </div>
          </article>`);
  });
});
