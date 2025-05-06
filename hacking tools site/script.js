// Play/Pause Button for Lofi Music
const musicButton = document.createElement('button');
musicButton.textContent = "Pause Music";
document.body.appendChild(musicButton);

const audioPlayer = document.getElementById('lofi-audio');

musicButton.addEventListener('click', () => {
  if (audioPlayer.paused) {
    audioPlayer.play();
    musicButton.textContent = "Pause Music";
  } else {
    audioPlayer.pause();
    musicButton.textContent = "Play Music";
  }
});

