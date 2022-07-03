/*
        Aqui você vai modificar os elementos já existentes utilizando apenas as funções:
        - document.getElementById()
        - document.getElementsByClassName()
        - document.getElementsByTagName()*/

/* Crie uma função que mude o texto na tag <p>-----</p> para uma descrição de como você se vê daqui a 2 anos. 
 (Não gaste tempo pensando no texto e sim realizando o exercício)*/

function mudancaText() {

    let text = document.getElementsByTagName('p')
    text[0].innerText = "Daqui a dois anos espero esta formada como Desenvolvedora Web na qual esterei exercendo a profissão em outro país."
}
mudancaText()

// Crie uma função que mude a cor do quadrado amarelo para o verde da Trybe (rgb(76,164,109)).

function quadrado1() {

    let quadradoMaior = document.getElementsByClassName("main-content");
    quadradoMaior[0].style.backgroundColor = "rgb(76,164,109)"
}
quadrado1()

/*Crie uma função que mude a cor do quadrado vermelho para branco.*/

function quadrado2() {
    const quadradoCentral = document.getElementsByClassName("center-content");
    quadradoCentral[0].style.backgroundColor = "white"
}

quadrado2()
/*Crie uma função que corrija o texto da tag <h1>. */

function correcao1() {

    let correcao = document.getElementsByClassName("title")
    correcao[0].innerText = "Exercício 5.1 - JavaScript"
}
correcao1()


/*Crie uma função que modifique todo o texto da tag <p> para maiúsculo.*/

function maiusculo() {

    const maimai = document.getElementsByTagName('p')

    for (let i = 0; i < maimai.length; i += 1) {
        maimai[i].style.textTransform = 'upperCase'
    }
}
maiusculo()

/*Crie uma função que exiba o conteúdo de todas as tags <p> no console.       */

function final() {
    const finalmente = document.getElementsByTagName('p')

    for (let n = 0; n < finalmente.length; n += 1) {
        console.log(finalmente[n].innerText)
    }
}
final()
