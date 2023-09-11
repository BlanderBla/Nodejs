/*
    Asincornia con callback's
*/

const fs = require('node:fs');

console.log('Primer archivo');
fs.readFile('./archivo.txt','utf-8', (err, text) =>{
    console.log(text);
});

console.log("INTERMEDIO");

console.log('Segundo archivo');
fs.readFile('./archivo2.txt','utf-8',(err, text) =>{
    console.log(text);
});
