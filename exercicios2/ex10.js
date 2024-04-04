function processarNumeros(numeros) {
    const pilhaPar = [];
    const pilhaImpar = [];

    for (let numero of numeros) {
        if (numero === 0) {
            const desempilhadoPar = pilhaPar.pop();
            const desempilhadoImpar = pilhaImpar.pop();

            if (desempilhadoPar === undefined || desempilhadoImpar === undefined) {
                console.log("Erro: Alguma pilha está vazia. Não é possível desempilhar.");
            } else {
                console.log("Desempilhado de 'par':", desempilhadoPar);
                console.log("Desempilhado de 'impar':", desempilhadoImpar);
            }
        } else if (numero % 2 === 0) {
            pilhaPar.push(numero);
        } else {
            pilhaImpar.push(numero);
        }
    }

    console.log("Desempilhando todos os elementos de 'par':");
    while (pilhaPar.length > 0) {
        console.log(pilhaPar.pop());
    }

    console.log("Desempilhando todos os elementos de 'impar':");
    while (pilhaImpar.length > 0) {
        console.log(pilhaImpar.pop());
    }
}

// Exemplo de uso:
const numeros = [2, 1, 4, 0, 5, 8, 0, 9, 12, 0];
processarNumeros(numeros);