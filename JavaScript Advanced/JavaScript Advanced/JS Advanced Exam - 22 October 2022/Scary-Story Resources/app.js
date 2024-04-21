window.addEventListener("load", solve);

function solve() {

  const firstNameInput = document.getElementById('first-name');
  const lastNameInput = document.getElementById('last-name');
  const ageInput = document.getElementById('age');
  const storyTitleInput = document.getElementById('story-title');
  const genreInput = document.getElementById('genre');
  const textAreaInput = document.getElementById('story');
  const ulPreview = document.getElementById("preview-list");
  const mainDiv = document.getElementById("main");
  const publishBtn = document.getElementById('form-btn');

  publishBtn.addEventListener('click', publish);

  function publish() {

    const firstName = firstNameInput.value;
    const lastName = lastNameInput.value;
    const age = ageInput.value;
    const storyTitle = storyTitleInput.value;
    const genre = genreInput.value;
    const textArea = textAreaInput.value;

    if (firstName === '' ||
      lastName === '' ||
      age === '' ||
      storyTitle === '' ||
      genre === '' ||
      textArea === ''
    ) {
      return;
    }

    const liElement = generateHtmlElement('li', '', ulPreview, { className: 'story-info' });
    const articleElement = generateHtmlElement('article', '', liElement);
    const h4Element = generateHtmlElement('h4', `Name: ${firstName} ${lastName}`, articleElement);
    const pAgeElement = generateHtmlElement('p', `Age: ${age}`, articleElement);
    const pTitleElement = generateHtmlElement('p', `Title: ${storyTitle}`, articleElement);
    const pGenreElement = generateHtmlElement('p', `Genre: ${genre}`, articleElement);
    const pStoryElement = generateHtmlElement('p', textArea, articleElement);
    const saveButton = generateHtmlElement('button', 'Save Story', liElement, { className: 'save-btn' }, save);
    const editButton = generateHtmlElement('button', 'Edit Story', liElement, { className: 'edit-btn' }, edit);
    const deleteButton = generateHtmlElement('button', 'Delete Story', liElement, { className: 'delete-btn' }, deleteFunction);

    firstNameInput.value = '';
    lastNameInput.value = '';
    ageInput.value = '';
    storyTitleInput.value = '';
    genreInput.value = '';
    textAreaInput.value = '';

    publishBtn.disabled = true;

    function edit() {

      firstNameInput.value = firstName;
      lastNameInput.value = lastName;
      ageInput.value = age;
      storyTitleInput.value = storyTitle;
      genreInput.value = genre;
      textAreaInput.value = textArea;

      liElement.remove();
      publishBtn.disabled = false;
    }

    function save() {
      mainDiv.innerHTML = '';
      const h1Element = generateHtmlElement('h1', 'Your scary story is saved!', mainDiv);
    }

    function deleteFunction() {
      liElement.remove();
      publishBtn.disabled = false;
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
