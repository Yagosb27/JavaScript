const todasAsNotas = [nota1,nota2,nota3];
console.log (mediaDoAluno(todasAsNotas));

function mediaDoAluno (notas) {
    const media = calcularMedia(notas);

    if (media < 60) return 'F';
    if (media < 70) return 'D';
    if (media < 80) return 'C';
    if (media < 90) return 'B';
    else return 'A';
}

function calcularMedia(todasAsNotas) {
    let soma = 0;
    for (let valor of todasAsNotas) {
        soma += valor;
    }
    return soma/(todasAsNotas.length);
}