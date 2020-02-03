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
                Mas que un projecto
            </h1>
            <div className="">
                <div className="header-title">Créateurs O'Foot</div>
            </div>
        </header>

        <div className="section">
            <Row>
                <Col>
                    <Card style={{ width: '18rem' }}>
                        <Card.Img className ="img" variant="top" src="img/presentation/Marine.jpg" />
                        <Card.Body>
                            <Card.Title className="title">Marine Berthier</Card.Title>
                            <Card.Text className="text">
                            Some quick example text to build on the card title and make up the bulk of
                            the card's content.
                            </Card.Text>
                            <Card.Link className="role" href="#">Scrum Master</Card.Link>
                            <Card.Link className="langage" href="#">React</Card.Link>
                        </Card.Body>
                    </Card>
                </Col>
                <Col>
                    <Card style={{ width: '18rem' }}>
                        <Card.Img variant="top" src="img/presentation/Mickael.jpg" />
                        <Card.Body>
                            <Card.Title className="title">Rassicot Mickaël</Card.Title>
                            <Card.Text className="text">
                            Some quick example text to build on the card title and make up the bulk of
                            the card's content.
                            </Card.Text>
                            <Card.Link href="#">Lead Front</Card.Link>
                            <Card.Link href="#">React</Card.Link>
                        </Card.Body>
                    </Card>
                </Col>
                <Col>
                    <Card style={{ width: '18rem' }}>
                        <Card.Img variant="top" src="img/presentation/Cebrail.jpg" />
                        <Card.Body>
                            <Card.Title className="title">Aktas Cebrail</Card.Title>
                            <Card.Text className="text">
                            Some quick example text to build on the card title and make up the bulk of
                            the card's content.
                            </Card.Text>
                            <Card.Link href="#">Git Master</Card.Link>
                            <Card.Link href="#">Symfony / React</Card.Link>
                        </Card.Body>
                    </Card>
                </Col>
                <Col>
                    <Card style={{ width: '18rem' }}>
                        <Card.Img variant="top" src="img/presentation/Berenger.jpg" />
                        <Card.Body>
                            <Card.Title className="title">Berenger Benoit</Card.Title>
                            <Card.Text className="text">
                            Some quick example text to build on the card title and make up the bulk of
                            the card's content.
                            </Card.Text>
                            <Card.Link href="#">Lead Back</Card.Link>
                            <Card.Link href="#">Symfony</Card.Link>
                        </Card.Body>
                    </Card>
                </Col>
                <Col>
                    <Card style={{ width: '18rem' }}>
                        <Card.Img variant="top" src="img/presentation/Pedro.jpg" />
                        <Card.Body>
                            <Card.Title className="title">Cascao Pedro</Card.Title>
                            <Card.Text className="text">
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
