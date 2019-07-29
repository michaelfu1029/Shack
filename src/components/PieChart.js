import React from 'react';
import PieChart from 'react-minimal-pie-chart';

class Pie extends React.Component{
    render() {
        return(
            <PieChart
                data={[
                  { title: 'One', value:  this.props.val1, color: '#E38627' },
                  { title: 'Two', value:  this.props.val2, color: '#C13C37' },
                  { title: 'Three', value: this.props.val3, color: '#6A2135' },
                ]}
            />
        )
    }
}

export default Pie;
