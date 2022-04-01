var express = require('express');
var router = express.Router();
let db = require('../db/products')
/* GET users listing. */
router.get('/', async function(req, res, next) {
  let products = await db.getAllProducts()
  console.log(products)
  res.json(products)
});

router.get('/item/:key', async function(req, res, next) {
  let key = req.params.key
  let products = await db.getProductByDay(key)
  console.log(key)
  res.json(products)
});

module.exports = router;
