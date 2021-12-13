INSERT INTO departments (name)
VALUES
    ('Management'),
    ('HR'),
    ('Frontend Devs'),
    ('Backend Devs'),
    ('Information Security');

INSERT INTO roles (job_title, salary, dep_id)
VALUES
    ('CEO', 50000, 1),
    ('COO', 52000, 1),
    ('Head of Development', 69000, 1),
    ('HR Head', 45000, 2),
    ('Hiring Manager', 45000, 2),
    ('Arbitrator', 42000, 2),
    ('HTML/CSS Senior Dev', 55000, 3),
    ('HTML/CSS Junior Dev', 40000, 3),
    ('JS/Express Senior Dev', 55000, 4),
    ('JS/Express Junior Dev', 40000, 4),
    ('System Administrator', 60000, 5),
    ('Network Administrator', 60000, 5);

INSERT INTO employees (first_name, last_name, role_id, manager_id)
VALUES
    ('Colin', 'Roberts', 1, null),
    ('Eric', 'May', 2, 1),
    ('Ian', 'Lewis', 3, 2),
    ('Elizabeth', 'Vaughan', 4, 2),
    ('Alexander', 'Wilkins', 5, 4),
    ('Diane', 'Avery', 6, 4),
    ('Angela', 'Peters', 6, 4),
    ('Boris', 'Bower', 7, 3),
    ('Rebecca', 'Dickens', 8, 8),
    ('Mary', 'Black', 8, 8),
    ('Charles', 'Knox', 9, 3),
    ('Una', 'Wright', 10, 11),
    ('Alexandra', 'Randall', 10, 11),
    ('Anna', 'Bond', 10, 11),
    ('Alan', 'Roberts', 11, 3),
    ('Virginia', 'King', 12, 3);