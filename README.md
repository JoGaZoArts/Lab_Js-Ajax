# Laboratorio: Tecnologías JavaScript y AJAX

## 📋 Descripción General

Este laboratorio pone en práctica los conocimientos adquiridos sobre JavaScript y AJAX (Asynchronous JavaScript and XML). Se incluyen 9 ejercicios divididos en dos secciones: 4 ejercicios de JavaScript puro y 5 ejercicios de AJAX con XMLHttpRequest.

## 🎯 Objetivos

- Aplicar conceptos fundamentales de JavaScript
- Implementar peticiones AJAX asincrónicas
- Manipulación del DOM
- Manejo de eventos
- Gestión de estados de red

## 📁 Estructura del Proyecto

```
Lab_Js-Ajax/
├── index.html       # Estructura HTML principal
├── styles.css       # Estilos CSS
├── script.js        # Lógica JavaScript
├── README.md        # Este archivo
└── DOCUMENTACION.pdf # Documentación completa (máx. 10 páginas)
```

## 🚀 Cómo Usar

1. **Clonar o descargar** el repositorio
2. **Abrir** `index.html` en un navegador web
3. **Interactuar** con los ejercicios según sea necesario

## 📝 Ejercicios de JavaScript

### Ejercicio 1: Detector de Palíndromos
**Objetivo:** Detectar si una cadena de texto es un palíndromo.

**Características:**
- Elimina espacios, puntuación y acentos
- Convierte a minúsculas
- Compara con su versión invertida

**Ejemplo:**
```
Entrada: "La ruta nos aporta otro paso a la escalera a rocas"
Salida: Es un palíndromo ✓
```

### Ejercicio 2: Mayor de dos números
**Objetivo:** Comparar dos números y mostrar cuál es el mayor.

**Características:**
- Validación de entrada numérica
- Manejo de valores iguales
- Conversión automática de tipos

**Ejemplo:**
```
Entrada: 15, 8
Salida: El número mayor es: 15
```

### Ejercicio 3: Vocales que aparecen en una frase
**Objetivo:** Extraer las vocales únicas presentes en el texto.

**Características:**
- Detecta vocales sin tilde y con tilde
- Usa Set para evitar duplicados
- Retorna lista única de vocales

**Ejemplo:**
```
Entrada: "Hola mundo"
Salida: Las vocales que aparecen son: o, a, u
```

### Ejercicio 4: Conteo de frecuencia de vocales
**Objetivo:** Contar cuántas veces aparece cada vocal.

**Características:**
- Mapea vocales con tilde a sin tilde
- Usa objeto como diccionario de conteo
- Retorna frecuencia de cada vocal

**Ejemplo:**
```
Entrada: "La educación"
Salida: A: 2 | E: 1 | I: 1 | O: 1 | U: 0
```

## 🌐 Ejercicios de AJAX

### Ejercicio 5: URL por defecto (Criterio 5)
**Objetivo:** Al cargar la página, el cuadro de texto debe mostrar por defecto la URL de la propia página.

**Implementación:**
```javascript
document.addEventListener("DOMContentLoaded", () => {
    const inputUrl = document.getElementById("urlInput");
    if (inputUrl) {
        inputUrl.value = window.location.href;
    }
});
```

### Ejercicio 6: Descargar contenido AJAX (Criterio 6)
**Objetivo:** Descargar mediante AJAX el contenido de la URL introducida por el usuario.

**Características:**
- Usa XMLHttpRequest para peticiones asincrónicas
- Maneja respuestas exitosas (status 200 o 0)
- Muestra error si falla la petición

### Ejercicio 7: Estados de la petición (Criterio 7)
**Objetivo:** Mostrar en todo momento el estado de la petición.

**Estados monitoreados:**
```
0: No iniciada - Object created but open() not called yet
1: Cargando - open() has been called
2: Cargado - send() has been called, headers and status available
3: Interactivo - Downloading; responseText holds partial data
4: Completada - The operation is complete
```

### Ejercicio 8: Cabeceras HTTP (Criterio 8)
**Objetivo:** Mostrar todas las cabeceras de la respuesta del servidor.

**Implementación:**
```javascript
const headersText = xhr.getAllResponseHeaders();
zonaCabeceras.textContent = headersText;
```

### Ejercicio 9: Código de estado (Criterio 9)
**Objetivo:** Mostrar el código HTTP y texto de la respuesta.

**Implementación:**
```javascript
zonaCodigo.innerHTML = `<strong>Código:</strong> ${xhr.status} <br> 
                        <strong>Texto:</strong> ${xhr.statusText}`;
```

## 🛠️ Tecnologías Utilizadas

- **HTML5** - Estructura semántica
- **CSS3** - Estilos y diseño responsivo
- **JavaScript (Vanilla)** - Lógica sin dependencias externas
- **XMLHttpRequest** - API nativa para peticiones AJAX

## 📊 Rúbrica de Evaluación

| Criterio | Descripción | Puntos | Peso |
|----------|-------------|--------|------|
| 1 | Ejercicio JS 1 (Palíndromo) | 1 | 10% |
| 2 | Ejercicio JS 2 (Mayor número) | 1 | 10% |
| 3 | Ejercicio JS 3 (Vocales presentes) | 1 | 10% |
| 4 | Ejercicio JS 4 (Conteo vocales) | 1 | 10% |
| 5 | Ejercicio AJAX 1 (URL defecto) | 1 | 10% |
| 6 | Ejercicio AJAX 2 (Descargar contenido) | 1 | 10% |
| 7 | Ejercicio AJAX 3 (Estados) | 1 | 10% |
| 8 | Ejercicio AJAX 4 (Cabeceras) | 1 | 10% |
| 9 | Ejercicio AJAX 5 (Código estado) | 1 | 10% |
| 10 | Claridad en la documentación | 1 | 10% |
| **Total** | | **10** | **100%** |

## 🔍 Características Destacadas

### Validación de Entrada
- Verificación de campos vacíos
- Validación de tipos de datos
- Mensajes de error claros

### Manejo de Errores
- Try-catch para excepciones
- Manejo de errores CORS
- Feedback visual de errores

### Interfaz Responsiva
- Diseño adaptable a dispositivos móviles
- Gradientes y animaciones suaves
- Colores diferenciados por sección

### Código Limpio
- Funciones bien documentadas
- Nombres descriptivos
- Comentarios explicativos

## 📖 Documentación Adicional

Consulta el archivo `DOCUMENTACION.pdf` para una explicación detallada de:
- Resolución paso a paso de cada ejercicio
- Capturas de pantalla del funcionamiento
- Explicación técnica de conceptos clave
- Ejemplos de uso

## 🌍 Pruebas Recomendadas

### URLs para probar AJAX:
- `file:///ruta/local/index.html` (mismo origen)
- Sitios con CORS habilitado
- APIs públicas accesibles

**Nota:** Por restricciones CORS, no todas las URLs funcionarán en peticiones AJAX desde el navegador.

## 💡 Notas Importantes

- El contenido AJAX se muestra como texto plano por seguridad (prevenir XSS)
- Las peticiones AJAX se ejecutan de forma asincrónica
- Los estados se muestran de forma acumulativa para ver el ciclo completo
- Algunos sitios pueden no permitir peticiones CORS

## ✅ Checklist de Completitud

- [x] Ejercicio 1: Detector de Palíndromos
- [x] Ejercicio 2: Mayor de dos números
- [x] Ejercicio 3: Vocales presentes
- [x] Ejercicio 4: Conteo de vocales
- [x] Ejercicio AJAX 1: URL por defecto
- [x] Ejercicio AJAX 2: Descargar contenido
- [x] Ejercicio AJAX 3: Estados de petición
- [x] Ejercicio AJAX 4: Cabeceras HTTP
- [x] Ejercicio AJAX 5: Código de estado
- [x] Documentación clara

## 📞 Soporte

Para dudas o problemas técnicos, consulta la documentación incluida o revisa el código comentado en los archivos.

---

**Última actualización:** 2026-06-02  
**Versión:** 1.0  
**Autor:** JoGaZoArts
