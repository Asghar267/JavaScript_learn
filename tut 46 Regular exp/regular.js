console.log("Regular Expression")

let reg = /Asghar/ // Regular expression litrerl in js
let regf = /Asghar/g //g global,this will check in whole stiring not just first match  , Regular expression litrerl in js
let regi = /Asghar/i // i case insensitive

console.log(reg);
console.log(reg.source);

// Regular functions
let str = "you are a good Programmer asghar yes Asghar is good, Asghar";

// this will return arrray with index num if matched
// console.log(reg.exec(str))
console.log("reg ", reg.exec(str))
console.log("reg ", reg.exec(str))

// this works only when expression matched other wise shows error
if (reg.exec(str)) {
    console.log("reg input ", reg.exec(str).input)
    console.log("reg index", reg.exec(str).index)
}

console.log("regf ", regf.exec(str))
console.log("regf ", regf.exec(str))
console.log("regf ", regf.exec(str))

console.log("regi ", regi.exec(str))
console.log("regi ", regi.exec(str))

// reruns ture false
console.log("test ", reg.test(str))

// it will return array of results or null
console.log("match ", str.match(reg))
console.log("match f", str.match(regf))
console.log("match i", str.match(regi))

// it will retutn first match index else -1
console.log("search ", str.search(reg))

// replace it returns new replaced string with all replacments
console.log( "reg ", str.replace(reg,"Asghar Abbasi"))
console.log("reg global",str.replace(regf,"Asghar Abbasi"))



