import React from 'react';
import {Form, Button, Row, Col, Spinner} from 'react-bootstrap';

class EntitiesForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      heroUrl: '',
      villianUrl: '',
      spinner:false
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({[event.target.name]: event.target.value});
  }

  handleSubmit(event) {
    event.preventDefault();
    this.setState({spinner: true})
    this.props.scrape(this.state.heroUrl, this.state.villianUrl);
    // Comment out the line above and uncomment the one below to use sample data
    // this.props.changeView('dashboard');
  }

  renderView() {
    if (this.state.spinner === false) {
      return (
        <Row>
          <Col md={{ span: 8, offset: 2 }}>
            <Form className="mainForm" onSubmit={this.handleSubmit}>
              <Form.Group controlId="formHeroUrl">
                <Form.Label>Hero</Form.Label>
                <Form.Control 
                  name='heroUrl' 
                  type="text" 
                  placeholder="your-site.com" 
                  value={this.state.heroUrl} 
                  onChange={this.handleChange} 
                />
                <Form.Text className="text-muted">
                  Enter the url of the page you'd like to check
                </Form.Text>
              </Form.Group>
          
              <Form.Group controlId="formVillianUrl">
                <Form.Label>Villain</Form.Label>
                <Form.Control 
                  name='villianUrl' 
                  type="text" 
                  placeholder="villain-site.com" 
                  value={this.state.villianUrl} 
                  onChange={this.handleChange} 
                />
                <Form.Text className="text-muted">
                  Your competitors site
                </Form.Text>
              </Form.Group>
              <Button variant="primary" type="submit" >
                Submit
              </Button>
            </Form>
          </Col>
        </Row> 
      )
    } 

    return (
      <>
        <div className='spinner-icon'>
          <Spinner animation="border" role="status">
            <span className="sr-only">Loading...</span>
          </Spinner>
        </div>
      </>
    )
  }

  render() {
    return (
      <>
      {this.renderView()}
      </>
    )
  }
}

export default EntitiesForm;