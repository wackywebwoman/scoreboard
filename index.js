
let home = document.getElementById("home")
let guest = document.getElementById("guest")
let addTwo = document.getElementById("guestTwo").addEventListener("click, guestTwo")
let homeScore = 0
let guestScore = 0

function homeOne() {
    homeScore += 1
    home.textContent = homeScore
}

function homeTwo() {
    homeScore += 2
    home.textContent = homeScore
}

function homeThree() {
    homeScore += 3
    home.textContent = homeScore
}

function guestOne() {
    guestScore += 1
    guest.textContent = guestScore
}

function guestTwo() {
    guestScore += 2
    addTwo.textContent = guestScore
}

function guestThree() {
    guestScore += 3
    guest.textContent = guestScore
}
