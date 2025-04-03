document.addEventListener('DOMContentLoaded', solve);

function solve() {
   // TODO
   let form = document.getElementById('task-input');
   let divContainer = document.getElementById('content');

   form.addEventListener('submit', function(event){
      event.preventDefault();

      let inputField = form.querySelector('input[type="text"]').value;
      let sections = inputField.split(',');

      for (let section of sections){
         let divEl = document.createElement('div');
         let paragraph = document.createElement('p');

         paragraph.textContent = section;
         divEl.appendChild(paragraph)
         divContainer.appendChild(divEl);
      }
   })
   
}