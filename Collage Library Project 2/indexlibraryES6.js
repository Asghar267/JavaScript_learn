class Book {
    constructor(name, author, type) {
        this.name = name;
        this.author = author;
        this.type = type;
    }
}

class Display {
    static b = [];
    validate(book) {
        console.log("vvv", book.name)
        if (book.name.length < 2 || book.author.length < 2 || book.type.length < 2) {
            return false;
        }
        else {
            return true;
        }
    }

    showalert(type, msg) {
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

    add(book) {
        let getbook = localStorage.getItem("lstored");

        let librarystore = {
            name: book.name,
            author: book.author,
            type: book.type
        }

        let booksobj = [];
        if (getbook == null) {
            booksobj = [];
         }
        else {
            booksobj = JSON.parse(getbook);
         }

        booksobj.push(librarystore);

        // window.alert(librarystore.bookname + " " + librarystore.author + "b " + b);
        localStorage.setItem("lstored", JSON.stringify(booksobj));
    }

    showBooks() {
        let getbook = localStorage.getItem("lstored");
        let table = document.getElementById("tablebody");
        let tabledata = "";

        let bookinfo = JSON.parse(getbook);
        if (bookinfo == null) {
            tabledata += `<tr>
        <th scope="row"></th>
        <td></td>
        <td></td>
        <td></td>
        </tr>`
        }

        else {
            bookinfo.forEach(function (element, index) {
                tabledata += `<tr>
        <th scope="row">${index+1}</th>
        <td>${element.name}</td>
        <td>${element.author}</td>
        <td>${element.type}</td>
        </tr>`
            });
        }

        table.innerHTML = tabledata;
    }

    clear() {
        let libraryform = document.getElementById("libraryform");
        libraryform.reset();
    }
}

 
let libraryform = document.getElementById("libraryform");
libraryform.addEventListener("submit", formsubmit);
let display = new Display();
display.showBooks();

function formsubmit(e) {
    let name = document.getElementById("bname").value;
    let author = document.getElementById("bauthor").value;
     
    console.log(name);
    localStorage.setItem("name", name);
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

    let book = new Book(name, author, type);
     
    // console.log("book au ", book.author);

    if (display.validate(book)) {
        display.add(book);
        display.showBooks();

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