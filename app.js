window.addEventListener("keydown", (e) => {
  const audio = document.querySelector(`audio[data-key="${e.keyCode}"]`);
  if (!audio) return;
  console.log(audio);
  audio.currentTime = 0; //Rewind audio to start
  audio.play();
});
