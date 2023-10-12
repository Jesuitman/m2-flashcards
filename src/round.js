function evaluateGuess(guess, correctAnswer) {
  if (guess === correctAnswer) {
      return 'correct!';
  } else {
      return 'incorrect!';
  }
}

function takeTurn(guess,round) {
  const feedback = evaluateGuess(guess, round.currentCard.correctAnswer);
  if (feedback === 'incorrect!') {
    round.incorrectGuesses.push(round.currentCard.id);
  }
  round.turns++;
  const nextCardIndex = round.turns  
  round.currentCard = round.deck.cards[nextCardIndex];
  return feedback;
}

function calculatePercentCorrect(round) {
  const correctGuesses = round.turns - round.incorrectGuesses.length;
  const totalGuesses = round.turns;
  const percentCorrect = (correctGuesses / totalGuesses) * 100;
  return percentCorrect;
}

function endRound(round) {
  const percentCorrect = calculatePercentCorrect(round);
  console.log(`** Round over! ** You answered ${percentCorrect}% of the questions correctly!`);
}

function createRound(deck) {
    return {
      deck: deck,
      currentCard: deck.cards[0], // Start with the first card in the deck
      turns: 0,
      incorrectGuesses: [],
  
  
    };
  }
  

module.exports ={
    createRound,
    takeTurn,
    calculatePercentCorrect,
    endRound,
    evaluateGuess
}