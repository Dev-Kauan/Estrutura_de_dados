class Funcionarios {
    constructor() {
        this.funcionarios = {};
    }

    inserirFuncionario(nome) {
        // Gera um id único para cada funcionário baseado no timestamp atual
        const id = Date.now();
        this.funcionarios[id] = nome;
    }

    mostrarFuncionarios() {
        console.log("\nFuncionários:");
        for (let id in this.funcionarios) {
            console.log(`ID: ${id}, Nome: ${this.funcionarios[id]}`);
        }
    }

    demitirFuncionario(id) {
        if (id in this.funcionarios) {
            delete this.funcionarios[id];
            console.log(`Funcionário com ID ${id} demitido.`);
        } else {
            console.log(`Funcionário com ID ${id} não encontrado.`);
        }
    }
}

// Criando um objeto da classe Funcionarios
let funcionariosObj = new Funcionarios();

// Passo 1: Solicitar ao usuário inserir o nome de três funcionários
for (let i = 1; i <= 3; i++) {
    let nome = prompt(`Passo 1 - Insira o nome do ${i}º funcionário:`);
    funcionariosObj.inserirFuncionario(nome);
}

// Passo 2: Solicitar ao usuário demitir um funcionário
let idParaDemitir = parseInt(prompt("Passo 2 - Insira o ID do funcionário que deseja demitir:"));

// Demitindo o funcionário com o ID fornecido pelo usuário
funcionariosObj.demitirFuncionario(idParaDemitir);

// Mostrando os funcionários restantes na tela
funcionariosObj.mostrarFuncionarios();