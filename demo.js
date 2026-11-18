const demoVideo = document.querySelector('#demo-video');
const demoPlay = document.querySelector('#demo-play');
const demoStatus = document.querySelector('#demo-status');
demoPlay.addEventListener('click', async () => {
  demoStatus.hidden = true;
  demoPlay.hidden = true;
  if (!demoVideo.getAttribute('src') || demoVideo.error) {
    demoVideo.src = demoVideo.dataset.src;
    demoVideo.load();
  }
  try {
    await demoVideo.play();
    demoVideo.focus();
  } catch {
    demoPlay.hidden = false;
    demoStatus.hidden = false;
  }
});
demoVideo.addEventListener('error', () => {
  demoPlay.hidden = false;
  demoStatus.hidden = false;
});
