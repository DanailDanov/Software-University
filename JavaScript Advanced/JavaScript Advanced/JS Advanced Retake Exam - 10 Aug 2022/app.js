window.addEventListener("load", solve);


function solve() {

  const firstNameInput = document.getElementById('first-name');
  const lastNameInput = document.getElementById('last-name');
  const ageInput = document.getElementById('age');
  const genderInput = document.getElementById('genderSelect');
  const dishDescriptionInput = document.getElementById('task');
  const ulInProgress = document.getElementById('in-progress');
  const ulFinished = document.getElementById('finished');

  const clearBtn = document.getElementById('clear-btn');

  const submitBtn = document.getElementById('form-btn');
  submitBtn.addEventListener('click', submit);

  function submit() {

    const firstName = firstNameInput.value;
    const lastName = lastNameInput.value;
    const age = ageInput.value;
    const gender = genderInput.value;
    const dishDescription = dishDescriptionInput.value;

    if (firstName === '' ||
      lastName === '' ||
      age === '' ||
      dishDescription === ''
    ) {
      return;
    }


    const liElement = generateHtmlElement('li', '', ulInProgress, { className: 'each-line' });
    const articleElement = generateHtmlElement('article', '', liElement);
    const h4Element = generateHtmlElement('h4', `${firstName} ${lastName}`, articleElement);
    const pAgeElement = generateHtmlElement('p', `${gender}, ${age}`, articleElement);
    const pTitleElement = generateHtmlElement('p', `Dish description: ${dishDescription}`, articleElement);
    const editButton = generateHtmlElement('button', 'Edit', liElement, { className: 'edit-btn' }, edit);
    const markButton = generateHtmlElement('button', 'Mark as complete', liElement, { className: 'complete-btn' }, mark);

    let counter = document.getElementById('progress-count');
    counter.textContent = Number(counter.textContent) + 1;

    firstNameInput.value = '';
    lastNameInput.value = '';
    ageInput.value = '';
    dishDescriptionInput.value = '';


    function edit() {

      liElement.remove();

      firstNameInput.value = firstName;
      lastNameInput.value = lastName;
      ageInput.value = age;
      dishDescriptionInput.value = dishDescription;
      genderInput.value = gender;

      counter.textContent = Number(counter.textContent) - 1;

    }

    function mark() {

      liElement.remove();

      const liElementMark = generateHtmlElement('li', '', ulFinished, { className: 'each-line' });
      const articleElementMark = generateHtmlElement('article', '', liElementMark);
      const h4ElementMark = generateHtmlElement('h4', `${firstName} ${lastName}`, articleElementMark);
      const pAgeElementMark = generateHtmlElement('p', `${gender}, ${age}`, articleElementMark);
      const pTitleElementMark = generateHtmlElement('p', `Dish description: ${dishDescription}`, articleElementMark);

      counter.textContent = Number(counter.textContent) - 1;

    }

    clearBtn.addEventListener('click', clear);

    function clear() {
      ulFinished.innerHTML = '';
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
