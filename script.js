"use strict";

const displayCards = [
  /*   { id: 0, name: "k1pink", url: "./card-pic/k-clubs.png" },
  { id: 1, name: "k2yellow", url: "./card-pic/k-diamonds.png" },
  { id: 2, name: "k3green", url: "./card-pic/k-hearts.png" },
  { id: 3, name: "k4blue", url: "./card-pic/k-spades.png" },
  { id: 4, name: "q1pink", url: "./card-pic/q-clubs.png" },
  { id: 5, name: "q2yellow", url: "./card-pic/q-diamonds.png" },
  { id: 6, name: "q3green", url: "./card-pic/q-hearts.png" },
  { id: 7, name: "q4blue", url: "./card-pic/q-spades.png" }, */

  // New Cards*************
  { id: 0, name: "k1pink", url: "./card-pic/k1.png" },
  { id: 1, name: "k2yellow", url: "./card-pic/k2.png" },
  { id: 2, name: "k3green", url: "./card-pic/k3.png" },
  { id: 3, name: "k4blue", url: "./card-pic/k4.png" },
  { id: 4, name: "q1pink", url: "./card-pic/q1.png" },
  { id: 5, name: "q2yellow", url: "./card-pic/q2.png" },
  { id: 6, name: "q3green", url: "./card-pic/q3.png" },
  { id: 7, name: "q4blue", url: "./card-pic/q4.png" },
];

function showalert(e) {
  const selectedcard = displayCards.filter(
    (item) => item.id === Number(e.target.dataset.id)
  )[0];
  const dealCardEl = document.getElementById("dealerImage");
  const playerScore = document.getElementById("player");
  const compScore = document.getElementById("comp");
  console.log("selectedcard ", selectedcard);
  if (e.target.dataset.id === dealCardEl.dataset.id) {
    playerScore.innerText = Number(playerScore.innerText) + 1;
  } else {
    compScore.innerText = Number(compScore.innerText) + 1;
  }
}
// FUNCTION THAT SHUFFLES ALL CARDS***********
function shuffleCardImage() {
  let showCardsEl = document.getElementById("showCards");
  showCardsEl.innerHTML = "";
  displayCards.sort(() => Math.random() - 0.5);
  displayCards.forEach(function (element) {
    showCardsEl.innerHTML += `<img  src = "${element.url}" data-id ="${element.id}">`;
  });
}
/* document
  .getElementById("startGame")
  .addEventListener("click", shuffleCardImage); */

// Previous approach to display all cards randomly********
/* const shuffleCardImage = () => {
    let showCardsNew = [...displayCards];
    showCardsEl.innerHTML = "";
    while (showCardsNew.length > 0) {
        const displayImageIndex = Math.floor(Math.random() * showCardsNew.length);
        const divEl = document.createElement("div");
        divEl.classList.add("parent");
        const imgEl = document.createElement("img");
        imgEl.classList.add("img");
        imgEl.src = showCardsNew[displayImageIndex].url;
        divEl.append(imgEl);
        showCardsEl.append(divEl);
        showCardsNew.splice(displayImageIndex, 1);
    }
} */

// Function to grab the click value and comapre**************************
/* function comapare(idcompare) {
    console.log(idcompare);
    let cardImg = document.querySelectorAll('.show-cards');
    cardImg.forEach(function (element) {
        element.addEventListener('click', function () {
            if (element.alt == idcompare) {
                alert('You have achieved 1 point');
            } else {
                alert('You have choosed wrong card');
            }

        })
    })

} */

// Function that keeps iteration for 5 seconds*******
function shuffleIteration() {
  const timer = setInterval(shuffleCardImage, 200);
  setTimeout(() => {
    clearInterval(timer);
  }, 5000);
}

// Timer for the user ********
function hello() {
  document.getElementById("msg").classList.toggle("showmsg");
  //Timer Countdown********************
  let timeleft = 6;
  let timer = setInterval(function () {
    if (timeleft <= -1) {
      clearInterval(timer);
      document.getElementById("counter").innerHTML = "Time Over";
    } else {
      document.getElementById("counter").innerHTML =
        "Choose the Card by " + timeleft + " Seconds";
    }
    timeleft--;
  }, 1000);
}

//***************************
/*     let counter = setInterval(function msgForUser() {
        document.getElementById('msg').classList.toggle('showmsg');
    }, 3000)
    setTimeout(() => {
        clearInterval(counter)
    }, 8000);
} */

// AUTO HIDE MESSAGE *****
/* function autoHideMessage() {
    let x = setInterval(function msgForUser() {
        document.getElementById('msg').style.display = 'none';
    }, 8000)
}
let click = document.getElementById('startGame');
click.addEventListener('click', autoHideMessage); */

// DEALER CARDS THAT SHOWS INTERVAL **********************

const dealer = [
  /* { id: 0, name: "k1pink", url: "./card-pic/k-clubs.png" },
  { id: 1, name: "k2yellow", url: "./card-pic/k-diamonds.png" },
  { id: 2, name: "k3green", url: "./card-pic/k-hearts.png" },
  { id: 3, name: "k4blue", url: "./card-pic/k-spades.png" },
  { id: 4, name: "q1pink", url: "./card-pic/q-clubs.png" },
  { id: 5, name: "q2yellow", url: "./card-pic/q-diamonds.png" },
  { id: 6, name: "q3green", url: "./card-pic/q-hearts.png" },
  { id: 7, name: "q4blue", url: "./card-pic/q-spades.png" }, */

  //New Cards**********
  { id: 0, name: "k1pink", url: "./card-pic/k1.png" },
  { id: 1, name: "k2yellow", url: "./card-pic/k2.png" },
  { id: 2, name: "k3green", url: "./card-pic/k3.png" },
  { id: 3, name: "k4blue", url: "./card-pic/k4.png" },
  { id: 4, name: "q1pink", url: "./card-pic/q1.png" },
  { id: 5, name: "q2yellow", url: "./card-pic/q2.png" },
  { id: 6, name: "q3green", url: "./card-pic/q3.png" },
  { id: 7, name: "q4blue", url: "./card-pic/q4.png" },
];

// This function randoomly shows one card from the array above******
function deal() {
  let cardRandomIndex = Math.floor(Math.random() * dealer.length);
  let dealCardEl = document.getElementById("dealerImage");
  dealCardEl.src = dealer[cardRandomIndex].url;
  dealCardEl.dataset.id = dealer[cardRandomIndex].id;
}
document.getElementById("startGame").addEventListener("click", deal);

// Disablinf button t prevent user to start again**********************
/* function nextRound() {
    document.getElementById("startGame").disabled = true;
    setTimeout(function () {
        document.getElementById("startGame").disabled = false;
    }, 7000);
} */

shuffleCardImage();
deal();

function startGame() {
  shuffleIteration();
  hello();
}
