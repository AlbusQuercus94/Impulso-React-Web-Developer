let button = document.getElementById('mode-selector')
let body = document.querySelector('body')
let footer = document.querySelector('footer')
let h1 = document.querySelector('h1')


function changeStyle(){
    button.classList.toggle('dark-mode');
    body.classList.toggle('dark-mode');
    footer.classList.toggle('dark-mode');
}

function changeText(){
    if(button.outerText == 'Dark Mode'){
        button.innerHTML = 'Light Mode';
        h1.innerHTML = 'Dark Mode On'
    }
    else{
        button.innerHTML = 'Dark Mode';
        h1.innerHTML = 'Light Mode On'
    }

}

function change(){
    changeStyle();
    changeText();
}

button.addEventListener('click',change)