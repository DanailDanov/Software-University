function race(input) {

    let patternForName = /[A-Za-z]+/g;
    let patternForDistance = /\d/g;

    let listWithNames = input.shift().split(', ');
    let command = input.shift();

    let result = {};

    while (command !== 'end of race') {

        let matchedName = command.match(patternForName).join('');

        if (listWithNames.includes(matchedName)) {
            let matchedDigits = command.match(patternForDistance).map(Number);
            let sum = matchedDigits.reduce((a, b) => a + b);
            if (!result.hasOwnProperty(matchedName)) {
                result[matchedName] = 0;
            }

            result[matchedName] += sum;
        }

        command = input.shift()
    }

    let sorted = Object.keys(result).sort((a, b) => result[b] - result[a]);

    console.log(`1st place: ${sorted[0]}`);
    console.log(`2nd place: ${sorted[1]}`);
    console.log(`3rd place: ${sorted[2]}`);
}

race(['Ronald, Bill, Tom, Timmy, Maggie, Michonne',
    'Mi*&^%$ch123o!#$%#nne787) ',
    '%$$B(*&&)i89ll)*&) ',
    'R**(on%^&ald992) ',
    'T(*^^%immy77) ',
    'Ma10**$#g0g0g0i0e',
    'end of race']);