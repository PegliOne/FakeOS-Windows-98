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
  const amOrPM = time.getHours() < 12 ? " AM" : " PM";
  return (
    time.toLocaleTimeString("en-US", {
      hour: "2-digit",
      minute: "2-digit",
      hour12: false,
    }) + amOrPM
  );
};
