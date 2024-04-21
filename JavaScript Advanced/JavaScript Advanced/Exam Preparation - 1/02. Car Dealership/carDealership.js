class CarDealership {
    constructor(name) {
        this.name = name;
        this.availableCars = [];
        this.soldCars = [];
        this.totalIncome = 0;
    }

    addCar(model, horsepower, price, mileage) {

        if (model === '' || horsepower < 0 || price < 0 || mileage < 0) {
            throw new Error('Invalid input!');
        } else {
            let car = { model, horsepower, price, mileage };
            this.availableCars.push(car);

            return `New car added: ${model} - ${horsepower} HP - ${mileage.toFixed(2)} km - ${price.toFixed(2)}$`
        }
    }

    sellCar(model, desiredMileage) {

        const findCar = this.availableCars.find(x => x.model === model);
        const index = this.availableCars.indexOf(findCar);

        if (findCar === undefined) {
            throw new Error(`${model} was not found!`)
        }

        if (findCar.mileage <= desiredMileage) {
            findCar.price = findCar.price
        } else if (findCar.mileage - desiredMileage <= 40000) {
            findCar.price *= 0.95;
        } else if (findCar.mileage - desiredMileage > 40000) {
            findCar.price *= 0.9;
        }

        this.availableCars.splice(index, 1);

        this.soldCars.push({
            model,
            horsepower: findCar.horsepower,
            soldPrice: findCar.price,
        });

        this.totalIncome += findCar.price;

        return `${model} was sold for ${findCar.price.toFixed(2)}$`;
    }

    currentCar() {

        const cars = ['-Available cars:'];

        if (this.availableCars.length > 0) {
            for (const element of this.availableCars) {
                cars.push(`---${element.model} - ${element.horsepower} HP - ${element.mileage.toFixed(2)} km - ${element.price.toFixed(2)}$`);
            }
        } else {
            return 'There are no available cars';
        }

        return cars.join('\n');
    }

    salesReport(criteria) {
        if(criteria !== "horsepower" && criteria !== "model") {
            throw new Error('Invalid criteria!');
        }

        if (criteria === 'horsepower') {
            this.soldCars.sort((a, b) => b.horsepower - a.horsepower);
        } else if (criteria === 'model') {
            this.soldCars.sort((a, b) => a.model.localeCompare(b.model));
        } 

        let result = [
            `-${this.name} has a total income of ${this.totalIncome.toFixed(2)}$`,
            `-${this.soldCars.length} cars sold:`
        ];

        this.soldCars.forEach((car) => {
            result.push(`---${car.model} - ${car.horsepower} HP - ${car.soldPrice.toFixed(2)}$`);
        });

        return result.join('\n');
    }
}

let dealership = new CarDealership('SoftAuto');

dealership.addCar('Toyota Corolla', 100, 3500, 190000);
dealership.addCar('Mercedes C63', 300, 29000, 187000);
dealership.addCar('Audi A3', 120, 4900, 240000);
dealership.sellCar('Toyota Corolla', 230000);
dealership.sellCar('Mercedes C63', 110000);
console.log(dealership.salesReport('horsepower'));











