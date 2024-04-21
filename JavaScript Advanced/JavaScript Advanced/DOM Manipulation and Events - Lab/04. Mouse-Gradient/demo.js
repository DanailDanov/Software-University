function attachGradientEvents() {

    const gradient = document.getElementById('gradient');
    const result = document.getElementById('result');
    gradient.addEventListener('mousemove', movingMouse);
    function movingMouse(event) {
        result.textContent = Math.floor((event.offsetX / gradient.clientWidth)) * 100 + '%';
    };
}