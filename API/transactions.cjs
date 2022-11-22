class CoinBaseTransaction{

    // to: string, amount:number
    constructor(to, amount){
        this.to=to;
        this.amount=amount;
        this.generateTXID=generateTxID();
    }

    generateTxID(){
    }
}

class Transaction{
    // input: TxInput[], output: TxOutput[]
    constructor(input, output){
        public id: string;
        public input: TxInput[];
        public output: TxOutput[];

}

class TxInput{

    // tx_id: string, tx_index: , sig: string
    constructor(tx_id, tx_index , sig){
    public tx_id: string;
    public tx_index: number;
    public sig: string;
    }
}

class TxOutput{
    
    public to: string;
    public amount: number;

    // to: , amount:number
    constructor(to, amount){
        this.to = to;
        this.amount = amount;
    }
}


class UnspentTxOut {
    public readonly tx_id: string;
    public readonly tx_index: number;
    public readonly to: string;
    public readonly amount: number;

    constructor(tx_id, tx_index, to, amount) {
        this.tx_id = tx_id;
        this.tx_index = tx_index;
        this.to = to;
        this.amount = amount;
    }
}

exports.CoinBaseTransaction= CoinBaseTransaction;
exports.Transaction= Transaction;
exports.TxInput= TxInput;
exports.TxOutput=TxOutput;
exports.UnspentTxOut= UnspentTxOut;


//export {CoinBaseTransaction, Transaction, TxInput, TxOutput,UnspentTxOut}
