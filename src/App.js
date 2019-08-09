import React from 'react';
import logo from './spin.png';
import './App.css';
import Pie from './components/Pie';
import Form from './components/Form'
 
class App extends React.Component{
  constructor() {
    super()
    this.state = {
      val: [
        10,
        10,
        10
      ]
    }
    this.handleChange = this.handleChange.bind(this)
  }


  handleChange(newVals) {
    this.setState({
      val: [
        newVals[0],
        newVals[1],
        newVals[2]
      ]
    })
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <p className="Compony-name">Shack</p>
          <img src={logo} className="App-logo" alt="logo" />
          <Pie val= {this.state.val}/>
          <Form title="Name" handleChange={this.handleChange}/>
        </header>
      </div>
    );
  }
}

export default App;
