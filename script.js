function ex1() {
    var t = document.getElementById("i1").value.toLowerCase().replace(/[\s,.]/g, "");
    var r = document.getElementById("r1");
    if(!t) return r.innerHTML = "Escribe algo";
    r.innerHTML = (t === t.split("").reverse().join("")) ? "Es palíndromo" : "No es palíndromo";
}

function ex2() {
    var n1 = parseFloat(document.getElementById("n1").value);
    var n2 = parseFloat(document.getElementById("n2").value);
    var r = document.getElementById("r2");
    if(isNaN(n1) || isNaN(n2)) return r.innerHTML = "Faltan números";
    r.innerHTML = (n1 > n2) ? n1 + " es mayor" : (n2 > n1) ? n2 + " es mayor" : "Son iguales";
}

function ex3() {
    var t = document.getElementById("i3").value.toLowerCase(), r = document.getElementById("r3"), v = "aeiou", e = [];
    if(!t.trim()) return r.innerHTML = "Escribe algo";
    for(var i=0; i<t.length; i++) {
        if(v.indexOf(t[i]) !== -1 && e.indexOf(t[i]) === -1) e.push(t[i]);
    }
    r.innerHTML = e.length ? "Aparecen: " + e.sort().join(", ") : "Sin vocales";
}

function ex4() {
    var t = document.getElementById("i4").value.toLowerCase(), r = document.getElementById("r4"), c = {a:0,e:0,i:0,o:0,u:0}, m = 0;
    if(!t.trim()) return r.innerHTML = "Escribe algo";
    for(var i=0; i<t.length; i++) {
        if(c[t[i]] !== undefined) { c[t[i]]++; m++; }
    }
    r.innerHTML = m ? "A:" + c.a + " | E:" + c.e + " | I:" + c.i + " | O:" + c.o + " | U:" + c.u : "Sin vocales";
}

function ex5() {
    var u = document.getElementById("u").value, e = document.getElementById("e"), c = document.getElementById("c"), p = document.getElementById("p");
    if(!u.trim()) return;
    var x = new XMLHttpRequest();
    e.innerHTML = "0";
    x.onreadystatechange = function() {
        e.innerHTML += " → " + x.readyState;
        if(x.readyState === 4) {
            c.innerHTML = x.status;
            p.innerHTML = (x.status === 200) ? x.responseText.substring(0, 45) + "..." : "Error de red/CORS";
        }
    };
    x.open("GET", u, true);
    x.send();
}
