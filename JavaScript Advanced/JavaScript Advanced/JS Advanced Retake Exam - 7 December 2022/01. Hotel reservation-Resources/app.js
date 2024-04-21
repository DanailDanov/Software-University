window.addEventListener('load', solve);

function solve() {

    const firstNameInput = document.getElementById('first-name');
    const lastNameInput = document.getElementById('last-name');
    const checkInInput = document.getElementById('date-in');
    const checkOutInput = document.getElementById('date-out');
    const numberOfGuestsInput = document.getElementById('people-count');

    const nextBtnInput = document.getElementById('next-btn');

    nextBtnInput.addEventListener('click', onclick);

    function onclick(event) {
        event.preventDefault();

        const firstName = firstNameInput.value;
        const lastName = lastNameInput.value;
        const checkIn = checkInInput.value;
        const checkOut = checkOutInput.value;
        const numberOfGuests = numberOfGuestsInput.value;

        if (
            firstName === '' ||
            lastName === '' ||
            checkIn === '' ||
            checkOut === '' ||
            numberOfGuests === '' ||
            checkOut < checkIn
        ) {
            return;
        }

        const ulReservationInfo = document.querySelector('.info-list');

        const li = document.createElement('li');

        li.classList.add('reservation-content');

        li.innerHTML = `
        <article>
        <h3>Name: ${firstName} ${lastName}</h3>
        <p>From date: ${checkIn}</p>
        <p>To date: ${checkOut}</p>
        <p>For ${numberOfGuests} people</p>
        </article>
        <button class='edit-btn'>Edit</button> 
        <button class='continue-btn'>Continue</button>
        `;

        ulReservationInfo.appendChild(li);

        firstNameInput.value = '';
        lastNameInput.value = '';
        checkInInput.value = '';
        checkOutInput.value = '';
        numberOfGuestsInput.value = '';

        nextBtnInput.disabled = true;

        li.querySelector('.edit-btn').disabled = false;
        li.querySelector('.continue-btn').disabled = false;

        document.querySelector('.edit-btn').addEventListener('click', editBtn);

        function editBtn() {

            firstNameInput.value = firstName;
            lastNameInput.value = lastName;
            checkInInput.value = checkIn;
            checkOutInput.value = checkOut;
            numberOfGuestsInput.value = numberOfGuests;

            nextBtnInput.disabled = false;

            li.remove();
        }

        document.querySelector('.continue-btn').addEventListener('click', continueBtn);

        function continueBtn() {

            li.classList.add('reservation-content');

            const ulConfirmReservation = document.querySelector('.confirm-list');

            li.innerHTML = `
            <article>
            <h3>Name: ${firstName} ${lastName}</h3>
            <p>From date: ${checkIn}</p>
            <p>To date: ${checkOut}</p>
            <p>For ${numberOfGuests} people</p>
            </article>
            <button class='confirm-btn'>Confirm</button> 
            <button class='cancel-btn'>Cancel</button>
            `;

            ulConfirmReservation.appendChild(li);

            document.querySelector('.confirm-btn').addEventListener('click', confirmBtn);

            function confirmBtn() {

                li.remove();
                nextBtnInput.disabled = false;

                const verification = document.getElementById('verification');
                verification.classList.add('reservation-confirmed');
                verification.textContent = 'Confirmed.';

                firstNameInput.value = '';
                lastNameInput.value = '';
                checkInInput.value = '';
                checkOutInput.value = '';
                numberOfGuestsInput.value = '';
            }

            document.querySelector('.cancel-btn').addEventListener('click', cancelBtn);

            function cancelBtn() {

                li.remove();
                nextBtnInput.disabled = false;

                verification.classList.add('reservation-cancelled');
                verification.textContent = 'Cancelled.';

                firstNameInput.value = '';
                lastNameInput.value = '';
                checkInInput.value = '';
                checkOutInput.value = '';
                numberOfGuestsInput.value = '';
            }
        }
    }
}





