const correctAnswer = true;

const randomQuestion = document.querySelector(".question");
randomQuestion.textContent = "Are you a robot?";

document.querySelector(".true").onclick = function () {
  if (correctAnswer === true) {
    const answer = document.createElement("p");
    answer.textContent = "That's correct";
    answer.className = "correct";
    document.body.append(answer);
  } else {
    const answer = document.createElement("p");
    answer.textContent = "That's incorrect";
    answer.className = "incorrect";
    document.body.append(answer);
  }
};

document.querySelector(".false").onclick = function () {
  if (correctAnswer === false) {
    const answer = document.createElement("p");
    answer.textContent = "That's correct";
    answer.className = "correct";
    document.body.append(answer);
  } else {
    const answer = document.createElement("p");
    answer.textContent = "That's incorrect";
    answer.className = "incorrect";
    document.body.append(answer);
  }
};
