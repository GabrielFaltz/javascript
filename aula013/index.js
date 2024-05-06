//Exercicio para trocar os valores de ABC por BCA sem alterar a variável

let varA = 'A'; //B
let varB = 'B'; //C
let varC = 'C'; //A

// const varD = varA;
// varA = varB;
// varB = varC;
// varC = varA;

// console.log(varA, varB, varD);

//outro jeito seria: 

[varA, varB, varC] = [varB, varC, varA];
console.log(varA, varB, varC);
