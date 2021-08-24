// Popup window
$(".venobox").venobox();
$(".video-player").venobox({
    spinner: "cube-grid",
});

$("#countdownTwo").syotimer({
    year: 2023,
    month: 7,
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
