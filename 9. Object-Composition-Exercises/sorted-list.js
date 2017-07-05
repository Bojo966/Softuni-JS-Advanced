function getSortedCollection() {
    return {
        collection: [],
        sort: function() {
            this.collection = this.collection.sort((a, b) => a - b);
        },
        add: function(element) {
            this.collection.push(element);
            this.size++;
            this.sort();
        },
        toString: function() {
            return this.collection.join(', ');
        },
        remove: function(index) {
            if (index >= 0 && index < this.size) {
                this.collection.splice(index, 1);
                this.size--;
            }
        },
        get: function(index) {
            if (index >= 0 && index < this.size)
                return this.collection[index];
        },
        size: 0
    }
}

let collection = getSortedCollection();
collection.add(0)
collection.add(2)
collection.add(106)
collection.add(0)
collection.remove(2)
console.log(collection.get(2))
console.log(collection.size)
console.log(collection.toString())