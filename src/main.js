
// FOR PARALLAX SCROLLING

window.addEventListener('scroll', () => {
  const img = document.getElementById('parallax-img');
  const container = document.querySelector('.section4-container');
  if (!img || !container) return;

  const containerRect = container.getBoundingClientRect();
  const speed = 0.08;

  // Only apply effect when the section is in view
  if (containerRect.top < window.innerHeight && containerRect.bottom > 0) {
    const offset = containerRect.top * speed;
    img.style.transform = `translateY(${offset}px)`;
  }
});
