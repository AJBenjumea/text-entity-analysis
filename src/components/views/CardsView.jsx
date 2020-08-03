import React from 'react';
import { Card, Badge, Alert } from 'react-bootstrap';

function EntityCards({ hero, villian }) {
  let types = {
    OTHER : 'primary',
    PERSON : 'secondary',
    UNKNOWN: 'success', 
    ORGANIZATION: 'danger', 
    EVENT: 'warning',
    LOCATION: 'warning',
    WORK_OF_ART: 'light',
    CONSUMER_GOOD: 'secondary',
    PHONE_NUMBER:'light',
    ADDRESS:'light',
    DATE:'light',
    NUMBER:'light',
    PRICE:'light'
  }

  return (
      <>
      <div className='data-section-cards'>
        <div className='hero-column'>
          <div>
          <h3 className='card-column-title'>Hero</h3>
          </div>
          {hero.map((word, index) => {
            return (
              <Card className="row" key={`${word.name + word.salience}`}>
                <Card.Body>
                  <Card.Title>{`${index + 1}. `}{word.name}</Card.Title>
                  <Card.Text>
                    <a target='_blank' href={word.metadata.wikipedia_url}>{word.metadata.wikipedia_url ? 'Wikipedia':''}</a>
                  </Card.Text>
                  <Card.Text><b>Salience:</b> {word.salience}</Card.Text>
                </Card.Body>
                <Card.Footer>
                  <small className="text-muted">Type: </small>
                  <Badge variant={types[word.type] || 'light'}>{word.type}</Badge>
                </Card.Footer>
              </Card>
            )
          })}
        </div>

        <div className="villian-column">
          <div>
          <h3 className='card-column-title'>Competition</h3>
          </div>
          {villian.map((word, index) => {
              return (
                <Card className="row" key={`${word.name + word.salience}`}>
                  <Card.Body>
                    <Card.Title>{`${index + 1}. `}{word.name}</Card.Title>
                    <Card.Text>
                      <a target='_blank' href={word.metadata.wikipedia_url}>{word.metadata.wikipedia_url ? 'Wikipedia':''}</a>
                    </Card.Text>
                    <Card.Text><b>Salience:</b> {word.salience}</Card.Text>
                  </Card.Body>
                  <Card.Footer>
                    <small className="text-muted">Type: </small>
                    <Badge variant={types[word.type] || 'light'}>{word.type}</Badge>
                  </Card.Footer>
                </Card>
              )
          })}
        </div>
      </div>
    </>
  )
}

export default EntityCards;