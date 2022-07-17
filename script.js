let winCount=0;
let loseCount=0;
let tieCount=0;

function game(){

for (let i = 0; i < 5; i++) {

let playersChoice=prompt('Please choose rock, paper, or scissors. Entering anything else will cause you to forfeit.');
playersChoice=playersChoice.toLowerCase();

function checkInput(){
        
    if (playersChoice!='rock'&&playersChoice!='paper'&&playersChoice!='scissors'){
        alert('please make a valid choice.');
        return;
    }
}

checkInput();

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
        let winText=`You won! Congratulations. Your ${playerSelection} beat the computers ${pcSelection}.`;
        console.log(winText);
        //console.log(score);

    } else {
        loseCount++;
        let loseText=`You lose! Try again. The computer chose ${pcSelection} and beat your ${playerSelection}.`;
        console.log(loseText);
        //console.log(score);
    };
};

play(playersChoice,getComputerChoice());

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