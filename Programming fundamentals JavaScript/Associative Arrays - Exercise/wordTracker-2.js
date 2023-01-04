function wordTracker(input) {

    let foundWord = {};

    let wordAsArray = input.shift().split(" ");

    wordAsArray.map(word => foundWord[word] = 0);

    for (const line of input) {
        if (foundWord.hasOwnProperty(line)) {
            foundWord[line]++;
        }
    }

    let sorted = Object.entries(foundWord).sort((a, b) => b[1] - a[1]);
    
    for (const line of sorted) {
        console.log(`${line[0]} - ${line[1]}`);
    }

}

wordTracker(['this sentence',
    'In', 'this', 'sentence', 'you', 'have', 'to', 'count', 'the', 'occurrences', 'of', 'the', 'words',
    'this', 'and', 'sentence', 'because', 'this', 'is', 'your', 'task']);
