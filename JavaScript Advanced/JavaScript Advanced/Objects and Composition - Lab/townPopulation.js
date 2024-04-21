function townPopulation(data) {

    let finalResult = {};

    for (const element of data) {
        let [town, population] = element.split(' <-> ');
        population = Number(population);

        if (!finalResult.hasOwnProperty(town)) {
            finalResult[town] = 0;
        }
        finalResult[town] += population
    }

    for (const key in finalResult) {
        console.log(`${key} : ${finalResult[key]}`);
    }
}

townPopulation(['Istanbul <-> 100000',
    'Honk Kong <-> 2100004',
    'Jerusalem <-> 2352344',
    'Mexico City <-> 23401925',
    'Istanbul <-> 1000']);
