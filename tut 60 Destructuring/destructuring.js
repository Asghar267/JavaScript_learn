console.log("Destructuring")

let a, b;
[a, b] = [54, 50]

console.log(a, b);

[a, b, c, ...d] = [33, 44, 55, 66, 77, 88];


// let a, b;
[a, b] = [34, 564];
// console.log(a, b);

[a, b, c, ...d] = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13];

console.log(a, b, c, d);

({ a, b, c, ...d } = { a: 12, b: 13, c: 14, d: 15, e: 16, c: 17 });

console.log(a, b, c, d);

let f = ['ab', 'cd', 'ef'];
[a, b, c] = f;
console.log(a, b, c);


let samsung = {
    model: "A52",
    price: "55000",
    year: "2021",
    memory: "128 gb",
    start :function () {
        console.log("object Destructuring");
    }
};

let {model, price, year, memory,start}= samsung;
console.log(model, price, year, memory);
start();

