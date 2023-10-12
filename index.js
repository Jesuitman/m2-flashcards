// This is where your project starts.
const {createCard, createDeck} = require ('./src/card')
const {createRound,takeTurn,calculatePercentCorrect,endRound,evaluateGuess} = require ('./src/round.js')
const { printMessage, printQuestion } = require ('./src/game');
const { prototypeData } = require ('./src/data');

// function evaluateGuess(guess, correctAnswer) {
//     if (guess === correctAnswer) {
//         return 'correct!';
//     } else {
//         return 'incorrect!';
//     }
// }
function start(){
    const deck =  createDeck(prototypeData)
    // printMessage(deck)
    const round = createRound(deck)
    printQuestion(round)
    takeTurn(0,round),
    calculatePercentCorrect(round),
    endRound(round)
}
start()