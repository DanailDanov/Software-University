function solve() {

    const infoBox = document.querySelector('.info');
    const departBtn = document.getElementById('depart');
    const arriveBtn = document.getElementById('arrive');

    let stop = {
        next: 'depot'
    }

    function depart() {
        
        departBtn.disabled = true;
        
        const url = `http://localhost:3030/jsonstore/bus/schedule/${stop.next}`;
        
        fetch(url)
            .then(res => res.json())
            .then(data => {
                stop = JSON.parse(JSON.stringify(data));
                infoBox.textContent = `Next stop ${stop.name}`;
            })
            .catch((error) => console.log(error))

        arriveBtn.disabled = false;
    }

    function arrive() {
        infoBox.textContent = `Arriving at ${stop.name}`;
        arriveBtn.disabled = true;
        departBtn.disabled = false;
    }

    return {
        depart,
        arrive
    };
}

let result = solve();