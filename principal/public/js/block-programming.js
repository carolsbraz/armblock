const board = document.getElementById('board')
const dragboard = document.getElementById('drag-board')

new Sortable(dragboard, {
    group: {
        name: 'shared',
        pull: 'clone',
        put: false // Do not allow items to be put into this list
    },
    animation: 150,
    sort: false,
    onEnd: function editavel(evt) {

        //inputs

        var itemEl = evt.item;
        var input = itemEl.querySelectorAll('.board .block input')
        var select = itemEl.querySelectorAll('.board .block select')

        input.forEach(inp => {
            console.log(inp)
            inp.disabled = false
        })
        select.forEach(slc => {
            console.log(slc)
            slc.disabled = false
        })

        // contaniner

        var containers = null;
        containers = document.querySelectorAll(".drag");
        for (var i = 0; i < containers.length; i++) {
            new Sortable(containers[i], sortableOptions2);
        }
    }
});

new Sortable(board, {
    group: 'shared',
    animation: 150
});

var sortableOptions2 = {
    group: {
        name: "sortable-list-2",
        pull: true,
        put: true,
    },
    animation: 2
};

const hi = document.getElementById('hi')



hi.addEventListener('click', () => {
    const motorinput = document.querySelectorAll('#board .yellow input')
    var i = 0;
    motorinput.forEach(motor => {
        i += 1
        motor.setAttribute('id', `motor-${i}`)
        console.log(i)
    })
})