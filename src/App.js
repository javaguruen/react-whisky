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
  </div>    )

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      whiskies: []
    };
  }
 componentDidMount() {
 var proxyUrl = 'https://cors-anywhere.herokuapp.com/',
     targetUrl = 'http://polet.herokuapp.com/api/v1/products'

    fetch(proxyUrl + targetUrl)
    .then( results => {
        let something =results.json();
        console.log(something);
        return something;
    }).then ( data => {
        let whiskies = data.map((whisky) => {
            return (
                <li key={whisky.id} >{whisky.varenavn} </li>
            )
        })
        this.setState({'whiskies': whiskies});
        console.log("state", this.state.whiskies);
    })
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
        <ul>
        {this.state.whiskies}
        </ul>
      </div>
    );
  }
}

export default App;
