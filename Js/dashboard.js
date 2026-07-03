import { logout, redirectLogin } from "./authGuard.js";
redirectLogin()

//Capturamos datos enviados del localeStorage
let usuario = JSON.parse(localStorage.getItem('usuarioActivo')) 

//Capturamos sus credenciales
let avatarDiv = document.getElementById('avatar')
let nombreSpan = document.getElementById('user-nombre')
let btnCerrarSesion = document.getElementById('btn-salir')

btnCerrarSesion.addEventListener('click', logout)

//Compleamos con los datos del usuario
nombreSpan.textContent = usuario.nombre
let iniciales = usuario.nombre.split(" ").map(p => p[0]).join("").toUpperCase()
avatarDiv.textContent = iniciales

//movimitos
let getMovimitos = JSON.parse(localStorage.getItem('movimientos')) || []

//Logica de botones
let btnGasto = document.getElementById('btn-gasto')
let btnIngreso = document.getElementById('btn-ingreso')
btnGasto.addEventListener('click', () => {
    btnGasto.classList.add('sel')
    btnIngreso.classList.remove('sel')
})
btnIngreso.addEventListener('click', () => {
    btnIngreso.classList.add('sel')
    btnGasto.classList.remove('sel')
})
//////



function mostrarHorario(){
    let dia = 0
    let mes = 0
    let año = 0
    let hora = 0
    let minuto = 0
    let segundo = 0

    fetch('https://timeapi.io/api/time/current/zone?timeZone=America/Lima')
    .then(response => response.json())
    .then(datos => {
        let fecha = new Date(datos.year, datos.month - 1, datos.day)
        
        let fechaTexto = fecha.toLocaleDateString('es-PE', {
            weekday: 'long',   // "jueves"
            day: 'numeric',    // "2"
            month: 'long',     // "julio"
            year: 'numeric'    // "2026"
        })

        let horaTexto = datos.hour + ':' + datos.minute

        document.getElementById('texto-fecha').textContent = fechaTexto
        document.getElementById('texto-hora').textContent = horaTexto
    })


}
mostrarHorario()













//Capturamos los inputs
let descripcionInput = document.getElementById('input-descripcion')
let montoInput = document.getElementById('input-monto')
let categoriaInput = document.getElementById('input-categoria')
let cont = getMovimitos.length
let btnAgregar = document.getElementById('btn-agregar')

let movimientos = getMovimitos

btnAgregar.addEventListener('click', () => {
    cont++
    let tipo = btnGasto.classList.contains('sel') ? 'gasto' : 'ingreso'
    let newMov = {
        id: cont, 
        usuarioId: usuario.id, 
        descripcion: descripcionInput.value, 
        monto: Number(montoInput.value), 
        tipo: tipo,
        categoria: categoriaInput.value
    }

    movimientos.push(newMov)

    localStorage.setItem('movimientos', JSON.stringify(movimientos))
    mostrarMovimientos()
})

function mostrarMovimientos(){
    document.getElementById('lista-movimientos').innerHTML = ''

    for(let i = movimientos.length - 1; i >= 0; i--){

        let m = movimientos[i]

        if(m.usuarioId == usuario.id){
            let dotDiv = document.createElement('div')
            
            let newSpan = document.createElement('span')
            newSpan.textContent = m.descripcion
            newSpan.className = 'tx-name'

            let spansigno = document.createElement('span') 

            if(m.tipo === 'ingreso'){
                dotDiv.className = 'dot dot-g'
                spansigno.textContent = ' + S/' + m.monto
                spansigno.className = 'amt-g'
            }else{
                dotDiv.className = 'dot dot-r'
                spansigno.textContent = ' - S/' + m.monto
                spansigno.className = 'amt-r'
            }

            let newDiv = document.createElement('div')
            newDiv.className = 'tx-row'

            newDiv.appendChild(dotDiv)
            newDiv.appendChild(newSpan)
            newDiv.appendChild(spansigno)
        
            document.getElementById('lista-movimientos').appendChild(newDiv)
        }
    }
    calcularMovimientos()

}
mostrarMovimientos()


function calcularMovimientos(){

    document.getElementById('total-ingresos').textContent = ''
    document.getElementById('total-gastos').textContent = ''
    document.getElementById('total-balance').textContent = ''

    let montoIngreso = 0
    let montoGasto = 0
    let montoBalance = 0

    let movimientos = JSON.parse(localStorage.getItem('movimientos')) || []

    movimientos.forEach(m => {

        if(m.usuarioId === usuario.id){

            if(m.tipo === 'ingreso'){
                montoIngreso = montoIngreso + m.monto                
            }
            if(m.tipo === 'gasto'){
                montoGasto = montoGasto + m.monto
            }
        }        
    });

    montoBalance = montoIngreso - montoGasto

    document.getElementById('total-ingresos').textContent = 'S/ ' + montoIngreso
    document.getElementById('total-gastos').textContent = 'S/ ' + montoGasto
    document.getElementById('total-balance').textContent = 'S/ ' + montoBalance

}

calcularMovimientos()