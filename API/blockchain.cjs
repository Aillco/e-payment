const SHA256 = require('crypto-js/sha256');

//const transactions= require('./transactions')

// 引用
// address: string

// block class
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

exports.BlockChain= BlockChain;
