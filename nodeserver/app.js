var http = require('http')
var fs = require('fs')
http.createServer(function(req, res) {
    
    res.writeHead(200, { 'Content-Type': 'text/plain'})
    res.end('Hello world\n')
}).listen(1338, '127.0.0.1')

var http = require('http')

http.createServer(function(req, res) {
    
    res.writeHead(200, { 'Content-Type': 'text/html'})
    res.end("<h1>Hello world</h1/><p>cats!!</p>")
}).listen(1339, '127.0.0.1')


http.createServer(function(req, res) {
    
    res.writeHead(200, {'Content-Type': "text/html"})
    // var text = fs.readFileSync(__dirname + "/lorem.html", 'utf-8')
    // res.end(text)
    // more optimal for streaming, less likely to have overloaded data
    fs.createReadStream(__dirname + "/lorem.html", 'utf-8')
    .pipe(res)

}).listen(1000, '127.0.0.1')

http.createServer(function(req, res) {
    
    var obj = {
        firstname: 'john',
        lastname: 'doe'
    }
    if (req.url && req.url === "/"){
        fs.createReadStream(__dirname + "/lorem.html").pipe(res)
    }
     if (req.url && req.url === "/api"){
        res.end(JSON.stringify(obj)) 
    } 
    if (req.url && req.url === "/random"){
        res.end(JSON.stringify({"random: ": Math.random()})) 
    } 

}).listen(1001, '127.0.0.1')