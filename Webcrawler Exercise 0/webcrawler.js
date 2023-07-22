let str = "with";
let lin = document.links;
let hr
Array.from(lin).forEach(function(element){
    hr = element.href;
    if (hr.includes(str)){
        console.log(hr);
    }
// console.log(element.href);s

});
// console.log("a;jgd;oij");
