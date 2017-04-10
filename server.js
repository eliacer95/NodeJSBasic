'use strict';
var http = require('http');
var server = http.createServer();
server.on('request', function (req, res){
    console.log('Estoy haciendo una petición');
});
server.listen(8000, function(){
    console.log('Servidor escuchando al puerto 8000');
});
