const { chooseYourCar } = require('./chooseYourCar');
const { expect } = require('chai');

describe('chooseYourCar tests', () => {

    describe('choosingType method test', () => {

        it('Test with year less than 1900 and bigger than 2022', () => {
            expect(() => chooseYourCar.choosingType('Sedan', 'blue', 1889)).to.throw();
            expect(() => chooseYourCar.choosingType('Sedan', 'blue', 2023)).to.throw();
        });

        it('Test with string !== Sedan', () => {
            expect(() => chooseYourCar.choosingType('hetchbek', 'blue', 2021)).to.throw();
            expect(() => chooseYourCar.choosingType(['hetchbek'], 'green', 2023)).to.throw();
        });

        it('Test with correct parameters', () => {
            expect(chooseYourCar.choosingType('Sedan', 'blue', 2021)).to.equal(`This blue Sedan meets the requirements, that you have.`);
            expect(chooseYourCar.choosingType('Sedan', 'blue', 2010)).to.equal(`This blue Sedan meets the requirements, that you have.`);
            expect(chooseYourCar.choosingType('Sedan', 'blue', 2022)).to.equal(`This blue Sedan meets the requirements, that you have.`);
            expect(chooseYourCar.choosingType('Sedan', 'blue', 2009)).to.equal(`This Sedan is too old for you, especially with that blue color.`);
            expect(chooseYourCar.choosingType('Sedan', 'blue', 1900)).to.equal(`This Sedan is too old for you, especially with that blue color.`);
        });
    })

    describe('brandName method test', () => {

        // Expect array number
        // Invalid input

        it('Test with string, number', () => {
            expect(() => chooseYourCar.brandName('1', 1)).to.throw();
        });

        it('Test with array, not integer', () => {
            expect(() => chooseYourCar.brandName(['1'], 'a')).to.throw();
        });

        it('Test with array, not integer', () => {
            expect(() => chooseYourCar.brandName(['1'], 1.1)).to.throw();
        });

        it('Test with empty array, number', () => {
            expect(() => chooseYourCar.brandName([''], 1)).to.throw();
        });

        it('Test with number, number', () => {
            expect(() => chooseYourCar.brandName(1, 1)).to.throw();
        });

        it('Test with array, string', () => {
            expect(() => chooseYourCar.brandName(['1'], '1')).to.throw();
        });

        it('Test with number, array', () => {
            expect(() => chooseYourCar.brandName(1, ['1'])).to.throw();
        });

        it('Test with array, out of range', () => {
            expect(() => chooseYourCar.brandName(["BMW", "Toyota", "Peugeot"], -1)).to.throw();
            expect(() => chooseYourCar.brandName(["BMW", "Toyota", "Peugeot"], 3)).to.throw();
            expect(() => chooseYourCar.brandName(["BMW", "Toyota", "Peugeot"], 4)).to.throw();
        });
        
        it('Test with string, negative number', () => {
            expect(() => chooseYourCar.brandName('1', -1)).to.throw();
        });

        // Correct input
        it('Test with correct parameters', () => {
            expect(chooseYourCar.brandName(["BMW", "Toyota", "Peugeot"], 1)).to.equal('BMW, Peugeot');
            expect(chooseYourCar.brandName(["BMW", "Toyota", "Peugeot"], 2)).to.equal('BMW, Toyota');
            expect(chooseYourCar.brandName(["BMW", "Toyota", "Peugeot"], 0)).to.equal('Toyota, Peugeot');
        });
    })

    describe('carFuelConsumption method test', () => {
        // Expect number, number
        // Invalid input

        it('Test with string, number', () => {
            expect(() => chooseYourCar.carFuelConsumption('1', 1)).to.throw();
        });

        it('Test with zero, number', () => {
            expect(() => chooseYourCar.carFuelConsumption(0, 1)).to.throw();
        });

        it('Test with number, zero', () => {
            expect(() => chooseYourCar.carFuelConsumption(1, 0)).to.throw();
        });

        it('Test with negative number, number', () => {
            expect(() => chooseYourCar.carFuelConsumption(-1, 1)).to.throw();
        });

        it('Test with number, string', () => {
            expect(() => chooseYourCar.carFuelConsumption(1, '1')).to.throw();
        });

        it('Test with negative number, negative number', () => {
            expect(() => chooseYourCar.carFuelConsumption(-1, -1)).to.throw();
        });

        it('Test with negative number, number', () => {
            expect(() => chooseYourCar.carFuelConsumption(-1, 1)).to.throw();
        });

        it('Test with array, number', () => {
            expect(() => chooseYourCar.carFuelConsumption([1], 1)).to.throw();
        });

        // Correct input
        it('Test with correct parameters', () => {
            expect(chooseYourCar.carFuelConsumption(50, 10)).to.equal(`The car burns too much fuel - 20.00 liters!`);
            expect(chooseYourCar.carFuelConsumption(20, 1)).to.equal(`The car is efficient enough, it burns 5.00 liters/100 km.`);
            expect(chooseYourCar.carFuelConsumption(20, 1.4)).to.equal(`The car is efficient enough, it burns 7.00 liters/100 km.`);   
        });
    })
})