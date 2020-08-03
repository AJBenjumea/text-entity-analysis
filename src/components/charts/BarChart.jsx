import React from 'react';
import { Chart } from "react-google-charts";

function BarChart({entity}){
  function renderData(data) {
    const colors = ['#E9967A', '#8FBC8F', '#483D8B', '#2F4F4F', '#FF8C00', '#9932CC'];
    let output = [
      [
        'Content Types', 'Types Count',
        { role: 'style' },
        {
          sourceColumn: 0,
          role: 'annotation',
          type: 'string',
          calc: 'stringify',
        },
      ]
    ];

    let typeFreqCount = data.reduce((accum, current) => {
      if (accum[current.type]) {
        accum[current.type] += 1;
      } else {
        accum[current.type] = 1;
      }
      return accum;
    }, {})

    Object.keys(typeFreqCount).forEach(
      (type, index) => output.push([type,typeFreqCount[type], colors[index] || '#A9A9A9', null])
      );

    return output;
  }

  return (
    <>
      <Chart
        width={'500px'}
        height={'300px'}
        chartType="BarChart"
        loader={<div>Loading Chart</div>}
        data={renderData(entity)}
        options={{
          title: 'Entity Type Count of Content',
          chartArea: { width: '50%' },
          legend: { position: 'none' },
          hAxis: {
            title: 'Total',
            minValue: 0,
          },
          vAxis: {
            title: 'Types',
          },
        }}
        // For tests
        rootProps={{ 'data-testid': '3' }}
      />
    </>
  )
}

export default BarChart;