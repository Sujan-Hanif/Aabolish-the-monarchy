"use strict"

const displayCards = [
    { id: 0, name: 'k1pink', url: './card-pic/k1.png' },
    { id: 1, name: 'k2yellow', url: './card-pic/k2.png' },
    { id: 2, name: 'k3green', url: './card-pic/k3.png' },
    { id: 3, name: 'k4blue', url: './card-pic/k4.png' },
    { id: 4, name: 'q1pink', url: './card-pic/q1.png' },
    { id: 5, name: 'q2yellow', url: './card-pic/q2.png' },
    { id: 6, name: 'q3green', url: './card-pic/q3.png' },
    { id: 7, name: 'q4blue', url: './card-pic/q4.png' }
];

const showCardsEl = document.getElementById('showCards');
// FUNCTION THAT SHUFFLES ALL CARDS***********
function shuffleCardImage() {
    showCardsEl.innerHTML = '';
    displayCards.sort(() => Math.random() - .5);
    displayCards.forEach(function (element) {
        showCardsEl.innerHTML +=
            `<img class = "show-cards" src = "${element.url}" alt = "${element.id}">`
    })
}
//******************************************
function checkCard(idCompare) {
    console.log(idCompare);
    let card = document.querySelectorAll('.show-cards');
    card.forEach(element => {
        element.addEventListener('click', () => {
            if (element.alt == idCompare) {
                alert('yes')
            } else {
                alert('no')
            };
        });
    });
}

//************************** 
/* function comapare(idcompare) {
    console.log(idcompare);
    let cardImg = document.querySelectorAll('shuffleCard');
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




// Previous approach
/* const shuffleCardImage = () => {
    let showCardsNew = [...displayCards];
 
    console.log(showCardsNew);
    showCardsEl.innerHTML = "";
    while (showCardsNew.length > 0) {
        const displayImageIndex = Math.floor(Math.random() * showCardsNew.length);
        const divEl = document.createElement("div");
        divEl.classList.add("parent");
        const imgEl = document.createElement("img");
        imgEl.classList.add("img");
        // imgEl.setAttribute("class", "card-pic");
        imgEl.src = showCardsNew[displayImageIndex].url;
        divEl.append(imgEl);
        showCardsEl.append(divEl);
        showCardsNew.splice(displayImageIndex, 1);
    }
} */


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


// Timer for the user ********
function hello() {
    document.getElementById('msg').classList.toggle('showmsg')
    //Timer Countdown********************
    let timeleft = 6;
    let timer = setInterval(function () {
        if (timeleft <= -1) {
            clearInterval(timer);
            document.getElementById('counter').innerHTML = "Time Over";
        } else {
            document.getElementById('counter').innerHTML = "Choose the Card by " + timeleft + " Seconds";
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
    { id: 0, name: 'k1pink', url: './card-pic/k1.png' },
    { id: 1, name: 'k2yellow', url: './card-pic/k2.png' },
    { id: 2, name: 'k3green', url: './card-pic/k3.png' },
    { id: 3, name: 'k4blue', url: './card-pic/k4.png' },
    { id: 4, name: 'q1pink', url: './card-pic/q1.png' },
    { id: 5, name: 'q2yellow', url: './card-pic/q2.png' },
    { id: 6, name: 'q3green', url: './card-pic/q3.png' },
    { id: 7, name: 'q4blue', url: './card-pic/q4.png' }
];

// This function randoomly shows one card from the array above******

function deal() {
    let cardRandomIndex = Math.floor(Math.random() * dealer.length);

    let dealCardEl = document.getElementById('dealerImage');
    let imgCardEl = document.getElementById('imageId');

    dealCardEl.src = dealer[cardRandomIndex].url;
    imgCardEl.innerHTML = dealer[cardRandomIndex].id;
    const compareId = dealer[cardRandomIndex].id;
    compare(compareId);

    return dealer[cardRandomIndex];

}

function compare(id) {
    console.log('test', id);
    checkCard(id);
};




/* function startDeal() {
    setInterval(deal(), 1000);
}
 */
/* // FUNCTON THAT STOPS DEAL
function stopDeal() {
    clearInterval(start);
} */


function nextRound() {
    document.getElementById("startGame").disabled = true;
    setTimeout(function () {
        document.getElementById("startGame").disabled = false;
    }, 7000);
}
document.getElementById("startGame").addEventListener("click", nextRound);