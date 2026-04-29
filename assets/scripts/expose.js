// expose.js

window.addEventListener('DOMContentLoaded', init);

function init() {
  // changes the image and audio source based on the selected horn
  const selectElem = document.getElementById('horn-select');
  const audioElement = document.querySelector('audio');
  const imgElement = document.querySelector('#expose img');
  selectElem.addEventListener('change', (event) => {
    if (event.target.value === 'air-horn') {
      imgElement.src = "assets/images/air-horn.svg";
      audioElement.src = "assets/audio/air-horn.mp3";
    } else if (event.target.value === 'car-horn') {
      imgElement.src = "assets/images/car-horn.svg";
      audioElement.src = "assets/audio/car-horn.mp3";
    } else if (event.target.value === 'party-horn') {
      imgElement.src = "assets/images/party-horn.svg";
      audioElement.src = "assets/audio/party-horn.mp3";
    }
  })

  // plays the audio when the button is clicked
  const btn = document.querySelector('button');
  const confetti = new JSConfetti();
  btn.addEventListener('click', () => {
    audioElement.play();
    if (selectElem.value === 'party-horn') {
      confetti.addConfetti();
    }
  })

  // controls the volume of the audio and changes the volume icon
  const slider = document.querySelector('input[type="range"]');
  const audioImg = document.querySelector('#volume-controls img')
  slider.addEventListener('input', (event) => {
    audioElement.volume = slider.value * 0.01;
    audioElement.muted = slider.value == 0;

    if (slider.value == 0) {
      audioImg.src = "assets/icons/volume-level-0.svg";
    } else if (slider.value > 0 && slider.value < 33) {
      audioImg.src = "assets/icons/volume-level-1.svg";
    } else if (slider.value >= 33 && slider.value < 67) {
      audioImg.src = "assets/icons/volume-level-2.svg";
    } else {
      audioImg.src = "assets/icons/volume-level-3.svg";
    }
  });

}