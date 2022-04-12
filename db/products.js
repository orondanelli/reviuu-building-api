"use strict";
const client = require("../config/db");

exports.getAllProducts = async () => {
  let sql =
    `WITH priceR AS (
      SELECT 
        to_char(calendar_dt , 'YYYY-MM-DD') as calendar_dt ,
        "key",  
        "name",
        src,
        brand,
        origin,
        price as actual_price  ,
        lead(price) over (partition by "key" order by calendar_dt DESC) as previous_price  
      FROM products 
      ) select
        calendar_Dt,
        "key",  
        "name",
        src,
        brand,
        origin,
        coalesce(previous_price, actual_price) as previous_price,
        actual_price,
      coalesce(TRUNC(((actual_price - previous_price)/actual_price  ::NUMERIC)*100::numeric,1),0) as var  
      from priceR 
      order by calendar_dt DESC
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