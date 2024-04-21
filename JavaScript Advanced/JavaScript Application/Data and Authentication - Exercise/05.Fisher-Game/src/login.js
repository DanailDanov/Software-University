function login() {

    const loginForm = document.querySelector('form');

    const loginUrl = 'http://localhost:3030/users/login';

    loginForm.addEventListener('submit', loginFunction);

    document.getElementById('logout').style.display = 'none';

    function loginFunction(e) {
        e.preventDefault();

        const formData = new FormData(e.currentTarget);

        const { email, password } = Object.fromEntries(formData);

        fetch(loginUrl, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ email, password })
        })
            .then(res => {
                if(!res.ok) {
                    throw new Error('Error');
                }
                return res.json();
            })
            .then(data => {
                console.log(data);

                const userData = {
                    email: data.email,
                    password: data.password,
                    token: data.accessToken,
                }
                localStorage.setItem('userData', JSON.stringify(userData));
                window.location = './index.html';
            })
            .catch(error => {
                alert(error.message);
            })
    }   
}

login();