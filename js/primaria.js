// Variables globales para almacenar ejercicios actuales
let secuenciaActual = null;
let comparacionActual = null;
let condicionalActual = null;

// Secuencias predefinidas
const secuencias = [
    {patron: [2, 4, 6], siguiente: 8, descripcion: "Suma 2"},
    {patron: [5, 10, 15], siguiente: 20, descripcion: "Multiplica por 5"},
    {patron: [10, 20, 30], siguiente: 40, descripcion: "Suma 10"},
    {patron: [2, 4, 8, 16], siguiente: 32, descripcion: "Multiplica por 2"}
];

// Comparaciones predefinidas
const comparaciones = [
    {op1: "8", op2: "5", respuesta: 0, pregunta: "¿Cuál es mayor?"},
    {op1: "Juan (12 años)", op2: "María (14 años)", respuesta: 1, pregunta: "¿Quién es mayor?"},
    {op1: "Pedro (9 años)", op2: "Laura (7 años)", respuesta: 1, pregunta: "¿Quién es más joven?"}
];

// Condicionales predefinidos
const condicionales = [
    {
        pregunta: "Si hace sol, ¿qué debes llevar?",
        opciones: ["Paraguas", "Gorra", "Abrigo"],
        respuestaCorrecta: 1
    },
    {
        pregunta: "¿Qué tiene más superficie: una mesa de 1 m² o una alfombra de 2 m²?",
        opciones: ["Mesa 1m²", "Alfombra 2m²"],
        respuestaCorrecta: 1
    }
];

// Funciones para secuencias
function nuevaSecuencia() {
    secuenciaActual = secuencias[Math.floor(Math.random() * secuencias.length)];
    document.getElementById('ejercicioSecuencia').innerHTML = 
        `¿Qué número sigue en la secuencia: ${secuenciaActual.patron.join(', ')}, ...?`;
    document.getElementById('respuestaSecuencia').value = '';
    document.getElementById('resultadoSecuencia').innerHTML = '';
    
    // Añadir clase para animación
    const secuenciaDiv = document.getElementById('ejercicioSecuencia');
    secuenciaDiv.classList.add('fade-in');
    setTimeout(() => secuenciaDiv.classList.remove('fade-in'), 500);
}

function verificarSecuencia() {
    const respuesta = parseInt(document.getElementById('respuestaSecuencia').value);
    const resultadoDiv = document.getElementById('resultadoSecuencia');
    
    if (respuesta === secuenciaActual.siguiente) {
        resultadoDiv.innerHTML = `¡Correcto! El patrón es: ${secuenciaActual.descripcion}`;
        resultadoDiv.className = 'result correct';
    } else {
        resultadoDiv.innerHTML = 'Incorrecto. Intenta de nuevo.';
        resultadoDiv.className = 'result incorrect';
    }
}

// Funciones para comparaciones
function nuevaComparacion() {
    comparacionActual = comparaciones[Math.floor(Math.random() * comparaciones.length)];
    document.getElementById('ejercicioComparacion').innerHTML = 
        `${comparacionActual.pregunta}<br>Opciones: ${comparacionActual.op1} vs ${comparacionActual.op2}`;
    document.getElementById('resultadoComparacion').innerHTML = '';
    
    // Añadir clase para animación
    const comparacionDiv = document.getElementById('ejercicioComparacion');
    comparacionDiv.classList.add('fade-in');
    setTimeout(() => comparacionDiv.classList.remove('fade-in'), 500);
}

function seleccionarOpcion(opcion) {
    const resultadoDiv = document.getElementById('resultadoComparacion');
    if (opcion === comparacionActual.respuesta) {
        resultadoDiv.innerHTML = '¡Correcto!';
        resultadoDiv.className = 'result correct';
    } else {
        resultadoDiv.innerHTML = 'Incorrecto. Intenta de nuevo.';
        resultadoDiv.className = 'result incorrect';
    }
}

// Funciones para condicionales
function nuevoCondicional() {
    condicionalActual = condicionales[Math.floor(Math.random() * condicionales.length)];
    document.getElementById('ejercicioCondicional').innerHTML = condicionalActual.pregunta;
    
    const select = document.getElementById('respuestaCondicional');
    select.innerHTML = '<option value="">Selecciona una respuesta</option>';
    condicionalActual.opciones.forEach((opcion, index) => {
        const option = document.createElement('option');
        option.value = index;
        option.text = opcion;
        select.appendChild(option);
    });
    
    document.getElementById('resultadoCondicional').innerHTML = '';
    
    // Añadir clase para animación
    const condicionalDiv = document.getElementById('ejercicioCondicional');
    condicionalDiv.classList.add('fade-in');
    setTimeout(() => condicionalDiv.classList.remove('fade-in'), 500);
}

function verificarCondicional() {
    const respuesta = parseInt(document.getElementById('respuestaCondicional').value);
    const resultadoDiv = document.getElementById('resultadoCondicional');
    
    if (respuesta === condicionalActual.respuestaCorrecta) {
        resultadoDiv.innerHTML = '¡Correcto!';
        resultadoDiv.className = 'result correct';
    } else {
        resultadoDiv.innerHTML = 'Incorrecto. Intenta de nuevo.';
        resultadoDiv.className = 'result incorrect';
    }
}

// Event Listeners para el menú móvil
document.addEventListener('DOMContentLoaded', function() {
    const menuToggle = document.querySelector('.menu-toggle');
    const navCenter = document.querySelector('.nav-center');
    
    menuToggle.addEventListener('click', function() {
        navCenter.classList.toggle('active');
        menuToggle.classList.toggle('active');
    });

    // Inicializar ejercicios
    nuevaSecuencia();
    nuevaComparacion();
    nuevoCondicional();
});