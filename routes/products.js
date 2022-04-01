var express = require('express');
var router = express.Router();
let db = require('../db/products')
/* GET users listing. */
router.get('/', async function(req, res, next) {
  let products = await db.getProducts()
  console.log(products)
  res.json(products)
});

module.exports = router;
