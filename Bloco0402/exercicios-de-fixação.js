/*Exercício 1: Percorra o array imprimindo todos os valores nele contidos com a função console.log();*/
let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];

for (let valor of numbers){
    console.log(valor)}

/*Exercício 2: Some todos os valores contidos no array e imprima o resultado;*/
let soma = 0;

for (let index = 0; index < numbers.length; index += 1){
    soma = soma + numbers[index]
};

console.log(soma);

/*Exercício 3: Calcule e imprima a média aritmética dos valores contidos no array;*/
let soma1 = 0;
let media = 0;

for (let index = 0; index < numbers.length; index += 1){
    soma1 = soma1 + numbers[index]
    media = soma1/numbers.length 
};

console.log(media);

/*Exercício 4: Com o mesmo código do exercício anterior, caso o valor final seja maior que 20, 
imprima a mensagem: "valor maior que 20". */
let soma2 = 0;
let media2 = 0;

for (let index = 0; index < numbers.length; index += 1){
    soma2 = soma2 + numbers[index]
    media2 = soma2/numbers.length 
};

if (media2 > 20) {
    console.log('valor maior que 20')
} else { 'valor menor que 20'};
    

/*Exercício 5:  Utilizando for, descubra qual o maior valor contido no array e imprima-o; */
/* let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];*/
let maiorNumero = numbers[0]
for (let index = 0; index < numbers.length; index += 1){
     if (maiorNumero > numbers[index]){
         maiorNumero = maiorNumero
     } else {
         maiorNumero = numbers[index]
     }
}; 

console.log('O maior númer é '+ maiorNumero);


/*Exercício 6: Descubra quantos valores ímpares existem no array e imprima o resultado. 
Caso não exista nenhum, imprima a mensagem: "nenhum valor ímpar encontrado";*/
/* let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];*/
let numeroImpares = []
let numeroPar = 0
for (let index = 0; index < numbers.length; index+= 1) {
    if (numbers[index] % 2 === 1){
        numeroImpares.push(numbers[index])
    } else {
        numeroPar = numeroPar + 1 
    }
};

if (numeroPar === 0) {
    console.log("Nenhum valor ímpar encontrado")
} else {
    console.log(numeroImpares)
} ;

/*Exercício 7: Utilizando for, descubra qual o menor valor contido no array e imprima-o;*/
/* let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];*/
let menorNumero = numbers[0];

for (let index = 0; index < numbers.length; index += 1){
    if (menorNumero < numbers[index]){
        menorNumero = menorNumero
    } else {
        menorNumero = numbers[index]
    }
}; 

//console.log(Math.min('numbers')); -> não dá para utilizar com array!

console.log('O menor númer é '+ menorNumero);

/*Exercício 8: Utilizando for, crie um array que vá de 1 até 25 e imprima o resultado;*/
let array =[]

for (let index = 1; index <= 25; index += 1){
    array.push(index)
};

console.log(array);

/* Exercício 8:  Utilizando o array criado no exercício anterior imprima o resultado da divisão de cada um dos 
elementos por 2.*/

let divisao = [];
let numerosAdd = [];

for (let index = 0; index < array.length; index += 1){
    numerosAdd = array[index] / 2
    divisao.push(numerosAdd)
};

console.log(divisao);