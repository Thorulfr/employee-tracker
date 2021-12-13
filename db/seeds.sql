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

INSERT INTO employees (first_name, last_name, role_id, manager)
VALUES
    ('Colin', 'Roberts', 1, null),
    ('Eric', 'May', 2, 'Colin Roberts'),
    ('Ian', 'Lewis', 3,'Eric May' ),
    ('Elizabeth', 'Vaughan', 4, 'Eric May'),
    ('Alexander', 'Wilkins', 5, 'Elizabeth Vaughan'),
    ('Diane', 'Avery', 6, 'Elizabeth Vaughan'),
    ('Angela', 'Peters', 6, 'Elizabeth Vaughan'),
    ('Boris', 'Bower', 7, 'Ian Lewis'),
    ('Rebecca', 'Dickens', 8, 'Boris Bower'),
    ('Mary', 'Black', 8, 'Boris Bower'),
    ('Charles', 'Knox', 9, 'Ian Lewis'),
    ('Una', 'Wright', 10, 'Charles Knox'),
    ('Alexandra', 'Randall', 10, 'Charles Knox'),
    ('Anna', 'Bond', 10, 'Charles Knox'),
    ('Alan', 'Roberts', 11, 'Ian Lewis'),
    ('Virginia', 'King', 12, 'Ian Lewis');