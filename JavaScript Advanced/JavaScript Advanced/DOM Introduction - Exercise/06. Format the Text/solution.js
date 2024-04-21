function solve() {

  let inputSentences = document.getElementById('input')
    .value
    .split('.')
    .filter(x => x !== '');

  let result = document.getElementById('output');

  while (inputSentences.length > 0) {

    let text = inputSentences.splice(0, 3).join('.') + '.';

    let newElement = document.createElement('p');

    newElement.textContent = text;

    result.appendChild(newElement);
  }
}