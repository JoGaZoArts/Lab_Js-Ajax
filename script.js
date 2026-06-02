function limpiarTexto(txt) {
    var orig = "áéíóú", dest = "aeiou", res = "";
    txt = txt.toLowerCase();
    for (var i = 0; i < txt.length; i++) {
        var p = orig.indexOf(txt[i]), c = (p !== -1) ? dest[p] : txt[i];
        if ((c >= "a" && c <= "z") || (c >= "0" && c <= "9")) res += c;
    }
    return res;
}

function ejercicio1() {
    var txt = document.getElementById("palindromoInput").value, res = document.getElementById("resultado1"), lim = limpiarTexto(txt);
    if (!lim) { res.innerHTML = "Texto inválido."; res.style.color = "#ef4444"; return; }
    var inv = lim.split("").reverse().join("");
    res.innerHTML = "<strong>Resultado:</strong> " + (lim === inv ? "Es un palíndromo." : "No es un palíndromo.");
    res.style.color = lim === inv ? "#10b981" : "#ef4444";
}

function ejercicio2() {
    var n1 = parseFloat(document.getElementById("numero1").value), n2 = parseFloat(document.getElementById("numero2").value), res = document.getElementById("resultado2");
    if (isNaN(n1) || isNaN(n2)) { res.innerHTML = "Ingresa ambos números."; res.style.color = "#ef4444"; return; }
    res.style.color = "#1e40af";
    res.innerHTML = "<strong>Resultado:</strong> " + (n1 > n2 ? "El mayor es " + n1 : n2 > n1 ? "El mayor es " + n2 : "Son iguales.");
}

function ejercicio3() {
    var txt = document.getElementById("frase3Input").value, res = document.getElementById("resultado3");
    if (!txt.trim()) { res.innerHTML = "Escribe una frase."; res.style.color = "#ef4444"; return; }
    var lim = limpiarTexto(txt), vocales = [];
    for (var i = 0; i < lim.length; i++) {
        if ("aeiou".indexOf(lim[i]) !== -1 && !vocales.includes(limpio[i])) vocales.push(lim[i]);
    }
    res.innerHTML = vocales.length ? "<strong>Vocales:</strong> " + vocales.join(", ") : "No hay vocales.";
    res.style.color = vocales.length ? "#1e40af" : "#cbd5e1";
}

function ejercicio4() {
    var txt = document.getElementById("frase4Input").value, res = document.getElementById("resultado4");
    if (!txt.trim()) { res.innerHTML = "Escribe una frase."; res.style.color = "#ef4444"; return; }
    var lim = limpiarTexto(txt), c = {a:0, e:0, i:0, o:0, u:0};
    for (var i = 0; i < lim.length; i++) { if (c[lim[i]] !== undefined) c[lim[i]]++; }
    res.style.color = "#2c3e50";
    res.innerHTML = "<strong>Conteo:</strong><br>A: " + c.a + " | E: " + c.e + " | I: " + c.i + " | O: " + c.o + " | U: " + c.u;
}

document.addEventListener("DOMContentLoaded", function() {
    var inputUrl = document.getElementById("ajaxUrlInput");
    if (inputUrl) inputUrl.value = window.location.href;
});

function cargarContenidoAJAX() {
    var url = document.getElementById("ajaxUrlInput").value, est = document.getElementById("ajaxEstados"), cod = document.getElementById("ajaxCodigo"), cab = document.getElementById("ajaxCabeceras"), con = document.getElementById("ajaxContenido");
    if (!url.trim()) { alert("Por favor, ingresa una URL válida."); return; }

    est.innerHTML = "0: Objeto creado (No iniciado)"; cod.innerHTML = ""; cab.innerHTML = ""; con.textContent = "Cargando...";

    var xhr = new XMLHttpRequest(), mapeo = { 1: "1: Cargando (open())", 2: "2: Cargado (send())", 3: "3: Interactivo...", 4: "4: Completado" };

    xhr.onreadystatechange = function() {
        if (mapeo[xhr.readyState]) est.innerHTML += "<br>" + mapeo[xhr.readyState];
        if (xhr.readyState === 4) {
            cod.innerHTML = "Código HTTP: " + xhr.status + " / " + xhr.statusText;
            if (xhr.status === 200 || xhr.status === 0) {
                cod.style.color = "#10b981";
                var headers = xhr.getAllResponseHeaders();
                cab.textContent = headers ? headers : "No hay cabeceras disponibles (Origen Local).";
                con.textContent = xhr.responseText;
            } else {
                cod.style.color = "#ef4444";
                cab.textContent = "No disponibles debido al error.";
                con.textContent = "Error CORS o de red al intentar acceder a la URL.";
            }
        }
    };
    xhr.open("GET", url, true);
    xhr.send();
}
