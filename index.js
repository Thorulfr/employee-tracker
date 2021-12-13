// Imports
require('dotenv').config();
const inquirer = require('inquirer');
const db = require('./db/connection');
const { getDeps, getRoles, getEmployees } = require('./jsModules/getters');

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
const viewDeps = () => {
    getDeps();
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
const addDep = () => {
    console.log('Add a department');
};

// Add a role
const addRole = () => {
    console.log('Add a role');
};

// Add an employee
const addEmployee = () => {
    console.log('Add an employee');
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

// Connect to database
db.connect((err) => {
    if (err) throw err;
    console.log('Database connected.');
});

const initialize = () => {
    initialPrompt().then((userChoice) => {
        switch (userChoice.mainMenuChoice) {
            case 'View all departments':
                viewDeps();
            case 'View all roles':
                viewRoles();
                break;
            case 'View all employees':
                viewEmployees();
                break;
            case 'Add a department':
                addDep();
                break;
            case 'Add a role':
                addRole();
                break;
            case 'Add an employee':
                addEmployee();
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
