export const getModal = (event) => {
  const targetId = event.currentTarget.getAttribute("value");
  const targetModal = document.querySelector(`#${targetId}`);
  return { targetId, targetModal };
};

export const hideAllModals = (modals) => {
  modals.forEach((modal) => {
    modal.classList.remove("main__modal--show");
  });
};
