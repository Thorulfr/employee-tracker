// Imports
require('dotenv').config();
const inquirer = require('inquirer');
const db = require('./db/connection');
const {
    getDepartments,
    getRoles,
    getEmployees,
} = require('./jsModules/getters');
const { addDepartment, addRole, addEmployee } = require('./jsModules/posters');
const employeeRoles = [
    'CEO',
    'COO',
    'Head of Development',
    'HR Head',
    'Hiring Manager',
    'Arbitrator',
    'HTML/CSS Senior Dev',
    'HTML/CSS Junior Dev',
    'JS/Express Senior Dev',
    'JS/Express Junior Dev',
    'System Administrator',
    'Network Administrator',
];

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

// View all departments
const viewDepartments = () => {
    getDepartments();
};

// View all roles
const viewRoles = () => {
    getRoles();
};

// View all employees
const viewEmployees = () => {
    getEmployees();
};

// Add a department
const addDepartmentPrompt = () => {
    return inquirer
        .prompt({
            type: 'input',
            name: 'name',
            message: 'Please enter the name of the department:',
        })
        .then((response) => {
            addDepartment(response);
        });
};

// Add a role
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
                choices: [1],
            },
        ])
        .then((response) => {
            console.log(response);
            addRole(response);
        });
};

// Add an employee
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
                choices: [1],
            },
            {
                type: 'list',
                name: 'manager',
                message: "Please enter the employee's manager:",
                choices: [1],
            },
        ])
        .then((response) => {
            addEmployee(response);
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
    initialPrompt().then((userChoice) => {
        switch (userChoice.mainMenuChoice) {
            case 'View all departments':
                viewDepartments();
                return initialize();
            case 'View all roles':
                viewRoles();
                return initialize();
            case 'View all employees':
                viewEmployees();
                return initialize();
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
