"use strict"
// const cards = document.querySelectorAll('.img-cards');


const displayCards = [

    { id: 0, name: 'King1', url: './card-pic/king-of-clubs.png' },
    { id: 1, name: 'King2', url: './card-pic/king-of-diamonds.png' },
    { id: 2, name: 'King3', url: './card-pic/king-of-hearts.png' },
    { id: 3, name: 'King4', url: './card-pic/king-of-spades.png' },
    { id: 4, name: 'Queen1', url: './card-pic/queen-of-clubs.png' },
    { id: 5, name: 'Queen2', url: './card-pic/queen-of-diamonds.png' },
    { id: 6, name: 'Queen3', url: './card-pic/queen-of-hearts.png' },
    { id: 7, name: 'Queen4', url: './card-pic/queen-of-spades.png' }
];


console.log(displayCards);


const showCardsEl = document.getElementById('showCards');

displayCards.forEach(element => {
    showCardsEl.innerHTML +=
        `
        <img class='amin-image' src="${element.url}">
        <p>${element.name}</p>
        `;
})



function shuffleCardImage() {
    const ar = [1, 2, 3, 4]
    const cards = document.querySelectorAll('.amin-image');
    let shuffled = ar.sort(() => Math.random() - 0.5);

    console.log(shuffled);



}
