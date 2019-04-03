var express = require('express');
var router = express.Router();
var bdb = require('../db.json');
var request = require('request');

// GET Create page

router.get('/', function(req, res, next) {
    res.render('create' , {
        title: "Create"
    });
});

//  Post a create request

router.post('/', function(req, res, next) {
    var posts = bdb.post;
    
    // get id of last post
    var id = bdb[bdb.length+1].id;
    
    // sets  id and incrwase its id
    id = Number(id)+1;
    
    // getting the date
    newDate = new Date(); 
    // getting date format
    date = '${newDate.getDate()}/${(newDate.getMonth())}/${(newDate.getFullYear())}';

    // Get content
    var content = req.body.content;
    // Text is used for description
    // turns the object into a string
    var text = JSON.stringify(content);
    
    // description variable
    var description;
    description = text.charAt(1);
    // gets the char from the string 

    for (var i = 2; i < 200; i++) {
        description += text.charAt(i);
    }

    // Post Request
    request({
        url: 'localhost:3000', 
        method: POST,
        form: {
            id : id,
            date : date,
            title : req.body.title,
            img  : req.body.img,
            description: description + "..</p>",
            content: content,
            author: req.app.locals.user
        },
        function (error, response, body) {
            res.render('index', {
                message: 'succesfully added post',
            });
        } 
    });
    // redirect to homepage after create
    res.redirect('..');         
});

    module.exports = router;