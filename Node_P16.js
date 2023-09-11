process.stdout.write("Hola mundo\nDime tu nombre: ");
process.stdin.on('data', (data) =>{
    nombre = data.toString().trim();
    process.stdout.write(`Hola ${nombre}!`);
    process.exit();
});