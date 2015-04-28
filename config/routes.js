var express = require('express');
var users = require('../app/controllers/users');
var router = express.Router();


/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

/* GET users listing. */
router.get('/users', users.index);

module.exports = router;