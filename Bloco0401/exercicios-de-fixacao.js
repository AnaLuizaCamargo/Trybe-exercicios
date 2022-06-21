/* Exercício 1: Faça cinco programas, um para cada operação aritmética básica. 
Seu programa deve ter duas constantes, a e b, definidas no começo com os valores que serão operados. 
Faça programas para: 
Adição (a + b) 
Subtração (a - b)
Multiplicação (a * b)
Divisão (a / b)
Módulo (a % b) */

const a = 22;
const b = 06;

console.log( 'A soma é ' + (a + b) );
console.log ('A subratração é ' + (a-b));
console.log ('A multiplicação é ' + (a*b));
console.log ('A divisão é' + (a/b));
console.log ('O módulo é ' + (a%b));

/* Exercício 2: Faça um programa que retorne o maior de dois números. 
Defina no começo do programa duas constantes com os valores que serão comparados.*/

const n1 = 72 ;
const n2 = 105;

if (n1 > n2){
    console.log( 'O maior valor é ' + n1)
} else {
    console.log ('O maior valor é ' + n2)
};

/* Exercício 3: Faça um programa que retorne o maior de três números. Defina no começo do programa
 três constantes com os valores que serão comparados. */

 const number1 = 24;
 const number2 = 8;
 const number3= 96;

 if ( number1 > number2 && number1 > number3 ){
     console.log('O maior número é: ' + number1)
 } else if (number2 > number1 && number2 > number3){
     console.log('O maior número é: ' + number2)
 } else {console.log('O maior número é: ' + number3)};

 /* Exercício 4: Faça um programa que, dado um valor definido numa constante,  retorne 
 "positive" se esse valor for positivo, "negative" se for negativo e "zero" caso contrário. */

 const number = -509 ;

 if (number > 0) {
     console.log( 'Positive')
 } else if (number === 0 ){ 
     console.log('Zero')
 } else {
     console.log('Negative')
 };

 /* Exercício 5: Faça um programa que defina três constantes com os valores dos três ângulos
  internos de um triângulo. Retorne true se os ângulos representarem os ângulos de um triângulo
   e false, caso contrário. Se algum ângulo for inválido o programa deve retornar uma mensagem 
   de erro. Para os ângulos serem de um triângulo válido, a soma dos três devem ser 180 graus.
   Um ângulo será considerado inválido se não tiver um valor positivo. */

let angulo1= 30;
let angulo2 = 90;
let angulo3=60;

if (angulo1>0 && angulo2>0 && angulo3>0 && angulo1 +angulo2 + angulo3 ===180 ) {
    console.log('True')
} else if (angulo1>0 && angulo2>0 && angulo3>0 && angulo1 +angulo2 + angulo3 !== 180){
    console.log('False')
} else {
    console.log("Inválido")
}

/* Exercício 6: Escreva um programa que receba o nome de uma peça de xadrez e retorne os movimentos 
que ela faz. Como desafio, faça o programa funcionar tanto se receber o nome de uma peça com letras 
maiúsculas quanto com letras minúsculas, sem aumentar a quantidade de condicionais. Como dica, você 
pode pesquisar uma função que faz uma string ficar com todas as letras minúsculas (lower case).
Se a peça passada for inválida, o programa deve retornar uma mensagem de erro.
Exemplo: bishop (bispo) -> diagonals (diagonais)*/

let peca ='rainha'

switch (peca.toLowerCase()) {
    case 'rei':
    console.log('O rei pode mover-se em todas as direções horizontal, vertical ou diagonal, sendo somente uma casa de cada vez');
    break;

    case 'rainha':
    console.log('A rainha move-se ao longo da horizontal, vertical e diagonais mas não pode pular outras peças.');
    break;

    case 'bispo':
    console,log('O bispo move-se ao longo da diagonal. Não pode pular outras peças');
    break;

    case 'cavalo':
    console.log('É a única peça que pode pular as outras. O movimento do cavalo é em forma de “L”, quer dizer, duas casas em sentido horizontal e mais uma na vertical ou vice-versa.');
    break;

    case 'torre':
    console.log('A torre movimenta-se pela vertical ou horizontal, mas não pode pular outras peças.');
    break;

    case 'peão':
    console.log('O peão movimenta-se apenas uma casa para frente e somente captura outras peças na diagonal. Opcionalmente, cada peão pode avançar duas casas no seu primeiro movimento do jogo.');
    break;

    default:
    console.log('Erro, peça inválida!');
    break;

} ;


/* Exercício 7: Escreva um programa que converte uma nota dada em porcentagem (de 0 a 100) 
em conceitos de A a F. Siga essas regras:
Porcentagem >= 90 -> A
Porcentagem >= 80 -> B
Porcentagem >= 70 -> C
Porcentagem >= 60 -> D
Porcentagem >= 50 -> E
Porcentagem < 50 -> F
O programa deve retornar uma mensagem de erro e encerrar se a nota passada for menor que 
0 ou maior que 100.*/

let porcentagem = 56;

if (porcentagem > 100 || porcentagem <0 ) {
    console.log('Erro, nota incorreta!')
} else if (porcentagem >= 90){
    console.log('A')
} else if (porcentagem >= 80){
    console.log('B')
} else if (porcentagem >= 70){
    console.log('C')
} else if (porcentagem >= 60){
    console.log('D')
} else if (porcentagem >= 50){
    console.log('E')
}else {
    console.log('F')
};

/* Exercício 8: Escreva um programa que defina três números em constantes e retorne true se pelo 
menos uma das três for par. Caso contrário, ele retorna false.
Bonus: use somente um if. */

let numero1 = 17 ;
let numero2 = 15 ;
let numero3 = 2;

if ( numero1 %  2 === 0 || numero2  % 2 === 0 || numero3 % 2 === 0 ) {
    console.log('True')
} else { 
    console.log('False')
};

/* Exercício 9: Escreva um programa que defina três números em constantes e retorne true se pelo menos 
uma das três for ímpar. Caso contrário, ele retorna false.
Bonus: use somente um if. */

let dado1 = 17 ;
let dado2 = 15 ;
let dado3 = 2;

if ( dado1 %  2 === 1 || dado2  % 2 === 1 || dado3 % 2 === 1 ) {
    console.log('True')
} else { 
    console.log('False')
};

/* Exercício 10: Escreva um programa que se inicie com dois valores em duas constantes diferentes: o 
custo de um produto e seu valor de venda. A partir dos valores, calcule quanto de lucro (valor de venda 
    descontado o custo do produto) a empresa terá ao vender mil desses produtos.
Atente que, sobre o custo do produto, incide um imposto de 20%.
Seu programa também deve emitir uma mensagem de erro e encerrar caso algum dos seus valores de entrada 
seja menor que zero.
O lucro de um produto é o resultado da subtração do valor de venda pelo custo do mesmo, sendo que o 
imposto de 20% também faz parte do valor de custo.
-> valorCustoTotal = valorCusto + impostoSobreOCusto
-> lucro = valorVenda - valorCustoTotal (lucro de um produto) */

let custo = 500;
let venda = 900;

if (custo >= 0 && venda >=  0) {
    let custoTotal = custo*1.2 
    let lucro = venda - custoTotal
    console.log('O valor do lucro é '+ lucro)
} else {
    console.log('Erro')
}

/* Exercício 11: Uma pessoa que trabalha de carteira assinada no Brasil tem descontados de seu salário 
bruto o INSS e o IR. Faça um programa que, dado um salário bruto, calcule o líquido a ser recebido.
A notação para um salário de R$1500,10, por exemplo, deve ser 1500.10. Para as faixas de impostos, 
use as seguintes referências:
INSS (Instituto Nacional do Seguro Social)
-> Salário bruto até R$ 1.556,94: alíquota de 8%
-> Salário bruto de R$ 1.556,95 a R$ 2.594,92: alíquota de 9%
-> Salário bruto de R$ 2.594,93 a R$ 5.189,82: alíquota de 11%
-> Salário bruto acima de R$ 5.189,82: alíquota máxima de R$ 570,88 */


let aliquotINSS;
let aliquotIR;

const grossSalary = 2000.00;

if (grossSalary <= 1556.94) {
  aliquotINSS = grossSalary * 0.08;
} else if (grossSalary <= 2594.92) {
  aliquotINSS = grossSalary * 0.09;
} else if (grossSalary <= 5189.82) {
  aliquotINSS = grossSalary * 0.11;
} else {
  aliquotINSS = 570.88;
}

const baseSalary = grossSalary - aliquotINSS;

if (baseSalary <= 1903.98) {
  aliquotIR = 0;
} else if (baseSalary <= 2826.65) {
  aliquotIR = (baseSalary * 0.075) - 142.80;
} else if (baseSalary <= 3751.05) {
  aliquotIR = (baseSalary * 0.15) - 354.80;
} else if (baseSalary <= 4664.68) {
  aliquotIR = (baseSalary * 0.225) - 636.13;
} else {
  aliquotIR = (baseSalary * 0.275) - 869.36;
};

console.log("Salário: " + (baseSalary - aliquotIR));