
let andar = document.getElementsByClassName('andar');
let cardEscolhaLevel = document.querySelectorAll('.cardEscolhaLevel');

for (let i = 0; i < andar.length; i++) {
  andar[i].addEventListener('click', () => {
    cardEscolhaLevel.forEach((card) => {
        card.style.display = 'none';  // Esconde todas as cartas de escolha de nível antes de mostrar a carta do nível escolhido.
    })
    cardEscolhaLevel[i].style.display == 'block' ? cardEscolhaLevel[i].style.display == 'block' : cardEscolhaLevel[i].style.display = 'block';
    
  });
}

function telaLab(){
  const tela = document.getElementById('tela');
  tela.innerHTML = ``;

  tela.style.animation = "transicaoJogoFechar 2s linear forwards";

  setTimeout(()=>{
      tela.innerHTML = ``;
      window.location.replace('laboratorio.html')
  },1000);
}

function telaAndar1(){
  const tela = document.getElementById('tela');
  tela.innerHTML = ``;

  tela.style.animation = "transicaoJogoFechar 2s linear forwards";

  setTimeout(()=>{
      tela.innerHTML = ``;
      window.location.replace('telaAndar1.html')
  },1000);
}

function telaAndar2(){
  const tela = document.getElementById('tela');
  tela.innerHTML = ``;

  tela.style.animation = "transicaoJogoFechar 2s linear forwards";

  setTimeout(()=>{
      tela.innerHTML = ``;
      window.location.replace('telaAndar2.html')
  },1000);
}



