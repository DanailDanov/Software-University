function search() {

   const searchingTown = document.getElementById('searchText').value;
   const towns = Array.from(document.querySelectorAll('li'));

   let counter = 0;

   for (const town of towns) {

      if (town.textContent.includes(searchingTown)) {
         counter++;
         town.style.fontWeight = 'bold';
         town.style.textDecoration = 'underline';
      } else {
         town.style.fontWeight = 'normal';
         town.style.textDecoration = 'none';
      }
   }

   const result = document.getElementById('result');
   result.textContent = `${counter} matches found`;
}
