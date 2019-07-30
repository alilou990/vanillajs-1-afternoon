const idInput = document.getElementById('idInput')
const colorInput = document.getElementById('colorInput')

const setCards = () => {
    const card = document.getElementById(idInput.value)
    card.style.color = colorInput.value
}