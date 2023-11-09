export const setUpNumberGuess = (event) => {
  event.preventDefault();
  // Get Elements
  const guessCountSpan = document.querySelector("#guessCountSpan");
  const numberForm = document.querySelector("#numberForm");
  const answerPara = document.querySelector("#answerPara");
  const submitButton = document.querySelector("#submitButton");

  // Set Up Numerical Variables
  let correctNumber = Math.floor(Math.random() * 100 + 1);
  let remainingGuessCount = 6;

  // Update Display for New Game
  numberForm.reset();
  clearResult();
  answerPara.textContent = "";
  guessCountSpan.textContent = remainingGuessCount;

  // Update Submit Button
  submitButton.removeEventListener("click", setUpNumberGuess);
  submitButton.textContent = "Submit";

  numberForm.addEventListener("submit", function runGame(event) {
    console.log("Running Game");
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

const runGame = (event) => {
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
};

const checkGuess = (correctNumber, isLastGuess) => {
  const numberInput = document.querySelector("#numberInput");
  let guess = Number(numberInput.value);
  let message = "";

  guessResult.classList.remove("modal__para--success", "modal__para--danger");

  if (guess === correctNumber) {
    guessResult.textContent = "Correct, You Win!";
    guessResult.classList.add("modal__para--success");
    endGame();
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
    endGame();
  }

  guessResult.textContent = message;
  guessResult.classList.add("modal__para--danger");
  return false;
};

const endGame = () => {
  submitButton.textContent = "Restart Game";
  numberForm.removeEventListener("submit", runGame);
  console.log("Hello there");
  submitButton.addEventListener("click", setUpNumberGuess);
};

export const clearResult = () => {
  const guessResult = document.querySelector("#guessResult");
  guessResult.textContent = "";
};
