CREATE DATABASE IF NOT EXISTS dk_fotografia 
    CHARACTER SET utf8mb4 
    COLLATE utf8mb4_unicode_ci;

CREATE TABLE IF NOT EXISTS dk_fotografia.user(
	id INT AUTO_INCREMENT,
	first_name VARCHAR(80) NOT NULL,
	last_name VARCHAR(64) NOT NULL,
	username VARCHAR(100) NOT NULL UNIQUE,
    `password` VARCHAR(64) NOT NULL,
	`role` ENUM('ADMIN', 'CUSTOMER') NOT NULL,
	PRIMARY KEY(id)
);

INSERT INTO dk_fotografia.user (first_name, last_name, username, password, role)
	VALUES
		('Alfredo', 'Arista', 'alfredo_admin', '$2a$10$H1Q4oF1zV9sCw1m5Wc4A7uPzRsn6DkLrYv9h9z0V3iTkZC1S4s2sC', 'ADMIN'),
		('María', 'López', 'mlopez', '$2a$10$7R7pO6Ybz0g9gF4sE5zv4OSd7f3KSh7cR7Tt5W5mQ9mE4qUuBf2bC', 'CUSTOMER'),
		('Juan', 'Pérez', 'jperez', '$2a$10$Xc2OiyQ7U3A5GvVf6F3XgOg3E6Ff2v8WkHk1dZcB4wA1nZfD5aKzC', 'CUSTOMER'),
		('Lucía', 'Martínez', 'luciam', '$2a$10$KkZ1zTnPp4Rj5E8gTzE5hO3YjT6Wf3RjLzA6nG2rP5zH2dWvQ4aV.', 'CUSTOMER');

SELECT * FROM dk_fotografia.`user`;