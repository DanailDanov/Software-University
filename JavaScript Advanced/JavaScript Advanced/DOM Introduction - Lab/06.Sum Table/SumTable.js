function sumTable() {

    const elements = document.querySelectorAll('tr td:nth-of-type(2)');
    const result = document.getElementById('sum');

    const rows = Array.from(elements);

    let sum = 0;

    for (let index = 0; index < rows.length; index++) {

        let currentValue = Number(rows[index].textContent);
        sum += currentValue;
    }

    result.textContent = sum;
}