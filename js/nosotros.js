
  const playButton1 = document.getElementById('play-button-1');
  const audio1 = document.getElementById('audio-1');
  const playButton2 = document.getElementById('play-button-2');
  const audio2 = document.getElementById('audio-2');
  const playButton3 = document.getElementById('play-button-3');
  const audio3 = document.getElementById('audio-3');
  const playButton4 = document.getElementById('play-button-4');
  const audio4 = document.getElementById('audio-4');
  const playButton5 = document.getElementById('play-button-5');
  const audio5 = document.getElementById('audio-5');


  playButton1.addEventListener('click', () => {
    if (audio1.paused) {
      audio1.play();
    } else {
      audio1.pause();
    }
  });
  playButton2.addEventListener('click', () => {
    if (audio2.paused) {
      audio2.play();
    } else {
      audio2.pause();
    }
  });
  playButton3.addEventListener('click', () => {
    if (audio3.paused) {
      audio3.play();
    } else {
      audio3.pause();
    }
  });
  playButton4.addEventListener('click', () => {
    if (audio4.paused) {
      audio4.play();
    } else {
      audio4.pause();
    }
  });
  playButton5.addEventListener('click', () => {
    if (audio5.paused) {
      audio5.play();
    } else {
      audio5.pause();
    }
});