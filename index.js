// This is where your project starts.

function evaluateGuess(guess, correctAnswer) {
    if (guess === correctAnswer) {
        return 'correct!';
    } else {
        return 'incorrect!';
    }
}
  
function createRound(deck) {
    return {
      deck: deck,
      currentCard: deck.cards[0], // Start with the first card in the deck
      turns: 0,
      incorrectGuesses: [],
  
      takeTurn(guess) {
        const feedback = evaluateGuess(guess, this.currentCard.correctAnswer);
        if (feedback === 'incorrect!') {
          this.incorrectGuesses.push(this.currentCard.id);
        }
        this.turns++;
        // Move to the next card in the deck
        const nextCardIndex = this.turns % this.deck.cards.length;
        this.currentCard = this.deck.cards[nextCardIndex];
        return feedback;
      },
  
      calculatePercentCorrect() {
        const correctGuesses = this.turns - this.incorrectGuesses.length;
        const totalGuesses = this.turns;
        const percentCorrect = (correctGuesses / totalGuesses) * 100;
        return percentCorrect;
      },
  
      endRound() {
        const percentCorrect = this.calculatePercentCorrect();
        console.log(`** Round over! ** You answered ${percentCorrect}% of the questions correctly!`);
      },
    };
  }
  

console.log('Your project is running...'); 
