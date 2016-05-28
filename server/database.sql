CREATE TABLE categories
(
    id INT(11) NOT NULL AUTO_INCREMENT,
    title VARCHAR(100) NOT NULL,
    PRIMARY KEY (id)
);

CREATE TABLE products
(
    id INT(11) NOT NULL AUTO_INCREMENT,
    categoryId INT(11) NOT NULL,
    name VARCHAR(100) NOT NULL,
    active BOOLEAN NOT NULL DEFAULT 1,
    value NUMERIC(15,2) NOT NULL,
    PRIMARY KEY (id),
    FOREIGN KEY (categoryId) REFERENCES categories(id) ON DELETE CASCADE
);

CREATE TABLE clients
(
    id INT(11) NOT NULL AUTO_INCREMENT,
    name VARCHAR(100) NOT NULL,
    gender ENUM('m', 'f') DEFAULT 'm',
    cpf VARCHAR(14) NOT NULL,
    PRIMARY KEY (id)
);

CREATE TABLE sales
(
    id INT(11) NOT NULL AUTO_INCREMENT,
    clientId INT(11) NOT NULL,
    date DATETIME NOT NULL,
    status ENUM('o', 'f', 'c') DEFAULT 'o',
    totalValue NUMERIC(15,2) NOT NULL,
    PRIMARY KEY(id),
    FOREIGN KEY(clientId) REFERENCES clients(id) ON DELETE CASCADE
);

CREATE TABLE saleItems (
    id INT(11) NOT NULL AUTO_INCREMENT,
    saleId INT(11) NOT NULL,
    productId INT(11) NOT NULL,
    quantity INT(11) NOT NULL,
    unitaryValue NUMERIC(15,2) NOT NULL,
    PRIMARY KEY(id),
    FOREIGN KEY(saleId) REFERENCES sales(id) ON DELETE CASCADE,
    FOREIGN KEY(productId) REFERENCES products(id) ON DELETE CASCADE
);
