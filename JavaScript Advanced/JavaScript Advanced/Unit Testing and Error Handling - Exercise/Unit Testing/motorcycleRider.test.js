const { motorcycleRider } = require('./motorcycleRider');
const { expect } = require('chai');

describe('motorcycleRider tests', () => {

    describe('licenseRestriction method test', () => {

        // Expect string
        // Invalid input

        it('Test with number', () => {
            expect(() => motorcycleRider.licenseRestriction(1)).to.throw();
        });

        it('Test with array', () => {
            expect(() => motorcycleRider.licenseRestriction(['1'])).to.throw();
        });

        it('Test with empty string', () => {
            expect(() => motorcycleRider.licenseRestriction('')).to.throw();
        });

        it('Test with object', () => {
            expect(() => motorcycleRider.licenseRestriction({})).to.throw();
        });


        // Correct input

        it('Should return correct answer', () => {
            expect(motorcycleRider.licenseRestriction('AM')).to.equal("Mopeds with a maximum design speed of 45 km. per hour, engine volume is no more than 50 cubic centimeters, and the minimum age is 16.");
            expect(motorcycleRider.licenseRestriction('A1')).to.equal("Motorcycles with engine volume is no more than 125 cubic centimeters, maximum power of 11KW. and the minimum age is 16.");
            expect(motorcycleRider.licenseRestriction('A2')).to.equal("Motorcycles with maximum power of 35KW. and the minimum age is 18.");
            expect(motorcycleRider.licenseRestriction('A')).to.equal("No motorcycle restrictions, and the minimum age is 24.");
        });
    })

    describe('motorcycleShowroom method test', () => {

        // Expect array and number
        // Invalid input

        it('Test with string, number', () => {
            expect(() => motorcycleRider.motorcycleShowroom('1', 1)).to.throw();
        });

        it('Test with string, string', () => {
            expect(() => motorcycleRider.motorcycleShowroom('1', '1')).to.throw();
        });

        it('Test with empty array , number', () => {
            expect(() => motorcycleRider.motorcycleShowroom([], 20)).to.throw();
        });

        it('Test with empty array , number', () => {
            expect(() => motorcycleRider.motorcycleShowroom([], -20)).to.throw();
        });

        it('Test with empty number , number', () => {
            expect(() => motorcycleRider.motorcycleShowroom(30, 20)).to.throw();
        });

        // Correct answer
        // (["125", "250", "600"…])
        it('Should return correct answer', () => {
            expect(motorcycleRider.motorcycleShowroom([125, 250, 600], 55)).to.equal(`There are 0 available motorcycles matching your criteria!`);
            expect(motorcycleRider.motorcycleShowroom([125, 250, 600], 300)).to.equal(`There are 2 available motorcycles matching your criteria!`);
            expect(motorcycleRider.motorcycleShowroom([55, 40, 600], 60)).to.equal(`There are 1 available motorcycles matching your criteria!`);
        });
    })

    describe('otherSpendings method test', () => {

        // Expect array, array, boolean
        // Invalid input

        it('Test with string, string, number', () => {
            expect(() => motorcycleRider.otherSpendings('1', '1', 20)).to.throw();
        });

        it('Test with string, number, number', () => {
            expect(() => motorcycleRider.otherSpendings('1', 1, 20)).to.throw();
        });

        it('Test with array, string, number', () => {
            expect(() => motorcycleRider.otherSpendings(['1'], '1', 20)).to.throw();
        });

        it('Test with number, array, boolean', () => {
            expect(() => motorcycleRider.otherSpendings(1, ['1'], true)).to.throw();
        });

        it('Test with Array, string, boolean', () => {
            expect(() => motorcycleRider.otherSpendings([1], '1', true)).to.throw();
        });

        // Correct answer

        it('Should return correct answer', () => {
            expect(motorcycleRider.otherSpendings(['helmet'], ['engine oil'], true)).to.equal(`You spend $243.00 for equipment and consumables with 10% discount!`);
            expect(motorcycleRider.otherSpendings(['jacked'], ['oil filter'], true)).to.equal(`You spend $297.00 for equipment and consumables with 10% discount!`);
            expect(motorcycleRider.otherSpendings(['helmet'], ['engine oil'], false)).to.equal(`You spend $270.00 for equipment and consumables!`);
            expect(motorcycleRider.otherSpendings(['jacked'], ['oil filter'], false)).to.equal(`You spend $330.00 for equipment and consumables!`);

        });
    })
})