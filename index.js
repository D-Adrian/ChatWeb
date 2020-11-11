// const { response } = require('express');
 const { response } = require('express');
const { connect } = require('mongoose');
const { initExpressApp, hookWithServer } = require('./webserver')
http = require('http');
fs = require('fs');
express = require("express")

const app = initExpressApp()
//var app = express();
app.use(function(res, req, next) {
    res.header("Access-Control-Allow-Origin", '*');
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
})

// http.createServer((req, res) => {
//     res.writeHead(200, {
//         'Content-type' : 'text/html; charset=utf-8'
//     })
//     res.end("ca marche")
// }).listen(8080)

const server = http.createServer();
//const server = hookWithServer(app)
socket = require('socket.io')
io = socket(server)

// socket.on('connected', (req, res) => {
//     socket.emit('connected')
//     console.log('test connect')
//     res.writeHead(200);
// });


server.on('request', (request, response) => {
    fs.readFile('index.html', (err, data) =>{
        if (err) {
            response.end("marche pas")
        }
        else
            response.writeHead(200, {
                'content-Type': "text/html;charset=utf-8"
            } )
            response.end(data)
    })
})

    

server.listen(4021, (req, res) => {
   // res.writeHead(200);
   fs.readFile('index.html', (err, data) =>{
    if (err) {
        response.end("marche pas")
    }
    else{
        response.writeHead(200, {
            'content-Type': "text/html;charset=utf-8"
        } )
        io.sockets.emit('connected', "connection")
    }
})
    console.log('Listening on http://localhost:4021')
})
//http.createServer(httpHandler).listen(4021)

