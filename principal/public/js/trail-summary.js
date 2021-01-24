// drop lists from summary

const titles = document.querySelectorAll('[data-summary]')

titles.forEach(title => {
    var selected = "";
    title.addEventListener('click', () => {
        selected = title.dataset.summary;
        var lista = document.getElementById(`list-${selected}`)
        if (lista.classList.contains("hide")) {
            lista.classList.remove('hide')
        } else {
            lista.classList.add('hide')
        }
    })
})