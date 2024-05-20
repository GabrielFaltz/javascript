//strings são indexadas e cada caracter é representado por um índice que vai de 01234567...

let gayzao = 'O rato roeu a roupa do rei de roma'
console.log(gayzao[4]) //para ver um índice em específico basta abrir colchetes e digitar o número do índice

console.log(gayzao.charAt(6)) //charAt faz a mesma função acima

console.log(`${gayzao} em um lindo dia`)
console.log(gayzao + ' em um lindo dia')  //duas formas de concatenar

console.log(gayzao.indexOf('texto')) //indexOf é para saber em qual índice começa determinada palavra.

console.log(gayzao.indexOf('Um', 3)) //nesse caso eu pedi para encontrar o índice que começa a palavra um, depois do índice 3

console.log(gayzao.lastIndexOf('o')); //lastIndexOf é de trás pra frente

console.log(gayzao.replace('Um', 'Outra')) //substituição de palavras através do replace

console.log(gayzao.search('m')) //search é para procurar um índice

console.log(gayzao.search(/[a-z]/)); //expressão regular

console.log(gayzao.replace(/r/g, '%')); //tenho de colocar a flag g para dar replace em todas as letras r

console.log(gayzao.length); //isso é para ver o tamanho da string

console.log(gayzao.slice(2, 6)); //tag para fatiar determinada parte da string através dos índices. E números negativos fatiam da frente pra trás.

console.log(gayzao.split(' ')) //função para splitar a string

console.log(gayzao.toLowerCase()); //tudo minúscuclo
console.log(gayzao.toUpperCase()); // tudo maiúsculo