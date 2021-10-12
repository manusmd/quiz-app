const correctAnswer = false;

const randomQuestion = document.querySelector(".question");
randomQuestion.textContent = "Are you a robot?";

const yesButton = document.querySelector(".yes");
yesButton.onclick = function () {
  if (correctAnswer === true) {
    showAnswerIsCorrect();
  } else {
    showAnswerIsIncorrect();
  }
};

const noButton = document.querySelector(".no");
noButton.onclick = function () {
  if (correctAnswer === false) {
    showAnswerIsCorrect();
  } else {
    showAnswerIsIncorrect();
  }
};

function showAnswerIsCorrect() {
  const answer = document.createElement("p");
  answer.textContent = "That's correct";
  answer.className = "correct";
  document.body.append(answer);
  disableButtons();
}
function showAnswerIsIncorrect() {
  const answer = document.createElement("p");
  answer.textContent = "That's incorrect";
  answer.className = "incorrect";
  document.body.append(answer);
  disableButtons();
}

function disableButtons() {
  yesButton.disabled = true;
  noButton.disabled = true;
}
