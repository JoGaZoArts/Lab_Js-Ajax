// Función global para limpiar texto
function limpiarTexto(txt) {
    var origen = "áéíóú", destino = "aeiou", limpio = "";
    txt = txt.toLowerCase();
    for (var i = 0; i < txt.length; i++) {
        var pos = origen.indexOf(txt[i]);
        var letra = (pos !== -1) ? destino[pos] : txt[i];
        if ((letra >= "a" && letra <= "z") || (letra >= "0" && letra <= "9")) limpio += letra;
    }
    return limpio;
}

function ejercicio1() {
    var txt = document.getElementById("palindromoInput").value;
    var res = document.getElementById("resultado1");
    var limpio = limpiarTexto(txt);
    
    if (!limpio) { res.innerHTML = "Texto inválido."; res.style.color = "#ef4444"; return; }
    
    var inv = "";
    for (var i = limpio.length - 1; i >= 0; i--) inv += limpio[i];
    
    var esPal = (limpio === inv);
    res.innerHTML = "<strong>Resultado:</strong> " + (esPal ? "Es un palíndromo." : "No es un palíndromo.");
    res.style.color = esPal ? "#10b981" : "#ef4444";
}

function ejercicio2() {
    var n1 = parseFloat(document.getElementById("numero1").value);
    var n2 = parseFloat(document.getElementById("numero2").value);
    var res = document.getElementById("resultado2");
    
    if (isNaN(n1) || isNaN(n2)) { res.innerHTML = "Ingresa ambos números."; res.style.color = "#ef4444"; return; }
    
    res.style.color = "#1e40af";
    if (n1 > n2) res.innerHTML = "<strong>Resultado:</strong> El mayor es " + n1;
    else if (n2 > n1) res.innerHTML = "<strong>Resultado:</strong> El mayor es " + n2;
    else res.innerHTML = "<strong>Resultado:</strong> Son iguales.";
}

function ejercicio3() {
    var txt = document.getElementById("frase3Input").value;
    var res = document.getElementById("resultado3");
    if (!txt.trim()) { res.innerHTML = "Escribe una frase."; res.style.color = "#ef4444"; return; }
    
    var limpio = limpiarTexto(txt), vocales = [];
    for (var i = 0; i < limpio.length; i++) {
        if ("aeiou".indexOf(limpio[i]) !== -1 && !vocales.includes(limpio[i])) vocales.push(limpio[i]);
    }
    res.innerHTML = vocales.length ? "<strong>Vocales:</strong> " + vocales.join(", ") : "No hay vocales.";
    res.style.color = vocales.length ? "#1e40af" : "#cbd5e1";
}

function ejercicio4() {
    var txt = document.getElementById("frase4Input").value;
    var res = document.getElementById("resultado4");
    if (!txt.trim()) { res.innerHTML = "Escribe una frase."; res.style.color = "#ef4444"; return; }
    
    var limpio = limpiarTexto(txt), c = {a:0, e:0, i:0, o:0, u:0};
    for (var i = 0; i < limpio.length; i++) {
        if (c[limpio[i]] !== undefined) c[limpio[i]]++;
    }
    res.style.color = "#2c3e50";
    res.innerHTML = "<strong>Conteo:</strong><br>A: " + c.a + " | E: " + c.e + " | I: " + c.i + " | O: " + c.o + " | U: " + c.u;
}
// Criterio 5: Al cargar el documento, la URL por defecto es la de la propia página
document.addEventListener("DOMContentLoaded", function() {
    var inputUrl = document.getElementById("ajaxUrlInput");
    if (inputUrl) {
        inputUrl.value = window.location.href;
    }
});

// Criterios 6, 7, 8 y 9: Petición AJAX nativa con XMLHttpRequest
function cargarContenidoAJAX() {
    var url = document.getElementById("ajaxUrlInput").value;
    var divEstados = document.getElementById("ajaxEstados");
    var divCodigo = document.getElementById("ajaxCodigo");
    var divCabeceras = document.getElementById("ajaxCabeceras");
    var preContenido = document.getElementById("ajaxContenido");

    if (!url.trim()) { alert("Por favor, ingresa una URL válida."); return; }

    // Limpiamos los contenedores antes de iniciar
    divEstados.innerHTML = "0: Objeto creado (No iniciado)";
    divCodigo.innerHTML = "";
    divCabeceras.innerHTML = "";
    preContenido.textContent = "Cargando...";

    var xhr = new XMLHttpRequest();
    
    // Nombres de los estados tradicionales de readyState
    var mapeoEstados = {
        1: "1: Cargando (open() invocado)",
        2: "2: Cargado (send() invocado, cabeceras disponibles)",
        3: "3: Interactivo (Descargando datos parciales)",
        4: "4: Completado (Operación finalizada)"
    };

    // Criterio 7: Monitorear el cambio de estados en tiempo real
    xhr.onreadystatechange = function() {
        if (mapeoEstados[xhr.readyState]) {
            divEstados.innerHTML += "<br>" + mapeoEstados[xhr.readyState];
        }

        // Cuando la petición termina (Estado 4)
        if (xhr.readyState === 4) {
            // Criterio 9: Mostrar código numérico y texto de estado HTTP
            divCodigo.innerHTML = "Código HTTP: " + xhr.status + " / " + xhr.statusText;
            
            if (xhr.status === 200 || xhr.status === 0) {
                divCodigo.style.color = "#10b981"; // Verde éxito
                
                // Criterio 8: Obtener y mostrar cabeceras HTTP de la respuesta
                var headers = xhr.getAllResponseHeaders();
                divCabeceras.textContent = headers ? headers : "No hay cabeceras disponibles (Origen Local/File).";
                
                // Criterio 6: Mostrar el contenido descargado
                preContenido.textContent = xhr.responseText;
            } else {
                divCodigo.style.color = "#ef4444"; // Rojo error
                divCabeceras.textContent = "No disponibles debido al error.";
                preContenido.textContent = "Error CORS o de red: No se pudo acceder al contenido de esa URL externa externa desde el navegador.";
            }
        }
    };

    // Inicializar y enviar la petición asincrónica (true)
    xhr.open("GET", url, true);
    xhr.send();
}
