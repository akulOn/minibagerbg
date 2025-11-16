const galleryData = {
  iskopi: {
    title: "Iskopi i nivelacija",
    description:
      "Precizno kopanje, nivelacija terena i priprema za manje građevinske projekte.",
    images: [
      "images/welcome.png",
      "images/wooden_house.png",
      "images/excavator_1.png",
    ],
  },
  odvoz: {
    title: "Odvoz šuta",
    description:
      "Transport šuta, zemlje i građevinskog materijala malim kamionom.",
    images: ["images/truck_1.png", "images/truck_2.png"],
  },
  teren: {
    title: "Terenski radovi",
    description:
      "Radovi u uskim prolazima, dvorištima i na teško pristupačnim mestima.",
    images: ["images/excavator_1.png", "images/excavator_2.png"],
  },
};

const services = document.querySelector("#services");
const cards = document.querySelectorAll(".service-card");
const gallery = document.querySelector("#gallery");
const gallerySection = document.querySelector(".gallery-section");
const galleryTitle = document.querySelector(".gallery-title");
const galleryDescription = document.querySelector(".gallery-description");
const galleryGrid = document.querySelector("#gallery-grid");

cards.forEach((card) => {
  card.addEventListener("click", () => {
    const key = card.dataset.service;
    const data = galleryData[key];

    galleryTitle.textContent = data.title;
    galleryDescription.textContent = data.description;

    galleryGrid.innerHTML = data.images
      .map((img) => `<div class="gallery-item"><img src="${img}" alt=""></div>`)
      .join("");

    gallery.style.display = "block";

    gallerySection.scrollIntoView({ behavior: "smooth" });
  });
});

gallerySection.classList.add("active");
