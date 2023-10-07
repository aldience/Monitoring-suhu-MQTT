const mysql = require("mysql2"); //library koneksi database

const dbPool = mysql.createPool({
  host: process.env.DB_HOST,
  user: process.env.DB_USERNAME,
  database: process.env.DB_NAME,
});

module.exports = dbPool.promise();
