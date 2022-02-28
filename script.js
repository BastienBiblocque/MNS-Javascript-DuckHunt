document.addEventListener('keypress', updateValue);
window.requestAnimationFrame(gameLoop);

timer = 10;
scoreCannard = 0;
scoreChasseur = 0;
timerCanard = 10;
positionY = 0;
positionX = 0;

isPlay = true;

function compte_a_rebours() {
    if (isPlay){
        timer--;
        timerCanard--;
        if (timerCanard === 0){
            scoreCannard++;
            timerCanard = 10;
        }

        if (timer === 0){
            endGame()
        }

        setTimeout("compte_a_rebours();", 1000);
    }
}

compte_a_rebours();


function updateValue(e) {
    keyPress = e.key;
    if (keyPress === 's'){
        positionY += 5;
    }
    if (keyPress === 'z'){
        positionY -= 5;
    }
    if (keyPress === 'q'){
        positionX -= 5;
    }
    if (keyPress === 'd'){
        positionX += 5;
    }
}

function refreshGame(){
    document.getElementById("canard").style.left = positionX + "px";
    document.getElementById("canard").style.top = positionY + "px";
    document.getElementById('timer').innerText = timer;
    document.getElementById('canardScore').innerText = scoreCannard;
    document.getElementById('chasseurScore').innerText = scoreChasseur;
}

function gameLoop() {
    refreshGame();
    window.requestAnimationFrame(gameLoop);
}

function clickOnDuck(){
    scoreChasseur++;
    timerCanard = 10;
}

function endGame() {
    isPlay=false;
    let message;
    if (scoreCannard === scoreChasseur){
        message = 'égalité';
    }
    else if (scoreCannard>scoreChasseur) {
        message = 'cannard win';
    } else {
        message = 'chasseur win';
    }
    console.log(message);
}

