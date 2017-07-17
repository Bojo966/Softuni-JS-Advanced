function extendClass(classToExtend) {
    classToExtend.prototype.species = 'Human'
    classToExtend.prototype.toSpeciesString = function() {
        return `I am a ${this.species}. ${this.toString()}`
    }

    return classToExtend;
}

class Pesho {

}

console.log(extendClass(Pesho).toSpeciesString())