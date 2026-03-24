CREATE DATABASE tienda_bicis;
USE tienda_bicis;

drop table bike;
CREATE TABLE bike(
	bike_id INT NOT NULL PRIMARY KEY AUTO_INCREMENT,
    brand VARCHAR(100) NOT NULL,
    model VARCHAR(100) NOT NULL,
    price FLOAT,
    type SMALLINT,  -- ELECTRICAS: 1||NORMALES: 2
    picture VARCHAR(100)
);

SELECT * FROM bike;