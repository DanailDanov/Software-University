function wordOccurrences(input) {

    let word = {};

    let counter = 0;

    for (const element of input) {
        counter = 0;
        if (!word.hasOwnProperty(element)) {
            counter++;
            word[element] = counter;
        } else {
            counter++;
            let oldValue = Number(word[element]);
            let newValue = oldValue += counter;
            word[element] = newValue;
        }
    }

    let sorted = Object.entries(word);
    sorted.sort((a, b) => b[1] - a[1]);

    for (const line of sorted) {
        console.log(`${line[0]} -> ${line[1]} times`);
    }

}

wordOccurrences(["Here", "is", "the", "first", "sentence", "Here", "is",
    "another", "sentence", "And", "finally", "the", "third", "sentence"]);
