# Laboratorio: Tecnologías JavaScript y AJAX

Repositorio oficial para la solución práctica del laboratorio de la asignatura **Diseño de Aplicaciones en Red** (7.º Semestre - Ingeniería Informática). Este proyecto implementa algoritmos síncronos de procesamiento en el cliente y un módulo inspector de red asincrónico utilizando exclusivamente tecnologías web nativas.

---

## 📁 Estructura del Proyecto

El software se diseñó bajo el principio de separación de responsabilidades, distribuyendo el sistema en tres componentes independientes:

```text
├── index.html   # Estructura semántica del DOM y contenedores adaptativos (Grid/Flexbox).
├── styles.css   # Capa estética global unificada en paleta azul corporativa.
└── script.js    # Capa lógica: sanitización de datos, algoritmos y control AJAX.
```

---

## 🛠️ Especificaciones Técnicas y Citación de Código

A continuación se estructuran y detallan los componentes lógicos clave desarrollados en JavaScript puro (*Vanilla JS*).

### 1. Función Centralizada de Sanitización
Para garantizar la resiliencia del software ante datos corruptos o caracteres especiales, se implementó una rutina de normalización.

> ### 📌 Código Citado: `limpiarTexto(txt)`
> Rutina de filtrado de diacríticos y caracteres especiales mediante recorrido lineal.
> ```javascript
> function limpiarTexto(txt) {
>     var orig = "áéíóú", dest = "aeiou", res = "";
>     txt = txt.toLowerCase();
>     for (var i = 0; i < txt.length; i++) {
>         var p = orig.indexOf(txt[i]), c = (p !== -1) ? dest[p] : txt[i];
>         if ((c >= "a" && c <= "z") || (c >= "0" && c <= "9")) res += c;
>     }
>     return res;
> }
> ```

### 2. Control de Asincronía y Ciclo de Vida HTTP (Módulo AJAX)
El núcleo de conectividad de la aplicación utiliza el objeto nativo `XMLHttpRequest` para realizar peticiones asincrónicas, capturando las mutaciones del flujo en tiempo real.

> ### 📌 Código Citado: `cargarContenidoAJAX()`
> Manejador de eventos de red y lectura de estados HTTP.
> ```javascript
> xhr.onreadystatechange = function() {
>     if (mapeo[xhr.readyState]) est.innerHTML += "<br>" + mapeo[xhr.readyState];
>     if (xhr.readyState === 4) {
>         cod.innerHTML = "Código HTTP: " + xhr.status + " / " + xhr.statusText;
>         if (xhr.status === 200 || xhr.status === 0) {
>             cod.style.color = "#10b981";
>             var headers = xhr.getAllResponseHeaders();
>             cab.textContent = headers ? headers : "No hay cabeceras disponibles (Origen Local).";
>             con.textContent = xhr.responseText;
>         } else {
>             cod.style.color = "#ef4444";
>             cab.textContent = "No disponibles debido al error.";
>             con.textContent = "Error CORS o de red al intentar acceder a la URL.";
>         }
>     }
> };
> ```

---

## 📊 Matriz de Monitoreo: Ciclo de Vida AJAX

El módulo asincrónico mapea de forma dinámica el comportamiento del objeto `XHR` de acuerdo con los siguientes estados estándar:

| Estado (`readyState`) | Hito del Ciclo de Vida | Comportamiento en la Interfaz |
| :---: | :--- | :--- |
| **0** | Objeto Creado | Reinicio de contenedores del DOM y estado "No iniciado". |
| **1** | Método `open()` invocado | Registro de la URL destino y apertura del canal de transmisión. |
| **2** | Método `send()` invocado | Petición enviada a la red. Cabeceras HTTP base disponibles. |
| **3** | Descarga e Interactividad | Recepción de paquetes de datos parciales de la respuesta. |
| **4** | Operación Completada | Cierre del flujo. Evaluación del estatus (Ej: `200 OK` o `CORS Error`). |

---

## 🚀 Despliegue e Instalación Local

Al estar construido sobre tecnologías nativas del navegador, no requiere gestores de dependencias ni entornos de ejecución complejos en el servidor:

1. **Clonar el repositorio:**
   ```bash
   git clone https://github.com/tu-usuario/tu-repositorio.git
   ```
2. **Ejecución:** Abre el archivo `index.html` en cualquier navegador moderno. 
3. **Nota de red:** Para una evaluación óptima de las peticiones del módulo AJAX (evitando bloqueos estrictos de archivos locales), se recomienda levantar el proyecto utilizando un servidor local ligero como *Live Server* en Visual Studio Code.
4. 
