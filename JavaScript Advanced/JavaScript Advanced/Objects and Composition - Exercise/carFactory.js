function carFactory(data) {

    const result = { model: data.model };

    const engineENum = {
        'Small engine': { power: 90, volume: 1800 },
        'Normal engine': { power: 120, volume: 2400 },
        'Monster engine': { power: 200, volume: 3500 },
    }

    if (data.power <= 90) {
        result.engine = engineENum['Small engine'];
    } else if (data.power <= 120) {
        result.engine = engineENum['Normal engine'];
    } else {
        result.engine = engineENum['Monster engine'];
    }

    if (data.carriage === 'hatchback') {
        result.carriage = { type: data.carriage, color: data.color };
    } else if (data.carriage === 'coupe') {
        result.carriage = { type: data.carriage, color: data.color };
    }

    if (data.wheelsize % 2 === 0) {
        data.wheelsize--;

    }

    result.wheels = [data.wheelsize, data.wheelsize, data.wheelsize, data.wheelsize];

    return result;
}

carFactory({
    model: 'VW Golf II',
    power: 90,
    color: 'blue',
    carriage: 'hatchback',
    wheelsize: 14
}
);