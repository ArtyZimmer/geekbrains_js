const works = {
    q1: {
        question: 'Вы живёте в тихой и уютной деревеньке на окрайне страны.\n' +
            'Здесь есть практчески всё: речка, лес, горы, озеро, луга и поля, есть даже школа в соседнем селе.\n' +
            'Сейчас начало лета, воскресенье, раннее утро, Вы просыпаетесь и собираетесь ...\n',
        answers: [
            { answer: "Поспать до обеда\n", goTo: 2 },
            { answer: "Пойти прогуляться\n", goTo: 3 },
        ]
    },
    q2: {
        question: 'Вы решили поспать до обеда.\n' +
            'После того как Вы проснулись первое, что вы ощутили, это приятный запах, который шёл с кухни.\n' +
            'После Вы замечаете, какая за окном прекрасная погода, и Вы думаете ...\n',
        answers: [
            { answer: 'Пойти прогуляться\n', goTo: 3 },
            { answer: 'Пойти пообедать\n', goTo: 4 },
        ]
    },
    q3: {
        question: 'Вы решили пойти прогуляться.\n' +
            'Вы выходите из своего дома и видите прекрасный рассвет, блики солнца так и играют на озёрной глади.\n' +
            'Вы решаете дойти до озера, полюбоваться его красотойю\n' +
            'С одной стороны тропинки Вы видите пшеничное поле, за которым веднеется лес.\n' +
            'С другой стороны течёт речка, а в далеке виднеются горы.\n' +
            'Вы наслаждаетесь пейзажами и не замечаете как летит время.\n' +
            'Домой Вы приходите только к обеду, но до обеда ещё есть время и Вы решаете ...\n',
        answers: [
            { answer: 'Подождать обед в столовой\n', goTo: 5 },
            { answer: 'Поколоть дров перед обедом\n', goTo: 6 },
        ]
    },
    q4: {
        question: 'Вы пообедали, вы молодец.\n',
        answers: [
            { answer: 'Играть заново\n', goTo: 1 },
            { answer: 'Выйти\n', goTo: null },
        ]
    },
    q5: {
        question: 'Вы сели и начали ждать обед. Время подошло\n',
        answers: [
            { answer: 'Пойти пообедать\n', goTo: 4 },
            { answer: 'Пойти снова погулять\n', goTo: 3 },
        ]
    },
    q6: {
        question: 'Вы наломали дров...\n',
        answers: [
            { answer: 'Идти обедать\n', goTo: 4 },
            { answer: 'Пойти снова прогуляться\n', goTo: 3 },
        ]
    },
}