function lockedProfile() {
    Array.from(document.querySelectorAll('button')).forEach(x => x.addEventListener('click', OnCLick));


    function OnCLick(event) {

        let profile = event.target.parentElement;
        let isActive = event.target.parentElement.querySelector('input[value]').checked;

        if (isActive === false) {

            let div = profile.querySelector('div');

            if (event.target.textContent === 'Show more') {
                div.style.display = 'block';
                event.target.textContent = 'Hide it';
            } else {
                div.style.display = "none";
                event.target.textContent = 'Show more';
            }
        }
    }
}