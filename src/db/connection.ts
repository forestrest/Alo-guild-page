import mysql from "mysql2/promise";

export const pool = mysql.createPool({
  host: "mysql.railway.internal",
  user: "root",
  password: "TLWDKvtWdFBrPQbjJNtZREwcglbslBVR",
  database: "railway",
});
