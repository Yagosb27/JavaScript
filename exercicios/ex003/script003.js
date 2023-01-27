function verificar() {
    var data = new Date()
    var ano = data.getFullYear()
    var fano = document.getElementById('txtano')
    var res = document.getElementById('res')
    if (fano.value.lenght == 0 || Number(fano.value) > ano) {
        window.alert('[ERRO] Verifique os dados e tente novamente')
    } else {
        var fsex = document.getElementsByName('sex')
        var idade = ano - Number(fano.value)
        var genero = ''
        var img = document.createElement('img')
        img.setAttribute('id', 'foto')
        if (fsex[0].checked) {
            genero = 'homem'
            if (idade >=0 && idade < 10) {
                img.setAttribute('src', 'imagens/foto-menino.png')    
            } else if (idade < 21) {
                img.setAttribute('src', 'imagens/foto-jovemh.png') 
            } else if (idade < 60) {
                img.setAttribute('src', 'imagens/foto-homem.png')  
            } else {
                img.setAttribute('src', 'imagens/foto-idoso.png')  
            }
        } else if (fsex[1].checked) {
            genero = 'mulher'
            if (idade >=0 && idade < 10) {
                img.setAttribute('src', 'imagens/foto-menina.png')  
            } else if (idade < 21) {
                img.setAttribute('src', 'imagens/foto-jovemm.png') 
            } else if (idade < 60) {
                img.setAttribute('src', 'imagens/foto-mulher.png')  
            } else {
                img.setAttribute('src', 'imagens/foto-idosa.png')  
            }
        }
        res.style.textAlign = 'center'
        res.innerHTML = `Detectamos ${genero} com ${idade} anos.`
        res.appendChild(img)
    }
}