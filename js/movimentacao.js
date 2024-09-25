// Importa as classes dos outros arquivos
import { Andar } from "./Andar.js";
import { Obstaculos } from "./Obstaculos.js";

// Pega o elemento do personagem e inicializa as classes
const personagem = document.querySelector(".personagem");
const mover = new Andar(personagem, 10);
const obstaculos = new Obstaculos();

// Verifica colisões a cada intervalo de tempo
document.addEventListener("keydown", (event) => {
  const ObjColisao = obstaculos.colisao();
  if (ObjColisao.BloquearCima && event.key == "ArrowUp") return;
  if (ObjColisao.BloquearBaixo && event.key == "ArrowDown") return;
  if (ObjColisao.BloquearEsquerda && event.key == "ArrowLeft") return;
  if (ObjColisao.BloquearDireita && event.key == "ArrowRight") return;
  mover.movimento(event);
});
