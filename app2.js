document.addEventListener('DOMContentLoaded', () => {

    const cardArray = [
        {
            name: 'beth',
            img: 'images2/beth.png'
        },
        {
            name: 'beth',
            img: 'images2/beth.png'
        },
        {
            name: 'bunda',
            img: 'images2/bundacagada.png'
        },
        {
            name: 'bunda',
            img: 'images2/bundacagada.png'
        },
        {
            name: 'evilmorty',
            img: 'images2/evilmorty.png'
        },
        {
            name: 'evilmorty',
            img: 'images2/evilmorty.png'
        },
        {
            name: 'garysonolento',
            img: 'images2/garysonolento.png'
        },
        {
            name: 'garysonolento',
            img: 'images2/garysonolento.png'
        },
        {
            name: 'birdperson',
            img: 'images2/homempassaro.png'
        },
        {
            name: 'birdperson',
            img: 'images2/homempassaro.png'
        },
        {
            name: 'jerry',
            img: 'images2/jerry.png'
        },
        {
            name: 'jerry',
            img: 'images2/jerry.png'
        },
        {
            name: 'jessica',
            img: 'images2/jessica.png'
        },
        {
            name: 'jessica',
            img: 'images2/jessica.png'
        },
        {
            name: 'meeseeks',
            img: 'images2/meeseeks.png'
        },
        {
            name: 'meeseeks',
            img: 'images2/meeseeks.png'
        },
        {
            name: 'morty',
            img: 'images2/morty.png'
        },
        {
            name: 'morty',
            img: 'images2/morty.png'
        },
        {
            name: 'mortyjr',
            img: 'images2/mortyjr.png'
        },
        {
            name: 'mortyjr',
            img: 'images2/mortyjr.png'
        },
        {
            name: 'picles',
            img: 'images2/picles.png'
        },
        {
            name: 'picles',
            img: 'images2/picles.png'
        },
        {
            name: 'rick',
            img: 'images2/rick.png'
        },
        {
            name: 'rick',
            img: 'images2/rick.png'
        },
        {
            name: 'snuffles',
            img: 'images2/snuffles.png'
        },
        {
            name: 'snuffles',
            img: 'images2/snuffles.png'
        },
        {
            name: 'squantchy',
            img: 'images2/squantchy.png'
        },
        {
            name: 'squantchy',
            img: 'images2/squantchy.png'
        },
        {
            name: 'summer',
            img: 'images2/summer.png'
        },
        {
            name: 'summer',
            img: 'images2/summer.png'
        },
       
    ]
    
    cardArray.sort(() => 0.5 - Math.random())
    
    const grid = document.querySelector('.grid')
    const resultDisplay = document.querySelector('#result')
    var cardsChosen = []
    var cardsChosenId = []
    var cardsWon = []
    
    //create your board
    function createBoard(){
        for (let i = 0; i < cardArray.length; i++){
            var card = document.createElement('img')
            card.setAttribute('src', 'images2/blank.png')
            card.setAttribute('data-id', i)
           card.addEventListener('click', flipCard)
           grid.appendChild(card)
        }
    }
    
    //check for matches
    function checkForMatch(){
        var cards = document.querySelectorAll('img')
        const optionOneId = cardsChosenId[0]
        const optionTwoId = cardsChosenId[1]
        if (cardsChosen[0] === cardsChosen[1]){
            
            cards[optionOneId].setAttribute('src', 'images/black.png')
            cards[optionTwoId].setAttribute('src', 'images/black.png')
            cardsWon.push(cardsChosen)
        } else {
            cards[optionOneId].setAttribute('src', 'images2/blank.png')
            cards[optionTwoId].setAttribute('src', 'images2/blank.png')
            //AQUI COLOCAR O OUTRO .HTML
        }
        cardsChosen = []
        cardsChosenId = []
        resultDisplay.textContent = cardsWon.length
        if (cardsWon.length === cardArray.length/2){
            resultDisplay.textContent = 'Parabéns, você encontrou todas as figuras. '
        }
    }
    
    //flip your card
    function flipCard(){
        var cardId = this.getAttribute('data-id')
        cardsChosen.push(cardArray[cardId].name) 
        cardsChosenId.push(cardId)
        this.setAttribute('src', cardArray[cardId].img)
        if (cardsChosen.length === 2){
            setTimeout(checkForMatch, 500)
        }
    }
    
    
    createBoard()
    
    })