function create(words) {

   const content = document.getElementById('content');

   for (const section of words) {

      const creatingDiv = document.createElement('div');
      const creatingP = document.createElement('p');

      creatingP.textContent = section;
      creatingP.style.display = 'none';

      creatingDiv.appendChild(creatingP);
      content.appendChild(creatingDiv);

      creatingDiv.addEventListener('click', () => {
         creatingP.style.display = '';
      });
   }
}