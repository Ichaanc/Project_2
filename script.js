//  play and pause
let play = document.querySelector(".play");
let pause = document.querySelector(".pause");
let audio = new Audio("sound/bgmusic.wav");

play.addEventListener("click", () => {
  audio.play();
});
pause.addEventListener("click", () => {
  audio.pause();
});
//  play pause end
