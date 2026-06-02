// ============================================
// EJERCICIOS DE JAVASCRIPT
// ============================================

/**
 * Ejercicio 1: Detector de Palíndromos
 * Verifica si una cadena es un palíndromo eliminando espacios, acentos y símbolos
 */
function esPalindromo(cadena) {
    // Limpiar la cadena: quitar espacios, puntuación y pasar a minúsculas
    const cadenaLimpia = cadena.toLowerCase().replace(/[^a-z0-9]/g, '');
    // Invertir la cadena
    const cadenaInvertida = cadenaLimpia.split('').reverse().join('');
    
    return cadenaLimpia === cadenaInvertida 
        ? `"${cadena}" es un palíndromo.` 
        : `"${cadena}" no es un palíndromo.`;
}

function ejercicio1() {
    const input = document.getElementById("palindromoInput").value;
    const resultado = document.getElementById("resultado1");
    
    if (!input.trim()) {
        resultado.textContent = "Por favor, ingresa una cadena.";
        resultado.style.color = "#e74c3c";
        return;
    }
    
    resultado.textContent = esPalindromo(input);
    resultado.style.color = "#27ae60";
}

/**
 * Ejercicio 2: Mayor de dos números
 * Compara dos valores numéricos y retorna el mayor
 */
function evaluarMayor(num1, num2) {
    const n1 = parseFloat(num1);
    const n2 = parseFloat(num2);

    if (isNaN(n1) || isNaN(n2)) {
        return "Por favor, introduce dos números válidos.";
    }

    if (n1 > n2) {
        return `El número mayor es: ${n1}`;
    } else if (n2 > n1) {
        return `El número mayor es: ${n2}`;
    } else {
        return "Ambos números son iguales.";
    }
}

function ejercicio2() {
    const num1 = document.getElementById("numero1").value;
    const num2 = document.getElementById("numero2").value;
    const resultado = document.getElementById("resultado2");
    
    if (!num1 || !num2) {
        resultado.textContent = "Por favor, ingresa ambos números.";
        resultado.style.color = "#e74c3c";
        return;
    }
    
    resultado.textContent = evaluarMayor(num1, num2);
    resultado.style.color = "#2980b9";
}

/**
 * Ejercicio 3: Vocales que aparecen en una frase
 * Extrae las vocales únicas presentes en el texto
 */
function obtenerVocales(frase) {
    const fraseMin = frase.toLowerCase();
    const vocalesEncontradas = new Set();
    const todasLasVocales = ['a', 'e', 'i', 'o', 'u', 'á', 'é', 'í', 'ó', 'ú'];

    for (let letra of fraseMin) {
        if (todasLasVocales.includes(letra)) {
            // Normalizar con tilde si es necesario, o agrupar por vocal base
            vocalesEncontradas.add(letra);
        }
    }

    return vocalesEncontradas.size > 0 
        ? `Las vocales que aparecen son: ${Array.from(vocalesEncontradas).join(', ')}`
        : "No se encontraron vocales.";
}

function ejercicio3() {
    const input = document.getElementById("frase3Input").value;
    const resultado = document.getElementById("resultado3");
    
    if (!input.trim()) {
        resultado.textContent = "Por favor, ingresa una frase.";
        resultado.style.color = "#e74c3c";
        return;
    }
    
    resultado.textContent = obtenerVocales(input);
    resultado.style.color = "#8e44ad";
}

/**
 * Ejercicio 4: Conteo de frecuencia de vocales
 * Cuenta cuántas veces aparece cada vocal en el texto
 */
function contarVocales(frase) {
    const fraseMin = frase.toLowerCase();
    const conteo = { a: 0, e: 0, i: 0, o: 0, u: 0 };
    
    // Mapeo básico para incluir vocales con tilde en el conteo general
    const mapaTildes = { 'á': 'a', 'é': 'e', 'í': 'i', 'ó': 'o', 'ú': 'u' };

    for (let letra of fraseMin) {
        let letraLimpia = mapaTildes[letra] || letra;
        if (conteo.hasOwnProperty(letraLimpia)) {
            conteo[letraLimpia]++;
        }
    }

    return `Frecuencia de vocales:<br>` +
           `A: ${conteo.a} | E: ${conteo.e} | I: ${conteo.i} | O: ${conteo.o} | U: ${conteo.u}`;
}

function ejercicio4() {
    const input = document.getElementById("frase4Input").value;
    const resultado = document.getElementById("resultado4");
    
    if (!input.trim()) {
        resultado.textContent = "Por favor, ingresa una frase.";
        resultado.style.color = "#e74c3c";
        return;
    }
    
    resultado.innerHTML = contarVocales(input);
    resultado.style.color = "#c0392b";
}

// ============================================
// EJERCICIOS DE AJAX
// ============================================

/**
 * Esperar a que el DOM esté completamente cargado
 * Inicializar valores por defecto y listeners de eventos
 */
document.addEventListener("DOMContentLoaded", () => {
    // 1. Al cargar la página, mostrar por defecto la URL actual en el input
    const inputUrl = document.getElementById("urlInput");
    if (inputUrl) {
        inputUrl.value = window.location.href;
    }

    const botonMostrar = document.getElementById("btnMostrar");
    if (botonMostrar) {
        botonMostrar.addEventListener("click", ejecutarAjax);
    }
});

/**
 * Función principal para ejecutar peticiones AJAX
 * Gestiona los 5 ejercicios AJAX (Criterios 5-9)
 */
function ejecutarAjax() {
    const url = document.getElementById("urlInput").value;
    const zonaContenidos = document.getElementById("zonaContenidos");
    const zonaEstados = document.getElementById("zonaEstados");
    const zonaCabeceras = document.getElementById("zonaCabeceras");
    const zonaCodigo = document.getElementById("zonaCodigo");

    // Validar que la URL sea válida
    if (!url.trim()) {
        zonaEstados.innerHTML = "<p style='color: #e74c3c;'><strong>Error:</strong> Por favor, ingresa una URL válida.</p>";
        return;
    }

    // Crear la instancia del objeto XMLHttpRequest
    const xhr = new XMLHttpRequest();

    // Mapeo de los códigos de estado de la petición (ReadyState)
    const estadosXHR = {
        0: "0: No iniciada (Object created but open() not called yet).",
        1: "1: Cargando (open() has been called).",
        2: "2: Cargado (send() has been called, headers and status are available).",
        3: "3: Interactivo (Downloading; responseText holds partial data).",
        4: "4: Completada (The operation is complete)."
    };

    // 3. Monitorear los estados en todo momento (Criterio 7)
    xhr.onreadystatechange = function() {
        // Crear elemento para mostrar cada cambio de estado
        const parrafoEstado = document.createElement("p");
        parrafoEstado.textContent = estadosXHR[xhr.readyState] || `Estado desconocido: ${xhr.readyState}`;
        parrafoEstado.style.margin = "5px 0";
        
        // Color diferenciado según el estado
        if (xhr.readyState === 4) {
            parrafoEstado.style.color = "#27ae60";
            parrafoEstado.style.fontWeight = "bold";
        } else if (xhr.readyState >= 2) {
            parrafoEstado.style.color = "#f39c12";
        }
        
        zonaEstados.appendChild(parrafoEstado);

        // Cuando la petición ha finalizado (Estado 4)
        if (xhr.readyState === 4) {
            
            // 5. Mostrar el código y texto de estado del servidor (Criterio 9)
            zonaCodigo.innerHTML = `<strong>Código:</strong> ${xhr.status} <br> <strong>Texto:</strong> ${xhr.statusText}`;

            // 4. Mostrar todas las cabeceras HTTP de la respuesta (Criterio 8)
            const headersText = xhr.getAllResponseHeaders();
            zonaCabeceras.textContent = headersText || "No hay cabeceras disponibles";

            // 2. Mostrar el contenido de la respuesta si el estado es OK (200) o local (0)
            if (xhr.status === 200 || xhr.status === 0) {
                // Inyectar de manera segura como texto (no como HTML para evitar XSS)
                zonaContenidos.textContent = xhr.responseText;
            } else {
                zonaContenidos.innerHTML = `<span style="color: #e74c3c;"><strong>Error:</strong> No se pudo descargar el contenido. Código de respuesta del servidor: ${xhr.status}</span>`;
            }
        }
    };

    // Manejo de errores de conexión
    xhr.onerror = function() {
        const errorParrafo = document.createElement("p");
        errorParrafo.textContent = "⚠️ Error de conexión o restricción CORS";
        errorParrafo.style.color = "#e74c3c";
        errorParrafo.style.fontWeight = "bold";
        zonaEstados.appendChild(errorParrafo);
        zonaContenidos.innerHTML = `<span style="color: #e74c3c;"><strong>Error:</strong> No se pudo establecer conexión con el servidor. Verifica la URL y los permisos CORS.</span>`;
    };

    // Limpiar paneles antes de una nueva petición
    zonaEstados.innerHTML = "<strong style='display: block; margin-bottom: 10px;'>Estados de la petición:</strong>";
    zonaContenidos.textContent = "Cargando...";
    zonaContenidos.style.color = "#667eea";
    zonaCabeceras.textContent = "";
    zonaCodigo.textContent = "";

    // Configurar e iniciar la petición asíncrona (GET)
    try {
        xhr.open("GET", url, true);
        xhr.send();
    } catch (error) {
        const errorParrafo = document.createElement("p");
        errorParrafo.textContent = `❌ Error de conexión / CORS: ${error.message}`;
        errorParrafo.style.color = "#e74c3c";
        errorParrafo.style.fontWeight = "bold";
        zonaEstados.appendChild(errorParrafo);
    }
}
