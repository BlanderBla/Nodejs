const http = require('node:http');
const fs = require('node:fs');

const host = "127.0.0.1";
const port = 3000;

const server = http.createServer((req, res) => {
    res.writeHead(200, {'Content-Type': 'text/html'});
    fs.readFile('HolaMundo.html',(err,data)=>{
        if(err){
            res.writeHead(404);
            res.write("Archivo no encontrado");
        }else{
            res.write(data);
        }
        res.end();
    });
});

server.listen(port, host,() => {
	console.log(`Servidor en funcionamiento en http://${host}:${port}`);
})