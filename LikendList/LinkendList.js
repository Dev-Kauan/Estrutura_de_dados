function LinkedList() {
    let Node = function (element) {
        this.element = element;
        this.next = null;
    };
    let length = 0;
    let head = null;

    this.append = function (element) {
        //Esse método insere um novo elemento no final da list.
        const node = new Node(element);
        let current = null;
        if (head === null) {
            head = node;
        } else {
            current = head;
            while (current.next) {
                //Obtém o último item
                current = current.next;
            }
            // e atribui o novo elemento
            // a next para criar a ligação
            current.next = node;
        } //incrementando o tamanho da lista
        length++;
    };
    this.insert = function (position, element) {
        //Esse método insere um novo elemento em uma posição específica.
        if(position >= 0 && position <= length) {
            let node = new Node(element),
            current = head, 
            previous,
            index = 0;
            //adiciona na primeira posição
            if(position == 0){
                node.next = current;
                head = node;
            } else {
                previous = this.getElementAt(position - 1);
                current = previous.next;
                node.next = current;
                previous.next = node;
            }
            length++; //atualiza o tamanho da lista
            return true;
        } else {
            return false;
        }
    };
    this.getElementAt = function (position) {
        //Esse método devolve o elemento que está em uma posição específica.
        //Se o elemento não estiver na lista, underfined será devolvido.
        if(position >= 0 && position <= this.size()){
            let node = head;
            for(let i = 0; i < position && node != null; i++){
                node = node.next;
            }
            return node;
        }
        return undefined;
    };
    this.remove = function (element) {
        //Esse método remove um elemento da lista.
    };
    this.removeAt = function (position) {
        //Esse método remove um item de uma posição específica da lista.
        if (position > -1 && position < length) {
            let current = head,
            previous;
            //remove o primeiro item
            if (position === 0) {
                head = current.next;
            } else {
                for (var i = 0; i < position; i++) {
                    previous = current;
                    current = current.next;
                }
            }
            length--;
            return current.element;
        } else {
            return null;
        }
    };
    this.indexOf = function (element) {
        //Esse método devolve o índice do elemento.
        //Se o elemento não estiver devolve -1
    };
    this.isEmpty = function () {
        //Esse método verifica (true or false).
        //Se a lista está vazia.
    };
    this.size = function () {
        //Esse método devolve o número de elementos da lista ligada
    };
    this.getHead = function () {
        //Esse método devovle o elemento que está no inicio (head) da lista ligada.
    };
    this.toString = function () {
        //Esse método devolve uma representação em string da lista ligada
    }
}