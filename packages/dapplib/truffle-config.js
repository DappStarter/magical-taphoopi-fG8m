require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'hope arctic surge short bitter birth spice come half kiwi swing spirit'; 
let testAccounts = [
"0x535c7214227fa7c10c4b26d0d4190756777e458a5c743980d1ce980d9ca7c012",
"0x84b429f7e4af81732ff696780f483956562b4cc931bdd943ff91dbf2e07f1cfb",
"0x2a477c8b30aca908ea6776252ccec77dcf5e0bbf062fd83ceca33338c0ba4197",
"0x1d4bed99bfa333a1111c5cae5d3576127dd8c099c463bda28861b4ced52eb63c",
"0xebc8451a55bda298a80cb519e2a7c4d0b0d063b509cc394f481deab830f765ad",
"0xd71a50d6dca6c1ee2367ad57ea5704a7f5762480c74e891174520cf358848776",
"0x2edfe86e34b5a247e87e376d590d54c2775e03e601fb35abe5cfaa8666e71de9",
"0x5c675a7c4031491e92b0cf3b3f1bc6ebda545bb281dad73c0f7fdeace3bec1fb",
"0xeee70aeff5494cd8e61688ca694d13d55cd37e9ce5b186820889b5de25355f03",
"0x92d129f2a73bf0838e284b183a0effe4832601632c21443219d009dc699d2ea2"
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

