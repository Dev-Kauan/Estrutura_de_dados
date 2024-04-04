function criarMatriz(linhas, colunas) {
    let matriz = [];
    let contador = 1;
    for (let i = 0; i < linhas; i++) {
        let linha = [];
        for (let j = 0; j < colunas; j++) {
            linha.push(contador);
            contador++;
        }
        matriz.push(linha);
    }
    return matriz;
}

function preencherMatrizComSomaIndices(matriz) {
    for (let i = 0; i < matriz.length; i++) {
        for (let j = 0; j < matriz[i].length; j++) {
            matriz[i][j] = i + j + 2; // Soma dos índices + 2 para compensar a base 0
        }
    }
    return matriz;
}

const linhas = 12;
const colunas = 10;

if (!isNaN(linhas) && !isNaN(colunas) && linhas > 0 && colunas > 0) {
    let matriz = criarMatriz(linhas, colunas);
    matriz = preencherMatrizComSomaIndices(matriz);

    // Exibindo a matriz
    console.log("Matriz:");
    for (let i = 0; i < matriz.length; i++) {
        console.log(matriz[i].join("\t"));
    }
} else {
    console.log("Por favor, digite valores válidos para linhas e colunas (números inteiros positivos).");
}