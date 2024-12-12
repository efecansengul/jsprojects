const btns = document.querySelectorAll("button");
let counter = 0;
const personalArr = [
  {
    name: "Peter",
    job: "intern",
    description:
      "I am an enthusiastic intern with a strong passion for web development, eager to gain hands-on experience in a dynamic environment. With a background in frontend technologies like JavaScript, HTML, and CSS, I am excited to contribute to a team's success while continuing to improve my skills. I am adaptable, quick to learn, and ready to take on new challenges in the tech industry.",
  },
  {
    name: "John",
    job: "boss",
    description: "I am the boss the company of web talent Arj.",
  },
  {
    name: "Susan",
    job: "web developer",
    description: "I am interesting in developer since 2015",
  },
];

function displayPerson() {
  console.log(counter);
  const person = personalArr[counter];
  document.querySelector(".name").textContent = person.name;
  document.querySelector(".job").textContent = person.job;
  document.querySelector(".description").textContent = person.description;
}
displayPerson();
btns.forEach((button) => {
  button.addEventListener("click", () => {
    if (button.innerText == "Back") {
      if (counter > 0) {
        counter--;
      } else {
        counter = personalArr.length - 1;
      }
      displayPerson();
    } else if (button.textContent.trim() === "Forward") {
      if (counter < personalArr.length - 1) {
        counter++; // Sonraki kişiye git
      } else {
        counter = 0; // Array sonuna geldiğinde ilk elemana dön
      }
      displayPerson();
    } else if (button.textContent.trim() === "Suprise Me") {
      const randomIndex = Math.floor(Math.random() * personalArr.length);
      counter = randomIndex;
      displayPerson();
    }
  });
});
