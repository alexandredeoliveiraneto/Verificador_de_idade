function verificar() {
    const data = new Date();
    const ano = data.getFullYear();
    const fano = document.querySelector('input#txtano');
    const res = document.querySelector('div#res');

    if (fano.value.length == 0 || Number(fano.value) > ano) {
        window.alert('[ERRO] verifique os dados inseridos');
    } else {
        const fsex = document.getElementsByName('radsex');
        const idade = ano - Number(fano.value);
        let genero = '';
        const img = document.createElement('img')
        img.setAttribute('id', 'foto')
        
        if (fsex[0].checked) {
            genero = 'Homem';

            if (idade >= 0 && idade < 14) {
                img.setAttribute('src', 'img/criançahomem.png')
            } else if (idade < 24) {
                img.setAttribute('src', 'img/jovemhomem.png')
            } else if (idade < 60) {
                img.setAttribute('src', 'img/adultohomem.png')
            } else if (idade < 101) {
                img.setAttribute('src', 'img/idosohomem.png')
            } else {
                img.setAttribute('src', 'img/caixao.png')
            }

        } else if (fsex[1].checked) {
            genero = 'Mulher';
            if (idade >=0 && idade < 14) {
                img.setAttribute('src', 'img/criançamulher.png')
            } else if (idade < 24) {
                img.setAttribute('src', 'img/jovemmulher.png')
            } else if (idade < 60) {
                img.setAttribute('src', 'img/adultomulher.png')
            } else if (idade < 101) {
                img.setAttribute('src', 'img/idosamulher.png')
            } else {
                img.setAttribute('src', 'img/caixao.png')
            }
        }

        res.innerHTML = `Detectamos ${genero} com ${idade} anos.`;

        res.style.textAlign = 'center'
        res.appendChild(img);
    } 


}

const btn = document.querySelector('input#botao');
btn.addEventListener('click', verificar);


