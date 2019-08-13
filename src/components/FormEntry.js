import React from "react";

class FormEntry extends React.Component{
    render() {
        return(
            <div>
                <input placeholder="name"/>
                <input 
                type="number" 
                min={0} 
                placeholder="value" 
                defaultValue={this.props.value} 
                onChange={(event) => {
                    this.props.handleChange(this.props.id, parseInt(event.target.value, 10))}}
                />
            </div>
            
        )
    }
}
export default FormEntry;