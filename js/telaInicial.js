function comecar(){
    const tela = document.getElementById('tela');
    tela.innerHTML = ``;

    tela.style.animation = "transicaoJogoFechar 2s linear forwards";

    setTimeout(()=>{
        tela.innerHTML = ``;
        window.location.replace('telaTorre.html')
    },1000);
}


