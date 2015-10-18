/**
 * Created by arthur on 18/10/15.
 */
var express = require('express');
var app = express();

app.use(express.static(__dirname + "/public"));

app.get('/contactlist', function(reg, res) {
    console.log('Ive received a GET request');
    person1 = {
        name: 'Tim',
        email: 'tim@email.com',
        number: '(111) 111-1111'
    };

    person2 = {
        name: 'Jim',
        email: 'jim@email.com',
        number: '(222) 222-2222'
    };

    person3 = {
        name: 'Spok',
        email: 'spok@email.com',
        number: '(333) 333-3333'
    };

    var contactlist = [person1, person2, person3];
    res.json(contactlist);
});

app.listen(3000);
console.log("Servidor executando na porta 3000");