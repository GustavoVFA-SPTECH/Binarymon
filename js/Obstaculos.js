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
            BloquearDireita: false,
            obstaculoId: null
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
                objTravas.obstaculoId = obstaculo.id;
            }

            // Verifica colisão por baixo
            if (personagemRect.bottom >= obstaculoRect.top &&
                personagemRect.top < obstaculoRect.top &&
                personagemRect.right > obstaculoRect.left &&
                personagemRect.left < obstaculoRect.right) {
                objTravas.BloquearBaixo = true;
                objTravas.obstaculoId = obstaculo.id;
            }

            // Verifica colisão à esquerda
            if (personagemRect.left <= obstaculoRect.right &&
                personagemRect.right > obstaculoRect.right &&
                personagemRect.bottom > obstaculoRect.top &&
                personagemRect.top < obstaculoRect.bottom) {
                objTravas.BloquearEsquerda = true;
                objTravas.obstaculoId = obstaculo.id;
            }

            // Verifica colisão à direita
            if (personagemRect.right >= obstaculoRect.left &&
                personagemRect.left < obstaculoRect.left &&
                personagemRect.bottom > obstaculoRect.top &&
                personagemRect.top < obstaculoRect.bottom) {
                objTravas.BloquearDireita = true;
                objTravas.obstaculoId = obstaculo.id;
            }
        });

        return objTravas;
    }
}
