let score = 0;
let attempts = 0;
const maxAttempts = 3;
const max=9999;
const min=1000;

function getRandomNumber() {
    return Math.floor(Math.random()*(max-min+1)+min );
}

function checkGuess() {
    const userInput = parseInt(document.getElementById('userInput').value);
    const randomNumber = getRandomNumber();

    if (isNaN(userInput) || userInput < 1000 || userInput > 9999) {
        document.getElementById('message').innerText = 'Please enter a number between 1000 and 9999.';
        return;
    }

    attempts++;
    if (userInput - randomNumber>0) {
        score += 10;
        document.getElementById('message').innerText = `Good job! The number was ${randomNumber}.`;
    } else {
        document.getElementById('message').innerText = `Try again! The number was ${randomNumber}.`;
    }

    if (attempts >= maxAttempts) {
        document.getElementById('score').innerText = `Game over! Your score is ${score}.`;
        document.getElementById('userInput').disabled = true;
        document.querySelector('button').disabled = true;
    } else {
        document.getElementById('score').innerText = `Current score: ${score}`;
    }
}
