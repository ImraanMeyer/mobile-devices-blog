// Sign In Page
// req variables
var express = require('express');
var router = express.Router();
var request = require('request');

// Get sigin page
router.get('/', function(req, res, next) {
    // sets defualt
    req.app.locals.login == false;
    req.app.locals.user == '';
    req.app.locals.signError == '';
    req.app.locals.regError == '';

    // create a cookie
    res.clearCookie('userId');
    console.log(req.cookies.userId);

    // redirect to homepage after sign up
    res.redirect('/');
});

module.exports = router;