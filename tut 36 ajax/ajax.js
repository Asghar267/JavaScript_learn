console.log("Ajax tutorial");
let fetchbtn = document.getElementById("fetchbtn");
fetchbtn.addEventListener("click", btnclickHandler());

function btnclickHandler() {
    console.log("btn fetch btn clicked");
    // Instantiate an xhr object
    const xhr = new XMLHttpRequest();

    // open the object
    // GET Request 
    // xhr.open("GET", "https://jsonplaceholder.typicode.com/todos/1",false)
    xhr.open("GET", "ajax.txt", true);

    // POST request
    // xhr.open("POST", "http://dummy.restapiexample.com/api/v1/create", true);
    xhr.setRequestHeader("content-type", "application/json");

    // what to do on Progress(optional)
    xhr.onprogress = function () {
        console.log("on progress");
    }

    // alternative of onload
    xhr.onreadystatechange = function () {
        console.log("onreadystatechange " + this.readyState);
    }

    // what to do on progress ready
    xhr.onload = function () {
        // ajax.txt file not found 
        if (this.status == 200) {
            console.log(this.responseText);

        }
        else {
            console.error("some thing wrong..");
        }
    }

    // send request post
    // params = `	{"name":"test2","salary":"123","age":"23"}`;
    // xhr.send(params);

    // send request get
    xhr.send();
    console.log("We are done");
}


let popbtn = document.getElementById("popbtn");
// popbtn.addEventListener("click", popheandler);
// console.log(popbtn);
let n = 0;
popbtn.addEventListener("click", function popheandler() {
    n = n + 1

    popbtn.innerText = "Populate :" + n;
    console.log(popbtn);
    console.log("btn popheandler btn clicked");
    // Instantiate an xhr object
    const xhr = new XMLHttpRequest();

    // open the object
    // GET Request 
    xhr.open("GET", "http://dummy.restapiexample.com/api/v1/employees", false)
    // xhr.open("GET", "ajax.txt", true);
    xhr.setRequestHeader("content-type", "application/json");


    // what to do on progress ready
    xhr.onload = function () {
        console.log(popbtn);

        // ajax.txt file not found 
        if (this.status == 200) {
            console.log(this.responseText);
            let obj = JSON.parse(this.responseText);
            console.log(obj)
            let list = document.getElementById("list");
            let dtable = document.getElementById("dtable");
            let str = ` <h2>Employee list</h2>
            <table class="table">
                <thead>
                    <tr>
                        <th scope="col">#</th>
                        <th scope="col">Name</th>
                        <th scope="col">Salary</th>
                        <th scope="col">Age</th>
                    </tr>
                </thead>
                <tbody id="tbody">`
            let str1 = "";
            let dat = obj.data;
            for (key in dat) {
                str1 += `
                <tr>
                <th scope="row">${dat[key].id}</th>
                <td>${dat[key].employee_name}</td>
                <td>${dat[key].employee_salary}</td>
                <td>${dat[key].employee_age}</td>
              </tr> `;
            }
            let str2 = ` </tbody> 
            </table>`
            dtable.innerHTML = str + str1 + str2;
        }
        else {
            console.error("some thing wrong..");
        }
    }

    // send request post
    params = `	{"name":"test2","salary":"123","age":"23"}`;
    xhr.send(params);

    // send request get
    // xhr.send();
    console.log("We are done pop heandler");
});


// for food items Vegetables and Fruits
class Items {
    showitems(item, itemName) {
        console.log("btn clicked " + item);

        // console.log("item :" + item);

        const xhr = new XMLHttpRequest();
        xhr.open("GET", item, true);
        xhr.setRequestHeader("content-type", "applicatio/json");

        xhr.onload = function () {
            if (this.status == 200) {
                // console.log(this.responseText);
                let rtxttemp = this.responseText;
                let rtxt = JSON.parse(rtxttemp);
                let dtable = document.getElementById("dtable");

                let str = `
                 <h2>${rtxt.description}</h2>
            <table class="table">
                <thead>
                    <tr>
                        <th scope="col">#</th>
                        <th scope="col">Name</th>
                        <th scope="col">Salary</th>
                        <th scope="col">Age</th>
                    </tr>
                </thead>
                <tbody id="tbody">`

                let str1 = "";
                let v;
                if (itemName == "vegetables") {
                    v = rtxt.vegetables;
                }
                else if (itemName == "fruits") {
                    v = rtxt.fruits;
                }

                v.forEach(function (element, index) {
                    str1 += `
                    <tbody id="tbody">
                         <tr>
                        <th scope="row">${index + 1}</th>
                        <td>${element}</td>
                        <td>Otto</td>
                        <td>@mdo</td>
                      </tr> `
                });

                let str2 = ` </tbody> 
            </table>`
                dtable.innerHTML = str + str1 + str2;

            }
            else {
                console.log(this.status)
                console.log("some thing worng")
            }
        }
        xhr.send();
    }
}

let fruitsbtn = document.getElementById("fruitsbtn");
fruitsbtn.addEventListener("click", function () {
    let fruit = new Items();
    fruit.showitems("fruits.json", "fruits");
});

let vegitablesbtn = document.getElementById("vegitablesbtn");
vegitablesbtn.addEventListener("click", function () {
    let vegitable = new Items();
    vegitable.showitems("vegitables.json", "vegetables");
});



