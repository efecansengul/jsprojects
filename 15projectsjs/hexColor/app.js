//Elemanları sec
const button = document.querySelector(".color-change");
const simplebutton = document.querySelector(".simple-btn");
const hexbutton = document.querySelector(".hex-btn");
const colorname = document.querySelector(".color-name");

// Basit renk modundaki renkler
const simpleArray = ["#e5fcc2", "#9de0ad", "#45ada8", "#547980", "#594f4f"];

// Renk değiştirme modunu güncelle
function setMode(isSimple) {
  localStorage.setItem("simple", isSimple);
  // Butonlara sınıf ekleyip kaldır
  simplebutton.classList.toggle("background", isSimple); // Eğer Simple moddaysa ekle
  hexbutton.classList.toggle("background", !isSimple); // Eğer Hex moddaysa ekle
}

//Rastgele hex kodu olustur
function generateRandomHex() {
  let randomHex = "#";
  const colorArray = "0123456789ABCDEF".split(""); // Tüm HEX karakterleri
  for (let i = 0; i < 6; i++) {
    randomHex += colorArray[Math.floor(Math.random() * 16)];
  }
  return randomHex;
}

//Arkaplan rengini güncelle
function updateBackgroundColor(color) {
  colorname.textContent = `Background Color:${color}`;

  document.body.style.backgroundColor = color;
}

// Simple butonuna tıklama olayı
simplebutton.addEventListener("click", () => {
  setMode(true);
});

// Hex butonuna tıklama olayı
hexbutton.addEventListener("click", () => {
  setMode(false);
});

//ana butona tıklama olayı
button.addEventListener("click", () => {
  let isSimple = localStorage.getItem("simple") === "true";
  if (isSimple) {
    //simple mod
    const randomColor =
      simpleArray[Math.floor(Math.random() * simpleArray.length)];
    updateBackgroundColor(randomColor);
  } else {
    //Hex mod
    const randomColor = generateRandomHex();
    updateBackgroundColor(randomColor);
  }
});
// İlk yüklemede doğru modu ayarla
document.addEventListener("DOMContentLoaded", () => {
  const isSimple = localStorage.getItem("simple") === "true";
  setMode(isSimple ?? true); // Varsayılan olarak "simple" modu seç
});
