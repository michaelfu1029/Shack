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
      ],
      names: [
        "Choice 1",
        "Choice 2",
        "Choice 3"
      ]
    }
    this.handleChange = this.handleChange.bind(this)
    this.setName = this.setName.bind(this)
    this.handleNameChange = this.handleNameChange.bind(this)

  }

  handleChange(newdata) {
    this.setState({
      data: newdata,
    })
  }

  setName(newdata) {
    this.setState({
      names: newdata
    })
  }

  handleNameChange(id, value) {
    this.setState(prevState => {
        let updatedNames = []
        for(let i = 0; i < prevState.names.length; i++) {
            if (i === id) {
              updatedNames.push(value)
            } else {
              updatedNames.push(prevState.names[i])
            }
        }
        return {
            names: updatedNames
        }
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
          <Pie className="Pie" 
            names={this.state.names} 
            colours={colours} 
            data={this.state.data}
            />
          <div className="Spacer">spacer</div>
          <Form title="Choices"
            colours={colours} 
            data={this.state.data} 
            handleChange={this.handleChange} 
            names={this.state.names}
            setName={this.setName}
            handleNameChange={this.handleNameChange}/>
          
        </header>
      </div>
    );
  }
}

export default App;
