"use strict";
const displayCards = [
  { id: 0, name: "k1pink", url: "./card-pic/k1.png" },
  { id: 1, name: "k2yellow", url: "./card-pic/k2.png" },
  { id: 2, name: "k3green", url: "./card-pic/k3.png" },
  { id: 3, name: "k4blue", url: "./card-pic/k4.png" },
  { id: 4, name: "q1pink", url: "./card-pic/q1.png" },
  { id: 5, name: "q2yellow", url: "./card-pic/q2.png" },
  { id: 6, name: "q3green", url: "./card-pic/q3.png" },
  { id: 7, name: "q4blue", url: "./card-pic/q4.png" },
];

/***************************************************************************/

//
function compare(e) {
  const selectedcard = displayCards.filter(
    (item) => item.id === Number(e.target.dataset.id)
  )[0];
  console.log();

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
/* document
  .getElementById("startGame")
  .addEventListener("click", shuffleCardImage); */

/***************************************************************************************** */

// FUNCTION THAT SHUFFLES ALL CARDS***********
function shuffleCardImage() {
  let showCardsEl = document.getElementById("showCards");
  showCardsEl.innerHTML = "";
  displayCards.sort(() => Math.random() - 0.5);
  displayCards.forEach(function (element) {
    showCardsEl.innerHTML += `<img  src = "${element.url}" data-id ="${element.id}">`;
    element.pointerEvents = "none";
    setTimeout(() => {
      element.pointerEvents = "none";
    }, 5000);
  });
}

// Function that keeps iteration for 5 seconds*******
function shuffleIteration() {
  const timer = setInterval(shuffleCardImage, 200);
  setTimeout(() => {
    clearInterval(timer);
  }, 5000);
}

/******************************************************************************************/

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

// DEALER CARDS THAT SHOWS INTERVAL **********************

const dealer = [
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

// Disablinf button t prevent user to start again**********************
function nextRound() {
  document.getElementById("startGame").disabled = true;
  setTimeout(function () {
    document.getElementById("startGame").disabled = false;
  }, 7000);
}

// Showng user location using API*******
const api = "e15aa9f9b95de69c756f4a4c6203cfd7";
const loc = document.querySelector("#location");
window.addEventListener("load", () => {
  let long;
  let lat;
  // Accesing Geolocation of User
  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition((position) => {
      // Storing Longitude and Latitude in variables
      long = position.coords.longitude;
      lat = position.coords.latitude;
      const base = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${long}&appid=${api}&units=metric`;

      // Using fetch to get data
      fetch(base)
        .then((response) => {
          return response.json();
        })
        .then((data) => {
          const place = data.name;
          // Interacting with DOM to show data
          loc.textContent = `${place}`;
        });
    });
  }
});

shuffleCardImage();

// Gathering all function inside one function for Start game
function startGame() {
  shuffleIteration();
  hello();
  deal();
  nextRound();
}

/*  FOR RULES POPUP WINDOW */

const popupRules = document.getElementById("popup-rules");
const buttonRules = document.getElementById("button-rules");
const popupClose = document.getElementById("popup-close");

function showRules() {
  popupRules.classList.toggle("popup-rules__active");
}

function hideRules() {
  popupRules.classList.remove("popup-rules__active");
}

buttonRules.addEventListener("click", showRules);
popupClose.addEventListener("click", hideRules);
