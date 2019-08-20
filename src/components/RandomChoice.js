import React from 'react';
import '../App.css';

class RandomChoice extends React.Component{
    render() {
        const arrSum = arr => arr.reduce((a,b) => a + b, 0)
        let total = arrSum(this.props.data)
        return(
            <div className="RandomChoice">
                <h2>{this.props.display}</h2>
                <button onClick={() => {
                    for (let i = 0; i < this.props.data.length; i++) {
                        if (Math.random() * total <= this.props.data[i]) {
                            this.props.setDisplay(this.props.names[i])
                            break
                        } else {
                            total -= this.props.data[i]
                        }
                    }
                }}>
                    Random Selection
                </button>
                
            </div>
            
        )
    }
}

export default RandomChoice;
