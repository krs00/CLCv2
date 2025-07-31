// FOR PARALLAX SCROLLING

window.addEventListener("scroll", () => {
  const img = document.getElementById("parallax-img");
  const container = document.querySelector(".section4-container");
  if (!img || !container) return;

  const containerRect = container.getBoundingClientRect();
  const speed = 0.1;

  // Only apply effect when the section is in view
  if (containerRect.top < window.innerHeight && containerRect.bottom > 0) {
    const offset = containerRect.top * speed;
    img.style.transform = `translateY(${offset}px)`;
  }
});

// FOR HOMEPAGE HERO SLIDER

document.addEventListener("DOMContentLoaded", () => {
  const images = document.querySelectorAll(".hero-image");
  let current = 0;

  function crossfadeNext() {
    const previous = current;
    current = (current + 1) % images.length;

    // Fade out the current
    images[previous].classList.remove("fade-in");
    images[previous].classList.add("fade-out");

    // Fade in the next
    images[current].classList.remove("fade-out");
    images[current].classList.add("fade-in");

    // Clean up after transition
    setTimeout(() => {
      images[previous].classList.remove("fade-out");
    }, 3000); // Matches your CSS transition duration
  }

  // Initialize
  images[current].classList.add("fade-in");

  setInterval(crossfadeNext, 11000);
});
