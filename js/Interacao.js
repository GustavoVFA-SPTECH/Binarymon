export class Interacao {
    constructor(personagem, obstaculos) {
        this.personagem = personagem;
        this.obstaculos = obstaculos;
    }

    interagir(obstaculoId) {
        if (!obstaculoId) return;  // Verifica se há um obstáculo com ID

        switch (obstaculoId) {
            case 'interacao':
                console.log("Interagiu com o obstáculo 1!");
                // Aqui você pode adicionar a lógica de interação com o obstáculo 1
                break;
            case 'obstaculo2':
                console.log("Interagiu com o obstáculo 2!");
                // Adiciona lógica para o obstáculo 2
                break;
            // Adicione mais cases conforme o número de obstáculos
            default:
                console.log("Nenhuma interação definida para esse obstáculo.");
        }
    }
}