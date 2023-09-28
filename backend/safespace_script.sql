DROP DATABASE IF EXISTS SafeSpace;
CREATE DATABASE SafeSpace;
USE SafeSpace;

-- Market Page Tables -----------------------------------------------------------------------------------------------------------------------------------
CREATE TABLE listedItems(
    item_id INT AUTO_INCREMENT PRIMARY KEY, 
    name VARCHAR(50) NOT NULL, 
    description VARCHAR(30) NOT NULL, 
    image VARCHAR(300) NOT NULL, 
    cat VARCHAR(50) NOT NULL, 
    price DECIMAL(10,10) NOT NULL, 
    seller VARCHAR(50) NOT NULL,
    featured BIT(1) NOT NULL);

INSERT INTO listedItems(name, description, image, cat, price, seller, featured) VALUE ("Item 1", "Item 1 Description", "https://i.ibb.co/r58jQcq/tech1.jpg", "Tech", "0.123456789", "Andrew", 0);
INSERT INTO listedItems(name, description, image, cat, price, seller, featured) VALUE ("Item 2", "Item 2 Description", "https://i.ibb.co/kJ23Wbb/tech2.jpg", "Tech", "0.123456789", "Andrew", 1);
INSERT INTO listedItems(name, description, image, cat, price, seller, featured) VALUE ("Item 3", "Item 3 Description", "https://i.ibb.co/zsmJY80/tech3.jpg", "Tech", "0.123456789", "Andrew", 0);
INSERT INTO listedItems(name, description, image, cat, price, seller, featured) VALUE ("Item 4", "Item 4 Description", "https://i.ibb.co/XyFRTBY/tech4.jpg", "Tech", "0.123456789", "Andrew", 1);
INSERT INTO listedItems(name, description, image, cat, price, seller, featured) VALUE ("Item 5", "Item 5 Description", "https://i.ibb.co/ChYQdQC/art1.png", "Art", "0.123456789", "Yuan", 1);
INSERT INTO listedItems(name, description, image, cat, price, seller, featured) VALUE ("Item 6", "Item 6 Description", "https://i.ibb.co/842cvSM/art2.png", "Art", "0.123456789", "Yuan", 0);
INSERT INTO listedItems(name, description, image, cat, price, seller, featured) VALUE ("Item 7", "Item 7 Description", "https://i.ibb.co/YDnrM2r/art3.png", "Art", "0.123456789", "Yuan", 0);
INSERT INTO listedItems(name, description, image, cat, price, seller, featured) VALUE ("Item 8", "Item 8 Description", "https://i.ibb.co/Jv5f5Jd/art4.png", "Art", "0.123456789", "Yuan", 0);
INSERT INTO listedItems(name, description, image, cat, price, seller, featured) VALUE ("Item 9", "Item 9 Description", "https://i.ibb.co/cwyXfzy/fashion1.png", "Fashion", "0.123456789", "Tom", 1);
INSERT INTO listedItems(name, description, image, cat, price, seller, featured) VALUE ("Item 10", "Item 10 Description", "https://i.ibb.co/xX3MX8C/fashion2.png", "Fashion", "0.123456789", "Tom", 0);
INSERT INTO listedItems(name, description, image, cat, price, seller, featured) VALUE ("Item 11", "Item 11 Description", "https://i.ibb.co/RhwgT9P/fashion3.jpg", "Fashion", "0.123456789", "Tom", 0);
INSERT INTO listedItems(name, description, image, cat, price, seller, featured) VALUE ("Item 12", "Item 12 Description", "https://i.ibb.co/YZtrQ36/fashion4.jpg", "Fashion", "0.123456789", "Tom", 0);


-- https://i.ibb.co/ChYQdQC/art1.png
-- https://i.ibb.co/842cvSM/art2.png
-- https://i.ibb.co/YDnrM2r/art3.png
-- https://i.ibb.co/Jv5f5Jd/art4.png


-- https://i.ibb.co/cwyXfzy/fashion1.png
-- https://i.ibb.co/xX3MX8C/fashion2.png
-- https://i.ibb.co/RhwgT9P/fashion3.jpg
-- https://i.ibb.co/YZtrQ36/fashion4.jpg

-- https://i.ibb.co/r58jQcq/tech1.jpg
-- https://i.ibb.co/kJ23Wbb/tech2.jpg
-- https://i.ibb.co/zsmJY80/tech3.jpg
-- https://i.ibb.co/XyFRTBY/tech4.jpg

CREATE TABLE users (
    user_id INT AUTO_INCREMENT PRIMARY KEY,
    wallet VARCHAR(255) NOT NULL,
    balance DECIMAL(10, 6) NOT NULL,
    UNIQUE (wallet));


INSERT INTO users (wallet, balance) VALUES ('cat-dog-cat-bob', 100.00);
INSERT INTO users (wallet, balance) VALUES ('dog-cat-bob-cat', 50.00);