//inputs
let nameInput = document.getElementById('input-nombre')
let userInput = document.getElementById('input-usuario')
let passwordInput = document.getElementById('input-password')
let confirInput = document.getElementById('input-confirmar')

let btnRegistro = document.getElementById('btn-registrar')
let btnVolver= document.getElementById('btn-ir-login')

//textsErrores
let errorNombreInput = document.getElementById('errorNombre')
let errorUsersInput = document.getElementById('errorUsers')
let errorContraseñaInput = document.getElementById('errorContraseña')

let getUsuarios = JSON.parse(localStorage.getItem('usuarios')) || []

let cant = getUsuarios.length
let usuarios = getUsuarios 
btnRegistro.addEventListener('click', () => {
    
    //Validaciones
    errorNombreInput.textContent = ''
    errorUsersInput.textContent = ''
    errorContraseñaInput.textContent = ''

    let usuarioExiste = null
    let cantError = 0

    if(nameInput.value === ""){
        cantError++
    }
    if(userInput.value === ""){
        cantError++
    }else{
        usuarioExiste = usuarios.find(u => u.user === userInput.value)
        if(usuarioExiste){
            cantError++
        }
    }
    if(passwordInput.value === ""){
        cantError++
    }else if(passwordInput.value != confirInput.value){
        cantError++
    }

    if(cantError > 0){
        if(nameInput.value === ""){
            errorNombreInput.textContent = 'El nombre es obligatorio'
        }
        if(userInput.value === ""){
            errorUsersInput.textContent = 'El usuario es obligatorio'
        } else if(usuarioExiste){
            errorUsersInput.textContent = 'Ese usuario ya está registrado'
        }       
        if(passwordInput.value === ""){
            errorContraseñaInput.textContent = 'La contraseña es obligatorio'
        }else if(passwordInput.value != confirInput.value){
            errorContraseñaInput.textContent = 'La contraseña no son las mismas'
        }
    }else{
        cant++
        let nuevoDic = {id: cant, nombre: nameInput.value, user: userInput.value, password: passwordInput.value}
        usuarios.push(nuevoDic)

        localStorage.setItem('usuarios', JSON.stringify(usuarios))
        location.href = '../paginas/login.html'
    }
})

btnVolver.addEventListener('click', () => {
    location.href = '../paginas/login.html'
})






