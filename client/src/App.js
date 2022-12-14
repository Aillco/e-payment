import React, {Component} from "react";
import logo from './logo.svg';
import './App.css';

class App extends Component{
    constructor(props) {
        super(props);
        this.state = { apiResponse: '' };
    }

    callAPI() {
        fetch("http://localhost:3001/blocks")
            .then(res => res.text())
            .then(res => this.setState({ apiResponse: res }));
           console.log("res: "+this.state.apiResponse);
    }

    componentWillMount() {

        this.callAPI();
        this.getData();

    }

    // further change data
    getData() {
        this.setState({
            apiResponse: 'test'
        });
      }

    //onChange()


    render(){

        return (

        <head>
            <meta charset="UTF-8" />
            <meta http-equiv="X-UA-Compatible" content="IE=edge" />
            <meta name="viewport" content="width=device-width, initial-scale=1.0" />

            <link
                    href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css"
                    rel="stylesheet"
                    integrity="sha384-1BmE4kWBq78iYhFldvKuhfTAU6auU8tT94WrHftjDbrCEXSU1oBoqyl2QvZ6jIW3"
                    crossorigin="anonymous"
            />
            <link
                    rel="stylesheet"
                    href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.7.2/font/bootstrap-icons.css"
            />

            <link
                    rel="stylesheet"
                    href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0-beta3/css/all.min.css"
                    integrity="sha512-Fo3rlrZj/k7ujTnHg4CGR2D7kSs0v4LLanw2qksYuRlEzO+tcaEPQogQ0KaoGN26/zrn20ImR1DfuLWnOo7aBA=="
                    crossorigin="anonymous"
                    referrerpolicy="no-referrer"
            />

            <link rel="stylesheet" href="App.css" />
            <title>Matrix Blockchain</title>
        </head>


        <nav class="navbar navbar-expand-md navbar-dark bg-danger">
            <div class="container-fluid">
                <a class="navbar-brand" href="#">Matrix Blockchain</a>
                <button
                        class="navbar-toggler"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#navbarNav"
                        aria-controls="navbarNav"
                        aria-expanded="false"
                        aria-label="Toggle navigation"
                >
                    <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse" id="navbarNav">
                    <ul class="navbar-nav">
                        <button class="nav-item btn btn-dark shadow">
                            <a class="nav-link active" aria-current="page" href="#">Home</a>
                        </button>

                        <li class="nav-item btn btn-dark shadow ms-2">
                            <a class="nav-link" href="#"
                            ><i class="bi bi-wallet2 me-2"></i>Transaction</a
                            >
                        </li>
                    </ul>
                </div>
            </div>
        </nav>

        <div class="container">
            <h1 class="display-1 h1 mt-5">
                Blocks on chain: <span id="nrBlocks">1</span>
            </h1>

            <a href="https://github.com/NorbertBM/barnicoin.github.io" target="_blank"
            ><button class="btn btn-danger">Add Your Block</button></a
            >



            <blockchain class="d-flex align-items-center" style="overflow:scroll; overflow-y:scroll; position: relative">


                <block
                        class="card block active"
                        data-bs-toggle="collapse"
                        href="#Genesis-block"
                        aria-expanded="false"
                        aria-controls="Genesis-block"
                        position="relative"


                >
                    <div class="card-header" style="top:10%; position:relative;">
                        <span class="display-4">Block 1 </span>
                        <p class="text-muted">(Genesis block)</p>
                    </div>

                    <ul class="list-group list-group-flush" >

                        <li class="list-group-item">
                            <h5>Block Header</h5>
                            <h6>Hash</h6>
                            <span class="hash"
                            >0231478214hjkbdhbsydgjklkj18182u1enl21oishgopfj3p9rj843n7f48o8y43hcn4yor8c9n4c</span
                            >

                        </li>

                        <li class="list-group-item">
                            <h6>Hash of previous block</h6>
                            <span class="text-muted">0</span>
                        </li>

                        <li class="list-group-item">
                            <h6>Nonce</h6>
                            <span class="text-muted">0</span>
                        </li>
                        <li class="list-group-item">
                            <h6>Timestamp</h6>
                            <span class="text-muted">1241351251250000</span>
                        </li>
                        <li class="list-group-item">
                            <h5>Coinbase Transactions </h5>

                            <h6>Address</h6>
                            <span class="text-muted">1241351251250000</span>


                        </li>

                        <li class="list-group-item">

                            <h6>Amount</h6>
                            <span class="text-muted">10</span>

                        </li>

                        <!----->
                        <li class="list-group-item">
                            <h5>Transactions </h5>

                            <h6>Sender's Address</h6>
                            <span class="text-muted">1241351251250000</span>


                        </li>

                        <li class="list-group-item">

                            <h6>Receiver's Address</h6>
                            <span class="text-muted">10</span>

                        </li>

                        <li class="list-group-item">

                            <h6>Amount</h6>
                            <span class="text-muted">10</span>

                        </li>



                    </ul>
                </block>
                <chain-link>
                    <i class="fas fa-link"></i>
                </chain-link>
            </blockchain>


        </div>
        <!-- Copyrights -->
        <div class="bg-light py-4">
            <div class="container text-center">
                <p class="text-muted mb-0 py-2">?? 2022 Fall COMP4142 E-Payment and Cryptography, Group Project, The Matrix</p>
            </div>
        </div>
        </footer>
        <!-- End -->


        <script
                src="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/js/bootstrap.bundle.min.js"
                integrity="sha384-ka7Sk0Gln4gmtz2MlQnikT1wXgYsOg+OMhuP+IlRH9sENBO0LRn5q+8nbTov4+1p"
                crossorigin="anonymous"
        ></script>

        <!--JavaScript for adding a nes Block  -->
        <script src="./Blocks/0001_G_block.js"></script>
        <script src="./Blocks/0002_block.js"></script>
        <script src="./Blocks/0003_block.js"></script>
        <script src="./Blocks/0004_block.js"></script>
        <script src="./Blocks/0005_block.js"></script>


        <!-- Javascript for the UI -->
        <script src="UI.js"></script>







            );
        }
 }



export default App;

