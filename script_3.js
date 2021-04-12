// 1. С помощью цикла while вывести все простые числа в промежутке от 0 до 100.

var primeArray = []; // массив простых чисел
var counter = 0; // начальная точка проверки

top: // лейбл цикла
    while (counter <= 100) {
        if (counter < 2) {
            counter++;
            continue;
        }
        // тут мы проверяем число на простоту методом Фробениуса
        let j = 2
        const max = Math.sqrt(counter);
        while (j <= max) {
            if (counter % j === 0) {
                counter++;
                continue top; // переходим к следующей итерации материнского цикла
            }
            j++;
        }
        // если проверка прошла успешно, добавляем его в массив
        primeArray.push(counter)
        counter++
    }

alert(primeArray);

/* 2. С этого урока начинаем работать с функционалом интернет-магазина. Предположим, есть сущность корзины.
Нужно реализовать функционал подсчета стоимости корзины в зависимости от находящихся в ней товаров.
3. Товары в корзине хранятся в массиве. Задачи:
a) Организовать такой массив для хранения товаров в корзине;
b) Организовать функцию countBasketPrice, которая будет считать стоимость корзины. */

var shopList = [
    {
        title: "Товар №1",
        price: 990,
        quantity: 2
    },
    {
        title: "Товар №2",
        price: 29990,
        quantity: 1
    },
    {
        title: "Товар №3",
        price: 49890,
        quantity: 3
    },
    {
        title: "Товар №4",
        price: 890,
        quantity: 4
    }
];

function countBasketPrice(array) {
    var sum = 0;
    for (var item of array) {
        sum += item.price * item.quantity;
    }
    return sum;
}

countBasketPrice(shopList);


// 4.*Вывести с помощью цикла for числа от 0 до 9, не используя тело цикла. Выглядеть это должно так:

for (let i = 0; i <= 9; console.log(i++)) {
}


/* 5. *Нарисовать пирамиду с помощью console.log, как показано на рисунке,
только у вашей пирамиды должно быть 20 рядов,а не 5:
x
xx
xxx
xxxx
xxxxx */

function pyramid(height) { // функция получает на вход необходимое количество этажей
    const block = 'x';
    var counter = 1;
    while (counter <= height) {
        var line = '';
        for (let i = 0; i < counter; i++) {
            line += block;
        }
        console.log(line);
        line = '';
        counter++;
    }
}

pyramid(20);
