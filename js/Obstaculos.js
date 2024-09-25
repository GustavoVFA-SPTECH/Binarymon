class Obstaculos{
    constructor(){
        this.obstaculos = document.querySelectorAll(".obstaculo");
        this.personagem = document.querySelector("personagem")
    }

    colisao(posicao, obstaculo){
        const personagem = posicao;
        const solido = obstaculo;

        return !(
            personagem.top > solido.bottom ||
            personagem.bottom < solido.top ||
            personagem.left > solido.right ||
            personagem.right < solido.left
        );
        
    }
    atualizar(posicao){
        personagem.style.top = `${top}%`
        personagem.style.left = `${left}%`
    }

}