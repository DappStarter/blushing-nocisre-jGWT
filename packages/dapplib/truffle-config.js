require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'give glove fresh speak notice crime remember social gloom entire symptom slab'; 
let testAccounts = [
"0x5d606d82d68d3ebfe22df1449c1bc7e597a216ea25e5b14b31cd631584ef02d1",
"0xc0f5e642f7b11c408d20efe09e06cc4e10d5ad86fb2d9b5d67a36783bb353b16",
"0x0e8a021e85b3bd7ddbd975a946fa471451a81bc94608390fb589f9c1a161337c",
"0x7d99e284ecb4da19e33334a06a1b37feb71b1d29a765eb6a3d279626243ddd65",
"0x2edbb368125f5dd2c51955bf7592b67d5ba7bce2e9a1c2f1e1ed20d9bfdc6288",
"0x12d7027a783295163ad022c00220ebd389917b84b36df8fcaeae97eed42efab7",
"0xad9a84e3213b4f5405311e7294838bb74904553e0179caf9965c4f3babfb6fec",
"0x2c8c8b816ff3b0610ff153f4ae8752d2595c5f5e95fe63eb7adaf10e6c6695f3",
"0x471302914017436dd718d2d0f9acb29b561788bc41c9bded45f7d7664de53ef7",
"0xd0847f775ca514f586817d75d4803366088091eb37e406b892685c2f0f9b87bc"
]; 
let devUri = 'https://rpc-mumbai.matic.today';

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: devUri,
            provider: () => new HDWalletProvider(
                mnemonic,
                devUri, // provider url
                0, // address index
                10, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            gas: 2000000,
            network_id: 80001,
            confirmations: 1,
            timeoutBlocks: 100,
            skipDryRun: true
        }
    },
    compilers: {
        solc: {
            version: '^0.5.11'
        }
    }
};

