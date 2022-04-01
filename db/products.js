"use strict";
const client = require("../config/db");

exports.getProducts = async (products) => {
  let sql =
    `SELECT * FROM products order by calendar_dt DESC`;
  try {
    let res = await client.query(sql, products)
    return res.rows
  } catch (err) {
    console.log(err.stack)
    return false
  }
};