// == Import : npm
import React from 'react';
import { Col, Row, Container } from 'react-bootstrap';


const Card = ( playerId, playersList ) => { 

  console.log('from card', playerId);
  console.log('from card', playersList);

  return (

    <div id="card">

      <Container>
        <div className="sweatband">
          <h2>FICHE JOUEUR</h2>
        </div>

        <Row>
          <Col>
            Ceci est une card
          </Col>
        </Row>
        
      </Container>

    </div>
  )
}


// == Export
export default Card;

