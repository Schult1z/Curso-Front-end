// 1 - Number
console.log(typeof 2);
console.log(typeof 15.5);
console.log(typeof -19);

// 2 - Operações Mat
console.log(23 + 10);
console.log(10-8);
console.log(5*4);

console.log(5 + 4 *10);

// 3 - Special Numbers
console.log(typeof Infinity);

console.log(typeof -Infinity);

console.log(12 * "asd");

console.log(typeof NaN);


// 4 - Strings
console.log("Um texto")
console.log('mais um texto')

console.log(typeof "qualquer texto")

console.log("Texto \nduas linhas")

// 5 - Concatenacao
console.log("Oi," + "tudo" + " bem");

// 6 - Template String

console.log(`A soma de 2+2 e: ${2+2}`);

console.log(`Podemos executar qualquer coisa aqui ${console.log(`Teste`)}`)

// 7 - Booleans
console.log(true)
console.log(5 > 20);
console.log(5>2);
console.log(typeof true);

// 8 - Comparacoes

console.log(5 <= 5);
console.log(5<5);
console.log(10 == 10);
console.log(10 == 9);
console.log(10 != 9);

// 9 - Identico
console.log(9 == `9`);
console.log(9 ===`9`);
console.log(9 != `9`);
console.log(9 !== `9`);

// 10 - Operadores logicos

console.log(true && true); // AND os dois lados precisam ser verdadeiros 

console.log(true && false);

console.log(5 > 2 && 2 < 10);

console.log(6 > 2 && `Gabriel` === 1);

console.log(9 > 2 || `Gabriel` === 1) ; // OR apenas um lado precisa ser verdadeiro

console.log(5 < 2 || 5> 100);

console.log(!true); // NOT ele inverte o valor

console.log(!5 > 2);

// 11 - empty values

console.log(typeof null, typeof undefined);

console.log(null === undefined);

console.log(null == undefined);

console.log(null == false);

console.log(undefined == false);

// 12 - mudanca de tipos

console.log(5 * null);

console.log(`teste` * `opa`);

console.log(`10` + 1);

console.log(`10` - 1);