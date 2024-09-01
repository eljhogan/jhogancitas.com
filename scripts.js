// Archivo scripts.js

// Función para Piedra, Papel o Tijera
function play(choice) {
    const choices = ['piedra', 'papel', 'tijera'];
    const computerChoice = choices[Math.floor(Math.random() * choices.length)];
    let result = '';

    if (choice === computerChoice) {
        result = 'Empate!';
    } else if (
        (choice === 'piedra' && computerChoice === 'tijera') ||
        (choice === 'papel' && computerChoice === 'piedra') ||
        (choice === 'tijera' && computerChoice === 'papel')
    ) {
        result = 'Ganaste!';
    } else {
        result = 'Perdiste!';
    }

    document.getElementById('result').innerText = `Elegiste ${choice}, la computadora eligió ${computerChoice}. ${result}`;
}

// Función para Adivina el Número
function guessNumber() {
    const randomNumber = Math.floor(Math.random() * 100) + 1;
    const userGuess = parseInt(document.getElementById('guess').value, 10);
    let guessResult = '';

    if (userGuess === randomNumber) {
        guessResult = '¡Felicidades! Adivinaste el número.';
    } else if (userGuess < randomNumber) {
        guessResult = 'Demasiado bajo. Intenta de nuevo.';
    } else if (userGuess > randomNumber) {
        guessResult = 'Demasiado
