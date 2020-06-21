import React,{useState} from 'react';
import logo from './logo.svg';
import './App.css';
import Age from './Hookus';

function App() {
  return (
    <div className="App">
      <header className="App-header">
            <img src={logo} className="App-logo" alt="logo" />   
      
            <Age/>
      </header>
      
    </div>
  );
}

export default App;
