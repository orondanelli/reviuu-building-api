var express = require('express');
var router = express.Router();
let db = require('../db/products')
let utils = require('../helpers/utils'
)
/* GET users listing. */
router.get('/', async function(req, res, next) {
  let products = await db.getAllProducts()
  console.log(products)
  res.json(products)
});

router.get('/item/:key', async function(req, res, next) {
  let key = req.params.key
  let products = await db.getProductByDay(key)
  res.json(products)
});
router.get('/lastUpdate', async function(req, res, next) {
  let date = await db.getLastUpdate()
  let response = date.map((index, item) => {
    return {
      collected_dt: utils.timeSCL(item)
    }
  })
  res.json(response)
});

module.exports = router;
