// created element


let divelm = document.createElement("div");

let text;
let txtval = localStorage.getItem("text");
if (txtval == null) {
    text = document.createTextNode("This is my editable text nOde click it to edit");
}
else{
    text = document.createTextNode(txtval);
}
divelm.appendChild(text);

// element setting id class css
divelm.setAttribute('id', 'elem');
divelm.setAttribute('class', 'elem');
divelm.setAttribute('style', 'border:2px solid black; width: 154px; margin: 34px; padding: 23px;');

let container = document.querySelector('.container');
let first = document.getElementById('first');

container.insertBefore(divelm, first);
console.log(divelm, container, first);

// adding event listener to the divelm
divelm.addEventListener("click", function () {
    let notextaria = document.getElementsByClassName('textarea').length;
    if (notextaria == 0) {
        let html = elem.innerHTML;
        // aria-label="With textarea"
        divelm.innerHTML = `<textarea class="form-control textarea" id="textarea" rows="3"> ${html} </textarea>`;
    }

    // setting blur click event
    let textarea = document.getElementById("textarea");
    textarea.addEventListener('blur', function () {
        elem.innerHTML = textarea.value;
        let t = localStorage.setItem("text",textarea.value );
    });

});
// let doc = document.getElementById('edit');
//  doc.addEventListener("click",function(e){
//     console.log("clicked");
//     let el = document.createElement("textarea");
//         doc.replaceWith(el);
//         let eltxt= doc.getElementsByTagName("textarea");
//         doc.addEventListener("onmouseout",function(f){
//             console.log(eltxt.item)
//         });
// });
// console.log(doc);
