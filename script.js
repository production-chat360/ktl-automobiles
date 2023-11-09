let currentSlide = 0;

function showSlide(n) {
  const slides = document.getElementsByClassName("carousel-slide");
  if (n >= slides.length) {
    currentSlide = 0;
  } else if (n < 0) {
    currentSlide = slides.length - 1;
  } else {
    currentSlide = n;
  }

  for (let i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }

  slides[currentSlide].style.display = "block";
}

function changeSlide(n) {
  showSlide((currentSlide += n));
}

// Auto slide change (optional)
setInterval(function () {
  changeSlide(1);
}, 3000);

// Show the first slide initially
showSlide(currentSlide);
