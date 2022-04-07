"use strict";
const client = require("../config/db");

exports.getAllProducts = async () => {
  let sql =
    `SELECT 
    to_char(calendar_dt , 'YYYY-MM-DD') as calendar_dt,
      "name",
      "key",
      src,
      price,
      origin    
    FROM products order by calendar_dt DESC`;
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