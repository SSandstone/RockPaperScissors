//updated code to work off click events instead of input box.

let rock=document.getElementById('rock');
let paper=document.getElementById('paper');
let scissors=document.getElementById('scissors');
let playersChoice='';

let winCount=0;
let loseCount=0;
let tieCount=0;

rock.addEventListener('click', function(){
    playersChoice='rock';
    document.getElementById('playersRoundChoice').innerHTML=`You Chose: ${playersChoice}`;
    play(playersChoice,getComputerChoice());
    updateScore();
    resetPlayerChoice();
    gameOver();
});

paper.addEventListener('click', function(){
    playersChoice='paper';
    document.getElementById('playersRoundChoice').innerHTML=`You Chose: ${playersChoice}`;
    play(playersChoice,getComputerChoice());
    updateScore();
    resetPlayerChoice();
    gameOver();
});

scissors.addEventListener('click', function(){
    playersChoice='scissors';
    document.getElementById('playersRoundChoice').innerHTML=`You Chose: ${playersChoice}`;
    play(playersChoice,getComputerChoice());
    updateScore();
    resetPlayerChoice();
    gameOver();
});

function getComputerChoice(){
    let pcChoices=['rock','paper','scissors'];
    let choice = Math.floor(Math.random()*pcChoices.length);
    let pcRoundChoice=pcChoices[choice];
    document.getElementById('pcRoundChoice').innerHTML=`You Chose: ${pcRoundChoice}`;
    return pcRoundChoice;
    };

function play(playerSelection, pcSelection){

    if (playerSelection===pcSelection){
        tieCount++;
        let tie=`It's a tie! You both chose ${pcSelection}.`;
        console.log(tie);
    } else if (playerSelection==='rock' && pcSelection==='scissors' || playerSelection==='scissors' && pcSelection==='paper'||playerSelection==='paper' && pcSelection==='rock'){
        winCount++;
        let winText=`Your ${playerSelection} beat the computers ${pcSelection}.`;
        console.log(winText);
    } else {
        loseCount++;
        let loseText=`You lost this round! Don't give up. The computer chose ${pcSelection} and beat your ${playerSelection}.`;
        console.log(loseText);
    };
};

function updateScore(){
    document.getElementById('myScore').innerHTML=`Your Score: ${winCount}`;
    document.getElementById('ties').innerHTML= `Ties: ${tieCount}`;
    document.getElementById('pcScore').innerHTML= `Liars Scores: ${loseCount}`;
};

function resetPlayerChoice(){
    let playersChoice='';
};

function resetGame(){
    winCount=0;
    loseCount=0;
    tieCount=0;
    updateScore();
    document.getElementById('playersRoundChoice').innerHTML=`Waiting for choice`;
    document.getElementById('pcRoundChoice').innerHTML=`Waiting for choice`;
}

function gameOver() {
    if (winCount===5){
        alert('YOU DID IT. THE TRUTH PREVAILS!')
        resetGame();
    } else if (loseCount===5){
        alert('SHEEP. SHEEP. THE TRUTH IS LOST.')
        resetGame();
    };
};

/*

//this code is the original. It will ask the user when opening the page to input rock paper or scissors, repeat 5 times, and then tell you how many wins/losses you received

let winCount=0;
let loseCount=0;
let tieCount=0;

for (let i = 0; i < 5; i++) {

let playersChoice=prompt('Please choose rock, paper, or scissors. Entering anything else will cause you to forfeit.');
playersChoice=playersChoice.toLowerCase();

function getComputerChoice(){
        let pcChoices=['rock','paper','scissors'];
        let choice = Math.floor(Math.random()*pcChoices.length);
        let pcRoundChoice=pcChoices[choice];
        return pcRoundChoice;
        };

function play(playerSelection, pcSelection){

    if (playerSelection===pcSelection){
        tieCount++;
        let tie=`It's a tie! You both chose ${pcSelection}.`;
        console.log(tie);
        //console.log(score);

    } else if (playerSelection==='rock' && pcSelection==='scissors' || playerSelection==='scissors' && pcSelection==='paper'||playerSelection==='paper' && pcSelection==='rock'){
        winCount++;
        let winText=`Your ${playerSelection} beat the computers ${pcSelection}.`;
        console.log(winText);
        
        //console.log(score);

    } else {
        loseCount++;
        let loseText=`You lose! Try again. The computer chose ${pcSelection} and beat your ${playerSelection}.`;
        console.log(loseText);
        //console.log(score);
    };
};

function updateScore(){
    document.getElementById('myScore').innerHTML=`Your Score: ${winCount}`;
    document.getElementById('ties').innerHTML= `Ties: ${tieCount}`;
    document.getElementById('pcScore').innerHTML= `Liars Scores: ${loseCount}`;
}


play(playersChoice,getComputerChoice());
updateScore();
};

let score=`You won ${winCount} times, lost ${loseCount} times, and tied ${tieCount} times.`
console.log(score);

if(winCount>loseCount){
    console.log("You did it!")
} else if (loseCount>winCount) {
    console.log("Better luck next time...")
} else {
    console.log("A tie isn't bad.")
}

};

game();

*/

