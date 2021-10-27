let button = document.getElementById('mode-selector')
let body = document.querySelector('body')
let footer = document.querySelector('footer')


function change(){
    button.classList.toggle('dark-mode');
    body.classList.toggle('dark-mode');
    footer.classList.toggle('dark-mode');
}

button.addEventListener('click',change)