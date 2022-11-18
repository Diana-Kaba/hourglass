"use strict";
let countSand = +prompt('Введите количество "песка" (в секундах):');
let t;
function start() {
  countSand--;
  document.write(countSand + " ");
  if (countSand <= 0) {
    clearInterval(t);
    alert("Ваше время истекло.");
  }
}
t = setInterval(start, 1000);

start();
