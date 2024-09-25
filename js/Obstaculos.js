export class Obstaculos {
    constructor() {
        this.obstaculos = document.querySelectorAll(".obstaculo");
        this.personagem = document.querySelector(".personagem");
    }

    colisao() {
        let objTravas = {
            BloquearCima: false,
            BloquearBaixo: false,
            BloquearEsquerda: false,
            BloquearDireita: false
        };
    
        const personagemRect = this.personagem.getBoundingClientRect();
    
        this.obstaculos.forEach((obstaculo) => {
            const obstaculoRect = obstaculo.getBoundingClientRect();
    
            // Verifica colisão por cima
            if (personagemRect.top <= obstaculoRect.bottom &&
                personagemRect.bottom > obstaculoRect.bottom &&
                personagemRect.right > obstaculoRect.left &&
                personagemRect.left < obstaculoRect.right) {
                objTravas.BloquearCima = true;
            }
    
            // Verifica colisão por baixo
            if (personagemRect.bottom >= obstaculoRect.top &&
                personagemRect.top < obstaculoRect.top &&
                personagemRect.right > obstaculoRect.left &&
                personagemRect.left < obstaculoRect.right) {
                objTravas.BloquearBaixo = true;
            }
    
            // Verifica colisão à esquerda
            if (personagemRect.left <= obstaculoRect.right &&
                personagemRect.right > obstaculoRect.right &&
                personagemRect.bottom > obstaculoRect.top &&
                personagemRect.top < obstaculoRect.bottom) {
                objTravas.BloquearEsquerda = true;
            }
    
            // Verifica colisão à direita
            if (personagemRect.right >= obstaculoRect.left &&
                personagemRect.left < obstaculoRect.left &&
                personagemRect.bottom > obstaculoRect.top &&
                personagemRect.top < obstaculoRect.bottom) {
                objTravas.BloquearDireita = true;
            }
        });
    
        return objTravas;
    }
    

    verificarColisoes() {
        this.obstaculos.forEach((obstaculo) => {
            if (this.colisao(this.personagem, obstaculo)) {
                this.personagem.style.backgroundColor = 'red'; // Indica a colisão mudando a cor
            }
        });
    }
}
