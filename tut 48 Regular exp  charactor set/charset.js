console.log("Regular Expression Match")

let regex = /Asghar/ // Regular expression litrerl in js
let regexf = /Asghar/g //g global,this will check in whole stiring not just first match  , Regular expression litrerl in js
let regexi = /Asghar/i // i case insensitive


// true if any charactor match from [a-z]
regex = /Pro[a-z]rammer/
// true if charactor dose not match / not from [^a-f]
regex = /Pro[^a-f]rammer/
// matches small and capital and numbers
regex = /g[a-zA-Z]o[0-9]/

// quantifiers
// this matches charactors countity 2 oo in good/ {0,2} range 
regex = /go{0,2}d/

// groupings parantheses used in groupings
regex = /(python){2}/


console.log(regex);
console.log(regex.source);

// Regular functions
const str = "pythonpython ytu are a gOo8 Programmer asghar y*s Asghar is good, Asghar";

// this will return arrray with index num if matched
console.log("regex exec ", regex.exec(str))

if (regex.test(str)) {
    console.log(`String: "${str}" matches expression "${regex.source}"`)
}
else {
    console.log(`String: "${str}" Not Matched with expression "${regex.source}"!`)
}
// console.log("reg ", regex.exec(str))
