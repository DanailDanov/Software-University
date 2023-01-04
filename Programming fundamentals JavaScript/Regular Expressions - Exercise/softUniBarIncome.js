function softUniBarIncome(input) {

    let pattern = /%(?<name>[A-Z][a-z]+)%[^|$%.]*<(?<product>\w+)>[^|$%.]*\|(?<count>\d+)\|[^0-9\|%$.]*(?<price>\d+[\.]*\d+)\$/g;
    let command = input.shift();
    let totalIncome = 0;

    while (command !== 'end of shift') {

        let elements = command.matchAll(pattern);

        for (const element of elements) {

            let currentName = element.groups.name;
            let currentProduct = element.groups.product;
            let currentCount = Number(element.groups.count);
            let currentPrice = Number(element.groups.price);

            let sum = currentCount * currentPrice;
            console.log(`${currentName}: ${currentProduct} - ${sum.toFixed(2)}`);
            totalIncome += sum;
        }

        command = input.shift();
    }

    console.log(`Total income: ${totalIncome.toFixed(2)}`);

}

softUniBarIncome(['%InvalidName%<Croissant>|2|10.3$',
    '%Peter%<Gum>1.3$',
    '%Maria%<Cola>|1|2.4',
    '%Valid%<Valid>valid|10|valid20$',
    'end of shift']);