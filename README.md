# Charla de Microfrontends

## 10PinesConf 2020

Este repo tiene tres aplicaciones:

1. La configuración principal, que se encarga de montar los otros dos microfrontends
2. Un microfrontend para el fondo, el título principal y el logo
3. Un microfrontend para cada panel

### ¿Cómo se levanta todo?

En la carpeta de cada aplicación correr `npm start`.
La aplicación principal se va a poder acceder en https://localhost:9000

**Nota:** por simplicidad, las dependenias comunes (como `react`) se están cargando desde una cdn
así que este ejemplo va a poder cargarse sólo desde un dispositivo conectado a internet
