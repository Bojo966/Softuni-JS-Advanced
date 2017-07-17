class SortedCollection {
    constructor() {
        this.size = 0;
        this.collection = [];
    }

    sort() {
        this.collection = this.collection.sort((a, b) => a - b);
    }

    add(element) {
        this.collection.push(element);
        this.size++;
        this.sort();
    }

    toString() {
        return this.collection.join(', ');
    }

    remove(index) {
        if (index >= 0 && index < this.size) {
            this.collection.splice(index, 1);
            this.size--;
        }
    }

    get(index) {
        if (index >= 0 && index < this.size)
            return this.collection[index];
    }
}