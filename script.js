// Imports

import { showApp, hideApp } from "./js/apps.js";
import { toggleMenu, getTime } from "./js/menubar.js";

// Elements

// App Elements

const appButtons = document.querySelectorAll(".main__buttons button");
const modals = document.querySelectorAll(".main__modal");
const closeButtons = document.querySelectorAll(".modal__close-button");

// Menu Elements

const startMenu = document.querySelector(".menubar__start-menu");
const menuButton = document.querySelector(".menubar__button");
const clock = document.querySelector(".menubar__clock");

// Functionality

// Menu Functionality

menuButton.addEventListener("click", () => {
  toggleMenu(menuButton, startMenu, modals);
});

setInterval(() => {
  const timeStr = getTime();
  clock.textContent = timeStr;
}, 1000);

// Modal Functionality

appButtons.forEach((button) => {
  button.addEventListener("click", (event) => {
    showApp(event, modals, menuButton, startMenu);
  });
});

closeButtons.forEach((button) => {
  button.addEventListener("click", (event) => {
    hideApp(modals);
  });
});
