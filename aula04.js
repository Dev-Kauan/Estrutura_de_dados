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

let numbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];

Array.prototype.reIndex = function (myArray) {
    const newArray = [];
    for (let i = 0; i < myArray.length; i++) {
        if(myArray[i] !== undefined){
            newArray.push(myArray[i]);
        }
    }
    return newArray;
}

Array.prototype.removeFirstPosition = function() {
    for(let i = 0; i < this.length; i++){
        this[i] = this[i + 1];
    }
    return this.reIndex(this);
}
numbers = numbers.removeFirstPosition();
console.log(numbers);

numbers.shift();
console.log(numbers);

numbers.splice(5, 3);
console.log(numbers);