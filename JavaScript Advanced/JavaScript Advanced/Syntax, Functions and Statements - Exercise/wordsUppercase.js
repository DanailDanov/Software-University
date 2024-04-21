function wordsUppercase(input) {

    const patternForMatches = /\w+/g;
    const upperCase = input.toUpperCase();
    let matches = input.match(patternForMatches);

    matches = String(matches).toUpperCase().split(',');

    console.log(matches.join(', '));
}

wordsUppercase('Hi, how are you?');