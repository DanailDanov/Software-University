function partyTime(input) {

    let guestsList = {};

    let command = input.shift();

    while (command !== "PARTY") {

        guestsList[command] = null;

        command = input.shift();
    }

    for (const command of input) {
        if (guestsList.hasOwnProperty(command)) {
            delete guestsList[command];
        }
    }

    let sorted = Object.keys(guestsList).sort((a, b) => a - b);

    console.log(sorted.length);

    for (const result of sorted) {
        console.log(result);
    }

}

partyTime(['m8rfQBvl',
    'fc1oZCE0',
    'UgffRkOn',
    '7ugX7bm0',
    '9CQBGUeJ',
    '2FQZT3uC',
    'dziNz78I',
    'mdSGyQCJ',
    'LjcVpmDL',
    'fPXNHpm1',
    'HTTbwRmM',
    'B5yTkMQi',
    '8N0FThqG',
    'xys2FYzn',
    'MDzcM9ZK',
    'PARTY',
    '2FQZT3uC',
    'dziNz78I',
    'mdSGyQCJ',
    'LjcVpmDL',
    'fPXNHpm1',
    'HTTbwRmM',
    'B5yTkMQi',
    '8N0FThqG',
    'm8rfQBvl',
    'fc1oZCE0',
    'UgffRkOn',
    '7ugX7bm0',
    '9CQBGUeJ'
]
);