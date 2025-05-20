const dialog = document.getElementById("dialog");
const footer = document.getElementById("footer");

footer.addEventListener("click", (event) => {
  dialog.showModal();
});

dialog.addEventListener("click", (event) => {
  const rect = dialog.getBoundingClientRect();
  const clickedOutside =
    event.clientX < rect.left ||
    event.clientX > rect.right ||
    event.clientY < rect.top ||
    event.clientY > rect.bottom;

  if (clickedOutside) {
    dialog.close();
  }
});

dialog.addEventListener("blur", () => {
  dialog.close();
});
