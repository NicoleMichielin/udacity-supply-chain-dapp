const HDWalletProvider = require('@truffle/hdwallet-provider');

module.exports = {
  //require('dotenv').config();

  contracts_build_directory: "./build/contracts",
  contracts_directory: "./contracts",

  networks: {
    development: {
      host: "127.0.0.1",
      port: 9545,
      network_id: "5777", 
      websockets: true
    },
    
    development: {
      host: "127.0.0.1",     // Localhost (default: none)
      port: 9545,            // Standard Ethereum port (default: none)
      network_id: "4777",       // Any network (default: none)
    },

    sepolia: {
      provider: () => new HDWalletProvider({
        mnemonic: process.env.MNEMONIC,
        providerOrUrl: `https://sepolia.infura.io/v3/f4c83644ae044a20bc2a56927e675663`,
        numberOfAddresses: 1,
        shareNonce: true,
        //pollingInterval: 15000 // aumento dell'intervallo di polling
      }),
      network_id: 11155111,  // Sepolia's id
      //gas: 5500000,         // Gas limit
      //gasPrice: 10000000000,
      confirmations: 2,     // # of confirmations to wait between deployments
      timeoutBlocks: 500,   // # of blocks before a deployment times out
      skipDryRun: true,      // Skip dry run before migrations
      deploymentPollingInterval: 15000,
      networkCheckTimeout: 1000000
    },

    compilers: {
      solc: {
         version: "0.8.20",    // Fetch exact version from solc-bin (default: truffle's version)
        // docker: true,        // Use "0.5.1" you've installed locally with docker (default: false)
         settings: {          // See the solidity docs for advice about optimization and evmVersion
          optimizer: {
            enabled: true,
            runs: 200
          },
          evmVersion: "shanghai"
       }
      }
    }
  }
}