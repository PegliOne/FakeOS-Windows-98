export const setUpNumberGuess = () => {
  const numberSubmit = document.querySelector("#numberSubmit");
  let correctNumber = Math.floor(Math.random() * 100 + 1);

  numberSubmit.addEventListener("click", (event) => {
    event.preventDefault();
    checkGuess(correctNumber);
  });
};

const checkGuess = (correctNumber) => {
  const numberInput = document.querySelector("#numberInput");
  let guess = Number(numberInput.value);

  guessResult.classList.remove("modal__para--success", "modal__para--danger");

  if (guess === correctNumber) {
    guessResult.textContent = "Correct!";
    guessResult.classList.add("modal__para--success");
  } else if (guess > correctNumber) {
    guessResult.textContent = "Too high!";
    guessResult.classList.add("modal__para--danger");
  } else {
    guessResult.textContent = "Too low!";
    guessResult.classList.add("modal__para--danger");
  }
};

export const clearResult = () => {
  const guessResult = document.querySelector("#guessResult");
  guessResult.textContent = "";
};
