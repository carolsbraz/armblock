const motor1 = document.getElementById('motor-1');
const motor2 = document.getElementById('motor-2');
const motor3 = document.getElementById('motor-3');
const motor4 = document.getElementById('motor-4');
const motor5 = document.getElementById('motor-5');
const motor6 = document.getElementById('motor-6');

const boardmotor1 = document.getElementById('board-motor-1');
const boardmotor2 = document.getElementById('board-motor-2');
const boardmotor3 = document.getElementById('board-motor-3');
const boardmotor4 = document.getElementById('board-motor-4');
const boardmotor5 = document.getElementById('board-motor-5');
const boardmotor6 = document.getElementById('board-motor-6');

motor1.addEventListener('click', () => {
    motor1.classList.add('selecionado')
    motor2.classList.remove('selecionado')
    motor3.classList.remove('selecionado')
    motor4.classList.remove('selecionado')
    motor5.classList.remove('selecionado')
    motor6.classList.remove('selecionado')

    boardmotor1.style.visibility = "visible"
    boardmotor2.style.visibility = "hidden"
    boardmotor3.style.visibility = "hidden"
    boardmotor4.style.visibility = "hidden"
    boardmotor5.style.visibility = "hidden"
    boardmotor6.style.visibility = "hidden"
})

motor2.addEventListener('click', () => {
    motor1.classList.remove('selecionado')
    motor2.classList.add('selecionado')
    motor3.classList.remove('selecionado')
    motor4.classList.remove('selecionado')
    motor5.classList.remove('selecionado')
    motor6.classList.remove('selecionado')

    boardmotor1.style.visibility = "hidden"
    boardmotor2.style.visibility = "visible"
    boardmotor3.style.visibility = "hidden"
    boardmotor4.style.visibility = "hidden"
    boardmotor5.style.visibility = "hidden"
    boardmotor6.style.visibility = "hidden"
})

motor3.addEventListener('click', () => {
    motor1.classList.remove('selecionado')
    motor2.classList.remove('selecionado')
    motor3.classList.add('selecionado')
    motor4.classList.remove('selecionado')
    motor5.classList.remove('selecionado')
    motor6.classList.remove('selecionado')

    boardmotor1.style.visibility = "hidden"
    boardmotor2.style.visibility = "hidden"
    boardmotor3.style.visibility = "visible"
    boardmotor4.style.visibility = "hidden"
    boardmotor5.style.visibility = "hidden"
    boardmotor6.style.visibility = "hidden"
})

motor4.addEventListener('click', () => {
    motor1.classList.remove('selecionado')
    motor2.classList.remove('selecionado')
    motor3.classList.remove('selecionado')
    motor4.classList.add('selecionado')
    motor5.classList.remove('selecionado')
    motor6.classList.remove('selecionado')

    boardmotor1.style.visibility = "hidden"
    boardmotor2.style.visibility = "hidden"
    boardmotor3.style.visibility = "hidden"
    boardmotor4.style.visibility = "visible"
    boardmotor5.style.visibility = "hidden"
    boardmotor6.style.visibility = "hidden"
})

motor5.addEventListener('click', () => {
    motor1.classList.remove('selecionado')
    motor2.classList.remove('selecionado')
    motor3.classList.remove('selecionado')
    motor4.classList.remove('selecionado')
    motor5.classList.add('selecionado')
    motor6.classList.remove('selecionado')

    boardmotor1.style.visibility = "hidden"
    boardmotor2.style.visibility = "hidden"
    boardmotor3.style.visibility = "hidden"
    boardmotor4.style.visibility = "hidden"
    boardmotor5.style.visibility = "visible"
    boardmotor6.style.visibility = "hidden"
})

motor6.addEventListener('click', () => {
    motor1.classList.remove('selecionado')
    motor2.classList.remove('selecionado')
    motor3.classList.remove('selecionado')
    motor4.classList.remove('selecionado')
    motor5.classList.remove('selecionado')
    motor6.classList.add('selecionado')

    boardmotor1.style.visibility = "hidden"
    boardmotor2.style.visibility = "hidden"
    boardmotor3.style.visibility = "hidden"
    boardmotor4.style.visibility = "hidden"
    boardmotor5.style.visibility = "hidden"
    boardmotor6.style.visibility = "visible"
})

const blocos = document.getElementById('blocks')

new Sortable(blocos, {
    group: {
        name: 'shared',
        pull: 'clone',
        put: false
    },
    animation: 150,
    sort: false
});

const allboards = document.querySelectorAll('.board')
allboards.forEach(board => {
    new Sortable(board, {
        group: 'shared',
        animation: 150
    });
})