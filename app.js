const hr = document.getElementById("hours");
const min = document.getElementById("min");
const sec = document.getElementById("sec");
const AP = document.getElementById("meridian");

function clockTime() {
    let time = new Date();
    let h = time.getHours();
    let m = time.getMinutes();
    let s = time.getSeconds();

    let AP = h >= 12 ? "PM" : "AM";

    h = h % 12;
    h = h ? h : 12;

    h = h < 10 ? "0" + h : h;
    m = m < 10 ? "0" + m : m;
    s = s < 10 ? "0" + s : s;
    hr.innerText = h;
    min.innerText = m;
    sec.innerText = s;
    meridian.innerText = AP;

    setTimeout(() => {
        clockTime();
    }, 1000);
}

clockTime()