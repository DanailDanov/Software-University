function modernTimesOfHashTag(sentence) {

    let sentenceAsArray = sentence.split(' ');
    let finalWord = '';

    for (const wordInSentence of sentenceAsArray) {
        if (wordInSentence.includes('#') && wordInSentence.length > 1) {
            finalWord = wordInSentence.substring(1);
            let isValid = true
            for (let i = 0; i < finalWord.length; i++) {
                if ((finalWord.charCodeAt(i) < 65 || finalWord.charCodeAt(i) > 90) && (finalWord.charCodeAt(i) < 97 || finalWord.charCodeAt(i) > 122)) {
                    isValid = false;
                    break;
                }

            }
            if (isValid) {
                console.log(finalWord);                                                                                                                                                                                                                                                                                 
            }
        }
    }

}

modernTimesOfHashTag('Nowadays everyone uses # to tag a #special word in #socialMedia');