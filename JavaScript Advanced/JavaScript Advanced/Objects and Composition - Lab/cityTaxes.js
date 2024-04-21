function cityTaxes(name, population, treasury) {

    const finalResult = {
        name,
        population,
        treasury,
        taxRate: 10,
        collectTaxes() {
            this.treasury += this.taxRate * this.population;
        },
        applyGrowth(percentage) {
            this.population += Math.floor(this.population * percentage / 100);
        },
        applyRecession(percentage) {
            this.treasury -= Math.ceil(this.treasury * percentage / 100);
        },
    }

    return finalResult;
}

const city = cityTaxes('Tortuga', 7000, 15000);

city.collectTaxes()
console.log(city.treasury);