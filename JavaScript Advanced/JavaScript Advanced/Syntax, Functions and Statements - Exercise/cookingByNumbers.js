function cookingByNumbers(...arguments) {

    let number = Number(arguments.shift());

    for (const command of arguments) {
        switch (command) {
            case 'chop':
                number /= 2;
                console.log(number);
                break;
            case 'dice':
                let square = Math.sqrt(number);
                console.log(square);
                number = square;
                break;
            case 'spice':
                number += 1;
                console.log(number);
                break;
            case 'bake':
                number *= 3;
                console.log(number);
                break;
            case 'fillet':
                number *= 0.80;
                console.log(number.toFixed(1));
                break;
        }
    }
}

cookingByNumbers('9', 'dice', 'spice', 'chop', 'bake', 'fillet');