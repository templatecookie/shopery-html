function increment() {
    document.getElementById("counter-btn-counter").stepUp();
}

function decrement() {
    document.getElementById("counter-btn-counter").stepDown();
}

//  Venobox
$("#countdownOne").syotimer({
    year: 2022,
    month: 9,
    day: 25,
    hour: 20,
    minute: 30,
});

$("#countdownThree").syotimer({
    year: 2022,
    month: 9,
    day: 25,
    hour: 20,
    minute: 30,
});
