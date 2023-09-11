var readline = require('readline');
var rl = readline.createInterface(process.stdin, process.stdout);

var persona = {
    nombre: '',
    comentarios: []
};

rl.question('Cuál es tu nombre? ', (respuesta) => {
    persona.nombre = respuesta;
    rl.setPrompt("Dime un comentario: ");
    rl.prompt();
});

rl.on('line', (input) => {
    if(input.trim() === 'salir()'){
        process.exit();
    }else{
        persona.comentarios.push(input.trim());
        rl.setPrompt("Dime un comentario: ");
        rl.prompt();    
    }
});