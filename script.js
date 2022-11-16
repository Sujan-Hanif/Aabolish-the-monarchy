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



function deal() {
    let cardRandomIndex = Math.floor(Math.random() * dealer.length);
    console.log(cardRandomIndex);
    const imgEle = document.getElementById('dealerImage')
    imgEle.src = dealer[cardRandomIndex].url;
}

setInterval(deal, 1000);



function nextRound() {
    document.getElementById("startGame").disabled = true;
    setTimeout(function () {
        document.getElementById("startGame").disabled = false;
    }, 10000);
}

document.getElementById("startGame").addEventListener("click", nextRound);