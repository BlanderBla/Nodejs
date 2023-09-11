const path = require('node:path')

// Obtiene la barra separadora según el S.O.
console.log(path.sep); 
// Unir rutas
const filePath = path.join('content','subfolder','test.txt');
console.log(filePath);

// Nombre del fichero
const base = path.basename(filePath);
console.log(base);

// Nombre del fichero sin la extensión
const fileName = path.basename(filePath,'.txt');
console.log(fileName);

// Nombre de la extensión del fichero
const extension = path.extname('imagen.jpg');
console.log(extension);