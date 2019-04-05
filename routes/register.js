var express = require('express');
var router = express.Router();
var users = require('../db.json').users;
var request = require('request')

// Get register page
router.get('/', function(req, res, next) {
    res.render('register' , {
        title: "register",
        thisError: "req.app.locals.regError"
    });
});

// Create a new user
router.post('/', function(req, res, next){
    
    // used user name
    var userNameUsed;

    // sets id to last id in users +1
    var id = users[users.length - 1].id;
    id = Number(id) +1;

    // check if user name already used
    var LogUser = req.body.username;

    // Checking through users if used names
    for(i = 0; i < users.length; i++) {
        // check if username already exist
        if(LogUser == users[i]) {
            userNameUsed = true;
            console.log(userNameUsed);
        }
    }
    // If username isnt available create new membership account
    if ( userNamedUsed != true ) {
        request({
            url : 'http://localhost:8080/users',
            method: 'POST',
            form: {
                id: id,
                username : req.body.username,
                email: req.body.password
            },
            function (error, response, body) {
                res.render('register', {
                    message : 'succesfully added',
                });
            }
        });
        req.app.locals.regeError = 'Registration sucesful'

        // goes to sign in page
        res.render('/sign-in');
    }
    // if user is already used
    else if(userNameUsed == true) {
        req.app.locals.regeError = 'Username used already'
    } 
    // if is used redirect to sign in
    res.redirect('/sign-in');
})

module.exports = router;