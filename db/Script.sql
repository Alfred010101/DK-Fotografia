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

CREATE TABLE IF NOT EXISTS dk_fotografia.event_purchase (
    id INT AUTO_INCREMENT,
    fk_user INT NOT NULL,
    date DATE NOT NULL,
    location VARCHAR(150) NOT NULL,
    notes TEXT,
    card_number VARCHAR(20) NOT NULL,
    card_name VARCHAR(100) NOT NULL,
    expiry VARCHAR(7) NOT NULL,
    cvv VARCHAR(4) NOT NULL,
    package_name VARCHAR(100) NOT NULL,
    price DECIMAL(10,2) NOT NULL,
    PRIMARY KEY(id),
    FOREIGN KEY(fk_user) REFERENCES dk_fotografia.user(id)    
);

INSERT INTO dk_fotografia.user (first_name, last_name, username, password, role)
	VALUES
		('Alfredo', 'Arista', 'alfredo_admin', '$2a$10$XLnYmx/dV8f6ucgZpzDwE.PlvHW6CoB2duTzKcg0AZKDjLkXek0Fu', 'ADMIN'),
		('María', 'López', 'mlopez', '$2a$10$XLnYmx/dV8f6ucgZpzDwE.PlvHW6CoB2duTzKcg0AZKDjLkXek0Fu', 'CUSTOMER'),
		('Juan', 'Pérez', 'jperez', '$2a$10$XLnYmx/dV8f6ucgZpzDwE.PlvHW6CoB2duTzKcg0AZKDjLkXek0Fu', 'CUSTOMER'),
		('Lucía', 'Martínez', 'luciam', '$2a$10$XLnYmx/dV8f6ucgZpzDwE.PlvHW6CoB2duTzKcg0AZKDjLkXek0Fu', 'CUSTOMER');


SELECT * FROM dk_fotografia.`user`;

#DROP DATABASE dk_fotografia;

#DROP TABLE dk_fotografia.event_purchase;






























