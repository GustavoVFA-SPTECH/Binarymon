class Andar{
    constructor(personagem, andar){
        this.personagem = personagem;
        this.andar = andar;
        this.passo = 1;
    };
    movimento(){
        document.addEventListener('keydown', function(event) {
            switch(event.key){
                case 'ArrowRight': this.andarDireita(); break;
                case 'ArrowLeft': this.andarEsquerda(); break;
                case 'ArrowUp': this.andarFrente(); break;
                case 'ArrowDown': this.andarTras(); break;
            }
        });
        
    }
    andarDireita(){
        if(event.key === 'ArrowRight') left -= passo;
    }
    andarEsquerda(){
        if(event.key === 'ArrowRight') left += passo;
    }
    andarFrente(){
        if(event.key === 'ArrowRight') top -= passo;
    }
    andarTras(){
        if(event.key === 'ArrowRight') top += passo;
    }
}