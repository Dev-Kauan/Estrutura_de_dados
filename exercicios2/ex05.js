function fibonacci(n) {
    let fibArray = [];
    if (n === 1) {
        fibArray = [0];
    } else if (n === 2) {
        fibArray = [0, 1];
    } else {
        fibArray = [0, 1];
        for (let i = 2; i < n; i++) {
            fibArray.push(fibArray[i - 1] + fibArray[i - 2]);
        }
    }
    return fibArray;
}

const input = 12;

if (!isNaN(input) && input > 0) {
    const fibonacciArray = fibonacci(input);
    console.log("Sequência de Fibonacci:", fibonacciArray.join(", "));
} else {
    console.log("Por favor, digite um número inteiro positivo válido.");
}