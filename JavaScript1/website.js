let elem = document.createElement('li');
elem.className = "childul";
elem.id = "childid";
elem.setAttribute("title", "this is title");
elem.innerText = "this  is created ";
let ul = document.querySelector("ul.this");
ul.appendChild(elem)
// console.log(ul);
// console.log(elem.outerHTML);

let elem2 = document.createElement('h3');
elem2.id = "elem2";
elem.className = "elemC";
let tnode = document.createTextNode( "this is created element 2 ");
elem2.appendChild(tnode);

console.log(elem2)

elem.replaceWith(elem2); 

let elemTask = document.createElement("a");
elemTask.className = "chilul";
elemTask.innerText = "Go to CodeWithHarry"
elemTask.setAttribute("href","https:///codewithharry.com");
 ul.appendChild(elemTask)
 console.log(elemTask);