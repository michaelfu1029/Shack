import React from 'react';
import logo from './spin.png';
import './App.css';
import Pie from './components/PieChart';
import Form from "./components/Form"
 
function App() {
  return (
    <div className="App">
      
      <header className="App-header">
        <p className="Compony-name">Shack</p>
        <img src={logo} className="App-logo" alt="logo" />
        <Pie val1={10} val2={15} val3={20}/>
        <Form title="Name"/>
      </header>
    </div>
  );
}

export default App;
