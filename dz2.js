const red = document.querySelector('#red')
const yellow = document.querySelector('#yellow')
const green = document.querySelector('#green')
const reset = document.querySelector('#reset')

const body = document.body

red.addEventListener('click', () => {
    
})
red.addEventListener('click', () => {
    setTimeout(() => {
        body.style.backgroundColor = "red"
    },3000)
})
yellow.addEventListener('click', () => {
    setTimeout(() => {
        body.style.backgroundColor = "yellow"
    },3000)
})
green.addEventListener('click', () => {
    setTimeout(() => {
        body.style.backgroundColor = "green"
    },3000)
})
reset.addEventListener('click', () => {
    setTimeout(() => {
        body.style.backgroundColor = "white"
    },2000)
})