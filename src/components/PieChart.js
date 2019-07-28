import React from 'react';
import PieChart from 'react-minimal-pie-chart';

function Pie(props) {
    return(
        <PieChart
            data={[
              { title: 'One', value:  props.val1, color: '#E38627' },
              { title: 'Two', value:  props.val2, color: '#C13C37' },
              { title: 'Three', value: props.val3, color: '#6A2135' },
            ]}
        />
    )
}

export default Pie;
