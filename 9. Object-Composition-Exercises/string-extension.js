(function() {
    String.prototype.ensureStart = function(str) {
        let modifiedStr = this.toString()
        if (this.substr(0, str.length) !== str) {
            modifiedStr = str + this
        }

        return modifiedStr
    }

    String.prototype.ensureEnd = function(str) {
        let modifiedStr = this.toString()
        if (this.substr(this.length - str.length) !== str) {
            modifiedStr += str
        }

        return modifiedStr
    }

    String.prototype.isEmpty = function() {
        return this.length === 0
    }

    String.prototype.truncate = function(n) {
        if (n < 4) {
            return '.'.repeat(n)
        }

        if (n >= this.length) {
            return this.toString()
        }

        let lastIndexOfSpaceBeforeN = -1
        let currentIndex = -1
        currentIndex = this.indexOf(' ', currentIndex + 1)
        while (currentIndex !== -1 && currentIndex <= n - 3) {
            lastIndexOfSpaceBeforeN = currentIndex
            currentIndex = this.indexOf(' ', currentIndex + 1)
        }

        if (lastIndexOfSpaceBeforeN !== -1) {
            return this.substr(0, lastIndexOfSpaceBeforeN) + '...'
        } else {
            return this.substr(0, n - 3) + '...'
        }
    }

    String.format = function(inputString) {
        let match
        let formattedString = inputString
        let pattern = /{(\d)}/g
        while (match = pattern.exec(inputString)) {
            let parameterIndex = Number(match[1]) + 1
            if (parameterIndex < arguments.length)
                formattedString = formattedString.replace(match[0], arguments[parameterIndex])
        }

        return formattedString
    }
})()

let str = 'my string'
str = str.ensureStart('my')
console.log(str)
str = str.ensureStart('hello ')
console.log(str)
str = str.truncate(16)
console.log(str)
str = str.truncate(14)
console.log(str)
str = str.truncate(8)
console.log(str)
str = str.truncate(4)
console.log(str)
str = str.truncate(2)
console.log(str)
str = String.format('The {0} {1} fox',
    'quick', 'brown');
console.log(str)
str = String.format('jumps {0} {1}',
    'dog');
console.log(str)