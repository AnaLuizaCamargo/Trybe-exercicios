/* Exercício 1: O fatorial é a multiplicação de um número natural pelos seus antecessores, exceto o zero. Por exemplo:
O fatorial é representado pelo sinal !
4! = 4 x 3 x 2 x 1 = 24
Com base nessas informações, crie um algoritmo que retorne o fatorial de 10.*/

/* let numero = 10;
let multiplicacao = 1;

for (let index = 10; index > 0; index -= 1 ){
     multiplicacao *=  index
};

console.log('o fatorial de 10 é:' + multiplicacao);*/

/*Exercicio 2: Agora, desenvolva um algoritmo que é capaz de inverter uma palavra. Por exemplo, a palavra "banana" 
seria invertida para "ananab". Utilize a string abaixo como exemplo, depois troque por outras 
para verificar se seu algoritmo está funcionando corretamente.*/

let palavra =  'pedro';
let palavraReversa = '';

for (let index = 0 ; index < palavra.length; index += 1){

     palavraReversa += palavra.substring(palavra.lenght - index)
     
};

console.log(palavraReversa);

/* Exercicio 3:  Considere o array de strings abaixo:
let array = ['java', 'javascript', 'python', 'html', 'css'];
Escreva dois algoritmos: um que retorne a maior palavra deste array e outro que retorne a menor.
Considere o número de caracteres de cada palavra*/

let array = ['java', 'javascript', 'python', 'html', 'css'];



/* Exercício 4: Um número primo é um número inteiro maior do que 1 que possui somente dois divisores, 
ou seja, é divisível por 1 e por ele mesmo. Sabendo disso, escreva um algoritmo que retorne o maior
 número primo entre 2 e 50.*/
  
/*  let arrayPrimos =[];

  for(let numeros = 3; numeros < 50; numeros += 1){
    
    let contadorPrimo = [];

    for (let divisor = 1 ; divisor < 50 ; divisor += 1){

        if (numeros % divisor === 0){
            contadorPrimo.push(divisor)
        
        }
    }

    if (contadorPrimo.length === 2){
        arrayPrimos.push(numeros)
    } 
};
   //   console.log(arrayPrimos)

   let maior = 0;

   for (let index = 1; index < arrayPrimos.length; index += 1){

       if ( (maior < arrayPrimos[index]) ){
           maior = arrayPrimos[index]
       }

   };
   console.log('O maior numero primo é ' + maior); */



