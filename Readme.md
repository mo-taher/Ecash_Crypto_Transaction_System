![image](https://user-images.githubusercontent.com/68026627/194737126-b081d108-bf10-4c8d-b0b4-2ccce5112d89.png)

![image](https://user-images.githubusercontent.com/68026627/194737158-86ba6215-98d9-4f9d-b760-1634bbbc241b.png)


Smart Contract:
---------------

1. For downloading all the dependencies:
---------------------------------------
    cmd: npm install --save-dev hardhat @nomiclabs/hardhat-waffle ethereum-waffle chai @nomiclabs/hardhat-ethers ethers


# Notes: 
---------
    Hardhat: Hardhat is an ethereum development environment. It allows to easily deploy 
    contracts, run tests and debug Solidity code without dealing with live environments.

2. Installing Toolbox for hardhat test runs:
-------------------------------------------
    cmd: npm install --save-dev "hardhat@^2.10.1" "@nomicfoundation/hardhat-toolbox@^1.0.1"

3. For creating a basic project structure:
-----------------------------------------
    cmd: npx hardhat


4. Running hardhat:
------------------

    cmd: npx hardhat run scripts/deploy.js --network goerli


--------------------------------------------------------------------------
5. Transaction is deployed to: 0x791e7f7916c3ecc8281Ae1987d9177808C74e768 

This is going to be used in out client


6. The context folder is for connecting the blockchain (Controller)


View: 
-----
1. Index.css ->

    #Step 1: First importing this specific font (Line 01)
    #Step 2: Setting up default styling 
    #Step 3: Importing all the gradients (Line 16)

2. Navbar.jsx ->

    #Here, we are setting up justify for full, medium and other devices. (Line 14) 

3. Welcome.jsx ->

    #Imported a few icons (Line 1)
    #Importing loaded so that we later on when something get loaded here, we can import that from dot slash (Line 09)
    #This is centering the entire welcome part (Line 41)
    #This div is for modifying and implementing the card in the right of my welcome page (Line 102)

Controller(TransactionContext.jsx):
----------------------------------

1. Creating react context (Line 07)
2. To get access to the ethereum object in metamask (Line 09)
3. Passing ethereum window object; provider (Line 12)
4. contractAddress from constants.js file ; contractABI is fron TransactionContext.json file and signer from this section is passed as parameters (Line 13)
5. State Variables are created here (Line 26)
6. This handle change will dynamically update the form data (Line 30)
7. Getting Metamask connected account (Line 39)
8. To establish access to the formData varables (Line 79)
9. This transactionContract variable can be used to call all of the contract related functions (Line 80)
10. Here, the ethers package provides us utility functions to call, one of them is parse; parse generally parses decimal amount into grey hexadecimal amount (Line 82)
11. Conversion: (0x5280)hex = (21120)dec = 17664; gwei = 0.00002112; ether = 0.00000000000002112 (Line 90)
12. State variables are passed through the context value here (Line 119)


Model(Transaction.sol):
----------------------
1. This defines the version of Solidity I am using (Line 02)
2. This contract serves the purpose of a class in OOP (Line 04)
3. This variable will hold the number of our transactions (Line 05)
4. This is a function which er are going to call later on. This function accepts few parameters for each of our transactions (Line 06)
5. This performs similar to an object where we are just specifying the properties of the object.No decralation of object takes place here (Line 09)
6. Array for different transactions to store all of them (Line 18)
7. This emits the actual transfer (Line 23)


# Steps of Unit Testing:
----------------------------

Step 1: 1st imported chai and hardhat cause this test is going to run in hardhat

Step 2: 2nd, created a function conversion_weiToEtherem which basically converts a bignumber to string so that javascript can handle well

Step 3: 3rd, function conversion_ethToWei is converting the eth to wei in string

Step 4: I am using a mocha funtion "describe" as the mother function which will have various sub functions inside

Step 5: I am implementing beforeEach to reset the flags/values before every 'it' so that each sub fuction has a clear start.

Step 6: Created my TransactionFactory deploy function which is connecting my solidity file of Transaction

Step 7: Created a describe sub-function which is for testing if the transaction is happening in the right order. Sender balance is taken from hardhat node utilities and set. 

Step 8: Now sending 1000 ethers to the receiver and calculated the updated sender balance keeping in mind the gas fee which is deducted.


GIT Commands
------------

1. git add .
2. git commit -m "message: X feature added"
3. git push

