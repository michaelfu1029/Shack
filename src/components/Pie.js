import React from 'react';
import PieChart from 'react-minimal-pie-chart';

class Pie extends React.Component{
    render() {
        let sections = []
        
            
        for (let i = 0; i < this.props.data.length; i++) {
            sections.push({ title: String(i), value:  this.props.data[i], color: this.props.colours[i]});
        }

        // let sections = [
        //     { title: 'One',   value:  this.props.val[0], color: '#E38627' },
        //     { title: 'Two',   value:  this.props.val[1], color: '#C13C37' },
        //     { title: 'Three', value:  this.props.val[2], color: '#6A2135' }
        // ]
        return(
            <PieChart data={sections}/>
        )
    }
}

export default Pie;
