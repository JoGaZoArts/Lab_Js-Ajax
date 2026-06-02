function ex1() {
    var txt = document.getElementById("input1").value.toLowerCase().replace(/[\s,.]/g, "");
    var inv = txt.split("").reverse().join("");
    var res = document.getElementById("res1");
    if(txt === "") return res.innerHTML = "Escribe algo";
    res.innerHTML = (txt === inv) ? "Sí es palíndromo" : "No es palíndromo";
}

function ex2() {
    var n1 = parseFloat(document.getElementById("num1").value);
    var n2 = parseFloat(document.getElementById("num2").value);
    var res = document.getElementById("res2");
    if (isNaN(n1) || isNaN(n2)) return res.innerHTML = "Faltan números";
    if (n1 > n2) res.innerHTML = n1 + " es mayor";
    else if (n2 > n1) res.innerHTML = n2 + " es mayor";
    else res.innerHTML = "Son iguales";
}

function ex3() {
    var txt = document.getElementById("input3").value.toLowerCase();
    var res = document.getElementById("res3");
    if(txt.trim() === "") return res.innerHTML = "Escribe algo";
    
    var encontradas = [];
    var vocales = "aeiou";
    for(var i=0; i<txt.length; i++) {
        if(vocales.includes(txt[i]) && !encontradas.includes(txt[i])) {
            encontradas.push(txt[i]);
        }
    }
    res.innerHTML = encontradas.length ? "Aparecen: " + encontradas.join(", ") : "No hay vocales";
}

function ex4() {
    var txt = document.getElementById("input4").value.toLowerCase();
    var res = document.getElementById("res4");
    if(txt.trim() === "") return res.innerHTML = "Escribe algo";

    var c = {a:0, e:0, i:0, o:0, u:0};
    for(var i=0; i<txt.length; i++) {
        if(c[txt[i]] !== undefined) c[txt[i]]++;
    }
    res.innerHTML = `A: ${c.a} | E: ${c.e} | I: ${c.i} | O: ${c.o} | U: ${c.u}`;
}

function ex5() {
    var url = document.getElementById("url").value;
    var txtEst = document.getElementById("estados");
    var txtCod = document.getElementById("codigo");
    var txtRes = document.getElementById("respuesta");

    var xhr = new XMLHttpRequest();
    txtEst.innerHTML = "0";

    xhr.onreadystatechange = function() {
        txtEst.innerHTML += " -> " + xhr.readyState;
        if (xhr.readyState === 4) {
            txtCod.innerHTML = xhr.status;
            txtRes.innerHTML = xhr.responseText.substring(0, 50) + "...";
        }
    };

    xhr.open("GET", url, true);
    xhr.send();
}
