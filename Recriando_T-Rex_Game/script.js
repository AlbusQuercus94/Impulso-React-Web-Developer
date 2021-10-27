const dino = document.querySelector('.dino');
const background = document.querySelector('.background')
let isJumping = false

function dinojump(){
    
    if(!isJumping){
        jump();
    }
}

function jump(){
    let position = 0;
    isJumping = true;
    let upInterval = setInterval( () =>{
        if(position>150){
            clearInterval(upInterval);
            fall(position);
        }
        else{
            position+=20
            dino.style.bottom = position + 'px';
        }
    },20)
}

function fall(position){
    let downInterval = setInterval( () => {
        if(position<=0){
            isJumping = false
            clearInterval(downInterval)
        }
        else{
            position -= 20;
            dino.style.bottom = position + 'px';
        }
    },20)
}

function spacePress(event){
    if(event.keyCode === 32){ //Tecla pressionada é o ESPAÇO
        dinojump()
    }
    obstacle()
}

function obstacle(){
    const cactus = document.createElement('div');
    let cactusPosition = 100

    cactus.classList.add('cactus');
    cactus.style.left = 50 + 'vw';
    background.appendChild(cactus)
}

document.addEventListener('keypress',spacePress)