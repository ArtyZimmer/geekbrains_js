// 1. Написать функцию, преобразующую число в объект. Передавая на вход число от 0 до 999,
// мы должны получить на выходе объект, в котором в соответствующих свойствах описаны единицы,
// десятки и сотни. Например, для числа 245 мы должны получить следующий объект:
// {‘единицы’: 5, ‘десятки’: 4, ‘сотни’: 2}. Если число превышает 999, необходимо выдать
// соответствующее сообщение с помощью console.log и вернуть пустой объект.

function objectNumbers(number) {
    if (number < 0) {
        number *= -1;
    }
    if (number < 0 || number > 999) {
        console.log('Введённое число не соответсвует диапазону [-999;999]');
        return {};
    }
    return {
        hundreds: Math.floor(number / 100),
        tens: ((number % 100) - (number % 10)) / 10,
        units: number % 10
    };
}
