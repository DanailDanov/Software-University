window.addEventListener('load', solve);

function solve() {

    const firstNameInput = document.getElementById('first-name');
    const lastNameInput = document.getElementById('last-name');
    const numberOfPeopleInput = document.getElementById('people-count');
    const fromDateInput = document.getElementById('from-date');
    const numberOfDaysInput = document.getElementById('days-count');
    const ulTicketInfo = document.querySelector('.ticket-info-list');
    const ulConfrimTicket = document.querySelector('.confirm-ticket');
    const mainDiv = document.getElementById('main');

    const nextStepBtn = document.getElementById('next-btn');
    nextStepBtn.addEventListener('click', nextStep);

    function nextStep(event) {
        event.preventDefault();

        const firstName = firstNameInput.value;
        const lastName = lastNameInput.value;
        const numberOfPeople = numberOfPeopleInput.value;
        const fromDate = fromDateInput.value;
        const numberOfDays = numberOfDaysInput.value;

        if (firstName === '' ||
            lastName === '' ||
            numberOfPeople === '' ||
            fromDate === '' ||
            numberOfDays === ''
        ) {
            return;
        }

        const liElement = generateHtmlElement('li', '', ulTicketInfo, { className: 'ticket' });
        const articleElement = generateHtmlElement('article', '', liElement);
        const h3Element = generateHtmlElement('h3', `Name: ${firstName} ${lastName}`, articleElement);
        const pAgeElement = generateHtmlElement('p', `From date: ${fromDate}`, articleElement);
        const pTitleElement = generateHtmlElement('p', `For ${numberOfDays} days`, articleElement);
        const pPeopleElement = generateHtmlElement('p', `For ${numberOfPeople} people`, articleElement);
        const editButton = generateHtmlElement('button', 'Edit', liElement, { className: 'edit-btn' }, edit);
        const continueButton = generateHtmlElement('button', 'Continue', liElement, { className: 'continue-btn' }, continueBtn);

        nextStepBtn.disabled = true;

        firstNameInput.value = '';
        lastNameInput.value = '';
        numberOfPeopleInput.value = '';
        fromDateInput.value = '';
        numberOfDaysInput.value = '';

        function edit() {
            liElement.remove();

            firstNameInput.value = firstName;
            lastNameInput.value = lastName;
            numberOfPeopleInput.value = numberOfPeople;
            fromDateInput.value = fromDate;
            numberOfDaysInput.value = numberOfDays;

            nextStepBtn.disabled = false;
        }

        function continueBtn() {
            liElement.remove();

            const liElementContinue = generateHtmlElement('li', '', ulConfrimTicket, { className: 'ticket-content' });
            const articleElementContinue = generateHtmlElement('article', '', liElementContinue);
            const h3ElementContinue = generateHtmlElement('h3', `Name: ${firstName} ${lastName}`, articleElementContinue);
            const pAgeElementContinue = generateHtmlElement('p', `From date: ${fromDate}`, articleElementContinue);
            const pTitleElementContinue = generateHtmlElement('p', `For ${numberOfDays} days`, articleElementContinue);
            const pPeopleElementContinue = generateHtmlElement('p', `For ${numberOfPeople} people`, articleElementContinue);
            const editButtonContinue = generateHtmlElement('button', 'Confrim', liElementContinue, { className: 'confirm-btn' }, confirmBtn);
            const continueButtonContinue = generateHtmlElement('button', 'Cancel', liElementContinue, { className: 'cancel-btn' }, cancel);

            function cancel() {
                liElementContinue.remove();
                nextStepBtn.disabled = false;
            }

            function confirmBtn() {
                mainDiv.innerHTML = '';

                const h1Element = generateHtmlElement('h1', 'Thank you, have a nice day!', mainDiv, { id: 'thank-you' });
                const backBtn = generateHtmlElement('button', 'Back', mainDiv, { id: 'back-btn' }, backFunction);

                function backFunction() {
                    location.reload();
                }
            }

        }
    }

    function generateHtmlElement(type, content, parent, attributes, callback) {
        const element = document.createElement(type);
        element.textContent = content;
        parent ? parent.appendChild(element) : null;
        attributes ? Object.assign(element, attributes) : null;
        typeof callback === 'function' ? element.addEventListener('click', callback) : null;
        return element;
    }

}




