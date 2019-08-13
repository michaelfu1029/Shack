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
      '#A0A0A0',
      '#FF5733'
    ]
    return (
      
      <div className="App">
        <p className="Compony-name">Shack</p>
        <header className="App-header">
          <Pie className="Pie" colours={colours} data={this.state.data}/>
          <div className="Spacer">spacer</div>
          <Form title="Choices" colours={colours} data={this.state.data} handleChange={this.handleChange}/>
          
        </header>
      </div>
    );
  }
}

export default App;
