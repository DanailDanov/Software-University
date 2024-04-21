function solve() {
   document.querySelector('#searchBtn').addEventListener('click', onClick);

   const userSearching = document.getElementById('searchField');
   const searchField = document.querySelectorAll('tbody tr');

   function onClick() {

      for (const row of searchField) {

         row.classList.remove("select"); 

         if (row.textContent.includes(userSearching.value)) {
            row.className = 'select';
         }
      }

      userSearching.value = '';
   }
}