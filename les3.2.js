/* С этого урока начинаем работать с функционалом интернет-магазина. 
Предположим, есть сущность корзины. Нужно реализовать функционал подсчета стоимости 
корзины в зависимости от находящихся в ней товаров. 
Товары в корзине хранятся в массиве. Задачи:
Организовать такой массив для хранения товаров в корзине;
Организовать функцию countBasketPrice, которая будет считать стоимость корзины. */

const products = [654, 769, 90, 45678, 876]

//первая реализация

function countBasketPrice(products) {
    counter = 0
    for (let prod in products) {
        counter += products[prod]
    }
    return counter
}
console.log(countBasketPrice(products))

//вторая реализация

const reducer = (accumulator, currentValue) => accumulator + currentValue;

console.log(products.reduce(reducer));

//третья реализация

const reducer1 = products.reduce((total, amount) => total + amount);

console.log(reducer1);
