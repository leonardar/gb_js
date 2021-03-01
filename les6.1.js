/*Продолжаем реализовывать модуль корзины:
Добавлять в объект корзины выбранные товары по клику на кнопке «Купить» 
без перезагрузки страницы; Привязать к событию покупки товара пересчет корзины 
и обновление ее внешнего вида.*/

/*let isAdd = false;
button.addEventListener('mousedown', () => isAdd = true)*/


//const eventElement = eventObj.target;
const b = document.querySelector(".basket");

const basket = {
    basketCost: 0,
    basketQuantity: 0,
    arr: [],

    add_product: function (product) {
        this.arr.push(product);
        this.basketQuantity += 1;
        this.basketCost += product.price;
    },

    printer: function () {
        if (this.basketQuantity == 0)
            document.getElementsByClassName("basket")[0].innerHTML = 'Корзина пуста';
        else
            document.getElementsByClassName("basket")[0].innerHTML = `В корзине: ${this.basketQuantity} шт. на сумму ${this.basketCost} руб.`;

    }

};

function Products(id, name, price) {
    this.id = id;
    this.name = name;
    this.price = price;

    const products = document.querySelector('.products');
    let buttonId = "button_" + this.id;
    products.insertAdjacentHTML('afterbegin', `<div class="product">
     <p id=${this.id}>${this.name} - ${this.price} руб.</p> <div class="button">
     <form> <p id="${buttonId}"><input type="button" value="Купить"></p></form>
 </div></div>`);
    document.getElementById(buttonId).addEventListener('click', function (e) {
        id = buttonId.substring('button_'.length);
        e.stopPropagation();
        basket.add_product(arr[id]);
        basket.printer();
    }, true);
}

const names = ['рыба', 'молоко', 'хлеб', 'сырки', 'сухофрукты', 'личи'];
const prices = [100, 120, 320, 300, 180, 980];

counter = 0;

let arr = [];

for (let i = 0; i < names.length && prices.length; i++) {
    arr.push(new Products(i, names[i], prices[i]));
}
basket.printer();
