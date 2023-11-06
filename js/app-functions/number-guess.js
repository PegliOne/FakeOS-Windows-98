// TODO: Refactor to select and use the form element. Clear the form when number guess is re-opened

export const setUpNumberGuess = () => {
  const guessCountSpan = document.querySelector("#guessCountSpan");
  const numberForm = document.querySelector("#numberForm");
  const answerPara = document.querySelector("#answerPara");

  let correctNumber = Math.floor(Math.random() * 100 + 1);
  let remainingGuessCount = 6;

  numberForm.reset();
  answerPara.textContent = "";
  guessCountSpan.textContent = remainingGuessCount;

  numberForm.addEventListener("submit", (event) => {
    event.preventDefault();
    const isLastGuess = remainingGuessCount === 1;
    if (remainingGuessCount > 0) {
      const isCorrectGuess = checkGuess(correctNumber, isLastGuess);
      if (isCorrectGuess) {
        // stops user guessing after they've already gotten the correct answer
        remainingGuessCount = 0;
      } else {
        remainingGuessCount--;
        guessCountSpan.textContent = remainingGuessCount;
      }
    }
  });
};

const checkGuess = (correctNumber, isLastGuess) => {
  const numberInput = document.querySelector("#numberInput");
  let guess = Number(numberInput.value);
  let message = "";

  guessResult.classList.remove("modal__para--success", "modal__para--danger");

  if (guess === correctNumber) {
    guessResult.textContent = "Correct, You Win!";
    guessResult.classList.add("modal__para--success");
    return true;
  }

  if (guess > correctNumber) {
    message = "Too high.";
  } else {
    message = "Too low.";
  }

  if (isLastGuess) {
    message += " Game Over!";
    answerPara.textContent = `The correct number is ${correctNumber}.`;
  }

  guessResult.textContent = message;
  guessResult.classList.add("modal__para--danger");
  return false;
};

export const clearResult = () => {
  const guessResult = document.querySelector("#guessResult");
  guessResult.textContent = "";
};
