const questionsBlock = document.querySelectorAll(".questionContainer");

questionsBlock.forEach((question) => {
  const plusIcon =
    question.firstElementChild.firstElementChild.nextElementSibling;
  const negativeIcon =
    question.firstElementChild.firstElementChild.nextElementSibling
      .nextElementSibling;

  plusIcon.addEventListener("click", () => {
    // Önce diğer açık soruları kapat
    questionsBlock.forEach((otherQuestion) => {
      if (otherQuestion !== question) {
        otherQuestion.classList.remove("showText");
      }
    });

    // Şu anki soruyu aç
    question.classList.add("showText");
  });
  negativeIcon.addEventListener("click", () => {
    question.classList.remove("showText");
  });
});
