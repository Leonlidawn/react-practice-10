import React from 'react';
import logo from './logo.svg';
import './App.css';
import Greeting from './Greeting';
import Stopwatch from './Stopwatch';
import SignUpForm from './SignUpForm';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <SignUpForm />

      </header>
    </div>
  );
}

export default App;
