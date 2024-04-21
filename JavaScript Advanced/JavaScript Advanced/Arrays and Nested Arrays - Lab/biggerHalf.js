function biggerHalf(input) {

    let sortedInput = input.sort((a, b) => a - b);

    if (sortedInput.length % 2 === 0) {
        let biggerHalf = sortedInput.slice(-sortedInput.length / 2);
        return biggerHalf;
    } else {
        let even = Math.ceil(sortedInput.length / 2);
        let evenHalf = sortedInput.slice(-even);
        return evenHalf;
    }
}

biggerHalf([3, 19, 14, 7, 2, 19, 6]);