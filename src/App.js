import React, { Component } from 'react';
import './App.css';
import ChartSample from './components/ChartSample';

class App extends Component {
  render() {
    return (
      <div className="App">
        <h1>React Chart Sample</h1>
        <ChartSample />
      </div>
    );
  }
}

export default App;
