const dialog = document.getElementById("dialog");
const contact = document.getElementById("contact");

contact.addEventListener("click", (event) => {
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

const footer = document.getElementById("footer");
const observer = new window.IntersectionObserver(
  ([entry]) => {
    if (entry.isIntersecting) {
      contact.style.visibility = "hidden";
      contact.style.opacity = "0";
      return;
    }
    contact.style.visibility = "visible";
    contact.style.opacity = "1";
  },
  {
    root: null,
    threshold: 0.1, // set offset 0.1 means trigger if at least 10% of element in viewport
  }
);

observer.observe(footer);
