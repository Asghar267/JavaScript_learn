console.log("Project 4 Carbooking");

const uname = document.getElementById("uname")
let number = document.getElementById("number")
let email = document.getElementById("email")
let success = document.getElementById("success")
let submit = document.getElementById("submit")


console.log(uname, number, email);
uname.addEventListener("blur", nameValid);
function nameValid() {
    // console.log("bulr name ",  nname.value)
    let regex = /^[a-zA-Z]([0,9a-zA-Z]){2,15}$/;
    let str = uname.value
    if (regex.test(str)) {
        console.log("done " + str);
        uname.classList.remove("is-invalid")
        return true;
    }
    else {
        console.log("no match");
        uname.classList = "form-control is-invalid";
        return false;

    }
}


console.log(uname, number, email);
number.addEventListener("blur", numberValid)

function numberValid() {
    console.log("bulr number ", number.value)
    let regex = /^([0-9]){11}$/;
    let str = number.value
    if (regex.test(str)) {
        console.log("done " + str);
        number.classList.remove("is-invalid")
        return true;
    }
    else {
        console.log("no match");
        number.classList = "form-control is-invalid";
        return false;
    }
}


console.log(uname, number, email);
email.addEventListener("blur", emailValid)
function emailValid() {
    console.log("bulr email ", email.value)
    let regex = /^([_\-\.0-9a-zA-Z]+)@([_\-\.0-9a-zA-Z]+)\.([a-zA-Z]){2,7}$/;
    let str = email.value
    if (regex.test(str)) {
        console.log("done " + str);
        email.classList.remove("is-invalid");
        return true;
    }
    else {
        console.log("no match");
        email.classList = "form-control is-invalid";
        return false;
    }
}

submit.addEventListener("click", function (e) {
     if (emailValid() && numberValid() && nameValid()) {
        console.log("success ");
        success.classList = "show alert-success alert alert-dismissible fade";
        // success.classList.remove("show alert-warning");
        // let username = 
        // let usernumber = number.value;
        // let useremail = email.value;
        let userobj = localStorage.getItem("user");

        let userdata = {
            username: uname.value,
            usernumber: number.value,
            useremail: email.value
        }

        let booksobj = [];
        if (userobj == null) {
            booksobj = [];
        }
        else {
            booksobj = JSON.parse( userobj);
        }

        booksobj.push(userdata);
        localStorage.setItem("user", JSON.stringify(booksobj))

        success.innerHTML = ` <strong>Success!</strong> Your traver request has been submited. 
        <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
        `
    }
    else {
        success.innerHTML = ` <strong>Wrong!</strong> Please complete validatons
        <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close">
        </button>
        `
        success.classList = "show alert-warning alert alert-dismissible fade";
        // success.classList.remove("show alert-success");

        console.log("wrong");
    }
    e.preventDefault();
})