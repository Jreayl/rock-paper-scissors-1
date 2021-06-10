const ROUNDS = 5;
let playerScore = 0;
let computerScore = 0;
let currRound = 1;

// Adds an event listener to each input (button) and sends it's corresponding
// id in the index.html file to the playRound function.
const buttons = Array.from(document.querySelectorAll('.button'));
buttons.forEach(button => {
    button.addEventListener('click', () => {
        playRound(button.id, computerPlay());
    });
});

// Picks a random number between [1-3] and returns that number as a weapon choice.
function computerPlay() {
    rand = Math.floor(Math.random() * 3) + 1;
    if (rand === 1) { return "rock"; }
    else if (rand === 2) { return "paper"; }
    else { return "scissors"; }
}

// Plays a single round of rock paper scissors and updates the status message, scores,
// and round number in the browser.
function playRound(playerSelection, computerSelection) {
    playerSelectFormatStr = playerSelection.toLowerCase();
    computerSelectFormatStr = computerSelection.toLowerCase();

    currRound++;
    document.getElementById("round-number").textContent = currRound;

    // Tie round
    if (playerSelectFormatStr === computerSelectFormatStr) {
        document.getElementById("status-msg").textContent = "Tie round!";
    }

    // Player wins round
    else if ((playerSelectFormatStr === "rock" && computerSelectFormatStr === "scissors") ||
            (playerSelectFormatStr === "paper" && computerSelectFormatStr === "rock") ||
            (playerSelectFormatStr === "scissors" && computerSelectFormatStr === "paper")) {
                document.getElementById("status-msg").textContent = "Player wins round!";
                playerScore++;
                document.getElementById("player-score").textContent = playerScore;
    }

    // Computer wins round
    else if ((computerSelectFormatStr === "rock" && playerSelectFormatStr === "scissors") ||
            (computerSelectFormatStr === "paper" && playerSelectFormatStr === "rock") ||
            (computerSelectFormatStr === "scissors" && playerSelectFormatStr === "paper")) {
                document.getElementById("status-msg").textContent = "Computer wins round!";
                computerScore++;
                document.getElementById("computer-score").textContent = computerScore;
    }

    // Game over
    if (playerScore === 5 || computerScore === 5) {
        document.getElementById("rock").disabled = true;
        document.getElementById("paper").disabled = true;
        document.getElementById("scissors").disabled = true;
        if (playerScore === 5) {
            document.getElementById("status-msg").textContent = "Player wins game. Hit F5 to play again!";
        }
        else {
            document.getElementById("status-msg").textContent = "Computer wins game. Hit F5 to play again!";
        }
    }
}
