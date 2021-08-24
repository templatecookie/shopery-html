function increment() {
    document.getElementById("counter-btn-counter").stepUp();
}

function decrement() {
    document.getElementById("counter-btn-counter").stepDown();
}

//  Venobox
$(".venobox").venobox();

$("#countdownOne").syotimer({
    year: 2021,
    month: 9,
    day: 25,
    hour: 20,
    minute: 30,
});
$("#countdownTwo").syotimer({
    year: 2021,
    month: 9,
    day: 30,
    hour: 20,
    minute: 30,
});
$("#countdownThree").syotimer({
    year: 2021,
    month: 9,
    day: 25,
    hour: 20,
    minute: 30,
});

var demo1 = new BVSelect({
    selector: "#selectbox1",
    searchbox: false,
    offset: false,
    placeholder: "Eng",
});
var demo2 = new BVSelect({
    selector: "#selectbox2",
    searchbox: false,
    offset: false,
    placeholder: "USD",
});
