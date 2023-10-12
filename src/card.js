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


module.exports = {
    createCard,
    createDeck
}