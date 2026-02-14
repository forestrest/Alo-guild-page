import mysql from 'mysql2/promise';

const pool = mysql.createPool({
  host: "sql207.infinityfree.com",
  user: "if0_41152495",
  password: "s1qnkfBRUO",
  database: "if0_41152495_pelados"
});

export { pool as p };
