function confirmar(){
    var data = new Date()
    var ano = data.getFullYear()
    var fAno = document.querySelector('#txtano')
    var res = document.querySelector('div#res')
    if(fAno.value.length ==0 || fAno.value > ano){
        window.alert('[ERRO] Verifique os dados e tente novamento!')
    }else{
        var fsex = document.getElementsByName('radsex')
        var idade = ano-Number(fAno.value)
        var gênero = ''
        var img = document.createElement('img')
        img.setAttribute('id', 'foto')
        if(fsex[0].checked){
            gênero = 'Masculino'
            if(idade>=0 && idade<10){
                //criança
                img.setAttribute('src', 'bebe-menino.png')
            }else if(idade<18){
                //jovem
                img.setAttribute('src', 'menino.png')
            }else if(idade<60){
                //homem
                img.setAttribute('src', 'homem.png')
            }else{
                //idoso
                img.setAttribute('src', 'idoso.png')

            }

        }else if(fsex[1].checked){
            gênero = 'Feminino'
            if(idade>=0 && idade<10){
                //criança
                img.setAttribute('src', 'bebe-menina.png')
            }else if(idade<18){
                //jovem
                img.setAttribute('src', 'menina.png')
            }else if(idade<60){
                //homem
                img.setAttribute('src', 'mulher.png')
            }else{
                //idoso
                img.setAttribute('src', 'idosa.png')
            }
        }
        
        res.innerHTML = `Sexo ${gênero} com ${idade} anos`
        res.appendChild(img)
    }
}