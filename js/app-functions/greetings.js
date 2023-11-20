export const setUpGreetings = () => {
  const greetingsButton = document.querySelector("#greetingsButton");
  greetingsButton.addEventListener("click", showGreeting);
  showGreeting();
}

const showGreeting = () => {
  const greetingsText = document.querySelector("#greetingsText");
  const greeting = selectGreeting();
  greetingsText.textContent = greeting;
};

const selectGreeting = () => {
  const greetings = [
    "Hello there!",
    "Bonjour!",
    "¡Hola!",
    "Guten Tag!",
    "Hey, how are you going?",
    "G'day, mate!",
    "Hi, what's up?",
    "Howdy there, partner!",
  ];
  let index = Math.floor(Math.random() * greetings.length);
  return greetings[index];
};
