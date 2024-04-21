const { flowerShop } = require('./flowersShop');
const { expect } = require('chai');

describe('flowerShop tests', () => {

    describe('calcPriceOfFlowers method test', () => {

        // Invalid input
        // Expect string, number, number
        
        it('Test with number, string, number', () => {
            expect(() => flowerShop.calcPriceOfFlowers(1, '1', 1)).to.throw();
        });

        it('Test with string, string, number', () => {
            expect(() => flowerShop.calcPriceOfFlowers('1', '1', 1)).to.throw();
        });

        it('Test with string, number, string', () => {
            expect(() => flowerShop.calcPriceOfFlowers('1', 1, '1')).to.throw();
        });

        it('Test with arr, number, number', () => {
            expect(() => flowerShop.calcPriceOfFlowers(['1'], 1, 1)).to.throw();
        });

        // Correct input

        it('Should return correct answers', () => {
            expect(flowerShop.calcPriceOfFlowers('Orchid', 2, 4)).to.equal(`You need $8.00 to buy Orchid!`);
            expect(flowerShop.calcPriceOfFlowers('Lily', 3.0, 2)).to.equal(`You need $6.00 to buy Lily!`);
        });

    })

    describe('checkFlowersAvailable method test', () => {

        // The function checks whether the submitted string flower is present in the array gardenArr; 

        it('Should return correct answer if the flower exists', () => {
            expect(flowerShop.checkFlowersAvailable('Lily', ["Rose", "Lily", "Orchid"])).to.equal(`The Lily are available!`);
            expect(flowerShop.checkFlowersAvailable('Rose', ["Rose", "Lily", "Orchid"])).to.equal(`The Rose are available!`);
        });

        it('Should return wrong answer if the flower doesn`t exists', () => {
            expect(flowerShop.checkFlowersAvailable('Snowflake', ["Rose", "Lily", "Orchid"])).to.equal(`The Snowflake are sold! You need to purchase more!`);
            expect(flowerShop.checkFlowersAvailable('Lavender', ["Rose", "Lily", "Orchid"])).to.equal(`The Lavender are sold! You need to purchase more!`);
        });
    })

    describe('sellFlowers method test', () => {

        // Expect array and number 
        // Invalid input

        it('Test with string, number', () => {
            expect(() => flowerShop.sellFlowers('ddd', 1)).to.throw();
        });

        it('Test with arr, string', () => {
            expect(() => flowerShop.sellFlowers(['ddd'], '1')).to.throw();
        });

        it('Test with number, number', () => {
            expect(() => flowerShop.sellFlowers(1, 1)).to.throw();
        });

        it('Test with string, string', () => {
            expect(() => flowerShop.sellFlowers('ddd', '1')).to.throw();
        });

        it('Test with arr, negative number', () => {
            expect(() => flowerShop.sellFlowers(['ddd'], -1)).to.throw();
        });

        it('Test with arr, index equal to arr.length', () => {
            expect(() => flowerShop.sellFlowers(['ddd'], 3)).to.throw();
        });

        it('Test with arr, bigger index', () => {
            expect(() => flowerShop.sellFlowers(['ddd'], 4)).to.throw();
        });

        it('Test with number, bigger index', () => {
            expect(() => flowerShop.sellFlowers(1, 4)).to.throw();
        });

        it('Test with string, negative index', () => {
            expect(() => flowerShop.sellFlowers('ddd', -1)).to.throw();
        });

        // Correct input

        it('Should return correct answer', () => {
            expect(flowerShop.sellFlowers(["Rose", "Lily", "Orchid"], 1)).to.equal('Rose / Orchid');
            expect(flowerShop.sellFlowers(["Rose", "Lily", "Orchid"], 0)).to.equal('Lily / Orchid');
            expect(flowerShop.sellFlowers(["Rose", "Lily", "Orchid"], 2)).to.equal('Rose / Lily');
        });

    })
})