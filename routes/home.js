var express = require('express');
var router = express.Router();
var bd = require('../db.json');

var data = {
    title: 'Home',
    name: 'Imraan',
    blogs: bd,
    header: "4G|Mobile"
}

/* GET Welcome page */
router.get('/home', (req, res) => res.render('home', data));