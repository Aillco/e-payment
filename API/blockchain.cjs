const SHA256 = require('crypto-js/sha256');
const { MerkleTree } = require('merkletreejs')
//const transactions= require('./transactions')

// 引用
// address: string

// block class


class BlockHeader{

    // index: number
    // previousHash: string
    // blockBody: correspoding block body
    constructor(index, previousHash,blockBody,difficulty){
        this.index  = index;
        this.timestamp = generateTimeStamp();
        this.previousHash = previousHash;
        this.nonce = 0;
        this.miningTime = PoWAlgorithm(blockBody);
        this.currentHash = calculateHash(blockBody);
        this.merkleRoot = generateMerkleRoot(blockBody);
        this.difficulty = difficulty;

    }

    generateTimeStamp(){
        var date = new Date();
        var hour = date.getHours();
        hour = hour <10 ? '0' + hour  : hour;
        var minute = date.getMinutes();
        minute = minute <10 ? '0' + minute  : minute;
        var second = date.getSeconds();
        second = second <10 ? '0' + second  : second;
        var day = date.getDate();
        day = day <10 ? '0' + day  : day;
        var month = date.getMonth(); 
        month = month <10 ? '0' + month  : month;
        var year = date.getFullYear();
        var timeStamp = year  + "-" + (month + 1) + "-" + day + hour + ":" + minute + ":" + second;  //yyyy-mm-dd 00:00:00 
        return timeStamp;
    }

    calculateHash(blockBody){
        return SHA256(this.index + this.previousHash + this.timestamp + JSON.stringify(blockBody) + this.nonce + this.difficulty).toString;
    }

    PoWAlgorithm(blockBody){
        var mid = 0;
        const MAX = 2**32;
        var beginTime = +new Date();
        while (mid < MAX){
            this.nonce = mid;
            if (hashMatchDifficulty(this.calculateHash(blockBody),this.difficulty) == true){
                break;
            }
            mid++;
        }
        var endTime = +new Date();
        return (endTime - beginTime);
    }

    hashMatchDifficulty(hash,difficulty){
        HashInBinary = parseInt(hash,2);
        binaryHash = String(HashInBinary);
        if (this.calculateDifficulty(binaryHash) == difficulty){
            return true;
        }
        return false;
    }

    calculateDifficulty(binaryHash){
        const n = binaryHash.length;
        var count = 0;
        for (var i = 0;i<=n;i++){
            if (binaryHash[i] != "0"){
                break;
            }
            count++;
        }
        return count;
    }



    generateMerkleRoot(blockBody){
        if ((this.data.length) % 2 == 0){
            return sha256(sha256(sha256(sha256(H1+H2))+sha256(sha256(H3+H4))));
        }
        else{
            return sha256(sha256(sha256(sha256(H1+H2))+sha256(sha256(H3+H3))));
        }
    }

}

class BlockBody{

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


}

// merkle Tree

class Node{
    constructor(leftNode,rightNode,value,hash){
        this.leftNode = leftNode;
        this.rightNode = rightNode;
        this.value = value;
        this.hash = calculateHash(value);
    }

    calculateHash(value){
        return SHA256(value);
    }
}




// transaction

class cIn{
    constructor(sender){
        this.sender = sender;
    }
}

class cOut{
    constructor(receiver, amount){
        this.receiver = receiver;
        this.amount = amount;
    }
}

class Transaction{
    constructor(cIn,cOut){
        this.cIn = In;
        this.cOut = Out;
        this.hash = this.calculateHash();
    }

    calculateHash(){
        return SHA256(this.in + this.out ).toString;
    }
}

class CoinBaseTransaction{
    constructor(cOut){
        this.cOut = cOut;
        this.hash = this.calculateHash();
    }
}




// blockchain

class BlockChain{
    constructor(){
        this.timeOfMining = [];
        this.chain = [generateGenesisBlock()];
        this.index = 0;
        this.newestDifficulty = 0;
        this.timeStamp = generateTimeStamp();
    }

    generateTimeStamp(){
        var date = new Date();
        var hour = date.getHours();
        hour = hour <10 ? '0' + hour  : hour;
        var minute = date.getMinutes();
        minute = minute <10 ? '0' + minute  : minute;
        var second = date.getSeconds();
        second = second <10 ? '0' + second  : second;
        var day = date.getDate();
        day = day <10 ? '0' + day  : day;
        var month = date.getMonth(); 
        month = month <10 ? '0' + month  : month;
        var year = date.getFullYear();
        var timeStamp = year  + "-" + (month + 1) + "-" + day + hour + ":" + minute + ":" + second;  //yyyy-mm-dd 00:00:00 
        return timeStamp;
    }


    generateGenesisBlock(){

        // using my Ethereum address  0x301e68Ce99864EaA9AF171aCAe82a085806D7BCF
        // Attention: 前缀不加0x
        // 给我10个coin先
        let genesisCoinBaseTransaction= new CoinBaseTransaction("301e68Ce99864EaA9AF171aCAe82a085806D7BCF", 10);

        let genesisData= new BlockBody(genesisCoinBaseTransaction);

        let genesisBlockHeader= new BlockHeader(index++, "0000000000000000000000000000000000000000000000000000000000000000",genesisData,0);

        this.timeOfMining.push(genesisBlockHeader.miningTime);

        let genesisBlock = new Block(genesisBlockHeader, genesisData);
        

        return genesisBlock;
    }

    generateDynamicDifficulty(){
        n = this.timeOfMining.length;
        const EXPECTED_TIME = 3600;
        var average = 0;
        if (n<=10){
            average = sum(this.timeOfMining)/n;
        }
        else{
            var list = this.timeOfMining.slice(n-11,n-1);
            average = sum(list)/10;
        }
        if (average > EXPECTED_TIME){
            this.newestDifficulty = this.newestDifficulty - 1;
        }
        else if (average < EXPECTED_TIME){
            this.newestDifficulty = this.newestDifficulty + 1;
        }
    }

    sum(list){
        return arr.reduce(function(acr, cur){
            return acr + cur;
          });
    }

    getLastBlock(){
        return this.chain[this.chain.length - 1];
    }

    generateNewBlock(CoinBaseTransaction){
        generateDynamicDifficulty();
        let newBlockHeader = new BlockHeader(index++,getLastBlock().currentHash,CoinBaseTransaction,this.newestDifficulty);
        let newBlockBody = new BlockBody(CoinBaseTransaction);
        let newBlock = new Block(newBlockHeader,newBlockBody);
        this.chain.push(newBlock);
        this.timeOfMining.push(newBlockHeader(this.timeOfMining));
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