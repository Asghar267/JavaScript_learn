let datetime = document.getElementById("datetime")
let alarmsubmit = document.getElementById("alarmSubmit")
 
alarmsubmit.addEventListener('click',setAlarm)
function setAlarm(e){
    e.preventDefault();
    console.log("Setting alarm")

    const alarmt = document.getElementById("alarm");
    console.log("set alarm for ", alarmt.value)
    alarmdate = new Date(alarmt.value) 
    console.log("alarm date "+ alarmdate)

    now = new Date();
     
    console.log(`time diffrence ${alarmdate - now}`)
    let dif =alarmdate - now;
    let a =""+ alarmdate;
    if( "Invalid Date" ==  alarmdate){
console.log("Invalid Date")
    }
    else{
        setTimeout(() => {
            function play() {
                var audio = new Audio('https://interactive-examples.mdn.mozilla.net/media/cc0-audio/t-rex-roar.mp3');
                audio.play();
            }
        }, dif);
    }
}