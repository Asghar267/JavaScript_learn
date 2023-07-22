console.log("Library Project")

function Book(name, author, type) {
    this.bookname = name;
    this.author = author;
    this.type = type;
}

function Display() {
}
// add display prototype
Display.prototype.validate = function (book) {
    if (book.bookname.length < 2 || book.author.length < 2 || book.type.length < 2) {
        return false;
    }
    else {
        return true;
    }
}

Display.prototype.showalert = function (type, msg) {
    let message = document.getElementById("message");
    message.innerHTML = `
    <div
     class="alert alert-${type} alert-dismissible fade show" role="alert">
    <strong>Message:</strong> ${msg}.
    <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
    </div> `;
    setTimeout(function () {
        message.innerHTML = "";
    }, 2000);
}
b = [];

Display.prototype.add = function (book) {
    let librarystore = {
        bookname: book.bookname,
        author: book.author,
        type: book.type
    }
    b.push(librarystore);
    // window.alert(librarystore.bookname + " " + librarystore.author + "b " + b);
    localStorage.setItem("lstored", JSON.stringify(b));
 }

Display.prototype.showBooks = function () {

let getbook = localStorage.getItem("lstored");
let table = document.getElementById("tablebody");
let tabledata = "";

let bookinfo = JSON.parse(getbook);

bookinfo.forEach(function (element, index) {
    tabledata += `<tr>
    <th scope="row">1</th>
    <td>${element.bookname}</td>
    <td>${element.author}</td>
    <td>${element.type}</td>
    </tr>`

});
    table.innerHTML = tabledata;
}

Display.prototype.clear = function () {
    let libraryform = document.getElementById("libraryform");
    libraryform.reset();
}

// let addbtn = document.getElementById("addbtn");
// let bookname = document.getElementById("bname");

// let bauthor = document.getElementById("bauthor");
// let btype = document.getElementById("btype")

// console.log(bookname);
let libraryform = document.getElementById("libraryform");
libraryform.addEventListener("submit", formsubmit);
let display = new Display();
display.showBooks();
function formsubmit(e) {
    let bookname = document.getElementById("bname").value;
    let author = document.getElementById("bauthor").value;
    // let btype = document.getElementById("btype").value;
    // let tsttype = document.getElementsByName("type").value;
    // console.log('tst', tsttype);
    console.log(bookname);
    localStorage.setItem("name", bookname);
    let fiction = document.getElementById("Fiction");
    let cooking = document.getElementById("Cooking");
    let programming = document.getElementById("Programming");
    let type;
    if (fiction.checked) {
        type = fiction.value;
    }
    else if (cooking.checked) {
        type = cooking.value;
    }
    else if (programming.checked) {
        type = programming.value;
    }

    let book = new Book(bookname, author, type);
    console.log(book);

    if (display.validate(book)) {
        display.add(book);
        display.showalert("success", "Book added successfuly");
        e.preventDefault();
        display.clear();
    }
    else {
        display.showalert("danger", "Enter Proper Information");
        e.preventDefault();
    }
    e.preventDefault();
}