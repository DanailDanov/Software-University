const host = 'http://localhost:3030';

async function appiCalls(method, url, data) {

    const options = {
        method,
        headers: {},
    }

    if (data) {
        options.headers['Content-Type'] = 'application/json';
        options.body = JSON.stringify(data);
    }

    const userData = JSON.parse(sessionStorage.getItem('userData'));

    if (userData) {
        options.headers['X-Authorization'] = userData.accessToken;
    }

    try {
        const response = await fetch(`${host}${url}`, options);

        if (!response.ok) {
            const error = await response.json();
            throw new Error(error.message);
        }

        return response.status === 204 ? response : await response.json();

    } catch (error) {
        alert(error.message);
        throw error;
    }
}

const methodsEnum = {
    GET: 'GET',
    POST: 'POST',
    PUT: 'PUT',
    DELETE: 'DELETE'
}

export function get(url) {
    return appiCalls(methodsEnum.GET, url);
}

export function post(url, data) {
    return appiCalls(methodsEnum.POST, url, data);
}

export function put(url, data) {
    return appiCalls(methodsEnum.PUT, url, data);
}

export function del(url) {
    return appiCalls(methodsEnum.DELETE, url);
}