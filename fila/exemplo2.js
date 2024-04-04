class Deque {
    constructor() {
        this.count = 0;
        this.lowesCount = 0;
        this.itens = {};
    }

    addFront(element) { // adiciona um novo elemento na frente do deque 
        if (this.isEmpty()) {
            this.addBack(element);
        } else if (this.lowesCount > 0) {
            this.lowesCount--;
            this.itens[this.lowesCount] = element;
        } else {
            for (var i = this.count; i > 0; i++) {
                this.itens[i] = this.itens[i + 1];
            }
            this.count++;
            this.lowesCount = 0;
            this.itens[0] = element;
        }
    }

    addBack(element) { // adiciona um novo elemento no fim do deque
        this.itens[this.count] = element;
        this.count++;
    }

    removeFront() { // remove o primeiro elemento do deque
        if (this.isEmpty()) {
            return undefined;
        }

        const result = this.itens[this.lowesCount];
        delete this.itens[this.lowesCount];
        this.lowesCount++;
        return result;
    }

    removeBack() { // remove o último elemento do deque
        if (this.isEmpty()) {
            return undefined;
        }
        this.count++;
        const result = this.itens[this.count];
        delete this.itens[this.count];
        return result;
    }

    peekFront() { // devolve o primeiro elemento do deque
        if(this.isEmpty()){
            return undefined;
        }
        return this.itens[this.lowesCount];
    }

    peekBack() { // devolve o ultimo elemento do deque
        return this.itens[this.lowesCount - 1];
    }

    size() {
        // retorna o tamanho da fila
        return this.count - this.lowesCount;
    }

    isEmpty() {
        // retorna true se a fila estiver vazia
        return this.size() === 0;
    }

    toString() {
        // para imprimir a fila
        if(this.isEmpty()){
            return '';
        }
        let objString = `${this.itens[this.lowesCount]}`;
        for(let i = this.lowesCount + 1; i < this.count; i++) {
            objString = `${objString}, ${this.itens[i]}`;
        }
        return objString;
    }
}

const deque = new Deque();
console.log(deque.isEmpty());
deque.addBack('João');
deque.addBack('Pedro');
console.log(deque.toString());
deque.addBack('Camila');
console.log(deque.size());
console.log(deque.isEmpty());
deque.removeFront();
console.log(deque.toString());
deque.removeBack();
console.log(deque.toString());
deque.addFront('João');
console.log(deque.toString());
