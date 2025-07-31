// FOR PARALLAX SCROLLING
 
window.addEventListener("scroll", () => {
  const img = document.getElementById("parallax-img");
  const container = document.querySelector(".section4-container");
  if (!img || !container) return;

  const containerRect = container.getBoundingClientRect();
  const speed = 0.1;

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


    images[previous].classList.remove("fade-in");
    images[previous].classList.add("fade-out");

    
    images[current].classList.remove("fade-out");
    images[current].classList.add("fade-in");

  
    setTimeout(() => {
      images[previous].classList.remove("fade-out");
    }, 3000); 
  }

  images[current].classList.add("fade-in");

  setInterval(crossfadeNext, 11000);
});
