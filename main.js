var http = require('http');

http.createServer(function(req, res) {
    res.writeHead(200, {'Content-Type':'text/plain'});
    res.end('hello ')
    
}).listen(3000);

console.log('server runing on port:3000')