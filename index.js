
let home = document.getElementById("home")
let guest = document.getElementById("guest")
let homeScore = 0
let guestScore = 0

window.homeOne = function homeOne() {
    homeScore += 1
    home.textContent = homeScore
}

window.homeTwo = function homeTwo() {
    homeScore += 2
    home.textContent = homeScore
}

window.homeThree = function homeThree() {
    homeScore += 3
    home.textContent = homeScore
}

window.guestOne = function guestOne() {
    guestScore += 1
    guest.textContent = guestScore
}

window.guestTwo = function guestTwo() {
    guestScore += 2
    guest.textContent = guestScore
}

window.guestThree = function guestThree() {
    guestScore += 3
    guest.textContent = guestScore
}
