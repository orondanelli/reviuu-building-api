"use strict";
const client = require("../config/db");

exports.getAllDevices = async () => {
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
      `;
  try {
    let res = await client.query(sql)
    return res.rows
  } catch (err) {
    console.log(err.stack)
    return false
  }
};

exports.getProductByDay = async (key) => {
  let values = []
  values.push(key)
  let sql =
    `SELECT * FROM products WHERE "key" = $1`;
    console.log(sql)
  try {
    let res = await client.query(sql, values)
    return res.rows
  } catch (err) {
    console.log(err.stack)
    return false
  }
};

exports.getLastUpdate = async () => {
  let sql =
    `SELECT max(end_load_dt) as collected_dt FROM load_status`;
  try {
    let res = await client.query(sql)
    return res.rows
  } catch (err) {
    console.log(err.stack)
    return false
  }
};