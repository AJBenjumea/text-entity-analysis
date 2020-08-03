import React, { useState } from 'react';
import { Tab, Tabs } from 'react-bootstrap';
import EntityCards from './views/CardsView';
import ChartView from './views/ChartsView';
import PieView from './views/PieView';

function Dashboard({hero, villian}) {
  const [key, setKey] = useState('cards')
  return (
    <div className="tabs">
      <Tabs
        id="controlled-tab-example"
        activeKey={key}
        onSelect={key => setKey(key)}
        >
          <Tab eventKey="cards" title="Entities">
            <EntityCards hero={hero} villian={villian} />
          </Tab>
          <Tab eventKey="charts" title="Types">
            <ChartView hero={hero} villian={villian}/>
          </Tab>
          <Tab eventKey="pie" title="Mentions">
            <PieView hero={hero} villian={villian}/>
          </Tab>
      </Tabs>
    </div>
  )
}

export default Dashboard;