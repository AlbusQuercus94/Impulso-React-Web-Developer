const dino = document.querySelector('.dino');
const background = document.querySelector('.background')
let position = 10;
let isJumping = false

function dinojump(){
    
    if(!isJumping){
        jump();
    }
}

function jump(){
    isJumping = true;
    let upInterval = setInterval( () =>{
        if(position>150){
            clearInterval(upInterval);
            fall();
        }
        else{
            position+=20
            dino.style.bottom = position + 'px';
        }
    },20)
}

function fall(){
    let downInterval = setInterval( () => {
        if(position<=10){
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
    let cactusPosition = 1920
    let newCactus = Math.random()*5000+1000; //New obstacle time

    cactus.classList.add('cactus');
    cactus.style.left = cactusPosition + 'px';
    background.appendChild(cactus)

    //Obstacle move
    let leftMove = setInterval(() => {
        if(cactusPosition<0){
            clearInterval(leftMove);
            background.removeChild(cactus)
        }
        else if(cactusPosition > 10 && cactusPosition < 70 && position < 70){
            clearInterval(leftMove)
            console.log('game over')
            document.body.innerHTML = '<h1> END GAME </h1> <p> Press F5 to restart</p>'
        }
        else{
            cactusPosition -= 10;
            cactus.style.left = cactusPosition + "px";
        }
    },20)
    //New Obstacle
    setTimeout(obstacle, newCactus)
}

function obstacleMove(cactusPosition){
    
}

obstacle();
document.addEventListener('keypress',spacePress)