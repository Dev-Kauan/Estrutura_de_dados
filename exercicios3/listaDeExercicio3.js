// EXERCÍCIO 1
class Turma {
    constructor() {
        this.alunos = [];
    }

    adicionarAluno(aluno) {
        if (this.alunos.length < 40) {
            this.alunos.push(aluno);
            console.log(`Aluno "${aluno}" adicionado.`);
        } else {
            console.log("Limite de 40 alunos atingido. Não é possível adicionar mais alunos.");
        }
    }

    removerAluno(aluno) {
        const index = this.alunos.indexOf(aluno);
        if (index !== -1) {
            this.alunos.splice(index, 1);
            console.log(`Aluno "${aluno}" removido.`);
        } else {
            console.log("Aluno não encontrado na turma.");
        }
    }

    // EXERCÍCIO 2
    ordenarPorNotaDecrescente() {
        this.alunos.sort((a, b) => b.nota - a.nota);
    }

    // EXERCÍCIO 3
    definirMatriculaAtiva(aluno, ativa) {
        const alunoEncontrado = this.alunos.find(a => a.nome === aluno);
        if (alunoEncontrado) {
            alunoEncontrado.matriculaAtiva = ativa;
            console.log(`Matrícula de "${aluno}" marcada como ${ativa ? 'ativa' : 'inativa'}.`);
        } else {
            console.log("Aluno não encontrado na turma.");
        }
    }

    obterRelacaoAlunos() {
        const totalAlunos = this.alunos.length;
        const alunosAtivos = this.alunos.filter(a => a.matriculaAtiva).length;
        const alunosInativos = totalAlunos - alunosAtivos;
        return {
            totalAlunos: totalAlunos,
            alunosAtivos: alunosAtivos,
            alunosInativos: alunosInativos
        };
    }

    // EXERCÍCIO 4
}

const minhaTurma = new Turma();

// Adicionando alunos à turma
minhaTurma.adicionarAluno({ nome: "João", matriculaAtiva: true });
minhaTurma.adicionarAluno({ nome: "Maria", matriculaAtiva: false });
minhaTurma.adicionarAluno({ nome: "Pedro", matriculaAtiva: true });

// Definindo a matrícula de um aluno como inativa
minhaTurma.definirMatriculaAtiva("Maria", false);

// Removendo um aluno da turma
minhaTurma.removerAluno("Pedro");

// Obtendo a relação de alunos na turma
const relacaoAlunos = minhaTurma.obterRelacaoAlunos();
console.log("Relação de alunos na turma:", relacaoAlunos);

