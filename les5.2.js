/*Сделать генерацию корзины динамической: верстка корзины не должна находиться в HTML-структуре. 
Там должен быть только div, в который будет вставляться корзина, сгенерированная на базе JS:
Пустая корзина должна выводить строку «Корзина пуста»;
Наполненная должна выводить «В корзине: n товаров на сумму m рублей».*/

const busket = document.querySelector('.busket');


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
    basketQuantity: 0,

    total_cost: function (product) {
        this.basketQuantity += 1
        return `Общая сумма товаров на ${this.basketCost += product.price} руб.`;
    },

    printer: function () {
        if (this.basketQuantity == 0)
            return 'Корзина пуста'
        return `В корзине: ${this.basketQuantity} шт. на сумму ${this.basketCost} руб.`
    }
};

busket.innerHTML += '</p>' + basket.printer() + '</p>';
busket.innerHTML += '<p>' + basket.total_cost(product2) + '</p>';
busket.innerHTML += '<p>' + basket.total_cost(product4) + '</p>';
busket.innerHTML += '<p>' + basket.printer() + '</p>';

