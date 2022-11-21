const bodyParser = require('body-parser');
const express = require ('express');

//import {Block, generateNextBlock, getBlockchain} from './blockchain';
//import {getBlockchain} from './blockchain.cjs';
//import {connectToPeers, getSockets, initP2PServer} from './p2p.cjs';


// const httpPort: number =parseInt(process.env.HTTP_PORT) ||3001;
// const p2pPort: number = parseInt(process.env.P2P_PORT) || 6001;



const blockchain = require("./blockchain.cjs");
const p2p = require("./p2p.cjs");
const httpPort = parseInt(process.env.HTTP_PORT) || 3001;
const p2pPort = parseInt(process.env.P2P_PORT) || 6001;

//const httpPort=3001;
// const p2pPort=6001;

const initHttpServer =  (myHttpPort) => {
    const app = express();
    app.use(bodyParser.json());

    app.get('/blocks', (req, res) => {
        res.send(blockchain.getBlockchain());
    });

//    app.post('/mineBlock', (req, res) => {
//        const newBlock: Block = generateNextBlock(req.body.data);
//        res.send(newBlock);
//    });
//    app.get('/peers', (req, res) => {
//        res.send(getSockets().map(( s: any ) => s._socket.remoteAddress + ':' + s._socket.remotePort));
//    });
//    app.post('/addPeer', (req, res) => {
//        connectToPeers(req.body.peer);
//        res.send();
//    });
//
//    app.listen(myHttpPort, () => {
//        console.log('Listening http on port: ' + myHttpPort);
//    });
};

initHttpServer(httpPort);
initP2PServer(p2pPort);