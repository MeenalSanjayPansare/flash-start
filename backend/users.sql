CREATE DATABASE login_db;

USE login_db;

CREATE TABLE users (
    id INT AUTO_INCREMENT PRIMARY KEY,
    email VARCHAR(255) NOT NULL,
    password VARCHAR(255) NOT NULL
);

--Insert some test data 

INSERT INTO users (email, password) VALUES ('m@test.com','password123';)