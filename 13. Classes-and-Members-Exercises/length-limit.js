class Stringer {
    constructor(initialString, initialLenght) {
        this.initialLenght = initialLenght;
        this.innerLength = initialLenght;
        this.innerString = initialString;

    }

    increase(length) {
        this.innerLength = this.innerLength + length
    }

    decrease(length) {
        this.innerLength = Math.max(0, this.innerLength - length)
    }

    toString() {
        if (this.innerLength < this.innerString.length) {
            return (this.innerString.substr(0, this.innerLength) + '...');
        } else {
            return this.innerString;
        }
    }

}

let test = new Stringer("Test", 5);
console.log(test.toString()); //Test


test.decrease(3);
console.log(test.toString()); //Te...

test.decrease(5);
console.log(test.toString()); //...

test.increase(4);
console.log(test.toString()); //Test