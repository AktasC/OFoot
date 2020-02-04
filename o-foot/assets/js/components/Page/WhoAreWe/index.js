import React from 'react';
import PropTypes from 'prop-types';
import {Row, Col, Card} from 'react-bootstrap';

// Import scss
import './who-are-we.scss';

//Data
import presentation from '~/../data/presentation';

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
            {presentation.map((func, i) => (            
                <Row>
                    <Col className="bloc">
                        <Card key={i} style={{ width: '18rem' }}>
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
                </Row>
            ))}            
        </div>
    </div>
);

export default WhoAreWe;
