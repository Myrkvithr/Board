const board = document.querySelector('#board')
const colors = ['#acdFF1', '#29e310', '#e310e3', '#e3d510', '#e31056', '#10e341', '#c0e310', '#10e3ca', '#4038d1', '#8a36bf', '#e079e0', '#4fe319']
const SQUARES_NUMBER = 700
for (let i = 0; i < SQUARES_NUMBER; i++) {
    const square = document.createElement('div')
    square.classList.add('square')

    square.addEventListener('mouseover', () => setColor(square))

    square.addEventListener('mouseleave', () => removeColor(square))

    board.append(square)
}

function setColor(element) {
    const color = getRandomColors()
    element.style.backgroundColor = color
    element.style.boxShadow = `0 0 10px ${color}, 0 0 10px ${color}`
}

function removeColor(element) {
    element.style.backgroundColor = '#1d1d1d'
    element.style.boxShadow = `0 0 10px #000`
}

function getRandomColors() {
    const index = Math.floor(Math.random() * colors.length)
    return colors[index]
}
