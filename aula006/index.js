// VARIÁVEIS COM LET e VAR 

let nome = 'Gabriel'; //string
// var também é usado, mas é mais antigo

console.log(nome, 'nasceu em 1984.');
console.log('Em 2000', nome, 'conheceu Maria.'); //preste atenção com as vírgulas
console.log(nome, 'casou-se com Maria em 2012.');
console.log('Maria teve 1 filho com', nome, 'em 2015');
console.log('O filho de', nome, 'se chama Eduardo.');

// Posso criar também uma variável mas a fazendo com o valor sem valor (undefined). ASSIM:

/* let nome; Apenas declarou a variável
console.log(nome); */


nome = 'João'; // Inicializando a variável
console.log(nome);
nome = 'Otávio';
console.log(nome); //Posso mudar a variável a partir de determinada linha como feito acima.

// let nome; NÃO POSSO REDECLARAR UMA VARIÁVEL, pois se não da erro de syntax