class Set {
    constructor() {
        this.items = {};
    }
    add(element) {
        if (!this.has(element)) {
            this.items[element] = element;
            return true
        }
        return false;
    }

    delete(element) {
        if (this.has(element)) {
            delete this.items[element];
            return true;
        }
        return false;
    }

    has(element) {
        return element in this.items;
    }

    clear() {
        this.items = {}
    }

    size() {
        return Object.keys(this.items).length;
    }

    sizeLegacy() {
        let count = 0;
        for (let key in this.items) {
            if (this.items.hasOwnProperty(key)) {
                count++;
            }
        }
        return count;
    }

    values() {
        return Object.values(this.items);
    }

    valuesLegacy() {
        let values = [];
        for (let key in this.items) {
            if (this.items.hasOwnProperty(key)) {
                values.push(key);
            }
        }
        return values;
    }

    union(otherSet) {
        const uniorSet = new Set();
        this.values().forEach((value) => uniorSet.add(value));
        otherSet.values().forEach((value) => uniorSet.add(value));
        return uniorSet;
    }

    intersection(otherSet) {
        const interSectionSet = new Set();
        const values = this.values();
        for (let key in values) {
            if (otherSet.has(values[key])) {
                interSectionSet.add(values[key]);
            }
        }
        return interSectionSet
    }

    otherIntersection(otherSet) {
        const intersectionSet = new Set();
        const values = this.values();
        const otherValues = otherSet.values();
        let biggerSet = values;
        let smallerSet = otherValues;
        if (otherValues.length - values.length > 0) {
            biggerSet = otherValues;
            smallerSet = values;
        }
        smallerSet.forEach(value => {
            if (biggerSet.includes(value)) {
                intersectionSet.add(value);
            }
        })
        return intersectionSet;
    }
}

// const set = new Set();
// set.add(1);
// console.log(set.values());
// console.log(set.has(1));
// console.log(set.size());
// console.log(set.sizeLegacy());
// set.add(2);
// console.log(set);
// console.log(set.values());
// console.log(set.has(1));
// console.log(set.size());
// console.log(set.sizeLegacy());
// console.log(set.delete(1));
// console.log(set.values());
// console.log(set.delete(2));
// console.log(set.values());

const setA = new Set();
setA.add(1);
setA.add(2);
setA.add(3);
setA.add(4);
setA.add(5);
setA.add(6);
setA.add(7);

const setB = new Set();
setB.add(4);
setB.add(6);

const intersectionAB = setA.otherIntersection(setB);
console.log(intersectionAB.values());

