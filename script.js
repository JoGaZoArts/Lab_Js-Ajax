// 1. Detector de Palíndromos
function verificarPalindromo() {
    var txt = document.getElementById("input-palindromo").value.toLowerCase().replace(/[\s,.]/g, "");
    var inv = txt.split("").reverse().join("");
    var res = document.getElementById("res-palindromo");
    
    if(txt === "") {
        res.innerHTML = "Por favor, escribe un texto.";
        res.className = "output-side error";
        return;
    }
    
    if(txt === inv) {
        res.innerHTML = "¡Sí es un palíndromo!";
        res.className = "output-side success";
    } else {
        res.innerHTML = "No es un palíndromo.";
        res.className = "output-side error";
    }
}

// 2. Mayor de dos Números
function compararNumeros() {
    var n1 = parseFloat(document.getElementById("num1").value);
    var n2 = parseFloat(document.getElementById("num2").value);
    var res = document.getElementById("res-numeros");

    if (isNaN(n1) || isNaN(n2)) {
        res.innerHTML = "Por favor, ingresa ambos números.";
        res.className = "output-side error";
        return;
    }

    res.className = "output-side success";
    if (n1 > n2) {
        res.innerHTML = n1 + " es mayor que " + n2;
    } else if (n2 > n1) {
        res.innerHTML = n2 + " es mayor que " + n1;
    } else {
        res.innerHTML = "Ambos números son iguales (" + n1 + ")";
    }
}

// 3. Vocales que aparecen
function extraerVocales() {
    var txt = document.getElementById("input-vocales-lista").value.toLowerCase();
    var res = document.getElementById("res-vocales-lista");
    
    if(txt.trim() === "") {
        res.innerHTML = "Por favor, escribe una frase.";
        res.className = "output-side error";
        return;
    }
    
    var encontradas = [];
    var vocales = "aeiou";
    for(var i = 0; i < txt.length; i++) {
        if(vocales.indexOf(txt[i]) !== -1 && encontradas.indexOf(txt[i]) === -1) {
            encontradas.push(txt[i]);
        }
    }
    
    if(encontradas.length > 0) {
        res.innerHTML = "Vocales encontradas: " + encontradas.sort().join(", ");
        res.className = "output-side success";
    } else {
        res.innerHTML = "No se encontraron vocales.";
        res.className = "output-side error";
    }
}

// 4. Conteo de cada Vocal
function contarVocales() {
    var txt = document.getElementById("input-vocales-conteo").value.toLowerCase();
    var res = document.getElementById("res-vocales-conteo");
    
    if(txt.trim() === "") {
        res.innerHTML = "Por favor, escribe una frase.";
        res.className = "output-side error";
        return;
    }

    var c = {a: 0, e: 0, i: 0, o: 0, u: 0};
    var total = 0;
    for(var i = 0; i < txt.length; i++) {
        if(c[txt[i]] !== undefined) {
            c[txt[i]]++;
            total++;
        }
    }
    
    if(total > 0) {
        res.innerHTML = "A: " + c.a + " | E: " + c.e + " | I: " + c.i + " | O: " + c.o + " | U: " + c.u;
        res.className = "output-side success text-left";
    } else {
        res.innerHTML = "No se encontraron vocales para contar.";
        res.className = "output-side error";
    }
}

// 5. Petición AJAX con tracking de estados
function ejecutarAJAX() {
    var url = document.getElementById("url-ajax").value;
    var txtEst = document.getElementById("ajax-estados");
    var txtCod = document.getElementById("ajax-codigo");
    var txtRes = document.getElementById("ajax-respuesta");

    if(url.trim() === "") {
        txtEst.innerHTML = "URL vacía.";
        return;
    }

    var xhr = new XMLHttpRequest();
    txtEst.innerHTML = "0"; 
    txtCod.innerHTML = "Cargando...";
    txtRes.innerHTML = "Esperando respuesta...";

    xhr.onreadystatechange = function() {
        txtEst.innerHTML += " → " + xhr.readyState;
        
        if (xhr.readyState === 4) {
            txtCod.innerHTML = xhr.status + " " + xhr.statusText;
            if (xhr.status === 200) {
                txtRes.innerHTML = xhr.responseText.substring(0, 100) + "...";
            } else {
                txtRes.innerHTML = "Error de conexión o bloqueo de políticas CORS al leer la URL.";
            }
        }
    };

    xhr.open("GET", url, true);
    xhr.send();
}
