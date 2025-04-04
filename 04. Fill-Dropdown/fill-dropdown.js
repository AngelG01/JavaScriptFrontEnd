document.addEventListener('DOMContentLoaded', solve);

function solve() {
    //TODO
    let submitButton = document.querySelector('input[type="submit"]');
    let menu = document.getElementById('menu')

    

    submitButton.addEventListener('click', function(event){
        event.preventDefault();
        
        let text = document.getElementById('newItemText').value;
        let key = document.getElementById('newItemValue').value;


        if (key && text){
            let option = document.createElement('option')
            option.value = key
            option.text = text

            menu.appendChild(option) 
        
            document.getElementById('newItemText').value = '';
            document.getElementById('newItemValue').value = ''
        }
        
    })



}