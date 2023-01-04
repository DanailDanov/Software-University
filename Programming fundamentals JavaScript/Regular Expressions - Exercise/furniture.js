function furniture(input) {

    let pattern = />>(?<furnitureName>[A-Z][A-Z,a-z]+)<<(?<price>\d+\.\d+|\d+)!(?<quantity>\d+)\b/gm

    let command = input.shift();
    let array = [];

    let totalSum = 0;
    let isValid = false;

    while (command !== 'Purchase') {

        if (command.match(pattern)) {
            isValid = true;
            let result = command.matchAll(pattern);
            for (const element of result) {
                let furniture = element.groups.furnitureName
                let price = Number(element.groups.price);
                let quantity = Number(element.groups.quantity);
                let sum = price * quantity;

                totalSum += sum
                array.push(furniture);
            }
        }

        command = input.shift();
    }

    if (isValid === false) {
        console.log('Bought furniture:');
        console.log(`Total money spend: ${totalSum.toFixed(2)}`);
    } else {
        console.log('Bought furniture:');
        console.log(array.join('\n'));
        console.log(`Total money spend: ${totalSum.toFixed(2)}`);
    }

}

furniture(['>>Sofa<<312.23!3',
    '>>TV<<300!5',
    '>Invalid<<!5',
    'Purchase']);

furniture(['>Invalid<<!4',
    '>Invalid<<!2',
    '>Invalid<<!5',
    'Purchase'])
