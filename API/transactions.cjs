class CoinBaseTransaction{

    // to: string, amount:number
    constructor(to, amount){
        this.to=to;
        this.amount=amount;
        this.generateTXID= generateTxID();
    }

    generateTxID(){
    }
}

class Transaction{
    // input: TxInput[], output: TxOutput[]
    constructor(input, output){

    }

}

class TxInput{

    // tx_id: string, tx_index: , sig: string
    constructor(tx_id, tx_index , sig){

    }
}

class TxOutput{

    // to: , amount:number
    constructor(to, amount){

    }
}


class UnspentTxOut {

}

exports.CoinBaseTransaction= CoinBaseTransaction;
exports.Transaction= Transaction;
exports.TxInput= TxInput;
exports.TxOutput=TxOutput;
exports.UnspentTxOut= UnspentTxOut;


//export {CoinBaseTransaction, Transaction, TxInput, TxOutput,UnspentTxOut}