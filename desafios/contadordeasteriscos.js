exibirAsteriscos(limite);

function exibirAsteriscos(limite) {
    let padrao = '';
    for (let i = 0; i < limite; i++) {
        padrao += '*'
        console.log(padrao);
    }
}