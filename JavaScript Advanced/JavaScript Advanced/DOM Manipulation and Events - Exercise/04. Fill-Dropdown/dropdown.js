function addItem() {
    const inputText = document.getElementById('newItemText');
    const inputValue = document.getElementById('newItemValue');

    const menu = document.getElementById('menu');

    const optionTag = document.createElement('option');

    optionTag.textContent = inputText.value;
    optionTag.value = inputValue.value;

    menu.appendChild(optionTag);

    inputText.value = '';
    inputValue.value = '';
}