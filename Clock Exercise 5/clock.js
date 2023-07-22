console.log("live Clock");
let time = document.getElementById("time");

function currentTime() {
    let date = new Date();
    let hh = date.getHours();
    let mm = date.getMinutes();
    let ss = date.getSeconds();
    let session = "AM";

    // console.log(hh+":"+mm+":"+ss)
// when time 12 colck shows 0 to manage 0 we added 12
    if (hh == 0) {
        hh = 12;
        console.log("if :"+hh+":"+mm+":"+ss)
    }
    if (hh > 12) {
        hh = hh - 12;
        session = "PM";
        console.log("else :"+hh+":"+mm+":"+ss)
    }

    //ternary operator
    // hh = (hh < 10) ? "0" + hh : hh;

    // triditionl
    // if (hh < 10) {
    //     hh = "0" + hh
    // } else {
    //     hh
    // }

    // mm = (mm < 10) ? "0" + mm : mm;
    // ss = (ss < 10) ? "0" + ss : ss;

    let time = hh + ":" + mm + ":" + ss + " " + session;
    document.getElementById("time").innerText = time;
    let t = setTimeout(function () {
        currentTime()
    }, 1000);
}

currentTime();
// for(true){
//     updatetime();
//     // time.innerText =d;
//     console.log( updatetime());

// }
