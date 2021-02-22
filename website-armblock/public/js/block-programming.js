const board = document.getElementById('programming-blocks')

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

    const idt = document.createElement('span')
    var idttxt = document.createTextNode(`(Movimento individual)`);
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

//chamando os inputs
const txtConfiguracoes = document.getElementById('conf')
const txtPorta = document.getElementById('port')
const txtComando = document.getElementById('final-command')

enviar.addEventListener('click', () => {
    //gerando string de comandos
    let blockcommands = ''
    let finalcommand = ''
    let countcommands = 0;
    const blocks = document.querySelectorAll('#board .block')
    blocks.forEach(block => {
        countcommands += 1
        if (block.classList.contains("delay")) {
            blockcommands += '&'
            blockcommands += '1:'
            const input = block.querySelectorAll('input')[0];
            blockcommands += input.value
        }
        if (block.classList.contains("abrir-garra")) {
            blockcommands += '&'
            blockcommands += '2'
        }
        if (block.classList.contains("fechar-garra")) {
            blockcommands += '&'
            blockcommands += '3'
        }
        if (block.classList.contains("motor")) {
            blockcommands += '&'
            blockcommands += '4:'
            const id = block.querySelectorAll('input')[0];
            blockcommands += `${id.value}:`
            const pos = block.querySelectorAll('input')[1];
            blockcommands += `${pos.value}:`
            const vel = block.querySelectorAll('input')[2];
            blockcommands += `${vel.value}`
            countcommands -= 2
        }
    })

    finalcommand = `prog&${countcommands}${blockcommands}`
        // atribuindo comando ao input
    txtComando.value = finalcommand;

    //pegando valor da porta e atribuindo
    const valorPorta = document.getElementById('serial-port')
    txtPorta.value = valorPorta.value

    //pegando o valor dos pinos
    const pino1 = document.getElementById('pino1')
    const pino2 = document.getElementById('pino2')
    const pino3 = document.getElementById('pino3')
    const pino4 = document.getElementById('pino4')
    const pino5 = document.getElementById('pino5')
    const pino6 = document.getElementById('pino6')
    const pino7 = document.getElementById('pino7')

    //gerando string
    let config = `conf&${pino1.value}&${pino2.value}&${pino3.value}&${pino4.value}&${pino5.value}&${pino6.value}&${pino7.value}`

    //atribuindo string de conf para input
    txtConfiguracoes.value = config

    //gerando caminho pro server
    var form = document.getElementById('comandos');
    form.action = "/enviar-comandos";
    form.submit();

})

//message modal

const fechar = document.getElementById('fechar-message')
const message = document.getElementById('message')

fechar.addEventListener('click', () => {
    message.style.display = 'none'
})