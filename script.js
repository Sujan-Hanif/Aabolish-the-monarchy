"use strict";
// const cards = document.querySelectorAll('.img-cards');



const displayCards = [
   // {"name": "king1", "image": "./card-pic/king-of-clubs.png"},

    './card-pic/king-of-clubs.png',
    './card-pic/king-of-diamonds.png',
    './card-pic/king-of-hearts.png',
    './card-pic/king-of-spades.png',
    './card-pic/queen-of-clubs.png',
    './card-pic/queen-of-diamonds.png',
    './card-pic/queen-of-hearts.png',
    './card-pic/queen-of-spades.png'];

    const positionsArray = [];

const showCardsEl = document.getElementById('showCards');



let element = document.getElementById( 'pos1' );
let pos1 = getPosition( element );

// Alert position in X axis
alert( pos1.x );

// Alert position in Y axis
alert( pos1.y );


function getPosition( element ) {
    var rect = element.getBoundingClientRect();
    return {
        x: rect.left,
        y: rect.top
    };

}


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
