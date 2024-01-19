import { getModal, hideAllModals } from "./modals.js";
import { hideMenu } from "./menubar.js";
import { setUpGreetings } from "./app-functions/greetings.js";
import { setUpNumberGuess, clearResult } from "./app-functions/number-guess.js";

export const showApp = (event, modals, menuButton, startMenu) => {
  // Hide other components
  hideAllModals(modals);
  hideMenu(menuButton, startMenu);

  // Set up and Show App
  const { targetId, targetModal } = getModal(event);
  setUpApp(targetId, event);
  targetModal.classList.add("main__modal--show");
};

const setUpApp = (targetId, event) => {
  if (targetId === "greetings") {
    setUpGreetings();
  } else if (targetId === "numberGuess") {
    setUpNumberGuess(event);
  }
};

export const hideApp = (modals) => {
  // Reset Number Guess App
  clearResult();

  // Hide Modals
  hideAllModals(modals);
};
