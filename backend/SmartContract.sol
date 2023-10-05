// SPDX-License-Identifier: MIT
pragma solidity ^0.6.0;

contract SmartContract {

    event SimpleEvent(string message, address indexed sender);

    function triggerEvent(string memory _message) public {
        emit SimpleEvent(_message, msg.sender);
    }
}
