// Rock - 1
// Paper - 2
// Scissor - 3

// returns a number between 1 and 3 randomly
function computerPlay(){
	var pick = Math.floor(Math.random() * 3) + 1;
	switch(pick){
		case 1:
			console.log("Computer picks rock");
			break;
		case 2:
			console.log("Computer picks paper");
			break;
		case 3:
			console.log("Computer picks scissors");
			break;
	}
	return pick;
};

// will return the correct value based on the user's pick, will continue to repeat/loop until one of the three choices are selected
function userPlay(){
	var choice = window.prompt("Your move --> rock, paper, or scissors").toLowerCase();
	while(1 > 0){
		switch(choice){
			case "rock":
				return 1;
			case "paper":
				return 2;
			case "scissors":
				return 3;
			default:
			choice = window.prompt("Check spelling --> rock, paper, or scissors").toLowerCase();
		}
	}
}

// compares the selections made by player and computer and logs who won (or a tie) and returns true or false based on the winner (true = player wins, false = computer wins)
function playRound(playerSelection, computerSelection){
	if(playerSelection == computerSelection){
		console.log("Tie!");
		return;
	}
	else if(playerSelection == 1){
		if(computerSelection == 2){
			console.log("Computer wins, paper covers rock");
			return false;
		}
		else{
			console.log("You win, rock crushes scissors");
			return true;
		}
	}
	else if(playerSelection == 2){
		if(computerSelection == 1){
			console.log("You win, paper covers rock");
			return true;
		}
		else{
			console.log("Computer wins, scissors cut paper");
			return false;
		}

	}
	else if(playerSelection == 3){
		if(computerSelection == 1){
			console.log("Computer wins, rock crushes scissors");
			return false;
		}
		else{
			console.log("You win, scissors cut paper");
			return true;
		}
	}
}

// calls the playRound() function and tracks the winner of each round with a counter, first counter to reach 5 is declared the winner and the loop ends
function play(){
	var userWins = 0;
	var compWins = 0;

	while(userWins < 5 && compWins < 5){
		var result = playRound(userPlay(), computerPlay());
		if(result == true){
			userWins++;
		}
		else if(result == false){
			compWins++;
		}
		console.log("User wins: " + userWins);
		console.log("Comp wins: " + compWins);
	}
	if(userWins == 5){
		console.log("You are the winner: " + userWins + " - " + compWins);
	}
	else{
		console.log("Computer wins: " + compWins + " - " + userWins);
	}
}

play();