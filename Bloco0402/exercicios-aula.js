/*Exercício 1: Obtenha o valor "Serviços" do array menu: */
let menu = ['Home', 'Serviços', 'Portfólio', 'Links'];

console.log(menu[2]);

/*Exercício 2: Procure o índice do valor "Portfólio" do array menu: */
console.log(menu.indexOf('Portfólio'));

/*Exercício 3: Adicione o valor "Contato" no final do array menu: */
menu.push('Contato');
console.log(menu);

/*Exercício 4: Utilize o for para imprimir os elementos da lista groceryList com o console.log(): */
let groceryList = ['Arroz', 'Feijão', 'Alface', 'Melancia'];

for (let index = 0; index < groceryList.length ; index++) {
    console.log(groceryList[index]);
};

/*Exercício 5: Utilize o for/of para imprimir os elementos da lista names com o console.log():*/
let names = ['João', 'Maria', 'Antônio', 'Margarida'];

for (let valor of names){
    console.log(valor)
};

