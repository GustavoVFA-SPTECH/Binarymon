// Importa as classes dos outros arquivos
import { Andar } from "./Andar.js";
import { Obstaculos } from "./Obstaculos.js";
import { Interacao } from "./Interacao.js";

// Pega o elemento do personagem e inicializa as classes
const personagem = document.querySelector(".personagem");
const mover = new Andar(personagem, 10);
const obstaculos = new Obstaculos();
const interacao = new Interacao(personagem, obstaculos);

// Verifica colisões e interação com obstáculos
document.addEventListener("keydown", (event) => {
  const ObjColisao = obstaculos.colisao();

  // Verifica movimento com base nas colisões
  if (ObjColisao.BloquearCima && event.key === "ArrowUp") return;
  if (ObjColisao.BloquearBaixo && event.key === "ArrowDown") return;
  if (ObjColisao.BloquearEsquerda && event.key === "ArrowLeft") return;
  if (ObjColisao.BloquearDireita && event.key === "ArrowRight") return;

  mover.movimento(event);

  // Chama a função de interação sem depender da tecla espaço

  interacao.verificarEAtivarInteracao();
});
