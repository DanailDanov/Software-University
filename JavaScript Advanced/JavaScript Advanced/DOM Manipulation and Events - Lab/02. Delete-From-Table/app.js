function deleteByEmail() {
    const searchingEmail = document.querySelector('input[type=text]');
    const emails = document.querySelectorAll('tr td:nth-of-type(2)');
    let result = document.getElementById('result')
    for (let element of emails) {
        if (searchingEmail.value === element.textContent) {
            result.textContent = 'Deleted.'
            element.parentNode.remove();

        } else {
            result.textContent = 'Not found.';
        }

    }
    searchingEmail.value = '';
}