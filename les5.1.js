/*Создать функцию, генерирующую шахматную доску. Можно использовать любые html-теги.
 Доска должна быть верно разлинована на черные и белые ячейки. Строки должны нумероваться числами 
 от 1 до 8, столбцы — латинскими буквами A, B, C, D, E, F, G, H.*/

const chess = document.querySelector('.chess');

let characters = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H'];

let row = '<div class="row">';
row += '<div class="column"></div>';
for (let j = 1; j <= 8; j++) {
    row += '<div class="column char">' + characters[j - 1] + '</div>';
}
row += '<div class="column"></div>';
row += '</div>';
chess.innerHTML += row;

for (let i = 8; i >= 1; i--) {
    let row = '<div class="row">';
    row += '<div class="column char">' + i + '</div>';
    for (let j = 1; j <= 8; j++) {
        if ((i + j) % 2 == 0) {
            row += '<div class="black column"></div>';
        }
        else {
            row += '<div class="white column"></div>';
        }
    }
    row += '<div class="column char">' + i + '</div>';
    row += '</div>';
    chess.innerHTML += row;
}

row = '<div class="row">';
row += '<div class="column"></div>';
for (let j = 1; j <= 8; j++) {
    row += '<div class="column char">' + characters[j - 1] + '</div>';
}
row += '<div class="column"></div>';
row += '</div>';
chess.innerHTML += row;
