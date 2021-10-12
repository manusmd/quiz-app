const correctAnswer = false;

const randomQuestion = document.querySelector(".question");
randomQuestion.textContent = "Are you a robot?";

document.querySelector(".true").onclick = function () {
  if (correctAnswer === true) {
    showAnswerIsCorrect();
  } else {
    showAnswerIsIncorrect();
  }

  document.querySelector(".false").onclick = function () {
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
  }
  function showAnswerIsIncorrect() {
    const answer = document.createElement("p");
    answer.textContent = "That's incorrect";
    answer.className = "incorrect";
    document.body.append(answer);
  }
};
