var express = require('express');
var router = express.Router();
let db = require('../db/products')
/* GET users listing. */
router.get('/', function(req, res, next) {
  res = db.getProducts()
  res.send('respond with a resource');
});

module.exports = router;
