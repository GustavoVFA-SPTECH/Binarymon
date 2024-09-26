export class Interacao {
  constructor(personagem, obstaculos) {
    this.personagem = personagem;
    this.obstaculos = obstaculos;
    this.texto = document.querySelector(".textoAperte");
    this.classeEspecifica = "interativo"; // Classe específica dos objetos interativos
    this.classeBoss = "Boss"; // Classe específica dos objetos interativos
  }

  verificarColisaoComEspecifico() {
    const interativos = document.querySelectorAll(`.${this.classeEspecifica}`);
    const personagemRect = this.personagem.getBoundingClientRect();

    // Verifica colisão com objetos que possuem a classe específica 'interativo'
    for (let obstaculo of interativos) {
      const obstaculoRect = obstaculo.getBoundingClientRect();

      if (
        personagemRect.left < obstaculoRect.right &&
        personagemRect.right > obstaculoRect.left &&
        personagemRect.top < obstaculoRect.bottom &&
        personagemRect.bottom > obstaculoRect.top
      ) {
        return true; // Houve colisão com um objeto específico
      }
    }

    return false; // Não houve colisão
  }

  verificarEAtivarInteracao() {
    if (this.verificarColisaoComEspecifico()) {
      // Ativa a animação quando há colisão
      this.texto.style.animation = "LoopTexto infinite 2s";
      console.log("Colisão com objeto específico detectada!");
    } else {
      // Remove a animação quando não há colisão
      this.texto.style.animation = "none";
    }
  }

  verificarColisaoComBoss() {
    const interativos = document.querySelectorAll(`.${this.classeBoss}`);
    const personagemRect = this.personagem.getBoundingClientRect();

    // Verifica colisão com objetos que possuem a classe específica 'interativo'
    for (let obstaculo of interativos) {
      const obstaculoRect = obstaculo.getBoundingClientRect();

      if (
        personagemRect.left < obstaculoRect.right &&
        personagemRect.right > obstaculoRect.left &&
        personagemRect.top < obstaculoRect.bottom &&
        personagemRect.bottom > obstaculoRect.top
      ) {
        return true; // Houve colisão com um objeto específico
      }
    }
  }
}
