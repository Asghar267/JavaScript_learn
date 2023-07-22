console.log("Mapping");

const mymap = new Map();
const key1 = 'mystr', key2 = {}, key3 = function(){};

mymap.set(key1,"this is String");
mymap.set(key2,"this is object");
mymap.set(key3, "this is function");
console.log("mymap",mymap)

// gatting values form mymap
console.log(mymap.get(key1));

console.log("map size ",mymap.size)

for(let [key , value] of mymap){
    console.log("key value", key, value)
}

for(let key of mymap.keys()){
    console.log("key", key)
}

for(let value of mymap.values()){
    console.log("value", value)
}

mymap.forEach((key, value)=>{
    console.log("key fech", key)
    console.log("value frch", value)
})

// converting to array
let arra = Array.from(mymap)

console.log(arra)