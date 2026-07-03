export function redirectDashboard(){
    if(localStorage.getItem('usuarioActivo')){
        location.href = '../paginas/dashboard.html'
    }
}

export function redirectLogin(){
    if(!localStorage.getItem('usuarioActivo')){
        location.href = '../paginas/login.html'
    }
}

export function logout(){
    localStorage.removeItem('usuarioActivo')
    location.href = '../paginas/login.html'
}