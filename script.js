// 1. Detector de Palíndromos
function ex1() {
    var txt = document.getElementById("input1").value.toLowerCase().replace(/[\s,.]/g, "");
    var inv = txt.split("").reverse().join("");
    var res = document.getElementById("res1");
    
    if(txt.trim() === "") {
        res.innerHTML = "Error: Caja vacía.";
        res.className = "output-side error";
        return;
    }
    
    if(txt === inv) {
        res.innerHTML = "Confirmado: Es palíndromo.";
        res.className = "output-side success";
    } else {
        res.innerHTML = "Resultado: No es palíndromo.";
        res.className = "output-side error";
    }
}

// 2. Mayor de dos números
function ex2() {
    var n1 = parseFloat(document.getElementById("num1").value);
    var n2 = parseFloat(document.getElementById("num2").value);
    var res = document.getElementById("res2");

    if (isNaN(n1) || isNaN(n2)) {
        res.innerHTML = "Error: Faltan números.";
        res.className = "output-side error";
        return;
    }

    res.className = "output-side success";
    if (n1 > n2) res.innerHTML = "El número " + n1 + " es mayor.";
    else if (n2 > n1) res.innerHTML = "El número " + n2 + " es mayor.";
    else res.innerHTML = "Ambos números son iguales.";
}

// 3. Vocales que aparecen
function ex3() {
    var txt = document.getElementById("input3").value.toLowerCase();
    var res = document.getElementById("res3");
    
    if(txt.trim() === "") {
        res.innerHTML = "Error: Caja vacía.";
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
        res.innerHTML = "Vocales detectadas: " + encontradas.sort().join(", ");
        res.className = "output-side success";
    } else {
        res.innerHTML = "No se encontraron vocales.";
        res.className = "output-side error";
    }
}

// 4. Conteo de cada vocal
function ex4() {
    var txt = document.getElementById("input4").value.toLowerCase();
    var res = document.getElementById("res4");
    
    if(txt.trim() === "") {
        res.innerHTML = "Error: Caja vacía.";
        res.className = "output-side error";
        return;
    }

    var c = {a:0, e:0, i:0, o:0, u:0};
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
        res.innerHTML = "No hay vocales para contar.";
        res.className = "output-side error";
    }
}

// 5. AJAX con tracking de estados
function ex5() {
    var url = document.getElementById("url").value;
    var txtEst = document.getElementById("estados");
    var txtCod = document.getElementById("codigo");
    var txtRes = document.getElementById("respuesta");

    if(url.trim() === "") {
        txtEst.innerHTML = "Error: URL vacía.";
        return;
    }

    var xhr = new XMLHttpRequest();
    txtEst.innerHTML = "0";
    txtCod.innerHTML = "-";
    txtRes.innerHTML = "Cargando...";

    xhr.onreadystatechange = function() {
        txtEst.innerHTML += " → " + xhr.readyState;
        
        if (xhr.readyState === 4) {
            txtCod.innerHTML = xhr.status + " (" + xhr.statusText + ")";
            if (xhr.status === 200) {
                txtRes.innerHTML = xhr.responseText.substring(0, 60) + "...";
            } else {
                txtRes.innerHTML = "No se pudo acceder al recurso (Posible bloqueo CORS o error de red).";
            }
        }
    };

    try {
        xhr.open("GET", url, true);
        xhr.send();
    } catch(e) {
        txtRes.innerHTML = "Error al abrir la conexión: " + e.message;
    }
}
