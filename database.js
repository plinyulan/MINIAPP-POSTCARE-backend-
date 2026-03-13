const { Pool } = require("pg");

const pool = new Pool({
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME,
  host: process.env.INSTANCE_CONNECTION_NAME
    ? `/cloudsql/${process.env.INSTANCE_CONNECTION_NAME}`
    : process.env.DB_HOST,
  port: process.env.DB_PORT || 5432,
});

module.exports = pool;

