// Exercicios

const nome = 'Gabriel';
const sobrenome = 'Faltz';
const idade = 19;
const peso = 68;
const altura = 1.80;

let imc = peso / (altura * altura);
console.log(imc);

let nascimento = 2024 - idade;
console.log(nascimento);

console.log(`${nome} ${sobrenome} tem ${idade} anos pesa ${peso} kg e tem ${altura} metros.`);

// template strings (é a maneira mais morderna e legível de escrever uma string semântica)
console.log(`tem ${altura} de altura e seu IMC é de ${imc}`);

