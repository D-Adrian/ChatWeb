const { initExpressApp, hookWithServer } = require('./webserver')
http = require('http');

//const app = initExpressApp()
var app = express();
app.use(function(res, req, next) {
    res.header("Access-Control-Allow-Origin", '*');
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
})

const server = hookWithServer(app)

// const httpHandler = function(req, res) {
//     if (req.url === '/'){
//         res.setHeader('Access-Control-Allow-Origin', '*')
//         getIndex(req, res)
//     }
//     console.log('Listening on http://localhost:4021')
//     res.end()
// }

app.get('/', function(req,res) {
    res.sendFile('index.html');
})

server.listen(4021, (req, res) => {
    console.log('Listening on http://localhost:4021')
})
//http.createServer(httpHandler).listen(4021)

