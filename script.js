// Ejercicio 1: Detector de Palíndromos
function ejercicio1() {
    var textoOriginal = document.getElementById("palindromoInput").value;
    var resultadoDiv = document.getElementById("resultado1");
    
    var textoLimpio = "";
    var textoMinuscula = textoOriginal.toLowerCase();
    
    // Bucle para limpiar espacios y tildes a mano
    for (var i = 0; i < textoMinuscula.length; i++) {
        var letra = textoMinuscula[i];
        
        if (letra === "á") letra = "a";
        if (letra === "é") letra = "e";
        if (letra === "í") letra = "i";
        if (letra === "ó") letra = "o";
        if (letra === "ú") letra = "u";
        
        // Conservar letras básicas y números
        if ((letra >= "a" && letra <= "z") || (letra >= "0" && letra <= "9")) {
            textoLimpio += letra;
        }
    }
    
    if (textoLimpio.length === 0) {
        resultadoDiv.innerHTML = "Por favor, ingresa un texto válido.";
        resultadoDiv.style.color = "#ef4444"; // Rojo error
        return;
    }
    
    // Invertir la cadena
    var textoInvertido = "";
    for (var j = textoLimpio.length - 1; j >= 0; j--) {
        textoInvertido += textoLimpio[j];
    }
    
    // Verificar similitud
    if (textoLimpio === textoInvertido) {
        resultadoDiv.innerHTML = "<strong>Resultado:</strong> Es un palíndromo.";
        resultadoDiv.style.color = "#10b981"; // Verde éxito
    } else {
        resultadoDiv.innerHTML = "<strong>Resultado:</strong> No es un palíndromo.";
        resultadoDiv.style.color = "#ef4444"; // Rojo fallo
    }
}

// Ejercicio 2: Mayor de dos números
function ejercicio2() {
    var n1 = parseFloat(document.getElementById("numero1").value);
    var n2 = parseFloat(document.getElementById("numero2").value);
    var resultadoDiv = document.getElementById("resultado2");
    
    if (isNaN(n1) || isNaN(n2)) {
        resultadoDiv.innerHTML = "Por favor, introduce ambos números.";
        resultadoDiv.style.color = "#ef4444";
        return;
    }
    
    resultadoDiv.style.color = "#764ba2"; // Color neutro por defecto
    
    if (n1 > n2) {
        resultadoDiv.innerHTML = "<strong>Resultado:</strong> El número mayor es " + n1;
    } else if (n2 > n1) {
        resultadoDiv.innerHTML = "<strong>Resultado:</strong> El número mayor es " + n2;
    } else {
        resultadoDiv.innerHTML = "<strong>Resultado:</strong> Ambos números son exactamente iguales.";
    }
}

// Ejercicio 3: Vocales que aparecen en una frase
function ejercicio3() {
    var frase = document.getElementById("frase3Input").value;
    var resultadoDiv = document.getElementById("resultado3");
    
    if (frase.trim() === "") {
        resultadoDiv.innerHTML = "Por favor, escribe una frase.";
        resultadoDiv.style.color = "#ef4444";
        return;
    }
    
    var fraseMin = frase.toLowerCase();
    var vocalesEncontradas = [];
    
    for (var i = 0; i < fraseMin.length; i++) {
        var letra = fraseMin[i];
        
        // Normalizar tildes
        if (letra === "á") letra = "a";
        if (letra === "é") letra = "e";
        if (letra === "í") letra = "i";
        if (letra === "ó") letra = "o";
        if (letra === "ú") letra = "u";
        
        if (letra === "a" || letra === "e" || letra === "i" || letra === "o" || letra === "u") {
            // Evitar meter duplicadas en la lista visual
            if (!vocalesEncontradas.includes(letra)) {
                vocalesEncontradas.push(letra);
            }
        }
    }
    
    if (vocalesEncontradas.length > 0) {
        resultadoDiv.innerHTML = "<strong>Vocales halladas:</strong> " + vocalesEncontradas.join(", ");
        resultadoDiv.style.color = "#667eea";
    } else {
        resultadoDiv.innerHTML = "<strong>Resultado:</strong> No se encontraron vocales en el texto.";
        resultadoDiv.style.color = "#764ba2";
    }
}

// Ejercicio 4: Conteo de frecuencia de vocales
function ejercicio4() {
    var frase = document.getElementById("frase4Input").value;
    var resultadoDiv = document.getElementById("resultado4");
    
    if (frase.trim() === "") {
        resultadoDiv.innerHTML = "Por favor, introduce una frase.";
        resultadoDiv.style.color = "#ef4444";
        return;
    }
    
    var fraseMin = frase.toLowerCase();
    var cantA = 0, cantE = 0, cantI = 0, cantO = 0, cantU = 0;
    
    for (var k = 0; k < fraseMin.length; k++) {
        var letra = fraseMin[k];
        
        if (letra === "a" || letra === "á") cantA++;
        else if (letra === "e" || letra === "é") cantE++;
        else if (letra === "i" || letra === "í") cantI++;
        else if (letra === "o" || letra === "ó") cantO++;
        else if (letra === "u" || letra === "ú") cantU++;
    }
    
    resultadoDiv.style.color = "#333";
    resultadoDiv.innerHTML = "<strong>Frecuencia total:</strong><br>" +
                             "A: " + cantA + " | E: " + cantE + " | I: " + cantI + " | O: " + cantO + " | U: " + cantU;
}
