function garage(input) {

    let carsInformation = {};

    for (const line of input) {

        let commands = line.split(' - ');
        let garageNumber = Number(commands.shift());
        let carInfo = commands.shift().split(', ');

        if (!carsInformation.hasOwnProperty(garageNumber)) {
            carsInformation[garageNumber] = [];
        }

        let currentCarInfo = [];

        for (const car of carInfo) {
            let replaceChar = car.replace(': ', ' - ');
            currentCarInfo.push(replaceChar);
        }

        carsInformation[garageNumber].push(currentCarInfo);
    }

    
    for (const el of Object.entries(carsInformation)) {
        console.log(`Garage № ${el[0]}`);
        for (const carInfo of el[1]) {
            console.log(`--- ${carInfo.join(', ')}`);
        }
    }
}

garage(['1 - color: blue, fuel type: diesel', '1 - color: red, manufacture: Audi', '2 - fuel type: petrol', '4 - color: dark blue, fuel type: diesel, manufacture: Fiat']);