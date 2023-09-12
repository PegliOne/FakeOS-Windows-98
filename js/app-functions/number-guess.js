export const setUpNumberGuess = () => {
  const numberSubmit = document.querySelector("#numberSubmit");
  let correctNumber = Math.floor(Math.random() * 10);

  numberSubmit.addEventListener("click", (event) => {
    event.preventDefault();
    checkGuess(correctNumber);
  });
};

const checkGuess = (correctNumber) => {
  const numberInput = document.querySelector("#numberInput");
  let guess = Number(numberInput.value);

  if (guess === correctNumber) {
    guessResult.textContent = "Correct!";
  } else {
    guessResult.textContent = "Keep guessing!";
  }
};

export const clearResult = () => {
  const guessResult = document.querySelector("#guessResult");
  guessResult.textContent = "";
};
