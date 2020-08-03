import React from 'react';
import { Chart } from "react-google-charts";

function ScatterChart({entity}){
  function renderData(data) {
    let output = [['Mentions', 'Salience']];
    data.forEach(word => {
      output.push([word.mentions.length || 0, word.salience])
    })
    return output;
  }

  return (
    <>
      <Chart
        width={'600px'}
        height={'400px'}
        chartType="ScatterChart"
        loader={<div>Loading Chart...</div>}
        data={renderData(entity)}
        options={{
          title: 'Salience vs Mentions Comparison',
          hAxis: { title: 'Mentions', minValue: 0, maxValue: 20 },
          vAxis: { title: 'Salience', minValue: 0, maxValue: 1 },
          legend: 'none',
        }}
        rootProps={{ 'data-testid': '1' }}
      />
    </>
  )
}

export default ScatterChart;