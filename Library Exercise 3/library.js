class Library {
    constructor(book = []) {
        this.books = book;
    }

    getbooklist() {
        let bl = document.getElementsByClassName("blist");
        let ulist = document.getElementById("list");
        console.log("blist ", bl);
        let html = "";
        this.books.forEach(function (element) {
            html += `<li class="list-group-item"><h3>${element}</h3></li>`
        });
        console.log("html ", html);
        console.log("ul ", ulist)
        ulist.innerHTML = html;
        return this.books;
    }

    issuebook(bname, uname) {
        let ind = this.books.indexOf(bname);
        this.books.splice(ind, 1);
        // issuedbook.push(bname);
        // console.log("issued book "+ issuedbook)

    }
    returnbook(bname) {
        this.books.push(bname);

    }
}

let booklist = ['python', 'java', 'c', 'rust', 'dart']
console.log(booklist);

lib1 = new Library(booklist);

// console.log(lib1.getbooklist());

// lib1.returnbook("Js");
console.log(lib1.getbooklist());
// lib1.issuebook('python', "ali");
// lib1.issuebook('js', "ali");
// lib1.issuebook('python3', "ali");
// console.log(lib1.getbooklist());
// lib1.returnbook("Js");
// console.log(lib1.getbooklist());
// lib1.issuebook('rust', "ali");
// console.log(lib1.getbooklist());
let issuedbook = [];
let getbook = document.getElementById("gtbook");
let booktxt = document.getElementById("booktxt");
getbook.addEventListener('click', function (e) {
    let bookname = booktxt.value;
    lib1.issuebook(bookname);
    console.log(bookname);
    if (bookname != "") {
        window.alert("You have Issued Book :" + bookname);
        booktxt.value = "";
        issuedbook.push(bookname);
        lib1.getbooklist();
        console.log("issued book " + issuedbook);
    }
});

let returnbook = document.getElementById("rtnbook");
let rtnbookname = document.getElementById("returnbooktxt");
returnbook.addEventListener("click", function (e) {

    let bookname = rtnbookname.value;
    if (bookname != "" && issuedbook.includes(bookname)) {

        window.alert("You have Returned Book :" + bookname);
        let ind = issuedbook.indexOf(bookname)

        issuedbook.splice(ind, 1);
        lib1.returnbook(bookname);

        rtnbookname.value = "";
        console.log("book is founded " + issuedbook.includes(bookname));
        console.log("issued book " + issuedbook);
        lib1.getbooklist();

    }
    else {
        window.alert("This book not has been Issued from Us : " + bookname);
    }
});