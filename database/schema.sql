CREATE DATABASE Lanchonete;

USE Lanchonete;

CREATE TABLE categories(

    id INT PRIMARY KEY AUTO_INCREMENT,
    name VARCHAR(100) NOT NULL


);

CREATE TABLE products(

    id INT PRIMARY KEY AUTO_INCREMENT,

    image VARCHAR(256),
    name VARCHAR(100) NOT NULL,
    price DECIMAL(10,2),
    description TEXT,
    id_category INT,

    FOREIGN KEY (id_category)
        REFERENCES categories (id)

);







