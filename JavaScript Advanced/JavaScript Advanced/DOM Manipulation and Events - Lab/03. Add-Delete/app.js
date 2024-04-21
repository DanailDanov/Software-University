function addItem() {

    const inputField = document.getElementById('newItemText');
    const apenndItem = document.getElementById('items');

    let newLi = document.createElement('li');

    newLi.textContent = inputField.value;

    let deleteElement = document.createElement('a');
    deleteElement.href = '#';
    deleteElement.textContent = '[Delete]';
    newLi.appendChild(deleteElement);
    apenndItem.appendChild(newLi);

    deleteElement.addEventListener('click', deleteEl);

    function deleteEl (event) {
        event.currentTarget.parentElement.remove();
    }
}