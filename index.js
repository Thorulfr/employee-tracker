// Imports
const inquirer = require('inquirer');

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
            console.log(userChoice);
            return userChoice;
        });
};

// View all departments
const viewDeps = () => {
    console.log('View all departments');
};

// View all roles
const viewRoles = () => {
    console.log('View all roles');
};

// View all employees
const viewEmployees = () => {
    console.log('View all employees');
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
};

initialPrompt().then((userChoice) => {
    switch (userChoice.mainMenuChoice) {
        case 'View all departments':
            viewDeps();
            break;
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
            break;
    }
});
