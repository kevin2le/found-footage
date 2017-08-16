var express = require('express');
var router = express.Router();
var usersCtrl = require('../controllers/users-controller');
var usersListCtrl = require('../controllers/usersLists-controller')

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});

router.get('/:id', usersCtrl.show);


module.exports = router;
