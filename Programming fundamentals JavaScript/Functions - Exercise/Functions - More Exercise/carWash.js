function carWash(array) {

    let sum = 0;

    for (let i = 0; i < array.length; i++) {

        switch (array[i]) {
            case 'soap': sum += 10
                break;
            case 'vacuum cleaner': sum *= 1.25;
                break;
            case 'mud': sum *= 0.90;
                break;
            case 'water': sum *= 1.2;
                break;
        }

    }
    console.log(`The car is ${sum.toFixed(2)}% clean.`);

}

carWash(["soap", "water", "mud", "mud", "water", "mud", "vacuum cleaner"]);