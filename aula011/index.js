/* Operadores aritméticos
+ Adição e concatenação
- Subtração
/ Divisão
* Multiplicação
** Potenciação
% Resto da divisão
*/

const num1 = 5;
const num2 = 2;
const num3 = 10

console.log(num1 + num2 * num3);
console.log((num1 + num2) * num3);

//aqui também temos as preferências de cálculos

/* ORDEM CORRETA:

1. ()
2. **
3. * / %
4. + -
*/ 

let contador = 0;
contador ++; 
contador ++; 
contador ++; 
contador ++; 
console.log(contador); //MELHOR JEITO

console.log(++contador);
console.log(--contador); //assim como temos o operador de incremento temos também o operador de decremento

//operador de incremento ++, ele atribui o valor e incrementa na variável

console.log(contador++);
console.log(contador);

//temos portanto também o pré e pós incremento e o pré e pós decremento

