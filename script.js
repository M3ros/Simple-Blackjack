// All Variables have been set including DOM variables
let cards = []
let sum = 0
let hasBlackjack = false
let isAlive = false
let message = ""
let messageEL = document.getElementById("message-el")
let sumEL = document.getElementById("sum-el")
let cardEL = document.getElementById("card-el")
let player = {
    name: "Player",
    chips: 200
}
let playerEl = document.getElementById("player-el")
playerEl.textContent = player.name + ": $" + player.chips

// Function to start thge game 
function startGame() {
    isAlive = true
    let firstCard = randomNum()
    let secondCard = randomNum()
    cards = [firstCard, secondCard]
    sum = firstCard + secondCard
    playGame();
}
// function to choose a random number with assigning anything over 10 to to and 1 to 11
function randomNum (min, max) {
    let randomNum = Math.floor( Math.random()*13 ) + 1
    if (randomNum > 10) {
        return 10
    } else if (randomNum === 1) {
        return 11
    } else {
        return randomNum
    }
}

// function to play the game depending on the hand
function playGame() {
    cardEL.textContent = "Cards: "

    for (let i = 0; i < cards.length; i++) {
        cardEL.textContent += cards[i] + " "
    }

    sumEL.textContent = `Sum: ${sum}`
    if (sum <= 20) {
        message = "Do you want to draw a new card?"
    } else if (sum === 21) {
        message = "Congrats! You got Blackjack!"
        hasBlackjack = true
    } else{
        message = "Oops! looks liked you busted, Dealer wins!"
        isAlive = false
    }
    messageEL.textContent = message
}

// Function to generate a new card for the player to draw from
function newCard() {
    if (hasBlackjack == false && isAlive == true) {
    let card = randomNum()
    sum += card 
    cards.push(card)
    playGame();}
    message = "Dealer wins! Try again!"
}
