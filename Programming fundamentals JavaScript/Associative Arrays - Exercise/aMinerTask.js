function aMinerTask(input) {

    let colection = {};

    for (let i = 0; i < input.length; i += 2) {
        let resource = input[i];
        let quantity = Number(input[i + 1]);

        if (!colection.hasOwnProperty(resource)) {
            colection[resource] = 0;
        }

        colection[resource] += quantity;
    }

    for (const key in colection) {
        console.log(`${key} -> ${colection[key]}`);
    }

}

aMinerTask([
    'gold',
    '155',
    'silver',
    '10',
    'copper',
    '17',
    'gold',
    '15']);
