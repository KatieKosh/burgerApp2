CREATE DATABASE burgers_db;
USE burgers_db;
CREATE TABLE burgers (
id INTEGER NOT NULL AUTO_INCREMENT,
burger_name VARCHAR(255),
devoured BOOLEAN DEFAULT false,
date DATETIME NOT NULL DEFAULT NOW(),
PRIMARY KEY (id)
);

USE burgers_db;
INSERT INTO burgers_db.burgers (burger_name, devoured)
VALUES ("Congress burger", false);
INSERT INTO burgers_db.burgers (burger_name, devoured)
VALUES ("Willie burger", false);
INSERT INTO burgers_db.burgers (burger_name, devoured)
VALUES ("Barton burger", false);
