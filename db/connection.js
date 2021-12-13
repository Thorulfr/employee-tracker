// Imports
const mysql = require('mysql2');

// Connect to database
const db = mysql.createConnection(
    {
        host: process.env.DB_HOST,
        user: process.env.DB_USER,
        password: process.env.DB_PW,
        database: process.env.DB_NAME,
        rowsAsArray: true,
    },
    console.log('Connected to the employee database!')
);

module.exports = db;
