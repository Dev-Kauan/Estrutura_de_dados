function calcularFatorial(n) {
    if (n === 0) {
        return 1;
    } else {
        let fatorial = 1;
        for (let i = 1; i <= n; i++) {
            fatorial *= i;
        }
        return fatorial;
    }
}

const input = 12;

if (!isNaN(input) && input >= 0) {
    const resultadoFatorial = calcularFatorial(input);
    console.log("Fatorial de", input + ":", input + "! =", resultadoFatorial);
} else {
    console.log("Por favor, digite um número inteiro não negativo válido.");
}