function editElement(element, match, replacer) {

    let text = element.textContent;
    let patternForReplacement = new RegExp(match, 'g');
    let result = text.replace(patternForReplacement, replacer);

    element.textContent = result;
}
