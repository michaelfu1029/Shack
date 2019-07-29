import React from "react";

function Form(props) {
    return (
        <form>
            <label>
                {props.title}:
                <input type="text" name="name" placeholder="Choice"/>
                <input type="number" min={0} name="value" placeholder="value"/>
            </label>
            <input type="submit" value="Submit" />
        </form>
    )
}
export default Form;