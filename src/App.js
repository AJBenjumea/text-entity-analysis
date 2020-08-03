import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import { heroData, villianData } from './sample/sampleData';
import { Navbar, Nav, Jumbotron } from 'react-bootstrap';
import EntitiesForm from './components/EntitiesForm';
import Dashboard from './components/Dashboard';
import getEntities from './api/APIUtils';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      HeroEntities: heroData,
      VillianEntities: villianData,
      view: 'main'
    };
    this.getData = this.getData.bind(this);
    this.changeView = this.changeView.bind(this);
  }

  getData(url1, url2) {
    getEntities(url1, url2)
      .then((data) => {
        this.setState({HeroEntities: data[0], VillianEntities: data[1]});
      })
      .then((x) => this.changeView('dashboard'))
      .catch(err => console.log(err))
  }

  changeView(view) {
    this.setState({view: view});
  }

  renderView() {
    let view = this.state.view;

    if (view === 'main') {
      return (
        <Jumbotron>
          <h1>Compare Content Entities</h1>
          <small className="text-muted lead">See how your content stacks up against competitors</small>
          <EntitiesForm scrape={this.getData} changeView={this.changeView}/>
        </Jumbotron>
      )
    } else if (view === 'dashboard') {
      return (
        <Dashboard hero={this.state.HeroEntities} villian={this.state.VillianEntities}/>
      )
    } 
  }

  render() {
    return (
      <>
        <Navbar bg="dark" sticky="top" variant="dark">
          <Navbar.Brand href="">StringMind</Navbar.Brand>
          <Nav className="mr-auto">
            <Nav.Link href="" 
              onClick={() => this.setState({ view:'main' })}>
                Home
            </Nav.Link>
          </Nav>
        </Navbar>
        {this.renderView()}
      </>
    );
  }
}

export default App;