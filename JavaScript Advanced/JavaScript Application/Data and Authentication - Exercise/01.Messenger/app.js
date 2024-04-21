function attachEvents() {

    const sendBtn = document.getElementById('submit');
    const refreshBtn = document.getElementById('refresh');

    const url = 'http://localhost:3030/jsonstore/messenger';

    refreshBtn.addEventListener('click', displayMode)

    function displayMode() {

        fetch(url)
            .then(res => {
                if (res.ok === false) {
                    throw new Error('Error');
                }

                return res.json();
            })
            .then((data) => {

                const textArea = document.getElementById('messages');
                const textAreaContent = [];

                Object.values(data).forEach(x => {
                    textAreaContent.push(`${x.author}: ${x.content}`);
                })
                textArea.value = textAreaContent.join('\n');
            })
            .catch((error) => alert(error.message));
    }

    sendBtn.addEventListener('click', () => {

        const nameInput = document.querySelector('input[name="author"]');
        const messageInput = document.querySelector('input[name="content"]');

        if (nameInput.value === '' || messageInput.value === '') {
            return;
        }

        const postInformation = {
            author: nameInput.value.trim(),
            content: messageInput.value.trim(),
        }

        fetch(url, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(postInformation)
        })
            .then(res => {
                if (res.ok === false) {
                    throw new Error('Error');
                }

                return res.json();
            })
            .catch((error) => alert(error.message))

        nameInput.value = '';
        messageInput.value = '';
    })
}

attachEvents();


