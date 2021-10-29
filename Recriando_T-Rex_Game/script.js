const dino = document.querySelector('.dino');
const background = document.querySelector('.background')
let isJumping = false

function dinojump(){
    
    if(!isJumping){
        jump();
    }
}

function jump(){
    let position = 50;
    isJumping = true;
    let upInterval = setInterval( () =>{
        if(position>70){
            clearInterval(upInterval);
            fall(position);
        }
        else{
            position+=2
            dino.style.bottom = position + 'vh';
        }
    },20)
}

function fall(position){
    let downInterval = setInterval( () => {
        if(position<=50){
            isJumping = false
            clearInterval(downInterval)
        }
        else{
            position -= 2;
            dino.style.bottom = position + 'vh';
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
    let newCactus = Math.random()*5000; //New obstacle time

    cactus.classList.add('cactus');
    cactus.style.left = cactusPosition + '%';
    background.appendChild(cactus)

    //Obstacle move
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
    //New Obstacle
    setTimeout(obstacle, newCactus)
}

function obstacleMove(cactusPosition){
    
}

obstacle();
document.addEventListener('keypress',spacePress)