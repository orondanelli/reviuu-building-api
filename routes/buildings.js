var express = require('express');
var router = express.Router();
let db = require('../db/buildings')

router.get('/', async function(req, res) {
  let buildings = await db.getAllBuildings()
  res.json(buildings)
});

router.get('/:id', async function(req, res) {
  let id = req.params.id
  let building = await db.getBuildingById(id)
  res.json(building)
});

router.get('/:id/devices', async function(req, res) {
  let id = req.params.id
  let building = await db.getBuildingDevices(id)
  res.json(building)
});

router.get('/:id/devices/:type_id', async function(req, res) {
  let id = req.params.id
  let type_id = req.params.type_id
  let building = await db.getBuildingDevicesByType(id, type_id)
  res.json(building)
});

module.exports = router;
