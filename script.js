/*
1. Задать температуру в градусах по Цельсию. Вывести в alert соответствующую температуру в градусах по Фаренгейту.
Подсказка: расчёт идёт по формуле: Tf = (9 / 5) * Tc + 32, где Tf – температура по Фаренгейту,
Tc – температура по Цельсию
 */

const celcies = parseInt(prompt("Введите текущую температуру в градусах Цельсия:"));
alert(`Текущая температура в градусах по Фаренгейту:  ${(9 / 5) * celcies + 32}`);

/*
Объявить две переменные: admin и name. Записать в name строку "Василий";
Скопировать значение из name в admin. Вывести admin (должно вывестись «Василий»).
 */

let admin;
const name = 'Василий';
admin = name;
alert(admin);

/*
Чему будет равно JS-выражение 1000 + "108"?
 */

// "1000108"

/*
Самостоятельно разобраться с атрибутами тега script (async и defer).
 */

/*
При наличии атрибута async браузер при возможности запускает скрипт асинхронно.
Это означает, что указанный в атрибуте src файл будет выполняться без ожидания загрузки
и отображения веб-страницы. В то же время и страница не ожидает результата выполнения скрипта,
а продолжает загружаться как обычно.

Атрибут defer откладывает выполнение скрипта до тех пор, пока вся страница не будет загружена полностью.
 */
