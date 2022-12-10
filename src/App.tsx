import React from 'react';
import logo from './logo.svg';
import './App.css';

const App = () => {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Welcome team
        </p>
        <ul>
          <li>Anand</li>
          <li>Dhayalan</li>
          <li>Jaison</li>
          <li>Ilayaraja</li>
          <li>Aravindhan</li>
          <li>Kiruthi</li>
          <li>Arunachalam</li>
          <li>Jawahar</li>
          <li>Bincy</li>
          <li>Jagadesh</li>
          <li>Bharath</li>
        </ul>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
