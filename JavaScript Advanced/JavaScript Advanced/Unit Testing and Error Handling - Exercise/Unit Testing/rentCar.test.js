const { rentCar } = require('./rentCar');
const { expect } = require('chai');

describe('rentCar tests', () => {

    describe('searchCar method test', () => {
        it('Invalid input: Test with string and number', () => {

            expect(() => rentCar.searchCar('a', 1)).to.throw()
        });

        it('Invalid input: Test with string and string', () => {

            expect(() => rentCar.searchCar('a', 'a')).to.throw()
        });

        it('Invalid input: Test with arr and number', () => {

            expect(() => rentCar.searchCar(['a', 'b', 'c'], 1)).to.throw()
        });

        it('Invalid input: Test with arr and number', () => {

            expect(() => rentCar.searchCar(['a', 'b', 'c'], 'd')).to.throw()
        });
        it('Invalid input: Test with number and string', () => {

            expect(() => rentCar.searchCar(1, 'a')).to.throw()
        });

        it('Correct answer', () => {

            expect(rentCar.searchCar(['Opel', 'Lada', 'Opel'], 'Lada')).to.equal(`There is 1 car of model Lada in the catalog!`);
            expect(rentCar.searchCar(['Opel', 'Lada', 'Opel'], 'Opel')).to.equal(`There is 2 car of model Opel in the catalog!`);
            expect(rentCar.searchCar(['BMW', 'Lada', 'BMW', 'BMW'], 'BMW')).to.equal(`There is 3 car of model BMW in the catalog!`);

        });
    })

    describe('calculatePriceOfCar method test', () => {

        // expect string and number

        //Invalid input
        it('Invalid input: Test with number and number', () => {

            expect(() => rentCar.calculatePriceOfCar(1, 1)).to.throw();
        });

        it('Invalid input: Test with number and string', () => {

            expect(() => rentCar.calculatePriceOfCar(1, 'a')).to.throw();
        });

        it('Invalid input: Test with array and string', () => {

            expect(() => rentCar.calculatePriceOfCar(['a'], 1)).to.throw();
        });

        it('Invalid input: Test with array and string', () => {

            expect(() => rentCar.calculatePriceOfCar('a', 'a')).to.throw();
        });

        it('Invalid input: model not found', () => {

            expect(() => rentCar.calculatePriceOfCar('Opel', 1)).to.throw();
        });

        //Correct input
        it('Should return correct answers', () => {

            expect(rentCar.calculatePriceOfCar('Volkswagen', 2)).to.equal(`You choose Volkswagen and it will cost $40!`);
            expect(rentCar.calculatePriceOfCar('Audi', 5)).to.equal(`You choose Audi and it will cost $180!`);

        });
    })

    describe('CheckBudget method test', () => {

        //Invalid input
        it('Invalid input: Test with number, string,  number', () => {

            expect(() => rentCar.checkBudget(1, '1', 1)).to.throw();
        });

        it('Invalid input: Test with string, number,  number', () => {

            expect(() => rentCar.checkBudget('1', 1, 1)).to.throw();
        });

        it('Invalid input: Test with number, number,  string', () => {

            expect(() => rentCar.checkBudget(1, 1, '1')).to.throw();
        });

        it('Invalid input: Test with arr, number,  number', () => {

            expect(() => rentCar.checkBudget(['1'], 1, 1)).to.throw();
        });

        //Correct input
        it('Should return correct answers', () => {

            expect(rentCar.checkBudget(1,1,1)).to.equal(`You rent a car!`);
            expect(rentCar.checkBudget(2,3,8)).to.equal(`You rent a car!`);
            expect(rentCar.checkBudget(2,3,6)).to.equal(`You rent a car!`);

            expect(rentCar.checkBudget(2,1,1)).to.equal('You need a bigger budget!');
            expect(rentCar.checkBudget(5,2,8)).to.equal('You need a bigger budget!');
        });
    })

})