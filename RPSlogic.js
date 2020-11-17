function computerPlay () {
	//randomly returns rock, paper or scissors.
}

function playRound(playerSelection, computerSelection) {
  // returns string to declare winner

}

function game() {
	//5 round game and keeps score and reports winner or looser
}


_____________

//we need DOM elements first 
const choice = document.querySelectorAll(".choice");
const score = document.getElementById("scsore");
const result = document.getElementById("result");
const restart = document.getElementById("restart");
const modal = document.querySelector(".modal");

const scoreboard = {
	//This is an object
	player:0,
	computer: 0
}

//play game

function play(e){
restart.style.display = "inline-block"
const playerChoice = e.target.id;
const computerChoice = getComputerChoice();
const winner = getWinner(playerChoice,computerChoice);
}


//get comp choice
function getComputerChoice(){
	const rand = Math.random();
	if(rand <0.34){
		return "rock";
	}else if (rand <= 0.67){
		return "paper";
	}else {
		return "scissors";
	}
}

//get game winner 
function getWinner(p,c) {
	if(p === c) {
		return "draw";
	} else if(p === "rock"){
		if(c === "paper"){
			return "computer";
		}else {
			return "player";
		}

	}

}

//event listeiners
choices.forEach(choice => choice.addEventListener("click", play));