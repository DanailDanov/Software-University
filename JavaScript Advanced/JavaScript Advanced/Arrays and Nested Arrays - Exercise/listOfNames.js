function listOfNames(input) {

    let sortedArray = input.sort((a, b) => a.localeCompare(b));

    for (let index = 0; index < sortedArray.length; index++) {
        let numberName = `${index + 1}.${sortedArray[index]}`
        console.log(numberName);
    }
}

listOfNames(["John", "Bob", "Christina", "Ema"]);