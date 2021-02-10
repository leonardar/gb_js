/*Реализовать функцию с тремя параметрами: function mathOperation(arg1, arg2, operation), 
где arg1, arg2 — значения аргументов, operation — строка с названием операции. В зависимости 
от переданного значения выполнить одну из арифметических операций (использовать функции из пункта 5) 
и вернуть полученное значение (применить switch). */

function mathOperation(arg1, arg2, operation) {
    switch (operation) {
        case 'sum':
            return arg1 + arg2;
        case 'mul':
            return arg1 * arg2;
        case 'sub':
            return arg1 - arg2;
        case 'div':
            return arg1 / arg2;
        default:
            return 'unknown operation!'
    }
}

console.log(mathOperation(5, 5, 'mul'))
console.log(mathOperation(5, 5, 'sum'))
console.log(mathOperation(5, 5, 'sub'))
console.log(mathOperation(5, 5, 'div'))
