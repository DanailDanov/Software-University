function reverseInPlace(input) {

    for (let i = 0; i < input.length / 2; i++) {
        let currentElement = input[i]

        input[i] = input[input.length - 1 - i];
        input[input.length - 1 - i] = currentElement;

    }

    console.log(input.join(' '));


}

reverseInPlace(['a', 'b', 'c', 'd', 'e']);