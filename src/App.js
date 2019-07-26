import React from 'react';
import logo from './spin.png';
import './App.css';
import Pie from './components/PieChart';
 
function App() {
  return (
    <div className="App">
      
      <header className="App-header">
        <p className="Compony-name">Shack</p>
        <img src={logo} className="App-logo" alt="logo" />
        <Pie />
      </header>
    </div>
  );
}

export default App;
