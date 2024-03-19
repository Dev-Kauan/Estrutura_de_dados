// Declare as seguintes propriedades (variáveis) em uma classe aluno (nome, idade e peso), instancie um objeto com seu nome. Depois acesse e altere os valores correspondentes aos seus tipos: nome(string), idade(inteiro), peso(double). Apresente na console o conteúdo de cada propriedade do objeto.

class Aluno {
    constructor(nome, idade, peso){
        this.nome = nome;
        this.idade = idade;
        this.peso = peso;
    }
}

let aluno = new Aluno("Kauan", 19, 70);
console.log(`Nome: ${aluno.nome}`);
console.log(`Idade: ${aluno.idade}`);
console.log(`Peso: ${aluno.peso}`);

console.log(' ')

aluno.nome = "Souza";
aluno.idade = 22;
aluno.peso = 80.5;

console.log(`Nome: ${aluno.nome}`);
console.log(`Idade: ${aluno.idade}`);
console.log(`Peso: ${aluno.peso}`);
