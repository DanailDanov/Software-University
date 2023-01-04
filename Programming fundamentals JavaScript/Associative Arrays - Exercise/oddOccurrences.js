function oddOccurrences(input) {

    let foundElement = {};
    let array = [];

    let toLowerCase = input.toLowerCase().split(" ");

    toLowerCase.map(word => foundElement[word] = 0);

    for (let i = 0; i < toLowerCase.length; i++) {

        if (foundElement.hasOwnProperty(toLowerCase[i])) {
            foundElement[toLowerCase[i]]++;
        }

    }

    for (const key in foundElement) {
        if (foundElement[key] % 2 !== 0) {
            array.push(key);
        }
    }


    console.log(array.join(" "));
}

oddOccurrences('Java C# Php PHP Java PhP 3 C# 3 1 5 C#');
