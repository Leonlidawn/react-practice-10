import React from 'react';
import logo from './logo.svg';
import './App.css';
import Greeting from './Greeting';
import Stopwatch from './Stopwatch';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <Stopwatch />

      </header>
    </div>
  );
}

export default App;
