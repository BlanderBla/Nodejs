const events = require('events');
const emitter = new events.EventEmitter();
emitter.on('eventoCustom', (mensaje, estatus) => {
	console.log(`${estatus}: ${mensaje}`);
});
emitter.emit('eventoCustom', 'Mensaje cargado con exito',200);