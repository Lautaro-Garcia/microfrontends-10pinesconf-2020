# Charla de Microfrontends

## 10PinesConf 2020

Este repo tiene tres aplicaciones:

1. La configuración principal, que se encarga de montar los otros dos microfrontends
2. Un microfrontend para el fondo, el título principal y el footer (logo y nombre de la charla)
3. Un microfrontend para cada panel

### ¿Cómo se levanta todo?

Como la mayoría de proyectos de Javascript, para descargar todas las dependencias de cada
aplicación basta con correr `npm install` dentro de cada carpeta

En la carpeta de cada aplicación correr `npm start`.
La aplicación principal se va a poder acceder en http://localhost:9000

**Nota:** por simplicidad, las dependencias comunes (como `react`) se están cargando desde una cdn
así que este ejemplo va a poder cargarse solo desde un dispositivo conectado a internet
