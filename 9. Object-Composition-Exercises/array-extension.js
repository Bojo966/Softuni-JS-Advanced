let result = (function() {
    Array.prototype.last = function() {
        return this[this.length - 1];
    }

    Array.prototype.skip = function(n) {
        let newArr = []
        for (var index = n; index < this.length; index++) {
            var element = this[index];
            newArr.push(element)
        }

        return newArr
    }

    Array.prototype.take = function(n) {
        let tempArray = []
        for (var index = 0; index < n; index++) {
            var element = this[index];
            tempArray.push(element)
        }

        return tempArray
    }

    Array.prototype.sum = function() {
        let sum = 0
        for (var index = 0; index < this.length; index++) {
            var element = this[index];
            sum += element
        }

        return sum
    }

    Array.prototype.average = function() {
        return this.sum() / this.length
    }

})()


let myArray = [1, 3, 512, 15, 63, 10]

console.log(myArray.average())