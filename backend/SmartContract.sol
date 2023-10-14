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

    struct Transaction {
        address toAddress;
        address fromAddress;
        uint256 price;
        uint256 item;
    }

    mapping(uint256 => Item) public items;
    mapping(uint256 => Transaction) public transactions;

    address public owner;
    uint256 public transactionCount = 0;

    event ItemPurchased(
        uint256 indexed itemId,
        address buyer,
        uint256 price,
        uint256 time
    );
    event TransactionAdded(
        uint256 indexed transactionId,
        address toAddress,
        address fromAddress,
        uint256 price,
        uint256 item
    );

    constructor() public {
        owner = msg.sender;
        //123456789000000000 Wei equivalent to 0.123456789 Ether.
        items[1] = Item(
            "Item 1",
            "Item 1 Description",
            "https://i.ibb.co/r58jQcq/tech1.jpg",
            "Tech",
            123456789000000000,
            "Andrew"
        );
        items[2] = Item(
            "Item 2",
            "Item 2 Description",
            "https://i.ibb.co/kJ23Wbb/tech2.jpg",
            "Tech",
            123456789000000000,
            "Andrew"
        );
        items[3] = Item(
            "Item 3",
            "Item 3 Description",
            "https://i.ibb.co/zsmJY80/tech3.jpg",
            "Tech",
            123456789000000000,
            "Andrew"
        );
        items[4] = Item(
            "Item 4",
            "Item 4 Description",
            "https://i.ibb.co/XyFRTBY/tech4.jpg",
            "Tech",
            123456789000000000,
            "Andrew"
        );
        items[5] = Item(
            "Item 5",
            "Item 5 Description",
            "https://i.ibb.co/ChYQdQC/art1.png",
            "Art",
            123456789000000000,
            "Yuan"
        );
        items[6] = Item(
            "Item 6",
            "Item 6 Description",
            "https://i.ibb.co/842cvSM/art2.png",
            "Art",
            123456789000000000,
            "Yuan"
        );
        items[7] = Item(
            "Item 7",
            "Item 7 Description",
            "https://i.ibb.co/YDnrM2r/art3.png",
            "Art",
            123456789000000000,
            "Yuan"
        );
        items[8] = Item(
            "Item 8",
            "Item 8 Description",
            "https://i.ibb.co/Jv5f5Jd/art4.png",
            "Art",
            123456789000000000,
            "Yuan"
        );
        items[9] = Item(
            "Item 9",
            "Item 9 Description",
            "https://i.ibb.co/cwyXfzy/fashion1.png",
            "Fashion",
            123456789000000000,
            "Tom"
        );
        items[10] = Item(
            "Item 10",
            "Item 10 Description",
            "https://i.ibb.co/xX3MX8C/fashion2.png",
            "Fashion",
            123456789000000000,
            "Tom"
        );
        items[11] = Item(
            "Item 11",
            "Item 11 Description",
            "https://i.ibb.co/RhwgT9P/fashion3.jpg",
            "Fashion",
            123456789000000000,
            "Tom"
        );
        items[12] = Item(
            "Item 12",
            "Item 12 Description",
            "https://i.ibb.co/YZtrQ36/fashion4.jpg",
            "Fashion",
            123456789000000000,
            "Tom"
        );
    }

    function buyItems(
        uint256[] memory _itemIds,
        uint256[] memory _quantities
    ) public payable {
        // Check that the lengths of the _itemIds and _quantities arrays match
        require(
            _itemIds.length == _quantities.length,
            "Mismatched array lengths"
        );

        uint256 totalCost = 0;

        // Calculate the total cost of all items
        for (uint i = 0; i < _itemIds.length; i++) {
            uint256 itemId = _itemIds[i];
            uint256 quantity = _quantities[i];
            require(items[itemId].price > 0, "Item does not exist");
            totalCost += items[itemId].price * quantity;
        }

        // Check that the total cost matches the amount sent
        require(msg.value == totalCost, "Incorrect ETH value sent");

        // Process each item
        for (uint i = 0; i < _itemIds.length; i++) {
            uint256 itemId = _itemIds[i];
            uint256 quantity = _quantities[i];

            // Add transactions and emit events
            for (uint j = 0; j < quantity; j++) {
                transactions[transactionCount] = Transaction(
                    owner,
                    msg.sender,
                    items[itemId].price,
                    itemId
                );
                emit TransactionAdded(
                    transactionCount,
                    owner,
                    msg.sender,
                    items[itemId].price,
                    itemId
                );
                transactionCount++;
            }

            // Emit ItemPurchased event
            emit ItemPurchased(
                itemId,
                msg.sender,
                items[itemId].price * quantity,
                block.timestamp
            );
        }
    }
}
