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
