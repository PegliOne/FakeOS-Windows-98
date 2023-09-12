export const showGreeting = () => {
  const greetingsText = document.querySelector("#greetingsText");
  const greeting = selectGreeting();
  greetingsText.textContent = greeting;
};

const selectGreeting = () => {
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
  return greeting;
};
