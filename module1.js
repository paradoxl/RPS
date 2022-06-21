var playerMove;
var computerChoice;
var winCounter;
var loseCounter;
var drawCounter;

//function to assign a random move to the AI
function computer() {
    let rand = Math.floor(Math.random() * 3) + 1;

    if (rand == 1) {
        computerChoice = "rock";
    } else if (rand == 2) {
        computerChoice = "paper";
    } else if (rand == 3) {
        computerChoice = "scissors";
    }

}

computer();


// Click different moves to make player choice
const myButtons = document.querySelectorAll('.btns')
myButtons.forEach(mine => {
    mine.addEventListener('click', processClick);
})

function processClick() {
    // switch statement to choose rps

    window.map = this.id

    switch (window.map) {
        case "rock":
    
        if(computerChoice === "paper"){
            loseCounter++;
            window.location.href="./loss.html";
        }
        else if(computerChoice === "scissors"){
            winCounter++;
            window.location.href="./win.html";
        }
        else if(computerChoice === "rock"){
            drawCounter++;
            console.log("draw");
        }
            break;
        case "paper":
           if(computerChoice === "rock"){
            winCounter++;
            window.location.href="./win.html";
           }
           else if(computerChoice === "paper"){
            drawCounter++;
            window.location.href="./draw.html";
           }
           else if(computerChoice === "scissors"){
            loseCounter++;
            window.location.href="./loss.html";
           }
            break;
        case "scissors":
           if(computerChoice === "scissors"){
            drawCounter++;
            window.location.href="./draw.html";
           }
           else if(computerChoice === "paper"){
            winCounter++;
            window.location.href="./win.html";
           }
           else if(computerChoice === "rock"){
            loseCounter++;
            window.location.href="./loss.html";
           }
            break;
        case "debug":
            console.log(playerMove, " debugging");
            break;
        default:
            console.log("Error in switch");
    }

}


console.log(playerMove);









// module 2







