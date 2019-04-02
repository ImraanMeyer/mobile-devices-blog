var express = require('express');
var router = express.Router();

/* GET blogs page. */
router.get('/', function(req, res, next) {
  res.render('blogs', { 
    title: 'Blogs',
    name: 'Imraan'  
  });
});

module.exports = router;