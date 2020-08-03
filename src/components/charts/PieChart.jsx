import React from 'react';
import { Chart } from "react-google-charts";

function PieChart({ entity, name }) {

  function renderChartData(data) {
    let output = [["Word", "Mentions"]];
    data.forEach(word => {
      output.push([word.name, word.mentions.length || 0])
    })
    return output;
  }

  return (
    <>
            <div>
              <div>
                <h3 className='card-column-title'>{name}</h3>
                <h5 className='card-column-title text-muted'>Word Mentions Count</h5>
              </div>
              <Chart
                className='pie-chart'
                width={'700px'}
                height={'500px'}
                chartType="PieChart"
                loader={<div>Loading Chart...</div>}
                data={renderChartData(entity)}
                options={{
                  legend: 'none',
                  pieSliceText: 'label',
                  pieStartAngle: 100,
                }}
                rootProps={{ 'data-testid': '4' }}
              />
            </div>
    </>
  )
}

export default PieChart;