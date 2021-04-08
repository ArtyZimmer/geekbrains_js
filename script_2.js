// 1. Дан код:
// Почему код даёт именно такие результаты?

var a = 1, b = 1, c, d;
c = ++a;
alert(c);           // 2
// Используется префиксная форма, сначала происходит вычисление, затем присваивание
d = b++;
alert(d);           // 1
// Используется постфиксная форма, сначала происходит присваивание, затем вычисление
c = (2 + ++a);
alert(c);      // 5
// В строке #6 мы увеличивали значение переменной "a", она стала равной 2, теперь мы
// снова увеличиваем её значение на "1", 2 + 3 = 5
d = (2 + b++);
alert(d);      // 4
// В строке #8 мы увеличивали значение перменной "b", поэтому она стала равной "2"
// 2 + 2 = 4
alert(a);                    // 3
// На этом этапе рассчитаны все действия над переменной, префиксные и постфиксные
// Строки #6 и #10
alert(b);                    // 3
// На этом этапе рассчитаны все действия над переменной, префиксные и постфиксные
// Строки #8 и #13


// 2. Чему будет равен x в примере ниже?

var a = 2;
var x = 1 + (a *= 2);
// x равен 5, так как действием *= мы выполняем умножение и сразу же присваиваем переменной
// новое значение


// 3. Объявить две целочисленные переменные a и b и задать им произвольные начальные значения.
// Затем написать скрипт, который работает по следующему принципу:
// если a и b положительные, вывести их разность;
// если а и b отрицательные, вывести их произведение;
// если а и b разных знаков, вывести их сумму; ноль можно считать положительным числом.

var a = 1;
var b = 1;

if (a >= 0 && b >= 0) {
    alert(a - b);
} else if (a < 0 && b < 0) {
    alert(a * b);
} else {
    alert(a + b);
}

// 4. Присвоить переменной а значение в промежутке [0..15].
// С помощью оператора switch организовать вывод чисел от a до 15.

var a = Math.floor(Math.random() * ((15 - 0) + 0));

switch (a) {
    case 0:
        alert(0);
    case 1:
        alert(1);
    case 2:
        alert(2);
    case 3:
        alert(3);
    case 4:
        alert(4);
    case 5:
        alert(5);
    case 6:
        alert(6);
    case 7:
        alert(7);
    case 8:
        alert(8);
    case 9:
        alert(9);
    case 10:
        alert(10);
    case 11:
        alert(11);
    case 12:
        alert(12);
    case 13:
        alert(13);
    case 14:
        alert(14);
    case 15:
        alert(15);
}

// *Дополнительное задание. Решить с помощью рекурсии.

var a = Math.floor(Math.random() * ((15 - 0) + 0));

function alertNumbers(number) {
    alert(number);
    if (number < 15) {
        alertNumbers(++number);
    }
}

alertNumbers(a);


// 5. Реализовать основные 4 арифметические операции в виде
// функций с двумя параметрами. Обязательно использовать оператор return.

function doSum(number1, number2) {
    return number1 + number2;
}

function doSubstract(number1, number2) {
    return number1 - number2;
}

function doMultiplication(number1, number2) {
    return number1 * number2;
}

function doDivision(number1, number2) {
    return number1 / number2;
}

// 6. Реализовать функцию с тремя параметрами: function mathOperation(arg1, arg2, operation),
// где arg1, arg2 – значения аргументов, operation – строка с названием операции.
// В зависимости от переданного значения операции выполнить одну из арифметических операций
// (использовать функции из пункта 5) и вернуть полученное значение (использовать switch).

function mathOperation(number1, number2, operation) {
    switch (operation) {
        case "sum":
            return number1 + number2;
        case "substract":
            return number1 - number2;
        case "multiplication":
            return number1 * number2;
        case "division":
            return number1 / number2;
    }
}

// 7. *Сравнить null и 0. Попробуйте объяснить результат.

// При сравнении (<, >, ==) null и 0 получается результат false
// В JavaScript null — это не объект, а литерал и ключевое слово языка,
// которое представляет собой отсутствие какого-либо объекта. Другими словами, null указывает «в никуда».


// 8. *С помощью рекурсии организовать функцию возведения числа в степень. Формат: function power(val, pow),
// где val – заданное число, pow – степень.

function power(val, pow) {
    if (pow == 0) return 1;
    if (pow == 1) return val;
    if (pow > 1) return val * power(val, --pow);
    if (pow < 0) return 1 / power(val, pow * -1);
}
