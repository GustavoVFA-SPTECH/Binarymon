let audio = new Audio("../audio/trilhaSonora.mp3");
function musica() {
  const button = document.getElementById("SimNao");
  audio.volume = 0.1;
  if (audio.paused) {
    audio.play();
    button.innerHTML = "Sim";
  } else {
    audio.pause();
    audio.currentTime = 0;
    button.innerHTML = "Não";
  }
}

document.addEventListener("click", (e) => {
  if (e.target.tagName == "BUTTON") buttonSound();
});

function buttonSound() {
  let botao = new Audio("../audio/somBotao.mp3");
  botao.volume = 0.5;
  botao.play();
}
