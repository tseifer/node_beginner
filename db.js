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
    addContact({name: 'Tidhar Seifer', tel: '0544523238'}, cb);

}

function getContacts(cb) {
    Contact.find({}, cb);
}

function addContact(params, cb) {
    let contact = new Contact({name: params.name, tel: params.tel});
    contact.save(cb);

}
module.exports = {
    'init': init,
    'createDemoContacts': createDemoContacts,
    'getContacts': getContacts,
    'addContact': addContact

};



