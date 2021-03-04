/*Реализовать страницу корзины:
Добавить возможность не только смотреть состав корзины, но и редактировать его, обновляя общую 
стоимость или выводя сообщение «Корзина пуста».
На странице корзины:
Сделать отдельные блоки «Состав корзины», «Адрес доставки», «Комментарий»;
Сделать эти поля сворачиваемыми;
Заполнять поля по очереди, то есть давать посмотреть состав корзины, внизу 
которого есть кнопка «Далее». Если нажать ее, сворачивается «Состав корзины» и открывается 
«Адрес доставки» и так далее.*/

const b = document.querySelector(".basket");


const basket = {
    basketCost: 0,
    basketQuantity: 0,
    arr: [],

    add_product: function (product) {
        const idx = this.arr.indexOf(product);
        if (idx != -1) {
            this.arr[idx].quantity += 1;
        } else {
            this.arr.push(product);
        }
        this.basketQuantity += 1;
        this.basketCost += product.price;
    },
    del_product: function (id) {

        this.basketQuantity -= 1;
        this.basketCost -= this.arr[id].price;
        this.arr.splice(id, 1);
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
    this.quantity = 1;
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
        basket.add_product(productsArr[id]);
        basket.printer();
    }, true);
}

const names = ['рыба', 'молоко', 'хлеб', 'сырки', 'сухофрукты', 'личи', 'бананы', 'горох', 'помидоры', 'стейки'];
const prices = [100, 120, 320, 300, 180, 980, 788, 54, 876, 650];

counter = 0;

let productsArr = [];

for (let i = 0; i < names.length && prices.length; i++) {
    productsArr.push(new Products(i, names[i], prices[i]));
}
//-----

const buton_basket = document.querySelector(".buton_basket");
const modal = document.querySelector(".modal");
const screen = document.querySelector(".screen");


screen.addEventListener('click', function (e) {
    modal.style.display = "none";
    screen.style.display = "none";
}
)

function drawHtml_products() {
    const section1 = modal.querySelector(".section1");
    const table = section1.querySelector(".table");
    section1.removeChild(table);
    section1.insertAdjacentHTML("beforeend", `<table class="table" cellpadding="4" cellspacing="1">
    <tr>
        <th>Номер</th>
        <th>Наименование</th>
        <th>Цена</th>
        <th>Количество</th>
        <th>Общая стоимость</th>
    </tr>
</table>`)

    basket.arr.forEach(function (prod, i) {
        drawHtml_product(prod, i);
    });
}

function drawHtml_product(prod, i) {
    let deleteId = "delete_" + i;
    let html = `<div id = "${i}" class="list">
        
   <tr><td class="td">${i + 1}.</td><td class="td">${prod.name}</td><td class="td">${prod.price} руб.</td>
   <td class="td">${prod.quantity} шт.</td><td class="td">${prod.quantity * prod.price} руб.</td><td class="td">
   <div id ="${deleteId}" class="delete"><form>
   <p><input type="button" value=" Удалить "></p>
</form></div></td></tr>
        
    </div>`;
    const new_table = document.querySelector(".table");
    new_table.insertAdjacentHTML("beforeend", html);

    document.getElementById(deleteId).addEventListener('click', function (e) {
        e.stopPropagation();
        id = deleteId.substring('delete_'.length);
        basket.del_product(id);
        drawHtml_products();
    }, true);
}

buton_basket.addEventListener('click', function (e) {
    e.stopPropagation();
    modal.style.display = "block";
    screen.style.display = "block";
    drawHtml_products();
});

basket.printer();

//<tr><td>${i + 1}.</td><td>${prod.name}</td><td>${prod.price} руб.</td><td>${prod.quantity} шт.</td><td>${prod.quantity * prod.price} руб.</td></tr>
