# 💰 MisGastos

Aplicación web de control de gastos personales desarrollada con HTML, CSS y JavaScript puro.

---

## 📸 Vista previa

![Home](../img/menu.png)
![Login](../img/login.png)
![Registro](../img/registro.png)
![Dashboard](../img/dashboard.png)

---

## 🚀 Funcionalidades

- **Registro e inicio de sesión** con validaciones y manejo de sesión via `localStorage`
- **Dashboard personalizado** que muestra el nombre del usuario autenticado
- **Registro de movimientos** (ingresos y gastos) con descripción, monto y categoría
- **Cálculo automático** de ingresos totales, gastos totales y balance actual
- **Lista de movimientos** ordenada del más reciente al más antiguo
- **Fecha y hora en tiempo real** obtenida mediante `fetch` a una API externa
- **Protección de rutas** con `authGuard` que redirige si no hay sesión activa

---

## 🛠️ Tecnologías utilizadas

| Tecnología | Uso |
|---|---|
| HTML5 | Estructura de las páginas |
| CSS3 | Estilos, variables CSS y diseño responsive |
| JavaScript | Lógica, DOM y manejo de datos |
| localStorage | Persistencia de usuarios y movimientos |
| Fetch API | Consulta de fecha y hora en tiempo real |
| Git & GitHub | Control de versiones |

---

## 📁 Estructura del proyecto

```
mis-gastos/
├── Paginas/
│   ├── home.html
│   ├── login.html
│   ├── registro.html
│   └── dashboard.html
├── Css/
│   ├── home.css
│   ├── login.css
│   ├── registro.css
│   └── dashboard.css
├── Js/
│   ├── home.js
│   ├── login.js
│   ├── registro.js
│   ├── dashboard.js
│   └── authGuard.js
└── README.md
```

---

## ⚙️ Cómo ejecutar el proyecto

1. Clona el repositorio:
```bash
git clone https://github.com/TU-USUARIO/mis-gastos.git
```

2. Abre el proyecto en tu editor de código

3. Abre `Paginas/home.html` con Live Server o directamente en el navegador

> No requiere instalación de dependencias ni servidor backend.

---

## 🔐 Flujo de navegación

```
home.html → login.html → dashboard.html
              ↕
          registro.html
```

---

## 📦 Datos en localStorage

```javascript
// Usuarios registrados
localStorage.getItem('usuarios')
// → [{ id, nombre, user, password }]

// Movimientos de todos los usuarios
localStorage.getItem('movimientos')
// → [{ id, usuarioId, descripcion, monto, tipo, categoria }]

// Usuario activo en sesión
localStorage.getItem('usuarioActivo')
// → { id, nombre, user, password }
```

---

## 🌐 API utilizada

| API | Endpoint | Uso |
|---|---|---|
| TimeAPI | `https://timeapi.io/api/time/current/zone?timeZone=America/Lima` | Fecha y hora en tiempo real |

---

## 👨‍💻 Autor

Desarrollado como proyecto de examen para el curso de Desarrollo Web Frontend.

---

## 📄 Licencia

Este proyecto es de uso educativo.
