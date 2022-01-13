function computerPlay() {
    let choice = Math.random();
    if (choice <= 1 / 3) {
        return 'rock';
    } else if (choice <= 2/3) {
        return 'paper';
    } else {
        return 'scissors';
    }
}

function playRound(playerSelection, computerSelection) {
    if (playerSelection.toLowerCase() === 'rock' && computerSelection === 'rock' || playerSelection.toLowerCase() === 'paper' && computerSelection === 'paper' || playerSelection.toLowerCase() === 'scissors' && computerSelection === 'scissors') {
        return 'You tied! Try again.';
    } else if (playerSelection.toLowerCase() === 'rock' && computerSelection === 'scissors') {
        return 'You win! Rock beats scissors.';
    } else if (playerSelection.toLowerCase() === 'rock' && computerSelection === 'paper') {
        return 'You lose! Paper beats rock.';
    } else if (playerSelection.toLowerCase() === 'paper' && computerSelection === 'rock') {
        return 'You win! Paper beats rock.';
    } else if (playerSelection.toLowerCase() === 'paper' && computerSelection === 'scissors') {
        return 'You lose! Scissors beats paper.';
    } else if (playerSelection.toLowerCase() === 'scissors' && computerSelection === 'paper') {
        return 'You win! Scissors beats paper.';
    } else if (playerSelection.toLowerCase() === 'scissors' && computerSelection === 'rock') {
        return 'You lose! Rock beats scissors.';
    } else {
        return 'Something went horribly wrong.';
    }
}

let playerScore = 0;
let computerScore = 0;

function game() {
    console.log(playerScore);
    console.log(computerScore);
    let playerSelection = prompt('Rock, paper, or scissors? Choose wisely.');
    let computerSelection = computerPlay();
    playRound(playerSelection, computerSelection);
    console.log(playRound(playerSelection,computerSelection));
    if (playRound(playerSelection, computerSelection) === 'You win! Rock beats scissors.' || playRound(playerSelection, computerSelection) === 'You win! Paper beats rock.' || playRound(playerSelection, computerSelection) === 'You win! Scissors beats paper.') {
        ++playerScore;
    } else if (playRound(playerSelection, computerSelection) !== 'You tied! Try again.' || playRound(playerSelection, computerSelection) !== 'Something went horribly wrong.') {
        ++computerScore;
    }
    console.log(playerScore);
    console.log(computerScore);
    if (playerScore === 3) {
        alert('You win best 3 out of 5!')
    } else if (computerScore === 3) {
        alert('You lose best 3 out of 5!')
    }
}

game ();