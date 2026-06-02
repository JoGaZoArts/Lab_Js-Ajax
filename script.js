// Variable global para almacenar los textos de las tareas y sus estados
var listaDeTareas = [];

// Función para añadir una tarea desde el input
function agregarTarea() {
    var input = document.getElementById("nuevaTareaInput");
    var texto = input.value;

    // Validación básica: que no esté vacío
    if (texto === "" || texto.trim() === "") {
        alert("Por favor, escribe una tarea.");
        return;
    }

    // Crear un objeto sencillo para la tarea
    var nuevaTarea = {
        nombre: texto,
        completada: false
    };

    // Guardar en nuestro arreglo global
    listaDeTareas.push(nuevaTarea);

    // Limpiar el campo de texto y actualizar la pantalla
    input.value = "";
    dibujarTareas();
}

// Función encargada de pintar los elementos en el HTML
function dibujarTareas() {
    var contenedorUL = document.getElementById("listaTareas");
    
    // Limpiar contenido viejo para no duplicar
    contenedorUL.innerHTML = "";

    var contadorTerminadas = 0;

    // Recorrer el arreglo con un bucle for clásico
    for (var i = 0; i < listaDeTareas.length; i++) {
        var tareaActual = listaDeTareas[i];

        // Crear la fila <li>
        var li = document.createElement("li");
        li.className = "todo-item";
        
        // Si la tarea está marcada como completada, aplicar la clase CSS correspondiente
        if (tareaActual.completada === true) {
            li.className = "todo-item completed";
            contadorTerminadas++;
        }

        // Crear el Checkbox manual y configurar su evento pasándole la posición actual (i)
        var checkbox = document.createElement("input");
        checkbox.type = "checkbox";
        checkbox.className = "check-box";
        checkbox.checked = tareaActual.completada;
        checkbox.setAttribute("onclick", "cambiarEstado(" + i + ")");

        // Crear el contenedor de texto de la tarea
        var divTexto = document.createElement("div");
        divTexto.className = "todo-text";
        divTexto.innerText = tareaActual.nombre;

        // Crear el botón de eliminar clásico
        var botonBorrar = document.createElement("button");
        botonBorrar.className = "btn-borrar-item";
        botonBorrar.innerHTML = "&times;"; // Dibuja una equis (X)
        botonBorrar.setAttribute("onclick", "eliminarUnaTarea(" + i + ")");

        // Armar la estructura del renglón
        li.appendChild(checkbox);
        li.appendChild(divTexto);
        li.appendChild(botonBorrar);

        // Meter la tarea dentro de la lista principal de la pantalla
        contenedorUL.appendChild(li);
    }

    // Actualizar los números del panel de estadísticas
    document.getElementById("txtTotales").innerText = listaDeTareas.length;
    document.getElementById("txtTerminadas").innerText = contadorTerminadas;
}

// Cambiar el estado de falso a verdadero o viceversa usando el índice del arreglo
function cambiarEstado(posicion) {
    if (listaDeTareas[posicion].completada === true) {
        listaDeTareas[posicion].completada = false;
    } else {
        listaDeTareas[posicion].completada = true;
    }
    dibujarTareas();
}

// Eliminar una única tarea del arreglo usando su posición
function eliminarUnaTarea(posicion) {
    // splice remueve elementos indicando el índice inicial y cuántos borrar
    listaDeTareas.splice(posicion, 1);
    dibujarTareas();
}

// Eliminar de un solo golpe todas las tareas que tengan completada = true
function limpiarCompletadas() {
    var tareasPendientes = [];

    // Filtrar manualmente con un bucle dejando solo las falsas (pendientes)
    for (var i = 0; i < listaDeTareas.length; i++) {
        if (listaDeTareas[i].completada === false) {
            tareasPendientes.push(listaDeTareas[i]);
        }
    }

    // Reemplazar nuestro arreglo viejo por el arreglo limpio
    listaDeTareas = tareasPendientes;
    dibujarTareas();
}
