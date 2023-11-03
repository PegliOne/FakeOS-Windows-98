// TODO: Refactor to select and use the form element. Clear the form when number guess is re-opened

export const setUpNumberGuess = () => {
  const guessCountSpan = document.querySelector("#guessCountSpan");
  const numberSubmit = document.querySelector("#numberSubmit");

  let correctNumber = Math.floor(Math.random() * 100 + 1);
  let remainingGuessCount = 6;

  guessCountSpan.textContent = remainingGuessCount;

  numberSubmit.addEventListener("click", (event) => {
    event.preventDefault();
    const isLastGuess = remainingGuessCount === 1;
    if (remainingGuessCount > 0) {
      checkGuess(correctNumber, isLastGuess);
      remainingGuessCount--;
      guessCountSpan.textContent = remainingGuessCount;
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
    return;
  }

  if (guess > correctNumber) {
    message = "Too high.";
  } else {
    message = "Too low.";
  }

  if (isLastGuess) {
    message += " Game Over!";
  }

  guessResult.textContent = message;
  guessResult.classList.add("modal__para--danger");
};

export const clearResult = () => {
  const guessResult = document.querySelector("#guessResult");
  guessResult.textContent = "";
};
