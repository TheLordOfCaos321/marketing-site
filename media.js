const projectButtons = [...document.querySelectorAll('[data-project]')];
const projectSlides = [...document.querySelectorAll('.platform-slide')];
projectButtons.forEach((button, index) => button.addEventListener('click', () => {
  projectButtons.forEach((item, i) => item.setAttribute('aria-pressed', String(i === index)));
  projectSlides.forEach((item, i) => { item.hidden = i !== index; });
}));
const carousel = document.querySelector('.photo-carousel');
const pauseButton = document.querySelector('#carousel-pause');
const reducedMotion = matchMedia('(prefers-reduced-motion: reduce)');
let paused = reducedMotion.matches, hovering = false, focused = false, lastTime = 0, position = 0;
function setPaused(value) { paused = value; pauseButton.setAttribute('aria-pressed', String(value)); }
setPaused(paused);
pauseButton.addEventListener('click', () => setPaused(!paused));
carousel.addEventListener('pointerenter', () => { hovering = true; });
carousel.addEventListener('pointerleave', () => { hovering = false; });
carousel.addEventListener('focusin', () => { focused = true; });
carousel.addEventListener('focusout', () => { focused = false; });
carousel.addEventListener('pointerdown', () => setPaused(true));
carousel.addEventListener('keydown', () => setPaused(true));
reducedMotion.addEventListener('change', () => setPaused(reducedMotion.matches));
function animateCarousel(time) {
  const elapsed = Math.min(time - (lastTime || time), 50); lastTime = time;
  if (!paused && !hovering && !focused && !document.hidden && !reducedMotion.matches) {
    position += elapsed * .025;
    const cycle = carousel.querySelector('.carousel-set').getBoundingClientRect().width;
    if (cycle && position >= cycle) position -= cycle;
    carousel.scrollLeft = position;
  } else position = carousel.scrollLeft;
  requestAnimationFrame(animateCarousel);
}
requestAnimationFrame(animateCarousel);
document.querySelectorAll('video').forEach(video => video.addEventListener('play', () => {
  document.querySelectorAll('video').forEach(other => { if (other !== video) other.pause(); });
}));
