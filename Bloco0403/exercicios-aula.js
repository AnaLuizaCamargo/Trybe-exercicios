/*let fruits = [3, 4, 10, 1, 12];
let soma = 0

for(let index = 0; index < fruits.length; index += 1){
    soma = soma + fruits[index]
};

if (soma > 15){
    console.log(" Valor maior que 15!")
} else {
    console.log(" Valor menor que 15!")
};
console.log(soma);*/

//Frases do Baby array: 1. Eu resolvi o problema?
//2. Havia outras maneiras de resolver o problema?
//3. A maneira que eu escolhi foi a mais eficiente possível?
//4. Seria possível inverter ou retirar algum passo?
//5. Se eu fosse um computador, conseguiria entender todas as intruções?

/* 1. Faça um algoritmo que calcule a soma de 35 a 105 usando a estrutura “for” e retorne no formato:
A soma de 35 a 105 é: X.*/

/* let numero = 35;
let soma = 0;

for(let index = 35; index <= 105; index += 1 ){
      soma = soma + index
};

console.log(" A soma de 35 a 105 é:" + soma); */

/*2. Crie um algoritmo que conte quantos números do intervalo entre 15 e 155 são divisíveis por 3
Caso a quantidade de números impares seja igual ou maior que 50, exiba uma mensagem secreta a sua 
escolha.*/ 

/* let numero2 = 15;
let numeroImpares = 0;

for(let index1 = 15; index1 < 156; index1 +=1){

    if (index1 % 3 === 0) {
        numeroImpares ++
    }   
};

if (numeroImpares >= 50){
    console.log( "A quantidade de numeros impares é maior igual a 50")
}; */

/*3. Crie um algoritmo que simula o jogo “pedra, papel e tesoura” levando em consideração que são
 apenas duas pessoas jogando e imprima o resultado no formato:
“Jogador 1 vence” ou “Empate” ou “Jogador 2 vence”.*/ 

/* let jogador1 = 'tesoura';
let jogador2 = 'pedra';

if (jogador1 === jogador2){
console.log("Empate")
} else {
    
    if ( (jogador1 === 'pedra' && jogador2 === 'papel') || (jogador1 === 'papel' && jogador2 === 'pedra') ||
     (jogador1 === 'tesoura' && jogador2 === 'papel')) {
        console.log("Jogador 1 ganhou!")
    } else {  
        console.log("Jogador 2 ganhou!")}
}; */


/*4. Desenvolva um algoritmo que verifica se a pessoa é maior ou menor de idade.
Imprima no console seguindo o exemplo: “A pessoa é maior de idade” ou “A pessoa é menor de idade”.
Bônus: Crie a condição utilizando operador ternário.*/ 

/*let pessoa = 1;

if (pessoa >=18 ){
    console.log('A pessoa é maior de idade')
} else {
    console.log('A pessoa é menor de idade')
};*/

/* 5. Crie um algoritmo que recebe a idade de Ademar, Adriana e Julia e imprima quem é a mais nova 
no formato: “Pessoa” é a mais nova.*/

let ademar = 26 ;
let adriana = 35;
let julia = 69;

if (ademar < adriana && ademar < julia){
    console.log('Ademar é a mais nova')
} else if( adriana < ademar && adriana < julia){
    console.log('Adriana é a mais nova')
} else{
    console.log('Julia é a mais nova')
}; 


