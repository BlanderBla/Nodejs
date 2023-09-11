function parametro(p){
    var index = process.argv.indexOf(p);
    return process.argv[index + 1];
}

var nombre = parametro('--nombre');
var edad = parametro('--edad');
console.log(`Tu nombre es: ${nombre} y tines ${edad} años`);