const lookupChar = require('./charLookup');
const { assert } = require('chai');

describe('lookupChar test', () => {

    it('test with num and string', () => {
        assert.equal(lookupChar(5, 'hi'), undefined);
    });
    it('test with num and string', () => {
        assert.equal(lookupChar('str', 10.5), undefined);
    });
    it('test with num and string', () => {
        assert.equal(lookupChar(10, 10), undefined);
    });
    

    it('test with num and array', () => {
        assert.equal(lookupChar('string', []), undefined);
    });

    it('test with num and obj', () => {
        assert.equal(lookupChar(5, {}), undefined);
    });

    it('test with num and obj', () => {
        assert.equal(lookupChar('str', {}), undefined);
    });

    it('test with correct type and bigger index', () => {
        assert.equal(lookupChar('Hi', 10), 'Incorrect index');
    });

    it('test with correct type and equal length', () => {
        assert.equal(lookupChar('Hi', 2), 'Incorrect index');
    });

    it('test with correct type and negative index', () => {
        assert.equal(lookupChar('Hi', -10), 'Incorrect index');
    });

    it('test with correct type. Return char at index', () => {
        assert(lookupChar('Hi', 1) === 'i');
    });

    it('test with correct type. Return char at index', () => {
        assert(lookupChar('H', 0) === 'H');
    });

});