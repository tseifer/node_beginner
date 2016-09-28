'use strict'
var app = require('express')();
var http = require('http');
var server = http.createServer(app);
var db = require('./db');
var contacts = require('./mock-contacts');

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
app.get('/addContact', function(req, res) {
    var params = req.query;



    //res.send(params);
    db.addContact(params, function(err, contact) {
        res.send({error: err, result: contact});
    });
});

function onListening() {
    var addr = server.address();
    console.log('Node.JS listening on ' + addr + ':' + addr.port);
}