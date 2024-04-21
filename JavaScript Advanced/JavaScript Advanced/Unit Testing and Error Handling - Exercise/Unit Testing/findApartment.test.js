const { findNewApartment } = require('./findApartment');
const { expect } = require('chai');

describe('findNewApartment tests', () => {

    describe('isGoodLocation method test', () => {

        // Expect string and boolean
        // Invalid input

        it('Test with string, number', () => {
            expect(() => findNewApartment.isGoodLocation('1', 1)).to.throw();
        });

        it('Test with number, number', () => {
            expect(() => findNewApartment.isGoodLocation(1, 1)).to.throw();
        });

        it('Test with number, boolean', () => {
            expect(() => findNewApartment.isGoodLocation(1, ftrue)).to.throw();
        });

        it('Test with array, number', () => {
            expect(() => findNewApartment.isGoodLocation(['1'], 1)).to.throw();
        });

        it('Test with string, string', () => {
            expect(() => findNewApartment.isGoodLocation('1', 'a')).to.throw();
        });

        it('Test with boolean, boolean', () => {
            expect(() => findNewApartment.isGoodLocation(true, false)).to.throw();
        });


        // Correct Input but !== Sofia, Plovdiv, Varna;

        it('Should return correct answers', () => {
            expect(findNewApartment.isGoodLocation('Troyan', false)).to.equal("This location is not suitable for you.");
            expect(findNewApartment.isGoodLocation('Lovech', true)).to.equal("This location is not suitable for you.");
            expect(findNewApartment.isGoodLocation('Blagoevgrad', false)).to.equal("This location is not suitable for you.");

            // False or True
            expect(findNewApartment.isGoodLocation('Sofia', false)).to.equal("There is no public transport in area.");
            expect(findNewApartment.isGoodLocation('Plovdiv', true)).to.equal("You can go on home tour!");
            expect(findNewApartment.isGoodLocation('Varna', false)).to.equal("There is no public transport in area.");
        });
    });

    describe('isLargeEnough method test', () => {

        // Expect array, Empty array and number
        // Invalid input

        it('Test with string, number', () => {
            expect(() => findNewApartment.isLargeEnough('a', 1)).to.throw();
        });

        it('Test with string, string', () => {
            expect(() => findNewApartment.isLargeEnough('a', 'a')).to.throw();
        });

        it('Test with number, number', () => {
            expect(() => findNewApartment.isLargeEnough(1, 1)).to.throw();
        });

        it('Test with array, string', () => {
            expect(() => findNewApartment.isLargeEnough(['a'], 'a')).to.throw();
        });

        it('Test with empty array, number', () => {
            expect(() => findNewApartment.isLargeEnough([], 1)).to.throw();
        });

        // Correct input 

        it('Should return correct answers', () => {
            expect(findNewApartment.isLargeEnough([40, 50, 60], 45)).to.equal('50, 60');
            expect(findNewApartment.isLargeEnough([40, 50, 60], 50)).to.equal('50, 60');
            expect(findNewApartment.isLargeEnough([40, 50, 60], 35)).to.equal('40, 50, 60');
            expect(findNewApartment.isLargeEnough([40, 50, 60], 60)).to.equal('60');
            expect(findNewApartment.isLargeEnough([40], 40)).to.equal('40');
        });
    })

    describe('isItAffordable method test', () => {

        // Expect number and number
        // Check if price and budget are less or equal to 0
        // Invalid Input

        it('test with string, number', () => {
            expect(() => findNewApartment.isItAffordable('a', 1)).to.throw();
        });

        it('test with string, string', () => {
            expect(() => findNewApartment.isItAffordable('a', '1')).to.throw();
        });

        it('test with number, string', () => {
            expect(() => findNewApartment.isItAffordable(1, '1')).to.throw();
        });

        it('test with array, number', () => {
            expect(() => findNewApartment.isItAffordable([1], 1)).to.throw();
        });

        it('test with negative number, equal to 0', () => {
            expect(() => findNewApartment.isItAffordable(-1, 0)).to.throw();
        });

        it('test with string, equal to 0', () => {
            expect(() => findNewApartment.isItAffordable('1', 0)).to.throw();
        });

        it('test with zero, negative number', () => {
            expect(() => findNewApartment.isItAffordable(0, -1)).to.throw();
        });

        it('test with negative number, negative number', () => {
            expect(() => findNewApartment.isItAffordable(-1, -8)).to.throw();
        });

        it('test with 0, 0', () => {
            expect(() => findNewApartment.isItAffordable(0, 0)).to.throw();
        });


        // Correct input

        it ('Should return correct answer', () => {
            expect(findNewApartment.isItAffordable(20, 10)).to.equal("You don't have enough money for this house!");
            expect(findNewApartment.isItAffordable(10, 10)).to.equal("You can afford this home!");
            expect(findNewApartment.isItAffordable(20, 50)).to.equal("You can afford this home!");
            expect(findNewApartment.isItAffordable(30, 10)).to.equal("You don't have enough money for this house!");
        })
    })
})