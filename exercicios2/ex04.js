const numero = 12;
const vetor = [0, 11, 12, 9, 8, 7, 6, 5, 4, 3, 2, 1, 12, 13];

function descobrindoIndice(vetor, numero){
    for(let i = 0; i < vetor.length; i++){
        if(vetor[i] == numero){
            console.log(`Os indices que aparece o número informado é: ${i}`);
        }
    }
}

descobrindoIndice(vetor, numero);