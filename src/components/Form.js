import React from "react";
import FormEntry from './FormEntry'

class Form extends React.Component{
    constructor() {
        super()
        this.state = {
            choices: [
                {id: 0, value: 0},
                {id: 1, value: 0},
                {id: 2, value: 0}
            ]
        }
        this.handleChange = this.handleChange.bind(this)
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

    render() {
        const form = this.state.choices.map(item => <FormEntry key={item.id} id={item.id} value={item.value} handleChange={this.handleChange}/>)
        return (
            <form onSubmit={(event)=>{
                event.preventDefault();
                let updatedValues = this.state.choices.map(choice => choice.value);
                this.props.handleChange(updatedValues);
                
                // this.props.handleChange([
                //     parseInt(event.target.percent1.value, 10),
                //     parseInt(event.target.percent2.value, 10),
                //     parseInt(event.target.percent3.value, 10)
                // ]);
                
            }}>
                <label>
                    {this.props.title}:
                    {form}


                    {/* <input type="text" name="name" placeholder="Choice"/> */} 
                    {/* <input type="number" min={0} name="percent1" placeholder="value" defaultValue={0}/>
                    <input type="number" min={0} name="percent2" placeholder="value" defaultValue={0}/>
                    <input type="number" min={0} name="percent3" placeholder="value" defaultValue={0}/> */}
                </label>
                <input type="submit" value="Submit"/>
            </form>
        )
    }
}
export default Form;