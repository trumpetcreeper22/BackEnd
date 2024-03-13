const { Pool } = require('pg');

const pool = new Pool({
  user: 'bev',
  password: 'beverly',
  host: 'localhost',
  port: 5432, // default Postgres port
  database: 'exercise7'
});

module.exports = {
  query: (text, params) => pool.query(text, params)
};