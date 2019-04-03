var express = require('express');
var router = express.Router();
var bd = require('../db.json');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('welcome', { 
    title: 'Home',
    name: 'Imraan',
    blogs: bd,
    header: "4G|Mobile"
  });
});

module.exports = router;