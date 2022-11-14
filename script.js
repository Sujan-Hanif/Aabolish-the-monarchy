"use strict"
// const cards = document.querySelectorAll('.img-cards');


const displayCards = [
    './card-pic/king-of-clubs.png',
    './card-pic/king-of-diamonds.png',
    './card-pic/king-of-hearts.png',
    './card-pic/king-of-spades.png',
    './card-pic/queen-of-clubs.png',
    './card-pic/queen-of-diamonds.png',
    './card-pic/queen-of-hearts.png',
    './card-pic/queen-of-spades.png'];

const showCardsEl = document.getElementById('showCards');



displayCards.forEach((element, i) => {
    showCardsEl.innerHTML += ` 
    
        <img src="${element}" alt="">
        `;
})

function shuffleCards() {
    let index = Math.floor(Math.random() * displayCard.length);
    let allImage = displayCards[index];
    document.querySelectorAll('.img').src = `./card-pic/${allImage}`;
}
