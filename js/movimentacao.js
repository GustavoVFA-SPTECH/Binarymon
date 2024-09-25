// Importa as classes dos outros arquivos
import { Andar } from './Andar.js';
import { Obstaculos } from './Obstaculos.js';

// Pega o elemento do personagem e inicializa as classes
const personagem = document.querySelector(".personagem");
const mover = new Andar(personagem, 10);
const obstaculos = new Obstaculos();

// Verifica colisões a cada intervalo de tempo
setInterval(() => {
    obstaculos.verificarColisoes();
}, 100);
