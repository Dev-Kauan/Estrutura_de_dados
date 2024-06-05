class Notas {
    constructor() {
        this.notas = [];
    }

    inserirNota(nota) {
        this.notas.push(nota);
    }

    calcularMedia() {
        let soma = this.notas.reduce((acc, nota) => acc + nota, 0);
        return soma / this.notas.length;
    }

    mostrarNotasEMedia() {
        console.log("\nNotas inseridas:");
        this.notas.forEach((nota, index) => {
            console.log(`Nota ${index + 1}: ${nota}`);
        });
        console.log(`Média: ${this.calcularMedia()}`);
    }
}

// Criando um objeto da classe Notas
let notasObj = new Notas();

// Solicita ao usuário inserir quatro notas
for (let i = 1; i <= 4; i++) {
    let nota = parseFloat(prompt(`Insira a nota ${i}:`));
    notasObj.inserirNota(nota);
}

// Mostra as notas e a média na tela
notasObj.mostrarNotasEMedia();