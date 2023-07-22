console.log("CV Screener");

let xhr = new XMLHttpRequest();
xhr.open("GET", "https://randomuser.me/api/?results=150", false);
xhr.onload = function () {
    let respon = JSON.parse(this.responseText);
    // console.log(respon.results)
    let girdcarddiv = document.getElementById("gird");
    let html = "";

    respon.results.forEach(element => {
        console.log("element ", element)
        let name = element.name["title"] + " " + element.name["first"] + " " + element.name["last"]
        // console.log("element name :" + name)
        let getemail = element.email
        // console.log("email ", getemail)
        let getcity = element.location["city"];
        // console.log("element city :" + getcity)
        let getage = element.dob["age"]
        // console.log("age ",getage)
        let getphone = element.phone;
        let getimage = element.picture["large"]

        html += ` <div class="row g-2 mb-3text-white bg-secondary">
        <div class="col-md-4  ">
          <img src="${getimage}" class="img-fluid rounded-start"  style="height: 15rem;" alt="Not found!">
        </div>
        <div class="col-md-8">
        <div class="card-header text-dark bg-light"><b>${name}</b></div>

          <div class="card-body">
            <ul class="list-group list-group-flush">
              <li class="list-group-item"><b>Age: </b>${getage}</li>
              <li class="list-group-item"><b>City: </b>${getcity}</li>
              <li class="list-group-item"><b>Phone: </b>${getphone}</li>
              <li class="list-group-item"><b>email: </b>${getemail}</li>
            </ul>
            <!-- <p class="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
          <p class="card-text"><small class="text-muted">Last updated 3 mins ago</small></p> -->
          </div>
        </div>
      </div> <br>
      <br><br>`
    });
    // <h5 class="card-title"><b>Name</b>${name}</h5>

    girdcarddiv.innerHTML = html;
};
xhr.send();
console.log("done")

