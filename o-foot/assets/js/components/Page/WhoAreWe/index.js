import React from 'react';
import PropTypes from 'prop-types';
import {Row, Col, Card, Container} from 'react-bootstrap';

// Import scss
import './who-are-we.scss';

//Data
import presentation from '~/../data/presentation';

const WhoAreWe = () => (

    <div id="qui-sommes-nous">
        
        <Container>
        
            <div className="sweatband">
                <h2>PARCE QUE C'EST NOTRE PROJEEEEEET !</h2>
            </div>                
            
            <div className="header-title">Créateurs O'Foot</div>
                       
        
            <div className="section">
                <Row>
                {presentation.map((func, i) => (
                    <Col lg={4} md={6} sm={12} xs={12}>
                        <Card key={i}>
                            <Card.Img className ="img" variant="top" src={func.image} />
                            <Card.Body>
                                <Card.Title className="title">{func.name}</Card.Title>
                                <Card.Text className="text">
                                {func.content}
                                </Card.Text>
                                <Card.Link className="role" href="#">{func.role}</Card.Link>
                                <Card.Link className="langage" href="#">{func.langage}</Card.Link>
                            </Card.Body>
                        </Card>
                    </Col>                    
                ))}  
                </Row>          
            </div>
        </Container>
    </div>
);

export default WhoAreWe;

