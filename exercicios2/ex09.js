function processarNumeros(numeros) {
    const pilha = [];
    for (let numero of numeros) {
        if (numero % 2 === 0) {
            pilha.push(numero); // Empilhar números pares
        } else if (pilha.length > 0) {
            pilha.pop(); // Desempilhar um número ímpar, se a pilha não estiver vazia
        } else {
            console.log("A pilha está vazia. Não é possível desempilhar.");
        }
    }
    while (pilha.length > 0) {
        console.log("Desempilhado:", pilha.pop()); // Desempilhar todos os elementos restantes
    }
}

// Exemplo de uso:
const numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
processarNumeros(numeros);