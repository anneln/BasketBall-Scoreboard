/*let PlusOneHome = document.getElementById('plus-one-home')
let PlusTwoHome = document.getElementById('plus-two-home')
let PlusThreeHome = document.getElementById('plus-three-home')*/

let homeScore = document.getElementById('home-score')
let homePoints = 0
let guestScore = document.getElementById('guest-score')
let guestPoints = 0
let message = document.getElementById("message")

function addOnePointToHome() {
    homeScore.textContent = homePoints+=1
}

function addTwoPointsToHome() {
    homeScore.textContent = homePoints+=2
}

function addThreePointsToHome() {
    homeScore.textContent = homePoints+=3
    GetMessage()
    hideMessage()
}

function addOnePointToGuest() {
    guestScore.textContent = guestPoints+=1
}

function addTwoPointsToGuest() {
    guestScore.textContent = guestPoints+=2
}

function addThreePointsToGuest() {
    guestScore.textContent = guestPoints+=3
    GetMessage()
    hideMessage()
}

function startNewGame() {
    homeScore.textContent = homePoints=0 
    guestScore.textContent = guestPoints=0
}

function GetMessage() {
    message.textContent = "Good Game!🥳"
    message.style.visibility='visible'      
}
    
function hideMessage() {
    setTimeout(
            function(){
                document.getElementById("message").style.visibility='hidden';
            }, 4000
        );
}
    




