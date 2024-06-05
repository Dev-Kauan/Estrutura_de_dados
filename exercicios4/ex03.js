class CaixaMisteriosa {
    constructor() {
        this.caixa = {};
    }

    inserirCoisa(posicao, coisa) {
        this.caixa[posicao] = coisa;
    }

    mostrarConteudo(posicao) {
        if (posicao in this.caixa) {
            console.log(`Conteúdo da posição ${posicao}: ${this.caixa[posicao]}`);
        } else {
            console.log(`Não há nada na posição ${posicao}`);
        }
    }
}

// Criando um objeto da classe CaixaMisteriosa
let caixaMisteriosaObj = new CaixaMisteriosa();

// Passo 1: Solicitar ao usuário inserir quatro coisas na caixa misteriosa
for (let i = 1; i <= 4; i++) {
    let coisa = prompt(`Passo 1 - Insira a ${i}ª coisa na Caixa Misteriosa:`);
    caixaMisteriosaObj.inserirCoisa(i, coisa);
}

// Passo 2: Solicitar ao usuário inserir um número
let numero = parseInt(prompt("Passo 2 - Insira um número para revelar o conteúdo da posição correspondente:"));

// Passo 3: Mostrar na tela o que foi inserido na posição do número inserido pelo usuário
caixaMisteriosaObj.mostrarConteudo(numero);






