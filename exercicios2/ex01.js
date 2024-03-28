function ordenarArray(arr) {
    // Verifica se o array tem pelo menos dois elementos
    if (arr.length < 2) {
        return arr; // Retorna o array se já estiver ordenado ou contiver apenas um elemento
    }

    let trocou;
    do {
        trocou = false;
        for (let i = 0; i < arr.length - 1; i++) {
            if (arr[i] > arr[i + 1]) {
                // Troca os elementos se estiverem fora de ordem
                [arr[i], arr[i + 1]] = [arr[i + 1], arr[i]];
                trocou = true;
            }
        }
    } while (trocou);

    return arr;
}

// Exemplo de uso da função
const array = [15, 6, 10, 8, 3];
const arrayOrdenado = ordenarArray(array);
console.log("Array ordenado:", arrayOrdenado); // Output: [3, 6, 8, 10, 15]