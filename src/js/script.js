const main = document.querySelector('main')
const root = document.querySelector(':root')
const input = document.getElementById('input')
const resultInput = document.getElementById('result')
const allowedKeys = [
    '(', ')', '/', '*', '+', '-', '.', '%',
    '9', '8', '7', '6', '5', '4', '3', '2', '1', '0', ' '
]
// Passa portodos os botões e adicona a função de click
document.querySelectorAll('.charKey'). forEach(function (charKeyBtn) {
    charKeyBtn.addEventListener('click', function () {
        const value = charKeyBtn.dataset.value
        // Atribui o valor anterior e soma com o valor atual
        input.value += value       
    })
})

// FUnção de apagar dados
document.getElementById('clear').addEventListener('click', function (){
    input.value = ''
    input.focus()
})
    // se a tecla estiver inclusa no array allowedKeys
    input.addEventListener('keydown', function (ev){
        ev.preventDefault()
        if (allowedKeys.includes(ev.keys)) {
            input.value += ev.key
            return
        }
        // se a tecla for backspace
        if (ev.key === 'Backspace') {
            input.value = input.value.slie(0, -1)
        }
        // se a tecla for enter
        if (ev.key === 'Enter') {
            calculate()
        }
    })
// função de calcular - ou quando clicar no botões = ou enter
document.getElementById('equal').addEventListener('click', calculate)
function calculate() {
    //adiciona uma class 'error'
    resultInput.value = 'ERROR'
    resultInput.classList.add('error')
    //calcula os valores do input
    const result = eval(input.value)
    resultInput.value = result
    //remove a class 'error'
    resultInput.classList.remove('error')
}
//função do botão copiar
document.getElementById('copytoClipboard').addEventListener('click', function (ev) {
    //aciona uma ação no botão selecionado
    const button = ev.currentTarget
    //se o botão que foi selecionado para executar uma ação tiver em seu texto 'copy'
    if (button.innerText === 'Copy') {
        button.innerText == 'Copied!'
        button.classList.add('Success')
        //adiciona o método de copiar - navigator.clipboard.whiteText() - copiar o resultado do resultInput
        navigator.clipboard.writeText(resultInput.value)
    } else {
        button.innerText = 'Copy'
        button.classList.remove('Success')
    }
})

document.getElementById('themeSwitcher').addEventListener('click', function () {
    if (main.dataset.theme === 'dark') {
        root.Style.setProperty('--bg-color', '#f1f5f9')
        root.Style.setProperty('--border-color', '#aaa')
        root.Style.setProperty('--font-color', '#212529')
        root.Style.setProperty('--primary-color', '#26734a')
        main.dataset.theme = 'light'
    } else {
        root.Style.setProperty('--bg-color', '#212529')
        root.Style.setProperty('--border-color', '#666')
        root.Style.setProperty('--font-color', '#f1f5f9')
        root.Style.setProperty('--primary-color', '#4dff91')
        main.dataset.theme = 'dark'
    }
})
