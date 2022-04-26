"use strict";
//Задание1////////////////////////////////////////////////////////////
let message = prompt("Задание 1 \nВведите ваше сообщение:");
if (message) {
  alert(message);
} else {
  console.log("");
}
//Задание2////////////////////////////////////////////////////////
let num1 = prompt("Задание 2 \nВведите первое число:");
if (num1) {
  let num2 = prompt("Введите второе число:");
  if (num2) {
    let num3 = prompt("Введите третье число:");
    if (num3) {
      if (
        !isNaN(+num1) &&
        !isNaN(+num2) &&
        !isNaN(+num3)
      ) {
        alert(+num1 + +num2 + +num3);
      } else {
        alert("Данные введены некорректно!");
      }
    } else {
      console.log('');
    }
  } else {
    console.log('');
  }
} else {
  console.log("");
}
//Задание3////////////////////////////////////////////////////////
let userName = prompt("Задание 3 \nВведите ваше имя:");
if (userName) {
  let age = +prompt("Введите ваш возраст:");
  if (age >= 18) {
    alert("Добро пожаловать, " + userName + "!");
  } else {
    alert("Извините, " + userName + ", доступ закрыт!");
  }
} else {
  console.log("");
}
