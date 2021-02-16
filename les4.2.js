/*Продолжить работу с интернет-магазином:
В прошлом домашнем задании вы реализовали корзину на базе массивов. Какими объектами можно заменить их элементы?
Реализуйте такие объекты.
Перенести функционал подсчета корзины на объектно-ориентированную базу.*/

function Products(name, number, price) {
    this.name = name;
    this.number = number;
    this.price = price;
    this.discount_price = price - (price * 0.10)
}

const product1 = new Products('орешки', 127, 170);
const product2 = new Products('личи', 6537, 310);
const product3 = new Products('сырки', 987, 154);
const product4 = new Products('хлеб', 654, 28);
const product5 = new Products('сухофрукты', 234, 456);

//console.log(product1.discount_price)

const basket = {
    basketCost: 0,
    total_cost: function (product) {
        return this.basketCost += product.price;
    }
};

console.log(basket.total_cost(product2));
console.log(basket.total_cost(product4));
console.log(basket.basketCost);
