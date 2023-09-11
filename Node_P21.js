const fs = require('fs');

// 1. Cerar un stream de lectura
let contenido = fs.createWriteStream('archivo.txt');
contenido.write('Hola Brayan');
contenido.close();
