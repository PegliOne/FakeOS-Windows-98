const guessResult = document.querySelector("#guessResult");

// Show/Hide Menu

const menubarMenu = document.querySelector(".menubar__start-menu");
const menubarButton = document.querySelector(".menubar__button");

menubarButton.addEventListener("click", (event) => {
  menubarMenu.classList.toggle("menubar__start-menu--show");
  menubarButton.classList.toggle("menubar__button--clicked");
});

// Show/Hide Apps

const appButtons = document.querySelectorAll(".main__buttons button");
const modals = document.querySelectorAll(".main__modal");
const closeButtons = document.querySelectorAll(".modal__close-button");

appButtons.forEach((button) => {
  button.addEventListener("click", (event) => {
    modals.forEach((modal) => {
      modal.classList.remove("main__modal--show");
    });
    const targetId = event.currentTarget.getAttribute("value");
    if (targetId === "greetings") {
      showGreeting();
    } else if (targetId === "numberGuess") {
      let correctNumber = Math.floor(Math.random() * 10);
      setUpNumberGuess(correctNumber);
    }
    const targetModal = document.querySelector(`#${targetId}`);
    targetModal.classList.add("main__modal--show");
  });
});

closeButtons.forEach((button) => {
  button.addEventListener("click", (event) => {
    const targetId = event.currentTarget.getAttribute("value");
    if (targetId === "numberGuess") {
      guessResult.textContent = "";
    }
    const targetModal = document.querySelector(`#${targetId}`);
    targetModal.classList.remove("main__modal--show");
  });
});

// Time

const clock = document.querySelector(".menubar__clock");

setInterval(() => {
  const time = new Date();
  const hours = time.getHours();
  const minutes =
    time.getMinutes() < 10 ? `0${time.getMinutes()}` : time.getMinutes();
  const amOrPM = hours < 12 ? "AM" : "PM";
  const timeStr = `${hours}:${minutes} ${amOrPM}`;
  clock.textContent = timeStr;
}, 1000);

// Greetings App

const greetingsText = document.querySelector("#greetingsText");

const showGreeting = () => {
  let randomNum = Math.random();
  let greeting = "";

  if (randomNum < 0.25) {
    greeting = "Hello There!";
  } else if (randomNum < 0.5) {
    greeting = "Bonjour!";
  } else if (randomNum < 0.75) {
    greeting = "Hola!";
  } else {
    greeting = "Hey, what's up?";
  }

  greetingsText.textContent = greeting;
};

// Number Guess App

const numberInput = document.querySelector("#numberInput");
const numberSubmit = document.querySelector("#numberSubmit");

const setUpNumberGuess = (correctNumber) => {
  numberSubmit.addEventListener("click", (event) => {
    event.preventDefault();
    let guess = Number(numberInput.value);

    if (guess === correctNumber) {
      guessResult.textContent = "Correct!";
    } else {
      guessResult.textContent = "Keep guessing!";
    }
  });
};
