let expect = require('chai').expect
let createList = require('../list-add-swap-shift-left-right').createList

describe("list operations testing", function() {
    let list;
    beforeEach(function() {
        list = createList();
    });

    it("Adding element to list should return element", function() {
        list.add(5)
        let expected = '5'
        let actual = list.toString()
        expect(actual).to.be.equal(expected, 'The values are no equal')
    });

    it("Adding two elements to list should return elements in correct order", function() {
        list.add(5)
        list.add('Pesho')
        let expected = '5, Pesho'
        let actual = list.toString()
        expect(actual).to.be.equal(expected, 'The values are no equal')
    });

    it("Adding three elements to list and shifting left should return elements in corret order", function() {
        list.add(5);
        list.add('Pesho');
        list.add(4.12);
        list.shiftLeft();
        let expected = 'Pesho, 4.12, 5';
        let actual = list.toString();
        expect(actual).to.be.equal(expected, 'The values are no equal')
    });

    it("Adding one element to list and shifting left should return element", function() {
        list.add(4.12);
        list.shiftLeft();
        let expected = '4.12';
        let actual = list.toString();
        expect(actual).to.be.equal(expected, 'The values are no equal')
    });

    it("Adding three elements to list and shifting right should return elements in corret order", function() {
        list.add(5);
        list.add('Pesho');
        list.add(4.12);
        list.shiftRight();
        let expected = '4.12, 5, Pesho';
        let actual = list.toString();
        expect(actual).to.be.equal(expected, 'The values are no equal')
    });

    it("Adding one element to list and shifting right should return element", function() {
        list.add(4.12);
        list.shiftRight();
        let expected = '4.12';
        let actual = list.toString();
        expect(actual).to.be.equal(expected, 'The values are no equal')
    });

    it('Adding two elements and swapping them should return them in reversed order', function() {
        list.add(5);
        list.add('Pesho');
        list.swap(0, 1);
        let expected = 'Pesho, 5';
        let actual = list.toString();
        expect(actual).to.be.equal(expected, 'The values are no equal')
    })

    it('Shifting left empty list should not change anything', function() {
        list.shiftLeft();
        let expected = '';
        let actual = list.toString();
        expect(actual).to.be.equal(expected, 'The values are no equal')
    })

    it('Shifting right empty list should not change anything', function() {
        list.shiftLeft();
        let expected = '';
        let actual = list.toString();
        expect(actual).to.be.equal(expected, 'The values are no equal')
    })

    it('Invalid swap indices should return false', function() {
        list.add('5')
        list.add('10')
        let passed = list.swap(-1, -2)
        expect(passed).to.be.false;
    })

});