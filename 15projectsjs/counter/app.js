const counter = document.querySelector(".counter");
const decreaseButton = document.querySelector(".decrease");
const resetButton = document.querySelector(".reset");
const increaseButton = document.querySelector(".increase");

function getCounterValue() {
  return Number(counter.innerHTML);
}

function colorNumber(value) {
  if (value > 0) {
    counter.style.color = "green";
  } else if (value < 0) {
    counter.style.color = "red";
  } else {
    counter.style.color = "black";
  }
}

function increase() {
  const value = getCounterValue();

  counter.innerHTML = value + 1;
  colorNumber(Number(counter.innerHTML)); // Güncellenmiş değeri kontrol et
}

function decrease() {
  const value = getCounterValue();

  counter.innerHTML = value - 1;
  colorNumber(Number(counter.innerHTML)); // Güncellenmiş değeri kontrol et
}
increaseButton.addEventListener("click", increase);
decreaseButton.addEventListener("click", decrease);
resetButton.addEventListener("click", () => {
  counter.innerHTML = 0;
  colorNumber(0);
});
document.addEventListener("DOMContentLoaded", () => {
  counter.innerHTML = 0;
});
