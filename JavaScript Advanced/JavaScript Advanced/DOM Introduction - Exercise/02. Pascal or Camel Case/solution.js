function solve() {

  const textToProcess = document.getElementById('text').value;
  const namingConvention = document.getElementById('naming-convention').value;

  let textToLowerCase = textToProcess
    .toLowerCase()
    .split(' ');

  let rightText = '';


  switch (namingConvention) {
    case 'Camel Case':

      rightText += textToLowerCase[0];

      for (let index = 1; index < textToLowerCase.length; index++) {
        let parsedLetter = textToLowerCase[index][0].toUpperCase();
        rightText += parsedLetter + textToLowerCase[index].slice(1);

      }
      break;
    case 'Pascal Case':
      for (let index = 0; index < textToLowerCase.length; index++) {
        let letter = textToLowerCase[index][0].toUpperCase();
        rightText += letter + textToLowerCase[index].slice(1);
      }
      break;
    default:
      rightText = 'Error!';
      break;
  }

  const result = document.getElementById('result');
  result.textContent = rightText;
}

