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
    
}

function obstacle(){
    const cactus = document.createElement('div');
    let cactusPosition = 100
    let newCactus = Math.random()*5000;

    cactus.classList.add('cactus');
    cactus.style.left = cactusPosition + '%';
    background.appendChild(cactus)

    let leftMove = setInterval(() => {
        if(cactusPosition<0){
            clearInterval(leftMove);
            background.removeChild(cactus)
        }
        else{
            cactusPosition -= 1;
            cactus.style.left = cactusPosition + "%";
        }
    },20)

    setTimeout(obstacle, newCactus)
}

function obstacleMove(cactusPosition){
    
}

obstacle();
document.addEventListener('keypress',spacePress)