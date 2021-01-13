const target = document.querySelectorAll('[data-anime]')
const animationClass = 'animate'

animeScroll();

function animeScroll() {
    const pageTop = window.pageYOffset;
    target.forEach(function(element) {
        if ((pageTop) > element.offsetTop - ((window.innerHeight * 3) / 4)) {
            element.classList.add(animationClass)
        }
    })
}

window.addEventListener('scroll', function() {
    animeScroll();
})