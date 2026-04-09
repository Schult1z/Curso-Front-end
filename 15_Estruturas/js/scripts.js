// 1 - Variaveis
let nome = "Gabriel";

console.log(nome);

nome = "Gabriel Schultz do Amaral"

console.log(nome);

const idade = 20;

console.log(idade); // nao posso alterar um valor de uma const 

console.log(typeof nome);
console.log(typeof idade);

// let 2teste = `invalido`; (Nao e permitido nome da variavel comecar com numeros)
// let @teste = `invalido`; (Nao pode comecar com @)

let a = 10, b = 20, c = 30;

console.log(a, b, c);


const nomecompleto = `Gabriel Schultz do Amaral`;

const nomeCompleto = `Gabriel Amaral`

console.log(nomecompleto);
console.log(nomeCompleto);

// Caracteres especiais permitidos para nomear variaveis

let _teste = `Ok!`
let $teste = `Ok!`

console.log(_teste, $teste);

// Prompt (recebe algum dado do usuario)

const age = prompt(`Digite a sua idade:`);
console.log(`Voce tem ${age} anos!`);

// Alert (emite uma mensagem por pop up)
alert(`testando`);

const z = 10;
alert(`O numero e ${z}!!`);

// Math (e um objeto que tem varias funcoes para fins matematicos)

console.log(Math.max(5, 2, 1, 10)); 

console.log(Math.floor(5.14)); // aredonda o numero para baixo 

console.log(Math.ceil(5.14)); // aredonda para o numero superior