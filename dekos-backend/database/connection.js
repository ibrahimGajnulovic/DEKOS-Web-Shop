const mysql = require('mysql');

const conn = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "password",
  database: "dekos_web_shop"
});

conn.connect((err) => {
  if (err) throw err;
  console.log('Successfully connected!!!');
});


module.exports = conn;