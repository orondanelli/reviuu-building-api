"use strict";
const client = require("../config/db");

exports.getAllBuildings = async () => {
    let sql =
    `SELECT * FROM buildings
      `;
  try {
    let res = await client.query(sql)
    return res.rows
  } catch (err) {
    console.log(err.stack)
    return false
  }
}
exports.getBuildingById = async (id) => {
    let values = []
    values.push(id)

    let sql =
    `SELECT * FROM buildings WHERE id = $1
      `;
  try {
    let res = await client.query(sql, values)
    return res.rows
  } catch (err) {
    console.log(err.stack)
    return false
  }
}
exports.getBuildingDevices = async (id) => {
    let values = []
    values.push(id)

    let sql =
    `select
    de.id,
    de.hash_id,
    de."name",
    de.brand,
    de.status,
    de.building_id ,
    b."name" as "building name",
    de.device_type_id,
    dt."name" as "device_name"
  from
    public.devices de
  inner join device_type dt 
  on
    (de.device_type_id = dt.id)
  inner join buildings b 
  on
    (de.building_id = b.id)
  where b.id = $1
      `;
  try {
    let res = await client.query(sql, values)
    return res.rows
  } catch (err) {
    console.log(err.stack)
    return false
  }
}
exports.getBuildingDevicesByType = async (id, type_id) => {
    let values = []
    values.push(id)
    values.push(type_id)

    let sql =
    `select
    de.id,
    de.hash_id,
    de."name",
    de.brand,
    de.status,
    de.building_id ,
    b."name" as "building name",
    de.device_type_id,
    dt."name" as "device_name"
  from
    public.devices de
  inner join device_type dt 
  on
    (de.device_type_id = dt.id)
  inner join buildings b 
  on
    (de.building_id = b.id)
  where b.id = $1 and dt.id = $2
      `;
  try {
    let res = await client.query(sql, values)
    return res.rows
  } catch (err) {
    console.log(err.stack)
    return false
  }
}