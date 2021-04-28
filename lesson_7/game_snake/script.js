const FIELD_SIZE_X = 20;
const FIELD_SIZE_Y = 20;
let SNAKE_SPEED = 100;
let FOOD_SPEED = 5000;
let PROBLEM_SPEED = 5000;
let snake = [];
let direction = 'y+';
let gameIsRunning = false;
let snake_timer;
let food_timer;
let problem_timer;
let score = 0;
let btnStart = document.getElementsByClassName('snake-start')[0];
let btnRenew = document.getElementsByClassName('snake-renew')[0];
let points = document.getElementsByClassName('score-point')[0];

function init() {
    prepareGameField();
    points.innerHTML = score;
    let wrap = document.getElementsByClassName('wrap')[0];
    if (16 * (FIELD_SIZE_X + 1) < 380) {
        wrap.style.width = '380px';
    } else {
        wrap.style.width = (16 * (FIELD_SIZE_X + 1)).toString() + 'px';
    }
    btnStart.addEventListener('click', startGame);
    btnRenew.addEventListener('click', refreshGame);

    addEventListener('keydown', changeDirection);
}

function prepareGameField() {
    let game_table = document.createElement('table');
    game_table.setAttribute('class', 'game-table');

    for (let i = 0; i < FIELD_SIZE_Y; i++) {
        let row = document.createElement('tr');
        row.className = 'game-table-row row-' + i;

        for (let j = 0; j < FIELD_SIZE_X; j++) {
            let cell = document.createElement('td');
            cell.className = 'game-table-cell cell-' + i + '-' + j;

            row.appendChild(cell);
        }
        game_table.appendChild(row);
    }

    document.getElementById('snake-field').appendChild(game_table);
}

function startGame() {
    if (!gameIsRunning) {
        gameIsRunning = true;
        btnStart.className = "snake-start-nonactive";
        createFood();
        respawn();
        snake_timer = setInterval(move, SNAKE_SPEED);
        food_timer = setInterval(createFood, FOOD_SPEED);
        problem_timer = setInterval(createProblem, PROBLEM_SPEED);
    }
}

function respawn() {
    let start_coord_x = Math.floor(FIELD_SIZE_X / 2);
    let start_coord_y = Math.floor(FIELD_SIZE_Y / 2);
    let snake_head = document.getElementsByClassName('cell-' + start_coord_y + '-' + start_coord_x)[0];
    snake_head.setAttribute('class', snake_head.getAttribute('class') + ' snake-unit');
    let snake_tail = document.getElementsByClassName('cell-' + (start_coord_y - 1) + '-' + start_coord_x)[0];
    snake_tail.setAttribute('class', snake_tail.getAttribute('class') + ' snake-unit');

    snake.push(snake_head);
    snake.push(snake_tail);
    points.innerHTML = score;
}

function move() {
    let snake_head_classes = snake[snake.length - 1].getAttribute('class').split(' ');

    let new_unit;
    let snake_coords = snake_head_classes[1].split('-');
    let coord_y = parseInt(snake_coords[1]);
    let coord_x = parseInt(snake_coords[2]);

    if (direction == 'x-') {
        new_unit = document.getElementsByClassName('cell-' + (coord_y) + '-' + (coord_x - 1))[0];
    } else if (direction == 'x+') {
        new_unit = document.getElementsByClassName('cell-' + (coord_y) + '-' + (coord_x + 1))[0];
    } else if (direction == 'y+') {
        new_unit = document.getElementsByClassName('cell-' + (coord_y - 1) + '-' + (coord_x))[0];
    } else if (direction == 'y-') {
        new_unit = document.getElementsByClassName('cell-' + (coord_y + 1) + '-' + (coord_x))[0];
    }

    if (new_unit === undefined) {
        new_unit = headTeleport(coord_y, coord_x);
    }

    if (!haveFood(new_unit)) {
        let removed = snake.splice(0, 1)[0];
        let classes = removed.getAttribute('class').split(' ');

        removed.setAttribute('class', classes[0] + ' ' + classes[1]);
    } else {
        if (SNAKE_SPEED > 50) {
            SNAKE_SPEED -= 20;
            clearInterval(snake_timer);
            snake_timer = setInterval(move, SNAKE_SPEED);
        }
    }

    if (!isSnakeUnit(new_unit) && pathClear(new_unit)) {
        new_unit.setAttribute('class', new_unit.getAttribute('class') + ' snake-unit');
        snake.push(new_unit);

    } else {
        finishTheGame();
    }
}

function headTeleport(coord_y, coord_x) {
    let unit;
    if (direction == 'x-') {
        unit = document.getElementsByClassName('cell-' + (coord_y) + '-' + (FIELD_SIZE_X - 1))[0];
    } else if (direction == 'x+') {
        unit = document.getElementsByClassName('cell-' + (coord_y) + '-' + (0))[0];
    } else if (direction == 'y+') {
        unit = document.getElementsByClassName('cell-' + (FIELD_SIZE_Y - 1) + '-' + (coord_x))[0];
    } else if (direction == 'y-') {
        unit = document.getElementsByClassName('cell-' + (0) + '-' + (coord_x))[0];
    }
    return unit;
}

function pathClear(unit) {
    let check = false;

    let unit_classes = unit.getAttribute('class').split(' ');
    if (!unit_classes.includes('problem-unit')) {
        check = true;
    }
    return check;
}

function isSnakeUnit(unit) {
    let check = false;

    if (snake.includes(unit)) {
        check = true;
    }
    return check;
}

function haveFood(unit) {
    let check = false;

    let unit_classes = unit.getAttribute('class').split(' ');

    if (unit_classes.includes('food-unit')) {
        check = true;
        createFood();
        score++;
        points.innerHTML = score;
    }
    return check;
}

function createFood() {
    let foodCreated = false;

    while (!foodCreated) {
        let food_x = Math.floor(Math.random() * FIELD_SIZE_X);
        let food_y = Math.floor(Math.random() * FIELD_SIZE_Y);

        let food_cell = document.getElementsByClassName('cell-' + food_y + '-' + food_x)[0];
        let food_cell_classes = food_cell.getAttribute('class').split(' ');
        if (!food_cell_classes.includes('snake-unit') && !food_cell_classes.includes('problem-unit')) {
            let classes = '';
            for (let i = 0; i < food_cell_classes.length; i++) {
                classes += food_cell_classes[i] + ' ';
            }

            food_cell.setAttribute('class', classes + 'food-unit');
            foodCreated = true;
        }
    }
}

function createProblem() {
    let problemCreated = false;

    while (!problemCreated) {
        let problem_x = Math.floor(Math.random() * FIELD_SIZE_X);
        let problem_y = Math.floor(Math.random() * FIELD_SIZE_Y);

        let problem_cell = document.getElementsByClassName('cell-' + problem_y + '-' + problem_x)[0];
        let problem_cell_classes = problem_cell.getAttribute('class').split(' ');

        if (!problem_cell_classes.includes('snake-unit') && !problem_cell_classes.includes('food-unit')) {
            let classes = '';
            for (let i = 0; i < problem_cell_classes.length; i++) {
                classes += problem_cell_classes[i] + ' ';
            }
            problem_cell.setAttribute('class', classes + 'problem-unit');
            problemCreated = true;
        }
    }
}

function changeDirection(e) {
    switch (e.keyCode) {
        case 37:
            if (direction != 'x+') {
                direction = 'x-'
            }
            break;
        case 38:
            if (direction != 'y-') {
                direction = 'y+'
            }
            break;
        case 39:
            if (direction != 'x-') {
                direction = 'x+'
            }
            break;
        case 40:
            if (direction != 'y+') {
                direction = 'y-'
            }
            break;
    }
}

function finishTheGame() {
    gameIsRunning = false;
    clearInterval(snake_timer);
    clearInterval(food_timer);
    clearInterval(problem_timer);
    alert('Вы проиграли! Ваш результат: ' + score.toString());
}

function refreshGame() {
    location.reload();
}

window.onload = init;
