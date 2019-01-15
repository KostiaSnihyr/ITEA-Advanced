// Задание 1:
// Написать скрипт, который по клику на кнопку рандомит цвет и записывает его в localStorage
// После перезагрузки страницы, цвет должен сохранится.


let btn = document.getElementById('random-color');
let bodyColorVal;
let color = localStorage.getItem('bgColor');

document.body.style.backgroundColor = color;


btn.addEventListener('click', function() {
    document.body.style.backgroundColor = rgbColor();
    bodyColorVal = document.body.style.backgroundColor;
    localStorage.setItem('bgColor', bodyColorVal);
});

let rgbColor = function() {
    let num = Math.round(0xffffff * Math.random());
    let r = num >> 16;
    let g = num >> 8 & 255;
    let b = num & 255;
    return 'rgb(' + r + ', ' + g + ', ' + b + ')';
}

