import React from 'react';
// import PieChart from 'react-minimal-pie-chart';
import { Doughnut } from 'react-chartjs-2'
import { defaults } from 'react-chartjs-2';

class PieChart extends React.Component{
    render() {
        // Disable animating charts by default.
        defaults.global.animation = false;
        
        let sections = []
        let data = []
        let backgroundColor = []
        
        for (let i = 0; i < this.props.data.length; i++) {
            data.push(this.props.data[i])
            backgroundColor.push(this.props.colours[i]);
        }
        let dataset = [{data, backgroundColor}]
        // let sections = [
        //     { title: 'One',   value:  this.props.val[0], color: '#E38627' },
        //     { title: 'Two',   value:  this.props.val[1], color: '#C13C37' },
        //     { title: 'Three', value:  this.props.val[2], color: '#6A2135' }
        // ]
        return(
            <Doughnut 
                
                data={{
                    labels: this.props.names,
                    datasets: dataset
                }}
                height = '80%'
                // width ='20%'
            />
            // <PieChart 
            // data={sections} 
            // label
            // labelStyle={{
            //     fontSize: '5px',
            //     fontFamily: 'sans-serif',
            //     fill: '#121212'
            // }}
            // labelPosition={112}
            // />
        )
    }
}

export default PieChart;