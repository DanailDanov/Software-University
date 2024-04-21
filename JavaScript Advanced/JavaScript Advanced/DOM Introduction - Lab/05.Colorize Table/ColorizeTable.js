function colorize() {

    const listOfNames = document.getElementsByTagName('tr');

    let rows = Array.from(listOfNames);
    rows.forEach((x, i) => {
        if (i % 2 !== 0) {
            x.style.backgroundColor = 'teal';
        }
    })
}