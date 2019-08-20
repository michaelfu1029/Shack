import React from 'react';
// import PieChart from 'react-minimal-pie-chart';
import { Pie } from 'react-chartjs-2'
import { defaults } from 'react-chartjs-2';

class PieChart extends React.Component{
    render() {
        // Disable animating charts by default.
        // defaults.global.animation = false;
        
        let sections = []
        let data = []
        let backgroundColor = []
        
        for (let i = 0; i < this.props.data.length; i++) {
            data.push(this.props.data[i])
            backgroundColor.push(this.props.colours[i]);
        }
        let dataset = [{data, backgroundColor}]

        return(
            <Pie 
                data={{
                    labels: this.props.names,
                    datasets: dataset
                }}
                height = '50%'
                options={{ maintainAspectRatio: false }}
            />
        )
    }
}

export default PieChart;