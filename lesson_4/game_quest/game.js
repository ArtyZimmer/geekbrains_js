function userHistory(val, userAnswers) {
    const step = userAnswers[val - 1];
    let newStep;
    if(step) {
        newStep = prompt(
            'Вопрос:' + "\n" +
            `${step.question}${"\n"}` +
            'Ваш ответ:' + "\n" +
            `${step.userAnswer.answer}${"\n"}` +
            `Если жедаете посмотреть другой шаг, введите его номер (всего ${userAnswers.length}).`
        );
    } else {
        newStep = prompt(
            `Такого шага нет. Всего шагов: ${userAnswers.length}.`
        );
    }
    if(newStep === null) {
        alert("Всего доброго!")
    } else {
        userHistory(+newStep, userAnswers);
    }
}

function game(val, userAnswers) {
    if(val === null) {
        if(userAnswers.length === 0) {
            alert("Очень жаль, что Вы покинули нас так рано");
            return;
        }
        const step = prompt(
            `Спасибо за игру. Ваш путь был длиной в ${userAnswers.length} шагов.` + "\n" +
            'Чтобы увидеть вопрос и Ваш ответ, введите номер шага:'
        );
        userHistory(+step, userAnswers);
        return;
    }

    const section = works[`q${val}`];
    const userValue = prompt(
        section.question + "\n" +
        section.answers.map((a, index) => `${index + 1} - ${a.answer}`).join('')
    );
    if(userValue === null) {
        game(null, []);
        return;
    }
    const userAnswer = section.answers[+userValue - 1];
    if(userAnswer) {
        userAnswers.push({ question: section.question, userAnswer })
        game(userAnswer.goTo, userAnswer.goTo === 1 ? [] : userAnswers);
    } else {
        alert('Введено недопустимое значение');
        game(val, userAnswers);
    }
}

game(1, []);
