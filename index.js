// This is where your project starts.
const {createCard, createDeck} = require ('./src/card')
const {createRound,takeTurn,calculatePercentCorrect,endRound,evaluateGuess} = require ('./src/round.js')
const { printMessage, printQuestion } = require ('./src/game');
const { prototypeData } = require ('./src/data');


function start(){
    const deck =  createDeck(prototypeData)
    printMessage(deck)
    const round = createRound(deck)
    printQuestion(round)
    takeTurn(0,round),
    calculatePercentCorrect(round)
    if (round.turns>30){
    endRound(round)
}}
start()