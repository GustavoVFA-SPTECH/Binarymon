export class Obstaculos {
    constructor() {
        this.obstaculos = document.querySelectorAll(".obstaculo");
        this.personagem = document.querySelector(".personagem");
    }

    colisao(personagem, obstaculo) {
        const personagemRect = personagem.getBoundingClientRect();
        const obstaculoRect = obstaculo.getBoundingClientRect();

        return !(
            personagemRect.top > obstaculoRect.bottom ||
            personagemRect.bottom < obstaculoRect.top ||
            personagemRect.left > obstaculoRect.right ||
            personagemRect.right < obstaculoRect.left
        );
    }

    verificarColisoes() {
        this.obstaculos.forEach((obstaculo) => {
            if (this.colisao(this.personagem, obstaculo)) {
                this.personagem.style.backgroundColor = 'red'; // Indica a colisão mudando a cor
            }
        });
    }
}
