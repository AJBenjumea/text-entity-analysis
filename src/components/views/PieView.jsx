import React from 'react';
import PieChart from '../charts/PieChart';

function PieView({ hero, villian }) {
  return (
    <>
      <div className='data-section-pie'>
        <PieChart entity={hero} name='Hero'/>
        <PieChart entity={villian} name='Competition'/>
      </div>
    </>
  )
}

export default PieView;