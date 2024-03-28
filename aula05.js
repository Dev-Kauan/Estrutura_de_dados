class Stack {
    constructor() {
        this.items = [];
    }

    push(element) {
        //Adciona um novo item à pilha
        this.items.push(element);
    }

    pop() {
        //Remover o item do topo da pilha
        return this.items.pop();
    }

    peek() {
        //Devolve o elemento que está no topo da pilha
        return this.items[this.items.length - 1];
    }

    isEmpty() {
        // Informar se a pilha está vazia ou não
        return this.items.length === 0;
    }

    size() {
        // Informar o tamanho da pilha
        return this.items.length;
    }

    clear() {
        // Limpa a pilha
        this.items = [];
    }

    print() {
        // Imprime a pilha no console
        console.log(this.items.toString());
    }

}

let stack = new Stack();
stack.push(5);
stack.push(8);
stack.push(11);
console.log(stack.size());
console.log(stack.isEmpty());
stack.push(15);
stack.pop();
stack.print();
stack.pop();
stack.print();
stack.pop();
stack.print();