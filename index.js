let app = require('express')();
let http = require('http');
let server = http.createServer(app);
let db = require('./db');
let contacts = require('./mock-contacts');

server.on('listening', onListening);


server.listen(process.env.PORT || 3000);

db.init();

app.get('/', function(req, res) {
    res.send('HEllo from NOde.js');
});
app.get('/getContacts', function(req, res) {
    console.log("called getContacts");
    db.getContacts(function (err, allContacts) {
        if (err) {
            console.error(err);
        } else {
            console.log(allContacts);
            res.send(allContacts);
        }
    });
});
app.get('/createDemoContacts', function(req, res) {
    db.createDemoContacts(function(err, contact) {
        res.send({error: err, result: contact});
    });
});


function onListening() {
    var addr = server.address();
    console.log('Node.JS listening on ' + addr + ':' + addr.port);
}