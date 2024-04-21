const isOddOrEven = require('./evenOrOdd.js');
const { assert } = require('chai');

describe('isOddOrEven function test', () => {

    it('test with number', () => {
        assert.equal(isOddOrEven(10), undefined);
    });

    it('test with array', () => {
        assert.equal(isOddOrEven([]), undefined);
    })

    it('test with valid input', () => {
        assert.equal(isOddOrEven('Hi'), 'even');
    });
    it('test with valid input', () => {
        assert.equal(isOddOrEven('Hello'), 'odd');
    })
});
