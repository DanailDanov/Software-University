function replaceRepeatingChars(input) {

    let array = input.split('');
    let result = '';

    for (let i = 0; i < array.length; i++) {
        let currentLetter = array[i];
        if (currentLetter !== array[i + 1]) {
            result += currentLetter;
        }
    }
    console.log(result);
}

replaceRepeatingChars('qqqwerqwecccwd');