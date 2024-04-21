function register() {

    const registerForm = document.querySelector('form');

    registerForm.addEventListener('submit', registerFunction);

    const registerUrl = 'http://localhost:3030/users/register';

    document.getElementById('logout').style.display = 'none';
    
    function registerFunction(e) {
        e.preventDefault();

        const formData = new FormData(e.currentTarget);
        const { email, password, rePass } = Object.fromEntries(formData);

        if(email === '' || password === '' || rePass === '') {
            return;
        }

        fetch(registerUrl, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ email, password, rePass })
        })
            .then(res => {
                if(!res.ok) {
                    throw new Error('Error');
                }

                return res.json();
            })
            .then(data => {

                localStorage.setItem('userData', JSON.stringify(data));
                window.location = './index.html';
            })
            .catch((error) => {
                document.querySelector('form').reset();
                alert(error.message);
            })
    }

}

register();