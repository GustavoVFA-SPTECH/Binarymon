function comecar(){
    const tela = document.getElementById('tela');
    tela.innerHTML = '';

    tela.style.animation = "transicaoJogo 2s linear forwards";

    setTimeout(()=>{
        tela.innerHTML = '';
        tela.style.backgroundImage = 'url(../images/fundoTorre.jpg)'
    },1000);
}


