function decimalParaHexadecimal(numero) {
    // Usando o método toString() com base 16 para converter o número em hexadecimal
    return numero.toString(16);
}

// Exemplo de uso:
const numeroDecimal = 255;
const hexadecimal = decimalParaHexadecimal(numeroDecimal);
console.log("O número decimal", numeroDecimal, "em hexadecimal é:", hexadecimal);