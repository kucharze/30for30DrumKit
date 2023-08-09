const transform = (e) => {
  const audio = document.querySelector(`audio[data-key="${e.keyCode}"]`);
  const key = document.querySelector(`.key[data-key="${e.keyCode}"]`);
  if (!audio) return;
  //   console.log(audio);
  audio.currentTime = 0; //Rewind audio to start
  audio.play();
  //   consaole.log(key);
  key.classList.add("playing");
};

window.addEventListener("keydown", transform);

const keys = document.querySelectorAll(".key");

function removeTransition(e) {
  if (e.propertyName != "transform") return; //skip if not a transform

  //   console.log(e.propertyName);
  this.classList.remove("playing");
}

keys.forEach((key) => key.addEventListener("transitionend", removeTransition));
