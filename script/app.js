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
      if (!isNaN(+num1) && !isNaN(+num2) && !isNaN(+num3)) {
        alert(+num1 + +num2 + +num3);
      } else {
        alert("Данные введены некорректно!");
      }
    } else {
      console.log("");
    }
  } else {
    console.log("");
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
//Задание4////////////////////////////////////////////////////////
let confBlock = confirm("Задание 4 \nХотите ввести название блока?");
if (confBlock) {
  let promBlock = prompt("Введите название блока:");
  if (promBlock) {
    let confEl = confirm("Хотите ввести название элемента?");
    if (confEl) {
      let promEl = prompt("Введите название элемента:");
      if (promEl) {
        let confMod = confirm("Хотите ввести название модификатора?");
        if (confMod) {
          let promMod = prompt("Введите название модификатора:");
          if (promMod) {
            confirm(promBlock + "_" + promEl + "_" + promMod);
          } else {
            confirm(promBlock + "_" + promEl);
          }
        } else {
          confirm(promBlock + "_" + promEl);
        }
      } else {
        confirm(promBlock);
      }
    } else {
      confirm(promBlock);
    }
  } else {
    confirm("Элементу не присвоен класс.");
  }
} else {
  confirm("Элементу не присвоен класс.");
}
//Задание5////////////////////////////////////////////////////////
let conf1 = prompt("Задание 5 \nВведите первое число:");
if (conf1 && !isNaN(+conf1)) {
  conf1 = +conf1;
  let conf2 = prompt("Введите второе число:");
  if (conf2 && !isNaN(+conf2)) {
    conf2 = +conf2;
    let plus = conf1 + conf2;
    let minus = conf1 - conf2;
    let div = conf1 / conf2;
    let mult = conf1 * conf2;
    let conf = prompt(
      "Введите операцию: | plus or + | minus or - | div or / | mult or * |"
    );
    if (conf === "plus" || conf === "+") {
      alert(plus);
    } else if (conf === "minus" || conf === "-") {
      alert(minus);
    } else if (conf === "div" || conf === "/") {
      if (conf2 === 0) {
        alert("На ноль делить нельзя");
      } else {
        alert(div);
      }
    } else if (conf === "mult" || conf === "*") {
      alert(mult);
    } else {
      alert("Неверная операция");
    }
  } else if (isNaN(conf2)) {
    alert("Данные некорректны!");
  } else {
    alert("Вы ввели не все данные");
  }
} else if (isNaN(conf1)) {
  alert("Данные некорректны!");
} else {
  console.log("");
}
