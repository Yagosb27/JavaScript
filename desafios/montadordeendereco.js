let endereco = {
    Rua: 'QD 06 CONJ 6 - D',
    Cidade: 'Planaltina',
    CEP: '73340-604'
};

function exibirEndereco(endereco) {
    for (let chave in endereco)
        console.log(chave,endereco[chave]);
}

exibirEndereco(endereco);

