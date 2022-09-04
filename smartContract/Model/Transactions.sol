// SPDX-License-Identifier: UNLICENSED

// This defines the version of Solidity I am using
pragma solidity ^0.8.0;

// This contract serves the purpose of a class in OOP
contract Transactions {
    // This variable will hold the number of our transactions
    uint256 transactionCounter;

    // This is a function which er are going to call later on
    // This function accepts few parameters for each of our transactions
    event Transfer(address from, address receiver, uint amount, string message, uint256 timestamp, string keyword);

    // This performs similar to an object where we are just specifying the properties of the object
    // No decralation of object takes place here
    struct TransferStruct {
        address sender;
        address receiver;
        uint amount;
        string message;
        uint256 timestamp;
        string keyword;
    } 
    
    // Array for different transactions to store all of them
    TransferStruct[] transactions;
    
    function addToBlockchain(address payable receiver, uint amount, string memory message, string memory keyword) public {
        transactionCounter++;
        transactions.push(TransferStruct(msg.sender, receiver, amount, message, block.timestamp, keyword));

        // This emits the actual transfer
        emit Transfer(msg.sender, receiver, amount, message, block.timestamp, keyword);
    }
    
    function getAllTransactions() public view returns (TransferStruct[] memory) {
        return transactions;
    }
    
    function getTransactionCount() public view returns (uint256) {
        return transactionCounter;
    }

    function transfer(address payable receiver) external payable {
        receiver.transfer(msg.value);
    }
}
