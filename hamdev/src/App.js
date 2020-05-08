import React from 'react';
//import logo from './logo.svg';
import './App.css';
import TattieNormal from './TattieNormal.png'
import TattieRage from './TattieRage.png'

//<img src={logo} className="App-logo" alt="logo" />
function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src = {TattieNormal} className="App-logo" alt="app-logo"/>
        <img src = {TattieRage} className="App-logo2" alt="app-logo"/>
        <p>
          Welcome to Going Ham Dev. 
          Things are about to get weird
        </p>
   
      </header>
    </div>
  );
}

export default App;
