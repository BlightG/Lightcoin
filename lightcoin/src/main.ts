import * as wallet from './wallet.ts';
import * as blockchain from './blockchain.ts';

// create a wallet
const wallet1 = wallet.initWallet();
console.log('starting Balance for wallet1: ' + blockchain.getAccountBalance(wallet1));
console.log('staring Difficulty; ' + blockchain.getLatestBlock().difficulty);
for (let i = 0; i <= 10; i++){
    blockchain.generateNextBlock(wallet1)
}
console.log('Balance in wallet after mining for wallet1: ' + blockchain.getAccountBalance(wallet1));
console.log('Difficulty after mining: ' + blockchain.getLatestBlock().difficulty +'\n')

// create second wallet
const wallet2 = wallet.initWallet();
console.log('starting Balance for wallet2: ' + blockchain.getAccountBalance(wallet2));
console.log('staring Difficulty; ' + blockchain.getLatestBlock().difficulty);
for (let i = 0; i <= 10; i++){
    blockchain.generateNextBlock(wallet2)
}
console.log('Balance in wallet after mining for wallet2: ' + blockchain.getAccountBalance(wallet2));
console.log('Difficulty after mining: ' + blockchain.getLatestBlock().difficulty + '\n');

// Create a third wallet
const wallet3 = wallet.initWallet();
console.log('Balance of wallet3: ' + blockchain.getAccountBalance(wallet3) + '\n');
// make a transaction
const wallet3Address = wallet.getPublicFromWallet(wallet3);
blockchain.generatenextBlockWithTransaction(wallet3Address, 10, wallet1);
console.log(`After Transaction of 10 from wallet1 to wallet3: \n\twallet1 Balance: ${blockchain.getAccountBalance(wallet1)}\n\twallet3 Balance: ${blockchain.getAccountBalance(wallet3)}`);

// delete wallets when finished
wallet.deleteWallet()