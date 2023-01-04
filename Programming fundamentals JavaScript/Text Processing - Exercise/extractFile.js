function extractFile(filePath) {

    let filePathAsArray = filePath.split('\\');
    let lastElement = filePathAsArray.pop().split('.');

    for (let i = 0; i < lastElement.length; i++) {
        if (lastElement.length === 3) {
            console.log(`File name: ${lastElement[i]}.${lastElement[i + 1]}`);
            console.log(`File extension: ${lastElement[lastElement.length - 1]}`);
            return;
        } else {
            console.log(`File name: ${lastElement[i]}`);
            console.log(`File extension: ${lastElement[lastElement.length - 1]}`);
            return;
        }
    }

}

extractFile('C:\\Internal\\training-internal\\Template.pptx');