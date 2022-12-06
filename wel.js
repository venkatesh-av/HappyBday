let day = document.getElementById("day")
let HH = document.getElementById("HH")
let MM = document.getElementById("MM")
let SS = document.getElementById("SS")
let bn = document.getElementById("btn1")

fixedDate = "12/6/2022";
let a1 = new Date();

// function musicplay() {
//     let music = new Audio("https://res.cloudinary.com/dgurkbuce/video/upload/v1670304950/Happy-Birthday_d48p8g.mp3");
//     music.play();
// }
// musicplay();
// create an audio element and assign it to a variable
var audio = document.createElement("audio");

// set the source of the audio file
audio.src = "https://res.cloudinary.com/dgurkbuce/video/upload/v1670304950/Happy-Birthday_d48p8g.mp3";

// set the volume of the audio file

var d1 = 5;
var h1 = 11;
var m1 = 00;
var s1 = 1;
let currentdate = a1.getDate();
let currenthr = a1.getHours();
console.log(currentdate + " : " + currenthr)
console.log(currentdate < d1 && currenthr <= 23)
console.log(currentdate < d1)
console.log(currenthr <= 23)
if (a1.toLocaleDateString() !== fixedDate && currentdate <= d1) {
    clr = setInterval(function() {
        let a = new Date();
        let d = a.getDate();
        let h = a.getHours();
        let m = a.getMinutes();
        let s = a.getSeconds();
        let dt = a.toLocaleDateString();
        console.log(dt)

        days = Math.abs(d1 - d);
        days = (days).toString().padStart(2, 0);
        hh = Math.abs(h1 - h % 12);
        hh = (hh).toString().padStart(2, 0);
        if (m1 == 0) {
            mm = (60 - Math.abs(m1 - m)) % 60 - 1;
        } else {
            mm = Math.abs(m1 - m) % 60 - 1;
        }
        mm = (mm).toString().padStart(2, 0);
        ss = (60 - Math.abs(s1 - s)) % 60;
        ss = (ss).toString().padStart(2, 0);

        day.innerHTML = days;
        HH.innerHTML = hh;
        if (mm == "-1") {
            mm = "00"
        }
        MM.innerHTML = mm;
        SS.innerHTML = ss;

        if (dt == fixedDate) {
            bn.style.background = "green"
            bn.addEventListener("click", function() {
                window.open("https://venkatesh-av.githu.io/bdaysite/")
            })
            clearInterval(clr)
        }

    }, 1000)
} else {
    console.log("executing this...")
    bn.style.background = "green"
    bn.addEventListener("click", function() {
        audio.play();
        window.open("https://venkatesh-av.githu.io/bdaysite/");
    })
}
