console.log("sets ");

// sets for storing unique values
let myset = new Set()

myset.add("this")
myset.add("is")
myset.add("Python")
myset.add("Python")

console.log("set :", myset)
console.log(myset.has("is"))

myset.delete("this");
console.log(myset);

let arra = Array.from(myset);
console.log(arra);