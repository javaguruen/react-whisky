import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';



const WhiskyList = ({whiskies}) => (
  <div>
   <ul>
        {whiskies.map(function(name, index){
          return <li key={index}>{name.name}</li>;
        })}
    </ul>
  </div>    
)

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      whiskies: [ 
        {"name" : "Ardbeg 10"}, 
        {"name" : "Benriach"} 
        ]
    };
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
          To get started, burn <code>src/App.js</code> and save to reload.
        </p>
       <WhiskyList whiskies = {this.state.whiskies}/>
      </div>
    );
  }
}

export default App;
