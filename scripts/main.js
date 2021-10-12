const correctAnswer = true;

const randomQuestion = document.querySelector(".question");
randomQuestion.textContent = "Are you a robot?";

document.querySelector(".true").onclick = function () {
  if (correctAnswer === true) {
    alert("That's correct!");
  } else {
    alert("That's incorrect!");
  }
};

document.querySelector(".false").onclick = function () {
  if (correctAnswer === false) {
    alert("That's correct!");
  } else {
    alert("That's incorrect!");
  }
};
