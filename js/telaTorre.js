
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


