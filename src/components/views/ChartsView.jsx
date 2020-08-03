import React from 'react';
import ScatterChart from '../charts/ScatterChart';
import BarChart from '../charts/BarChart';

function ChartsView({hero, villian}) {
  return (
    <>
      <div className='data-section-bar'>
        <div className='hero-column-bar'>
          <div>
          <h3 className='card-column-title'>Hero</h3>
          </div>
          <ScatterChart entity={hero}/>
          <BarChart entity={hero}/>
        </div>
        <div className='villan-column-bar'>
          <div>
          <h3 className='card-column-title'>Competition</h3>
          </div>
          <ScatterChart entity={villian}/>
          <BarChart entity={villian}/>
        </div>
      </div>
    </>
  )
}

export default ChartsView;