console.log("Postman");

// utilty function to get element form dom
function getElementformString(string) {
    let div = document.createElement('div');
    div.innerHTML = string;

    return div.firstElementChild;
}

let parameterbox = document.getElementById("parameterBox");
let jsonRequestbox = document.getElementById("jsonRequestbox");
let json = document.getElementById("json");
let custom = document.getElementById("custom");

json.addEventListener("click", function () {
    parameterbox.style.display = "none"
    jsonRequestbox.style.display = "block"

});

custom.addEventListener("click", function () {
    // block is for showing
    parameterbox.style.display = "block"
    jsonRequestbox.style.display = "none"
})


let addparams = document.getElementById("addparams");
let addedparams = 0;
addparams.addEventListener("click", function () {
    let newparams = document.getElementById("newparams");

    let string = ` <div class="form-row">
    <div class="row mb-3">
        <label for="inputEmail3" class="col-sm-2 col-form-label">Parameter ${addedparams + 2}</label>
        <div class="col-md-4">
            <input type="text" class="form-control" id="parameterkey${addedparams + 2}" placeholder="Enter parameter key ${addedparams + 2}">
        </div>
        <div class="col-md-4">
            <input type="text" class="form-control" id="parametervalue${addedparams + 2}"
                placeholder="Enter parameter value ${addedparams + 2}">
        </div>
        <button class="btn btn-primary col-sm-1 removeparams">-</button>
    </div>
</div>`
    // convert element string to DOM node

    let paramElement = getElementformString(string);
    console.log(paramElement);
    newparams.appendChild(paramElement);
    let removeparams = document.getElementsByClassName("removeparams");

    for (item of removeparams) {

        item.addEventListener("click", (e) => {
            e.target.parentElement.remove();

        })
    }
    addedparams++;
});

let submit = document.getElementById("submit");
submit.addEventListener("click", function () {
    document.getElementById("jsonResponseText").value = "please wait....";
    let url = document.getElementById("url").value;
    let responsetype = document.querySelector("input[name='requesttype']:checked").value;
    let contenttype = document.querySelector("input[name='contenttype']:checked").value;
    console.log(responsetype);
    console.log(contenttype);
    if (contenttype == "params") {
        data = {};
        for (i = 0; i < addedparams + 1; i++) {
            if (document.getElementById("parameterkey" + (i + 1)) != undefined) {
                let key = document.getElementById("parameterkey" + (i + 1)).value;
                let value = document.getElementById("parametervalue" + (i + 1)).value;
                data[key] = value;
            };

        }
        data = JSON.stringify(data);
    }
    else {
        data = document.getElementById("jsonRequestText").value;
        console.log("jsontxt", data)
    }
    console.log("url", url);
    console.log("data", data);

    if (responsetype == "GET") {
        fetch(url, {
            method: 'GET'
        })
            .then(response => response.text())
            .then((text) => {
                document.getElementById("jsonResponseText").value = text;

            })
    }

    else {
        fetch(url, {
            method: 'POST',
            body: data,
            headers: {
                'Content-type': 'application/json; charset=UTF-8',
            }
        })
            .then(response => response.text())
            .then((text) => {
                document.getElementById("jsonResponseText").value = text;

            })
    }

    // let xhr = XMLHttpRequest();
    // xhr.open('GET',url,true);
    // xhr.onload = function(){
    //     let text = this.responsetext;
    //     document.getElementById("jsonResponseText").value = text;

    // }
    // xhr.send();
});












