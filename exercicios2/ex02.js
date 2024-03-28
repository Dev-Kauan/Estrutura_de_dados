function ordenarArrayDeTresNumeros(arr) {
    // Verifica se o array tem exatamente três elementos
    if (arr.length !== 3) {
        console.log("O array deve conter exatamente 3 números.");
        return;
    }

    // Verifica as combinações possíveis para ordenar três números
    if (arr[0] > arr[1]) {
        [arr[0], arr[1]] = [arr[1], arr[0]]; // Troca os dois primeiros números se necessário
    }
    if (arr[1] > arr[2]) {
        [arr[1], arr[2]] = [arr[2], arr[1]]; // Troca os dois últimos números se necessário
    }
    if (arr[0] > arr[1]) {
        [arr[0], arr[1]] = [arr[1], arr[0]]; // Garante a ordenação do primeiro e segundo números
    }

    return arr;
}

// Exemplo de uso da função
const array = [15, 800, 100];
const arrayOrdenado = ordenarArrayDeTresNumeros(array);
console.log("Array ordenado:", arrayOrdenado); // Output: [6, 10, 15]
