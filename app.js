document.addEventListener('DOMContentLoaded', () => {

const cardArray = [
    {
        name: 'paisagem',
        img: 'images/aranha.png'
    },
    {
        name: 'paisagem',
        img: 'images/aranha.png'
    },
    {
        name: 'arvore',
        img: 'images/ciclope.png'
    },
    {
        name: 'arvore',
        img: 'images/ciclope.png'
    },
    {
        name: 'ceu',
        img: 'images/doom.png'
    },
    {
        name: 'ceu',
        img: 'images/doom.png'
    },
    {
        name: 'rj',
        img: 'images/motoqueiro.png'
    },
    {
        name: 'rj',
        img: 'images/motoqueiro.png'
    },
    {
        name: 'ssd',
        img: 'images/thanos.png'
    },
    {
        name: 'ssd',
        img: 'images/thanos.png'
    },
    {
        name: 'arsenal',
        img: 'images/venom.png'
    },
    {
        name: 'arsenal',
        img: 'images/venom.png'
    },
   
]

cardArray.sort(() => 0.5 - Math.random())

const grid = document.querySelector('.grid')
const resultDisplay = document.querySelector('#result')
const btn = document.querySelector(".btn")
const btn2 = document.querySelector(".btn2")
var cardsChosen = []
var cardsChosenId = []
var cardsWon = []

//create your board
function createBoard(){
    for (let i = 0; i < cardArray.length; i++){
        var card = document.createElement('img')
        card.setAttribute('src', 'images/blank.png')
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
        cards[optionOneId].setAttribute('src', 'images/blank.png')
        cards[optionTwoId].setAttribute('src', 'images/blank.png')
        
    }
    cardsChosen = []
    cardsChosenId = []
    resultDisplay.textContent = cardsWon.length
    if (cardsWon.length === cardArray.length/2){
        resultDisplay.textContent = 'Você ganhou!!';
        btn.style.display = "flex";
        btn2.style.display = "flex"
        btn2.style.display = "flex";
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