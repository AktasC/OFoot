import React from 'react';
import PropTypes from 'prop-types';
import { Container, Row, Col, Card, Butt } from 'react-bootstrap';
import Avatar from 'react-avatar';

// Import scss
import './who-are-we.scss';


const WhoAreWe = () => (
    
    <div id="qui-sommes-nous">
        <header className="header">
            <h1 className="header-h1">
                Mas que un club 
            </h1>
            <div className="">
                <div className="header-title">Créateurs O'Foot</div>
            </div>
        </header>

        <div className="section">
            <Row>
                <Col>
                    <Card style={{ width: '18rem' }}>
                        <Card.Img variant="top" src="holder.js/100px180" />
                        <Card.Body>
                            <Card.Title>Cascao Pedro</Card.Title>
                            <Card.Text>
                            Some quick example text to build on the card title and make up the bulk of
                            the card's content.
                            </Card.Text>
                            <Card.Link href="#">Product Owner</Card.Link>
                            <Card.Link href="#">Symfony</Card.Link>
                        </Card.Body>
                    </Card>
                </Col>
                <Col>
                    <Card style={{ width: '18rem' }}>
                        <Card.Img variant="top" src="holder.js/100px180" />
                        <Card.Body>
                            <Card.Title>Cascao Pedro</Card.Title>
                            <Card.Text>
                            Some quick example text to build on the card title and make up the bulk of
                            the card's content.
                            </Card.Text>
                            <Card.Link href="#">Product Owner</Card.Link>
                            <Card.Link href="#">Symfony</Card.Link>
                        </Card.Body>
                    </Card>
                </Col>
                <Col>
                    <Card style={{ width: '18rem' }}>
                        <Card.Img variant="top" src="holder.js/100px180" />
                        <Card.Body>
                            <Card.Title>Cascao Pedro</Card.Title>
                            <Card.Text>
                            Some quick example text to build on the card title and make up the bulk of
                            the card's content.
                            </Card.Text>
                            <Card.Link href="#">Product Owner</Card.Link>
                            <Card.Link href="#">Symfony</Card.Link>
                        </Card.Body>
                    </Card>
                </Col>
                <Col>
                    <Card style={{ width: '18rem' }}>
                        <Card.Img variant="top" src="holder.js/100px180" />
                        <Card.Body>
                            <Card.Title>Cascao Pedro</Card.Title>
                            <Card.Text>
                            Some quick example text to build on the card title and make up the bulk of
                            the card's content.
                            </Card.Text>
                            <Card.Link href="#">Product Owner</Card.Link>
                            <Card.Link href="#">Symfony</Card.Link>
                        </Card.Body>
                    </Card>
                </Col>
                <Col>
                    <Card style={{ width: '18rem' }}>
                        <Card.Img variant="top" src="holder.js/100px180" />
                        <Card.Body>
                            <Card.Title>Cascao Pedro</Card.Title>
                            <Card.Text>
                            Some quick example text to build on the card title and make up the bulk of
                            the card's content.
                            </Card.Text>
                            <Card.Link href="#">Product Owner</Card.Link>
                            <Card.Link href="#">Symfony</Card.Link>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
        </div>
    </div>
);

export default WhoAreWe;
