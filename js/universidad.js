// Manejo de pestañas
document.querySelectorAll('.type-btn').forEach(button => {
    button.addEventListener('click', () => {
        // Remover active de todos los botones y secciones
        document.querySelectorAll('.type-btn').forEach(btn => btn.classList.remove('active'));
        document.querySelectorAll('.exercise-section').forEach(section => section.classList.remove('active'));
        
        // Activar el botón y sección seleccionados
        button.classList.add('active');
        document.getElementById(button.dataset.section).classList.add('active');
    });
});

// Calculadora
function calculate() {
    const num1 = parseFloat(document.getElementById('num1').value);
    const num2 = parseFloat(document.getElementById('num2').value);
    const operation = document.getElementById('operation').value;
    let result;

    switch(operation) {
        case '+': result = num1 + num2; break;
        case '-': result = num1 - num2; break;
        case '*': result = num1 * num2; break;
        case '/': result = num2 !== 0 ? num1 / num2 : 'Error: División por cero';
    }

    document.getElementById('calc-result').textContent = `Resultado: ${result}`;
}

// Conversiones
function convertFromBinary() {
    const binary = document.getElementById('binary-input').value;
    if (!/^[01]+$/.test(binary)) {
        alert('Por favor ingrese un número binario válido');
        return;
    }

    const decimal = parseInt(binary, 2);
    const hex = decimal.toString(16).toUpperCase();

    document.getElementById('hex-result').textContent = hex;
    document.getElementById('decimal-result').textContent = decimal;
}

function convertFromDecimal() {
    const decimal = parseInt(document.getElementById('decimal-input').value);
    if (isNaN(decimal)) {
        alert('Por favor ingrese un número válido');
        return;
    }

    const binary = decimal.toString(2);
    const hex = decimal.toString(16).toUpperCase();

    document.getElementById('decimal-convert-result').innerHTML = 
        `Binario: ${binary}<br>Hexadecimal: ${hex}`;
}

// Análisis de texto
function analyzeText() {
    const text = document.getElementById('text-input').value;
    const chars = text.length;
    const vowels = (text.match(/[aeiouáéíóúAEIOUÁÉÍÓÚ]/g) || []).length;
    const signs = (text.match(/[.,\/#!$%\^&\*;:{}=\-_`~()¿?¡!]/g) || []).length;
    const spaces = (text.match(/\s/g) || []).length;
    const words = text.trim().split(/\s+/).length;
    const digits = (text.match(/\d/g) || []).length;

    document.getElementById('text-analysis-result').innerHTML = `
        Caracteres: ${chars}<br>
        Vocales: ${vowels}<br>
        Signos: ${signs}<br>
        Espacios: ${spaces}<br>
        Palabras: ${words}<br>
        Dígitos: ${digits}<br>
        Texto invertido: ${text.split('').reverse().join('')}
    `;
}

function compareTexts() {
    const phrase1 = document.getElementById('phrase1').value.trim();
    const phrase2 = document.getElementById('phrase2').value.trim();
    
    const words1 = phrase1.split(/\s+/).length;
    const words2 = phrase2.split(/\s+/).length;
    
    let result = '';
    if (words1 > words2) {
        result = `La primera frase tiene más palabras (${words1} vs ${words2})`;
    } else if (words2 > words1) {
        result = `La segunda frase tiene más palabras (${words2} vs ${words1})`;
    } else {
        result = `Ambas frases tienen la misma cantidad de palabras (${words1})`;
    }
    
    document.getElementById('comparison-result').textContent = result;
}

// Funciones para arreglos
function isPrime(num) {
    if (num < 2) return false;
    for (let i = 2; i <= Math.sqrt(num); i++) {
        if (num % i === 0) return false;
    }
    return true;
}

function isPerfect(num) {
    if (num < 1) return false;
    let sum = 0;
    for (let i = 1; i < num; i++) {
        if (num % i === 0) sum += i;
    }
    return sum === num;
}

function findPrimes() {
    const numbers = document.getElementById('array-input').value
        .split(',')
        .map(n => parseInt(n.trim()))
        .filter(n => !isNaN(n));

    const primes = numbers.filter(isPrime);
    document.getElementById('array-result').textContent = 
        `Números primos: ${primes.join(', ') || 'Ninguno'}`;
}

function findPerfectNumbers() {
    const numbers = document.getElementById('array-input').value
        .split(',')
        .map(n => parseInt(n.trim()))
        .filter(n => !isNaN(n));

    const perfect = numbers.filter(isPerfect);
    document.getElementById('array-result').textContent = 
        `Números perfectos: ${perfect.join(', ') || 'Ninguno'}`;
}

function calculateStats() {
    const numbers = document.getElementById('array-input').value
        .split(',')
        .map(n => parseFloat(n.trim()))
        .filter(n => !isNaN(n));

    if (numbers.length === 0) {
        document.getElementById('array-result').textContent = 'Por favor ingrese números válidos';
        return;
    }

    // Calcular promedio
    const average = numbers.reduce((a, b) => a + b) / numbers.length;

    // Calcular moda
    const frequency = {};
    numbers.forEach(num => {
        frequency[num] = (frequency[num] || 0) + 1;
    });

    let maxFreq = 0;
    let moda = [];
    for (let num in frequency) {
        if (frequency[num] > maxFreq) {
            maxFreq = frequency[num];
            moda = [num];
        } else if (frequency[num] === maxFreq) {
            moda.push(num);
        }
    }

    document.getElementById('array-result').innerHTML = `
        Promedio: ${average.toFixed(2)}<br>
        Moda: ${moda.join(', ')} (frecuencia: ${maxFreq})
    `;
}

// Inicializar la primera sección como activa
document.querySelector('.type-btn').click();