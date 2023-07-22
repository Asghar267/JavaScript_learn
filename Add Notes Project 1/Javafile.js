shownotes();

let addbtn = document.getElementById("addbtn");
addbtn.addEventListener("click", function (e) {
    let addtext = document.getElementById("addtext");
    let addttitle = document.getElementById("addtitle");

    let note = localStorage.getItem("note");
    let title = localStorage.getItem("title");
    
    if (note == null) {
        notesobj = [];
        titleobj = [];
    }
    else {
        notesobj = JSON.parse(note);
        titleobj = JSON.parse(title);
    }

    notesobj.push(addtext.value);
    titleobj.push(addttitle.value)
    localStorage.setItem("note", JSON.stringify(notesobj));
    localStorage.setItem("title",JSON.stringify(titleobj));
    addtext.value = "";
    addttitle.value = "";
    console.log("Title : "+ titleobj+ "  "+ notesobj );
    shownotes();
});

function shownotes() {
    let note = localStorage.getItem("note");
    let title = localStorage.getItem("title");
    if (note == null) {
        notesobj = [];
        titleobj = [];
    }
    else {
        notesobj = JSON.parse(note);
        title = JSON.parse(title);
    }
    let html = "";
    notesobj.forEach(function (element, index) {
        html += `
        <div class=" notecard card my-2 mx-2" style="width: 18rem;">
                <!-- <img src="..." class="card-img-top" alt="..."> -->
                <div class="card-body">
                  <h5 class="card-title">${title[index]}</h5>
                  <p class="card-text" id="textnote">${element}.</p>
                  <button id="${index}" onclick="deletenote(this.id)" class="btn btn-primary">Delete</button>
                </div>
              </div>  
      `
    });

    let notesEle = document.getElementById("note");
    if (notesobj.length != 0) {
        notesEle.innerHTML = html;
    }
    else {
        notesEle.innerHTML = `No notes...`;

    }
}

function deletenote(index) {
    let note = localStorage.getItem("note");
    let title = localStorage.getItem("title");
    console.log("deleting note" + index);
    console.log('before' + notesobj);

    // note = localStorage.getItem("note");
    if (note == null) {
        notesobj = [];
        titleobj = [];
    }
    else {
        notesobj = JSON.parse(note);
        titleobj = JSON.parse(title);

    }
    notesobj.splice(index, 1);
    titleobj.splice(index,1)
    // delete notesobj[index];
    localStorage.setItem("note", JSON.stringify(notesobj));
    localStorage.setItem("title", JSON.stringify(titleobj));
    console.log("now" + notesobj);
    console.log("titleNow "+ titleobj);
    shownotes();
}

let search = document.getElementById('searchbr')
search.addEventListener("input", function () {
    let inputvaluelower = search.value.toLowerCase();
    // console.log("Search txt " + inputvaluelower);
    let noteCards = document.getElementsByClassName("notecard");
    Array.from(noteCards).forEach(function (element) {
        let cardtxt = element.getElementsByTagName("p")[0].innerText.toLowerCase();
        // cardtxt = cardtxt.toLocaleLowerCase();
        console.log("lo " + cardtxt)
        if (cardtxt.includes(inputvaluelower)) {

            element.style.display = "block";
        }
        else {
            element.style.display = "none";
        }
        console.log(cardtxt);
    });
});









