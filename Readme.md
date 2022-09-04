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


################## GIT COMMANDS ######################

git add .
git commit -m "message: X feature added"
git push



7. Steps of Unit Testing:

Step 1: 1st imported chai and hardhat cause this test is going to run in hardhat

Step 2: 2nd, created a function conversion_weiToEtherem which basically converts a bignumber to string so that javascript can handle well

Step 3: 3rd, function conversion_ethToWei is converting the eth to wei in string

Step 4: I am using a mocha funtion "describe" as the mother function which will have various sub functions inside

Step 5: I am implementing beforeEach to reset the flags/values before every 'it' so that each sub fuction has a clear start.

Step 6: Created my TransactionFactory deploy function which is connecting my solidity file of Transaction

Step 7: Created a describe sub-function which is for testing if the transaction is happening in the right order. Sender balance is taken from hardhat node utilities and set. 

Step 8: Now sending 1000 ethers to the receiver and calculated the updated sender balance keeping in mind the gas fee which is deducted.


