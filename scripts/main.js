const galleryData = {
  iskopi: {
    title: "Iskopi i nivelacija",
    description:
      "Precizno kopanje, nivelacija terena i priprema za manje građevinske projekte.",
    images: [
      { src: "images/welcome.png", alt: "" },
      { src: "images/wooden_house.png", alt: "" },
      { src: "images/excavator_1.png", alt: "" },
    ],
  },
  odvoz: {
    title: "Odvoz šuta",
    description:
      "Transport šuta, zemlje i građevinskog materijala malim kamionom.",
    images: [
      { src: "images/truck_1.png", alt: "" },
      { src: "images/truck_2.png", alt: "" },
    ],
  },
  teren: {
    title: "Terenski radovi",
    description:
      "Radovi u uskim prolazima, dvorištima i na teško pristupačnim mestima.",
    images: [
      { src: "images/excavator_1.png", alt: "" },
      { src: "images/excavator_2.png", alt: "" },
    ],
  },
};

const services = document.querySelector("#services");
const cards = document.querySelectorAll(".service-card");

const gallery = document.querySelector("#gallery");
const gallerySection = document.querySelector(".gallery-section");
const galleryTitle = document.querySelector(".gallery-title");
const galleryDescription = document.querySelector(".gallery-description");
const galleryGrid = document.querySelector("#gallery-grid");

const closeGalleryButton = document.querySelector("#close-gallery");
const heroSection = document.querySelector(".hero");

document.addEventListener("DOMContentLoaded", () => {
  const key = cards[0].dataset.service;
  const data = galleryData[key];

  FillGallery(data);
});

cards.forEach((card) => {
  card.addEventListener("click", () => {
    const key = card.dataset.service;
    const data = galleryData[key];

    FillGallery(data);
  });
});

gallerySection.classList.add("active");

closeGalleryButton.addEventListener("click", () => {
  gallery.style.display = "none";

  heroSection.scrollIntoView({ behavior: "smooth" });
});

function FillGallery(data) {
  galleryTitle.textContent = data.title;
  galleryDescription.textContent = data.description;

  galleryGrid.innerHTML = data.images
    .map(
      (img) =>
        `<div class="gallery-item"><img src="${img.src}" alt="${img.alt}" loading="lazy"></div>`
    )
    .join("");

  gallery.style.display = "block";

  gallerySection.scrollIntoView({ behavior: "smooth" });
}
