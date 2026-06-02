// ==========================================
// FUNCIÓN CENTRAL DE SANITIZACIÓN DE TEXTO
// ==========================================
function limpiarTexto(txt) {
    var orig = "áéíóúüñ", dest = "aeiouun", res = "";
    txt = txt.toLowerCase();
    for (var i = 0; i < txt.length; i++) {
        var p = orig.indexOf(txt[i]);
        var c = (p !== -1) ? dest[p] : txt[i];
        if ((c >= "a" && c <= "z") || (c >= "0" && c <= "9")) {
            res += c;
        }
    }
    return res;
}

// ==========================================
// 1. LÓGICA DEL PALÍNDROMO
// ==========================================
function verificarPalindromo() {
    var input = document.getElementById("txt-palindromo").value;
    var out = document.getElementById("out-palindromo");

    if (input.trim() === "") {
        out.textContent = "Error: Por favor, escribe una palabra o frase.";
        out.className = "output-side error";
        return;
    }

    var textoLimpio = limpiarTexto(input);
    var textoInvertido = textoLimpio.split("").reverse().join("");

    if (textoLimpio === textoInvertido) {
        out.textContent = "Confirmado: Es un palíndromo.";
        out.className = "output-side success";
    } else {
        out.textContent = "Resultado: No es un palíndromo.";
        out.className = "output-side error";
    }
}

// ==========================================
// 2. LÓGICA DEL NÚMERO MAYOR
// ==========================================
function calcularMayor() {
    var val1 = document.getElementById("num1").value;
    var val2 = document.getElementById("num2").value;
    var out = document.getElementById("out-mayor");

    if (val1 === "" || val2 === "") {
        out.textContent = "Error: Ambos campos numéricos deben tener valores.";
        out.className = "output-side error";
        return;
    }

    var n1 = parseFloat(val1);
    var n2 = parseFloat(val2);

    if (isNaN(n1) || isNaN(n2)) {
        out.textContent = "Error: Ingrese valores numéricos válidos.";
        out.className = "output-side error";
        return;
    }

    if (n1 > n2) {
        out.textContent = "Resultado: El primer número (" + n1 + ") es mayor que el segundo (" + n2 + ").";
        out.className = "output-side success";
    } else if (n2 > n1) {
        out.textContent = "Resultado: El segundo número (" + n2 + ") es mayor que el primero (" + n1 + ").";
        out.className = "output-side success";
    } else {
        out.textContent = "Resultado: Ambos números son exactamente iguales (" + n1 + ").";
        out.className = "output-side success";
    }
}

// ==========================================
// 3. LÓGICA DE LAS VOCALES
// ==========================================
function analizarVocales() {
    var input = document.getElementById("txt-vocales").value;
    var out = document.getElementById("out-vocales");

    if (input.trim() === "") {
        out.textContent = "Error: Por favor, introduce un texto para analizar.";
        out.className = "output-side error";
        return;
    }

    var texto = input.toLowerCase();
    var vocalesValidas = "aeiouáéíóúü";
    var mapaEquivalencia = { 'á': 'a', 'é': 'e', 'í': 'i', 'ó': 'o', 'ú': 'u', 'ü': 'u' };
    
    var unicas = [];
    var conteo = { a: 0, e: 0, i: 0, o: 0, u: 0 };
    var totalVocales = 0;

    for (var i = 0; i < texto.length; i++) {
        var letra = texto[i];
        if (vocalesValidas.indexOf(letra) !== -1) {
            var letraNormalizada = mapaEquivalencia[letra] || letra;
            conteo[letraNormalizada]++;
            totalVocales++;
            if (unicas.indexOf(letraNormalizada) === -1) {
                unicas.push(letraNormalizada);
            }
        }
    }

    if (totalVocales === 0) {
        out.textContent = "Resultado: No se encontraron vocales en la frase.";
        out.className = "output-side error";
        return;
    }

    var mensaje = "Vocales únicas encontradas: [ " + unicas.sort().join(", ") + " ]\n\n";
    mensaje += "Conteo individual:\n";
    mensaje += "A: " + conteo.a + " | E: " + conteo.e + " | I: " + conteo.i + " | O: " + conteo.o + " | U: " + conteo.u + "\n\n";
    mensaje += "Total de vocales procesadas: " + totalVocales;

    out.style.whiteSpace = "pre-wrap";
    out.textContent = mensaje;
    out.className = "output-side success";
}

// ==========================================
// 4. LÓGICA DEL MÓDULO AJAX (XMLHttpRequest)
// ==========================================
function ejecutarAJAX() {
    var url = document.getElementById("url-ajax").value;
    
    var panelEstados = document.getElementById("ajax-estados");
    var panelCodigo = document.getElementById("ajax-codigo");
    var panelCabeceras = document.getElementById("ajax-cabeceras");
    var panelContenido = document.getElementById("ajax-contenido");

    if (url.trim() === "") {
        panelEstados.textContent = "Error: Ingrese una URL válida.";
        return;
    }

    panelEstados.innerHTML = "";
    panelCodigo.textContent = "Cargando...";
    panelCabeceras.textContent = "Cargando...";
    panelContenido.textContent = "Cargando...";

    var mapeoEstados = {
        0: "0: Objeto Creado (Uninitialized)",
        1: "1: Conexión abierta con open() (Loading)",
        2: "2: Petición enviada con send() (Loaded)",
        3: "3: Intercambio interactivo de datos (Interactive)",
        4: "4: Operación completada (Completed)"
    };

    var xhr = new XMLHttpRequest();

    // Estado 0 ocurre al instanciar
    if (mapeoEstados[xhr.readyState]) {
        panelEstados.innerHTML += mapeoEstados[xhr.readyState] + "<br>";
    }

    xhr.onreadystatechange = function() {
        if (mapeoEstados[xhr.readyState]) {
            panelEstados.innerHTML += mapeoEstados[xhr.readyState] + "<br>";
        }

        if (xhr.readyState === 4) {
            panelCodigo.textContent = "Status: " + xhr.status + " / " + xhr.statusText;
            
            if (xhr.status === 200 || xhr.status === 0) {
                panelCodigo.style.color = "#166534";
                
                var headers = xhr.getAllResponseHeaders();
                panelCabeceras.textContent = headers ? headers : "No hay cabeceras (Origen Local / Restringido).";
                panelContenido.textContent = xhr.responseText;
            } else {
                panelCodigo.style.color = "#991b1b";
                panelCabeceras.textContent = "No disponibles debido al error.";
                panelContenido.textContent = "Error de red o restricción CORS al intentar leer el recurso.";
            }
        }
    };

    try {
        xhr.open("GET", url, true);
        xhr.send();
    } catch (e) {
        panelEstados.innerHTML += "Error fatal en la conexión.";
        panelCodigo.textContent = "Error";
        panelCabeceras.textContent = "-";
        panelContenido.textContent = e.message;
    }
}
