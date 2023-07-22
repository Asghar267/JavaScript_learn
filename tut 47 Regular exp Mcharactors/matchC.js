console.log("Regular Expression Match")

let regex = /Asghar/ // Regular expression litrerl in js
let regexf = /Asghar/g //g global,this will check in whole stiring not just first match  , Regular expression litrerl in js
let regexi = /Asghar/i // i case insensitive

// meta Charactors symbols
// it checks String staring charactors
regex =/^yo/; 
// this will check string form end
regex =/ar$/;
// this matches any one charactor
regex = /ar./
regex = /a.e/
// matches more then zero charactors
regex = /g*d/;
// optional matches , works in condition if that charctor exsist or not on that place
regex = /yo?u/; // = false
regex = /yt?u/;

// for matching star *
regex = /y\*s/

console.log(regex);
console.log(regex.source);

// Regular functions
let str = "ytu are a good Programmer asghar y*s Asghar is good, Asghar";

 // this will return arrray with index num if matched
console.log("regex exec ", regex.exec(str))

if(regex.test(str)){
    console.log(`String: "${str}" matches expression "${regex.source}"`)
}
else{
    console.log(`String: "${str}" Not Matched with expression "${regex.source}"!`)
}
// console.log("reg ", regex.exec(str))
