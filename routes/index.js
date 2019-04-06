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

/* GET Dashboard/index page */
router.get('/dashboard', ensureAuthenticated, (req, res) => res.render('dashboard', {
  name: req.user.name
}));

/* GET Dashboard/index page */
router.get('/blogs', ensureAuthenticated, (req, res) => res.render('blogs', {
  name: req.user.name
}));

module.exports = router;