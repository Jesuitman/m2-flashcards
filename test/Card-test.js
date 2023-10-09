const chai = require('chai');
const expect = chai.expect;

const { prototypeData } = require('../src/data')
const { createCard,createDeck } = require('../src/card');

describe('card', function() {
  it('should be a function', function() {
    expect(createCard).to.be.a('function');
  });

  it('should create a card and its properties', function() {
    const card = createCard(1, 'What allows you to define a set of related information using key-value pairs?', ['object', 'array', 'function'], 'object');
    
    expect(card.id).to.equal(1);
    expect(card.question).to.equal('What allows you to define a set of related information using key-value pairs?');
    expect(card.answers).to.deep.equal(['object', 'array', 'function']);
    expect(card.correctAnswer).to.equal('object');
  });  

  it('should create a deck and count cards', function (){
    const card1 = createCard(1, "Question 1", ["Answer 1"], "Answer 1")
    const card2 = createCard(2, "Question 2", ["Answer 2"], "Answer 2")

    const deck = createDeck ([card1,card2])

    expect(deck.cards).to.deep.equal([card1,card2])
    expect(deck.countCards()).to.equal(2)
  })
})