// Imports
const db = require('../db/connection');

const getDepartments = () => {
    const sql = `SELECT * FROM departments`;
    db.query(sql, (err, rows) => {
        if (err) {
            console.error(err);
        }
        console.table(rows);
    });
};

const getRoles = () => {
    const sql = `SELECT * FROM roles`;
    db.query(sql, (err, rows) => {
        if (err) {
            console.error(err);
        }
        console.table(rows);
    });
};

const getEmployees = () => {
    const sql = `SELECT * FROM employees`;
    db.query(sql, (err, rows) => {
        if (err) {
            console.error(err);
        }
        console.table(rows);
    });
};

module.exports = { getDepartments, getRoles, getEmployees };
