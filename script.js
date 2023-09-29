bg("sound/bgmusic.wav");

function bg(audioName){
  let audio = new Audio(audioName);
  audio.play();
}