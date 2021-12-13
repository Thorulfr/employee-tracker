// Imports
const db = require('../db/connection');

const addDepartment = (departmentObject) => {
    const sql = `INSERT INTO departments (name) VALUES (?)`;
    const params = [departmentObject.name];
    db.query(sql, params, (err, result) => {
        if (err) {
            console.error(err);
            return;
        }
        console.log('Department added successfully');
        return;
    });
};

const addRole = (roleObject) => {
    const sql = `INSERT INTO roles (job_title, salary, dep_id) VALUES (?,?,?)`;
    const params = [roleObject.name, roleObject.salary, roleObject.department];
    console.log(params);
    db.query(sql, params, (err, result) => {
        if (err) {
            console.error(err);
            return;
        }
        console.log('Role added successfully');
        return;
    });
};

const addEmployee = (employeeObject) => {
    const sql = `INSERT INTO employees (first_name, last_name, role_id, manager_id) VALUES (?,?,?,?)`;
    const params = [
        employeeObject.firstName,
        employeeObject.lastName,
        employeeObject.role,
        employeeObject.manager,
    ];
    db.query(sql, params, (err, result) => {
        if (err) {
            console.error(err);
            return;
        }
        console.log('Employee added successfully');
        return;
    });
};

module.exports = { addDepartment, addRole, addEmployee };
