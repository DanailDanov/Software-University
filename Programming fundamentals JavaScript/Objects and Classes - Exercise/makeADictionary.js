function makeADictionary(input) {

    let dictionary = {};

    for (const line of input) {
        let convert = JSON.parse(line);
        dictionary = Object.assign(dictionary, convert);
    }

    let sortedEntries = Object.entries(dictionary);

    sortedEntries.sort((a, b) => a[0].localeCompare(b[0]));

    for (const line of sortedEntries) {
        console.log(`Term: ${line[0]} => Definition: ${line[1]}`);
    }


}

makeADictionary([
    '{"Coffee":"A hot drink made from the roasted and ground seeds (coffee beans) of a tropical shrub."}',
    '{"Bus":"A large motor vehicle carrying passengers by road, typically one serving the public on a fixed route and for a fare."}',
    '{"Boiler":"A fuel-burning apparatus or container for heating water."}',
    '{"Tape":"A narrow strip of material, typically used to hold or fasten something."}',
    '{"Microphone":"An instrument for converting sound waves into electrical energy variations which may then be amplified, transmitted, or recorded."}']);