import React from 'react';
// import logo from './spin.png';
import './App.css';
import Pie from './components/Pie';
import Form from './components/Form'
 
class App extends React.Component{
  constructor() {
    super()
    this.state = {
      data: [
        10,
        10,
        10
      ]
    }
    this.handleChange = this.handleChange.bind(this)
  }

  handleChange(newdata) {
    this.setState({
      data: newdata
    })
  }


  render() {
    let colours = [
      '#E38627',
      '#C13C37',
      '#6A2135',
      '#FFFFFF',
      '#C0C0C0',
      '#000000',
      '#FF5733'
    ]
    return (
      
      <div className="App">
        <header className="App-header">
          <p className="Compony-name">Shack</p>
          {/* <img src={logo} className="App-logo" alt="logo" /> */}
          <Pie colours={colours} data={this.state.data}/>
          <Form title="Name" colours={colours} data={this.state.data} handleChange={this.handleChange}/>
          
        </header>
      </div>
    );
  }
}

export default App;
