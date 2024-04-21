function extract(content) {

    const text = document.getElementById('content').textContent;

    let result = '';
    let pattern = /\((?<word>\w+(\s*\w+)*)\)/g;

    let match = text.matchAll(pattern);

    for (const element of match) {
        result += element.groups.word + '; ';
    }

    return result.trim();
}

