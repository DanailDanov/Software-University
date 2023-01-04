function charactersInRange(firstChar, secondChar) {

    let startRange = Math.min(firstChar.charCodeAt(), secondChar.charCodeAt());
    let endRange = Math.max(firstChar.charCodeAt(), secondChar.charCodeAt());
    let arr = [];

    for (let i = startRange + 1; i < endRange; i++) {
        let singleChar = String.fromCharCode(i);
        arr.push(singleChar);
    }
    console.log(arr.join(' '));
}

charactersInRange('#', ':');