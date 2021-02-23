/*Написать функцию, преобразующую число в объект. Передавая на вход число от 0 до 999, 
надо получить на выходе объект, в котором в соответствующих свойствах описаны единицы, 
десятки и сотни. Например, для числа 245 надо получить следующий объект: {‘единицы’: 5,
‘десятки’: 4, ‘сотни’: 2}. Если число превышает 999, необходимо выдать соответствующее 
сообщение с помощью console.log и вернуть пустой объект.*/

function Objmod(num) {
    if (num > 999) {
        console.log('Превышено допустимое число')
        return {}
    }
    else {
        unit = num % 10;
        tenner = ((num % 100) - unit) / 10;
        hundred = (num - (num % 100)) / 100;
        res = { единицы: unit, десятки: tenner, сотни: hundred };
        return res
    }
}

//console.log(Objmod(1000))
console.log(Objmod(76))
