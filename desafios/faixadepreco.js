function FaixaPreco(tooltip,minimo,maximo) {
    this.tooltip = tooltip,
    this.minimo = minimo,
    this.maximo = maximo
}

let faixa1 = [
    new FaixaPreco('até R$ 700,00',0,700),
    new FaixaPreco('até R$ 1500,00',701,1500),
    new FaixaPreco('mais de R$ 1.500,00',1501,999999)
]

console.log(faixa1)