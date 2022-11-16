"use strict"
// const cards = document.querySelectorAll('.img-cards');
/* 
let displayCards = [
    { id: 0, name: "glass", url: "./card-pic/king-of-clubs.png" },
    { id: 1, name: "camera", url: "./card-pic/king-of-diamonds.png" },
    { id: 2, name: "water", url: "./card-pic/king-of-hearts.png" },
    { id: 3, name: "autumn", url: "./images/4.j" },
    { id: 4, name: "girl", url: "./images/5.jpg" },
    { id: 5, name: "dog1", url: "./images/6.jpg" },
    { id: 6, name: "dog2", url: "./images/7.jpg" },
    { id: 7, name: "dog3", url: "./images/8.jpg" },
];
const sectionImage = document.getElementById("imgSection");
const shuffle = () => {
    let imgArray2 = [...displayCards];
    sectionImage.innerHTML = "";
    while (imgArray2.length > 0) {
        const displayImageIndex = Math.floor(Math.random() * imgArray2.length);
        const divEl = document.createElement("div");
        divEl.classList.add("parent");
        const imgEl = document.createElement("img");
        const idEl = document.createElement("p");
        const paraEl = document.createElement("p");
        imgEl.classList.add('sad')
        imgEl.setAttribute("class", "images");
        console.log(imgArray2);
        idEl.innerHTML = imgArray2[displayImageIndex].id;
        paraEl.innerHTML = imgArray2[displayImageIndex].name;
        divEl.append(imgEl);
        divEl.append(idEl);
        divEl.append(paraEl);
        sectionImage.append(divEl);
        imgEl.src = imgArray2[displayImageIndex].url;
        // console.log(imgArray2[displayImageIndex]).url;
        imgArray2.splice(displayImageIndex, 1);
        console.log(imgArray2);
    }

    const imgClick = document.querySelectorAll(".images");
    imgClick.forEach((element, id) => {
        element.addEventListener("click", () => {
            element.style.opacity = ".65";
            console.log(id);
        });
    });
};

document.getElementById("btn").addEventListener("click", shuffle); */


// Amins code above**************


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
    /*  const startButton = document.getElementById('startGame');
     startButton.innerHTML = 'Next Round'
     startButton.disabled = true; */

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

/* displayCards.forEach(element => {
    showCardsEl.innerHTML +=
        `<img src="${element.url}"> `;
})

let cardimg = document.getElementById('Images')
function shuffleCardImage() {
    var cards = Math.floor(Math.random() * displayCards.length);
    var img = displayCards[cards];
    cardimg.innerHTML += `<img src="${element.url}+ ${img}"> `
}
console.log(shuffleCardImage); */


/* function shuffleCardImage() {
    const ar = [displayCards]
    const cards = document.querySelectorAll('.showCards');
    let shuffled = ar.sort(() => Math.random() - 0.5);
} */