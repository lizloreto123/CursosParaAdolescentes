# Academia de Píxeles

Plataforma de cursos para jóvenes de 12-15 y 16-18 años: Word, PowerPoint, Excel y programación por bloques.

## Cómo ejecutarlo
Abre `index.html` con doble clic en tu navegador. No necesita instalar nada ni un servidor.
(Solo necesita internet para cargar las fuentes Silkscreen y Geo de Google Fonts.)

En Visual Studio Code: abre la carpeta `academia-de-pixeles` (Archivo > Abrir carpeta) y, con la extensión Live Server, clic derecho en `index.html` > Open with Live Server.

Opcional, con servidor local:  `python -m http.server 8000`  y entra a http://localhost:8000

## Estructura
```
academia-de-pixeles/
├── index.html          Estructura de la página (cabecera, lienzos de fondo, ventanas y scripts)
├── README.md
├── assets/
│   ├── favicon.svg / favicon.png / apple-touch-icon.png   Favicon de la página
│   ├── img/            Imágenes del carrusel (Excel, Word, Bloques, PowerPoint) y portada del video
│   └── video/          presentacion.mp4 (video antes de los minijuegos)
├── css/
│   └── styles.css      Todos los estilos: colores, modo claro/oscuro, tarjetas de vidrio, responsive
└── js/                 Se cargan en este orden (comparten variables globales)
    ├── core.js         Base de datos (localStorage), sesión, utilidades
    ├── datos.js        Cursos, preguntas por nivel y parejas del juego de unir (aquí se amplía el contenido)
    ├── efectos.js      Confeti, fondo animado, modo claro/oscuro, ventana de inicio
    ├── home.js         Portada, tarjetas de cursos, carrusel, minijuegos (Atrapa los píxeles y Caza bits)
    ├── auth.js         Registro, inicio de sesión y recuperación de contraseña
    ├── curso.js        Mapa de niveles, quiz, juego de unir y flujo de cada nivel
    ├── simuladores.js  Simuladores de Word, Excel, PowerPoint y programación por bloques
    ├── examen.js       Examen final (mínimo 7/10), constancia y sección de archivos
    ├── chatbot.js      Chatbot flotante
    └── main.js         Arranque de la página
```

## Notas
- Cuentas, avance y constancias se guardan en el navegador (localStorage), no se comparten entre dispositivos.
- La recuperación de contraseña es una simulación; enviar correos reales requiere un servidor.
- El chatbot responde por palabras clave, no es una IA en vivo.
