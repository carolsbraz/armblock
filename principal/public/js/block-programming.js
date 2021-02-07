const board = document.getElementById('programming-blocks')

let pontos = 1;


const dragboard = document.getElementById('here-blocks')
new Sortable(dragboard, {
    group: {
        name: 'shared',
        pull: 'clone',
        put: false // Do not allow items to be put into this list
    },
    animation: 150,
    sort: false,
    filter: '.undrag'
});

new Sortable(board, {
    group: 'shared',
    animation: 150
});

const btnAdd = document.getElementById('add-button')
const hereBlocks = document.getElementById('here-blocks')

btnAdd.addEventListener('click', () => {
    const newBoard = document.createElement('div')
    newBoard.classList.add('block', 'yellow')

    // yellow content
    pontos++;
    const idt = document.createElement('span')
    var idttxt = document.createTextNode(`(Movimento individual ${pontos} )`);
    var idtblock = document.createTextNode(`Mover o motor`);
    idt.appendChild(idttxt)
    const motorInput = document.createElement('input')
    motorInput.setAttribute('type', 'number')
    motorInput.setAttribute('placeholder', 'motor')

    const br = document.createElement('br')

    // internal yellow

    const drag = document.createElement('div')
    drag.classList.add('drag')

    // blue content

    const blueBlock = document.createElement('div')
    blueBlock.classList.add('block', 'blue')

    var degre = document.createTextNode(`Para`);
    blueBlock.appendChild(degre)

    const degreInput = document.createElement('input')
    degreInput.setAttribute('type', 'number')
    degreInput.setAttribute('placeholder', 'graus')
    blueBlock.appendChild(degreInput)

    var degresymbol = document.createTextNode(`°`);
    blueBlock.appendChild(degresymbol)

    drag.appendChild(blueBlock)

    // red content

    const redBlock = document.createElement('div')
    redBlock.classList.add('block', 'brown')

    var degre = document.createTextNode(`Para`);
    redBlock.appendChild(degre)

    const speedInput = document.createElement('input')
    speedInput.setAttribute('type', 'number')
    speedInput.setAttribute('placeholder', 'velo...')
    redBlock.appendChild(speedInput)

    var degresymbol = document.createTextNode(`°`);
    redBlock.appendChild(degresymbol)

    drag.appendChild(redBlock)

    newBoard.appendChild(idt)
    newBoard.appendChild(br)
    newBoard.appendChild(idtblock)
    newBoard.appendChild(motorInput)
    newBoard.appendChild(drag)
    hereBlocks.appendChild(newBoard)
})

const btndelete = document.getElementById('delete')

btndelete.addEventListener('click', () => {
    const div = document.getElementById("programming-blocks");

    div.innerText = ''
})

const enviar = document.getElementById('enviar')

enviar.addEventListener('click', () => {
    var i = 1;
    const motorinput = document.querySelectorAll('#board .yellow input')

    motorinput.forEach(motor => {
        i += 1
        motor.setAttribute('name', `motor-${i}`)
        console.log(i)
    })
})