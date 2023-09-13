export const showGreeting = () => {
  const greetingsText = document.querySelector("#greetingsText");
  const greeting = selectGreeting();
  greetingsText.textContent = greeting;
};

const selectGreeting = () => {
  const greetings = ["Hello There!", "Bonjour!", "Hola!", "Hey, what's up?"];
  let index = Math.floor(Math.random() * greetings.length);
  return greetings[index];
};
