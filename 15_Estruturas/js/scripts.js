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

// Console
console.log("Teste!!");

console.error("erro!");

console.warn("aviso!");

// If 
const m = 10;

if (m > 5) {
    console.log('M é mair que 5!');
}

const user = "João";
if (user === "João") {
    console.log("Olá, João!");
}
if (user === "Maria") {
    console.log ("Olá, Maria!");
}

console.log(user === "João", user === "Maria");

// Else

const loggedIn = false;

if(loggedIn) {
    console.log("Está altenticado!");
} else {
    console.log("Não esta altenticado!");
}

const q = 10;
const p = 20;

if (q > 5 && p > 25) {
    console.log(`Numeros mais altos`);
} else {
    console.log(`Os numeros nao sao mais altos`);
}

// else if
if( 1 > 2) {
    console.log(`Teste`);
} else if ( 2 > 3) {
    console.log(`Teste 2`);
} else if ( 5 > 1) {
    console.log(`Agora sim`);
}

const userName = `Matheus`;
const userAge = `30`;

if (userName === `Jose`) {
    console.log(`Seja bem-vindo Jose`);
} else if (userName === `Matheus` && userAge === `30`) {
    console.log(`Ola Matheus, voce tem 30 anos`);
} else {
    console.log(`Nenhuma condicao esta correta!!`);
}

// Estruturas de Repetição
// While (uso quando eu dependo da condicao)

let o = 0;

while(o < 10) {
    console.log(`Repetindo ${o}`);
    o = o + 1;
}

// Loop Infinito

// let x = 10;

// while(x > 5) {
//     console.log(`Imprimindo ${x}`);
// } ficou infinito por falta  do incrementador para parar o loop

// Do While (quando eu preciso rodar pelo menos 1 vez o laco)

let y = 10;

do {
    console.log(`Valor de y: ${y}`)
    y--
} while(y >= 1);

// For (Incrementador, condicao final , progressao) uso quando eu sei quantas vezes vai se repetir
// for(inicialização; condição; incremento/decremento)

for(let t = 0; t < 10; t++) {
    console.log(`Repetindo algo`);
}

let r = 10;
for(r > 0; r = r - 1;) {
    console.log(`Valor de R agora: ${r}`);
}

// Identacao

for(let u = 0; u < 10; u++) {
    if(u * 2 > 10){
        console.log(`Maior que 10! ${u}`);
    } else {
        if(u / 2 === 0) {
            console.log(`Deu 0`);
        }
    }
}

// Break
let g = 20;

for(g > 10; g--;) {
    console.log(`O valor de G e: ${g}`);
    if(g === 10){
        console.log(`o Valor de G agora e: ${g}`);
        break;
    }
} 

// continue (pode pular uma execucao do loop) recurso semelhante ao break
for(let s = 0; s <= 10; s++) {
    // operador de resto = %
    if(s % 2 === 0 ) {
        console.log(`Numero par! ${s}`);
        continue;
    }

    console.log(s);
}

// Switch - case

const job = "Advogado";

switch(job){
    case "Programador":
        console.log(`Voce e um programador`);
        break;
    case "Advogado":
        console.log(`Voce e um Advogado`);
        break;
    case "Engenheiro":
        console.log(`Voce e um engenheiro`);
        break;
    default:
        console.log(`Profissao nao encontrada!`);
}

// switch errado

const l = 100;

switch(l) {
    case 200:
        console.log(`L e 200`)
    case 100:
        console.log(`L e 100`)
    case 10:
        console.log(`L e 10`)
    default:
        console.log(`Nao foi encontrado`)
}