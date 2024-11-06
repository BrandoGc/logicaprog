// Event Listeners para el menú móvil
document.addEventListener('DOMContentLoaded', function() {
    const menuToggle = document.querySelector('.menu-toggle');
    const navCenter = document.querySelector('.nav-center');
    
    menuToggle.addEventListener('click', function() {
        navCenter.classList.toggle('active');
        menuToggle.classList.toggle('active');
    });

    // Inicializar tooltips y validaciones
    inicializarValidaciones();
});

// Función para validar inputs
function validarInput(valor, tipo) {
    switch(tipo) {
        case 'numero':
            return !isNaN(valor) && valor !== '';
        case 'secuencia':
            return valor.split(',').every(n => !isNaN(n.trim()));
        case 'rango':
            return !isNaN(valor) && valor >= 0 && valor <= 1000;
        default:
            return true;
    }
}

// Funciones para los ejercicios
function contarRepeticiones() {
    const secuenciaInput = document.getElementById('secuenciaInput').value;
    const numero = document.getElementById('numeroABuscar').value;

    if (!validarInput(secuenciaInput, 'secuencia')) {
        mostrarResultado('resultadoRepeticiones', 
            'Por favor, ingresa una secuencia válida de números separados por comas', false);
        return;
    }

    if (!validarInput(numero, 'numero')) {
        mostrarResultado('resultadoRepeticiones', 
            'Por favor, ingresa un número válido para buscar', false);
        return;
    }

    const secuencia = secuenciaInput.split(',').map(n => parseInt(n.trim()));
    const repeticiones = secuencia.filter(n => n === parseInt(numero)).length;
    mostrarResultado('resultadoRepeticiones', 
        `El número ${numero} aparece ${repeticiones} veces en la secuencia`);
}

function sumarNaturales() {
    const n = document.getElementById('numeroSuma').value;

    if (!validarInput(n, 'rango')) {
        mostrarResultado('resultadoSuma', 
            'Por favor, ingresa un número válido entre 0 y 1000', false);
        return;
    }

    const suma = (parseInt(n) * (parseInt(n) + 1)) / 2;
    mostrarResultado('resultadoSuma', 
        `La suma de los primeros ${n} números naturales es: ${suma}`);
}

function calcularFactorial() {
    const n = document.getElementById('numeroFactorial').value;

    if (!validarInput(n, 'rango') || parseInt(n) > 170) {
        mostrarResultado('resultadoFactorial', 
            'Por favor, ingresa un número válido entre 0 y 170', false);
        return;
    }

    let factorial = 1;
    for(let i = 2; i <= parseInt(n); i++) factorial *= i;
    mostrarResultado('resultadoFactorial', 
        `El factorial de ${n} es: ${factorial}`);
}

function encontrarParesImpares() {
    const inicio = document.getElementById('rangoInicio').value;
    const fin = document.getElementById('rangoFin').value;

    if (!validarInput(inicio, 'rango') || !validarInput(fin, 'rango')) {
        mostrarResultado('resultadoParesImpares', 
            'Por favor, ingresa números válidos entre 0 y 1000', false);
        return;
    }

    if (parseInt(fin) < parseInt(inicio)) {
        mostrarResultado('resultadoParesImpares', 
            'El número final debe ser mayor que el inicial', false);
        return;
    }

    const pares = [];
    const impares = [];
    
    for(let i = parseInt(inicio); i <= parseInt(fin); i++) {
        if(i % 2 === 0) pares.push(i);
        else impares.push(i);
    }
    
    mostrarResultado('resultadoParesImpares', 
        `<strong>Pares:</strong> ${pares.join(', ')}<br><strong>Impares:</strong> ${impares.join(', ')}`);
}

function generarTabla() {
    const numero = document.getElementById('numeroTabla').value;
    const operacion = document.getElementById('operacionTabla').value;

    if (!validarInput(numero, 'rango')) {
        mostrarResultado('resultadoTabla', 
            'Por favor, ingresa un número válido entre 0 y 1000', false);
        return;
    }

    let tabla = '<table class="tabla-resultados">';
    tabla += '<tr><th>Operación</th><th>Resultado</th></tr>';
    
    for(let i = 1; i <= 10; i++) {
        const resultado = operacion === '*' ? parseInt(numero) * i : parseInt(numero) + i;
        tabla += `<tr><td>${numero} ${operacion} ${i}</td><td>${resultado}</td></tr>`;
    }
    
    tabla += '</table>';
    mostrarResultado('resultadoTabla', tabla);
}

function generarFibonacci() {
    const cantidad = document.getElementById('cantidadFibonacci').value;

    if (!validarInput(cantidad, 'rango') || parseInt(cantidad) > 100) {
        mostrarResultado('resultadoFibonacci', 
            'Por favor, ingresa un número válido entre 1 y 100', false);
        return;
    }

    const fibonacci = [0, 1];
    
    for(let i = 2; i < parseInt(cantidad); i++) {
        fibonacci.push(fibonacci[i-1] + fibonacci[i-2]);
    }
    
    mostrarResultado('resultadoFibonacci', 
        `<strong>Secuencia Fibonacci:</strong> ${fibonacci.join(', ')}`);
}

function verificarPrimo() {
    const numero = document.getElementById('numeroPrimo').value;

    if (!validarInput(numero, 'rango')) {
        mostrarResultado('resultadoPrimo', 
            'Por favor, ingresa un número válido entre 0 y 1000', false);
        return;
    }

    const n = parseInt(numero);
    if (n <= 1) {
        mostrarResultado('resultadoPrimo', 
            `${n} no es un número primo`, false);
        return;
    }

    let esPrimo = true;
    for(let i = 2; i <= Math.sqrt(n); i++) {
        if(n % i === 0) {
            esPrimo = false;
            break;
        }
    }
    
    mostrarResultado('resultadoPrimo', 
        `${n} ${esPrimo ? 'es' : 'no es'} un número primo`, 
        esPrimo);
}

function verificarPerfecto() {
    const numero = document.getElementById('numeroPerfecto').value;

    if (!validarInput(numero, 'rango')) {
        mostrarResultado('resultadoPerfecto', 
            'Por favor, ingresa un número válido entre 0 y 1000', false);
        return;
    }

    const n = parseInt(numero);
    if (n <= 1) {
        mostrarResultado('resultadoPerfecto', 
            `${n} no es un número perfecto`, false);
        return;
    }

    let suma = 1;
    for(let i = 2; i <= Math.sqrt(n); i++) {
        if(n % i === 0) {
            suma += i;
            if(i !== n/i) suma += n/i;
        }
    }
    
    const esPerfecto = suma === n;
    mostrarResultado('resultadoPerfecto', 
        `${n} ${esPerfecto ? 'es' : 'no es'} un número perfecto`, 
        esPerfecto);
}

// Función auxiliar para mostrar resultados
function mostrarResultado(elementId, mensaje, esExito = true) {
    const elemento = document.getElementById(elementId);
    elemento.innerHTML = mensaje;
    elemento.className = 'result ' + (esExito ? 'success' : 'error');
    
    // Efecto de aparición suave
    elemento.style.opacity = '0';
    elemento.style.display = 'block';
    setTimeout(() => {
        elemento.style.opacity = '1';
    }, 10);
}

// Función para inicializar validaciones
function inicializarValidaciones() {
    // Validar inputs numéricos
    document.querySelectorAll('input[type="number"]').forEach(input => {
        input.addEventListener('input', function() {
            if (this.value < 0) this.value = 0;
            if (this.value > 1000) this.value = 1000;
        });
    });

    // Validar input de secuencia
    document.getElementById('secuenciaInput').addEventListener('input', function() {
        this.value = this.value.replace(/[^0-9,]/g, '');
    });

    // Añadir tooltips
    document.querySelectorAll('input, select').forEach(element => {
        element.title = element.placeholder || 'Selecciona una opción';
    });
}

// Animaciones para los botones
document.querySelectorAll('.btn-primary').forEach(button => {
    button.addEventListener('mousedown', function() {
        this.style.transform = 'scale(0.95)';
    });

    button.addEventListener('mouseup', function() {
        this.style.transform = 'scale(1)';
    });

    button.addEventListener('mouseleave', function() {
        this.style.transform = 'scale(1)';
    });
});