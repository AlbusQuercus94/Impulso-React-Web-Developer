let button = document.getElementById('mode-selector')
let body = document.querySelector('body')
let footer = document.querySelector('footer')


function changeStyle(){
    button.classList.toggle('dark-mode');
    body.classList.toggle('dark-mode');
    footer.classList.toggle('dark-mode');
}

function changeText(){
    if(button.outerText == 'Dark Mode'){
        button.innerHTML = 'Light Mode'
    }
    else{
        button.innerHTML = 'Dark Mode'        
    }
}

function change(){
    changeStyle();
    changeText();
}

button.addEventListener('click',change)