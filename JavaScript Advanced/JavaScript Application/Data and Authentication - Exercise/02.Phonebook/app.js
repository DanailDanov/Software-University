function attachEvents() {
   
    const ulElement = document.getElementById('phonebook');
    const loadBtn = document.getElementById('btnLoad');
    const createBtn = document.getElementById('btnCreate');

    const url = 'http://localhost:3030/jsonstore/phonebook';
    
    loadBtn.addEventListener('click', loadFunction);

    function loadFunction() {

            fetch(url)
                .then(response => {
                    if(response.ok === false) {
                        throw new Error('Error');
                    }
                    return response.json();
                })
                .then(data => {
                   
                    ulElement.replaceChildren();

                    Object.values(data).forEach(({person, phone, _id}) => {
                        
                        const li = document.createElement('li');
                        li.textContent = `${person}: ${phone}`;

                        const deleteBtn = document.createElement('button');
                        deleteBtn.textContent = 'Delete'

                        li.appendChild(deleteBtn);
                        ulElement.appendChild(li);

                        deleteBtn.addEventListener('click', (e) => {

                            fetch(`http://localhost:3030/jsonstore/phonebook/${_id}`, {method: 'DELETE'})

                            e.target.parentElement.remove();
                        })
                    })
                })
                .catch((error) => alert(error.message));
    }

    createBtn.addEventListener('click', () => {
        
        const personInput = document.getElementById('person');
        const phoneInput = document.getElementById('phone');

        const phonebookInfo = {
            person: personInput.value,
            phone: phoneInput.value,
        }

        fetch(url,  {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(phonebookInfo)
        })

        personInput.value = '';
        phoneInput.value =  '';

        loadFunction()
    })
}

attachEvents();