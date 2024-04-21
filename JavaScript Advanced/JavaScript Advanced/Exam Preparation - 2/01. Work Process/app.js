function solve() {

    const firstNameInput = document.getElementById('fname');
    const lastNameInput = document.getElementById('lname');
    const emailInput = document.getElementById('email');
    const dateOfBirthInput = document.getElementById('birth');
    const positionInput = document.getElementById('position');
    const salaryInput = document.getElementById('salary');

    const hireWorkerBtn = document.getElementById('add-worker');

    hireWorkerBtn.addEventListener('click', onClick);

    function onClick(event) {
        event.preventDefault();

        const firstName = firstNameInput.value;
        const lastName = lastNameInput.value;
        const email = emailInput.value;
        const dateOfBirth = dateOfBirthInput.value;
        const position = positionInput.value;
        const salary = salaryInput.value;

        if (firstName === '' || lastName === '' || email === '' || dateOfBirth === '' || position === '' || salary === '') {
            return;
        }

        const element = document.getElementById('tbody');

        const tr = document.createElement('tr');

        tr.innerHTML = `
        <td>${firstName}</td>
        <td>${lastName}</td>
        <td>${email}</td>
        <td>${dateOfBirth}</td>
        <td>${position}</td>
        <td>${salary}</td>
        <td><button class='fired'>Fired</button> <button class='edit'>Edit</button></td>
        `;

        element.appendChild(tr);

        const sum = document.getElementById('sum');

        const currentSalary = Number(sum.textContent);
        const addedSalary = Number(salary);
        sum.textContent = (currentSalary + addedSalary).toFixed(2);

        firstNameInput.value = '';
        lastNameInput.value = '';
        emailInput.value = '';
        dateOfBirthInput.value = '';
        positionInput.value = '';
        salaryInput.value = '';

        tr.querySelector('.edit').addEventListener('click', edit);

        function edit() {
            event.preventDefault();
            tr.remove();

            firstNameInput.value = firstName;
            lastNameInput.value = lastName;
            emailInput.value = email;
            dateOfBirthInput.value = dateOfBirth;
            positionInput.value = position;
            salaryInput.value = salary;

            const sumSalary = Number(sum.textContent);
            sum.textContent = Math.abs((Number(addedSalary) - sumSalary)).toFixed(2);
        }

        tr.querySelector('.fired').addEventListener('click', fired);

        function fired() {
            tr.remove();

            const sumSalary = Number(sum.textContent);
            sum.textContent = Math.abs((Number(addedSalary) - sumSalary)).toFixed(2);
        }
    }
}
solve()