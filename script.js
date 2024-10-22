let your_mark = 0;
let computer_mark = 0;

function playGame(userChoice) {
    if (userChoice === 'quit') {
        // Display final results
        document.getElementById('result').textContent = `Final Score: You: ${your_mark}, Computer: ${computer_mark}`;
        if (your_mark > computer_mark) {
            document.getElementById('finalResult').textContent = "Congratulations! You won the game!";
        } else if (your_mark < computer_mark) {
            document.getElementById('finalResult').textContent = "Sorry, you lost the game!";
        } else {
            document.getElementById('finalResult').textContent = "It's a tie!";
        }
        return; // Stop the game if the user chooses to quit
    }

    const choices = ['rock', 'paper', 'scissors'];
    const computerChoice = choices[Math.floor(Math.random() * 3)];

    document.getElementById('userChoice').textContent = `You chose: ${userChoice}`;
    document.getElementById('computerChoice').textContent = `Computer chose: ${computerChoice}`;

    let result = '';

    if (userChoice === computerChoice) {
        result = "It's a tie!";
    } else if (
        (userChoice === 'rock' && computerChoice === 'scissors') ||
        (userChoice === 'paper' && computerChoice === 'rock') ||
        (userChoice === 'scissors' && computerChoice === 'paper')
    ) {
        result = "You win!";
        your_mark += 1; // Increase your score
    } else {
        result = "You lose!";
        computer_mark += 1; // Increase computer's score
    }

    document.getElementById('result').textContent = result;
    document.getElementById('your_mark').textContent = `Your Score: ${your_mark}`;
    document.getElementById('computer_mark').textContent = `Computer's Score: ${computer_mark}`;
}

