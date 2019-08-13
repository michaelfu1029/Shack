import React from 'react';

class AddButton extends React.Component{
    render() {
        
        
        return(
            <button onClick={() => {
                this.props.data.push({id: this.props.data.length, value: 10})
                this.props.names.push("Choice " + (this.props.names.length + 1))
                if(this.props.data.length <= this.props.colours.length) {
                    this.props.handleChange(this.props.data)
                    this.props.setName(this.props.names)
                }
            }}>
                Add a choice
            </button>
        )
    }
}

export default AddButton;
