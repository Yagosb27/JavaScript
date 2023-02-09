verificarVelocidade(velocidade);

function verificarVelocidade() {
    const velocidadeMaxima = 70;
    const kmPorPonto = 5;
    if (velocidade <= velocidadeMaxima)
        return 'Ok';
    else {
        const pontos = Math.floor((velocidade - velocidadeMaxima)/kmPorPonto);
        if (pontos > 12)
        return 'Você tem ' + pontos + 'a sua carteira está suspendida.';
        else return 'Você tem ' + pontos + 'na sua carteira.';
    } 
}