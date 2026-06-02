Laboratorio: Tecnologías JavaScript y AJAX
Este repositorio contiene la solución práctica para el laboratorio de la asignatura Diseño de Aplicaciones en Red. El proyecto integra algoritmos síncronos de manipulación de datos en el cliente y un módulo de inspección de red asincrónico utilizando tecnologías web nativas.

🚀 Características del Proyecto
La aplicación se divide en cinco módulos interactivos organizados en una interfaz limpia y totalmente responsiva:

Ejercicio 1 (Detector de Palíndromos): Algoritmo de inversión de cadenas con rutinas de sanitización para validar la simetría de textos, ignorando espacios, mayúsculas y acentos.

Ejercicio 2 (Mayor de dos números): Control numérico y condicionales lógicos para determinar el valor máximo entre dos variables de entrada.

Ejercicio 3 (Vocales en una frase): Extracción selectiva de caracteres de tipo vocal sin duplicados.

Ejercicio 4 (Conteo de vocales): Mapa de frecuencias dinámico para el cálculo lineal de ocurrencias de cada vocal.

Módulo AJAX (Inspector de Páginas Web): Implementación nativa de XMLHttpRequest que rastrea, registra y muestra en tiempo real los 5 estados del ciclo de vida HTTP (readyState 0 al 4), códigos de estado y cabeceras de respuesta.

📁 Estructura de Archivos
El proyecto sigue el principio de separación de responsabilidades en tres componentes esenciales:

Plaintext
├── index.html   # Estructura semántica de la aplicación y maquetación Grid/Flexbox.
├── styles.css   # Capa de estilos global, paleta azul corporativa y diseño responsivo.
└── script.js    # Lógica de negocio, sanitización de datos y manejo asincrónico (AJAX).
🛠️ Tecnologías Utilizadas
HTML5: Estructuración semántica y formularios de captura.

CSS3: Maquetación moderna basada en CSS Grid, Flexbox y adaptabilidad mediante Media Queries.

Vanilla JavaScript: Lógica pura del lado del cliente sin dependencias ni librerías externas.

AJAX (API XMLHttpRequest): Gestión avanzada de peticiones asincrónicas a red.

📦 Instalación y Despliegue Local
Al no requerir compiladores ni entornos de ejecución pesados del lado del servidor, el proyecto puede ejecutarse directamente en cualquier navegador web moderno:

Clona este repositorio en tu máquina local:

Bash
git clone https://github.com/tu-usuario/tu-repositorio.git
Navega al directorio del proyecto.

Abre el archivo index.html en tu navegador de preferencia o levanta un servidor local ligero (como Live Server en VS Code) para probar el flujo AJAX sin restricciones de origen local.
