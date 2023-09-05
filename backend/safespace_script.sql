CREATE DATABASE SafeSpace;
USE SafeSpace;
CREATE TABLE featuredItems(
    item_id INT AUTO_INCREMENT PRIMARY KEY, 
    name VARCHAR(50) NOT NULL, 
    description VARCHAR(30) NOT NULL, 
    image VARCHAR(300) NOT NULL, 
    cat VARCHAR(50) NOT NULL, 
    price DECIMAL(10,10) NOT NULL, 
    seller VARCHAR(50) NOT NULL);

INSERT INTO featuredItems(name, description, image, cat, price, seller) VALUE ("Featured 1", "Featured 1 Description", "https://images.unsplash.com/photo-1693748961027-756b95c4f396?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2800&q=80", "Tech", "0.123456789", "Andrew");
INSERT INTO featuredItems(name, description, image, cat, price, seller) VALUE ("Featured 2", "Featured 2 Description", "https://images.unsplash.com/photo-1693748961027-756b95c4f396?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2800&q=80", "Tech", "0.123456789", "Andrew");
INSERT INTO featuredItems(name, description, image, cat, price, seller) VALUE ("Featured 3", "Featured 3 Description", "https://images.unsplash.com/photo-1693748961027-756b95c4f396?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2800&q=80", "Tech", "0.123456789", "Andrew");
INSERT INTO featuredItems(name, description, image, cat, price, seller) VALUE ("Featured 4", "Featured 4 Description", "https://images.unsplash.com/photo-1693748961027-756b95c4f396?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2800&q=80", "Tech", "0.123456789", "Andrew");