import React from 'react';

class AddButton extends React.Component{
    render() {
        this.props.data.push({id: this.props.data.length, value: 10})
        return(
            <button onClick={() => { 
                if(this.props.data.length <= this.props.colours.length) {
                    this.props.handleChange(this.props.data)
                }
            }}>Add a choice</button>
        )
    }
}

export default AddButton;
