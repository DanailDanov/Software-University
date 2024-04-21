function validate() {
    const inputField = document.getElementById('email');

    inputField.addEventListener('change', onClick);

    function onClick(event) {

        let patternForValidEmail = /[a-z]+@[a-z]+\.[a-z]+/g;

        let match = inputField.value.match(patternForValidEmail);

        if (!match) {
            event.target.classList.add('error');
        } else {
            event.target.classList.remove('error');
        }
    }
}