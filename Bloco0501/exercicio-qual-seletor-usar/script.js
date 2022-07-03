const titulo = document.getElementById('header-container');
titulo.style.background = '#32CD32'

const quadradoUm = document.getElementsByClassName('emergency-tasks');
quadradoUm[0].style.background = '#F4A460'

const tituloUm = document.querySelectorAll('h3')
for (let index = 0; index < 2; index += 1) {
    tituloUm[index].style.background = '#A020F0'
}

const quadradoDois = document.getElementsByClassName('no-emergency-tasks');
quadradoDois[0].style.background = '#DAA520'

const tituloDois = document.querySelectorAll('h3')
for (let index = 2; index < 4; index += 1) {
    tituloDois[index].style.background = '#000000'
}


const rodape = document.getElementById('footer-container');
rodape.style.background = '#006400'






