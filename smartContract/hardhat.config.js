// import "@nomicfoundation/hardhat-chai-matchers";
// import "@nomiclabs/hardhat-ethers";

//Hardhat Waffle is a plugin to build smart contract tests.

require('@nomiclabs/hardhat-waffle');

module.exports = {
  solidity: '0.8.0',
  networks: {
    goerli: {
      url: 'https://eth-goerli.g.alchemy.com/v2/oWaRmM5aPTgGLJBX3r8iH_X8SbY5bzaB',
      accounts: ['dfd28724f18f66a5171b6c10e798acbacee35c3232b43b3489ce68cc2c4d2957'],
    },
  },
  paths: {
    artifacts: "./artifacts",
    sources: "./Model",
    cache: "./cache",
    tests: "./test"
  },
};

