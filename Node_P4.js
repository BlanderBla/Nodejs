const fs = require('node:fs');
console.log('Primer archivo');
const fText = fs.readFileSync('./archivo.txt','utf-8');
console.log(fText);

console.log("INTERMEDIO");

console.log('Segundo archivo');
const sText = fs.readFileSync('./archivo2.txt','utf-8');
console.log(sText);
