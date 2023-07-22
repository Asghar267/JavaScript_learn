console.log("Genrator")

function* numberGen(){
    let i =0;
    // yield 1;
    // yield 2;
    // yield 3;
    // yield 4;
    while(true){
        yield i++;
        // casting in String
        // yield (i++).toString();
    }
}

let num = numberGen()
console.log(num.next())
console.log(num.next())
console.log(num.next())