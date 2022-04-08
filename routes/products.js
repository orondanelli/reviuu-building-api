var express = require('express');
var router = express.Router();
let db = require('../db/products')
let utils = require('../helpers/utils')
let moment = require('moment');
/* GET users listing. */
router.get('/', async function(req, res) {
  let products = await db.getAllProducts()
  res.json(products)
});

router.get('/item/:key', async function(req, res) {
  let key = req.params.key
  let products = await db.getProductByDay(key)
  res.json(products)
});
router.get('/lastUpdate', async function(req, res) {
  let date = await db.getLastUpdate()
  let response = date.map((item) => {
    let time = utils.timeSCL(item.collected_dt)
    return {
      collected_dt: time,
      time_ago: moment(time, "MM-DD-AAAA HH:mm:SS").locale('es').fromNow()
    }
  })
  res.json(response)
});

module.exports = router;
