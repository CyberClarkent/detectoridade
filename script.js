function verificar() {
    var data = new Date()
    var ano = data.getFullYear()
    var fano = document.getElementById('txtano')
    var res = document.querySelector('div#res')
    if (fano.value.length == 0 || Number(fano.value) > ano) {
        alert('[ERRO] Verifique os dados e tente novamente!')
    } 
    else {
        var fsex = document.getElementsByName('radsex')
        var idade = ano - Number(fano.value)
        var genero = ''
        var img = document.createElement('img')
        img.setAttribute('id', 'foto')
        if (fsex[0].checked) {
            genero = 'Homem'
            if (idade >= 0 && idade < 10) {
                img.setAttribute('src', 'menino.png')
                //criança
            } else if (idade < 21) {
                img.setAttribute('src', 'jovem.png')
                //jovem
            } else if (idade < 50) {
                img.setAttribute('src', 'homem.png')
                //adulto
            } else {
                img.setAttribute('src', 'velho.png')
                //velho
                
            }
        
        } 
        else if (fsex[1].checked) {
            genero = 'Mulher'
            if (idade >= 0 && idade < 10) {
                img.setAttribute('src', 'menina.png')
                //criança
            } else if (idade < 21) {
                img.setAttribute('src', 'mulher_jovem.png')
                //jovem
            } else if (idade < 50) {
                img.setAttribute('src', 'mulher.png')
                //adulto
            } else {
                img.setAttribute('src', 'velha.png')
                //velho
            }
        }
        res.style.textAlign = 'center'
        res.innerHTML = `Detectamos ${genero} com ${idade} anos.`
        res.appendChild(img)


        }
    }
