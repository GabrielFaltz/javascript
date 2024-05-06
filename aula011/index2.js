let contador = 2;

contador *= 2;
contador *= 2;
contador *= 2; //contador = contador * 2 por exemplo
console.log(contador);

const num1 = 10;
const num2 = parseFloat ('5.4'); // parseInt mais a string envolvida em () é como uma transformação da string em number NESSE CASO. E DETALHE, ESSA FUNÇÃO tira os números decimais, para deixar os decimais teria que usar parseFloat.
console.log(num1 + num2);
console.log(typeof num2);
//NaN = Not a Number

const num3 = 10;
const num4 = Number ('6.3'); //ao invés de parteInt ou parseFloat também pode usar 'Number', bem mais fácil
console.log(num3 + num4);
console.log(typeof num4, num4)


