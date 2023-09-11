const fs = require('fs');

let data = "";
let contenido = fs.readFileSync('./Nombre-archivo','UTF-8');
// Primera opción
stream.once('data', ()=>{
    console.log("Iniciando el stream");
});

// Segunda opción
stream.once('data', (chunk)=>{
    data += chunk;
});
stream.once('end', ()=>{
    console.log("Fin del stream\n",data.length);
});