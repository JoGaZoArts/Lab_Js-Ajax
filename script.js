// ==========================================
// PARTE 1: LÓGICA DE LOS 4 EJERCICIOS
// ==========================================

// Ejercicio 1: Detector de Palíndromos
function ejercicio1() {
    var input = document.getElementById("palindromoInput").value;
    var resultado = document.getElementById("resultado1");
    
    if (input.trim() === "") {
        resultado.innerText = "Por favor, ingresa una cadena.";
        resultado.style.color = "#ef4444";
        return;
    }
    
    // Limpieza manual y tradicional del texto
    var cadenaLimpia = "";
    var textoMinuscula = input.toLowerCase();
    
    for (var i = 0; i < textoMinuscula.length; i++) {
        var letra = textoMinuscula[i];
        
        // Quitar tildes manualmente
        if (letra === "á") letra = "a";
        if (letra === "é") letra = "e";
        if (letra === "í") letra = "i";
        if (letra === "ó") letra = "o";
        if (letra === "ú") letra = "u";
        
        // Solo guardar letras del abecedario o números
        if ((letra >= "a" && letra <= "z") || (letra >= "0" && letra <= "9")) {
            cadenaLimpia += letra;
        }
    }
    
    // Invertir el texto usando un ciclo for inverso
    var cadenaInvertida = "";
    for (var j = cadenaLimpia.length - 1; j >= 0; j--) {
        cadenaInvertida += cadenaLimpia[j];
    }
    
    // Comparar e imprimir
    if (cadenaLimpia === cadenaInvertida) {
        resultado.innerText = '¡Sí es un palíndromo!';
        resultado.style.color = "#10b981"; // Verde
    } else {
        resultado.innerText = 'No es un palíndromo.';
        resultado.style.color = "#ef4444"; // Rojo
    }
}

// Ejercicio 2: Mayor de dos números
function ejercicio2() {
    var num1 = parseFloat(document.getElementById("numero1").value);
    var num2 = parseFloat(document.getElementById("numero2").value);
    var resultado = document.getElementById("resultado2");
    
    if (isNaN(num1) || isNaN(num2)) {
        resultado.innerText = "Por favor, ingresa ambos números.";
        resultado.style.color = "#ef4444";
        return;
    }
    
    resultado.style.color = "#4f46e5"; // Color azul/morado base
    if (num1 > num2) {
        resultado.innerText = "El número mayor es: " + num1;
    } else if (num2 > num1) {
        resultado.innerText = "El número mayor es: " + num2;
    } else {
        resultado.innerText = "Ambos números son iguales.";
    }
}

// Ejercicio 3: Vocales que aparecen en una frase
function ejercicio3() {
    var frase = document.getElementById("frase3Input").value;
    var resultado = document.getElementById("resultado3");
    
    if (frase.trim() === "") {
        resultado.innerText = "Por favor, ingresa una frase.";
        resultado.style.color = "#ef4444";
        return;
    }
    
    var fraseMin = frase.toLowerCase();
    var encontradas = [];
    
    for (var i = 0; i < fraseMin.length; i++) {
        var caracter = fraseMin[i];
        
        // Normalizar tildes para no repetir la vocal
        if (caracter === "á") caracter = "a";
        if (caracter === "é") caracter = "e";
        if (caracter === "í") caracter = "i";
        if (caracter === "ó") caracter = "o";
        if (caracter === "ú") caracter = "u";
        
        if (caracter === "a" || caracter === "e" || caracter === "i" || caracter === "o" || caracter === "u") {
            // Validar que no la hayamos metido antes en el arreglo
            if (!encontradas.includes(caracter)) {
                encontradas.push(caracter);
            }
        }
    }
    
    if (encontradas.length > 0) {
        resultado.innerText = "Vocales encontradas: " + encontradas.join(", ");
        resultado.style.color = "#4f46e5";
    } else {
        resultado.innerText = "No se encontraron vocales.";
        resultado.style.color = "#ef4444";
    }
}

// Ejercicio 4: Conteo de frecuencia de vocales
function ejercicio4() {
    var frase = document.getElementById("frase4Input").value;
    var resultado = document.getElementById("resultado4");
    
    if (frase.trim() === "") {
        resultado.innerText = "Por favor, ingresa una frase.";
        resultado.style.color = "#ef4444";
        return;
    }
    
    var fraseMin = frase.toLowerCase();
    var a = 0, e = 0, i = 0, o = 0, u = 0;
    
    for (var k = 0; k < fraseMin.length; k++) {
        var letra = fraseMin[k];
        
        if (letra === "a" || letra === "á") a++;
        else if (letra === "e" || letra === "é") e++;
        else if (letra === "i" || letra === "í") i++;
        else if (letra === "o" || letra === "ó") o++;
        else if (letra === "u" || letra === "ú") u++;
    }
    
    resultado.innerHTML = "A: " + a + " | E: " + e + " | I: " + i + " | O: " + o + " | U: " + u;
    resultado.style.color = "#4f46e5";
}


// ==========================================
// PARTE 2: LÓGICA DE LA LISTA DE TAREAS
// ==========================================

var listaDeTareas = [];

function agregarTarea() {
    var input = document.getElementById("nuevaTareaInput");
    var texto = input.value;

    if (texto === "" || texto.trim() === "") {
        alert("Por favor, escribe el contenido de la tarea.");
        return;
    }

    var nuevaTarea = {
        nombre: texto,
        completada: false
    };

    listaDeTareas.push(nuevaTarea);
    input.value = "";
    dibujarTareas();
}

function dibujarTareas() {
    var contenedorUL = document.getElementById("listaTareas");
    contenedorUL.innerHTML = "";
    var contadorTerminadas = 0;

    for (var i = 0; i < listaDeTareas.length; i++) {
        var tareaActual = listaDeTareas[i];

        var li = document.createElement("li");
        li.className = "todo-item";
        
        if (tareaActual.completada === true) {
            li.className = "todo-item completed";
            contadorTerminadas++;
        }

        var checkbox = document.createElement("input");
        checkbox.type = "checkbox";
        checkbox.className = "check-box";
        checkbox.checked = tareaActual.completada;
        checkbox.setAttribute("onclick", "cambiarEstado(" + i + ")");

        var divTexto = document.createElement("div");
        divTexto.className = "todo-text";
        divTexto.innerText = tareaActual.nombre;

        var botonBorrar = document.createElement("button");
        botonBorrar.className = "btn-borrar-item";
        botonBorrar.innerHTML = "&times;";
        botonBorrar.setAttribute("onclick", "eliminarUnaTarea(" + i + ")");

        li.appendChild(checkbox);
        li.appendChild(divTexto);
        li.appendChild(botonBorrar);
        contenedorUL.appendChild(li);
    }

    document.getElementById("txtTotales").innerText = listaDeTareas.length;
    document.getElementById("txtTerminadas").innerText = contadorTerminadas;
}

function cambiarEstado(posicion) {
    if (listaDeTareas[posicion].completada === true) {
        listaDeTareas[posicion].completada = false;
    } else {
        listaDeTareas[posicion].completada = true;
    }
    dibujarTareas();
}

function eliminarUnaTarea(posicion) {
    listaDeTareas.splice(posicion, 1);
    dibujarTareas();
}

function limpiarCompletadas() {
    var tareasPendientes = [];
    for (var i = 0; i < listaDeTareas.length; i++) {
        if (listaDeTareas[i].completada === false) {
            tareasPendientes.push(listaDeTareas[i]);
        }
    }
    listaDeTareas = tareasPendientes;
    dibujarTareas();
}
