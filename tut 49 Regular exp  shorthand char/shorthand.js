console.log("Regular Expression Match")

let regex = /Asghar/ // Regular expression litrerl in js
let regexf = /Asghar/g //g global,this will check in whole stiring not just first match  , Regular expression litrerl in js
let regexi = /Asghar/i // i case insensitive



// word charactor alphabet or numbers
// \w for one char \w+ for multiple charactors
regex = /\w+har/

// W for non alpha numaric charactors
regex = /are\W/
//matches number
regex = /ab\d555/
// more then 1 number
regex = /ab\d+/

// D for non digit D/D+
regex = /\D+4555/
// \s ignore spaces and match
regex = /\s+a gOo8/
// non white space charactors , true if before char is not white space  
regex = /\Sis good/
regex = /\S+is good/

// assertions 
// this matches when after Asgha is r
regex = /Asgha(?=r)/
// this matches whan after Asgha is nor r
regex = /Asgha(!v)/


console.log(regex);
console.log(regex.source);

// Regular functions
const str = "pythonpython ytu ab4555are#@ a    gOo8 Programmer asghar y*s Asghar is good, Asghar heis good";

// this will return arrray with index num if matched
console.log("regex exec ", regex.exec(str))

if (regex.test(str)) {
    // console.log(regex.exec(str))
    console.log(`String: "${str}" matches expression "${regex.source}"`)
}
else {
    console.log(`String: "${str}" Not Matched with expression "${regex.source}"!`)
}
// console.log("reg ", regex.exec(str))
