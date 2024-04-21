function books() {

    const tbody = document.querySelector('tbody');

    const loadAllBooks = document.getElementById('loadBooks');
    const form = document.querySelector('form');

    const url = 'http://localhost:3030/jsonstore/collections/books';

    form.addEventListener('submit', buttonsDelegation);
    loadAllBooks.addEventListener('click', loadBooks);

    function loadBooks() {

        tbody.innerHTML = '';

        fetch(url)
            .then(res => {
                if (res.ok === false) {
                    throw new Error('Error');
                }

                return res.json();
            })
            .then(data => {

                let entries = Object.entries(data);

                for (let [key, { author, title }] of entries) {

                    const tr = document.createElement('tr');

                    tr.innerHTML =
                        `<td>${title}</td>
                    <td>${author}</td>
                    <td>
                    <button id=${key}>Edit</button>
                    <button id=${key}>Delete</button>
                    </td>`;

                    tbody.appendChild(tr);

                    const editBtn = tr.getElementsByTagName('button')[0];
                    const deleteBtn = tr.getElementsByTagName('button')[1];

                    editBtn.addEventListener('click', editFunction);
                    deleteBtn.addEventListener('click', deleteFunction);

                }

            })
    }

    function submitFunction(e) {
        e.preventDefault();

        const formData = new FormData(e.target);
        const author = formData.get('author');
        const title = formData.get('title');

        console.log(formData);
        if (author === '' || title === '') {
            return;
        }

        fetch(url, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ author, title })
        })

        e.target.reset();
    }

    function deleteFunction(e) {

        const id = e.target.id;

        fetch(`${url}/${id}`, { method: 'DELETE' });

        e.target.parentElement.parentElement.remove();
    }

    function editFunction(event) {
        const parentNode = event.currentTarget.parentNode.parentNode;
        const title = parentNode.getElementsByTagName('td')[0].textContent;
        const author = parentNode.getElementsByTagName('td')[1].textContent;
        document.querySelector('input[name="author"]').value = author;
        document.querySelector('input[name="title"]').value = title;
        document.getElementsByTagName('h3')[0].textContent = 'Edit FORM'

        const btns = [...document.getElementsByTagName('button')];

        btns.forEach(btn => {
            if (btn.textContent === 'Submit') {
                localStorage.setItem('bookData', event.currentTarget.id);    
                btn.textContent = 'Save';
                //така записваме данните за книгата в local storage на браузера
            }
        })
    }

    function updateElement(e) {
        e.preventDefault();

        let id = localStorage.getItem('bookData');
        localStorage.removeItem('bookData');

        const formData = new FormData(e.target);
        const author = formData.get('author');
        const title = formData.get('title');

        e.target.getElementsByTagName('button')[0].textContent = 'Submit';
        e.target.getElementsByTagName('h3')[0].textContent = 'FORM'

        fetch(`${url}/${id}`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ author, title })
        })

        loadBooks();
        e.target.reset();
    }

    function buttonsDelegation(e) {

        const currentBtn = e.currentTarget.querySelector('button');

        if (currentBtn.textContent === 'Submit') {
            submitFunction(e);
        } else if (currentBtn.textContent === 'Save') {
            updateElement(e);
        }
    }
}

books();

