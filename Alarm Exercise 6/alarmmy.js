let datetime = document.getElementById("datetime")
let time = document.getElementById("time")
datetime.addEventListener("blur", function () {
    console.log(datetime.value)
})
time.addEventListener("blur", function () {
    console.log(time.value)
    let dif = time.value -  d.getHours();
    console.log("bf ",d.getDate() )
    console.log("difrence ", dif)
    setTimeout(() => {
        function play() {
            var audio = new Audio('https://interactive-examples.mdn.mozilla.net/media/cc0-audio/t-rex-roar.mp3');
            audio.play();
        }
    }, time.value);
})

 


function play() {
    var audio = new Audio('https://interactive-examples.mdn.mozilla.net/media/cc0-audio/t-rex-roar.mp3');
    audio.play();
}
let d = new Date();
console.log("date time :", d.getDate(),
    d.getHours(),
    d.getMinutes())