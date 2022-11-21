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



        console.log("render: "+this.state.apiResponse);

        return (
            <div className="App">
                    <header className="App-header">
                      <img src={logo} className="App-logo" alt="logo" />
                      <p>
                        Edit <code>src/App.js</code> and save to reload.
                      </p>
                      <a
                        className="App-link"
                        href="https://reactjs.org"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        Learn React
                      </a>
                      <p> </p>
                    </header>

                    <div>{this.state.apiResponse}  </div>

                    </div>
            );
        }
 }



export default App;

