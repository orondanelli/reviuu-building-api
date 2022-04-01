"use strict";
const client = require("../config/db");

exports.getAllProducts = async () => {
  let sql =
    `SELECT * FROM products order by calendar_dt DESC`;
  try {
    let res = await client.query(sql)
    return res.rows
  } catch (err) {
    console.log(err.stack)
    return false
  }
};

exports.getProductByDay = async (key) => {
  let sql =
    `SELECT * FROM products WHERE "key" = '${key}'`;
  try {
    let res = await client.query(sql)
    return res.rows
  } catch (err) {
    console.log(err.stack)
    return false
  }
};