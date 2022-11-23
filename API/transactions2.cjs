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


