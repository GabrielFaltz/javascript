/* 
1. Não pode criar constantes com palavras reservadas
2. Constantes precisam ter nomes significativos
3. Não pode iniciar com número
4. Não pode conter traços ou espaços
5. camelCase
6. Case-sensitive
7. Não pode redeclarar uma const
8. NÃO UTILIZE VAR, E SIM LET
9. Uma const não pode ser declarada sem executá-la.
*/

const nome = 'João';
console.log(nome);

// nome = 'Otávio' NÃO PODE SER FEITO ISSO, a const é constante :) CASO SEJA NECESSÁRIO TROCAR A VARIÁVEL, basta trocar o const por let e mudar o nome da variável

const primeiroNumero = 5;
const segundoNumero = 10;
const resultado = primeiroNumero * segundoNumero;
const resultadoDuplicado = resultado * 2;
let resultadoTriplicado = resultado * 3;
resultadoTriplicado = resultadoTriplicado + 5;

console.log(resultado);
console.log(resultadoDuplicado);
console.log(resultadoTriplicado);

console.log(typeof primeiroNumero); //typeof é para saber qual o tipo de variável 

// Introdução a operadores aritméticos que são + - / *

// concatenação é quando se faz por exemplo uma soma de uma string e um number, o que resulta na junção dos "NÚMEROS"

