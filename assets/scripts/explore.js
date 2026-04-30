// explore.js

window.addEventListener('DOMContentLoaded', init);

function init() {
  // Get DOM elements
  const voiceSelect = document.getElementById('voice-select');
  const textToSpeak = document.getElementById('text-to-speak');
  const button = document.querySelector('button');
  const faceImg = document.querySelector('img');

  // Initialize the speech synthesis
  const synth = window.speechSynthesis;

  // Load voices when available
  // Note: Voices may load asynchronously, so we listen for the event
  synth.onvoiceschanged = loadVoices;
  loadVoices(); // Also call immediately in case voices are already loaded

  function loadVoices() {
    const voices = synth.getVoices();
    
    // Clear existing options (except the first one)
    voiceSelect.innerHTML = '<option value="select" disabled selected>Select Voice:</option>';
    
    // Populate the dropdown with available voices
    voices.forEach((voice, index) => {
      const option = document.createElement('option');
      option.value = index;
      option.textContent = `${voice.name} (${voice.lang})`;
      voiceSelect.appendChild(option);
    });
  }

  // Handle the button click
  button.addEventListener('click', () => {
    // Get the text and selected voice
    const text = textToSpeak.value;
    const voiceIndex = voiceSelect.value;

    // Validate that voice is selected and text is not empty
    if (voiceIndex === 'select' || text.trim() === '') {
      alert('Please select a voice and enter some text to speak');
      return;
    }

    // Cancel any ongoing speech
    synth.cancel();

    // Create a new speech utterance
    const utterance = new SpeechSynthesisUtterance(text);
    const voices = synth.getVoices();
    utterance.voice = voices[voiceIndex];

    // Change face to open mouth when speaking starts
    utterance.onstart = () => {
      faceImg.src = 'assets/images/open.png';
    };

    // Change face back to smiling when speaking ends
    utterance.onend = () => {
      faceImg.src = 'assets/images/smiling.png';
    };

    // Handle any errors
    utterance.onerror = () => {
      faceImg.src = 'assets/images/smiling.png';
    };

    // Speak the text
    synth.speak(utterance);
  });
}