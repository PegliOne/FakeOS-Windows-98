export const getModal = (event) => {
  const targetId = event.currentTarget.getAttribute("value");
  const targetModal = document.querySelector(`#${targetId}`);
  const overlay = document.querySelector("#overlay");
  overlay.classList.add("overlay--show");
  return { targetId, targetModal };
};

export const hideAllModals = (modals) => {
  modals.forEach((modal) => {
    modal.classList.remove("main__modal--show");
  });
  const overlay = document.querySelector("#overlay");
  overlay.classList.remove("overlay--show");
};
