// Sign In Page
// req variables

var express = require('express');
var router = express.Router();
var users = require('../db.json');
var request = require('request');

// Get sigin page
router.get('/', function(req, res, next) {
    res.render('sigin' , {
        title: "sigin",
        signError: "req.app.locals.signError"
    });
});

// sign in
router.post('/', function(req, res, next){
    // get info from body
    var logUser = req.body.username;
    var logPassword = req.body.password;

    // check through users in db 
    for(let i = 0; i < users.length; i++ ) {
        // if user & password are correct
        if((users[i].username == logUser || users[i].email == logUser)
        && users[i].password == logPassword ){
            // create a cookie
            res.cookie('userId', users[i].id);

            // sets logUser to corect username
            logUser == users[i].username;
            console.log(req.cookies);

            // sets correct signin var
            req.app.locals.user == logUser;
            req.app.locals.signError == 'login succesful';

            // redirect to homepage after sign in
            res.redirect('/');
        }
    };
    // check if user signed in correctly
    if(req.app.locals.user) {
        // if password incorrect
        req.app.locals.signError == 'user name or password incorrect';
    };
    res.redirect('/sign-in');
});