const SHA256 = require('crypto-js/sha256');

class BlockHeader{

    constructor(index, previousHash){
        this.index  = index;
        this.timestamp = generateTimeStamp();
        this.previousHash = previousHash;
        this.currentHash = this.calculateHash();
        this.difficulty = this.dynamicDifficulty();
        this.nonce = this.generateNounce();
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

    generateNounce(){
        max = 10000000;
        return Math.floor(Math.random()*(max+1));
    }

    // 2
    powAlgorithm(){

    }
    dynamicDifficulty(){

    }
}


class Block{
    constructor(header, data){
        this.header= header
        this.data = data;
    }

}

class Data{
    constructor(coinBaseTransaction, transactions){
        this.coinBaseTransaction = coinBaseTransaction
        this.transactions=transactions
    }

}




class BlockChain{
    constructor(){
        this.chain = [this.generateGenesisBlock()];
        this.latestIndex = 0;
    }

    generateGenesisBlock(){
        let blockHeader = new blockHeader(0,"0");
        let block = new Block(blockHeader,"no data");
        return block;
    }

    getLastBlock(){
        return this.chain[this.chain.length - 1];
    }

    generateNewBlock(data){
        let newBlockHeader = new blockHeader(++index,getLastBlock().currentHash);
        let newBlock = new Block(newBlockHeader,data);
        this.chain.push(newBlock);
    }

    ifVailedBlock(Block){
        return (Block.previousHash === getLastBlock().previousHash) && (Block.index === this.latestIndex) && (Block.calculateHash === Block.currentHash);
    }


        
        
}