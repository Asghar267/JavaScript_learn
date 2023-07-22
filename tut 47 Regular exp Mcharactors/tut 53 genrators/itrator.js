console.log("itrator");


function fruitsitrator(valuse) {
    let nextindex = 0;
    // we will return an Object
    return {
        next: function () {
            if (nextindex < valuse.length) {
                // we will return this value
                return {
                    valuse: valuse[nextindex++],
                    done: false
                }
            }
            else {

                return {
                    done: true
                }
            }
        }
    }

}
const fruitsarray = ["mango", "banana", "apple", "Apricots", "Avocado"]
console.log("furits ", fruitsarray);

// using itrator
const fruit = fruitsitrator(fruitsarray);

console.log(fruit.next().valuse)
console.log(fruit.next().valuse)
console.log(fruit.next().valuse)
console.log(fruit.next().valuse)
console.log(fruit.next().valuse)
console.log(fruit.next().valuse) 