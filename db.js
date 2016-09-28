/**
 * Created by Tidhar on 21/9/2016.
 */
'use strict'
var mongoose = require('mongoose');

var Contact = mongoose.model('Contact', {id: Number, name: String, tel: String});

function init() {
    mongoose.connect('mongodb://anyfont.info/myVirusDB');
    var db = mongoose.connection;
    db.on('error', console.error.bind(console, 'connection error:'));
    db.once('open', function() {
        console.log('DB Started');
    });
}

function createDemoContacts(cb) {
    let contact = new Contact({id: 1, name: 'Tidhar Seifer', tel: '0544523238'});
    contact.save(cb);
}

function getContacts(cb) {
    Contact.find({}, cb);
}


module.exports = {
    'init': init,
    'createDemoContacts': createDemoContacts,
    'getContacts': getContacts


};



