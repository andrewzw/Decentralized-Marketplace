// SPDX-License-Identifier: MIT
pragma solidity ^0.6.0;

contract Marketplace {
    struct Item {
        string name;
        uint256 price;
        uint256 purchasedTime;
    }

    struct User {
        string name;
        string email;
    }

    mapping(uint256 => Item) public items; // Token ID to Item
    mapping(address => User) public users; // Address to User
    mapping(uint256 => address) public itemOwners; // Token ID to Owner

    event ItemPurchased(uint256 indexed tokenId, address buyer, uint256 price, uint256 time);

    function setUserInfo(string memory _name, string memory _email) public {
        User memory newUser = User(_name, _email);
        users[msg.sender] = newUser;
    }

    function addItem(uint256 _tokenId, string memory _name, uint256 _price) public {
        require(items[_tokenId].price == 0, "Item already exists");
        Item memory newItem = Item(_name, _price, 0);
        items[_tokenId] = newItem;
    }

    function buyItem(uint256 _tokenId) public payable {
        require(items[_tokenId].price > 0, "Item does not exist");
        require(msg.value == items[_tokenId].price, "Incorrect ETH value sent");

        items[_tokenId].purchasedTime = block.timestamp;
        itemOwners[_tokenId] = msg.sender;

        emit ItemPurchased(_tokenId, msg.sender, items[_tokenId].price, items[_tokenId].purchasedTime);
    }
}
