import React from "react";

class Form extends React.Component{
    render() {
        return (
            <form onSubmit={(event)=>{
                event.preventDefault();
                this.props.handleChange(
                    parseInt(event.target.percent1.value, 10),
                    parseInt(event.target.percent2.value, 10),
                    parseInt(event.target.percent3.value, 10)
                );
                
            }}>
                <label>
                    {this.props.title}:
                    {/* <input type="text" name="name" placeholder="Choice"/> */}
                    <input type="number" min={0} name="percent1" placeholder="value"/>
                    <input type="number" min={0} name="percent2" placeholder="value"/>
                    <input type="number" min={0} name="percent3" placeholder="value"/>
                </label>
                <input type="submit" value="Submit"/>
            </form>
        )
    }
}
export default Form;