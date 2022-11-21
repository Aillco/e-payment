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
        this.currentHash = this.calculateHash();
        this.difficulty = this.dynamicDifficulty();
        this.nonce = this.generateNonce();
        this.merkleRoot = this.generateMerkleRoot();
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

    generateMerkleRoot(){

    }

    generateNonce(){
        max = 10000000;
        return Math.floor(Math.random()*(max+1));
    }

    // 2
    powAlgorithm(){

    }
    dynamicDifficulty(){

    }
}


class blockData{

    //coinBaseTransaction: CoinBaseTransaction, transactions: [] Transaction
    constructor(coinBaseTransaction, transactions){
        this.coinBaseTransaction = coinBaseTransaction
        this.transactions=transactions
    }

}

class Block{

    // header: BlockHeader, data: Data
    constructor(header, data){
        this.header= header
        this.data = data;
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
}

// TO 瑞杰：可以看看这个就是whole blockchain
const blockchain = new BlockChain();


// Validating the integrity of new blocks (index, previousHash, hash from values & datatypes)
// TODO



// Validating the integrity of whole blockchain
// TODO

const getBlockchain = () => blockchain;

module.exports.getBlockchain = getBlockchain;