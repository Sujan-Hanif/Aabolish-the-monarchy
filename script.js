"use strict"

const displayCards = [
    { id: 0, name: 'KingClubs', url: './card-pic/king-of-clubs.png' },
    { id: 1, name: 'KingDiamond', url: './card-pic/king-of-diamonds.png' },
    { id: 2, name: 'KingHearts', url: './card-pic/king-of-hearts.png' },
    { id: 3, name: 'KingSpades', url: './card-pic/king-of-spades.png' },
    { id: 4, name: 'QueenClubs', url: './card-pic/queen-of-clubs.png' },
    { id: 5, name: 'QueenDiamond', url: './card-pic/queen-of-diamonds.png' },
    { id: 6, name: 'QueenHearts', url: './card-pic/queen-of-hearts.png' },
    { id: 7, name: 'QueenSpades', url: './card-pic/queen-of-spades.png' }
];

const showCardsEl = document.getElementById('showCards');

// FUNCTION THAT SHUFFLES ALL CARDS***********
const shuffleCardImage = () => {


    let showCardsNew = [...displayCards];

    showCardsEl.innerHTML = "";

    while (showCardsNew.length > 0) {

        const displayImageIndex = Math.floor(Math.random() * showCardsNew.length);

        const divEl = document.createElement("div");

        divEl.classList.add("parent");

        const imgEl = document.createElement("img");

        imgEl.classList.add("img");
        imgEl.setAttribute("class", "card-pic");

        imgEl.innerHTML = showCardsNew[displayImageIndex].url;
        divEl.append(imgEl);

        showCardsEl.append(divEl);
        imgEl.src = showCardsNew[displayImageIndex].url;

        showCardsNew.splice(displayImageIndex, 1);
    }
};

document.getElementById("startGame").addEventListener("click", shuffleCardImage());

function shuffle() {
    const timer = setInterval(shuffleCardImage, 100);
    setTimeout(() => {
        clearInterval(timer)
    }, 5000);
    setTimeout(() => {
        alert('Choose the correct card')
    }, 5000);
}



// DEALER CARDS THAT SHOWS INTERVAL **********************

const dealer = [
    { id: 0, name: 'KingClubs', url: './card-pic/king-of-clubs.png' },
    { id: 1, name: 'KingDiamond', url: './card-pic/king-of-diamonds.png' },
    { id: 2, name: 'KingHearts', url: './card-pic/king-of-hearts.png' },
    { id: 3, name: 'KingSpades', url: './card-pic/king-of-spades.png' },
    { id: 4, name: 'QueenClubs', url: './card-pic/queen-of-clubs.png' },
    { id: 5, name: 'QueenDiamond', url: './card-pic/queen-of-diamonds.png' },
    { id: 6, name: 'QueenHearts', url: './card-pic/queen-of-hearts.png' },
    { id: 7, name: 'QueenSpades', url: './card-pic/queen-of-spades.png' }
];

// WE MIGHT NEED 8 ARRAY INSIDE OF ANA ARRAY TO MAKE SURE THE DEALER IS JUST SHOWNG ONE ARRAY EACH ROUND
// THE PLAN IS TO JUST HAVE
function deal() {
    let cardRandomIndex = Math.floor(Math.random() * dealer.length);
    console.log(cardRandomIndex);
    const imgEle = document.getElementById('dealerImage')
    imgEle.src = dealer[cardRandomIndex].url;
}

/* function startDeal() {
    setInterval(deal(), 1000);
}
 */
/* // FUNCTON THAT STOPS DEAL
function stopDeal() {
    clearInterval(start);
} */
/*

function nextRound() {
    document.getElementById("startGame").disabled = true;
    setTimeout(function () {
        document.getElementById("startGame").disabled = false;
    }, 5000);
}


//
// dealer part shuffle
const img = document.getElementById('dealerImgRandom');

const shuffleCardsItem = [...dealer];
console.log(shuffleCardImage);

 */
// document.getElementById("startGame").addEventListener("click", nextRound); */