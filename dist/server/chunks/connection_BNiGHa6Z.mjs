import mysql from 'mysql2/promise';

const pool = mysql.createPool({
  host: "shuttle.proxy.rlwy.net",
  user: "root",
  port: Number("42207"),
  password: "TLWDKvtWdFBrPQbjJNtZREwcglbslBVR",
  database: "railway"
});

export { pool as p };
