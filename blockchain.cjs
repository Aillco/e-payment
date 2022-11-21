const SHA256 = require('crypto-js/sha256');
//const transactions= require('./transactions')

// 引用
// address: string

class BlockHeader{

    // index: number
    // previousHash: string
    constructor(index, previousHash){
        this.index  = index;
        this.timestamp = generateTimeStamp();
        this.previousHash = previousHash;
        this.nonce = this.generateNonce();
        this.currentHash = this.calculateHash();
    }

    generateTimeStamp(){
        const date = new Date();
        const day = date.getDate();
        const month = date.getMonth(); //
        const year = date.getFullYear();
        const timeStamp = day + "-" + (month + 1) + "-" + year;  //dd-mm-yyyy
        return timeStamp;
    }

    calculateHash(){
        return SHA256(this.index + this.previousHash + this.timestamp + JSON.stringify(this.data) + this.nonce).toString;
    }


    generateNonce(){
        max = 10000000;
        return Math.floor(Math.random()*(max+1));
    }

}

// 2
class toolForDifficulty{
    getDifficulty(aBlockchain){
        const latestBlock = aBlockchain[blockchain.length - 1];
        if (latestBlock.index % DIFFICULTY_ADJUSTMENT_INTERVAL === 0 && latestBlock.index !== 0) {
            return getAdjustedDifficulty(latestBlock, aBlockchain);
        } else {
            return latestBlock.difficulty;
        }
    };
    
    getAdjustedDifficulty = (latestBlock, aBlockchain) => {
        const prevAdjustmentBlock = aBlockchain[blockchain.length - DIFFICULTY_ADJUSTMENT_INTERVAL];
        const timeExpected = BLOCK_GENERATION_INTERVAL * DIFFICULTY_ADJUSTMENT_INTERVAL;
        const timeTaken = latestBlock.timestamp - prevAdjustmentBlock.timestamp;
        if (timeTaken < timeExpected / 2) {
            return prevAdjustmentBlock.difficulty + 1;
        } else if (timeTaken > timeExpected * 2) {
            return prevAdjustmentBlock.difficulty - 1;
        } else {
            return prevAdjustmentBlock.difficulty;
        }
    };
}
class cIn{
    constructor(sender){
        this.sender = sender;
    }
}

class cOut{
    constructor(receiver, amount){
        this.receiver = receiver;
    }
}

class Transcation{
    constructor(cIn,cOut,amount){
        this.cIn = In;
        this.cOut = Out;
        this.amount = amount;
        this.hash = this.calculateHash();
    }

    calculateHash(){
        return SHA256(this.in + this.out ).toString;
    }
}

class CoinBaseTransaction{
    constructor(cOut,amount){
        this.cOut = cOut;
        this.amount = amount;
        this.hash = this.calculateHash();
    }
}

class blockData{

    //coinBaseTransaction: CoinBaseTransaction, transactions: [] Transaction
    constructor(coinBaseTransaction){
        this.data = [coinBaseTransaction];
    }

    addTransaction(transaction){
        this.data.push(transaction);
    }

}

class Block{

    // header: BlockHeader, data: Data
    constructor(header, data){
        this.header= header
        this.data = data;
        this.merkleRoot = this.generateMerkleRoot();
        this.difficulty = toolForDifficulty.getAdjustedDifficulty(data);
    }

    generateMerkleRoot(){
        //还会改一下
        if ((this.data.length) % 2 == 0){
            return sha256(sha256(sha256(sha256(H1+H2))+sha256(sha256(H3+H4))));
        }
        else{
            return sha256(sha256(sha256(sha256(H1+H2))+sha256(sha256(H3+H3))));
        }
    }

}




class BlockChain{
    constructor(){
        this.chain = [this.generateGenesisBlock()];
        this.latestIndex = 0;
    }

    generateGenesisBlock(){
        let genesisBlockHeader= new BlockHeader(1, "0000000000000000000000000000000000000000000000000000000000000000")

        // using my Ethereum address  0x301e68Ce99864EaA9AF171aCAe82a085806D7BCF
        // Attention: 前缀不加0x
        // 给我10个coin先
        let genesisCoinBaseTransaction= new CoinBaseTransaction("301e68Ce99864EaA9AF171aCAe82a085806D7BCF", 10);

        let genesisTransactions= new Transaction(Null, Null, Null);

        let genesisData= new blockData(genesisCoinBaseTransaction,genesisTransactions);

        let genesisBlock = new Block(generateGenesisBlock, genesisData);
        return Block;
    }

    getLastBlock(){
        return this.chain[this.chain.length - 1];
    }

    generateNewBlock(data){
        let newBlock = new Block(++index,getLastBlock().currentHash,data);
        this.chain.push(newBlock);
    }

    ifVailedBlock(Block){
        return (Block.previousHash === getLastBlock().previousHash) && (Block.index === this.latestIndex) && (Block.calculateHash === Block.currentHash);
    }
}

// TO 瑞杰：可以看看这个就是whole blockchain
const blockchain = new BlockChain();


// Validating the integrity of new blocks (index, previousHash, hash from values & datatypes)
// TODO

// Validating the integrity of whole blockchain
// TODO

const getBlockchain = () => blockchain;

module.exports.getBlockchain = getBlockchain;