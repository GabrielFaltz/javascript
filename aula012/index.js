//alert é um atalho para window.alert

//lembrando que () chama uma função, e uma função executa uma ação.

let num1 = prompt('Digite um número');
let num2 = prompt ('Digite outro número');

num1 = Number(num1);
num2 = Number(num2);

const resultado = num1 + num2;
alert(`O resultado foi: ${num1 + num2}`); //poderia escrever assim também ao invés de botar a const resultado mas para códigos muito grandes ficaria bagunçado.
