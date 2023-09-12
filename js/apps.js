import { getModal, hideAllModals } from "./modals.js";
import { hideMenu } from "./menubar.js";
import { showGreeting } from "./app-functions/greetings.js";
import { setUpNumberGuess, clearResult } from "./app-functions/number-guess.js";

export const showApp = (event, modals, menuButton, startMenu) => {
  // Hide other components
  hideAllModals(modals);
  hideMenu(menuButton, startMenu);

  // Set up and Show App
  const { targetId, targetModal } = getModal(event);
  setUpApp(targetId);
  targetModal.classList.add("main__modal--show");
};

const setUpApp = (targetId) => {
  if (targetId === "greetings") {
    showGreeting();
  } else if (targetId === "numberGuess") {
    setUpNumberGuess();
  }
};

export const hideApp = (event) => {
  // Reset Number Guess App
  clearResult();

  // Hide App Model
  const { targetModal } = getModal(event);
  targetModal.classList.remove("main__modal--show");
};
