let mongoose = require("mongoose");
let Schema = mongoose.Schema;

//Create the BlockChain Schema
let BlockChainSchema = new Schema({
    index: {
        type: Schema.Types.Number
    },
    timestamp: {
        type: Schema.Types.Date,
        default: Date.now()
    },
    nonce: {
        type: Schema.Types.Number
    },
    previousHash: {
        type: Schema.Types.String
    },
    currentHash: {
        type: Schema.Types.String
    }
});

module.exports = mongoose.model("BlockChain", BlockChainSchema);