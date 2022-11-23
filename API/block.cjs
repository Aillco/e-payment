



class BlockHeader{

    // index: number
    // timestamp: string
    // previousHash: string
    // nonce: number
    // blockBody: correspoding block body
    // difficulty: number 
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
        let merkletree = new MerkleTree(blockBody.hashList);
        return merkletree.merkleRoot;
    }

}

class BlockBody{

    //coinBaseTransaction: CoinBaseTransaction, transactions: [] Transaction
    constructor(coinBaseTransaction){
        this.data = [coinBaseTransaction];
        this.hashList = [coinBaseTransaction.hash];
    }

    addTransaction(transaction){
        this.data.push(transaction);
        this.hashList.push(transaction.hash);
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







