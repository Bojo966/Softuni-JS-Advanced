let isOddOrEven = require('../isOdd').isOddOrEven
let expect = require('chai').expect

describe('isOddOrEven(string) -> checks length of string', function() {

    it('with a number parameter, should return undefined', function() {
        expect(isOddOrEven(13)).to.be.equal(undefined, 'Function did not return the correct result!')
    })

    it('with a object parameter, should return undefined', function() {
        expect(isOddOrEven({ name: 'Pesho' })).to.be.equal(undefined, 'Function did not return the correct result!')
    })

    it('with an even length string, should return correct result', function() {
        expect(isOddOrEven('roar')).to.be.equal('even', 'Function did not return the correct result!')
    })

    it('with an odd length string, should return correct result', function() {
        expect(isOddOrEven('pesho')).to.be.equal('odd', 'Function did not return the correct result!')
    })

    it('with multiple consecutive checks, should return correct value', function() {
        expect(isOddOrEven('cat')).to.be.equal('odd', 'Function did not return the correct result!')
        expect(isOddOrEven('alabala')).to.be.equal('odd', 'Function did not return the correct result!')
        expect(isOddOrEven('is it even')).to.be.equal('even', 'Function did not return the correct result!')
    })

})