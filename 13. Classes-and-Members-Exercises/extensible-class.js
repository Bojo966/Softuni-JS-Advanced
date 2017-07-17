let Extensible = (function getExtendableObject() {
    let currentId = 0;

    class Extensible {
        constructor() {
            this.id = currentId
            currentId++
        }

        extend(template) {
            for (var key in template) {
                if (template.hasOwnProperty(key)) {
                    var element = template[key];
                    if (typeof element === 'function') {
                        this.__proto__[key] = element
                    } else {
                        this[key] = element
                    }
                }
            }
        }
    }

    return Extensible
})()

let obj1 = new Extensible();
let obj2 = new Extensible();
let obj3 = new Extensible();
console.log(obj1.id);
console.log(obj2.id);
console.log(obj3.id);


obj1.extend({
    extensionMethod: function() { console.log('Pesho') },
    extensionProperty: 'someString'

})

console.dir(obj1.__proto__)