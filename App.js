const btns = document.querySelectorAll("[data-target]");
const close_modals = document.querySelectorAll(".close-modal");
const overlay = document.getElementById("overlay");

btns.forEach((btn) => {
  btn.addEventListener("click", () => {
    const target = document.querySelector(btn.dataset.target);
    if (target) {
      target.classList.add("active");
      overlay.classList.add("active");
    }
  });
});

close_modals.forEach((btn) => {
  btn.addEventListener("click", () => {
    const modal = btn.closest(".modal");
    modal.classList.remove("active");
    overlay.classList.remove("active");
  });
});

window.onclick = (event) => {
  if (event.target == overlay) {
    const modals = document.querySelectorAll(".modal");
    modals.forEach((modal) => modal.classList.remove("active"));
    overlay.classList.remove("active");
  }
};

// Lutron
// Function to handle slideshow
function handleSlideshow(slideshow) {
  const slides = slideshow.querySelectorAll(".slide");
  let slideIndex = 0;

  function showSlide(n) {
    slides.forEach((slide) => (slide.style.display = "none"));
    slides[n].style.display = "block";
  }

  function nextSlide() {
    slideIndex++;
    if (slideIndex >= slides.length) {
      slideIndex = 0;
    }
    showSlide(slideIndex);
  }

  function prevSlide() {
    slideIndex--;
    if (slideIndex < 0) {
      slideIndex = slides.length - 1;
    }
    showSlide(slideIndex);
  }

  showSlide(slideIndex);

  const prevBtn = slideshow.querySelector(".prev");
  const nextBtn = slideshow.querySelector(".next");

  prevBtn.addEventListener("click", prevSlide);
  nextBtn.addEventListener("click", nextSlide);
}

// Find all slideshows and handle each one
const slideshows = document.querySelectorAll(".slideshow-container");
slideshows.forEach(handleSlideshow);

