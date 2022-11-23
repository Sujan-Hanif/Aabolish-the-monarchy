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


    let showCardsNew = displayCards;
    console.log(showCardsNew);

    showCardsEl.innerHTML = "";

    while (showCardsNew.length > 0) {

        const displayImageIndex = Math.floor(Math.random() * showCardsNew.length);

        const divEl = document.createElement("div");

        divEl.classList.add("parent");

        const imgEl = document.createElement("img");

        imgEl.classList.add("img");
        imgEl.setAttribute("class", "card-pic");
        imgEl.src = showCardsNew[displayImageIndex].url;
        divEl.append(imgEl);
        showCardsEl.append(divEl);
        showCardsNew.splice(displayImageIndex, 1);
    }

    showCardsNew.forEach((element, index) => {
        element.addEventListener('click', () => {
            console.log(element.name)
        });
    });


};

document.getElementById("startGame").addEventListener("click", shuffleCardImage());

function shuffleIteration() {
    const timer = setInterval(shuffleCardImage, 200);
    setTimeout(() => {
        clearInterval(timer)
    }, 5000);
    /* setTimeout(() => {
        alert('Choose the correct card')
    }, 5000); */


}



// SHOWING MESSAGE TO USER AND AUTO HIDE IN DOM********
function hello() {
    document.getElementById('msg').classList.toggle('showmsg');
    //Timer Countdown********************
    var timeleft = 6;
    var timer = setInterval(function () {
        if (timeleft <= 0) {
            clearInterval(timer);
            document.getElementById('counter').innerHTML = "Time Over";
        } else {
            document.getElementById('counter').innerHTML = "Choose the Card by " + timeleft + " Seconds";
        }
        timeleft--;
    }, 1000);


    //***************************
    /* let counter = setInterval(function msgForUser() {
        document.getElementById('msg').classList.toggle('showmsg');
    }, 3000)
    setTimeout(() => {
        clearInterval(counter)
    }, 8000); */
}

// AUTO HIDE MESSAGE *****
/* function autoHideMessage() {
    let x = setInterval(function msgForUser() {
        document.getElementById('msg').style.display = 'none';
    }, 8000)
}
let click = document.getElementById('startGame');
click.addEventListener('click', autoHideMessage);
 */




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

// This function randoomly shows one card from the array above******
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