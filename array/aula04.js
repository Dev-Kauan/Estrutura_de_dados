// const averageTemp = [];
// averageTemp[0] = 31.9;
// averageTemp[1] = 30.7;
// averageTemp[2] = 28.5;
// averageTemp[3] = 27.8;
// averageTemp[4] = 25.6;

// console.log('Conteúdo do array : ', averageTemp);
// console.log('Média de temperatura de março: ', averageTemp[2]);
// console.log('Média de temperatura de janeiro: ', averageTemp[0]);

// let daysOfWeek = ['Domingo' ,'Segunda', 'Terça', 'Quarta', 'Quinta', 'Sexta', 'Sábado'];

// for (const days of daysOfWeek) {
//     console.log(days);
// }

// const fibonacci = [];
// fibonacci[0] = 1;
// fibonacci[1] = 1;
// for(let i = 2; i < 20; i++){
//     fibonacci[i] = fibonacci[i -1] + fibonacci[i -2];
// }

// console.log(fibonacci.join(' '));
// for (const fibo of fibonacci) {
//     console.log(fibo);
// }

// let numbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];

// numbers[numbers.length] = 10;
// //push = adiciona no final
// numbers.push(11);
// numbers.push(12, 13);

// //unshift = adiciona no inicio
// numbers.unshift(-1);
// numbers.unshift(-2);
// numbers.unshift(-4, -3);

// //pop = remove um item no final
// numbers.pop();

// // shift = remove um item do começo

// function insertFirstPosition(value) {
//     for(let i = numbers.length; i >= 0; i--){
//         numbers[i] = numbers[i - 1];
//     }
//     numbers[0] = value
// };

// insertFirstPosition(-5);
// console.log(numbers.join(', '));

// let numbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];

// Array.prototype.reIndex = function (myArray) {
//     const newArray = [];
//     for (let i = 0; i < myArray.length; i++) {
//         if(myArray[i] !== undefined){
//             newArray.push(myArray[i]);
//         }
//     }
//     return newArray;
// }

// Array.prototype.removeFirstPosition = function() {
//     for(let i = 0; i < this.length; i++){
//         this[i] = this[i + 1];
//     }
//     return this.reIndex(this);
// }
// numbers = numbers.removeFirstPosition();
// console.log(numbers);

// numbers.shift();
// console.log(numbers);

// numbers.splice(5, 3);
// console.log(numbers);

const zero = 0;
const positiveNumbers = [1, 2, 3];
const negativeNumbers = [-3, -2, -1];
let numbers = negativeNumbers.concat(zero, positiveNumbers);

// console.log(numbers.join(', '));

function isEven(x) {
    console.log(x);
    return x % 2 === 0 ? true : false;
}
let numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15];
// numeros[0] = 2;
numeros.every(isEven); // every == executa até encontrar um retorno false
numeros.some(isEven); // some == executa até encontrar um retorno true

numeros.forEach(x => console.log(x % 2 === 0));

const myMap = numeros.map(isEven);

console.log(myMap); //Retorna um array

console.log(numeros.reduce((previous, current) => previous + current));

for (const n of numeros) {
    console.log(n % 2 == 0 ? `${n} é par` : `${n} é ímpar`);
}

for (const n in numeros) {
    console.log(n % 2 == 0 ? `${n} é par` : `${n} é ímpar`);
}

let iterator = numeros[Symbol.iterator]();
for (const n of iterator) console.log(n);

let entries = numeros.entries(); // obtém um iterador de chave/valor
for (const n of entries) console.log(n);

const keys = numeros.keys();
for (const n of keys) console.log(n);

const values = numeros.values();
for (const n of values) console.log(n);

numeros.reverse();
console.log("Meu array com reverse: " + numeros.join(", "));

numeros.sort();
console.log('Meu array com sort: ' + numeros.join(", "));

let names = ['Maria', 'Angelica', 'Luiza', '&Kelly', 'Rafaela', 'Marcela', 'Beatriz']

console.log(names.sort().join(', '));

