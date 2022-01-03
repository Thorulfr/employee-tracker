// Imports
require('dotenv').config();
const inquirer = require('inquirer');
const db = require('./db/connection');

// Declarations
let departments = [];
let roles = [];
let employees = [];

// Initial getters for prompts
// Get departments
const getDepartmentsInitial = () => {
    const sql = `SELECT * FROM departments`;
    db.query(sql, (err, rows) => {
        if (err) {
            console.error(err);
        }
        let tempArray = [];
        for (let i = 0; i < rows.length; i++) {
            let tempObject = {};
            tempObject.value = rows[i].id;
            tempObject.name = rows[i].name;
            tempArray.push(tempObject);
        }
        departments = tempArray;
    });
};

// Get roles
const getRolesInitial = () => {
    const sql = `SELECT * FROM roles`;
    db.query(sql, (err, rows) => {
        if (err) {
            console.error(err);
        }
        let tempArray = [];
        for (let i = 0; i < rows.length; i++) {
            let tempObject = {};
            tempObject.value = rows[i].id;
            tempObject.name = rows[i].job_title;
            tempArray.push(tempObject);
        }
        roles = tempArray;
    });
};

// Get employees
const getEmployeesInitial = () => {
    const sql = `SELECT * FROM employees`;
    db.query(sql, (err, rows) => {
        if (err) {
            console.error(err);
        }
        let tempArray = [];
        for (let i = 0; i < rows.length; i++) {
            let tempObject = {};
            tempObject.value = rows[i].id;
            tempObject.name = rows[i].first_name + ' ' + rows[i].last_name;
            tempArray.push(tempObject);
        }
        employees = tempArray;
    });
};

// Main menu/Initial prompt
const initialPrompt = () => {
    return inquirer
        .prompt({
            type: 'list',
            name: 'mainMenuChoice',
            message: 'What would you like to do?',
            choices: [
                'View all departments',
                'View all roles',
                'View all employees',
                'Add a department',
                'Add a role',
                'Add an employee',
                'Update an employee role',
                'Quit',
            ],
        })
        .then((userChoice) => {
            return userChoice;
        });
};

// Add department prompt
const addDepartmentPrompt = (callback) => {
    return inquirer
        .prompt({
            type: 'input',
            name: 'name',
            message: 'Please enter the name of the department:',
        })
        .then((response) => {
            addDepartment(response, callback);
        });
};

// Add role prompt
const addRolePrompt = () => {
    return inquirer
        .prompt([
            {
                type: 'input',
                name: 'name',
                message: 'Please enter the name of the role:',
            },
            {
                type: 'input',
                name: 'salary',
                message: "Please enter the role's salary (e.g., 42000):",
            },
            {
                type: 'list',
                name: 'department',
                message:
                    'Please select the department to which the role belongs:',
                choices: departments,
            },
        ])
        .then((response) => {
            addRole(response);
        });
};

// Add employee prompt
const addEmployeePrompt = () => {
    return inquirer
        .prompt([
            {
                type: 'input',
                name: 'firstName',
                message: "Please enter the employee's first name:",
            },
            {
                type: 'input',
                name: 'lastName',
                message: "Please enter the employee's last name:",
            },
            {
                type: 'list',
                name: 'role',
                message: "Please enter the employee's role:",
                choices: roles,
            },
            {
                type: 'list',
                name: 'manager',
                message: "Please enter the employee's manager:",
                choices: employees,
            },
        ])
        .then((response) => {
            addEmployee(response);
        });
};

// Get departments
const getDepartments = () => {
    const sql = `SELECT * FROM departments`;
    db.query(sql, (err, rows) => {
        if (err) {
            console.error(err);
        }
        console.table(rows);
        initialize();
    });
};

// Get roles
const getRoles = () => {
    const sql = `SELECT * FROM roles`;
    db.query(sql, (err, rows) => {
        if (err) {
            console.error(err);
        }
        console.table(rows);
        initialize();
    });
};

// Get employees
const getEmployees = () => {
    const sql = `SELECT * FROM employees`;
    db.query(sql, (err, rows) => {
        if (err) {
            console.error(err);
        }
        console.table(rows);
        initialize();
    });
};

// Add a department
const addDepartment = (departmentObject) => {
    const sql = `INSERT INTO departments (name) VALUES (?)`;
    const params = [departmentObject.name];
    db.query(sql, params, (err, result) => {
        if (err) {
            console.error(err);
            return;
        }
        console.log('Department added successfully');
        initialize();
    });
};

// Add a role
const addRole = (roleObject) => {
    const sql = `INSERT INTO roles (job_title, salary, dep_id) VALUES (?,?,?)`;
    const params = [roleObject.name, roleObject.salary, roleObject.department];
    db.query(sql, params, (err, result) => {
        if (err) {
            console.error(err);
            return;
        }
        console.log('Role added successfully');
        initialize();
    });
};

// Add an employee
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
        initialize();
    });
};

// Update employee role
const updateRole = () => {
    console.log('Update an employee role');
};

// Quit
const quit = () => {
    console.log('Logging you out. Have a wonderful day!');
    process.exit();
};

const initialize = () => {
    getDepartmentsInitial();
    getRolesInitial();
    getEmployeesInitial();
    initialPrompt().then((userChoice) => {
        switch (userChoice.mainMenuChoice) {
            case 'View all departments':
                getDepartments();
                break;
            case 'View all roles':
                getRoles();
                break;
            case 'View all employees':
                getEmployees();
                break;
            case 'Add a department':
                addDepartmentPrompt();
                break;
            case 'Add a role':
                addRolePrompt();
                break;
            case 'Add an employee':
                addEmployeePrompt();
                break;
            case 'Update an employee role':
                updateRole();
                break;
            case 'Quit':
                quit();
        }
    });
};

initialize();
