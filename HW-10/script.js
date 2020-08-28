let audio = ['audio/1.mp3', 'audio/2.mp3', 'audio/3.mp3', 'audio/4.mp3', 'audio/5.mp3', 'audio/6.mp3' ];
let btn = document.querySelectorAll('button');

function playSound(way){
    let sound = new Audio();
    sound.src = way;
    sound.play();
    return sound;
};
  
for(let i = 0; i < btn.length; i++) {
    btn[i].addEventListener('click', () => {
    playSound(audio[i]);
    });
};

function musicPlayback(e){
  switch (e.keyCode){
    case 81: playSound(audio[0]);
      break;
    case 87: playSound(audio[1]);
      break;
    case 69: playSound(audio[2]);
      break;
    case 82: playSound(audio[3]);
      break;
    case 84: playSound(audio[4]);
      break;
    case 89: playSound(audio[5]);
      break;
  };
};
document.addEventListener("keyup", musicPlayback);