/**
 * Created by arthur on 18/10/15.
 */
var express = require('express');
var app = express();
//var express = require('bootstrap');
var mongojs = require('mongojs');
var db = mongojs('contactlist', ['contactlist']);

var bodyParser = require('body-parser');


app.use(express.static(__dirname + "/public"));
app.use(bodyParser.json());

app.get('/contactlist', function (reg, res) {
    console.log('Ive received a GET request');

    db.contactlist.find(function (err, docs){
        console.log(docs);
        res.json(docs);
    });

});


app.post('/contactlist', function (req, res) {
    console.log(req.body);
    db.contactlist.insert(req.body, function(err, doc) {
        res.json(doc);
    });
});

app.listen(3000);
console.log("Servidor executando na porta 3000");