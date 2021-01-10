const blocos = document.getElementById('blocks')

new Sortable(blocos, {
    group: {
        name: 'shared',
        pull: 'clone',
        put: false
    },
    animation: 150,
    sort: false,
    onEnd: function editavel(evt) {
        var itemEl = evt.item;
        var input = itemEl.querySelectorAll('.input-tecla')
        var select = itemEl.querySelectorAll('.select')
        input.forEach(inp => {
            console.log(inp)
            inp.disabled = false
        })
        select.forEach(slc => {
            console.log(slc)
            slc.disabled = false
        })
    }
});

criarBoard()

const btnAdd = document.getElementById('btn-add-board')
const boards = document.getElementById('boards')

btnAdd.addEventListener('click', () => {
    const newBoard = document.createElement('div')
    newBoard.classList.add('board')
    boards.appendChild(newBoard)
    criarBoard()
})

function criarBoard() {
    const allboards = document.querySelectorAll('.board')
    allboards.forEach(board => {
        new Sortable(board, {
            group: 'shared',
            animation: 150
        });
    })
}