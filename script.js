const psContainer = document.querySelector('#pscontainer');
const csContainer = document.querySelector('#cscontainer');
let playerScore = 0;
let computerScore = 0;

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

function playRound(playerSelection) {
    let computerSelection = computerPlay ();
    if (playerSelection === 'rock' && computerSelection === 'rock' || playerSelection === 'paper' && computerSelection === 'paper' || playerSelection === 'scissors' && computerSelection === 'scissors') {
        return 'You tied! Try again.';
    } else if (playerSelection === 'rock' && computerSelection === 'scissors') {
        return 'You win! Rock beats scissors.';
    } else if (playerSelection === 'rock' && computerSelection === 'paper') {
        return 'You lose! Paper beats rock.';
    } else if (playerSelection === 'paper' && computerSelection === 'rock') {
        return 'You win! Paper beats rock.';
    } else if (playerSelection === 'paper' && computerSelection === 'scissors') {
        return 'You lose! Scissors beats paper.';
    } else if (playerSelection === 'scissors' && computerSelection === 'paper') {
        return 'You win! Scissors beats paper.';
    } else if (playerSelection === 'scissors' && computerSelection === 'rock') {
        return 'You lose! Rock beats scissors.';
    } else {
        return 'Something went horribly wrong.';
    }
}

const btnRock = document.querySelector('#btnrock');
const btnPaper = document.querySelector('#btnpaper');
const btnScissors = document.querySelector('#btnscissors');
const btn = document.querySelectorAll('button');
const result = document.querySelector('#result');

btnRock.addEventListener('click', () => {
    let roundResult = playRound('rock');
    if (roundResult === 'You win! Rock beats scissors.' || roundResult === 'You win! Paper beats rock.' || roundResult === 'You win! Scissors beats paper.') {
        psContainer.textContent = ++playerScore;
    } else if (roundResult === 'You lose! Paper beats rock.' || roundResult === 'You lose! Scissors beats paper.' || roundResult === 'You lose! Rock beats scissors.') {
        csContainer.textContent = ++computerScore;
    }
    result.textContent = roundResult;
    if (playerScore == 5) {
        winner.textContent = 'You win! GGWP!'
    } else if (computerScore == 5) {
        winner.textContent = 'The computer wins. GG go next.'
    }
});

btnPaper.addEventListener('click', () => {
    let roundResult = playRound('paper');
    if (roundResult === 'You win! Rock beats scissors.' || roundResult === 'You win! Paper beats rock.' || roundResult === 'You win! Scissors beats paper.') {
        psContainer.textContent = ++playerScore;
    } else if (roundResult === 'You lose! Paper beats rock.' || roundResult === 'You lose! Scissors beats paper.' || roundResult === 'You lose! Rock beats scissors.') {
        csContainer.textContent = ++computerScore;
    }
    result.textContent = roundResult;
    if (playerScore == 5) {
        winner.textContent = 'You win! GGWP!'
    } else if (computerScore == 5) {
        winner.textContent = 'The computer wins. GG go next.'
    }
});
btnScissors.addEventListener('click', () => {
    let roundResult = playRound('scissors');
    if (roundResult === 'You win! Rock beats scissors.' || roundResult === 'You win! Paper beats rock.' || roundResult === 'You win! Scissors beats paper.') {
        psContainer.textContent = ++playerScore;
    } else if (roundResult === 'You lose! Paper beats rock.' || roundResult === 'You lose! Scissors beats paper.' || roundResult === 'You lose! Rock beats scissors.') {
        csContainer.textContent = ++computerScore;
    }
    result.textContent = roundResult;
    if (playerScore == 5) {
        winner.textContent = 'You win! GGWP!'
    } else if (computerScore == 5) {
        winner.textContent = 'The computer wins. GG go next.'
    }
});

const winner = document.querySelector('#winner');