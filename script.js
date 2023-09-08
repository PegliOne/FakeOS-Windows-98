// Show/Hide Menu

const menubarMenu = document.querySelector(".menubar__start-menu");
const menubarButton = document.querySelector(".menubar__button");

menubarButton.addEventListener("click", (event) => {
  menubarMenu.classList.toggle("menubar__start-menu--show");
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
    const targetModal = document.querySelector(`#${targetId}`);
    targetModal.classList.add("main__modal--show");
  });
});

closeButtons.forEach((button) => {
  button.addEventListener("click", (event) => {
    const targetId = event.currentTarget.getAttribute("value");
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
  const timeStr = `${hours}:${minutes}`;
  clock.textContent = timeStr;
}, 1000);
