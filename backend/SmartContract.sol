// SPDX-License-Identifier: MIT
pragma solidity ^0.6.0;

contract SmartContract {
    struct Item {
        string name;
        string description;
        string image;
        string category;
        uint256 price;
        string seller;
    }

    mapping(uint256 => Item) public items; // Token ID to Item

    address public owner;

    event ItemPurchased(uint256 indexed tokenId, address buyer, uint256 price, uint256 time);

    constructor() public {
        owner = msg.sender;
        //123456789000000000 Wei equivalent to 0.123456789 Ether.
        items[1] = Item("Item 1", "Item 1 Description", "https://i.ibb.co/r58jQcq/tech1.jpg", "Tech", 123456789, "Andrew");
        items[2] = Item("Item 2", "Item 2 Description", "https://i.ibb.co/kJ23Wbb/tech2.jpg", "Tech", 123456789, "Andrew");
        items[3] = Item("Item 3", "Item 3 Description", "https://i.ibb.co/zsmJY80/tech3.jpg", "Tech", 123456789, "Andrew");
        items[4] = Item("Item 4", "Item 4 Description", "https://i.ibb.co/XyFRTBY/tech4.jpg", "Tech", 123456789, "Andrew");
        items[5] = Item("Item 5", "Item 5 Description", "https://i.ibb.co/ChYQdQC/art1.png", "Art", 123456789, "Yuan");
        items[6] = Item("Item 6", "Item 6 Description", "https://i.ibb.co/842cvSM/art2.png", "Art", 123456789, "Yuan");
        items[7] = Item("Item 7", "Item 7 Description", "https://i.ibb.co/YDnrM2r/art3.png", "Art", 123456789, "Yuan");
        items[8] = Item("Item 8", "Item 8 Description", "https://i.ibb.co/Jv5f5Jd/art4.png", "Art", 123456789, "Yuan");
        items[9] = Item("Item 9", "Item 9 Description", "https://i.ibb.co/cwyXfzy/fashion1.png", "Fashion", 123456789, "Tom");
        items[10] = Item("Item 10", "Item 10 Description", "https://i.ibb.co/xX3MX8C/fashion2.png", "Fashion", 123456789, "Tom");
        items[11] = Item("Item 11", "Item 11 Description", "https://i.ibb.co/RhwgT9P/fashion3.jpg", "Fashion", 123456789, "Tom");
        items[12] = Item("Item 12", "Item 12 Description", "https://i.ibb.co/YZtrQ36/fashion4.jpg", "Fashion", 123456789, "Tom");
    }


    function buyItem(uint256 _tokenId) public payable {
        require(items[_tokenId].price > 0, "Item does not exist");
        require(msg.value == items[_tokenId].price, "Incorrect ETH value sent");

        emit ItemPurchased(_tokenId, msg.sender, items[_tokenId].price, block.timestamp);
    }
}
