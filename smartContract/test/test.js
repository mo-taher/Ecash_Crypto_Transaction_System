const { expect } = require("chai");
const { ethers } = require("hardhat");


function conversion_weiToEtherem(currency){
  return ethers.utils.formatEther(currency);
};


function conversion_ethToWei(currency){
  return ethers.utils.parseEther(currency.toString());
};


describe("ECASH Transaction Testing", function () {
  let TransactionsTest;

  beforeEach(async function () {
    const TransactionsFactory = await ethers.getContractFactory("Transactions");
    
    [deployer, sender, receiver, ...users] = await ethers.getSigners();

    TransactionsTest = await TransactionsFactory.deploy();

  });

  describe("Send & Receive Transaction", function(){
    it("Updated Wallet of Sender & Receiver", async function(){
      const sender_balance = +conversion_weiToEtherem(await sender.getBalance()); 
      const receiver_balance = +conversion_weiToEtherem(await receiver.getBalance());
      
      await TransactionsTest.connect(sender).transfer(receiver.address, {value: conversion_ethToWei(1000)});

      const updated_sender_balance = +conversion_weiToEtherem(await sender.getBalance()); 
      const updated_receiver_balance = +conversion_weiToEtherem(await receiver.getBalance());
      const gas_fee = 0.00005531564;      

      expect(sender_balance).to.equal(10000);
      expect(updated_sender_balance).to.equal(sender_balance-(1000 + gas_fee));
      expect(updated_receiver_balance).to.equal(receiver_balance+1000);

    });
  });
});
