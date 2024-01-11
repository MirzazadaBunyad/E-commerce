let slideIndex = 1;
showSlides(slideIndex);

setInterval(() => showSlides((slideIndex += 1)), 3000);

function plusSlide(n) {
  showSlides((slideIndex += n));
}

function currSlide(n) {
  showSlides((slideIndex = n));
}

function showSlides(n) {
  const slides = document.querySelectorAll(".slider-item");
  const dots = document.querySelectorAll(".slider-dot");

  slideIndex = n > slides.length ? 1 : n < 1 ? slides.length : n;

  slides.forEach((slide) => (slide.style.display = "none"));
  dots.forEach((dot) => dot.classList.remove("active"));

  slides[slideIndex - 1].style.display = "flex";
  dots[slideIndex - 1].classList.add("active");
}
