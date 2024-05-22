class ValuePair {
    constructor(key, value) {
        this.key = key;
        this.value = value;
    }
    toString() {
        return `[#${this.key}]: ${this.value}`;
    }
}

class Dictionary {
    constructor() {
        this.table = {};
    }

    defaultToString(key) {
        if (key === null) {
            return 'NULL'
        } else if (key === undefined) {
            return 'UNDEFINED';
        } else if (typeof key === 'string' || key instanceof String) {
            return `${key}`;
        }
        return key.toString(); //{1}
    }

    hasKey(key) {
        return this.table[this.defaultToString(key)] != null;
    }

    set(key, value) {
        if (key != null && value != null) {
            const tableKey = this.defaultToString(key); // {1}
            this.table[tableKey] = new ValuePair(key, value); // {2}
            return true;
        }
        return false;
    }

    remove(key) {
        if (this.hasKey(key)) {
            delete this.table[this.defaultToString(key)];
            return true;
        }
        return false;
    }

    get(key) {
        const valuePair = this.table[this.defaultToString(key)];
        return valuePair == null ? undefined : valuePair.value;
    }

    getSecondOption(key) {
        if (this.hasKey(key)) {
            return this.table[this.defaultToString(key)];
        }
        return undefined;
    }

    keyValues() {
        return Object.values(this.table);
    }

    keyValuesSecondOption() {
        const valuePairs = [];
        for (const k in this.table){
            if(this.hasKey(k)) {
                valuePairs.push(this.table[k]);
            }
        }
        return valuePairs;
    }
  
    forEach(callbackFn) {

    }

    size() {

    }

    isEmpty() {

    }

    clear() {

    }

    toString() {

    }
}