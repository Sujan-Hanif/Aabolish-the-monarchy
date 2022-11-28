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


const showCardsEl = document.getElementById("showCards");

document.getElementById('startGame').addEventListener('click', () => {
  shuffleIteration();
  deal();
  hello();

})


function shuffleFunction() {
  document.getElementById('showCards').innerHTML = ''
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
    // comparingCards();
  });
}

shuffleFunction()






  const dealCardEl = document.getElementById("dealerImage");
  const playerScore = document.getElementById("player");
  const compScore = document.getElementById("comp");
  console.log("selectedcard ", selectedcard);
  if (e.target.dataset.id === dealCardEl.dataset.id) {
    playerScore.innerText = Number(playerScore.innerText) + 1;
  } else {
    compScore.innerText = Number(compScore.innerText) + 1;
  }




const imgIdSession = (id) => {
  console.log(id);
  let choosingCard = document.querySelectorAll('.displayed-card');
  console.log(choosingCard);
  choosingCard.forEach(element => {
    element.addEventListener('click', () => {
      console.log(element);
      console.log('elementalt', element.alt);
      console.log(element);

      const idsessionStorage = JSON.parse(sessionStorage.getItem('idCompareShuffle'))
      if (element.alt == idsessionStorage) {
        alert('yes')
      } else {
        alert('no')
      };
    });
  });


}
/* document
  .getElementById("startGame")
  .addEventListener("click", shuffleCardImage); */



function comparingCards(idCompare) {
  console.log(idCompare);
  const id = idCompare
  sessionStorage.setItem(JSON.stringify('idCompareShuffle', id));
  imgIdSession(id)

};


// // FUNCTION THAT SHUFFLES ALL CARDS***********
// const shuffleCardImage = () => {


// };


// Function that keeps iteration for 5 seconds*******
function shuffleIteration() {

  const timer = setInterval(shuffleFunction, 200);
  console.log(timer);
  setTimeout(() => {
    clearInterval(timer);
  }, 5000);
}


function myCallback(a, b) {
  console.log(a);
  console.log(b);
}


// SHOWING MESSAGE TO USER AND AUTO HIDE IN DOM********

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

/*********************************************************************************** */


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


function compare(id) {
  console.log('test', id);
  comparingCards(id)
};
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






/* function startDeal() {
    setInterval(deal(), 1000);

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


