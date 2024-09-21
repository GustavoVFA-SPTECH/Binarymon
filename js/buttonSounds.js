let audio = new Audio('../audio/trilhaSonora.mp3')
function musica(){
    audio.volume = 0.1
    if(audio.paused) audio.play();
    else audio.pause(); audio.currentTime = 0;
}