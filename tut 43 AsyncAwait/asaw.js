console.log("Async Await ");


// async retuns promise
async function pro(){
    console.log("Inside calling 0");
    const  respnose = await(fetch("https://api.github.com/users"));
    console.log("before response 1");
    const users = await respnose.json();
    console.log("Users resolved 2")
    return users;
}
console.log("Before calling 3");
let a = pro();
console.log("after calling 4")
console.log(a);
a.then(data => console.log(data))
console.log("end 5")