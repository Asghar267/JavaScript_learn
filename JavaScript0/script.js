let dem = document.querySelector('button');
dem.addEventListener('click', showmsg);

function showmsg() {
    let num = prompt('Enter Answer');

    if (num == 11) {
        dem.textContent = "5 + 6 = 11  Correct Answer";
    }
    else {
        dem.textContent = "wrong Answer";
    }
}


let obj = {
    name: "Samsung",
    price: 58000,
    discount: 3000,
    itemcode: '52'
}

console.log(obj.name);

function productf(name, price, discount, itemcode) {
    return {
        name: name,
        price: price,
        discount: discount,
        itemcode: itemcode
    }
}

const ball = new productf("football", 5000, 1000, 55);
console.log(ball);

function Product(name, price, discount, itemcode) {
    this.name = name,
        this.price = price,
        this.discount = discount,
        this.itemcode = itemcode,
        this.getdiscount = function(){
            return price * discount/100;
        }
}
const fruit = new Product("apple", 120, 20, "f20");
console.log(fruit);
console.log(fruit.getdiscount());


