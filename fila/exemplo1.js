class Queue {
    constructor() {
        this.count = 0;
        this.lowesCount = 0;
        this.items = {};

    }

    enqueue(element) {
        // incluir um elemento na fila
        this.items[this.count] = element;
        this.count++;
    }

    size() {
        // retorna o tamanho da fila
        return this.count - this.lowesCount;
    }

    isEmpty() {
        // retorna true se a fila estiver vazia
        return this.size() === 0;
    }

    dequeue() {
        // remove o elemento da frenta da fila
        if(this.isEmpty()){
            return undefined;
        }

        const result = this.items[this.lowesCount];

        delete this.items[this.lowesCount];

        this.lowesCount++;
        return result;
    }

    peek() {
        // mostra o elemento da frente fila
        if (this.isEmpty()){
            return undefined;
        }

        return this.items[this.lowesCount];
    }

    clear() {
        // para limpar a fila
        this.items = {};
        this.count = 0;
        this.lowesCount = 0;
    }

    toString() {
        // para imprimir a fila
        if(this.isEmpty()){
            return '';
        }
        let objString = `${this.items[this.lowesCount]}`;
        for(let i = this.lowesCount + 1; i < this.count; i++) {
            objString = `${objString}, ${this.items[i]}`;
        }
        return objString;
    }
}

const fila = new Queue();
console.log(fila.isEmpty());
fila.enqueue('Kauan');
fila.enqueue('Souza');
console.log('A fila possui inicialmente as pessoas: ' + fila.toString());
fila.enqueue('Cammila');
console.log('A fila agora possui as pessoas: ' + fila.toString());
console.log('O tamanho da fila é: ' + fila.size());
console.log('Removendo a pessoa da frente da fila: ' + fila.dequeue());
console.log('A fila aogra possui os elementos: ' + fila.toString());
console.log('A pessoa da frente da fila agora é: ' + fila.peek());
console.log('Retirando o próximo da fila: ' + fila.dequeue());
console.log('A fila agora possui apenas: ' + fila.toString());
console.log('A pessoa da frente da fila agora é: ' + fila.peek());