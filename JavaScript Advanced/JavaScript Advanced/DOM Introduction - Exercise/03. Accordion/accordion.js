function toggle() {

    const button = document.querySelector('.button');
    const showText = document.getElementById('extra')

    if (button.textContent === 'More') {
        button.textContent = 'Less';
        showText.style.display = 'block';
    } else if (button.textContent === 'Less') {
        button.textContent = 'More';
        showText.style.display = 'none';
    }
}