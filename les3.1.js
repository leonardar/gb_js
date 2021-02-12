//1. С помощью цикла while вывести все простые числа в промежутке от 0 до 100.


let i = 1;
let n = 100;

while (i < n) {
    let isSimple = true;
    for (let j = 2; j < i; j++) {
        if (i % j == 0) {
            isSimple = false;
            break;
        }
    }
    if (isSimple) {
        console.log(i);
    }
    i++;
}
