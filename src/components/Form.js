import React from "react";
import FormEntry from './FormEntry'
import AddButton from './AddButton'

class Form extends React.Component{
    constructor(props) {
        super(props)
        let valueData = []

        for(let i = 0; i < this.props.data.length; i++) {
            valueData.push({id: i, value: this.props.data[i]})
        }
        this.state = {
            choices: valueData
        }
        this.handleChange = this.handleChange.bind(this)
        this.increment = this.increment.bind(this)
    }

    handleChange(id, value) {
        this.setState(prevState => {
            let updatedChoices = []
            for(let i = 0; i < prevState.choices.length; i++) {
                if (prevState.choices[i].id === id) {
                    updatedChoices.push({id: i, value: value})
                } else {
                    updatedChoices.push(prevState.choices[i])
                }
            }
            return {
                choices: updatedChoices
            }
        })
    }

    
    increment(newVal) {
        this.setState({
            choices: newVal
        })
    }

    
    render() {
        const form = this.state.choices.map(item => <FormEntry 
            key={item.id} id={item.id} 
            value={item.value} 
            handleChange={this.handleChange}
            names={this.props.names}
            handleNameChange={this.props.handleNameChange}
            />)
        return (
            <div>
                <form onSubmit={(event)=>{
                    event.preventDefault();
                    let updatedValues = this.state.choices.map(choice => choice.value);
                    this.props.handleChange(updatedValues);
                }}>
                    <label>
                        {this.props.title}:
                        {form}
                    </label>
                    <input type="submit" value="Update Choices"/>
                </form>
                <AddButton 
                    colours={this.props.colours} 
                    data={this.state.choices} 
                    handleChange={this.increment}
                    names={this.props.names}
                    setName={this.props.setName}/>
            </div>
            
        )
    }
}
export default Form;