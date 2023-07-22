console.log("News api ");
let apikey = "74a7b9a534e84fd2bbbd47a9955e8285"
let xhr = new XMLHttpRequest();
xhr.open("GET", "https://newsapi.org/v2/top-headlines?country=in&apiKey=74a7b9a534e84fd2bbbd47a9955e8285", true);
// xhr.setRequestHeader("content-type", "application/json");

xhr.onload = function () {
    let news = JSON.parse(this.responseText);
    let arrt = news.articles;

    // console.log("arrt " + arrt);

    let newsScours = document.getElementById("newsScours");
    // console.log(newsScours.innerText)
    // let newsTitle = document.getElementById("newsTitle");
    // // let newsDescription = document.getElementById("newsDescription");
    let newsDiv = document.getElementById("newsDiv");
    if (this.status == 200) {
        // let anews = news.articles

        let str;
        for (key in arrt) {
            if(arrt[key] == undefined){
                console.log("undefiend")
            }
            console.log("arrt key "+ arrt[key].author);

            let s = arrt[key].source;
            // console.log("sss " + s.name)

            str += 
            ` <div class="my-3 mx-5" style="overflow: scroll;">
            <div class="card">
                <div class="card-header" id="newsScours">
                    ${s.name}
                </div>
                <div class="card-body">
                    <h5 class="card-title" id="newsTitle">${arrt[key].title}</h5>
                    <p class="card-text" id="newsDescription">${arrt[key].description}</p>
                    <b>author: ${arrt[key].author}</b>
                </div>
            </div>
        </div> `
        }
        newsDiv.innerHTML = str;
    }
}
xhr.send();
