function endereco(Rua,Cidade,CEP) {
    this.Rua = Rua,
    this.Cidade = Cidade,
    this.CEP = CEP
}
const endereco1 = new endereco('Rua Roriz','Planaltina','73340-604');
const endereco2 = new endereco('Rua Roriz','Planaltina','73340-604');

function compararIgualdade(endereco1,endereco2) {
    return endereco1.Rua === endereco2.Rua && endereco1.Cidade === endereco2.Cidade && endereco1.CEP === endereco2.CEP
}

function compararMemoria(endereco1,endereco2) {
    return endereco1 === endereco2;
}

console.log (compararIgualdade(endereco1,endereco2));
console.log (compararMemoria(endereco1,endereco2));