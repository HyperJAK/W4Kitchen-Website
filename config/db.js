const mysql = require('mysql2/promise')

const pool = mysql.createPool({
  host: 'localhost', // Replace with your database host
  user: 'JAK', // Replace with your database username
  password: 'jak1', // Replace with your database password
  database: 'w4kitchen', // Replace with your database name
  waitForConnections: true, // Ensures pool doesn't create excess connections
  connectionLimit: 200, // Maximum number of connections in the pool
  queueLimit: 0, // Maximum number of queued requests (0 for unlimited)
})

module.exports = pool
