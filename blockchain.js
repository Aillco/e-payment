const SHA256 = require('crypto-js/sha256');



// 引用
// address: string

class BlockHeader{

    constructor(index: number, previousHash: string,  data){
        this.index  = index;
        this.timestamp = generateTimeStamp();
        this.previousHash = previousHash;
        this.currentHash = this.calculateHash();
        this.difficulty = this.dynamicDifficulty();
        this.nonce = this.generateNounce();
        this.merkleRoot = this.generateMerkleRoot();
        this.data = data;
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

    generateCoinBaseTransaction(){

    }


}

class Data{
    constructor(coinBaseTransaction: CoinBaseTransaction, transactions: [] Transaction){
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
        let Block = new Block(0,"0","no data");
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