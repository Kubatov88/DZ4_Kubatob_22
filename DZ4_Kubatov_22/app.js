const increment = document.querySelector('.increment')
const clear = document.querySelector('.clear')
const decrement = document.querySelector('.decrement')
const counter = document.querySelector('.counter')
const block = document.querySelector('.block')
const x = document.querySelector('.x')
const y = document.querySelector('.y')

increment.onclick = () => {
    +counter.innerHTML++
    counter.style.color = 'green'
}

decrement.onclick = ()=> {
    if(counter.innerHTML > 0) {
        +counter.innerHTML--
        counter.style.color = 'red'
    }
}

clear.onclick = ()=> {
    counter.innerHTML = 0
    counter.style.color = 'black'
}

block.addEventListener('mousemove', e => {
    x.innerHTML = e.offsetX
    y.innerHTML = e.offsetY
})
