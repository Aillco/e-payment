import { SHA256 } from "crypto-js";

class MerkleTree{
    constructor(listOfNodes){
        this.listOfNodes = listOfNodes;
        this.merkleRoot = this.calculateRoot();
    }

    calculateParentHash(hash1,hash2){
        parentHash = SHA256(hash1hash2);
        return parentHash;
    }

    calculateRoot(){
        n = this.listOfNodes.length;
        var temp = [];
        if (n !=1 ){
            if (n%2 == 0){
                for (var i = 0;i<n; i = i + 2){
                    temp.push(calculateParent(listOfNodes[i],listOfNodes[i+1]));
                    return this.calculateRoot(temp);
                }
            }
            else{
                for (var i = 0;i<n-1; i = i + 2){
                    temp.push(calculateParent(listOfNodes[i],listOfNodes[i+1]));
                }
                temp.push(calculateParent(listOfNodes[n-1],listOfNodes[n-1]));
                return this.calculateRoot(temp);
            }
        }
        else{
            return listOfNodes[0].hash;
        }
        
    }
}





