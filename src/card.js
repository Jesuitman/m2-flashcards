function createCard(id,question,answers,correctAnswer){
    return {
        id:id,
        question:question,
        answers:answers,
        correctAnswer:correctAnswer
    }
}

function createDeck(cards){
    return{
        cards:cards,
        countCards: function (){
            return this.cards.length
        }
    }
}
    
function countCards(deck){
    return deck.cards.length
}


module.exports = {
    createCard,
    createDeck,
    countCards
}