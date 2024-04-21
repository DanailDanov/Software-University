function getInfo() {
    
    const inputValue = document.getElementById('stopId');
    const stopId = document.getElementById('stopName');
    const ulBusses = document.getElementById('buses');

    const url = `http://localhost:3030/jsonstore/bus/businfo/${inputValue.value}`;

    fetch(url)
        .then(res => res.json())
        .then(data => {
            ulBusses.innerHTML = '';
            stopId.textContent = data.name;
            Object.entries(data.buses).forEach(x => {
                const li = document.createElement('li');
                li.textContent = `Bus ${x[0]} arrives in ${x[1]} minutes`;
                ulBusses.appendChild(li);
            })
        })
        .catch(error => {
            stopId.textContent = 'Error';
        });
}