var express = require('express');
var router = express.Router();
var bd = require('../db.json');

var data = {
    title: 'Home',
    name: 'Imraan',
    blogs: bd,
    header: "4G|Mobile"
}

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('welcome', data);
});

module.exports = router;