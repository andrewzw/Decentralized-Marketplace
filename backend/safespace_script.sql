DROP DATABASE IF EXISTS SafeSpace;
CREATE DATABASE SafeSpace;
USE SafeSpace;

-- Market Page Tables -----------------------------------------------------------------------------------------------------------------------------------
CREATE TABLE listedItems(
    item_id INT AUTO_INCREMENT PRIMARY KEY, 
    name VARCHAR(50) NOT NULL, 
    description VARCHAR(30) NOT NULL, 
    image VARCHAR(300) NOT NULL, 
    cat ENUM ("Tech", "Art", "Fashion") NOT NULL, 
    price DECIMAL(10,10) NOT NULL, 
    seller VARCHAR(50) NOT NULL,
    featured BIT(1) NOT NULL,
    INDEX cat (cat),
    INDEX featured (featured)
);

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
    
-- About Page Tables -----------------------------------------------------------------------------------------------------------------------------------

CREATE TABLE goalImages(
    image VARCHAR(300) NOT NULL,
    alt VARCHAR(30) NOT NULL,
    description VARCHAR(30) NOT NULL
);

CREATE TABLE memberImages(
    image VARCHAR(300) NOT NULL,
    alt VARCHAR(30) NOT NULL
);

INSERT INTO goalImages(image, alt, description) VALUE ("https://i.ibb.co/PQxFkMV/trend.png", "trend", "See the rise of your NFT");
INSERT INTO goalImages(image, alt, description) VALUE ("https://i.ibb.co/5vVP1yn/support.png", "tag", "Create and Sell your NFT");
INSERT INTO goalImages(image, alt, description) VALUE ("https://i.ibb.co/m0qyQr3/tag.png", "palette", "Browse our various NFTs");
INSERT INTO goalImages(image, alt, description) VALUE ("https://i.ibb.co/Xt1dCNZ/palette.png", "support", "Support the NFT creators");

INSERT INTO memberImages(image, alt) VALUE ("https://i.ibb.co/KLcTHw2/Tom.jpg", "Tom");
INSERT INTO memberImages(image, alt) VALUE ("https://i.ibb.co/M6NcG4c/Andrew.jpg", "Andrew");
INSERT INTO memberImages(image, alt) VALUE ("https://i.ibb.co/rf6XcSF/Yuan.jpg", "Yuan");

-- FAQ Page Tables -----------------------------------------------------------------------------------------------------------------------------------
CREATE TABLE mainQuestion(
    main_id INT AUTO_INCREMENT PRIMARY KEY,
    main_question VARCHAR(300) NOT NULL
);

CREATE TABLE subQuestion(
    main_id INT,
    sub_question VARCHAR(300) NOT NULL,
    answer VARCHAR(300) NOT NULL,
    INDEX main_id (main_id),
    FOREIGN KEY (main_id) REFERENCES mainQuestion(main_id)
);

INSERT INTO mainQuestion(main_question) VALUE ("General");
INSERT INTO mainQuestion(main_question) VALUE ("Transaction");
INSERT INTO mainQuestion(main_question) VALUE ("Security");
INSERT INTO mainQuestion(main_question) VALUE ("Issues");
INSERT INTO mainQuestion(main_question) VALUE ("Popular Questions");
INSERT INTO mainQuestion(main_question) VALUE ("Other Resources");

INSERT INTO subQuestion(main_id, sub_question, answer) VALUE ("1", "What is SafeSpace?", "SafeSpace is a digital market where you can discover and buy unique NFTs.");
INSERT INTO subQuestion(main_id, sub_question, answer) VALUE ("1", "What can I find on SafeSpace?", "You can find various types of NFT made by artists and creators from around the world.");
INSERT INTO subQuestion(main_id, sub_question, answer) VALUE ("1", "How do I get in touch for support?", "If you have any inquiries, you can contact our support staff through phone +123456789 or email safespace@gmail.com.");

INSERT INTO subQuestion(main_id, sub_question, answer) VALUE ("2", "How do I buy an NFT?", "To buy an NFT, you have to have an account, then browse on the marketplace, click on the NFT and select buy.");
INSERT INTO subQuestion(main_id, sub_question, answer) VALUE ("2", "What payment methods are accepted?", "We accept Ethereum and credit card payments.");
INSERT INTO subQuestion(main_id, sub_question, answer) VALUE ("2", "How do I know if my purchase was successful?", "You can view your transaction history in your account.");
INSERT INTO subQuestion(main_id, sub_question, answer) VALUE ("2", "What happens when I purchase an NFT?", "The purchased NFT will be transfered over to your account, you can trade it with others or keep it for yourself.");

INSERT INTO subQuestion(main_id, sub_question, answer) VALUE ("3", "Is my personal information secure?", "We take your security and privacy seriously. Your data is protected by the most recent encryption and security techniques.");
INSERT INTO subQuestion(main_id, sub_question, answer) VALUE ("3", "What is blockchain technology?", "Blockchain technology ensures that your creation, ownership and trading of NFTs is transparent, secure and authentic.");
INSERT INTO subQuestion(main_id, sub_question, answer) VALUE ("3", "Can my account be hacked?", "We have firewalls and intrusion detection systems in place, and we regularly update our security.");
INSERT INTO subQuestion(main_id, sub_question, answer) VALUE ("3", "What if I find a suspicious account or activity?", "Please inform our support staff right away, we will quickly take any necessary action to keep our site secure.");
INSERT INTO subQuestion(main_id, sub_question, answer) VALUE ("3", "Do you store our payment information?", "No, we never save any kind of credit card or other payment information on our servers for any reason.");
INSERT INTO subQuestion(main_id, sub_question, answer) VALUE ("3", "What should I do if I suspect my account is compromised?", "Change your password right away and get in touch with our support staff if you think your account has been compromised.");

INSERT INTO subQuestion(main_id, sub_question, answer) VALUE ("4", "What to do if I cannot log in to my account?", "Double-check your username and password, contact our support staff for further assistance.");
INSERT INTO subQuestion(main_id, sub_question, answer) VALUE ("4", "I am not able to see my purchased NFT", "Check your transaction history in your account to confirm the purchase, wait for some time, contact our support staff for further assistance.");
INSERT INTO subQuestion(main_id, sub_question, answer) VALUE ("4", "Can I request a refund?", "NFT transactions are typically irreversible, contact the seller to discuss your issue.");

INSERT INTO subQuestion(main_id, sub_question, answer) VALUE ("5", "What is an NFT?", "NFT is referred to Non-Fungible Token. It is a type of digital assest that uses blockchian technology to indicate ownership of a unique item.");
INSERT INTO subQuestion(main_id, sub_question, answer) VALUE ("5", "Can I showcase my NFTs to others?", "Yes, you can share your assests in your account and others will be able to see them.");
INSERT INTO subQuestion(main_id, sub_question, answer) VALUE ("5", "How do I create an account?", "Click on the profile button in the navigation bar, fill in your information to sign in, an email would be sent to you to verify your account.");
INSERT INTO subQuestion(main_id, sub_question, answer) VALUE ("5", "How do I access my NFTs", "Log in your account, go to your account asset.");

INSERT INTO subQuestion(main_id, sub_question, answer) VALUE ("6", "Educational Resources", "https://www.nft-helper.com");
INSERT INTO subQuestion(main_id, sub_question, answer) VALUE ("6", "Social Media Links", "https://www.twitter.com/safespace");

-- Login/Dashboard Tables -----------------------------------------------------------------------------------------------------------------------------------
CREATE TABLE users (
    user_id INT AUTO_INCREMENT PRIMARY KEY,
    username VARCHAR(255) NOT NULL,
    pass VARCHAR(255) NOT NULL,
    balance DECIMAL(10, 2) NOT NULL,
    INDEX username (username),
    INDEX pass (pass),
    INDEX balance (balance),
    UNIQUE (username));

INSERT INTO users (username, pass, balance) VALUES ('user1','pass1', 100.00);
INSERT INTO users (username, pass, balance) VALUES ('user2','pass2', 50.00);
INSERT INTO users (username, pass, balance) VALUES ('user3','pass3', 40.00);

-- Bought table--
CREATE TABLE bought (
    user_id INT,
    item_id INT,
    purchase_date TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    quantity INT,
    INDEX user_id (user_id),
    INDEX item_id (item_id),
    INDEX quantity (quantity),
    FOREIGN KEY (user_id) REFERENCES users(user_id),
    FOREIGN KEY (item_id) REFERENCES listedItems(item_id)
);

-- Insert some sample bought items
INSERT INTO bought (user_id, item_id, quantity) VALUES (1, 1, 1); -- us1 bought Item 1
INSERT INTO bought (user_id, item_id, quantity) VALUES (1, 2, 4); -- us1 bought Item 2
INSERT INTO bought (user_id, item_id, quantity) VALUES (2, 3, 1); -- us3 bought Item 3


-- listedItems
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


-- goalImages
-- https://i.ibb.co/PQxFkMV/trend.png
-- https://i.ibb.co/5vVP1yn/support.png
-- https://i.ibb.co/m0qyQr3/tag.png
-- https://i.ibb.co/Xt1dCNZ/palette.png


-- memberImages
-- https://i.ibb.co/KLcTHw2/Tom.jpg
-- https://i.ibb.co/M6NcG4c/Andrew.jpg
-- https://i.ibb.co/rf6XcSF/Yuan.jpg
