//  Задание 1
 let y = Number(prompt('Введите ваш возраст'));
 if (0 <= y && y <= 12) 
     alert('Вы ребенок');

 if (13 <= y && y < 19) 
     alert('Вы подросток')

 if (18 <= y && y < 60) 
     alert('Вы взрослый')

 if (y >= 60)
     alert('Вы пенсионер');
//  Задание 2
 let num = Number(prompt('Введите число от 0 до 9 включительно'));
 switch (num)
 {
     case 0:
     alert ('0 - )');
     break;
     case 1:
     alert ('1 - !');
     break;
     case 2:
     alert ('2 - @');
     break;
     case 3:
     alert ('3 - #');
     break;
     case 4:
     alert ('4 - $');
     break;
     case 5:
     alert ('5 - %');
     break;
     case 6:
     alert ('6 - ^');
     break;
     case 7:
     alert ('7 - &');
     break;
     case 8:
     alert ('0 - *');
     break;
     case 9:
     alert ('9 - (');
     break;
 };
//  Задание 3

 function numNum() {
     let p = Number(prompt('Введите любое трехзначное число'));
     let str = p.toString();
     if (str.length === 3) {
         if (str[0] === str[1])
             alert('Одинаковые цифры есть');
         else if (str[1] === str[2])
             alert('Одинаковые цифры есть');
         else if (str[0] === str[2])
             alert('Одинаковые цифры есть');
         else
             alert('Одинаковых цифр нет');
     }
     else if (str.length !== 3) {
         alert('Число не трехзначное, повторим?');
         numNum();
     }

 };
 numNum();

//  Задание 4
 let q = Number(prompt('Введите любой год'));

 if (0 < q && q != 0 && q % 4 === 0)
     alert('Год високосный');
 else if (q % 100 === 0 && q != 0 && q % 400 === 0)
     alert('Год високосный');
 else
     alert('Год невисокосный');

//  Задание 5

 let x = Number(prompt('Введите любое пятизначное число'))
 function palindromeCheck() {
     if (x <0) {

     }
     let original = x;
     let reversed = 0;

     for (let temp = original; temp > 0;
         temp = Math.floor(temp / 10)) {
         reversed = reversed * 10 + temp % 10;
     }

     return x === reversed;
 }
 alert(palindromeCheck('Явдяется полиндромом'));

//  Задание 6

 let usd = Number(prompt('Введите сумму в USD'));
 let currency = String(prompt('Введите нужную валюту: EUR, UAN, AZN'));
 switch (currency)
  {
      case "EUR":
      alert ( usd*0.95 + ' EUR');
      break;
      case "UAN":
      alert (usd*7.24 + ' UAN');
      break;
      case "AZN":
      alert (usd*1.7 + ' AZN');
      break;
  };

//  Задание 7
  let shop = Number(prompt('Введите сумму покупки'));
  if (shop > 0 && shop <= 200){
      alert('Скидки нет ' + shop)
  } else if (shop > 200 && shop <= 300){
      alert('Сумма покупки, с учетом скидки 3% - ' + Math.floor(shop * 0.98))
  } else if (300 < shop && shop <= 500) {
      alert('Сумма покупки, с учетом скидки 5% - ' + Math.floor(shop * 0.95))
  } else if (shop > 500) {
      alert('Сумма покупки, с учетом скидки 7% - ' + Math.floor(shop * 0.93))
 }
//  Задание 8

 let square = Number(prompt('Укажите периметр квадрата'));
 let circle = Number(prompt('Укажите длину окружности'));
 let m = (square / 4);
 let d = (circle / Math.PI);
 console.log(d);
 console.log(m);
 if (d <= m){
 alert('Окружность помещается внутри квадрата')
 }
 else{
 alert('Окружность не помещается внутри квадрата');
 }

//  Задание 9

 let sum = Number(prompt('Напишите ответ 2+2=? Варианты ответов: 2 , 7 , 4'));
 let year = Number(prompt('Напишите ответ Какой сейчас год? Варианты ответов: 2024 , 1975, 2026'));
 let firstName = String(prompt('Напишите ответ Как звали Пушкина? Варианты ответов: Сергей , Александр, Ульян'));
 function sumAnswers(sum, year, firstName) {

     switch (firstName) {
         case "Сергей":
             n = 0;
             break;
        case "Александр":
             n = 2;
             break;
         case "Ульян":
             n = 0;
             break;
     };
     if (sum === 4) {
         sum = 2;
     }
     else {
         sum = 0;
     };
     if (year === 2024) {
         year = 2;
     }
     else {
         year = 0;
     };

 return (sum + year + n);
 }
 let result = sumAnswers(sum, year, firstName);
 alert('Заработанно балов за правильные ответы: ' + result);


//  Задание 10
    var day = new Date(prompt('Введите любую дату в формает: год/ месяц/ день'));
    day.setDate(day.getDate() + 1);
    alert(day);

