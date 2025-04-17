let box = document.createElement('div');
let name = prompt("Введите своё имя");
let surname = prompt("Введите свое фамилия")
let age = prompt("Введите свой возраст")
let bigorsmall = prompt("Каким шрифтом написать ваше имя?\n1) БОЛЬШИМ\n2) маленьким");

if (bigorsmall === '1') {
    box.innerText = `Имя: ${name.toUpperCase()}\n Фамилия: ${surname.toUpperCase()}\n Возраст: ${age.toUpperCase()} `;
} else {
    box.innerText = `Имя: ${name.toLowerCase()}\n Фамилия: ${surname.toLowerCase()}\n Возраст: ${age.toLowerCase()} `;
}

box.style.width = '325px';
box.style.height = '300px';
box.style.backgroundColor = 'black';
box.style.color = 'white';
box.style.fontFamily = 'Special Gothic Expanded One, sans-serif'
box.style.fontSize = '40px'
box.style.borderRadius = '20px'

document.body.appendChild(box);