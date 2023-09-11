const eventEmitter = require('events').EventEmitter;
const util = require('util');

class Persona{
    constructor(nombre){
        this.nombre = nombre;
    }
}

util.inherits(Persona, eventEmitter);

let persona = new Persona('Brayan');

persona.on('hablar', (mensaje) => {
    console.log(`${persona.nombre}: ${mensaje}`)
});
persona.emit('hablar','Hoy es un gran dia');