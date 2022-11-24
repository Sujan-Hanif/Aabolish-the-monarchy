"use strict";

const displayCards = [
  { id: 0, name: "KingClubs", url: "./card-pic/king-of-clubs.png" },
  { id: 1, name: "KingDiamond", url: "./card-pic/king-of-diamonds.png" },
  { id: 2, name: "KingHearts", url: "./card-pic/king-of-hearts.png" },
  { id: 3, name: "KingSpades", url: "./card-pic/king-of-spades.png" },
  { id: 4, name: "QueenClubs", url: "./card-pic/queen-of-clubs.png" },
  { id: 5, name: "QueenDiamond", url: "./card-pic/queen-of-diamonds.png" },
  { id: 6, name: "QueenHearts", url: "./card-pic/queen-of-hearts.png" },
  { id: 7, name: "QueenSpades", url: "./card-pic/queen-of-spades.png" },
];

const showCardsEl = document.getElementById("showCards");


document.getElementById('start-round').addEventListener('click', () => {
  document.getElementById('showCards').innerHTML = '';

  displayCards.sort(() => Math.random() - .5);

  displayCards.forEach(element => {
    document.getElementById('showCards').innerHTML +=
      `
            <div style="display: flex; flex-direction: column;">
            <p>${element.id}</p>
            <p>${element.name}</p>
            <img  class="displayed-card" width="120" height="150"  src="${element.url}" alt="${element.id}">
            </div>
            `
    comparingCards();
  });
})


document.getElementById("startGame").addEventListener("click", displayCards);


function comparingCards(idCompare) {
  console.log(idCompare);

  let choosingCard = document.querySelectorAll('.displayed-card');

  choosingCard.forEach(element => {

    element.addEventListener('click', () => {
      console.log(element);
      console.log('elementalt', element.alt);
      console.log(element);
      console.log('idcompare', idCompare);

      if (element.alt == idCompare) {
        alert('yes')
      } else {
        alert('no')
      };
    });
  });
  /* console.log(choosingCard);*/
};




// // FUNCTION THAT SHUFFLES ALL CARDS***********
// const shuffleCardImage = () => {


// };


function shuffleIteration() {
  const timer = setInterval(displayCards, 200);
  setTimeout(() => {
    clearInterval(timer);
  }, 5000);
  /* setTimeout(() => {
        alert('Choose the correct card')
    }, 5000); */
}

// SHOWING MESSAGE TO USER AND AUTO HIDE IN DOM********
function hello() {
  document.getElementById("msg").classList.toggle("showmsg");
  //Timer Countdown********************
  var timeleft = 6;
  var timer = setInterval(function () {
    if (timeleft <= 0) {
      clearInterval(timer);
      document.getElementById("counter").innerHTML = "Time Over";
    } else {
      document.getElementById("counter").innerHTML =
        "Choose the Card by " + timeleft + " Seconds";
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
  { id: 0, name: "KingClubs", url: "./card-pic/king-of-clubs.png" },
  { id: 1, name: "KingDiamond", url: "./card-pic/king-of-diamonds.png" },
  { id: 2, name: "KingHearts", url: "./card-pic/king-of-hearts.png" },
  { id: 3, name: "KingSpades", url: "./card-pic/king-of-spades.png" },
  { id: 4, name: "QueenClubs", url: "./card-pic/queen-of-clubs.png" },
  { id: 5, name: "QueenDiamond", url: "./card-pic/queen-of-diamonds.png" },
  { id: 6, name: "QueenHearts", url: "./card-pic/queen-of-hearts.png" },
  { id: 7, name: "QueenSpades", url: "./card-pic/queen-of-spades.png" },
];


// This function randoomly shows one card from the array above******
function deal() {
  let cardRandomIndex = Math.floor(Math.random() * dealer.length);
  console.log(cardRandomIndex);
  const imgEle = document.getElementById("dealerImage");
  const imgId = document.getElementById('imageId')
  imgEle.src = dealer[cardRandomIndex].url;
  imgId.innerHTML = dealer[cardRandomIndex].id;
  const comparingid = dealer[cardRandomIndex].id
  console.log(dealer[cardRandomIndex]);
  compare(comparingid);
  return dealer[cardRandomIndex];
};

function compare(id) {
  console.log('test', id);
  comparingCards(id)
};


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

// dealer part shuffle
const img = document.getElementById('dealerImgRandom');

const shuffleCardsItem = [...dealer];
console.log(shuffleCardImage);

 */
// document.getElementById("startGame").addEventListener("click", nextRound); */
