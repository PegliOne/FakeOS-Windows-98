import { hideAllModals } from "./modals.js";

export const toggleMenu = (button, menu, modals) => {
  hideAllModals(modals);
  menu.classList.toggle("menubar__start-menu--show");
  button.classList.toggle("menubar__button--clicked");
};

export const hideMenu = (button, menu) => {
  menu.classList.remove("menubar__start-menu--show");
  button.classList.remove("menubar__button--clicked");
};

export const getTime = () => {
  const time = new Date();
  const hours = time.getHours();
  const minutes =
    time.getMinutes() < 10 ? `0${time.getMinutes()}` : time.getMinutes();
  const amOrPM = hours < 12 ? "AM" : "PM";
  return `${hours}:${minutes} ${amOrPM}`;
};
