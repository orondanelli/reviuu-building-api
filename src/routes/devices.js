var express = require('express');
var router = express.Router();
let db = require('../db/devices')

router.get('/', async function(req, res) {
  let products = await db.getAllDevices()
  res.json(products)
});

module.exports = router;
