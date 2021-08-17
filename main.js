const secDiv = document.querySelector("#sec")
const minDiv = document.querySelector("#min")
const hrDiv = document.querySelector("#hr")

setInterval(clock, 1000);

function clock() {
    let day = new Date()
    let sec = day.getSeconds() / 60
    let min =(sec + day.getMinutes()) / 60
    let hr = (min + day.getHours()) / 12

    secDiv.style.transform = "rotate("+ (sec * 360) + "deg)"
    minDiv.style.transform = "rotate("+ (min * 360) + "deg)"
    hrDiv.style.transform = "rotate("+ (hr * 360) + "deg)"
}

clock()