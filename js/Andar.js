export class Andar {
    constructor(personagem, passo = 1) {
        this.personagem = personagem;
        this.passo = passo;
        this.left = parseInt(window.getComputedStyle(this.personagem).left) || 0;
        this.top = parseInt(window.getComputedStyle(this.personagem).top) || 0;
        this.movimento(); // Ativa o movimento ao inicializar
    }

    movimento() {
        document.addEventListener('keydown', (event) => { // Função de seta para manter o contexto de `this`
            switch (event.key) {
                case 'ArrowRight': this.andarDireita(); break;
                case 'ArrowLeft': this.andarEsquerda(); break;
                case 'ArrowUp': this.andarFrente(); break;
                case 'ArrowDown': this.andarTras(); break;
            }
            this.atualizarPosicao(); // Atualiza a posição após o movimento
        });
    }

    andarDireita() {
        this.left += this.passo;
    }

    andarEsquerda() {
        this.left -= this.passo;
    }

    andarFrente() {
        this.top -= this.passo;
    }

    andarTras() {
        this.top += this.passo;
    }

    atualizarPosicao() {
        this.personagem.style.left = `${this.left}px`;
        this.personagem.style.top = `${this.top}px`;
    }
}
