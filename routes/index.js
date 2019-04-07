var express = require('express');
var router = express.Router();
var bd = require('../db.json');
var { ensureAuthenticated} = require('../config/auth')

var data = {
    title: 'Home',
    name: 'Imraan',
    blogs: bd,
    header: "4G|Mobile"
}

/* GET Welcome page */
router.get('/', (req, res) => res.render('test', data));
router.get('/blogs', (req, res) => res.render('blogs', data));

/* GET Dashboard/index page */
router.get('/home', ensureAuthenticated, (req, res) => res.render('home', {
  name: req.user.name
}));


module.exports = router;