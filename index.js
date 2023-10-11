// This is where your project starts.
const {createCard, createDeck} = require ('./src/card')
const {createRound,takeTurn,calculatePercentCorrect,endRound} = require ('./src/round.js')
const { printMessage, printQuestion } = require ('./src/util');
const { prototypeData } = require ('./src/data');

function evaluateGuess(guess, correctAnswer) {
    if (guess === correctAnswer) {
        return 'correct!';
    } else {
        return 'incorrect!';
    }
}

start()