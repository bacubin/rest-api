var http = require('http');

process.env.NODE_ENV = "dev";
process.env.NODE_CONFIG_DIR = "./config";

const PORT = 8080;
var app = require('../app/app.js');
var server = http.createServer(app);

server.listen(PORT, function(){
    console.log("Server listening on: http://localhost:%s", PORT);
});