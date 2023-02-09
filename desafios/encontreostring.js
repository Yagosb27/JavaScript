const avaliar = {
    titulo : 'GreenBook',
    ano : 2018,
    diretor : 'Peter Farrelly',
    personagem : 'Dr.Don Shirley'
}

avaliarPropriedades(avaliar);
function avaliarPropriedades(obj) {
    for (prop in obj)
        if(typeof obj[prop] =='string')
            console.log(prop,obj[prop])
}