const { initExpressApp, hookWithServer } = require('./webserver')

const app = initExpressApp()
const server = hookWithServer(app)
const  router  =  express.Router();


router.route("/").get((req, res, next) =>  {
    res.setHeader("Content-Type", "application/json");
    res.statusCode  =  200;
    connectdb.then(db  =>  {
        Chats.find({}).then(chat  =>  {
        res.json(chat);
    });
});

server.listen(4021, () => {
    console.log('Listening on http://localhost:4021')
})


