class HashTable {
    constructor() {
        this.table = [];
    }

    defaultToString(key) {
        if (key === null) {
            return 'NULL';
        } else if (key === undefined) {
            return 'UNDEFINED';
        } else if (typeof key === 'string' || key instanceof String) {
            return `${key}`;
        }
        return key.toString();
    }

    loseloseHashCode(key) {
        if (typeof key === 'number') {
            return key;
        }
        const tableKey = this.defaultToString(key);
        let hash = 0;
        for (let i = 0; i < tableKey.length; i++) {
            hash += tableKey.charCodeAt(i);
        }
        return hash % 37;
    }

    hashCode(key) {
        return this.loseloseHashCode(key);
    }

    put(key, value) {
        if (key != null && value != null) {
            const position = this.hashCode(key);
            this.table[position] = new ValuePair(key, value);
            return true;
        }
        return false;
    }

    get(key) {
        const valuePair = this.table[this.hashCode(key)];
        return valuePair == null ? undefined : valuePair.value;
    }

    remove(key) {
        const hash = this.hashCode(key);
        const valuePair = this.table[hash];
        if(valuePair != null){
            delete this.table[hash];
            return true;
        }
        return false;
    }

    getTable() {

    }

    isEmpty() {
        return this.size() === 0;
    }

    size() {

    }

    clear() {
        this.table = {};
    }

    toString() {
        if (this.isEmpty()) {
            return '';
        }
        const valuePairs = this.keyValues();
        let objString = `${valuePairs[0].toString()}`;
        for (let i = 1; i < valuePairs.length; i++) {
            objString = `${objString},${valuePairs[i].toString()}`;
        }
        return objString;
    }

}

class ValuePair {
    constructor(key, value) {
        this.key - key;
        this.value - value
    }
}

const hash = new HashTable();

hash.put('Gandalf', 'gandalf@gmail.com');
hash.put('John', 'john@gmail.com');
hash.put('Tyrion', 'tyrion@gmail.com');

console.log(hash.hashCode('Gandalf') + ' - Gandalf');
console.log(hash.hashCode('John') + ' - John');
console.log(hash.hashCode('Tyrion') + ' - Tyrion');