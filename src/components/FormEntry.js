import React from "react";

class FormEntry extends React.Component{
    render() {
        return(
            <div>
                <input
                type="text"
                maxLength="10"
                placeholder={this.props.names[this.props.id]}
                onChange={(event) => {
                    this.props.handleNameChange(this.props.id, event.target.value)}}
                />
                <input 
                type="number" 
                min={0}
                defaultValue={this.props.value} 
                onChange={(event) => {
                    this.props.handleChange(this.props.id, parseInt(event.target.value, 10))}}
                />
            </div>
            
        )
    }
}
export default FormEntry;