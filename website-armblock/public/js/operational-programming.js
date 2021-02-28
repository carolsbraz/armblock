const range1 = document.getElementById('valorjunta1')
const range2 = document.getElementById('valorjunta2')
const range4 = document.getElementById('valorjunta4')
const range5 = document.getElementById('valorjunta5')
const range6 = document.getElementById('valorjunta6')
const range7 = document.getElementById('valorjunta7')

const input1 = document.getElementById('inputjunta1')
const input2 = document.getElementById('inputjunta2')
const input4 = document.getElementById('inputjunta4')
const input5 = document.getElementById('inputjunta5')
const input6 = document.getElementById('inputjunta6')
const input7 = document.getElementById('inputjunta7')

range1.addEventListener('input', () => {
    input1.value = range1.value
})

range2.addEventListener('input', () => {
    input2.value = range2.value
})

range4.addEventListener('input', () => {
    input4.value = range4.value
})

range5.addEventListener('input', () => {
    input5.value = range5.value
})

range6.addEventListener('input', () => {
    input6.value = range6.value
})

range7.addEventListener('input', () => {
    input7.value = range7.value
})

range1.addEventListener('change', () => {
    const form = document.getElementById('int-1');
    form.submit();
})

range2.addEventListener('change', () => {
    const form = document.getElementById('int-2');
    form.submit();
})

range4.addEventListener('change', () => {
    const form = document.getElementById('int-4');
    form.submit();
})

range5.addEventListener('change', () => {
    const form = document.getElementById('int-5');
    form.submit();
})

range6.addEventListener('change', () => {
    const form = document.getElementById('int-6');
    form.submit();
})

range7.addEventListener('change', () => {
    const form = document.getElementById('int-7');
    form.submit();
})