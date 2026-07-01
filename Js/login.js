import { redirectDashboard } from "./authGuard.js"

redirectDashboard()

//capturamos inputs
let userInput = document.getElementById('userInput')
let passwordInput = document.getElementById('passwordInput')

//textErrores
let errorUser = document.getElementById('errorUser')
let errorPassword = document.getElementById('errorPassword')

let bntLogin = document.getElementById('btn-login')
let btnRegistro = document.getElementById('btn-registro')

//obtenerUsuario
let getUsuarios = JSON.parse(localStorage.getItem('usuarios')) || []

bntLogin.addEventListener('click', () => {

    errorUser.textContent = ''
    errorPassword.textContent = ''

    let contError = 0
    
    if(userInput.value === ""){
        contError++
    }
    if(passwordInput.value === ""){
        contError++
    }

    if(contError > 0){
        if(userInput.value === ""){
            errorUser.textContent = 'El usuario es obligatorio'
        }
        if(passwordInput.value === ""){
            errorPassword.textContent = 'El password es obligatorio'
        }

    }else{
        let findUserCorrecto = getUsuarios.find(u => u.user === userInput.value && u.password === passwordInput.value)

        if(findUserCorrecto){
            localStorage.setItem('usuarioActivo', JSON.stringify(findUserCorrecto))
            location.href = '../paginas/dashboard.html'
        }
        else{
            errorPassword.textContent = 'Credenciales incorrectas'
        }
    }
})

btnRegistro.addEventListener('click', () => {
    location.href = '../paginas/registro.html'
})

document.getElementById('back').addEventListener('click', () => {
    location.href = '../home.html'
})